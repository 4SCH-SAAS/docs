---
id: holidays
title: Holidays & School Calendar
description: Add and manage school holidays in 4SCH — half-day or full-day breaks, session-year boundaries, and how holidays interact with staff attendance and approved leave.
keywords: [holidays, school calendar, public holidays, school breaks, session year, staff attendance, leave conflict, 4SCH]
sidebar_position: 5
---

import TOCInline from '@theme/TOCInline';

# Holidays & School Calendar

Schools live and breathe by their calendar. 4SCH's Holiday module lets you add, edit, and remove every holiday for the current session year in a few clicks, with sensible guard-rails that prevent the most common mistakes.

<TOCInline toc={[]} minHeadingLevel={2} maxHeadingLevel={3} />

---

## Quick Overview

The Holidays module supports a simple two-step workflow:

1. **Add a holiday** — give it a date and a title
2. **Done** — the date is now flagged across the calendar, attendance pages, and reports

Holidays are scoped to the **current session year**, so you naturally start fresh each new academic year.

---

## Viewing the Holiday List

1. Open **Academic → Holidays** in the sidebar
2. The page shows every holiday in the current session year, with:
   - **Date**
   - **Day of the week**
   - **Title** (e.g. "Christmas Day", "Inter-House Sports")

Use the search box at the top to find a specific holiday quickly.

---

## Adding a Holiday

1. Click **Add Holiday** at the top of the page
2. Fill in the form:

| Field | Notes |
|---|---|
| **Date** | The day of the holiday. Must fall within the current session year (start date → end date). |
| **Title** | A short, clear name (e.g. "Independence Day"). Appears on the calendar and on student/parent dashboards. |

3. Click **Save**

The holiday is created and appears immediately in the list and on every calendar view across the platform.

### Guard-rails

4SCH protects you from common errors when adding a holiday:

| If you try to add a holiday on… | What happens |
|---|---|
| A date **outside the current session year** | The form shows: *"The selected date must fall within the current session year."* — change the date or change the session year. |
| A date that already has **staff attendance recorded** | The form shows: *"Cannot add holiday on a date with existing staff attendance records."* — undo or delete the attendance entries for that date first, then add the holiday. |
| A date that has **approved leave** | The form will warn you with the number of staff already on approved leave for that date. You can still proceed — useful for shared holidays that overlap with planned leave — but the warning gives you a chance to coordinate first. |

---

## Editing or Deleting a Holiday

### Edit

1. In the holiday list, click the small **edit** icon on the holiday's row
2. Change the date or title
3. Click **Save** — the same date guard-rails apply as when adding

### Delete

1. Click the small **delete** icon on the holiday's row
2. Confirm — the holiday is removed and the date returns to being a normal working day

---

## How Holidays Interact with Other Modules

Holidays don't sit alone — they ripple across the platform.

| Module | Effect |
|---|---|
| **Staff Attendance** | Holiday dates show on the daily attendance grid as **Holiday** and skip the day's expected-headcount calculation. |
| **Student Attendance** | Holiday dates are not eligible for student attendance entry. Teachers see "Holiday" instead of the attendance form on those dates. |
| **Timetable** | Periods on a holiday date are visually marked so teachers and students know not to expect class. |
| **Reports & Analytics** | Holiday days are excluded from "School Days" totals, so attendance percentages remain fair. |
| **Notifications** | If you turn on the "Upcoming Holiday" reminder template in **Settings → Notification Templates**, parents and staff get an in-app and email reminder one or two days before each holiday (configurable). |

---

## Practical Tips

### Add the Full Year in One Sitting

At the start of each session year, add every known holiday at once — public holidays, mid-term breaks, ceremony days, exam days. Doing it in one session is much faster than reacting to dates as they approach.

### Half-Day Breaks

If a "half day" is genuinely a normal working day with classes ending early, **don't** add it as a holiday — adjust the timetable for that day instead. Holidays in 4SCH are full-day events.

### Reschedule, Don't Delete

If a public holiday moves (e.g. observed on a different day), **edit the existing holiday's date** rather than deleting and re-creating it. Editing preserves any notifications or calendar references already in flight.

### Coordinate With the Accountant

If your school's payroll uses an **Affected by Leave** salary component and a holiday falls in the middle of a staff member's unpaid leave, the day is still counted as a holiday (no impact). The Holidays + Staff Attendance + Payroll integration takes care of this automatically — see **[Staff Attendance & Leave](./staff-attendance-and-leave.md)**.

---

## Troubleshooting

### "The selected date must fall within the current session year"

The Session Year settings define the academic year's start and end. The holiday date you entered falls before or after that window.

**Fix:** open **Settings → Sessions** and confirm the **start date** and **end date** of the active session year. Either change the holiday date, or extend the session year if appropriate.

### "Cannot add holiday on a date with existing staff attendance records"

A staff member's attendance was already saved for that date — so it can't retroactively become a holiday.

**Fix:**
1. Open **Staff → Staff Attendance** and switch to the affected date
2. Remove the attendance entries for that day
3. Re-attempt adding the holiday

### Holiday warning about approved leave

Just informational — you can proceed with the holiday. The warning is so you can let the affected staff know that the leave day they planned is now also a holiday for everyone.

### A deleted holiday is still showing on the calendar

Hard-refresh the calendar page (Ctrl+Shift+R on Windows / ⌘+Shift+R on Mac) to clear any cached view.

---

## Related Reading

- **[Session Year & Calendar Setup](./session-year-calendar-setup.md)** — defines the start and end dates that bound your holidays
- **[Staff Attendance & Leave](./staff-attendance-and-leave.md)** — for the modules holidays interact with
- **[School Admin Guide](./school-admin.md)** — broader admin context
