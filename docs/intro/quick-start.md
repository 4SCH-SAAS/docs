---
id: quick-start
title: Quick Start Guide
sidebar_position: 2
description: Quick start guide to set up your Nigerian school on 4SCH in under an hour. Configure classes, add teachers and students, create timetables, and go live.
keywords: [4SCH setup, school setup guide, configure school system, add students, create timetable, school administration, Nigerian school setup, academic session setup]
---

# Quick Start

This guide sets up a school on 4SCH in **under an hour**, assuming you've already gathered your basic school data (class list, staff list, student list, fee structure).

:::tip First time on 4SCH?
If you don't have a 4SCH account yet, start with **[Getting Started](./getting-started.md)** — it covers the three ways to get an account (Demo School, School Inquiry, or Welcome Email from your 4SCH support contact) and walks you through your very first sign-in.
:::

## Prerequisites

- Your school's **sign-in URL** (e.g. `yourschool.4sch.com`) and **School Admin** credentials
- Your school's basic structure (classes, sections, subjects)
- (Optional) Payment provider account details — Paystack, Flutterwave, or Stripe — for online fees
- (Optional) CSVs of students and staff for bulk import

---

## Step 0: Confirm your subscription plan

Open **Settings → Subscriptions**:

- If a **Current Plan** card appears at the top, your Super Admin has already assigned a custom plan — you're good to go.
- Otherwise, pick a package from the catalog (Recurring or Prepaid tab) and click **Subscribe**.

See **[Getting Started → Choose Your Subscription Package](./getting-started.md#choose-your-subscription-package)** for the full walk-through.

## Step 1: Confirm school identity

**Settings → School Settings**

- Check your school name, address, contact email/phone
- Upload your school logo (it appears on every report card, receipt, and certificate)

Then **Settings → Payment Configuration** — confirm your payment provider shows a green **Connected** badge.

## Step 2: Create the academic session and terms

**Settings → Sessions**

- Add the current session (e.g. 2025–2026) and mark it active
- Add terms within the session (First, Second, Third — or Semester 1, Semester 2)

See **[Session Year & Calendar Setup](../guides/session-year-calendar-setup.md)** for details.

## Step 3: Define classes, sections, and subjects

**Academic → Classes** / **Academic → Sections** / **Academic → Subjects**

- Add classes (e.g. JSS 1–3, SSS 1–3, or Grade 1–12)
- Add sections (A, B, C) under each class where you have multiple streams
- Add subjects and assign them to the relevant classes

## Step 4: Add staff (teachers + non-teaching)

**Staff → Staff List**

- Add staff individually, or bulk-import via CSV
- Assign roles (Teacher, Accountant, Driver, Librarian, Receptionist, Principal, etc.)
- For teachers, map each one to the subjects and classes they teach — see **[Teacher–Subject Assignment](../guides/teacher-subject-assignment.md)**

If you'll be running payroll, also set up:
- **Payroll Settings** — your salary components (allowances and deductions). See **[Payroll Processing](../guides/payroll.md)**
- **Each staff member's Salary tab** — base salary and component amounts
- **Leave Types** — annual leave allowances per type. See **[Staff Attendance & Leave](../guides/staff-attendance-and-leave.md)**

## Step 5: Add students and link parents

**Students → Add Student** or **Students → Bulk Import**

- Add students individually, or bulk-import via CSV (download the template first)
- Add parents/guardians (or import) and link each one to their child or children

## Step 6: Build the timetable

**Timetable → Build Timetable**

- Create periods, rooms, and the weekly schedule
- Publish — every teacher, student, and parent immediately sees their relevant view

## Step 7: Configure grading and exams

**Exams → Setup**

- Create exam types (e.g. CA1, CA2, Mid-Term, End-of-Term)
- For Continuous Assessment, set component weightages so they total 100%. See **[Continuous Assessment](../guides/continuous-assessment.md)**
- Set grade scales

## Step 8: Set up fees (optional)

**Fees → Fee Structures**

- Define fee heads (Tuition, Lab, Transport, etc.)
- Build the fee structure for each class
- Generate invoices for the term

If you connected a payment provider in Step 1, parents can pay online from their dashboard.

## Step 9: Notifications and welcome

**Settings → Email Settings** and **Settings → FCM Settings**

- Confirm both are connected (see **[Notification Settings & Management](../guides/notification-settings-management.md)** if not)
- Send a welcome announcement: **Communication → Announcements**

## Step 10: Go live

- Invite each role to sign in: teachers and parents get a welcome email automatically when you add them
- Monitor activity from your dashboard for the first week to catch any issues early

---

## What to learn next

Once your school is live, these guides will help you grow into the platform:

- **[School Admin Guide](../guides/school-admin.md)** — the broader admin role
- **[Super Admin Guide](../guides/super-admin.md)** — if you're a platform owner
- **[Payroll Processing](../guides/payroll.md)** — monthly staff payroll
- **[Staff Attendance & Leave](../guides/staff-attendance-and-leave.md)** — daily HR
- **[Issuing Certificates](../guides/certificates.md)** — end-of-term awards, leaving certificates, employment letters
- **[Subscription, Billing & Expiry](../guides/subscription-billing.md)** — how your school's plan renews and what happens at expiry
- **[Teacher Guide](../guides/teachers.md)**, **[Parent Guide](../guides/parents.md)**, **[Student Guide](../guides/students.md)** — for the people you're inviting
