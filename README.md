# सूर्यका शब्दहरू · suryachhetriblogs

A Nepali blog for Surya Chhetri about learning (सिकाइ), travel (यात्रा), and experience (अनुभव). Built with Astro, Markdown, and plain CSS. Fully static: no database, server, CMS, or React runtime.

## Run

Node 22.12 or newer (see `.nvmrc`).

```sh
npm ci
npm run dev
```

Local URL: http://localhost:4321. Validation:

```sh
npm run check
npm run build
npm test
```

## Write a post

Create a uniquely named Markdown file in `src/content/posts/`, e.g. `my-next-story.md`. The filename becomes `/blog/my-next-story/`; keep it stable after publishing. Copy this frontmatter:

```yaml
---
title: "मेरो नयाँ कथा"
description: "पाठकका लागि लेखको छोटो परिचय।"
date: "2026-10-02"
category: "अनुभव"
cover: "/images/my-photo.jpg"
coverAlt: "तस्बिरमा देखिने कुराको नेपाली वर्णन"
draft: true
---

यहाँ आफ्नो लेख लेख्नुहोस्।

## एउटा उपशीर्षक

अर्को अनुच्छेद।
```

Use exactly one category: `सिकाइ`, `यात्रा`, or `अनुभव`. Put photos in `public/images/`. Change `draft` to `false` to publish, then commit and push. Drafts and future-dated posts are omitted from all routes and feeds. A scheduled post requires a new build on or after its date; no scheduling service is included. To preview a draft locally, temporarily set `draft: false` and a non-future date, then revert.

Six original Nepali sample articles are included. `sample: true` adds an example notice; omit it for real posts. Update `src/pages/about.astro` with Surya's actual biography. Stock photographs are illustrative; replace them with your own, and update the captions in `src/pages/blog/[slug].astro` if appropriate. Image sources: `public/images/CREDITS.md`. Devanagari fonts are self-hosted through Fontsource.

## Netlify

Repository: https://github.com/kcsuyog/suryachhetriblogs

Live site: https://suryachhetri.netlify.app

Netlify project: https://app.netlify.com/projects/suryachhetri/overview

The repository is connected to this Netlify project for automatic deployments from `main`. To deploy a separate copy, import the GitHub repository as a new Netlify project. The checked-in `netlify.toml` supplies build command `npm run build`, output `dist`, and Node 22. No adapter or database is needed. Connect the `main` branch for automatic deployments whenever posts change.

[Deploy to Netlify](https://app.netlify.com/start/deploy?repository=https://github.com/kcsuyog/suryachhetriblogs)

The site uses Netlify's `URL` environment variable for canonical links, sitemap, and RSS. Outside Netlify it falls back to `https://suryachhetri.netlify.app`; set `URL` to the real production address if hosting elsewhere. Set your primary custom domain in Netlify before rebuilding. No domain or personal email is assumed.

Documentation: [Astro Markdown collections](https://docs.astro.build/en/guides/content-collections/) and [Astro on Netlify](https://docs.astro.build/en/guides/deploy/netlify/).

Accessible navigation, topic archives, related posts, reading times, social metadata, article structured data, RSS, sitemap, and a 404 page are included. There is no contact form, newsletter, tracking, or comments service.
