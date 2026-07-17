import { createClient, type SupabaseClient } from '@supabase/supabase-js';

/**
 * Server-side Supabase client for API routes.
 *
 * Uses the SERVICE ROLE key, which bypasses Row Level Security. This must only
 * ever be used inside serverless functions (never shipped to the browser),
 * because the `subscribers` table has RLS enabled with no public policies.
 *
 * Required environment variables (set in the Vercel dashboard):
 *   - SUPABASE_URL                 e.g. https://mmsyicktcybmvxjkejpw.supabase.co
 *   - SUPABASE_SERVICE_ROLE_KEY    the project's service_role secret
 */
let cached: SupabaseClient | null = null;

export function getServiceClient(): SupabaseClient {
  if (cached) return cached;

  const url = process.env.SUPABASE_URL;
  const key = process.env.SUPABASE_SERVICE_ROLE_KEY;

  if (!url || !key) {
    throw new Error(
      'Missing SUPABASE_URL or SUPABASE_SERVICE_ROLE_KEY environment variables.'
    );
  }

  cached = createClient(url, key, {
    auth: { persistSession: false, autoRefreshToken: false },
  });
  return cached;
}
