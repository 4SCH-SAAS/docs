# 4SCH Docs

Docusaurus documentation site for 4SCH School Management System.

## Prerequisites
- Node.js 18.17+ (Node 20 recommended)
- pnpm (via Corepack)

Enable Corepack and pnpm:
```bash
corepack enable
corepack prepare pnpm@latest --activate
```

## Local development
```bash
pnpm install
pnpm start
```
Visit http://localhost:3000.

## Production build
```bash
pnpm build
pnpm serve  # optional, to preview the production build locally
```

## Git setup
Initialize and push to GitHub (already configured in this repo):
```bash
git init
git branch -M main
git remote add origin https://github.com/4SCH-SAAS/docs.git
git add .
git commit -m "chore: initialize docusaurus site"
git push -u origin main
```

## Docusaurus config for GitHub Pages
In `docusaurus.config.js`:
```js
module.exports = {
  url: 'https://docs.4sch.com',
  baseUrl: '/',
  organizationName: '4SCH-SAAS',
  projectName: 'docs',
  // ...rest of config
}
```
- For a project site under the user/org domain (custom domain), use `url` set to the custom domain and `baseUrl: '/'`.
- If you deploy under the default project path (no custom domain), use:
  - `url: 'https://4sch-saas.github.io'`
  - `baseUrl: '/docs/'`

## Deploy to GitHub Pages (GitHub Actions)
This repo uses the modern GitHub Pages workflow with Actions. On push to `main`, the workflow:
- Installs dependencies with pnpm
- Builds the site
- Publishes the `build/` artifact to GitHub Pages

Workflow file: `.github/workflows/deploy.yml`.

Manual trigger:
- Go to GitHub → Actions tab → "Deploy Docusaurus to GitHub Pages" → Run workflow.

## Custom domain: docs.4sch.com
This project is configured to serve at `https://docs.4sch.com`.

1) CNAME file (already added)
- `static/CNAME` contains:
```
docs.4sch.com
```
This will be published to the root of the built site so GitHub Pages knows the custom domain.

2) DNS record
- Create a CNAME record:
  - Name/Host: `docs`
  - Value/Target: `4sch-saas.github.io`
  - TTL: 300–3600 seconds

3) GitHub Pages settings
- Repository → Settings → Pages
  - Source: GitHub Actions
  - Custom domain: `docs.4sch.com`
  - After DNS propagates, enable "Enforce HTTPS".

4) Verify
- After the next successful Action run, visit `https://docs.4sch.com`.

## Troubleshooting
- 404s on custom domain
  - Ensure `baseUrl: '/'` in `docusaurus.config.js` when using the custom domain.
  - Confirm the `CNAME` file exists in the deployed site (root of the `build/` output).
  - DNS CNAME must point to `4sch-saas.github.io` (not to `/docs`).
- Build errors
  - Clear cache and reinstall: `pnpm store prune && pnpm install`
  - Try a non-minified build: `pnpm build --no-minify`
- Broken links
  - `onBrokenLinks: 'throw'` is enabled. Fix reported links or set to `'warn'` during migration.

## Contributing style guide

- Headings
  - Use Title Case for H1–H3 (e.g., Reports & Analytics, Student Profile)
  - Keep explicit {#ids} when renaming headings to preserve deep links
- Tone & language
  - Neutral/impersonal voice (e.g., “Reports can be viewed…”) for clarity
  - English: UK spelling; omit the Oxford comma unless needed for clarity
- Links & anchors
  - Cross-link to sections using full paths and stable IDs, e.g., /guides/admin#attendance-configuration
  - Prefer absolute image paths under /img/...; store images in static/img
- Images
  - Alt text: be specific and action-oriented (what the user sees or does). Avoid "image of"; include key UI elements.
  - Use the Screenshot component for consistent captions and responsive width
  - Prefer PNG/WebP for screenshots; SVG for UI diagrams; consider plugin-ideal-image for large sets
  - Filenames stable: keep names consistent even when content updates to avoid churn
- Components
  - Use CardGrid for quick links at the top of long pages
  - Use TOCInline at the top of guides for mobile-friendly navigation

## Optional: alternative hosting with previews
- Cloudflare Pages, Netlify, or Vercel can provide preview URLs for each PR.
- Build command: `pnpm build`, Output directory: `build`.
