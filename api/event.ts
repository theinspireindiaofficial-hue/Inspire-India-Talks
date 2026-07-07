import { readFileSync } from 'fs';
import { join } from 'path';
import type { VercelRequest, VercelResponse } from '@vercel/node';

interface EventOG {
    id: string;
    slug: string;
    title: string;
    tagline: string;
    coverImage: string;
    shortDescription: string;
    date?: string;
    location?: string;
}

const SITE_ORIGIN = 'https://www.inspireindiatalks.com';

/** Escape special HTML characters to prevent XSS in meta tags */
function escapeHtml(str: string): string {
    if (!str) return '';
    return str
        .replace(/&/g, '&amp;')
        .replace(/"/g, '&quot;')
        .replace(/</g, '&lt;')
        .replace(/>/g, '&gt;');
}

/** Serialize a JSON-LD object safely for embedding inside a <script> tag */
function jsonLd(obj: unknown): string {
    return JSON.stringify(obj)
        .replace(/</g, '\\u003c')
        .replace(/>/g, '\\u003e')
        .replace(/&/g, '\\u0026');
}

/** Best-effort conversion of a human date ("March 14, 2026", "23rd April 2026") to ISO YYYY-MM-DD. */
function toIsoDate(raw?: string): string {
    if (!raw) return '';
    const cleaned = raw.replace(/(\d+)(st|nd|rd|th)/gi, '$1').trim();
    const t = Date.parse(cleaned);
    if (Number.isNaN(t)) return '';
    const d = new Date(t);
    const mo = String(d.getMonth() + 1).padStart(2, '0');
    const da = String(d.getDate()).padStart(2, '0');
    return `${d.getFullYear()}-${mo}-${da}`;
}

export default async function handler(req: VercelRequest, res: VercelResponse) {
    const { slug: rawSlug } = req.query;

    const slug = typeof rawSlug === 'string'
        ? rawSlug.replace(/\/$/, '').trim().toLowerCase()
        : '';

    if (!slug) {
        return res.status(400).send('Slug is required');
    }

    res.setHeader('X-OG-Event-Slug', slug);
    res.setHeader('X-OG-Timestamp', new Date().toISOString());

    try {
        const indexPath = join(process.cwd(), 'dist', 'index.html');
        let html = readFileSync(indexPath, 'utf8');

        const ogDataPath = join(process.cwd(), 'dist', 'events-og-data.json');
        const ogData: EventOG[] = JSON.parse(readFileSync(ogDataPath, 'utf8'));

        const event = ogData.find(e => e.slug.toLowerCase() === slug);

        if (event) {
            res.setHeader('X-OG-Match', 'true');
            res.setHeader('X-OG-Event', event.title);

            const title = escapeHtml(event.title || 'Inspire India Talks Event');
            const tagline = escapeHtml(event.tagline || '');
            const shortDescription = escapeHtml(event.shortDescription || tagline);
            const image = event.coverImage || '/logo.png';

            const fullTitle = `${title} — Inspire India Talks`;
            const description = shortDescription;
            const imageUrl = image.startsWith('http') ? image : `${SITE_ORIGIN}${image}`;
            const pageUrl = `${SITE_ORIGIN}/events/${event.slug}`;
            const isoDate = toIsoDate(event.date);

            html = html.replace(/<title>.*?<\/title>/, `<title>${fullTitle}</title>`);

            html = html.replace(
                /<meta\s+name="description"\s+content="[^"]*"\s*\/?>/,
                `<meta name="description" content="${description}" />`
            );

            // Make the canonical self-referencing (point to this page, not the homepage)
            html = html.replace(
                /<link\s+rel="canonical"\s+href="[^"]*"\s*\/?>/,
                `<link rel="canonical" href="${pageUrl}" />`
            );

            const ogInjection = `<!-- OG_INJECT_START -->
  <meta property="og:title" content="${fullTitle}" />
  <meta property="og:description" content="${description}" />
  <meta property="og:image" content="${imageUrl}" />
  <meta property="og:url" content="${pageUrl}" />
  <meta property="og:type" content="article" />
  <meta property="og:site_name" content="Inspire India Talks" />
  <meta name="twitter:card" content="summary_large_image" />
  <meta name="twitter:title" content="${fullTitle}" />
  <meta name="twitter:description" content="${description}" />
  <meta name="twitter:image" content="${imageUrl}" />
  <!-- OG_INJECT_END -->`;

            html = html.replace(
                /<!-- OG_INJECT_START -->[\s\S]*?<!-- OG_INJECT_END -->/,
                ogInjection
            );

            // Inject schema.org Event structured data
            const eventLd: Record<string, unknown> = {
                '@context': 'https://schema.org',
                '@type': 'Event',
                name: event.title,
                description: event.shortDescription || event.tagline,
                image: [imageUrl],
                url: pageUrl,
                eventStatus: 'https://schema.org/EventScheduled',
                organizer: { '@type': 'Organization', name: 'Inspire India Talks', url: SITE_ORIGIN },
            };
            if (isoDate) eventLd.startDate = isoDate;
            if (event.location) {
                eventLd.location = { '@type': 'Place', name: event.location };
            }

            html = html.replace(
                /<!-- LDJSON_INJECT_START -->[\s\S]*?<!-- LDJSON_INJECT_END -->/,
                `<!-- LDJSON_INJECT_START -->\n  <script type="application/ld+json">${jsonLd(eventLd)}</script>\n  <!-- LDJSON_INJECT_END -->`
            );
        } else {
            res.setHeader('X-OG-Match', 'false');
        }

        res.setHeader('Content-Type', 'text/html; charset=utf-8');
        res.setHeader('Cache-Control', 'public, max-age=3600, s-maxage=3600');

        return res.status(200).send(html);
    } catch (error) {
        res.setHeader('X-OG-Error', 'true');
        try {
            const indexPath = join(process.cwd(), 'dist', 'index.html');
            return res.status(200).send(readFileSync(indexPath, 'utf8'));
        } catch (e) {
            return res.status(500).send('Internal Server Error');
        }
    }
}
