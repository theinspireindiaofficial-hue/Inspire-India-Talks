import type { VercelRequest, VercelResponse } from '@vercel/node';
import { getServiceClient } from './_lib/supabase.js';
import { setResendContactUnsubscribed } from './_lib/email.js';

const SITE_ORIGIN =
  process.env.PUBLIC_SITE_ORIGIN || 'https://www.inspireindiatalks.com';

/**
 * One-click unsubscribe. Every newsletter email must link here with the
 * subscriber's unsubscribe_token. Required for CAN-SPAM / DPDP compliance.
 */
export default async function handler(req: VercelRequest, res: VercelResponse) {
  const token =
    typeof req.query.token === 'string' ? req.query.token : undefined;

  const redirect = (status: 'success' | 'invalid' | 'error') =>
    res.redirect(302, `${SITE_ORIGIN}/newsletter/unsubscribed?status=${status}`);

  if (!token) return redirect('invalid');

  try {
    const supabase = getServiceClient();

    const { data: row, error: selErr } = await supabase
      .from('subscribers')
      .select('id, email')
      .eq('unsubscribe_token', token)
      .maybeSingle();

    if (selErr) throw selErr;
    if (!row) return redirect('invalid');

    await setResendContactUnsubscribed(row.email);

    const { error: updErr } = await supabase
      .from('subscribers')
      .update({
        status: 'unsubscribed',
        unsubscribed_at: new Date().toISOString(),
      })
      .eq('id', row.id);

    if (updErr) throw updErr;

    return redirect('success');
  } catch (err) {
    console.error('[unsubscribe] error:', err);
    return redirect('error');
  }
}
