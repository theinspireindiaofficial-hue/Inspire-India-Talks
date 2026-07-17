import type { VercelRequest, VercelResponse } from '@vercel/node';
import { getServiceClient } from './_lib/supabase.js';

const SITE_ORIGIN =
  process.env.PUBLIC_SITE_ORIGIN || 'https://www.inspireindiatalks.com';

/**
 * Double opt-in confirmation. The link in the confirmation email points here.
 * On success the subscriber is flipped to `confirmed` and the browser is
 * redirected to a friendly thank-you page.
 */
export default async function handler(req: VercelRequest, res: VercelResponse) {
  const token =
    typeof req.query.token === 'string' ? req.query.token : undefined;

  const redirect = (status: 'success' | 'invalid' | 'error') =>
    res.redirect(302, `${SITE_ORIGIN}/newsletter/confirmed?status=${status}`);

  if (!token) return redirect('invalid');

  try {
    const supabase = getServiceClient();

    const { data: row, error: selErr } = await supabase
      .from('subscribers')
      .select('id, status')
      .eq('confirm_token', token)
      .maybeSingle();

    if (selErr) throw selErr;
    if (!row) return redirect('invalid');

    // Already confirmed -> still show success (idempotent).
    if (row.status === 'confirmed') return redirect('success');

    const { error: updErr } = await supabase
      .from('subscribers')
      .update({ status: 'confirmed', confirmed_at: new Date().toISOString() })
      .eq('id', row.id);

    if (updErr) throw updErr;

    return redirect('success');
  } catch (err) {
    console.error('[confirm] error:', err);
    return redirect('error');
  }
}
