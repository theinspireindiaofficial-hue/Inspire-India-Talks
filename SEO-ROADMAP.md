# Inspire India Talks — SEO Roadmap

_Prepared July 2026. Goal: get articles indexed and ranking on Google._

## The core problem, in one line

The site is a client-rendered React app (Vite on Vercel). Google receives a nearly
empty page and must run JavaScript to see your content — and there's **no sitemap**,
so Google doesn't even know most of your ~190 pages exist. The content is good; it's
just invisible to search.

### What we're working with
- 146 personality pages (`/personality/:id`)
- 37 business-insight articles (`/business-insights/:id`)
- 5 events (`/events/:slug`), 4 youth-spotlight stories, plus static pages

### What's already right (don't touch)
- Canonical tag, robots.txt, Google Search Console verification are in place.
- Personality and event pages already inject social-share meta tags server-side.

---

## Recommended focus

**Get existing articles indexed first. Keywords come later.**
There's no point optimizing for search terms while Google can't crawl the pages.
Fix the plumbing → get everything indexed → watch what starts ranking on its own →
*then* strengthen the pages that show promise for their target keywords.

---

## Phase 1 — Make the site crawlable (highest impact, ~1 day)

**1. Generate a real `sitemap.xml`.**
Currently `inspireindiatalks.com/sitemap.xml` just returns the homepage shell — there
is no sitemap. Build one listing every personality, business insight, event, youth
story, and static page (~190 URLs). Generate it automatically from your data files at
build time (a script like the existing `generate-og-data.js`) so it never goes stale.

**2. Reference the sitemap in `robots.txt`.**
Add `Sitemap: https://inspireindiatalks.com/sitemap.xml` at the top.

**3. Submit the sitemap in Google Search Console.**
This is where you'll watch indexing progress and catch errors. This is the feedback
loop for everything below.

**Why first:** this alone can surface most of your articles in Google. Nothing else
matters until Google can find the pages.

---

## Phase 2 — Fix the invisible articles (high impact, ~1 day)

**4. Business-insights articles have zero SEO metadata.** The Vercel prerender rules
only cover `/personality/:id` and `/events/:slug`. Business insights get no title, no
description, no share image. Add a prerender rule + API handler for
`/business-insights/:id` mirroring what `api/personality.ts` already does.

**5. Give every page a unique title + meta description.** Right now most routes share
the generic homepage title/description. Each personality and article needs its own
`<title>` and `<meta description>` containing the person's name / article topic. Use a
head manager (e.g. `react-helmet-async`) so client-side titles are correct too.

---

## Phase 3 — Help Google understand the content (medium impact, ~1 day)

**6. Add structured data (JSON-LD).**
- Personality pages → `Person` schema (name, description, image, known-for).
- Business insights / articles → `Article` schema (headline, author, datePublished, image).
- Homepage → `Organization` + `WebSite` (with SearchAction) schema.
This is what earns rich results and helps Google feature your content.

**7. Consider prerendering the article _body_, not just meta tags.**
Today even prerendered pages only inject meta tags — the article text still requires
JS. Google can render JS, but it's slower and less reliable. Options, cheapest first:
- Extend the existing prerender API to inject a text version of the article body into
  the HTML shell (low effort, big reliability gain).
- Longer term: move to a framework with real SSR/SSG (Next.js / Astro) if SEO becomes
  a primary channel.

---

## Phase 4 — Content & ranking (ongoing, starts after indexing works)

**8. Keyword-map your best pages.** Once indexed, check Search Console for which
queries already bring impressions. Pick the pages with promise and optimize their
title, headings, and opening paragraph around the real search terms people use
(e.g. "[Name] biography", "[Name] success story", "[topic] in India").

**9. Strengthen thin pages.** Articles that are mostly a quote + image won't rank.
Aim for genuinely useful depth — the journey, specifics, takeaways.

**10. Internal linking.** Link related personalities/articles to each other. This
spreads crawl equity and keeps readers on-site (a ranking signal).

**11. Build a few quality backlinks.** Even a handful of links from real Indian news /
education / startup sites moves the needle far more than on-page tweaks alone.

---

## Suggested order of operations

1. Sitemap + robots + submit to Search Console  ← **start here**
2. Fix business-insights metadata + per-page titles
3. JSON-LD structured data
4. (Optional) prerender article bodies
5. Ongoing: keyword optimization, content depth, internal links, backlinks

Phases 1–2 are where 80% of the indexing gain comes from. They're mostly build-time
scripts and config — low risk, no redesign needed.

---

## How to measure progress
- **Google Search Console** → Pages report: watch "indexed" count climb toward ~190.
- **Coverage/Enhancements** → confirm structured data is detected.
- **Performance** → track impressions and average position over the following weeks.
- Indexing a new/updated sitemap typically shows movement within 1–3 weeks.
