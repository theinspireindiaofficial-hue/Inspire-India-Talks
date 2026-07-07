import { readFileSync } from 'fs';
import { join } from 'path';
import type { VercelRequest, VercelResponse } from '@vercel/node';

interface BusinessInsightOG {
    id: string;
    title: string;
    excerpt: string;
    image: string;
    category: string;
    date: string;
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

export default async function handler(req: VercelRequest, res: VercelResponse) {
    const { id: rawId } = req.query;

    const id = typeof rawId === 'string'
        ? rawId.replace(/\/$/, '').trim().toLowerCase()
        : '';

    if (!id) {
        return res.status(400).send('ID is required');
    }

    res.setHeader('X-OG-Insight-Id', id);
    res.setHeader('X-OG-Timestamp', new Date().toISOString());

    try {
        const indexPath = join(process.cwd(), 'dist', 'index.html');
        let html = readFileSync(indexPath, 'utf8');

        const ogDataPath = join(process.cwd(), 'dist', 'business-insights-og-data.json');
        const ogData: BusinessInsightOG[] = JSON.parse(readFileSync(ogDataPath, 'utf8'));

        const article = ogData.find(a => a.id.toLowerCase() === id);

        if (article) {
            res.setHeader('X-OG-Match', 'true');
            res.setHeader('X-OG-Insight', article.title);

            const title = escapeHtml(article.title || 'Business Insights — Inspire India Talks');
            const excerpt = escapeHtml(article.excerpt || '');
            const category = escapeHtml(article.category || '');
            const image = article.image || '/logo.png';

            const fullTitle = `${title} — Inspire India Talks`;
            const description = excerpt || `${category} news and analysis from Inspire India Talks.`;
            const imageUrl = image.startsWith('http') ? image : `${SITE_ORIGIN}${image}`;
            const pageUrl = `${SITE_ORIGIN}/business-insights/${article.id}`;

            // Update the main <title> tag
            html = html.replace(/<title>.*?<\/title>/, `<title>${fullTitle}</title>`);

            // Update the page-level description
            html = html.replace(
                /<meta\s+name="description"\s+content="[^"]*"\s*\/?>/,
                `<meta name="description" content="${description}" />`
            );

            // Make the canonical self-referencing (point to this article, not the homepage)
            html = html.replace(
                /<link\s+rel="canonical"\s+href="[^"]*"\s*\/?>/,
                `<link rel="canonical" href="${pageUrl}" />`
            );

            // Replace the OG/Twitter block inside the markers
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
