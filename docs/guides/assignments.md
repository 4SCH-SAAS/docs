---
id: assignments
title: Assignments
description: Create assignments for students in 4SCH, attach reference materials, set a due date and points, allow resubmission, review submissions, and award marks. Covers the full assignment lifecycle from creation to grading.
keywords: [assignments, homework, submissions, grading, due date, resubmission, points, student work, 4SCH]
sidebar_position: 8
---

import TOCInline from '@theme/TOCInline';

# Assignments

Assignments are how 4SCH teachers give students work to complete and submit — at home, in class, or anywhere in between. Each assignment lives under a specific subject and class section, and the full lifecycle (create → submit → grade) happens inside 4SCH.

<TOCInline toc={[]} minHeadingLevel={2} maxHeadingLevel={3} />

---

## Quick Overview

The Assignments workflow in 4SCH is:

1. **Teacher creates an assignment** with a due date and points
2. **Students see it** under their subject and submit before the due date
3. **Teacher reviews submissions** and awards points (optionally allowing resubmission)
4. **Marks feed into reports** — and into Continuous Assessment if you've wired the assignment in

---

## Who Can Create Assignments?

By default, only the **teacher** assigned to a class–subject pair can create assignments for that pair. The mapping is set under **Staff → Teacher–Subject Assignment** (see **[Teacher–Subject Assignment](./teacher-subject-assignment.md)**).

If you're a Class Teacher with multiple subjects, you'll see one assignment list per subject; use the **Subject** filter at the top to switch between them.

---

## Creating an Assignment

1. Sign in as a Teacher
2. Open **Assignments** in the sidebar
3. Click **Add Assignment**
4. Fill in the form:

| Field | Notes |
|---|---|
| **Name** | The assignment title that students see (e.g. "Chapter 3 Worksheet") |
| **Description** | Optional. Instructions, expectations, marking guidance — anything you'd say aloud when giving the assignment |
| **Class Section(s)** | One or more class sections this assignment applies to (multi-select) |
| **Subject** | The subject the assignment counts under |
| **Due Date** | When students must submit by |
| **Points** | The maximum mark out of which the assignment is graded |
| **Allow Resubmission** | If on, students can re-submit a corrected version after their initial submission |
| **Extra Days for Resubmission** | If resubmission is allowed, how many days **after the original due date** students still have to re-submit |

5. Optionally attach **reference materials**:
   - **File** — one or more documents (PDF, DOC, image, etc.) up to your school's per-file upload limit
   - **URL** — a link to an external resource (a YouTube video, a Google Doc, an article)
6. Click **Save**

The assignment is created and immediately visible to every student in the selected class sections.

### Limits and File Types

- The maximum file size is set platform-wide and applies to both your reference materials and the students' submissions
- Reference material files must be a supported type — JPG, PNG, GIF, SVG, WEBP, PDF, DOC, DOCX, XML. The form blocks anything else with a clear error message.

---

## How Students Submit

When a student signs in (web or mobile):

1. They open **Assignments** in the sidebar
2. They see all open assignments for their class sections, sorted by due date
3. They click into an assignment to see the description, your reference materials, the due date, and the maximum points
4. They click **Submit** and attach their work (file uploads and/or a URL)
5. Their submission is timestamped automatically

If the due date has passed and resubmission is not allowed, the **Submit** button is hidden — students can still view the assignment but can no longer submit.

---

## Reviewing Submissions

1. On the **Assignments** page, click into the assignment
2. Click **View Submissions** (or open the **Submissions** tab)
3. You'll see one row per student with:
   - **Student name**
   - **Submission status** — Not Submitted · Submitted · Resubmitted · Late
   - **Submitted at** — timestamp
   - **Attachments** — download icons for each file or link
   - **Points awarded** — empty until you grade
   - **Status** — Pending Review · Reviewed

### Grading a Submission

1. Click the student's row to open the submission detail
2. Review the attached files / link
3. Enter the **Points** awarded (out of the assignment's maximum)
4. Optionally add a **Feedback** comment — the student sees this in their submission view
5. Click **Save**

The submission's status moves to **Reviewed** and the student is notified.

### Bulk Actions

You can mark several submissions as **Reviewed** at once by selecting their checkboxes and using the bulk action at the top — useful when you've reviewed a stack offline and just want to update the system.

---

## Allowing Resubmission

If you want to give students a chance to fix their work and try again, turn on **Allow Resubmission** when creating or editing the assignment, then set **Extra Days for Resubmission** (e.g. `3` to give them three more days after the original due date).

Students with an existing submission see a **Resubmit** button on their assignment page during the extra-days window. When they re-submit:

- Their new submission replaces the previous one on the submissions list (the previous attachments are retained in the audit history)
- The submission status becomes **Resubmitted**
- The "Submitted at" timestamp updates to the latest submission
- You re-grade as normal

---

## Editing or Deleting an Assignment

### Edit

1. In the assignments list, click the **edit** icon on the row
2. Change any field — including the due date, points, or attached materials
3. Click **Save**

### Delete

1. Click the **delete** icon on the row
2. Confirm — the assignment, its reference materials, and **all student submissions** are removed permanently

:::caution Delete With Care
Deleting an assignment after students have submitted removes their work too — there's no recovery. If you just want to stop accepting submissions, either let the due date pass or set Allow Resubmission off rather than deleting the assignment.
:::

---

## How Assignments Feed Reports

Assignment marks are available throughout the reporting modules:

- **Student dashboard** — the student sees a running list of their assignment marks per subject
- **Parent dashboard** — the parent sees the same view for each of their children
- **Teacher reports** — class-level distribution, mean, median per assignment
- **Report cards** — if your school's CA configuration includes an Assignments component, the average of all assignment marks for the term feeds straight in. See **[Continuous Assessment](./continuous-assessment.md)** for how to wire it up.

---

## Practical Tips

### Set the Due Date Before Class Ends, Not at Midnight

A due date of **15:30 on Wednesday** rather than **23:59 on Wednesday** keeps your evening peaceful and gives students a clearer cutoff.

### Use Reference Materials for the Brief, Not the Answer

Attach the worksheet or the brief, not the model answer — once it's on the assignment page, every student in those class sections can download it.

### Allow Resubmission for Skill-Building Assignments

For drafting, problem-solving, or anything that benefits from iteration, allow resubmission with a short window (1–3 days). For tests under timed conditions, leave it off.

### Score Out of 100 for Easy Conversion

Setting **Points** to `100` makes mental conversion to a percentage trivial. Schools that follow letter grades typically use 100 then map percentages → letters in the gradebook.

### Use Multi-Section to Avoid Duplicate Work

If you teach the same lesson to JSS1A, JSS1B, and JSS1C, create the assignment **once** with all three sections ticked. Each section's students see the same assignment, and you grade each set of submissions per section.

---

## Troubleshooting

### "Assignment Management feature not enabled"

Your school's subscription package may not include the Assignments module. Ask your School Admin to check **Settings → Subscription** — the package may need an upgrade.

### "I don't have permission to create assignments"

Assignments require the **assignment-create** permission. Your School Admin grants this from **Settings → Roles & Permissions**.

### A student says they can't submit

- Confirm the due date hasn't already passed (and that resubmission isn't enabled, or its window has also closed)
- Confirm the student is in one of the class sections you ticked when creating the assignment
- Ask the student which exact error message they see — the form usually says what's wrong (file too large, wrong extension)

### "Late" submissions and how to handle them

A submission counts as **Late** if it was submitted after the original due date but during the resubmission window. You can choose to grade late submissions as normal, deduct points, or leave them ungraded — the platform doesn't enforce a policy, that's up to your school.

### Bulk-marking is awarding wrong points

Bulk actions only change the **Status** to Reviewed — they don't set points. Points must be entered per student. If you want to award the same points to everyone, that's a per-student entry.

---

## Related Reading

- **[Lessons & Topics](./lessons-and-topics.md)** — the materials students learn from before completing assignments
- **[Continuous Assessment](./continuous-assessment.md)** — for how assignment marks roll into CA reports
- **[Teacher–Subject Assignment](./teacher-subject-assignment.md)** — the prerequisite mapping for being allowed to create assignments
- **[Teacher Guide](./teachers.md)** — broader teacher context

---

## Video Walkthrough

A focused video on assignment workflow lives at `video-tutorials/scripts/03-feature-deep-dives/03-assignment-workflow.md`.
