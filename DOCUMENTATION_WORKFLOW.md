# Documentation Workflow Guide

**Last Updated:** 2026-03-17

This guide documents the workflow, conventions, and common issues to maintain consistency across documentation sessions.

---

## 📋 Before Starting

### 1. Check Documentation Backlog
- Review `DOCUMENTATION_BACKLOG.md` for priorities
- Check "Recently Completed" section for context
- Identify next high-priority item

### 2. Research Phase
- Check PHP_CODE/ directory for application logic
- Review existing documentation for related topics
- Identify document IDs in frontmatter of existing guides
- Search for existing content to enhance vs. create new

---

## 🔍 Common Issues & How to Avoid Them

### Issue 1: Broken Links

**Problem:** Internal links using incorrect paths or document IDs

**Root Cause:** 
- Files named `teachers.md` but document ID is `teacher-guide`
- Links use filename instead of document ID
- Anchors (#section) that don't exist

**Solution:**
Always check document IDs before linking:

```bash
# Find document ID
grep "^id:" docs/guides/teachers.md
# Output: id: teacher-guide

# Correct link format
<Link to="/guides/teacher-guide">Teacher Guide</Link>
```

**Common Correct IDs:**
- `/guides/teacher-guide` (NOT `/guides/teachers`)
- `/guides/parent-guide` (NOT `/guides/parents`)
- `/guides/student-guide` (NOT `/guides/students`)
- `/guides/school-admin`
- `/guides/accountant-guide`
- `/support/troubleshooting`

**Avoid anchor links unless verified:**
- Use simple page links: `/guides/teacher-guide`
- Avoid: `/guides/teacher-guide#specific-section` unless you verify the anchor exists

---

### Issue 2: MDX Compilation Errors

**Problem:** `<` symbol before numbers interpreted as JSX tags

**Example Error:**
```
Unexpected character '8' (U+0038) before name
```

**Cause:**
```markdown
Students with <85% attendance  # ❌ Broken - looks like <85 JSX tag
```

**Solution:**
```markdown
Students with below 85% attendance  # ✅ Works
Students with less than 85%         # ✅ Works
```

**Rule:** Never use `<DIGIT` patterns. Always write out "below", "less than", "under"

---

### Issue 3: Duplicate Redirects

**Problem:** Same redirect defined multiple times

**Cause:**
```javascript
// docusaurus.config.js
{
  redirects: [{from: '/blog', to: '/changelog'}], // Static redirect
  createRedirects(existingPath) {
    if (existingPath.includes('/changelog')) {
      return [existingPath.replace('/changelog', '/blog')]; // Dynamic - DUPLICATE!
    }
  }
}
```

**Solution:**
Use EITHER static OR dynamic redirects, not both:
```javascript
// Keep only dynamic
{
  createRedirects(existingPath) {
    if (existingPath.includes('/changelog')) {
      return [existingPath.replace('/changelog', '/blog')];
    }
  }
}
```

---

### Issue 4: Sidebar Configuration

**Problem:** File exists but not in sidebar, causing orphaned pages

**Solution:**
Always add new guides to `sidebars.js`:

```javascript
{
  type: 'category',
  label: 'Feature Guides',
  items: [
    {
      type: 'category',
      label: '📚 Academic Management',
      items: [
        'guides/session-year-calendar', // Use document ID, not filename
      ],
    },
  ],
}
```

**File Location Pattern:**
- File: `docs/guides/session-year-calendar.md`
- Document ID: `session-year-calendar` (in frontmatter)
- Sidebar ref: `'guides/session-year-calendar'` (folder/id)

---

## 📝 Documentation Best Practices

### Writing Style

**DO:**
- ✅ Use formal, professional tone
- ✅ Platform-agnostic best practices (focus on education, not product)
- ✅ Short, actionable tips in tip boxes
- ✅ Include real-world examples (Nigerian school context when relevant)
- ✅ Cross-reference related documentation

**DON'T:**
- ❌ Promotional language ("4SCH helps you...")
- ❌ Casual tone ("Don't be afraid to ask!")
- ❌ Platform-specific marketing ("Make 4SCH part of your routine!")

**Example:**
```markdown
❌ "Use 4SCH to track attendance daily!"
✅ "Monitor attendance consistently to identify at-risk students early."

❌ "4SCH makes grading easy!"
✅ "Efficient grading workflows save time while maintaining consistency."
```

### Tips & Best Practices

**Format:**
```markdown
:::tip Professional Development
**Using Data to Improve Teaching:**
- Review class performance reports monthly
- Identify topics where students struggle
- Adjust teaching approach accordingly
:::

:::warning Common Pitfall
**Avoid:** Marking attendance from memory at end of day
**Instead:** Mark immediately after class for accuracy
:::

:::note Important
Session data is isolated by year. Always verify you're viewing the correct session when generating reports.
:::
```

**Guidelines:**
- Keep tips short (3-5 bullet points max)
- Make them actionable
- Focus on professional development, not product features
- Use real scenarios

---

## 🔄 Git Workflow

### Branch Naming

```bash
# Feature branches
docs/feature-name
docs/session-year-guide
docs/expense-management

# Fixes
fix/broken-links-attendance
hotfix/mdx-compilation-error

# Refactoring
refine/professional-tone
enhance/teacher-guide-tips
```

### Commit Message Format

```bash
# Format
<type>: <description>

[optional body]

# Types
feat:     New documentation guide
enhance:  Improvements to existing docs
fix:      Bug fixes (broken links, MDX errors)
refine:   Content improvements (tone, clarity)
chore:    Meta tasks (force deploy, cache clear)

# Examples
feat: Add comprehensive session year and calendar guide

enhance: Add 7 professional development tips to Teacher Guide

fix: Correct broken links to role guides in announcement materials

refine: Make tips more formal and pedagogically focused
```

### Pull Request Workflow

1. **Create branch from latest main:**
```bash
git checkout main
git pull origin main
git checkout -b docs/your-feature
```

2. **Make changes and commit regularly:**
```bash
git add <files>
git commit -m "feat: descriptive message"
```

3. **Push and create PR:**
```bash
git push origin docs/your-feature
gh pr create --title "Title" --body "Description" --base main --head docs/your-feature
```

4. **If build fails:**
   - Check error logs
   - Fix issues locally
   - Commit fixes
   - Force push if needed: `git push origin docs/your-feature --force`

5. **After merge:**
```bash
git checkout main
git pull origin main
git branch -D docs/your-feature  # Clean up local branch
```

---

## 🧪 Testing Before Commit

### 1. Link Validation

**Check all internal links:**
```bash
# Search for Link components in your file
grep -n '<Link to=' docs/guides/your-file.md

# Verify each document ID exists
grep "^id:" docs/guides/target-file.md
```

**Common checks:**
- [ ] All `<Link to=` use document IDs, not filenames
- [ ] No anchor links unless verified (#section)
- [ ] No absolute URLs to docs.4sch.com for internal pages

### 2. MDX Syntax

**Check for problematic patterns:**
```bash
# Find <digit patterns (will cause MDX errors)
grep '<[0-9]' docs/guides/your-file.md

# Should return nothing - if found, replace with prose
```

### 3. Build Locally (Optional)

```bash
npm install
npm run build

# If build succeeds locally, likely will succeed in CI
```

---

## 📂 File Organization

### Document Structure

```markdown
---
id: document-id                    # Used in URLs and links
title: Human Readable Title
description: SEO-friendly description for search engines
keywords: [keyword1, keyword2]     # SEO keywords
sidebar_position: 18               # Order in sidebar
---

import Link from '@docusaurus/Link';

# Main Title (H1 - only one per document)

Brief introduction explaining what this guide covers.

:::info Who Should Read This?
- **Role 1** - What they'll learn
- **Role 2** - What they'll learn
:::

---

## Section Title (H2)

### Subsection (H3)

Content...

:::tip Best Practice
Short actionable tip
:::

---

## Related Resources

- <Link to="/guides/related-guide">Related Guide</Link>

---

:::tip Remember
Final takeaway or key reminder
:::
```

### Frontmatter Guidelines

```yaml
---
id: kebab-case-id                    # Must match sidebar reference
title: Title Case With Spaces        # Display name
description: One sentence summary    # For SEO and previews
keywords: [specific, searchable, terms]  # For search
sidebar_position: 15                 # Lower = higher in list
---
```

---

## 🔗 Cross-Referencing

### Linking to Other Docs

```markdown
<!-- Internal doc link -->
<Link to="/guides/teacher-guide">Teacher Guide</Link>

<!-- Internal doc with context -->
See the <Link to="/guides/school-admin">School Admin Guide</Link> for setup details.

<!-- Reference section (avoid unless verified) -->
For details, refer to the <Link to="/guides/teacher-guide">Teacher Guide</Link>.
```

### Enhancing Existing Docs

When creating new comprehensive guides, **update related docs** with cross-references:

```markdown
<!-- In school-admin.md -->
:::tip Complete Session Management Guide
For comprehensive guidance on session planning, term setup, and calendar management,
see the <Link to="/guides/session-year-calendar">Session Year & Academic Calendar Guide</Link>.
:::
```

---

## 📊 Progress Tracking

### Update Backlog After Completion

```markdown
### X. Feature Name ✅ COMPLETED
**Status:** ✅ Comprehensive guide created
**Completed:**
- ✅ Task 1
- ✅ Task 2
**File:** `docs/guides/filename.md` | **Effort:** X hours | **Value:** High
```

### Add to Recently Completed

```markdown
## ✅ Recently Completed

### Your Feature (Completed: YYYY-MM-DD)
- Brief description
- Key highlights
- **File:** `path/to/file.md`
```

---

## 🚨 Emergency Fixes

### Build Failing After Merge

**1. Identify the error:**
```bash
gh run view --log | grep "Error:"
```

**2. Common quick fixes:**

**Broken links:**
```bash
# Find and fix
git checkout -b hotfix/broken-links
# Fix the links
git commit -m "fix: Correct broken links"
git push origin hotfix/broken-links
gh pr create --title "fix: Broken links" --base main --head hotfix/broken-links
```

**MDX errors:**
```bash
# Find <digit patterns
grep -rn '<[0-9]' docs/

# Replace with prose
# Commit and push
```

**Cache issues:**
```bash
# Force fresh deployment
git commit --allow-empty -m "chore: Force fresh deployment"
git push origin main
```

---

## 📋 Session Handoff Checklist

At end of session, ensure:

- [ ] All changes committed and pushed
- [ ] PRs created for pending work
- [ ] DOCUMENTATION_BACKLOG.md updated with:
  - [ ] Completed items marked ✅
  - [ ] Recently Completed section updated
  - [ ] Last Updated date changed
- [ ] Build status verified (all checks passing)
- [ ] No orphaned/temporary files left in workspace
- [ ] This workflow doc updated if new patterns discovered

---

## 🎯 Quick Reference

### Most Common Commands

```bash
# Start new work
git checkout main && git pull origin main
git checkout -b docs/feature-name

# Check document IDs before linking
grep "^id:" docs/guides/*.md

# Search for broken patterns
grep '<[0-9]' docs/guides/*.md           # MDX errors
grep '/guides/teachers"' docs/**/*.md    # Wrong IDs

# Commit and push
git add -A
git commit -m "feat: description"
git push origin docs/feature-name

# Create PR
gh pr create --title "Title" --body "Description" --base main --head docs/feature-name

# After merge
git checkout main && git pull origin main
git branch -D docs/feature-name
```

### Quick Link Check

Before committing, verify all `<Link to=` paths:

| ❌ Wrong | ✅ Correct |
|---------|-----------|
| `/guides/teachers` | `/guides/teacher-guide` |
| `/guides/parents` | `/guides/parent-guide` |
| `/guides/students` | `/guides/student-guide` |
| `/guides/accountant` | `/guides/accountant-guide` |

---

## 📞 When Stuck

1. **Check existing patterns** - Look at similar completed guides
2. **Verify document IDs** - Always grep the frontmatter
3. **Test locally** - Run `npm run build` if possible
4. **Search backlog** - Similar issues may have been solved before
5. **Check this workflow** - Common issues documented here

---

**Good luck with your documentation session!** 🚀

Remember: Quality over speed. Professional, accurate documentation helps thousands of users.
