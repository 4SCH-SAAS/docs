# Documentation Contributor Guide

**For AI Agents and Human Developers**

This guide helps you avoid common pitfalls when contributing to the 4SCH documentation. Following these guidelines ensures your changes pass CI/CD checks and maintain documentation quality.

---

## Table of Contents

1. [Before You Start](#before-you-start)
2. [Common Build Failures & Solutions](#common-build-failures--solutions)
3. [Docusaurus-Specific Guidelines](#docusaurus-specific-guidelines)
4. [Markdownlint Rules](#markdownlint-rules)
5. [Content Guidelines](#content-guidelines)
6. [Testing Your Changes](#testing-your-changes)
7. [PR Checklist](#pr-checklist)

---

## Before You Start

### Prerequisites

**1. Understand the tech stack:**
- **Docusaurus 2** - React-based static site generator
- **MDX** - Markdown with JSX components
- **Markdownlint** - Markdown linting tool
- **pnpm** - Package manager (NOT npm or yarn)

**2. Know the workspace structure:**
```
docs/                    # All documentation content
├── guides/             # User role guides (teachers, students, parents, etc.)
├── intro/              # Getting started content
├── reference/          # Technical reference docs
└── support/            # FAQ, troubleshooting

static/                 # Static assets (MUST exist for build to succeed)
├── img/                # Images
│   └── screens/        # UI screenshots
└── interactive-diagrams/ # HTML interactive diagrams

docusaurus.config.js    # Site configuration
sidebars.js            # Sidebar navigation
```

**3. Verify branch state:**
```powershell
# Always start from updated main
git checkout main
git pull origin main

# Create feature branch
git checkout -b docs/your-feature-name
```

---

## Common Build Failures & Solutions

### 1. ❌ "MDX compilation failed: Markdown image couldn't be resolved"

**Error Example:**
```
Error: Markdown image with URL `/img/screens/example.svg` 
in source file "docs/guides/teachers.md" (70:1) 
couldn't be resolved to an existing local image file.
```

**Causes:**
- Image file doesn't exist in `static/img/...`
- Image path is incorrect (typo, wrong directory)
- File was added locally but not committed/pushed

**Solutions:**

**Option 1: Add placeholder image**
```powershell
# Create placeholder SVG
New-Item -Path "static/img/screens/example.svg" -ItemType File -Force
# Then populate with basic SVG content
```

**Option 2: Use `pathname://` protocol** (bypasses validation)
```markdown
<!-- Instead of: -->
![Screenshot](/img/screens/example.svg)

<!-- Use: -->
![Screenshot](pathname:///img/screens/example.svg)
```

**Option 3: Use external URL** (for deployed docs)
```markdown
![Screenshot](https://docs.4sch.com/img/screens/example.svg)
```

**Prevention:**
- Always verify image files exist: `Test-Path static/img/screens/example.svg`
- Commit images BEFORE referencing them in docs
- Use descriptive file names: `teacher-assignment-create.svg` not `img001.svg`

---

### 2. ❌ "No commits between main and your-branch"

**Error when creating PR:**
```
GraphQL: No commits between main and your-branch
```

**Causes:**
- Your local branch is identical to `main`
- Changes weren't committed
- Remote branch pointer is stale

**Solutions:**

**Check if you have uncommitted changes:**
```powershell
git status --short
```

**If files are modified but not committed:**
```powershell
git add docs/guides/your-file.md
git commit -m "docs: your commit message"
git push -u origin docs/your-branch-name
```

**If remote is out of sync:**
```powershell
git fetch origin main
git push -u origin docs/your-branch-name --force-with-lease
```

**Prevention:**
- Always check `git status` before creating PR
- Use meaningful commit messages: `docs: add student diary feature` not `update`

---

### 3. ❌ Markdownlint Errors

**Common violations:**

**MD026: Trailing punctuation in heading**
```markdown
❌ ## Setting Up Your Account:
✅ ## Setting Up Your Account
```

**MD007: Unordered list indentation**
```markdown
❌
   - Item 1  (3 spaces - wrong)
   - Item 2

✅
- Item 1  (0 spaces at root level)
- Item 2
```

**MD033: Inline HTML** (allowed in our config, but be careful)
```markdown
✅ Use MDX components when possible
✅ <Screenshot src="..." />
⚠️ Avoid raw <div>, <span> unless necessary
```

**MD037: Spaces inside emphasis markers**
```markdown
❌ ** bold text **
✅ **bold text**
```

**MD047: Files should end with a single newline**
```markdown
✅ Always ensure file ends with blank line
```

**Fix all linting errors before committing:**
```powershell
npx markdownlint-cli2 "docs/**/*.md" "docs/**/*.mdx"
```

---

### 4. ❌ Broken Internal Links

**Error Example:**
```
Docusaurus found broken links!
- Exhaustive route not found for pathname /guides/assignments
```

**Causes:**
- Linking to non-existent page
- Using wrong doc `id` (frontmatter defines the route, not filename)
- Linking to `.md` extension (Docusaurus routes don't use extensions)

**Solutions:**

**Check the target doc's frontmatter:**
```markdown
---
id: teacher-guide  # THIS is the route ID
title: Teacher Guide
---
```

**Use correct link format:**
```markdown
❌ [Teacher Guide](/guides/teachers.md)
❌ [Teacher Guide](../guides/teacher-guide)
✅ [Teacher Guide](/guides/teacher-guide)  # Use 'id' from frontmatter
```

**For anchors (heading links):**
```markdown
# Use the {#anchor-id} syntax
## Creating an Assignment {#creating-assignment}

# Then link to it:
[See how to create assignments](/guides/teacher-guide#creating-assignment)
```

**Prevention:**
- Always check the doc's `id` field in frontmatter
- Test links locally with `pnpm start` before committing
- Use Docusaurus `<Link>` component for internal links in MDX:
  ```jsx
  import Link from '@docusaurus/Link';
  <Link to="/guides/teacher-guide">Teacher Guide</Link>
  ```

---

### 5. ❌ Broken Anchor Links

**Error Example:**
```
Broken anchor on source page path=/guides/online-exams:
 -> linking to /guides/school-admin#academic-setup
```

**Causes:**
- Heading doesn't have explicit anchor ID
- Anchor ID doesn't match heading text
- Heading was renamed but links weren't updated

**Solutions:**

**Add explicit anchor IDs to headings:**
```markdown
## Setting Up Your School Structure {#academic-setup}
```

**If heading doesn't exist, add it or fix the link:**
```markdown
# Either create the section:
## Academic Setup {#academic-setup}

# Or update the broken link to point to existing section
```

**Prevention:**
- Always add `{#anchor-id}` to important headings
- Use descriptive IDs: `{#fee-payment-process}` not `{#section-1}`
- Search for old anchor references when renaming sections:
  ```powershell
  Select-String -Path docs/**/*.md -Pattern "#old-anchor-name"
  ```

---

### 6. ❌ Undefined React Components

**Error Example:**
```
ReferenceError: AcademicIcon is not defined
```

**Causes:**
- Using component that isn't imported
- Typo in component name
- Importing from wrong path

**Solutions:**

**Check what icons/components are imported at top of file:**
```jsx
import Screenshot from '@site/src/components/Screenshot';
import Link from '@docusaurus/Link';
import GradesIcon from '@site/src/components/icons/Grades';
import DashboardIcon from '@site/src/components/icons/Dashboard';
// etc.
```

**Only use imported components:**
```jsx
✅ <GradesIcon size={18} />    # Imported ✓
❌ <AcademicIcon size={18} />  # NOT imported ✗
```

**Available icons (check `src/components/icons/`):**
- DashboardIcon
- GradesIcon
- AttendanceIcon
- MessagingIcon
- ReportsIcon
- FinanceIcon
- UsersIcon
- SecurityIcon
- StaffIcon
- DataIcon

**Prevention:**
- Copy imports from similar existing files
- Check `src/components/icons/` for available icons before using
- Use generic icons (GradesIcon, DashboardIcon) if specific icon doesn't exist

---

## Docusaurus-Specific Guidelines

### 1. Frontmatter (Required)

Every doc must start with frontmatter:

```markdown
---
id: unique-page-id           # URL route (required)
title: Page Title            # Browser tab title (required)
description: SEO description # For search engines (recommended)
keywords: [keyword1, keyword2] # SEO keywords (optional)
sidebar_position: 2          # Order in sidebar (optional)
---
```

### 2. Using MDX Components

**Screenshot component:**
```jsx
import Screenshot from '@site/src/components/Screenshot';

<Screenshot
  src="/img/screens/teachers/gradebook.svg"
  alt="Teacher Gradebook"
  caption="Teacher Gradebook - Grade entry interface"
/>
```

**Internal links:**
```jsx
import Link from '@docusaurus/Link';

<Link to="/guides/teacher-guide">Teacher Guide</Link>
```

**Admonitions (info boxes):**
```markdown
:::note
This is a note
:::

:::tip
This is a helpful tip
:::

:::caution
This is a warning
:::

:::danger
This is a serious warning
:::
```

### 3. Code Blocks

**With syntax highlighting:**
````markdown
```javascript
const config = {
  title: '4SCH Docs',
};
```
````

**With title:**
````markdown
```javascript title="docusaurus.config.js"
module.exports = {
  title: '4SCH Docs',
};
```
````

### 4. Tables

```markdown
| Feature | Supported |
|---------|-----------|
| Assignments | ✅ Yes |
| Grading | ✅ Yes |
```

---

## Markdownlint Rules

Our configuration (`.markdownlintrc.json`):

```json
{
  "default": true,
  "MD013": false,  // Line length - disabled (Docusaurus handles wrapping)
  "MD033": false,  // Inline HTML - allowed (needed for MDX components)
  "MD041": false   // First line heading - disabled (frontmatter comes first)
}
```

**Key rules to follow:**

1. **MD001**: Heading levels increment by one
   ```markdown
   ✅
   # Heading 1
   ## Heading 2
   ### Heading 3
   
   ❌
   # Heading 1
   ### Heading 3  # Skipped level 2
   ```

2. **MD012**: No multiple consecutive blank lines
   ```markdown
   ✅
   Paragraph 1
   
   Paragraph 2
   
   ❌
   Paragraph 1
   
   
   Paragraph 2  # Two blank lines
   ```

3. **MD022**: Headings need blank lines around them
   ```markdown
   ✅
   Some text
   
   ## Heading
   
   More text
   
   ❌
   Some text
   ## Heading
   More text
   ```

---

## Content Guidelines

### 1. Writing Style

**Clear and concise:**
```markdown
✅ Click **Submit** to save your changes.
❌ In order to proceed with saving the modifications you have made, please click on the button labeled "Submit".
```

**Use active voice:**
```markdown
✅ Teachers create assignments in the Assignments section.
❌ Assignments are created by teachers in the Assignments section.
```

**Address the user directly:**
```markdown
✅ You can view your grades in the Results tab.
❌ Students can view their grades in the Results tab.
```

### 2. Screenshots and Placeholders

**Always provide alt text:**
```jsx
✅ <Screenshot src="..." alt="Teacher Dashboard showing today's classes" />
❌ <Screenshot src="..." />
```

**Use placeholders if real screenshots unavailable:**
- Create SVG placeholders in `static/img/screens/`
- Include descriptive title and "Placeholder" label
- Replace with real screenshots later

**Example placeholder SVG:**
```xml
<svg xmlns="http://www.w3.org/2000/svg" width="1200" height="675" viewBox="0 0 1200 675">
  <rect width="1200" height="675" fill="#f6f8fa"/>
  <rect x="40" y="40" width="1120" height="595" rx="18" fill="#ffffff" stroke="#d0d7de"/>
  <text x="80" y="140" font-size="44" fill="#1f2328">Feature Name</text>
  <text x="80" y="210" font-size="28" fill="#57606a">Placeholder - Replace with screenshot</text>
</svg>
```

### 3. Best Practices Tips

**Add contextual tips where they add value:**
```markdown
:::tip Best Practice: [Descriptive Title]
- **Point 1** — Explanation
- **Point 2** — Explanation
- **Point 3** — Explanation
:::
```

**Examples of good tips:**
- Timing advice: "Submit assignments 1 day early to avoid last-minute issues"
- Common mistakes: "Don't delete original files until grading is complete"
- Efficiency: "Mark attendance within first 10 minutes for accuracy"
- Parenting: "Check diary weekly—don't wait for month-end"

**Avoid:**
- Restating what's in the main text
- Obvious advice: "Make sure to save your work"
- Personal opinions without basis

---

## Testing Your Changes

### 1. Run Markdownlint

```powershell
# Lint all docs
npx markdownlint-cli2 "docs/**/*.md" "docs/**/*.mdx"

# Lint specific file
npx markdownlint-cli2 "docs/guides/teachers.md"
```

**Fix errors before committing.**

### 2. Build Locally

```powershell
# Clean previous build
pnpm clean

# Build (takes ~2-3 minutes)
pnpm build

# If successful, check for warnings:
# - Broken anchors (fix if easy, otherwise document)
# - Broken links (MUST fix)
```

### 3. Run Dev Server

```powershell
# Start local dev server
pnpm start

# Opens http://localhost:3000
# Test your changes:
# - Click all links
# - Verify images load
# - Check formatting
# - Test on mobile view
```

### 4. Check Git Status

```powershell
# See what changed
git status --short

# Review your changes
git diff docs/guides/your-file.md

# Ensure no unintended changes
```

---

## PR Checklist

Before creating a PR, verify:

### Code Quality
- [ ] ✅ Markdownlint passes: `npx markdownlint-cli2 "docs/**/*.md"`
- [ ] ✅ Build succeeds: `pnpm build`
- [ ] ✅ No broken links or images in build output
- [ ] ✅ All new images are committed and pushed

### Content Quality
- [ ] ✅ Spelling and grammar checked
- [ ] ✅ Screenshots have descriptive alt text
- [ ] ✅ Internal links use correct doc IDs
- [ ] ✅ Headings have explicit `{#anchor-id}` for important sections
- [ ] ✅ Tips and admonitions add real value

### Git Hygiene
- [ ] ✅ Changes are committed with descriptive message
- [ ] ✅ Branch is pushed to origin
- [ ] ✅ `git log main..HEAD` shows your commits
- [ ] ✅ No merge conflicts with main

### PR Description
- [ ] ✅ Clear title: `docs: add feature X documentation`
- [ ] ✅ Body explains what and why
- [ ] ✅ References any related issues or PRs

---

## Quick Reference: Common Commands

```powershell
# Start fresh
git checkout main && git pull

# Create branch
git checkout -b docs/your-feature

# Check status
git status --short

# Lint docs
npx markdownlint-cli2 "docs/**/*.md"

# Build
pnpm build

# Dev server
pnpm start

# Commit changes
git add docs/guides/your-file.md
git commit -m "docs: your message"

# Push branch
git push -u origin docs/your-feature

# Create PR (using gh CLI)
gh pr create --base main --head docs/your-feature --title "docs: your title" --body "Description"

# Check if image exists
Test-Path static/img/screens/example.svg

# Search for text in docs
Select-String -Path docs/**/*.md -Pattern "search term"
```

---

## Troubleshooting Scenarios

### Scenario 1: "I added an image but build still fails"

**Check:**
1. Image file exists: `Test-Path static/img/screens/example.svg`
2. Image is committed: `git ls-files static/img/screens/example.svg`
3. Image is pushed: `git ls-remote origin HEAD | Select-String example.svg`
4. Path in markdown matches exactly (case-sensitive)

### Scenario 2: "PR says no commits but I made changes"

**Fix:**
```powershell
# Verify local changes exist
git log main..HEAD --oneline

# If empty, changes weren't committed:
git status
git add -A
git commit -m "docs: your message"

# If commits exist locally but not remotely:
git push -u origin docs/your-branch --force-with-lease
```

### Scenario 3: "Build passes locally but fails in CI"

**Common causes:**
- Local build is cached—run `pnpm clean && pnpm build`
- File exists locally but wasn't committed
- Case sensitivity issues (Windows local, Linux CI)
- Line ending differences (CRLF vs LF)

**Fix:**
```powershell
# Clean rebuild
pnpm clean
pnpm build

# Check uncommitted files
git status --short

# Force LF line endings
git config core.autocrlf input
```

---

## Additional Resources

- **Docusaurus Docs**: https://docusaurus.io/docs
- **Markdown Guide**: https://www.markdownguide.org
- **Markdownlint Rules**: https://github.com/DavidAnson/markdownlint/blob/main/doc/Rules.md
- **MDX Documentation**: https://mdxjs.com

---

## When in Doubt

1. **Look at existing files** - Copy patterns from similar docs
2. **Run the build** - Catch issues before pushing
3. **Test links** - Click them in the local dev server
4. **Ask for clarification** - Better to confirm than assume

**Remember:** A passing build is the minimum. High-quality, helpful documentation is the goal.

---

*Last updated: 2026-03-16*
*Maintained by: 4SCH Documentation Team*
