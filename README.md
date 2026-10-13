# Lumière Lifestyle Journal

An editorial lifestyle blog demo featuring the Lumière sample publication.

[Live demo](https://vibed-blog.xavainf.com)

## Features

- Editorial home with featured story, category cards, latest posts, and author introduction.
- Nine sample stories across Wellness, Travel, and Personal Growth.
- All-story journal archive, category archives, and individual story pages with related reading.
- Responsive navigation, article typography, and subtle scroll reveals.
- Client-side newsletter form with validation and a demo confirmation.

## Run locally

Prerequisites: Node.js 22.13 or newer and pnpm 11.13.0 (`corepack enable`).

```sh
pnpm install
pnpm dev
```

Open the development URL printed by Next.js (normally `http://localhost:3000`). No API keys, database, or environment variables are required.

## Build and preview

```sh
pnpm build
pnpm preview
```

The build checks TypeScript and exports static HTML, JavaScript, and CSS to `out/`. Preview rebuilds the site and serves that output with Wrangler. Next.js App Router handles navigation; all sample detail routes are generated at build time. Adding data-backed routes requires updating the corresponding sample dataset and rebuilding.

## Deploy

The site uses Cloudflare Workers Static Assets. The existing `wrangler.jsonc` names the `vibed-blog` Worker and attaches the custom domain `vibed-blog.xavainf.com`.

```sh
pnpm exec wrangler login
pnpm deploy
```

Deployment requires access to the configured Cloudflare account and the `xavainf.com` zone. For another account, update `account_id`, Worker name, and custom-domain route in `wrangler.jsonc`. Authenticate through Wrangler or an untracked `CLOUDFLARE_API_TOKEN`; never commit credentials.

## Demo limitations

Content is bundled sample data, not a CMS. One story includes a full sample body; other stories display their sample excerpts. Newsletter submissions do not create a subscription or send email. Social links are placeholders. Replace the sample author, content, and integrations before production editorial use.

Photography loads from the original Unsplash URLs and typography from Google Fonts, so those visuals require internet access. The app has no production API, authentication, billing, or server-side persistence.

## Source layout

- `src/app/`: Next.js routes, metadata, and styles.
- `src/site/`: original interface, components, and bundled sample data.
- `src/lib/router-compat.tsx`: navigation adapters used by the interface.
- `public/`: favicon and static response headers.
- `wrangler.jsonc`: standalone static deployment configuration.

## Discovery and credits

Public pages include descriptive sample-content metadata, canonical URLs, social previews, a sitemap, robots.txt, and a concise llms.txt directory. The initial exported HTML contains the page content; query-dependent state hydrates separately. Private browser-state pages are omitted from the sitemap and carry noindex metadata where applicable. These conventions support discovery; they do not promise search or assistant rankings.

Every page includes an accessible “Made with XavaInf” credit linking to https://xavainf.com. The credit is placed in page flow so it does not cover forms, galleries, or mobile navigation.
