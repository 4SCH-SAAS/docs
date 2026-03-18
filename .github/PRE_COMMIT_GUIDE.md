# Pre-Commit Link Validation Guide

Before committing changes to the documentation, it's important to validate that all links are working correctly.

## Quick Validation

Run this command before committing:

```bash
npm run check-links
```

This will build the site and check for:
- ✅ Broken file links
- ✅ Broken anchor links (section references)
- ✅ Invalid markdown syntax

## What Gets Checked

Our Docusaurus configuration is set to **throw errors** for:

1. **Broken Links** (`onBrokenLinks: 'throw'`)
   - Links to non-existent files
   - Example: `[Guide](/guides/missing-file.md)` ❌

2. **Broken Anchors** (`onBrokenAnchors: 'throw'`)
   - Links to non-existent sections within files
   - Example: `[Section](/guides/teacher-guide#wrong-section)` ❌

3. **Broken Markdown Links** (warning only)
   - Malformed markdown syntax
   - Example: `[Broken link](` ⚠️

## Automated Checks

### GitHub Actions

All pull requests and commits automatically run:
- **Link Check Workflow** - Validates all links on every PR
- **Deploy Workflow** - Validates links before deployment

### Pre-commit Scripts

**Windows (PowerShell):**
```powershell
.\.github\scripts\check-links.ps1
```

**Linux/macOS (Bash):**
```bash
./.github/scripts/check-links.sh
```

## Common Link Patterns

### Internal Links (React/JSX)

```jsx
import Link from '@docusaurus/Link';

<Link to="/guides/teacher-guide">Teacher Guide</Link>
<Link to="/guides/teacher-guide#marking-attendance">Attendance Section</Link>
```

### Internal Links (Markdown)

```markdown
<!-- Relative links -->
[Teacher Guide](../guides/teachers.md)
[Attendance Section](teacher-guide.md#marking-attendance)

<!-- Absolute links -->
[Teacher Guide](/guides/teacher-guide)
[Attendance Section](/guides/teacher-guide#marking-attendance)
```

### Important Notes

1. **Use Document IDs, not filenames** for links
   - File: `docs/guides/teachers.md`
   - ID in frontmatter: `id: teacher-guide`
   - Link: `/guides/teacher-guide` ✅ (not `/guides/teachers`)

2. **Anchor format** - Docusaurus converts headings to lowercase kebab-case
   - Heading: `## User Management`
   - Anchor: `#user-management`
   - Emojis are stripped: `## 👨‍👩‍👧‍👦 For Parents` → `#-for-parents`

3. **Double-check anchors** - Use exact heading text converted to kebab-case
   - Heading: `## Issue 1: Cannot Create Exam - Permission Denied`
   - Anchor: `#issue-1-cannot-create-exam---permission-denied`

## Troubleshooting

### Build fails with broken link error?

```
Error: Broken link on source page path = /guides/some-page:
   -> linking to /guides/wrong-path (resolved as: /guides/wrong-path)
```

**Solution:** Check that the referenced file exists and use the correct document ID.

### Build fails with broken anchor error?

```
Error: Broken anchor on source page path = /guides/some-page:
   -> linking to #wrong-section
```

**Solution:** 
1. Open the target file
2. Find the exact heading text
3. Convert to lowercase and replace spaces with hyphens
4. Remove special characters (but keep hyphens)

## Need Help?

- Check [CONTRIBUTING_DOCS.md](../CONTRIBUTING_DOCS.md) for full documentation guidelines
- Run `npm run build` locally to catch issues before pushing
- Review the error messages - they usually point to the exact issue
