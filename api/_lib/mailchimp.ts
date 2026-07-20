import { createHash } from 'crypto';

/**
 * Mailchimp Marketing API integration.
 *
 * Adds subscribers to a Mailchimp audience. With status "pending", Mailchimp
 * sends its own double opt-in confirmation email and handles unsubscribes, so
 * the site doesn't need its own confirm/unsubscribe endpoints.
 *
 * Required environment variables (set in Vercel + local .env):
 *   MAILCHIMP_API_KEY       e.g. 8f2c...-us21   (the "-usXX" suffix is the data center)
 *   MAILCHIMP_AUDIENCE_ID   the audience / list id (Audience > Settings > Audience ID)
 *   MAILCHIMP_SERVER_PREFIX optional; only needed if it can't be derived from the key
 */

function getConfig(): { apiKey: string; audienceId: string; dc: string } {
  const apiKey = process.env.MAILCHIMP_API_KEY;
  const audienceId = process.env.MAILCHIMP_AUDIENCE_ID;
  if (!apiKey || !audienceId) {
    throw new Error(
      'Missing MAILCHIMP_API_KEY or MAILCHIMP_AUDIENCE_ID environment variables.'
    );
  }
  const explicit = process.env.MAILCHIMP_SERVER_PREFIX;
  const dashIdx = apiKey.lastIndexOf('-');
  const dc = explicit || (dashIdx >= 0 ? apiKey.slice(dashIdx + 1) : '');
  if (!dc) {
    throw new Error(
      'Could not determine Mailchimp server prefix; set MAILCHIMP_SERVER_PREFIX (e.g. "us21").'
    );
  }
  return { apiKey, audienceId, dc };
}

/** Mailchimp uses HTTP Basic auth: any username + the API key as the password. */
function authHeader(apiKey: string): string {
  return 'Basic ' + Buffer.from(`key:${apiKey}`).toString('base64');
}

export interface AddSubscriberOptions {
  /** false = add as "subscribed" (skip opt-in). Default true = "pending" (double opt-in). */
  doubleOptIn?: boolean;
  /** Optional tags, e.g. the page the signup came from. */
  tags?: string[];
}

/**
 * Add (or refresh) a subscriber in the Mailchimp audience.
 * Idempotent: existing members are treated as success.
 */
export async function addSubscriberToMailchimp(
  email: string,
  options: AddSubscriberOptions = {}
): Promise<void> {
  const { apiKey, audienceId, dc } = getConfig();
  const status = options.doubleOptIn === false ? 'subscribed' : 'pending';

  const res = await fetch(
    `https://${dc}.api.mailchimp.com/3.0/lists/${audienceId}/members`,
    {
      method: 'POST',
      headers: {
        Authorization: authHeader(apiKey),
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        email_address: email,
        status,
        ...(options.tags && options.tags.length ? { tags: options.tags } : {}),
      }),
    }
  );

  if (res.ok) return;

  const data = (await res.json().catch(() => ({}))) as {
    title?: string;
    detail?: string;
  };

  // Already on the list (subscribed/pending) -> treat as success.
  if (res.status === 400 && data.title === 'Member Exists') return;

  throw new Error(
    `Mailchimp add failed (${res.status}): ${data.title ?? ''} ${data.detail ?? ''}`.trim()
  );
}

/** md5 of the lowercased email — Mailchimp's subscriber hash, handy for future PUT/GET calls. */
export function subscriberHash(email: string): string {
  return createHash('md5').update(email.trim().toLowerCase()).digest('hex');
}
