---
id: staff-attendance-and-leave
title: Staff Attendance & Leave
description: Record daily staff attendance, browse monthly and per-staff history, set up leave types, manage leave requests, and see how approved leave automatically flows into payroll.
keywords: [staff attendance, leave management, leave request, leave approval, leave types, paid leave, unpaid leave, payroll integration, staff HR, 4SCH]
sidebar_position: 13
---

import TOCInline from '@theme/TOCInline';

# Staff Attendance & Leave

Staff attendance and leave aren't just HR paperwork — in 4SCH, they feed directly into payroll. This guide shows you how to record both quickly, accurately, and consistently.

<TOCInline toc={[]} minHeadingLevel={2} maxHeadingLevel={3} />

---

## Daily Staff Attendance

Recording daily staff attendance takes seconds.

### Marking Today's Attendance

1. Open **Staff → Staff Attendance**
2. Today's date is pinned at the top
3. Every active staff member is listed below with three quick-tap buttons:
   - **Present** (green)
   - **Absent** (red)
   - **On Leave** (blue, auto-set when there's an approved leave covering today)
4. Use **Mark All Present** at the top to set everyone to Present in one click
5. Then tap **Absent** for anyone who isn't in
6. Click **Save**

### Approved Leave Is Locked

Anyone with an approved leave covering today is **automatically marked On Leave** — the row is locked so you can't accidentally overwrite their leave status. Hover the row to see the leave reason as a tooltip.

---

## Browsing Attendance History

The same Staff Attendance page has a tab switcher at the top:

### Daily View

The default view — one day at a time, every staff member listed.

### Monthly View

Calendar grid for the current month with totals per day at the bottom. Use this to spot a day where attendance dipped unusually (a strike day, a snowstorm, anything that needs flagging).

### Per Staff View

Pick a staff member → their entire month appears as a grid of coloured dots with totals on the right:

- **Present** count
- **Absent** count
- **Leave** count

This is the view accountants love — it's the foundation of any payroll-related conversation.

### Export

Both Monthly and Per Staff views have an **Export to CSV** icon if you need the raw data for a spreadsheet.

---

## Setting Up Leave Types

Before you can approve a leave request, the school needs **leave types** set up. This is a one-time job at the start of each session year.

### Adding a Leave Type

1. Open **Staff → Leave Types** (sometimes labelled **Leave Masters**)
2. You'll usually see common defaults already: Annual, Sick, Casual, Maternity, Paternity, and an **Unpaid** category
3. Click **Add Leave Type** and fill in:

| Field | Notes |
|---|---|
| **Name** | What staff will see when requesting leave (e.g. "Sick Leave") |
| **Annual Allowance (days)** | How many of this type each staff member gets per session year |
| **Paid** toggle | Paid → no impact on payroll. Unpaid → reduces every salary component flagged as **Affected by Leave**. |
| **Session year** | Auto-selected to the current session |

4. Click **Save**

### Why Session-Scoped?

Each leave type is scoped to the current session year, so you naturally start fresh each new academic year — last year's allowances don't carry over.

---

## Staff Requesting Leave

When a teacher or other staff member needs to take leave, they request it themselves.

### How a Staff Member Requests Leave

1. Sign in as the staff member
2. Open **My Leave → Request Leave**
3. The form shows:
   - **Leave Type** dropdown — each option shows the staff member's **remaining balance** next to its name (e.g. "Sick Leave — 8 days remaining")
   - **From** and **To** date pickers
   - **Reason** textarea
   - Optional **Attachment** (e.g. a medical certificate)
   - A live preview: "You are requesting 3 days of Sick Leave from 12 Aug to 14 Aug"
4. Click **Submit Request**

The request appears on their **My Leave → Requests** list as **Pending**, and a notification fires to the school admin or principal who approves leave at your school.

---

## Approving or Rejecting Leave

As the approver, manage incoming requests from **Staff → Leave Requests**.

### The Approval Queue

1. Open **Staff → Leave Requests**
2. Filter to **Show Pending only** so you see what needs action
3. Click any row to open the detail panel

The detail panel shows:
- Staff name
- Leave type
- Dates
- Reason
- Attached document
- **Balance after this request** — the most important number to check before approving

### Approving

1. Click **Approve** (green)
2. Optionally add a comment — the staff member sees this in their notification
3. Submit

The status flips to **Approved**, the row disappears from the Pending filter, and a notification fires back to the staff member.

### Rejecting

1. Click **Reject** (red)
2. Add a comment explaining why — this is the kindest thing you can do for the staff member
3. Submit

### What Happens After Approval

The approved dates are **automatically marked as On Leave** on the daily Staff Attendance page (and locked, so they can't be accidentally overwritten). No double-entry.

---

## How This Feeds Payroll

The reason attendance and leave matter so much is what happens next.

When you generate monthly payroll, 4SCH reads each staff member's attendance and approved leave for the month and applies the rules:

| Day type | Payroll impact |
|---|---|
| **Paid leave** | No impact on the payslip |
| **Unpaid leave** | Every salary component flagged as **Affected by Leave** is reduced proportionally for the days off |
| **Absent (not covered by leave)** | Treated as unpaid for components flagged as Affected by Leave |
| **Present** | Full pay for the day |

That's why getting attendance and leave right matters: payroll inherits all of it automatically.

---

## Reports

**Staff → Leave → Reports** gives you a per-leave-type, per-staff breakdown for any date range, exportable to CSV. Useful for:

- End-of-year leave balance reviews
- Comparing leave usage across departments
- Spotting absence patterns

---

## Troubleshooting

### "Mark All Present" doesn't apply to one row

That row probably has an approved leave covering today — it's locked **On Leave** intentionally. Hover the row to see the leave details.

### A staff member's leave balance is wrong

Open **Staff → Leave Types → [type]** and confirm the annual allowance is correct for the current session year.

### A staff member can't submit a leave request

- Confirm they're trying to request fewer days than their remaining balance
- Confirm the leave type they're requesting still exists for the current session year

### An approved leave isn't showing on the attendance page

Refresh the attendance page. If it still doesn't show, open the leave request and confirm its dates are correct.

---

## Related Reading

- **[Payroll Processing](./payroll.md)** — for the full payroll cycle that consumes this attendance + leave data
- **[Accountant Guide](./accountant.md)** — the role that typically reviews monthly attendance summaries
- **[School Admin Guide](./school-admin.md)** — if you also handle other staff and school setup

---

## Video Walkthrough

A 7-minute video version of this guide lives at `video-tutorials/scripts/05-feature-focused/19-staff-attendance-and-leave.md`.
