# Video Script: Payroll Processing

**Duration:** 8 minutes
**Target Audience:** School Admins and Accountants who run staff payroll each month
**Learning Objectives:**
- Configure salary structure components (allowances and deductions) once, up front
- Set each staff member's monthly salary correctly
- Generate, review, and finalise monthly payroll
- Issue, download, and re-send individual payslips
- Handle the common edge cases — partial months, unpaid leave, mid-month joiners

---

## [00:00-00:20] INTRO (20 sec)

**[VISUAL]** 4SCH logo with the subtitle "Payroll Processing". Animated calendar flipping to the end of the month, then a stack of payslips fanning out.

**[VOICEOVER]:**
"Payday is the most important day of the month for your staff. 4SCH gives you a tidy, end-to-end payroll module so the only thing you have to think about is who got paid what — not the maths behind it."

---

## [00:20-01:30] One-Time Setup: Salary Components (70 sec)

**[VISUAL]**
- Sidebar → **Payroll → Payroll Settings**
- List of existing components, each with type **Allowance** or **Deduction**
- Click **Add Component**
- Form: **Name** (e.g. Housing Allowance), **Type** (Allowance / Deduction), **Default amount** (optional), **Calculation type** (Fixed / Percentage), **Affected by Leave** (checkbox)
- Save → component appears in the list
- Repeat for a few examples: Housing Allowance (Allowance / Fixed), Transport Allowance, Pension (Deduction / Percentage), Tax (Deduction / Percentage), Salary Advance (Deduction / Fixed)

**[VOICEOVER]:**
"Before your first payroll run, set up your salary components once.

A **salary component** is anything that either adds to or subtracts from a staff member's base salary — allowances like housing and transport, and deductions like pension, tax, and salary advances.

Open **Payroll → Payroll Settings** and click **Add Component**. For each component, set:

- A **name** that's clear to staff (it'll appear on payslips)
- A **type** — Allowance (added) or Deduction (subtracted)
- A **default amount** if everyone gets the same value — leave blank if it varies per staff
- A **calculation type** — Fixed amount or a Percentage of the base salary
- An **Affected by Leave** toggle — when on, the component is reduced proportionally for any unpaid-leave days in the month

You can add, edit, archive, and restore components at any time. Components you've already used in a previous month's payroll are preserved on those old payslips even if you later change or archive them."

**[ON-SCREEN TEXT]**
- "Payroll → Payroll Settings"
- "Allowance · Deduction"
- "Fixed · Percentage"
- "Affected by Leave = pro-rates for unpaid days"

---

## [01:30-02:45] Setting Each Staff Member's Salary (75 sec)

**[VISUAL]**
- Sidebar → **Staff → Staff List**
- Click any staff member → profile opens
- Click the **Salary** tab
- Form shows:
  - **Base Salary** (monthly)
  - Each Allowance component with its own amount field
  - Each Deduction component with its own amount field
  - **Effective from** date
  - Live **Net Salary** preview at the bottom that updates as values change
- Save → "Salary set" toast → small history panel underneath shows previous salary records

**[VOICEOVER]:**
"Once your components are configured, set each staff member's salary on their profile.

Open **Staff → Staff List**, click a staff member, then open the **Salary** tab.

Enter the **base salary** at the top, then fill in the amount for each allowance and deduction. Default values you set in Payroll Settings appear pre-filled — change them where they differ for this person.

At the bottom you'll see a live **Net Salary** preview that updates as you type, so there's no guessing about what someone will actually take home.

Set the **Effective from** date and click **Save**. 4SCH keeps a full history of every salary change, so if someone got a raise mid-year you can always see the before-and-after."

**[ON-SCREEN TEXT]**
- "Staff → [name] → Salary tab"
- "Live Net Salary preview"
- "Salary history kept forever"

---

## [02:45-04:30] Generating Monthly Payroll (105 sec)

**[VISUAL]**
- Sidebar → **Payroll → Generate Payroll**
- Form: **Session Year** (auto-selected), **Month/Year** picker, **Include All Staff** checkbox (default on), or pick specific staff
- Click **Generate**
- Progress bar runs across the bottom for ~3 seconds
- Result page appears: a table with every staff member, their base, allowance subtotal, deduction subtotal, days-worked (factoring leave), and net pay
- Status badges across rows: **Draft** (yellow)
- Top of page: total payroll cost summary card

**[VOICEOVER]:**
"At the end of the month, generate payroll in three clicks.

Open **Payroll → Generate Payroll**. The current session year is pre-selected. Pick the month you're paying for. By default 4SCH includes every active staff member; uncheck the **Include All Staff** box only if you want to run a partial payroll for specific people.

Click **Generate**. Within a few seconds 4SCH builds a draft payroll row for every staff member, factoring in:

- Their current salary structure
- Their **approved leave** for the month — paid leave is paid in full, unpaid leave reduces every component flagged as **Affected by Leave**
- Any mid-month joiners — only the days from their start date are counted

You're now looking at a draft payroll table with every staff member's gross, deductions, days worked, and net. The status badge for each row is **Draft** — nothing has been finalised yet, so it's safe to review."

**[ON-SCREEN TEXT]**
- "Payroll → Generate Payroll"
- "Pick month → click Generate"
- "Draft = nothing finalised yet"
- "Auto-handles: leave, mid-month joiners"

---

## [04:30-05:30] Reviewing and Approving Payroll (60 sec)

**[VISUAL]**
- Draft payroll table — hover a row → row highlights → click row → side drawer slides in with full breakdown for that staff member (every allowance, every deduction, days worked, leave days, leave breakdown)
- Edit icon on a row → opens an inline adjustment form (e.g. add a one-off bonus, remove a deduction)
- Save → row recalculates → toast: "Adjusted for [name]"
- Top of table: **Approve & Finalise All** button (primary), **Save as Draft** (secondary)
- Click **Approve & Finalise All** → confirmation modal → click **Confirm**
- All row badges flip from **Draft (yellow)** to **Finalised (green)**

**[VOICEOVER]:**
"Take a few minutes to look down the draft list. Click any row to see its full breakdown side by side — every allowance, every deduction, and exactly how leave days affected the final number.

To adjust a single row, click the small edit icon — add a one-off bonus, remove a deduction, or correct a typo. The total recalculates instantly.

When you're happy with everything, click **Approve & Finalise All** at the top. 4SCH locks the payroll for the month — the figures become the official record, payslips become available for staff to download, and the totals feed into your finance reports."

**[ON-SCREEN TEXT]**
- "Click a row to see the breakdown"
- "Edit a single row for one-off adjustments"
- "Approve & Finalise All when you're ready"
- "Finalising locks the month's figures"

---

## [05:30-06:45] Payslips (75 sec)

**[VISUAL]**
- Sidebar → **Payroll → Payslips**
- Filters: month, staff name, status
- Each row → download icon (PDF) and a "Send by email" icon
- Click download → PDF preview opens — clean, school-branded payslip with employee details, period, line items, gross, total deductions, net, and a footer with the accountant's name and a generated-on timestamp
- Click "Send by email" on a row → toast: "Payslip emailed to [staff email]"
- Bulk-action at top: select multiple → **Email Selected Payslips**
- A separate view for staff: a staff member signs in → **My Payslips** page shows their own months in reverse chronological order with download links

**[VOICEOVER]:**
"Every finalised payroll produces a **payslip** for each staff member. Find them in **Payroll → Payslips**.

Filter by month, staff name, or status. Click the download icon on any row to open the PDF — it's a clean, school-branded document with employee details, the pay period, every line item (allowances and deductions broken out), and the net figure.

To email a payslip to the staff member, click the small mail icon on their row. To send a batch — for example, every payslip for last month in one go — select the rows and click **Email Selected Payslips** at the top.

Staff don't need to wait for an email either. When they sign in to 4SCH, **My Payslips** in their menu shows every month they've been paid for, with download links for each. That's the same PDF you'd send them, available to them on demand."

**[ON-SCREEN TEXT]**
- "Payroll → Payslips"
- "Download · Email · Bulk Email"
- "Staff see their own under My Payslips"

---

## [06:45-07:30] Common Edge Cases (45 sec)

**[VISUAL]**
- Small checklist appears:
  - 🟢 **Mid-month joiner** — pro-rated automatically from start date
  - 🟢 **Mid-month leaver** — pro-rated automatically to last day
  - 🟢 **Unpaid leave** — auto-deducts components flagged as Affected by Leave
  - 🟢 **One-off bonus** — add as an inline adjustment on the draft row
  - 🟢 **Salary advance** — set up as a Deduction component, schedule across multiple months on the staff member's salary tab
  - 🟡 **Re-running an already-finalised month** — first **Unlock** the month from **Payroll → History**, edit, re-finalise

**[VOICEOVER]:**
"A few common situations and how 4SCH handles them:

Mid-month joiners and leavers — pro-rated automatically based on their start or last day.

Unpaid leave — automatically reduces any component flagged as **Affected by Leave**.

One-off bonuses — add them as inline adjustments on the draft payroll row before finalising.

Salary advances — set up an Advance deduction component and schedule it across multiple months on the staff member's salary tab.

If you ever need to re-run an already-finalised month — say you found a mistake the day after approving — open **Payroll → History**, click **Unlock** on the month, make your corrections, and re-finalise. 4SCH keeps a record that the month was unlocked so there's a clear audit trail."

**[ON-SCREEN TEXT]**
- "Pro-ration: automatic"
- "Bonuses: inline adjustment on the draft row"
- "Advances: deduction component, schedulable"
- "Unlock + re-finalise leaves an audit trail"

---

## [07:30-08:00] Wrap-up (30 sec)

**[VISUAL]**
- Recap card: Setup → Set salaries → Generate → Review → Finalise → Distribute payslips
- Up-next teaser pointing to **Staff Attendance & Leave** (since the two feed each other) and **Expense Management**
- 4SCH logo + soft outro music

**[VOICEOVER]:**
"That's payroll, end to end. Once your components are set and each staff member's salary is recorded, every month becomes a five-minute job.

Since leave directly affects payroll, the next video in this sequence is **Staff Attendance & Leave** — see you there."

**[ON-SCREEN TEXT]**
- "Next: Staff Attendance & Leave"

---

### SEO Metadata

**Title:** Payroll Processing in 4SCH — Generate, Approve, and Distribute Monthly Payslips

**Description:** A school-admin-friendly walkthrough of the 4SCH Payroll module. Configure allowance and deduction components once, set each staff member's salary, then generate, review, approve, and distribute monthly payslips. Covers pro-ration for mid-month joiners/leavers, unpaid-leave handling, one-off bonuses, salary advances, and re-running a finalised month.

**Tags:** payroll, staff salary, payslip, allowances, deductions, monthly payroll, school accounting, 4SCH tutorial

---

## Script Version History

- **v1.0** — June 2026 — Initial script creation. Covers the full Payroll flow verified against the `ng.4sch.com` codebase (`PayrollSettingController::index/store/edit/update/destroy/restore/trash` for components, `PayrollController::index/create/store/show` for monthly generation, `PayrollController::slip_index/slip_list/slip` for payslips, integration with `LeaveInterface` so unpaid leave correctly affects payroll). Standard end-user UI voice; real on-screen field labels; no SMS, no DB/code references.
