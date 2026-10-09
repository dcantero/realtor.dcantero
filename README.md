# realtor.dcantero

Daniel Cantero's realtor site: React Router (framework mode, server-side rendered) on an Express server, written in TypeScript and styled with Tailwind CSS v4.

## Setup

```bash
nvm use              # Node 22 (see .nvmrc)
npm install
cp .env.example .env # then fill in GOOGLE_MAPS_API_KEY
npm run dev          # http://localhost:3000 with HMR
```

All site details (name, phone, email, license, brokerage, social links, external tool URLs, Typekit kits, Maps key) come from environment variables. Nothing identifying is hardcoded. See `.env.example` for the full list; `app/lib/config.server.ts` reads and validates them at startup and the public subset reaches the browser through the root route loader (`useSite()` in components).

## Scripts

| Script              | What it does                                           |
| ------------------- | ------------------------------------------------------ |
| `npm run dev`       | Dev server with Vite HMR                               |
| `npm run build`     | Production build into `build/`                         |
| `npm start`         | Serve the production build                             |
| `npm run typecheck` | Generate route types and run `tsc`                     |

## Layout

```
server.js               Express bootstrap (dev: Vite middleware, prod: static + build)
server/app.ts           Express app: /healthz, legacy *.html redirects, /contact.vcf, React Router handler
server/vcard.ts         vCard generated from the site config
server/redirects.ts     Old GitHub Pages URLs -> new routes
app/root.tsx            Document shell, header/footer, Typekit links, error + 404 boundary
app/routes.ts           Route table
app/routes/*.tsx        One module per page
app/components/         Header, Footer, Cta, maps, cards, etc.
app/content/            Blog content seam, service-area counties, market reports
app/lib/                Config, meta, formatting helpers, asset paths
public/                 Static files (images, geojson, Apple Wallet pass)
assets/wallet-pass/     Source files for the .pkpass (not served)
```

## Routes

| Path                                      | Page                              |
| ----------------------------------------- | --------------------------------- |
| `/`                                       | Home                              |
| `/card`                                   | Digital business card (QR target) |
| `/contact`                                | Contact                           |
| `/blog`, `/blog/:slug`                    | Resources / articles              |
| `/sell`                                   | Selling guide                     |
| `/outreach/camden-county-market-report`   | Camden County market report       |
| `/privacy-policy`, `/terms-of-use`        | Legal                             |
| `/under-development`                      | Placeholder                       |
| `/contact.vcf`                            | Downloadable vCard (Express)      |
| `/dcantero-card.pkpass`                   | Apple Wallet pass (Express)       |
| `/healthz`                                | Health check                      |

Every old `*.html` URL (for example `/card.html`) 301-redirects to its new path.

## Adding blog posts

Posts come from a `ContentProvider` (`app/content/types.ts`). The current provider, `app/content/providers/static.server.ts`, is a hardcoded list of "coming soon" cards. To switch to Markdown/MDX files, a headless CMS, or a database:

1. Add `app/content/providers/<name>.server.ts` implementing `listPosts()` and `getPost(slug)`.
2. Point the `provider` constant in `app/content/posts.server.ts` at it.

The `/blog` and `/blog/:slug` routes need no changes. A post `body` can be `{ kind: "html" }` (rendered as-is) or `{ kind: "markdown" }` (rendering TODO).

## Deploying

The `Dockerfile` builds a production image that runs on Railway, Render, Fly.io, or any Docker host. Set the variables from `.env.example` in the host's dashboard. The app listens on `PORT` (default 3000).

When the site moves off GitHub Pages, point the `realtor.dcantero.com` DNS record at the new host and keep HTTPS enabled: the wallet pass QR code and the pass download link both use that domain.

Restrict the Google Maps key to HTTP referrers (`realtor.dcantero.com/*`, plus `localhost:3000/*` for development) in Google Cloud Console; the key is necessarily visible in the browser.

## Known TODOs

- `app/routes/sell.tsx`: body copy is placeholder lorem ipsum.
- `app/routes/privacy-policy.tsx`: the original policy ended mid-sentence; the Usage Data paragraph was completed with standard wording and should be reviewed.
- `app/content/market-reports.ts`: Sicklerville has no report URL (the old link pointed at the Blackwood PDF).
- Testimonials, Partners, and Careers still link to the under-development page.
- Hero and header images are the original multi-megabyte PNGs; resizing/WebP would speed up first load.
