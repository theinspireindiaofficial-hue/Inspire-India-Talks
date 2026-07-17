import type { VercelRequest, VercelResponse } from '@vercel/node';
import { randomUUID } from 'crypto';
import { z } from 'zod';
import { getServiceClient } from './_lib/supabase';
import {
  buildConfirmUrl,
  readSource,
  sendConfirmationEmail,
} from './_lib/email';

const CONSENT_NOTE = 'Implicit opt-in via website newsletter signup form.';

const BodySchema = z.object({
  email: z.string().trim().toLowerCase().email().max(254),
  source: z.string().max(200).optional(),
});

export default async function handler(req: VercelRequest, res: VercelResponse) {
  if (req.method !== 'POST') {
    res.setHeader('Allow', 'POST');
    return res.status(405).json({ error: 'Method not allowed' });
  }

  // Parse + validate
  const parsed = BodySchema.safeParse(req.body ?? {});
  if (!parsed.success) {
    return res.status(400).json({
      error: 'Invalid submission',
      details: parsed.error.flatten().fieldErrors,
    });
  }

  const email = parsed.data.email;
  const source = parsed.data.source || readSource(req) || null;

  const confirmToken = randomUUID();

  try {
    const supabase = getServiceClient();

    // Is this email already known?
    const { data: existing, error: selErr } = await supabase
      .from('subscribers')
      .select('id, status')
      .eq('email', email)
      .maybeSingle();

    if (selErr) throw selErr;

    // Already confirmed -> nothing to do. Respond generically (don't leak membership).
    if (existing && existing.status === 'confirmed') {
      return res.status(200).json({ ok: true });
    }

    if (existing) {
      // Pending or previously unsubscribed -> refresh token, reset to pending.
      const { error: updErr } = await supabase
        .from('subscribers')
        .update({
          status: 'pending',
          confirm_token: confirmToken,
          source,
          consent_text: CONSENT_NOTE,
          unsubscribed_at: null,
        })
        .eq('id', existing.id);
      if (updErr) throw updErr;
    } else {
      // New subscriber
      const { error: insErr } = await supabase.from('subscribers').insert({
        email,
        status: 'pending',
        confirm_token: confirmToken,
        source,
        consent_text: CONSENT_NOTE,
      });
      if (insErr) throw insErr;
    }

    // Send (or, until a provider is wired, log) the confirmation link.
    const confirmUrl = buildConfirmUrl(confirmToken);
    const { devConfirmUrl } = await sendConfirmationEmail({
      to: email,
      confirmUrl,
    });

    return res.status(200).json({
      ok: true,
      ...(devConfirmUrl ? { devConfirmUrl } : {}),
    });
  } catch (err) {
    console.error('[subscribe] error:', err);
    return res
      .status(500)
      .json({ error: 'Something went wrong. Please try again.' });
  }
}
