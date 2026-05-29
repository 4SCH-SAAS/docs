# AGENTS.md — Docs Repository

This file captures conventions and known gotchas for the Docusaurus documentation site.

---

## 🛠 CI / Build

### pnpm version
- **Pinned to 9.15.0** across all workflows (`deploy.yml`, `link-check.yml`).
- **Do NOT use `corepack prepare pnpm@latest`** — pnpm v10+ treats ignored build scripts as fatal errors and will break the build.
- If you ever upgrade pnpm, update **all** workflow files together.

### Allowed build scripts
The `package.json` declares allowed build scripts under `pnpm.onlyBuiltDependencies`:
```json
"pnpm": {
  "onlyBuiltDependencies": ["core-js", "core-js-pure", "sharp"]
}
```
Add any new package here if pnpm complains about "Ignored build scripts".

### Sharp rebuild
Workflows manually rebuild `sharp` after install with `SHARP_IGNORE_GLOBAL_LIBVIPS=1`. Required because of native-binary compatibility with the runner.

---

## 📝 Authoring Rules

### MDX gotchas (common build-breakers)
- 🚫 No `<` followed by a lowercase letter or digit (e.g., `<10`) — looks like a JSX tag.
- 🚫 No `{...}` curly braces in plain text — looks like a JS expression.
- 🚫 No trailing punctuation in headings (`!`, `?`, `:`) — triggers MD026.
- ✅ Use `&lt;10` or backtick-escape: `` `<10` ``.
- ✅ Use `\{exam name\}` or backtick-escape: `` `{exam name}` ``.

### Heading hierarchy
- markdownlint MD001 forbids jumping levels (e.g., h2 → h4).
- If a "subsection" is really a peer of other top-level features, make it h3, not h4.

### Link anchors
- Verify every internal anchor matches an actual heading slug.
- Docusaurus auto-generates slugs from headings (lowercased, hyphenated).
- The `link-check` workflow runs lychee against the built HTML — broken anchors fail CI.

---

## 📅 Session Log

### 2026-05-29 — CI Fix
- Fixed `[ERR_PNPM_IGNORED_BUILDS]` deploy failure by pinning pnpm to 9.15.0 in `deploy.yml`.
- Added `pnpm.onlyBuiltDependencies` to `package.json` as belt-and-suspenders.
- Branch: `fix/pnpm-ignored-builds-docs-ci`.

---

*Last updated: 2026-05-29*
