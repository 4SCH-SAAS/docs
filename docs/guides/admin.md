---
id: admin-guide
title: School Admin Guide
slug: /guides/admin
sidebar_position: 1
---

import Screenshot from '@site/src/components/Screenshot';

import TOCInline from '@theme/TOCInline';
import CardGrid from '@site/src/components/CardGrid';
import DashboardIcon from '@site/src/components/icons/Dashboard';
import AcademicIcon from '@site/src/components/icons/Academic';
import AttendanceIcon from '@site/src/components/icons/Attendance';
import GradesIcon from '@site/src/components/icons/Grades';
import UsersIcon from '@site/src/components/icons/Users';
import FinanceIcon from '@site/src/components/icons/Finance';
import DataIcon from '@site/src/components/icons/Data';
import SecurityIcon from '@site/src/components/icons/Security';
import MessagingIcon from '@site/src/components/icons/Messaging';
import ReportsIcon from '@site/src/components/icons/Reports';

# School Admin Guide

<TOCInline toc={[]} minHeadingLevel={2} maxHeadingLevel={3} />

<CardGrid
  cards={[
    { to: '#admin-console-overview', title: 'Dashboard', description: 'KPIs, quick actions, navigation', icon: <DashboardIcon /> },
    { to: '#admin-console-overview', title: 'Dashboard', description: 'KPIs, quick actions, navigation' },
    { to: '#academic-setup', title: 'Academic setup', description: 'Sessions, classes, subjects, timetable', icon: <AcademicIcon /> },
    { to: '#attendance-configuration', title: 'Attendance', description: 'Modes, policies, notifications', icon: <AttendanceIcon /> },
    { to: '#grades-assessments', title: 'Grades & assessments', description: 'Types, weights, templates', icon: <GradesIcon /> },
    { to: '#users-permissions', title: 'Users & permissions', description: 'Roles, invites, MFA', icon: <UsersIcon /> },
    { to: '#finance', title: 'Finance', description: 'Invoices, payments, gateway', icon: <FinanceIcon /> },
    { to: '#data-import-export', title: 'Data import/export', description: 'Templates, validations', icon: <DataIcon /> },
    { to: '#security-compliance', title: 'Security & compliance', description: 'Audit logs, retention', icon: <SecurityIcon /> },
    { to: '#messaging', title: 'Messaging', description: 'Channels, templates', icon: <MessagingIcon /> },
    { to: '#reports-analytics', title: 'Reports & analytics', description: 'KPIs, trends, exports', icon: <ReportsIcon /> },
  ]}
/>


## <span className="heading-icon"><DashboardIcon size={18} /></span> Admin Console overview {#admin-console-overview}
- Dashboard: High-level metrics (attendance, dues, messages)
- Quick actions: Add student, schedule exam, create invoice
- Navigation: Academic, Users, Finance, Messaging, Reports, Settings

:::tip Screenshot
Admin Console — Dashboard

<Screenshot src="/img/screens/admin/admin-dashboard.svg" alt="4SCH Admin Console dashboard with KPIs, quick actions, and navigation" caption="The Admin Console dashboard shows attendance rate, fee collection, and quick actions for common tasks." width={960} />

_The Admin Console dashboard shows attendance rate, fee collection, and quick actions for common tasks._
:::

## <span className="heading-icon"><AcademicIcon size={18} /></span> Academic Setup {#academic-setup}
- Sessions & Terms: Define academic calendar
- Classes & Sections: Structure by grade and cohorts
- Subjects: Create, categorize (core/elective), and assign to classes
- Timetable: Periods, rooms, teachers, substitutions

:::note Screenshot
Academic Structure configuration

<figure>
  <img src="/img/academic-structure.svg" alt="Academic structure page listing sessions, classes, sections, and subjects" style={{maxWidth: 960, width:'100%', height:'auto'}} />
  <figcaption>Academic structure page listing sessions, classes, sections, and subjects</figcaption>
</figure>

_Configure sessions, classes, sections, and subjects before assigning teachers and students._
:::

:::tip Screenshot
Timetable builder

<figure>
  <img src="/img/timetable-builder.svg" alt="Timetable builder showing periods, rooms, and teacher assignments" style={{maxWidth: 960, width:'100%', height:'auto'}} />
  <figcaption>Timetable builder showing periods, rooms, and teacher assignments</figcaption>
</figure>

_Create and publish weekly schedules; manage rooms and teacher allocations._
:::

## <span className="heading-icon"><AttendanceIcon size={18} /></span> Attendance Configuration {#attendance-configuration}
- Mode: Daily (AM/PM) or Period-based per subject
- Policies: Late grace, absence reasons, approval workflow
- Parent notifications: Enable/disable instant alerts

:::note Screenshot
Attendance policy settings

<figure>
  <img src="/img/attendance-policy.svg" alt="Attendance policy settings with late grace minutes and approval workflow toggles" style={{maxWidth: 960, width:'100%', height:'auto'}} />
  <figcaption>Attendance policy settings with late grace minutes and approval workflow toggles</figcaption>
</figure>

_Define how and when attendance can be taken or corrected, and who approves changes._
:::

## Grades & assessments {#grades-assessments}
- Exam types and weightages
- Rubrics and grading scales (numeric/letter)
- Gradebook templates and auto-calculation rules
- Transcript formats and approval

:::tip Screenshot
Exam types and setup

<figure>
  <img src="/img/exam-setup.svg" alt="Exam setup screen for defining exam types, weightages, and term mapping" style={{maxWidth: 960, width:'100%', height:'auto'}} />
  <figcaption>Exam setup screen for defining exam types, weightages, and term mapping</figcaption>
</figure>

_Set exam types (Midterm, Final), weightages, and term mappings for transcripts._
:::

Student information:
- Create/Edit Student Profile
- Enrollment and promotions between sessions
- Documents: Upload and manage attachments
- Health and emergency contacts

## Users & permissions {#users-permissions}
- Roles: Admin, Teacher, Parent, Student, Finance, Registrar
- Custom roles for fine-grained access
- Bulk invite and deactivation
- MFA, password policy, and SSO

:::note Screenshot
User management — staff and invitations

<figure>
  <img src="/img/user-management.svg" alt="User management list with roles, status, and invitation controls" style={{maxWidth: 960, width:'100%', height:'auto'}} />
  <figcaption>User management list with roles, status, and invitation controls</figcaption>
</figure>

_Invite staff, assign roles, and deactivate accounts when necessary._
:::

:::tip Screenshot
Permissions matrix

<figure>
  <img src="/img/permissions-matrix.svg" alt="Permissions matrix grid by role and module with granular actions" style={{maxWidth: 960, width:'100%', height:'auto'}} />
  <figcaption>Permissions matrix grid by role and module with granular actions</figcaption>
</figure>

_Tailor access by module and action to enforce least-privilege._
:::

## <span className="heading-icon"><DataIcon size={18} /></span> Unified records {#unified-records}
Keep student, staff, class, and fee data synchronized in one place. This reduces reconciliation work and ensures every module reads a consistent, up‑to‑date profile.

- One profile feeds attendance, grading, billing, and messaging
- Fewer mismatches across modules and exports
- Cleaner permissions: rules apply consistently across data
- Better reporting accuracy end‑to‑end

## Finance {#finance}
- Fee heads and structures
- Scholarships, concessions, and transport fees
- Invoices, due dates, penalties
- Payment gateways and reconciliation

:::tip Screenshot
Finance — Invoices overview

<figure>
  <img src="/img/finance-invoices.svg" alt="Invoices list showing status, due dates, balances, and actions" style={{maxWidth: 960, width:'100%', height:'auto'}} />
  <figcaption>Invoices list showing status, due dates, balances, and actions</figcaption>
</figure>

_Monitor invoice statuses, send reminders, and record payments._
:::

:::note Screenshot
Payment gateway configuration

<figure>
  <img src="/img/payment-gateway-config.svg" alt="Payment gateway settings with API keys and webhooks configuration" style={{maxWidth: 960, width:'100%', height:'auto'}} />
  <figcaption>Payment gateway settings with API keys and webhooks configuration</figcaption>
</figure>

_Connect your payment provider and verify webhook callbacks for reconciliation._
:::

## Data import/export {#data-import-export}
- CSV templates and validation previews
- Partial pilots before full import

:::note Screenshot
Bulk data import

<figure>
  <img src="/img/data-import.svg" alt="Data import wizard with file upload, field mapping, and validation preview" style={{maxWidth: 960, width:'100%', height:'auto'}} />
  <figcaption>Data import wizard with file upload, field mapping, and validation preview</figcaption>
</figure>

_Preview detected columns and errors before committing large imports._
:::

## Security & compliance {#security-compliance}
- Audit logs and incident response
- Data retention and export policies

:::tip Screenshot
Audit logs view

<figure>
  <img src="/img/audit-logs.svg" alt="Audit logs timeline showing user actions, timestamps, and IP addresses" style={{maxWidth: 960, width:'100%', height:'auto'}} />
  <figcaption>Audit logs timeline showing user actions, timestamps, and IP addresses</figcaption>
</figure>

_Track configuration changes and access events for compliance._
:::

## Messaging {#messaging}
- Channels: In-app, email, push, SMS (if configured)
- Audiences: All users, specific roles, classes, or custom lists
- Templates and schedule
- Policy: Quiet hours and escalation rules

## Reports & analytics {#reports-analytics}
- Operational reports: Attendance, fee collection, overdue
- Academic reports: Performance by class/subject
- Compliance reports: Audit, access logs, data exports
- Scheduled exports to SFTP or email
