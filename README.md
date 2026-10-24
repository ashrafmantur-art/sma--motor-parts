# SMA MOTOR PARTS — Website

Next.js 14 (App Router) + TypeScript + Tailwind CSS. Static, no paid APIs, no Orvis AI dependency. Fonts are self-hosted via `@fontsource`.

## Run locally
```bash
npm install
npm run dev      # http://localhost:3000
npm run build && npm start   # production check
```
Requires Node.js 18.17 or newer.

## Deploy to Vercel
1. Push this folder to a GitHub repository.
2. In Vercel: **Add New → Project**, import the repo. Framework is detected as Next.js; keep the defaults and click **Deploy**.
   (Or with the CLI: `npm i -g vercel && vercel --prod`.)
3. Set the project name to `sma-motor-parts` to get `sma-motor-parts.vercel.app`. Vercel assigns it only if that name is free; otherwise pick another name or add a custom domain.
4. If the final URL differs, update `url` in `lib/site.ts` (used for SEO, sitemap and social previews) and redeploy.

## Edit content
- `lib/site.ts` — phone, WhatsApp number, email, address, Maps link, Instagram, **categories, products and gallery**.
- `public/images/` — local images. Replace a file with a better photo of the same name to update it everywhere.
- Contact form: validates name, phone, email, product and message, then opens a pre-filled WhatsApp message. It does not store or email anything.

## Notes
- Images were cropped from your screenshots, so some are low resolution (the hero especially). Replace them with originals for sharper results.
- Only 17 of the original 23 products could be seen in the screenshots; add the rest in `lib/site.ts`.
- The WhatsApp number is the phone number shown on the original site; the Instagram URL is built from `@sma_hubli`. Confirm both.
