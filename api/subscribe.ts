import type { VercelRequest, VercelResponse } from '@vercel/node';
import { z } from 'zod';
import { addSubscriberToMailchimp } from './_lib/mailchimp.js';
import { getServiceClient } from './_lib/supabase.js';
import { readSource } from './_lib/email.js';

const BodySchema = z.object({
  email: z.string().trim().toLowerCase().email().max(254),
  source: z.string().max(200).optional(),
});

/**
 * Newsletter signup. Adds the email to the Mailchimp audience with double opt-in
 * (Mailchimp sends the confirmation email and manages unsubscribes). A copy is
 * also written to Supabase as a best-effort backup so we keep our own list.
 */
export default async function handler(req: VercelRequest, res: VercelResponse) {
  if (req.method !== 'POST') {
    res.setHeader('Allow', 'POST');
    return res.status(405).json({ error: 'Method not allowed' });
  }

  const parsed = BodySchema.safeParse(req.body ?? {});
  if (!parsed.success) {
    return res.status(400).json({
      error: 'Invalid submission',
      details: parsed.error.flatten().fieldErrors,
    });
  }

  const email = parsed.data.email;
  const source = parsed.data.source || readSource(req) || null;

  try {
    // Primary: add to Mailchimp (double opt-in). Mailchimp emails the confirmation.
    await addSubscriberToMailchimp(email, {
      doubleOptIn: true,
      tags: source ? [source] : undefined,
    });
  } catch (err) {
    console.error('[subscribe] mailchimp error:', err);
    return res
      .status(500)
      .json({ error: 'Something went wrong. Please try again.' });
  }

  // Best-effort backup to Supabase — never blocks the signup.
  try {
    const supabase = getServiceClient();
    await supabase
      .from('subscribers')
      .upsert(
        { email, status: 'pending', source, consent_text: 'Newsletter signup form' },
        { onConflict: 'email' }
      );
  } catch (err) {
    console.error('[subscribe] supabase backup failed (non-fatal):', err);
  }

  return res.status(200).json({ ok: true });
}
