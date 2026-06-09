---
id: payroll
title: Payroll Processing
description: Run monthly staff payroll in 4SCH — set up salary components (allowances and deductions), configure per-staff salaries, generate and finalise monthly payroll, and distribute payslips.
keywords: [payroll, staff salary, payslip, allowances, deductions, monthly payroll, school accounting, payroll components, payroll Nigeria, 4SCH]
sidebar_position: 12
---

import TOCInline from '@theme/TOCInline';

# Payroll Processing

Payday is the most important day of the month for your staff. 4SCH gives you a tidy, end-to-end Payroll module so the only thing you have to think about is who got paid what — not the maths behind it.

<TOCInline toc={[]} minHeadingLevel={2} maxHeadingLevel={3} />

---

## Quick Overview

The full monthly cycle in 4SCH is:

1. **One-time setup** — define your salary components (allowances and deductions)
2. **Per-staff setup** — set each staff member's base salary and component amounts
3. **Each month** — Generate Payroll → Review → Approve & Finalise → Distribute Payslips

Once steps 1 and 2 are done, step 3 takes around five minutes per month.

---

## One-Time Setup: Salary Components

Before your first payroll run, set up your salary components once.

A **salary component** is anything that either adds to or subtracts from a staff member's base salary — allowances like housing and transport, and deductions like pension, tax, and salary advances.

### Adding a Component

1. Open **Payroll → Payroll Settings**
2. Click **Add Component**
3. Fill in:

| Field | Notes |
|---|---|
| **Name** | What appears on payslips (e.g. "Housing Allowance", "Pension") |
| **Type** | Allowance (added) or Deduction (subtracted) |
| **Default amount** | Optional — leave blank if it varies per staff |
| **Calculation type** | Fixed amount or Percentage of the base salary |
| **Affected by Leave** | When on, the component is reduced proportionally for any unpaid-leave days in the month |

4. Click **Save**

### Editing, Archiving, and Restoring Components

You can edit, archive, and restore components at any time from **Payroll → Payroll Settings**. Components you've already used in a previous month's payroll are preserved on those old payslips even if you later change or archive them — historical payslips never change.

### Typical Components a School Sets Up

| Component | Type | Calculation | Affected by Leave |
|---|---|---|---|
| Housing Allowance | Allowance | Fixed | Yes |
| Transport Allowance | Allowance | Fixed | Yes |
| Pension | Deduction | Percentage | No |
| Tax (PAYE) | Deduction | Percentage | No |
| Salary Advance | Deduction | Fixed | No |
| Loan Repayment | Deduction | Fixed | No |

---

## Per-Staff Setup: Setting Each Staff Member's Salary

Once your components are configured, set each staff member's salary on their profile.

1. Open **Staff → Staff List**
2. Click any staff member to open their profile
3. Open the **Salary** tab
4. Fill in:
   - **Base Salary** (monthly)
   - **Each Allowance** with its own amount (default values from Payroll Settings appear pre-filled)
   - **Each Deduction** with its own amount
   - **Effective from** date
5. The **Net Salary** preview at the bottom updates live as you type, so there's no guessing what someone will actually take home
6. Click **Save**

### Salary History

4SCH keeps a full history of every salary change. The history panel under the Salary tab shows every previous record with its effective-from date — so if someone got a raise mid-year, you can always see the before-and-after.

---

## Monthly: Generating Payroll

At the end of the month, generate payroll in three clicks.

### Step 1: Generate

1. Open **Payroll → Generate Payroll**
2. The current **session year** is pre-selected
3. Pick the **month/year** you're paying for
4. By default 4SCH includes every active staff member; uncheck **Include All Staff** only if you want to run a partial payroll for specific people
5. Click **Generate**

Within a few seconds 4SCH builds a draft payroll row for every staff member, factoring in:

- Their current salary structure
- Their **approved leave** for the month — paid leave is paid in full, unpaid leave reduces every component flagged as **Affected by Leave**
- Any **mid-month joiners** — only the days from their start date are counted

You're now looking at a draft payroll table with every staff member's gross, deductions, days worked, and net. The status badge for each row is **Draft** — nothing has been finalised yet, so it's safe to review.

### Step 2: Review

- Hover any row to highlight it; click to open a side drawer with the full breakdown for that staff member (every allowance, every deduction, days worked, leave days, leave breakdown)
- To adjust a single row, click the small edit icon — add a one-off bonus, remove a deduction, or correct a typo. The total recalculates instantly.

### Step 3: Approve & Finalise

When you're happy with everything, click **Approve & Finalise All** at the top.

4SCH locks the payroll for the month:
- The figures become the official record
- Payslips become available for staff to download
- The totals feed into your finance reports

---

## Payslips

Every finalised payroll produces a **payslip** for each staff member.

### Where to Find Them

1. Open **Payroll → Payslips**
2. Filter by month, staff name, or status
3. Click the download icon on any row to open the PDF

Each payslip is a school-branded document showing employee details, the pay period, every line item (allowances and deductions broken out), gross, total deductions, net, and a footer with the accountant's name and a generated-on timestamp.

### Distributing Payslips

- **Single staff member by email** — click the mail icon on their row
- **Bulk email** — select multiple rows → **Email Selected Payslips**
- **Staff self-service** — when a staff member signs in to 4SCH, **My Payslips** in their menu shows every month they've been paid for with download links

---

## Common Edge Cases

| Situation | How 4SCH handles it |
|---|---|
| **Mid-month joiner** | Pro-rated automatically from their start date |
| **Mid-month leaver** | Pro-rated automatically to their last day |
| **Unpaid leave** | Automatically reduces every component flagged as **Affected by Leave** |
| **One-off bonus** | Add as an inline adjustment on the draft payroll row before finalising |
| **Salary advance** | Set up as a Deduction component, then schedule across multiple months on the staff member's Salary tab |
| **Re-running an already-finalised month** | Open **Payroll → History**, click **Unlock** on the month, edit, re-finalise. 4SCH keeps a record that the month was unlocked so there's a clear audit trail. |

---

## Troubleshooting

### "Generate Payroll" shows no staff

- Confirm there are active staff members with a salary set under **Staff → Staff List → [name] → Salary**
- Confirm the month you've selected falls within the **Effective from** date of each staff member's salary record

### A staff member's net pay is lower than expected

1. Open the draft row's side drawer
2. Check the **Days Worked** vs **Total Days in Month** counts
3. Check the **Leave Days** breakdown — is any of it Unpaid?
4. Check which components are flagged **Affected by Leave** in Payroll Settings

### A payslip won't download

- Confirm the month has been **Approved & Finalised** (Draft payslips don't download)
- Refresh the page and try again
- If the issue persists, contact 4SCH support

### I need to change a Finalised month

1. Open **Payroll → History**
2. Click **Unlock** next to the month
3. Make your corrections
4. Click **Approve & Finalise All** again

---

## Related Reading

- **[Staff Attendance & Leave](./staff-attendance-and-leave.md)** — because approved leave directly drives payroll
- **[Accountant Guide](./accountant.md)** — the broader finance role
- **[School Admin Guide](./school-admin.md)** — if you also handle other school setup

---

## Video Walkthrough

An 8-minute video version of this guide lives at `video-tutorials/scripts/05-feature-focused/18-payroll-processing.md`.
