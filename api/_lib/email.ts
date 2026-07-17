import type { VercelRequest } from '@vercel/node';

/**
 * Email sending via Resend's REST API (https://resend.com/docs/api-reference).
 *
 * Uses fetch directly so there's no extra dependency to install. Sending stays
 * OFF until you set the two env vars below, so nothing breaks before you're ready:
 *
 *   NEWSLETTER_EMAIL_ENABLED=true
 *   RESEND_API_KEY=re_xxx
 *   NEWSLETTER_FROM_EMAIL="Inspire India Talks <news@inspireindiatalks.com>"
 *
 * While disabled, the confirmation link is logged server-side and (in dev) returned
 * to the caller so the double opt-in flow can be tested without a provider.
 */

const SITE_ORIGIN =
  process.env.PUBLIC_SITE_ORIGIN || 'https://www.inspireindiatalks.com';

const FROM_EMAIL =
  process.env.NEWSLETTER_FROM_EMAIL ||
  'Inspire India Talks <onboarding@resend.dev>';

export function buildConfirmUrl(token: string): string {
  return `${SITE_ORIGIN}/api/confirm?token=${encodeURIComponent(token)}`;
}

export function buildUnsubscribeUrl(token: string): string {
  return `${SITE_ORIGIN}/api/unsubscribe?token=${encodeURIComponent(token)}`;
}

export interface ConfirmationEmailArgs {
  to: string;
  firstName?: string | null;
  confirmUrl: string;
}

function confirmationHtml(firstName: string | null | undefined, confirmUrl: string): string {
  const hi = firstName ? `Hi ${escapeHtml(firstName)},` : 'Hi there,';
  return `
  <div style="font-family:Arial,Helvetica,sans-serif;max-width:520px;margin:0 auto;color:#1a1a1a">
    <h2 style="margin:0 0 16px">Confirm your subscription</h2>
    <p style="font-size:15px;line-height:1.6">${hi}</p>
    <p style="font-size:15px;line-height:1.6">
      Thanks for subscribing to the <strong>Inspire India Talks</strong> weekly newsletter.
      Please confirm your email address to start receiving it.
    </p>
    <p style="margin:28px 0">
      <a href="${confirmUrl}"
         style="background:#e11d48;color:#fff;text-decoration:none;padding:12px 24px;border-radius:8px;font-size:15px;display:inline-block">
        Confirm subscription
      </a>
    </p>
    <p style="font-size:13px;color:#666;line-height:1.6">
      If the button doesn't work, copy and paste this link into your browser:<br>
      <a href="${confirmUrl}" style="color:#e11d48">${confirmUrl}</a>
    </p>
    <p style="font-size:13px;color:#999;line-height:1.6;margin-top:24px">
      If you didn't request this, you can safely ignore this email.
    </p>
  </div>`;
}

function escapeHtml(str: string): string {
  return str
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;');
}

/**
 * Send the double opt-in confirmation email.
 * Returns { sent } and, in non-production while disabled, the confirmUrl for testing.
 */
export async function sendConfirmationEmail(
  args: ConfirmationEmailArgs
): Promise<{ sent: boolean; devConfirmUrl?: string }> {
  const enabled = process.env.NEWSLETTER_EMAIL_ENABLED === 'true';
  const apiKey = process.env.RESEND_API_KEY;

  if (!enabled || !apiKey) {
    // Not wired yet — log and (in dev) expose the link for manual testing.
    console.log(`[newsletter] confirmation link for ${args.to}: ${args.confirmUrl}`);
    return {
      sent: false,
      devConfirmUrl:
        process.env.NODE_ENV !== 'production' ? args.confirmUrl : undefined,
    };
  }

  const res = await fetch('https://api.resend.com/emails', {
    method: 'POST',
    headers: {
      Authorization: `Bearer ${apiKey}`,
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      from: FROM_EMAIL,
      to: [args.to],
      subject: 'Confirm your subscription to Inspire India Talks',
      html: confirmationHtml(args.firstName, args.confirmUrl),
    }),
  });

  if (!res.ok) {
    const detail = await res.text().catch(() => '');
    throw new Error(`Resend send failed (${res.status}): ${detail}`);
  }

  return { sent: true };
}

/** Best-effort source label from the request (page that submitted the form). */
export function readSource(req: VercelRequest): string | undefined {
  const body = (req.body ?? {}) as Record<string, unknown>;
  if (typeof body.source === 'string' && body.source.length <= 200) {
    return body.source;
  }
  const referer = req.headers['referer'];
  return typeof referer === 'string' ? referer.slice(0, 200) : undefined;
}
