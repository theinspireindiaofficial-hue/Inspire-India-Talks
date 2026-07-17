import type { VercelRequest } from '@vercel/node';

/**
 * Email sending — provider not chosen yet.
 *
 * Right now this only logs the confirmation link server-side and, in non-production,
 * returns it so the flow can be tested end-to-end without a mail provider.
 *
 * When a provider is picked (Resend / Brevo / Mailchimp), implement the send inside
 * `sendConfirmationEmail` and set NEWSLETTER_EMAIL_ENABLED=true. No other code needs
 * to change — the subscribe endpoint already calls this function.
 */

const SITE_ORIGIN =
  process.env.PUBLIC_SITE_ORIGIN || 'https://www.inspireindiatalks.com';

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

/**
 * Send the double opt-in confirmation email.
 * Returns the confirmUrl only in non-production so it can be surfaced for testing.
 */
export async function sendConfirmationEmail(
  args: ConfirmationEmailArgs
): Promise<{ sent: boolean; devConfirmUrl?: string }> {
  const enabled = process.env.NEWSLETTER_EMAIL_ENABLED === 'true';

  if (!enabled) {
    // No provider wired yet — log and (in dev) expose the link for manual testing.
    console.log(
      `[newsletter] confirmation link for ${args.to}: ${args.confirmUrl}`
    );
    return {
      sent: false,
      devConfirmUrl:
        process.env.NODE_ENV !== 'production' ? args.confirmUrl : undefined,
    };
  }

  // TODO: implement once a provider is chosen. Example (Resend):
  //
  //   const { Resend } = await import('resend');
  //   const resend = new Resend(process.env.RESEND_API_KEY);
  //   await resend.emails.send({
  //     from: 'Inspire India Talks <news@inspireindiatalks.com>',
  //     to: args.to,
  //     subject: 'Confirm your subscription',
  //     html: `Hi ${args.firstName ?? 'there'}, please confirm: <a href="${args.confirmUrl}">Confirm</a>`,
  //   });

  throw new Error(
    'NEWSLETTER_EMAIL_ENABLED is true but no email provider is implemented in sendConfirmationEmail().'
  );
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
