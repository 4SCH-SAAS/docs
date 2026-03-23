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

## Documentation Navigation

### 📖 Getting Started
- [Overview](docs/intro/overview.md) - System overview and key features
- [Quick Start Guide](docs/intro/quick-start.md) - Get up and running in minutes
- [User Roles & Permissions](docs/intro/user-roles.md) - Understand your role and access levels

### 🎯 Guides by Role
- [School Administrators](docs/guides/school-admin.md)
- [Teachers](docs/guides/teachers.md)
- [Parents](docs/guides/parents.md)
- [Students](docs/guides/students.md)
- [Accountants](docs/guides/accountant.md)
- [Drivers](docs/guides/driver.md)
- [Non-Teaching Staff](docs/guides/non-teaching-staff.md)

### 📚 Reference Materials
**Quick Reference Cards (Printable)**
- [Admin Quick Reference](docs/reference/admin-quick-reference.md)
- [Teacher Quick Reference](docs/reference/teacher-quick-reference.md)
- [Parent Quick Reference](docs/reference/parent-quick-reference.md)
- [Student Quick Reference](docs/reference/student-quick-reference.md)

**Comprehensive References**
- [Keyboard Shortcuts & Power User Guide](docs/reference/keyboard-shortcuts.md) - Enhanced with role-specific shortcuts, power user tips, mobile gestures, and printable cheat sheets
- [Glossary](docs/reference/glossary.md) - Complete terminology guide
- [Roles & Permissions Matrix](docs/reference/roles-permissions.md)
- [Data Import/Export](docs/reference/data-import-export.md)
- [Integrations](docs/reference/integrations.md)

### 🎬 Video Tutorials

**Introduction Series**
- [System Overview](video-tutorials/scripts/01-introduction/01-system-overview.md)
- [User Roles Explained](video-tutorials/scripts/01-introduction/02-user-roles-explained.md)
- [Quick Start Guide](video-tutorials/scripts/01-introduction/03-quick-start-guide.md)

**Role-Based Training**
- [School Admin Guide](video-tutorials/scripts/02-role-based/01-school-admin-guide.md)
- [Teacher Guide](video-tutorials/scripts/02-role-based/02-teacher-guide.md)
- [Parent Guide](video-tutorials/scripts/02-role-based/03-parent-guide.md)
- [Student Guide](video-tutorials/scripts/02-role-based/04-student-guide.md)
- [Accountant Guide](video-tutorials/scripts/02-role-based/05-accountant-guide.md)
- [Driver Guide](video-tutorials/scripts/02-role-based/06-driver-guide.md)
- [Non-Teaching Staff Guide](video-tutorials/scripts/02-role-based/07-non-teaching-staff-guide.md)

**Feature Deep Dives**
- [Fee Management & Payment Processing](video-tutorials/scripts/03-feature-deep-dives/01-fee-management-payment-processing.md)
- [Attendance Tracking](video-tutorials/scripts/03-feature-deep-dives/02-attendance-tracking.md)
- [Assignment Workflow](video-tutorials/scripts/03-feature-deep-dives/03-assignment-workflow.md)
- [Communication & Messaging](video-tutorials/scripts/03-feature-deep-dives/04-communication-messaging.md)
- [Reports & Analytics](video-tutorials/scripts/03-feature-deep-dives/05-reports-analytics.md)
- [Transportation Management](video-tutorials/scripts/03-feature-deep-dives/06-transportation-management.md)
- [Data Import/Export](video-tutorials/scripts/03-feature-deep-dives/07-data-import-export.md)
- [System Configuration](video-tutorials/scripts/03-feature-deep-dives/08-system-configuration.md)
- [Online Exams Overview](video-tutorials/scripts/03-feature-deep-dives/09-online-exams-overview.md)
- [Online Exams - Teacher Guide](video-tutorials/scripts/03-feature-deep-dives/10-online-exams-teacher-guide.md)
- [Online Exams - Student Guide](video-tutorials/scripts/03-feature-deep-dives/11-online-exams-student-guide.md)

### 🆘 Support & Troubleshooting
- [Enhanced Troubleshooting Guide](docs/support/troubleshooting.md) - Comprehensive solutions for online exams, offline exams, and common issues with step-by-step instructions and video references
- [FAQ](docs/support/faq.md)
- [Contact Support](docs/support/contact-support.md)

---

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
