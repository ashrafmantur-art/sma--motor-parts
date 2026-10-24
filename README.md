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

## Upload to GitHub and deploy from an Android phone
1. Unzip `sma-motor-parts.zip` with the Files app (long-press the ZIP, then Extract). You get a folder named `sma-motor-parts`.
2. Open github.com in Chrome, sign in, tap **+ → New repository**, name it `sma-motor-parts`, and create it.
3. If you already have a repo with partial files, open it, select all existing files and delete them first (or create a fresh repo).
4. In the repo tap **Add file → Upload files**. Open the extracted folder and select everything inside it (including the `app`, `public` and `lib` folders). Chrome on Android may not upload folders: if so, use Chrome's "Desktop site" option, or the GitHub app, or upload folder by folder. Make sure `package.json`, `package-lock.json` and `next-env.d.ts` are included. Do not upload `node_modules` or `.next`.
5. Tap **Commit changes**.
6. Open vercel.com, sign in with GitHub, tap **Add New → Project**, pick the repo, keep the defaults and tap **Deploy**.
7. Set the project name to `sma-motor-parts` to get sma-motor-parts.vercel.app, if the name is free.

Tip: `.gitignore` starts with a dot, so it may be hidden in the Files app. Enable "Show hidden files" before selecting everything. It is optional for Vercel.
