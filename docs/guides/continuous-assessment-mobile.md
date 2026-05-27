---
title: Continuous Assessment on Mobile Apps
sidebar_label: CA on Mobile
sidebar_position: 8
description: How teachers, students and parents use Continuous Assessment (CA) in the 4SCH mobile apps.
keywords: [continuous assessment, ca, mobile, teacher app, parent app, student app]
---

# Continuous Assessment on Mobile Apps

This guide explains how Continuous Assessment (CA) features work in the 4SCH mobile applications,
covering the Teacher Staff app and the Parent/Student app.

> **Prerequisites**
>
> - The web platform must have CA configured for the relevant exam.
>   See [Continuous Assessment Guide](./continuous-assessment.md) for setup instructions.
> - Mobile apps must be on version **1.9.3** or later.

---

## Overview

The CA system is now fully supported across all platforms:

| Feature | Web | Teacher App | Student / Parent App |
|---|---|---|---|
| Configure CA types & weightages | Yes | — | — |
| Enter CA marks (CA1, CA2, Exam) | Yes | Yes | — |
| View final results | Yes | View only | Yes |
| Expand CA breakdown per subject | Yes | — | Yes |
| Download PDF report | Yes | — | Yes |

---

## For Teachers — Entering CA Marks

### Where to Find It

Open the Teacher app and navigate to:

**Academics → Offline Exam Result**

### Workflow

1. **Select the class section** from the top filter.
2. **Select the exam** for which you want to enter marks.
3. **Select the subject** from the subject dropdown.
4. The **Assessment Type** dropdown appears automatically below the filters if the exam has
   CA configuration.
5. **Choose the CA type** to enter marks for (for example, `CA1`, `CA2`, or `Exam`).
   - The header updates to show the correct **Total Marks** for that CA (for example, `20` for CA1
     when CA1 is configured at 20%).
6. **Enter obtained marks** for each student.
   - Validation prevents you from entering marks above the CA-specific total.
7. **Save**:
   - **Save as Draft** — keeps marks editable.
   - **Submit and Publish** — finalizes marks for that CA type.

### Switching Between CA Types

When you change the Assessment Type:

- The student list reloads with marks for the newly selected CA type.
- Previously entered marks for other CA types are **preserved** in the database.
- The header shows the new CA-specific total marks.

### Tips

- The dropdown is **hidden automatically** for exams that do not have CA configured.
  In that case, the screen behaves exactly as before (single marks entry).
- You can submit CA1 today and CA2 next week — each CA type is independent.
- The web platform shows the same data in real time. Marks entered on mobile appear in the
  **Manage Exam Marks** view on the web.

---

## For Students & Parents — Viewing CA Breakdown

### Where to Find It

Open the Parent/Student app and navigate to:

**Academics → Result**

Then tap the exam whose result you want to view.

### What You See

For each subject, you will see:

- **Subject name** and overall **Grade**
- **Obtained marks / Total marks** (aggregated across all CA components)
- A **View CA Breakdown** link below the subject row

Tap **View CA Breakdown** to expand it. The card shows:

- **Each CA component** (CA1, CA2, Exam) with:
  - The weightage (for example, `CA1 (20%)`)
  - Obtained marks vs. total marks (for example, `18 / 20`)
  - A horizontal progress bar coloured by performance
  - The percentage for that CA component
- **Term Total** row summarising the aggregated performance

### Performance Colour Coding

| Colour | Performance | Range |
|---|---|---|
| Green | Excellent | 75% and above |
| Blue | Good | 60% – 74% |
| Orange | Average | 40% – 59% |
| Red | Needs improvement | Below 40% |

### Backwards Compatibility

If the exam does **not** have CA configured (legacy exam), the **View CA Breakdown** link
does not appear and the result is shown using the traditional single-mark display.

---

## Push Notifications

When school administrators publish exam results, both **students** and **parents/guardians**
receive a push notification. Tap the notification to jump directly to the result.

> **Note:** If you have multiple children, parents are taken to the result of the most
> recently published child. You can switch to other children from the child selector at the
> top of the screen.

---

## Troubleshooting

### "CA dropdown does not appear in the Teacher app"

- The exam may not have CA configured. Ask the school administrator to configure CA from
  the web at **Exams → Manage Exam → Configure CA**.
- Make sure you are on app version **1.9.3** or later.
- Restart the app and reselect the exam.

### "The marks I entered are showing for the wrong CA type"

- Make sure you selected the correct CA type **before** entering marks.
- If you accidentally saved against the wrong CA type, simply switch to the correct CA type
  and enter the marks again. Each CA type has independent storage.

### "I don't see the CA breakdown in the Parent/Student app"

- The exam result must be **published** before students/parents can view it.
- If the breakdown is missing for a published result, the exam may be a legacy exam
  without CA configuration. In that case, the aggregate result is still shown correctly.

### "Push notifications are not arriving"

- Make sure the app has notification permissions enabled in your device settings.
- Ensure the school has configured Firebase Cloud Messaging (FCM) credentials.
- If you are a parent and not receiving notifications, verify that your guardian profile is
  linked to the correct student in the school records.

---

## Related Guides

- [Continuous Assessment Guide](./continuous-assessment.md) — Full CA setup and concepts
- [Teacher Guide](./teachers.md) — General teacher app usage
- [Parent Guide](./parents.md) — General parent app usage
- [Student Guide](./students.md) — General student app usage
- [Notification Settings Management](./notification-settings-management.md) — Notification configuration
