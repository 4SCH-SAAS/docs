# Documentation Maintenance Guide

## Purpose

This guide helps documentation maintainers keep the 4SCH documentation accurate, practical, and user-friendly. It establishes principles, processes, and standards for ongoing documentation improvement.

---

## Table of Contents

1. [Documentation Philosophy](#documentation-philosophy)
2. [Key Principles](#key-principles)
3. [Documentation Standards](#documentation-standards)
4. [Maintenance Workflow](#maintenance-workflow)
5. [Review Process](#review-process)
6. [Common Updates](#common-updates)
7. [Quality Checklist](#quality-checklist)
8. [Content Guidelines](#content-guidelines)
9. [Tools & Resources](#tools--resources)
10. [Troubleshooting](#troubleshooting)

---

## Documentation Philosophy

### Our Approach

**What makes 4SCH documentation different:**

1. **Practical, not theoretical** — Focus on "how to do your job" not just "how the feature works"
2. **Role-based** — Each user sees documentation relevant to their responsibilities
3. **African school context** — Realistic scenarios for our actual users
4. **Simple language** — Accessible to non-technical users
5. **Workflow-oriented** — Complete processes, not isolated features

### What We Don't Do

❌ **Don't copy from eSchool SaaS documentation**  
We're built on eSchool SaaS but our docs focus on *using* the system in African schools, not technical setup.

❌ **Don't write feature lists**  
We write task-oriented guides: "How to mark attendance" not "Attendance features"

❌ **Don't assume technical expertise**  
Our users range from tech-savvy to complete beginners.

---

## Key Principles

### 1. User-Centric

**Always ask:**
- Who is reading this?
- What are they trying to accomplish?
- What problems might they face?
- What's the simplest way to explain this?

**Example:**
- ❌ Bad: "The fee structure module allows configuration of hierarchical fee categories with class-level overrides"
- ✅ Good: "Different classes often have different fees. Here's how to set that up..."

### 2. Practical & Actionable

**Every section should answer:**
- What do I need to do?
- How do I do it step-by-step?
- What if something goes wrong?
- What's the best way to do this?

**Include:**
- ✅ Step-by-step instructions
- ✅ Real examples with local context
- ✅ Common mistakes and how to avoid them
- ✅ Best practices from experienced users

### 3. Context-Aware

**African School Context:**
- Internet may be limited (2G/3G)
- Users may have limited tech experience
- Paper backups are common
- Mobile money is popular for payments
- Classes are typically large (40+ students)
- Terms/semesters follow local academic calendars

**Use realistic examples:**
- Nigerian Naira (₦) for fees
- Local school structure (Primary 1-6, JSS 1-3, SSS 1-3)
- Nigerian names in examples
- Local challenges (power outages, network issues)

### 4. Simple & Clear

**Writing Guidelines:**
- Short sentences (15-20 words max)
- Short paragraphs (3-4 sentences)
- Active voice ("Click the button" not "The button should be clicked")
- Present tense ("The system sends..." not "The system will send...")
- Avoid jargon (or explain it when necessary)

**Example:**
- ❌ Technical: "Navigate to the payment reconciliation interface and initiate the batch processing workflow"
- ✅ Simple: "Go to Finance → Bank Reconciliation. Click Start Reconciliation."

---

## Documentation Standards

### File Structure

```
docs/
├── intro/                    # Introduction & Getting Started
│   ├── overview.md
│   ├── user-roles.md
│   ├── quick-start.md
│   └── getting-started.md
│
├── guides/                   # Role-based guides
│   ├── admin-guide.md
│   ├── teacher-guide.md
│   ├── parent-guide.md
│   ├── student-guide.md
│   ├── non-teaching-staff-guide.md
│   ├── accountant-guide.md
│   ├── workflows.md
│   ├── messaging.md
│   ├── billing-finance.md
│   └── reports-analytics.md
│
├── reference/                # Technical reference
│   ├── roles-permissions.md
│   ├── data-import-export.md
│   └── integrations.md
│
└── support/                  # Help & troubleshooting
    ├── faq.md
    ├── troubleshooting.md
    └── contact-support.md
```

### Frontmatter Template

Every documentation file should have:

```markdown
---
id: unique-identifier
title: Human-Readable Title
slug: /path/to/page
sidebar_position: 1
---
```

### Standard Components

**Import statements:**
```markdown
import Link from '@docusaurus/Link';
import TOCInline from '@theme/TOCInline';
```

**Table of Contents:**
```markdown
<TOCInline toc={[]} minHeadingLevel={2} maxHeadingLevel={3} />
```

**Internal Links:**
```markdown
<Link to="/guides/admin">Administrator Guide</Link>
```

---

## Maintenance Workflow

### Regular Maintenance Schedule

**Monthly:**
- Review user feedback and questions
- Update any outdated screenshots
- Check all links are working
- Review analytics for most-viewed pages

**Quarterly:**
- Major content review
- Update examples if system has changed
- Add new features/workflows
- Review and update FAQs

**When System Updates:**
- Review release notes
- Update affected documentation
- Add new feature documentation
- Update screenshots if UI changed

### Handling User Feedback

**When users report issues:**

1. **Acknowledge quickly** (within 24 hours)
2. **Investigate** — Is documentation unclear, wrong, or missing?
3. **Prioritize:**
   - **Critical:** Wrong information → Fix immediately
   - **High:** Missing crucial info → Add within 1 week
   - **Medium:** Unclear wording → Improve within 1 month
   - **Low:** Nice-to-have additions → Backlog
4. **Update documentation**
5. **Notify user** when fixed

**Track feedback in:**
- GitHub issues
- Shared spreadsheet
- Support ticket system

---

## Review Process

### Before Publishing Changes

**Self-Review Checklist:**
- [ ] Information is accurate
- [ ] Language is simple and clear
- [ ] Steps are in logical order
- [ ] Examples are realistic and relevant
- [ ] Screenshots are current (if included)
- [ ] Links work correctly
- [ ] Spelling and grammar are correct
- [ ] Formatting is consistent

**Peer Review:**
- [ ] Have another team member review
- [ ] Test instructions with someone unfamiliar with the feature
- [ ] Get feedback from actual users if possible

**Technical Review:**
- [ ] Verify against actual system behavior
- [ ] Test all procedures described
- [ ] Confirm terminology matches system UI

---

## Common Updates

### Adding a New Feature

**When 4SCH adds a new feature:**

1. **Understand the feature:**
   - What does it do?
   - Who will use it?
   - Why is it useful?
   - What problems does it solve?

2. **Identify affected guides:**
   - Which user roles need to know about this?
   - Which workflows does it impact?

3. **Write documentation:**
   - Add to relevant role guide(s)
   - Update workflows if needed
   - Add to FAQs if commonly asked

4. **Review and publish:**
   - Follow review process
   - Announce new documentation to users

### Updating Existing Content

**When information changes:**

1. **Identify scope:**
   - Single page or multiple?
   - Just wording or entire procedure?
   - Screenshots needed?

2. **Make updates:**
   - Keep same structure if possible
   - Maintain consistent tone
   - Update all affected pages

3. **Version tracking:**
   - Note what changed in commit message
   - Consider adding "Last updated: [date]" if major change

### Adding New Workflows

**Follow this template:**

```markdown
## [Workflow Name] {#anchor}

Brief introduction to the workflow (1-2 sentences).

### Timeline: [Duration]

**Phase 1: [Name]**

**Week/Day X:**
- ✅ Task 1
- ✅ Task 2
- ✅ Task 3

**What Happens:**
- Result 1
- Result 2

**Phase 2: [Name]**
[Continue pattern]

### Tips
- Best practice 1
- Best practice 2

### Common Issues
- Problem and solution
```

---

## Quality Checklist

### Content Quality

**Every documentation page should:**

✅ **Have a clear purpose**
- What will the reader learn?
- What can they do after reading?

✅ **Be appropriately detailed**
- Enough info to complete the task
- Not so much it's overwhelming

✅ **Include examples**
- Real scenarios
- Local context
- Multiple examples if complex

✅ **Address common problems**
- "What if..." scenarios
- Troubleshooting section
- Error handling

✅ **Link to related content**
- Next steps
- Related guides
- Additional resources

### Technical Quality

✅ **Accurate information**
- Matches current system
- Steps actually work
- Examples are realistic

✅ **Consistent terminology**
- Use same terms across all docs
- Match system UI language
- Define terms if necessary

✅ **Working links**
- Internal links go to correct pages
- External links are current
- No broken links

✅ **Proper formatting**
- Headings hierarchy is correct
- Lists are properly formatted
- Code blocks use correct syntax
- Tables are readable

---

## Content Guidelines

### Writing Style

**Voice & Tone:**
- Friendly and helpful
- Professional but not stiff
- Encouraging and supportive
- Patient and understanding

**Example tones for different situations:**

**Normal instructions:**
> "Go to Finance → Record Payment. Enter the amount and click Save."

**Encouraging beginners:**
> "Don't worry if this seems complicated at first. Take it step by step, and you'll get the hang of it!"

**Warning about important steps:**
> "⚠️ Important: Always verify the student name before recording a payment. Corrections are difficult after submission."

**Celebrating success:**
> "Great! You've successfully set up your first term. Teachers can now start marking attendance."

### Formatting Conventions

**Headings:**
```markdown
# Page Title (H1 - only one per page)
## Main Section (H2)
### Subsection (H3)
#### Minor point (H4 - use sparingly)
```

**Emphasis:**
```markdown
**Bold** for UI elements, button names, field names
*Italic* for emphasis or introducing terms
`Code style` for system values, usernames, codes
```

**Lists:**
```markdown
**Numbered lists** for sequential steps:
1. First step
2. Second step
3. Third step

**Bullet lists** for non-sequential items:
- Item one
- Item two
- Item three

**Checklists** for tasks:
- [ ] Task to do
- [x] Completed task
```

**Admonitions:**
```markdown
:::tip Helpful Hint
Use this for best practices and helpful tips.
:::

:::note Important Information
Use this for key information users should know.
:::

:::caution Be Careful
Use this for warnings about potential issues.
:::

:::danger Critical
Use this for critical warnings (rare - only for serious issues).
:::
```

**Code Blocks:**
````markdown
```bash
npm install
npm start
```
````

**Tables:**
```markdown
| Column 1 | Column 2 | Column 3 |
|----------|----------|----------|
| Data 1   | Data 2   | Data 3   |
```

### Example Quality Standards

**Bad Example:**
> "Users can utilize the attendance functionality to track student presence."

**Why it's bad:**
- Too formal/stiff
- Vague ("utilize", "functionality")
- Doesn't tell user HOW

**Good Example:**
> "Mark attendance to track which students came to school today."
>
> **How to Mark Attendance:**
> 1. Go to Classes → Select your class
> 2. Click Mark Attendance
> 3. Mark each student as Present, Absent, or Late
> 4. Click Submit

**Why it's good:**
- Simple, direct language
- Clear action
- Step-by-step instructions
- Easy to follow

---

## Tools & Resources

### Documentation Tools

**Local Development:**
```bash
# Install dependencies
npm install

# Start development server
npm start

# Build for production
npm run build

# Serve production build
npm run serve
```

**Useful Commands:**
```bash
# Search for text in docs
grep -r "search term" docs/

# Find broken links (if using tool)
npm run check-links

# Check spelling (if configured)
npm run spell-check
```

### Markdown Tools

**Editors:**
- VS Code with Markdown extensions
- Typora (WYSIWYG Markdown editor)
- Any text editor

**VS Code Extensions (Recommended):**
- Markdown All in One
- Markdown Preview Enhanced
- Code Spell Checker
- Prettier (for formatting)

### Reference Materials

**Keep these handy:**
- This maintenance guide
- Revodev instruction files (in project root)
- 4SCH system access (for testing)
- eSchool SaaS docs (for technical reference, but don't copy!)
- User feedback log

---

## Troubleshooting

### Common Documentation Issues

**Problem: "Documentation doesn't match the system"**

**Solution:**
1. Check which version of 4SCH you're documenting
2. Update documentation to match current version
3. Add version notes if needed
4. Set up regular checks against system

**Problem: "Users say documentation is confusing"**

**Solution:**
1. Ask for specific feedback: Which part? Why confusing?
2. Test instructions with fresh eyes (colleague who doesn't know the feature)
3. Simplify language
4. Add more examples
5. Break complex procedures into smaller steps

**Problem: "Too many screenshots to maintain"**

**Solution:**
1. Use screenshots sparingly (only when truly helpful)
2. Focus screenshots on complex UI
3. Use annotations to highlight important parts
4. Consider using placeholder/generic screenshots for stable UI
5. Prioritize updating screenshots for frequently-viewed pages

**Problem: "Documentation getting too long"**

**Solution:**
1. Split into multiple pages
2. Use table of contents effectively
3. Create "Quick Start" vs "Complete Guide" versions
4. Use accordions/collapsible sections for advanced topics
5. Move reference material to separate section

---

## Version Control Best Practices

### Git Workflow

**Branching:**
```bash
# Create branch for your changes
git checkout -b docs/update-teacher-guide

# Make changes
# ...

# Commit with descriptive message
git commit -m "docs: Update teacher attendance section with new process"

# Push and create PR
git push origin docs/update-teacher-guide
```

**Commit Message Format:**
```
docs: Brief description of change

- Detailed point 1
- Detailed point 2
- Fixes #123 (if fixing an issue)
```

**Examples:**
```
docs: Add librarian guide for book checkout process

docs: Fix broken links in admin guide

docs: Update fee payment screenshots

docs: Clarify student registration workflow
```

### Pull Request Template

```markdown
## What changed?
Brief description of documentation changes

## Why?
Reason for the change (bug, new feature, user feedback, etc.)

## Affected pages:
- Page 1
- Page 2

## Checklist:
- [ ] Information is accurate
- [ ] Language is clear and simple
- [ ] Links work
- [ ] Follows style guide
- [ ] Tested instructions
- [ ] Screenshots updated (if applicable)
- [ ] Reviewed by peer

## Related issues:
Fixes #123
Related to #456
```

---

## Continuous Improvement

### Metrics to Track

**Useful metrics:**
- Most viewed pages (focus improvement here)
- Pages with high bounce rate (probably confusing)
- Search terms (what are users looking for?)
- User feedback volume per page
- Time on page (too short = didn't find info, too long = confusing?)

**Review quarterly:**
- Which pages need improvement?
- What new content is needed?
- What's working well?

### User Testing

**Periodically test documentation:**

1. **Find a user** who hasn't seen the documentation
2. **Give them a task:** "Try to mark attendance using this guide"
3. **Watch them** (don't help!)
4. **Note:**
   - Where do they get stuck?
   - What do they skip?
   - What questions do they ask?
5. **Improve** based on observations

### Gathering Feedback

**Active methods:**
- Add "Was this helpful?" widget to pages
- Conduct user surveys
- Interview users about documentation
- Monitor support tickets

**Passive methods:**
- Analytics (what do people read?)
- Search queries (what can't they find?)
- Time on page
- Page exit rates

---

## Documentation Updates Workflow

### Process for Major Updates

**1. Planning (Week 1)**
- Identify what needs updating
- Gather requirements
- Create outline
- Assign responsibilities

**2. Writing (Week 2-3)**
- Write new content
- Update existing content
- Create/update screenshots
- Add examples

**3. Review (Week 4)**
- Self-review
- Peer review
- User testing (if possible)
- Technical accuracy check

**4. Publishing (Week 5)**
- Final edits
- Merge to main branch
- Deploy to production
- Announce updates

**5. Follow-up (Week 6)**
- Monitor feedback
- Fix any issues found
- Iterate based on user response

---

## Communication Guidelines

### Announcing Documentation Updates

**When you update documentation, tell users:**

**Email/Announcement:**
```
📚 Documentation Update

We've updated the Teacher Guide with new sections on:
- Assignment grading workflows
- Bulk grade entry
- Generating class reports

Check it out: [link]

Questions? Contact [support email]
```

**In System (if possible):**
- Banner notification
- Changelog section
- "What's New" page

**Social Media/WhatsApp Groups:**
```
🎓 New documentation available!

Learn how to [specific task] in our updated [Guide Name].

Read now: [link]
```

---

## Resources & Templates

### Quick Reference

**Page Templates:**
- Role guide template: See existing guides (admin, teacher, etc.)
- Workflow template: See workflows.md
- FAQ template: See support/faq.md

**Writing Templates:**

**Feature Description:**
```markdown
## [Feature Name]

Brief intro: what it is and why it's useful.

### How to Use [Feature]

**Step 1: [Action]**
1. Detailed instruction
2. Detailed instruction

**Step 2: [Action]**
1. Detailed instruction
2. Detailed instruction

### Common Issues
- Problem and solution

### Tips
- Best practice
```

**Troubleshooting Entry:**
```markdown
### "Error message or problem description"

**Possible Causes:**
- Cause 1
- Cause 2

**Solutions:**
1. Try this first
2. If that doesn't work, try this
3. Last resort

**If nothing works:**
Contact [support] with [specific information needed]
```

---

## Contact & Support

### Questions About This Guide?

- **Documentation Lead:** [Name/Email]
- **Technical Writer:** [Name/Email]
- **Product Team:** [Contact]

### Contributing

Found an improvement for this maintenance guide?
1. Create an issue or PR
2. Discuss in team meeting
3. Update this guide

---

## Appendix: Style Guide Quick Reference

### Do's and Don'ts

**Do:**
✅ Use simple, everyday language  
✅ Break complex tasks into small steps  
✅ Use examples from African schools  
✅ Include screenshots for complex UI  
✅ Add troubleshooting sections  
✅ Link to related content  
✅ Use active voice  
✅ Be encouraging and friendly  

**Don't:**
❌ Use technical jargon without explanation  
❌ Assume prior knowledge  
❌ Copy from other documentation  
❌ Write long paragraphs  
❌ Use passive voice  
❌ Leave broken links  
❌ Skip proofreading  
❌ Forget your audience  

### Common Terms

**Standardized terminology:**
- "Class" not "Grade" (JSS 2, not Grade 8)
- "Term" not "Semester" in Nigerian context
- "Admission number" not "Student ID"
- "Fee" not "Tuition" (more general)
- "Parent/Guardian" not just "Parent"

### Nigerian English Considerations

**Spelling:**
- Use British English spelling (organise, colour, etc.)
- Nigerian currency: Naira (₦)
- Date format: DD/MM/YYYY

**Local Terms:**
- Primary (not Elementary)
- JSS (Junior Secondary School)
- SSS (Senior Secondary School)
- WAEC, NECO (exam bodies)

---

**Last Updated:** February 2026  
**Version:** 1.0  
**Maintained By:** 4SCH Documentation Team

---

## Remember

Great documentation is never finished—it's constantly evolving based on user needs, system changes, and feedback. Your work helps thousands of school staff, teachers, parents, and students do their jobs better and stay connected.

**Thank you for maintaining these docs! 📚✨**
