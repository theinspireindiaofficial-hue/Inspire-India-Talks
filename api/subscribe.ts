import type { VercelRequest, VercelResponse } from '@vercel/node';
import { z } from 'zod';
import { addSubscriberToMailchimp, MailchimpApiError } from './_lib/mailchimp.js';
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
    // Keep provider details out of the browser, but return a stable diagnostic
    // code that makes production failures identifiable in the Network panel.
    if (err instanceof MailchimpApiError) {
      const code =
        err.status === 401
          ? 'mailchimp_auth_failed'
          : err.status === 403
            ? 'mailchimp_permission_denied'
            : err.status === 404
              ? 'mailchimp_audience_not_found'
              : 'mailchimp_request_failed';
      return res.status(502).json({
        error: 'Newsletter signup is temporarily unavailable. Please try again later.',
        code,
      });
    }

    return res
      .status(503)
      .json({
        error: 'Newsletter signup is temporarily unavailable. Please try again later.',
        code: 'mailchimp_not_configured',
      });
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
