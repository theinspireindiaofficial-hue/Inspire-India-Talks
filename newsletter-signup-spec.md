# Newsletter Signup — Architecture & Spec

**Project:** Inspire India Talks
**Goal:** Let visitors subscribe on-site; collect their data reliably and lawfully; send a weekly newsletter.
**Status:** Plan for review. Sending provider to be decided later.

---

## 1. Guiding principles

- **Collect the minimum.** Fewer fields = higher conversion and lower compliance burden.
- **Double opt-in.** No one is "subscribed" until they click a confirmation link. This proves consent, blocks fake/typo emails, and protects sender reputation.
- **Own the data.** Store subscribers in our own Supabase database, not locked inside a third-party form tool. We can switch email providers anytime.

---

## 2. Data collected

| Field | Required | Purpose |
|---|---|---|
| Email | Yes | The subscription itself; unique key |
| First name | No | Personalization ("Hi Rahul") |
| Consent | Yes | Explicit checkbox — required under India's DPDP Act 2023 |

**Deliberately NOT collected:** phone, age, city, gender. Add later only if we have a concrete segmentation plan — each extra field lowers signups.

**Metadata stored automatically** (not asked of the user): signup timestamp, confirmation timestamp, status, source page, and the consent text shown at signup (for audit).

---

## 3. Tech fit (uses the existing stack)

Nothing new needs to be introduced except an email-sending provider.

- **Frontend form** — React + existing Radix/shadcn UI + Zod validation (already installed)
- **API** — Vercel serverless functions in `/api` (same pattern as `event.ts`, `personality.ts`)
- **Database** — Supabase (already connected)
- **Sending** — a transactional/bulk email provider (Resend / Brevo / Mailchimp) — **decided later**

---

## 4. Database schema (Supabase)

Table: `subscribers`

| Column | Type | Notes |
|---|---|---|
| `id` | uuid | primary key, default `gen_random_uuid()` |
| `email` | text | **unique**, not null, lowercased |
| `first_name` | text | nullable |
| `status` | text | `pending` \| `confirmed` \| `unsubscribed`; default `pending` |
| `confirm_token` | text | random token for the confirmation link |
| `source` | text | which page/campaign they signed up from |
| `consent_text` | text | exact wording of the consent shown |
| `created_at` | timestamptz | default `now()` |
| `confirmed_at` | timestamptz | set when they confirm |
| `unsubscribed_at` | timestamptz | set when they unsubscribe |

- Unique index on `email` so re-signups upsert instead of erroring.
- Enable **Row Level Security**; only the server (service role key) writes. The public/anon key must NOT be able to read the subscriber list.

---

## 5. The flow (double opt-in)

```
Visitor fills form
        │
        ▼
POST /api/subscribe   ──►  validate (Zod) ──► upsert row as `pending`
        │                                     generate confirm_token
        │
        ▼
Send "Confirm your subscription" email  (link → /api/confirm?token=…)
        │
        ▼
Visitor clicks link
        │
        ▼
GET /api/confirm  ──►  match token ──► set status=`confirmed`, confirmed_at=now()
        │
        ▼
"You're in!" thank-you page
```

Weekly send goes only to rows where `status = 'confirmed'`.

---

## 6. API endpoints to build

1. **`POST /api/subscribe`**
   - Body: `{ email, firstName?, consent: true, source? }`
   - Validate with Zod; reject if consent not `true` or email malformed.
   - Lowercase email; upsert into `subscribers` (on conflict do nothing / refresh token).
   - Generate `confirm_token`; send confirmation email.
   - Return generic success ("Check your inbox") — don't reveal whether the email already existed.

2. **`GET /api/confirm?token=…`**
   - Look up token; if valid and pending → set `confirmed`.
   - Redirect to a friendly "You're subscribed" page.

3. **`GET /api/unsubscribe?token=…`** (needed for compliance)
   - One-click unsubscribe; set `unsubscribed`. Every newsletter must link to this.

---

## 7. Compliance checklist (India DPDP Act + email best practice)

- [ ] Explicit consent checkbox, unticked by default
- [ ] Confirmation email (double opt-in) before any newsletter is sent
- [ ] Clear unsubscribe link in every email
- [ ] A short privacy note near the form ("We'll only email you the weekly newsletter. Unsubscribe anytime.")
- [ ] Store the consent wording + timestamp for audit
- [ ] Don't sell/share the list; don't email people who never confirmed

---

## 8. Sending — decide before launch

Bulk email **cannot** go through a personal Gmail account (rate limits + poor deliverability). Options, to choose later:

| Provider | Best for | Notes |
|---|---|---|
| **Resend** | Developer-first, Vercel-native | Cleanest code fit; generous free tier; you build/send templates in code |
| **Brevo** | Non-dev sending | Visual campaign editor, free tier includes contacts |
| **Mailchimp** | Marketing features | Most polished editor; pricier as list grows |

Whichever we pick, the subscriber list stays in Supabase and we sync/export to the provider — so switching later is cheap.

**Also required for good deliverability:** verify a sending domain (e.g. `news@inspireindiatalks.com`) with SPF, DKIM and DMARC records. Sending from a verified domain, not Gmail, is what keeps newsletters out of spam.

---

## 9. Suggested build order

1. Create the `subscribers` table in Supabase.
2. Build the signup form component + `/api/subscribe` (store as `pending`).
3. Add `/api/confirm` + thank-you page (double opt-in working end-to-end).
4. Pick sending provider; wire confirmation + weekly emails; add `/api/unsubscribe`.
5. Verify sending domain (SPF/DKIM/DMARC) before first real send.

Steps 1–3 give a working, compliant collection system even before the sending provider is chosen.
