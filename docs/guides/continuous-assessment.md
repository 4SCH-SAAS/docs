---
sidebar_position: 12
title: Continuous Assessment (CA) System
description: Complete guide to the Continuous Assessment system in 4SCH - configure weighted scoring, manage CA types, and track student progress across terms and sessions.
keywords: [continuous assessment, CA system, weighted scoring, term total, session cumulative, exam weightage, CA1, CA2, assessment management, progressive evaluation]
---

# Continuous Assessment (CA) System

import Link from '@docusaurus/Link';

:::tip New in v1.9.3
The Continuous Assessment system introduces progressive evaluation with weighted scoring. Configure CA1, CA2, and Exam components with custom weightages (e.g., CA1 20% + CA2 20% + Exam 60%), track term and session performance, and generate enhanced report cards with complete CA breakdown. Fully backward compatible with existing exams.
:::

The Continuous Assessment (CA) system in 4SCH enables schools to implement progressive evaluation with configurable weightages for different assessment components. Track student performance across CA1, CA2, and final exams with automated weighted calculations.

:::tip Quick Access
- 📊 **<Link to="/guides/offline-exams">Offline Exams Guide</Link>** - Traditional exam management
- 🎯 **[Quick Reference](#quick-reference)** - Fast lookup for common tasks
- 🚀 **[Getting Started](#getting-started)** - Set up your first CA configuration
:::

---

## Overview

### What is Continuous Assessment?

Continuous Assessment (CA) is a progressive evaluation method that:

- **Distributes Assessment** - Breaks down evaluation into multiple components (CA1, CA2, Final Exam)
- **Weighted Scoring** - Each component contributes a percentage to the final grade
- **Term Totals** - Automatically calculates weighted totals for each term
- **Session Tracking** - Computes cumulative averages across all terms in a session
- **Position Ranking** - Ranks students based on session cumulative performance

### Key Features

- ✅ **Flexible Configuration** - Define custom CA types and weightages per exam
- ✅ **Automated Calculations** - System calculates weighted scores automatically
- ✅ **Validation** - Ensures weightages total exactly 100%
- ✅ **Term Management** - Organize exams into academic terms
- ✅ **Session Cumulative** - Track overall performance across terms
- ✅ **Dual Ranking** - Both term position and session position
- ✅ **Backward Compatible** - Works seamlessly with existing exams
- ✅ **Enhanced Reports** - PDF report cards show complete CA breakdown

### CA Components

A typical CA configuration includes:

| Component | Example Weightage | Purpose |
|-----------|-------------------|---------|
| **CA1** | 20% | First continuous assessment (tests, quizzes) |
| **CA2** | 20% | Second continuous assessment (assignments, projects) |
| **CA3** | 10% | Optional third assessment (practical work) |
| **Final Exam** | 60% | Main examination |
| **Total** | **100%** | Combined assessment |

### Example Calculation

**Student: John Doe | Subject: Mathematics**

```
CA1 (20%):    45/50 = 90% → 90 × 20% = 18 points
CA2 (20%):    40/50 = 80% → 80 × 20% = 16 points
Exam (60%):   85/100 = 85% → 85 × 60% = 51 points
────────────────────────────────────────────────
Term Total:   18 + 16 + 51 = 85%
```

If John has 3 terms with totals 85%, 78%, 88%:
- **Session Cumulative:** (85 + 78 + 88) / 3 = **83.67%**

---

## Getting Started

### Prerequisites

Before setting up CA:

1. **Terms Created** - Academic terms defined for the session
2. **Exams Created** - Offline exams configured
3. **Classes Set Up** - Classes and sections properly configured
4. **Subjects Assigned** - Subjects linked to classes
5. **Students Enrolled** - Students assigned to classes

### Quick Setup (5 Minutes)

#### Step 1: Create a Term

**Navigate:** Terms → Create Term

**Required Information:**
- **Term Name** - e.g., "Term 1", "Mid-Term"
- **Session Year** - Current academic session
- **School** - Your school
- **Start Date** - Term beginning date
- **End Date** - Term ending date

**Click Submit** to create the term.

#### Step 2: Link Exam to Term

**Navigate:** Exams → Edit Exam

**Update:**
- **Select Term** - Choose the term created above
- **Exam Weightage** - Enter final exam percentage (e.g., 60%)

**Click Update** to save.

#### Step 3: Configure CA Types

**Navigate:** Exams → View Exams → Configure CAs (button)

**Add CA Types:**

1. Click **Add CA Type**
2. Select **CA Type** (CA1, CA2, CA3, etc.)
3. Enter **Weightage** (percentage)
4. Repeat for each CA

**Example Configuration:**
```
CA1: 20%
CA2: 20%
Exam Weightage: 60%
────────────
Total: 100% ✓
```

:::tip Real-Time Validation
The system validates as you type:
- ✅ Green indicator when total = 100%
- ❌ Red indicator when total ≠ 100%
- 📊 Progress bar shows current total
:::

**Click Save** to apply configuration.

---

## For School Administrators

### Managing Terms

:::tip New in v1.9.3
Academic terms organize exams into logical periods, enabling session-wide performance tracking and cumulative averaging across multiple terms.
:::

Terms organize exams into logical academic periods.

#### Creating Terms

**Navigate:** Terms → Create Term

**Best Practices:**
- Use consistent naming: "Term 1", "Term 2", "Term 3"
- Ensure dates don't overlap
- Link all exams in a term to the same term record
- Set realistic date ranges

#### Viewing Terms

**Navigate:** Terms → View Terms

**Features:**
- DataTables listing with search and pagination
- View exam count per term
- Edit or delete terms
- Filter by session year

:::warning Cannot Delete Terms with Exams
If a term has linked exams, you must first unlink or delete the exams before deleting the term.
:::

### Configuring CA for Exams

:::tip New in v1.9.3
Configure up to 5 CA types (CA1-CA5) with flexible weightages. The system validates in real-time, ensuring total weightage equals exactly 100%. Each exam can have its own CA configuration.
:::

#### Accessing CA Configuration

**Navigate:** Exams → View Exams → Configure CAs

Or when creating/editing an exam:
- Check the **Use Continuous Assessment** option
- The CA configuration modal will appear

#### Setting Up CA Weightages

**Steps:**

1. **Set Exam Weightage**
   - Enter the percentage for the final exam (e.g., 60%)
   - This represents the weight of the main examination

2. **Add CA Types**
   - Click **Add CA Type** button
   - Select CA type from dropdown (CA1, CA2, CA3, CA4, CA5)
   - Enter weightage percentage
   - Repeat for additional CAs

3. **Validate Total**
   - Ensure total = 100%
   - System shows real-time validation
   - Cannot save if total ≠ 100%

4. **Save Configuration**
   - Click **Save Configuration**
   - CA types are now active for this exam

**Example Configurations:**

**Standard Configuration:**
```
CA1: 20%
CA2: 20%
Exam: 60%
```

**Project-Based Configuration:**
```
CA1 (Quiz): 10%
CA2 (Assignment): 15%
CA3 (Project): 15%
Exam: 60%
```

**Practical-Heavy Configuration:**
```
CA1: 15%
CA2: 15%
CA3 (Practical): 20%
Exam: 50%
```

#### Editing CA Configuration

**Navigate:** Exams → View Exams → Configure CAs

**Steps:**
1. Modify weightages as needed
2. Ensure total remains 100%
3. Click Save

:::danger Impact on Existing Marks
Changing CA configuration after marks have been entered will recalculate all term totals. Ensure this is intentional before saving.
:::

### Publishing Results

#### How CA Affects Result Publishing

When you publish exam results:

1. **System Calculates:**
   - Weighted score for each CA component
   - Term total (sum of weighted scores)
   - Session cumulative average (across all terms)
   - Session position (ranking based on cumulative)

2. **Results Include:**
   - Individual CA scores with weightages
   - Term total percentage
   - Session cumulative (if multiple terms exist)
   - Both term position and session position

#### Publishing Process

**Navigate:** Exams → View Exams → Publish Results

**System Actions:**
1. Validates all students have marks for CA types
2. Calculates weighted totals
3. Computes session cumulative
4. Assigns session positions
5. Generates results

**Click Publish** to make results visible.

### Best Practices for Administrators

**Planning:**
- ✅ Define CA structure at beginning of session
- ✅ Keep weightages consistent across terms
- ✅ Communicate CA breakdown to teachers and parents
- ✅ Set clear deadlines for CA submissions

**Configuration:**
- ✅ Use meaningful CA names (align with school policy)
- ✅ Test with sample data before rolling out
- ✅ Document your CA policy for reference

**Monitoring:**
- ✅ Track CA submission progress
- ✅ Ensure all teachers submit all CA types
- ✅ Review calculated totals for accuracy
- ✅ Monitor session cumulative trends

---

## For Teachers

### Understanding CA Components

As a teacher, you'll enter marks for each CA component separately:

- **CA1** - First assessment (test, quiz, homework)
- **CA2** - Second assessment (assignment, project)
- **CA3+** - Additional assessments (if configured)
- **Exam** - Final examination

Each component has its own weightage contributing to the term total.

### Entering CA Marks

#### Accessing Marks Entry

**Navigate:** Exams → Submit Marks

**Select:**
1. **Exam** - Choose the exam
2. **Subject** - Your assigned subject
3. **CA Type** - Select which component (CA1, CA2, or Exam)

#### Step-by-Step: Entering CA Marks

**For Each CA Type:**

1. **Select CA Type**
   - Choose from dropdown: CA1, CA2, CA3, etc., or Exam
   - System loads student list for selected subject

2. **Enter Marks**
   - **Total Marks** - Maximum possible marks for this assessment
   - **Obtained Marks** - Student's actual score
   - Repeat for all students

3. **Save Options**
   - **Save as Draft** - Work in progress, not visible to students
   - **Publish** - Marks are final and visible

4. **Repeat for Other CAs**
   - Submit marks for CA1
   - Submit marks for CA2
   - Submit marks for Final Exam

:::tip Draft vs Publish
- **Draft**: Allows you to save work and continue later
- **Publish**: Makes marks visible to students/parents immediately
- You can edit published marks if needed
:::

#### Using the Tabbed Interface

**Navigate:** Exams → CA Marks Entry (New Interface)

**Features:**
- **Tabs** - Separate tabs for CA1, CA2, Exam
- **Progress Indicator** - Shows which CAs have been submitted
- **Quick Switch** - Move between CAs without re-selecting exam
- **Auto-Save** - Draft saves automatically

### Viewing CA Configuration

**Navigate:** Exams → View Exam Details

**CA Configuration Section Shows:**
- All CA types for this exam
- Weightage for each component
- Total validation status
- Whether all CAs have been submitted

### Best Practices for Teachers

**Marks Entry:**
- ✅ Enter marks promptly after each assessment
- ✅ Use "Save as Draft" while grading is in progress
- ✅ Double-check marks before publishing
- ✅ Complete all CA types before final publishing

**Organization:**
- ✅ Keep track of which CAs you've submitted
- ✅ Align CA assessments with school calendar
- ✅ Inform students about CA weightages
- ✅ Provide feedback on each CA component

**Communication:**
- ✅ Explain CA system to students at term start
- ✅ Share CA breakdown with parents
- ✅ Clarify how term total is calculated

---

## For Students

### Understanding Your CA Scores

Your final term grade is calculated from multiple assessments:

**Example Breakdown:**
```
Your scores in Mathematics:
├─ CA1 (20%): 18/20 = 90%  →  18.0 points
├─ CA2 (20%): 16/20 = 80%  →  16.0 points
└─ Exam (60%): 51/60 = 85% →  51.0 points
                             ─────────────
                 Term Total = 85.0%
```

### Viewing Your Results

#### On Web Portal

**Navigate:** Dashboard → Results → View Results

**Select Exam** to view detailed breakdown:
- Individual CA scores
- Weightages for each component
- Term total (weighted average)
- Session cumulative (if multiple terms)
- Both term and session positions

#### On Mobile App

**Open:** Results tab

**Features:**
- View term totals
- See overall percentage
- Check your grade
- View position in class

:::info Mobile App Note
The mobile app currently shows term totals but may not display individual CA breakdown. For detailed CA scores, use the web portal.
:::

### Understanding Session Cumulative

**Session Cumulative** is your average performance across all terms:

```
Term 1 Total: 85%
Term 2 Total: 78%
Term 3 Total: 88%
────────────────────
Session Average = (85 + 78 + 88) / 3 = 83.67%
```

**Session Position** ranks you against classmates based on session cumulative.

### Exam Preparation Tips

**For Each CA:**
- 📚 Prepare for each CA as it's a significant component
- 🎯 Understand the weightage of each assessment
- 📊 Track your progress across CAs
- 💡 Identify weak areas early

**For Term Success:**
- ✅ Perform consistently across all CAs
- ✅ Don't rely only on final exam
- ✅ Use CA feedback to improve
- ✅ Ask teachers for clarification

---

## For Parents

### Monitoring CA Progress

As a parent, you can track your child's performance across all assessment components.

### Viewing Your Child's CA Scores

#### On Web Portal

**Navigate:** Dashboard → Children → Select Child → Results

**View:**
- Complete CA breakdown per subject
- Weightage information
- Term total calculations
- Session cumulative average
- Position rankings

#### On Mobile App

**Open:** Child Details → Results

**Features:**
- Term totals by subject
- Overall percentage and grade
- Session performance tracking

### Understanding the Report Card

The PDF report card now includes complete CA breakdown:

**Example Report Card Section:**

| Subject | CA1 (20%) | CA2 (20%) | Exam (60%) | Total | Grade |
|---------|-----------|-----------|------------|-------|-------|
| Math    | 45/50     | 40/50     | 85/100     | 85%   | A     |
| English | 48/50     | 45/50     | 90/100     | 89%   | A+    |

**Additional Information:**
- Term Total: Weighted average
- Session Cumulative: Overall performance
- Session Position: Class ranking

### Supporting Your Child

**During Terms:**
- ✅ Monitor each CA performance
- ✅ Identify areas needing improvement early
- ✅ Ensure consistent preparation for all CAs
- ✅ Communicate with teachers about CA progress

**Understanding Scores:**
- 📊 Higher CA scores can boost overall grade
- 🎯 Poor CA performance requires early intervention
- 📈 Session cumulative shows long-term trends
- 💡 Compare term-to-term for growth tracking

### Common Parent Questions

**Q: Why doesn't my child's total match the sum of marks?**
A: The total is a weighted average. Each component (CA1, CA2, Exam) is multiplied by its weightage percentage before summing.

**Q: Can my child improve their grade after poor CA1?**
A: Yes! Each CA and the exam are separate opportunities. Strong performance in CA2 and the exam can significantly improve the term total.

**Q: What's the difference between term position and session position?**
A: Term position ranks students within that specific term. Session position ranks based on cumulative average across all terms in the session.

**Q: How often are CA marks updated?**
A: Teachers publish CA marks after each assessment. Check the portal regularly for updates.

---

## System Features

:::tip New in v1.9.3
The CA system includes automated weighted calculations, term and session management, dual ranking (term + session positions), enhanced PDF reports with CA breakdown, and real-time validation.
:::

### Term Management

**Terms** organize exams into logical academic periods:

- **Flexible Naming** - Term 1, Term 2, Mid-Term, etc.
- **Date Ranges** - Start and end dates for each term
- **Exam Linking** - All exams in a term reference the same term
- **Session Tracking** - Terms belong to specific session years

### Automated Calculations

**The system automatically calculates:**

1. **Weighted Scores**
   - Formula: (Obtained / Total) × 100 × (Weightage / 100)
   - Applied to each CA component and exam

2. **Term Totals**
   - Sum of all weighted scores
   - Stored in `exam_results.term_total`

3. **Session Cumulative**
   - Average of all term totals in a session
   - Stored in `exam_results.session_cumulative_average`

4. **Session Positions**
   - Ranking based on session cumulative
   - Updated automatically when results are published

### Validation & Error Checking

**System Validates:**

- ✅ Total weightage = 100% (cannot save otherwise)
- ✅ No duplicate CA types per exam
- ✅ Weightages between 0-100%
- ✅ All students have marks before publishing
- ✅ Obtained marks ≤ Total marks

### Backward Compatibility

**The system maintains compatibility with existing exams:**

- Exams without CA configuration work as before
- Traditional marks entry still available
- PDF reports adapt based on CA configuration
- No breaking changes to existing data

---

## Troubleshooting

### For Administrators

**Issue: Cannot save CA configuration - "Total must equal 100%"**

**Solution:**
1. Check sum of all weightages: CA1 + CA2 + ... + Exam
2. Adjust weightages to total exactly 100.00%
3. Use whole numbers or one decimal place for simplicity

**Issue: Term total not calculating**

**Solution:**
1. Verify CA configuration exists for the exam
2. Ensure marks are submitted for ALL CA types
3. Check that exam has `exam_weightage` set
4. Republish results to recalculate

**Issue: Session position showing NULL**

**Solution:**
1. Ensure student has results in multiple terms
2. Verify `session_cumulative_average` is calculated
3. Re-publish the latest exam to trigger position calculation

### For Teachers

**Issue: Cannot find CA type dropdown**

**Solution:**
1. Verify the exam has CA configuration
2. Check with admin that CA types are defined
3. Use the new CA marks entry interface (if available)

**Issue: Marks not visible to students after publishing**

**Solution:**
1. Ensure you clicked "Publish" not "Save as Draft"
2. Verify exam itself is published (admin control)
3. Check that session year is active

### For Students/Parents

**Issue: CA breakdown not showing in results**

**Solution:**
1. Check on web portal (mobile app may not show breakdown)
2. Verify exam has CA configuration (ask teacher)
3. Ensure results have been published

**Issue: Session cumulative shows 0**

**Solution:**
1. Session cumulative requires results from multiple terms
2. If only one term has results, cumulative will match that term
3. Wait for more terms to complete

---

## Quick Reference

### CA Configuration Checklist

- [ ] Create terms for the session
- [ ] Link exams to appropriate terms
- [ ] Set exam weightage (e.g., 60%)
- [ ] Add CA types with weightages
- [ ] Verify total = 100%
- [ ] Save configuration
- [ ] Inform teachers of CA types

### Marks Entry Workflow

**For Teachers:**

1. Navigate to Exams → Submit Marks
2. Select Exam and Subject
3. **For Each CA Type:**
   - Select CA type (CA1, CA2, or Exam)
   - Enter total marks and obtained marks
   - Save as Draft or Publish
4. Repeat for all CA types
5. Verify all students have complete marks
6. Notify admin when all CAs are complete

### Result Publishing Workflow

**For Administrators:**

1. Verify all teachers have submitted all CA types
2. Navigate to Exams → View Exams
3. Click "Publish Results"
4. System calculates:
   - Term totals
   - Session cumulative
   - Session positions
5. Results become visible to students/parents

### Common Weightage Patterns

| Pattern | CA1 | CA2 | CA3 | Exam | Use Case |
|---------|-----|-----|-----|------|----------|
| Standard | 20% | 20% | - | 60% | Most subjects |
| Project-Based | 15% | 15% | 20% | 50% | Practical subjects |
| Essay-Heavy | 25% | 25% | - | 50% | Languages |
| Quiz-Focused | 10% | 15% | 15% | 60% | Science/Math |

---

## Best Practices Summary

### For School Administrators

- ✅ Define CA policy clearly at start of session
- ✅ Use consistent weightages across terms
- ✅ Create terms before creating exams
- ✅ Test CA configuration before rolling out
- ✅ Monitor submission progress across teachers
- ✅ Communicate CA breakdown to all stakeholders

### For Teachers

- ✅ Submit marks for each CA promptly
- ✅ Use draft status for work in progress
- ✅ Verify calculations before publishing
- ✅ Keep students informed about weightages
- ✅ Provide feedback on each CA component
- ✅ Complete all CAs before term ends

### For Students

- ✅ Understand how term total is calculated
- ✅ Prepare for each CA as it contributes to final grade
- ✅ Track your progress across CAs
- ✅ Use CA feedback to improve performance
- ✅ Don't neglect any CA component

### For Parents

- ✅ Monitor each CA result as it's published
- ✅ Identify areas of concern early
- ✅ Support consistent study habits
- ✅ Communicate with teachers about CA progress
- ✅ Understand weightage impact on final grade

---

## Getting Help

### Having Issues with CA System?

**Check:**
1. This comprehensive guide
2. <Link to="/support/troubleshooting">Troubleshooting Guide</Link>
3. <Link to="/support/faq">FAQ Section</Link>

**Still Need Help?**
- Contact your school administrator
- Email: support@4sch.com
- <Link to="/support/contact-support">Submit Support Ticket</Link>

### Video Tutorials

📹 **Coming Soon:**
- CA System Overview
- Configuring CAs for Exams
- Entering CA Marks as a Teacher
- Understanding CA Scores as a Student

---

## Next Steps

**For Administrators:**
- <Link to="/guides/school-admin">School Admin Guide</Link>
- <Link to="/guides/offline-exams">Offline Exams Guide</Link>
- <Link to="/guides/session-year-calendar-setup">Session Year Setup</Link>

**For Teachers:**
- <Link to="/guides/teacher-guide">Teacher Guide</Link>
- <Link to="/guides/teacher-subject-assignment">Subject Assignment</Link>

**For Students:**
- <Link to="/guides/student-guide">Student Guide</Link>
- <Link to="/guides/offline-exams#for-students">Viewing Results</Link>

**For Parents:**
- <Link to="/guides/parent-guide">Parent Guide</Link>
- <Link to="/guides/offline-exams#for-parents">Monitoring Exams</Link>

---

*The Continuous Assessment system provides transparent, progressive evaluation that tracks student growth throughout the academic year. Use it effectively to provide comprehensive feedback and improve learning outcomes!* 📊✨
