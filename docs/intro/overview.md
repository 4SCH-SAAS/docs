---
id: overview
title: 4SCH Documentation
slug: /
sidebar_position: 1
---

import Link from '@docusaurus/Link';
import CardGrid from '@site/src/components/CardGrid';

import DashboardIcon from '@site/src/components/icons/Dashboard';
import AcademicIcon from '@site/src/components/icons/Academic';
import AttendanceIcon from '@site/src/components/icons/Attendance';
import GradesIcon from '@site/src/components/icons/Grades';
import UsersIcon from '@site/src/components/icons/Users';
import FinanceIcon from '@site/src/components/icons/Finance';
import MessagingIcon from '@site/src/components/icons/Messaging';
import ReportsIcon from '@site/src/components/icons/Reports';
import SecurityIcon from '@site/src/components/icons/Security';
import StaffIcon from '@site/src/components/icons/Staff';

# 4SCH Documentation

Use these docs to set up 4SCH and run day-to-day school operations. Start with the guide that matches your role.

**Search tip:** use short keywords such as `attendance`, `invoice`, `timetable`, or `grades`.

<div style={{display: 'flex', gap: '0.75rem', flexWrap: 'wrap', margin: '1rem 0 1.25rem'}}>
  <Link className="button button--primary" to="/intro/quick-start">Quick Start</Link>
  <Link className="button button--secondary" to="/support/troubleshooting">Troubleshooting</Link>
  <Link className="button button--secondary" to="/support/contact-support">Contact Support</Link>
</div>

## Choose Your Role

### School Leadership & Administration

<CardGrid
  cards={[
    {
      to: '/guides/school-admin',
      title: 'School Administrator',
      description: 'Complete system setup, management, and oversight',
      icon: <DashboardIcon />,
    },
  ]}
/>

### Teaching & Academic Staff

<CardGrid
  cards={[
    {
      to: '/guides/teacher-guide',
      title: 'Teacher',
      description: 'Attendance, assignments, grades, and messaging',
      icon: <GradesIcon />,
    },
  ]}
/>

### Parents & Students

<CardGrid
  cards={[
    {
      to: '/guides/parent-guide',
      title: 'Parent/Guardian',
      description: 'Monitor children, pay fees, and communicate with school',
      icon: <UsersIcon />,
    },
    {
      to: '/guides/student-guide',
      title: 'Student',
      description: 'Access timetable, submit assignments, view grades',
      icon: <AcademicIcon />,
    },
  ]}
/>

### Support & Finance Staff

<CardGrid
  cards={[
    {
      to: '/guides/accountant-guide',
      title: 'Accountant/Bursar',
      description: 'Fee management, invoicing, and financial reports',
      icon: <FinanceIcon />,
    },
    {
      to: '/guides/non-teaching-staff-guide',
      title: 'Non-Teaching Staff',
      description: 'Admissions, office support, and operational workflows',
      icon: <StaffIcon />,
    },
    {
      to: '/guides/driver-guide',
      title: 'Driver',
      description: 'Route management, student attendance, and trip tracking',
      icon: <StaffIcon />,
    },
  ]}
/>

## Common Tasks

<CardGrid
  cards={[
    {
      to: '/guides/admin#academic-setup',
      title: 'Set up academic session & classes',
      description: 'Sessions, terms, classes, subjects',
      icon: <AcademicIcon />,
    },
    {
      to: '/reference/data-import-export',
      title: 'Import or export data',
      description: 'Students, staff, and templates',
      icon: <UsersIcon />,
    },
    {
      to: '/guides/admin#fee-management',
      title: 'Create fees and invoices',
      description: 'Fee heads, structures, and payments',
      icon: <FinanceIcon />,
    },
    {
      to: '/guides/teacher-guide#marking-attendance',
      title: 'Mark attendance',
      description: 'Daily presence and absence tracking',
      icon: <AttendanceIcon />,
    },
    {
      to: '/guides/teacher-guide#entering-grades',
      title: 'Enter grades and exam scores',
      description: 'Assessments, marks, and results',
      icon: <GradesIcon />,
    },
    {
      to: '/guides/messaging',
      title: 'Send announcements and messages',
      description: 'Broadcasts, approvals, and inbox',
      icon: <MessagingIcon />,
    },
    {
      to: '/guides/reports-analytics',
      title: 'Run reports',
      description: 'Dashboards, filters, and exports',
      icon: <ReportsIcon />,
    },
  ]}
/>

## Need Help?

- If something is not working, start with the **[Troubleshooting](/support/troubleshooting)** guide.
- For account or access issues, see **[Understanding User Roles](/intro/user-roles)**.
- To contact the team, use **[Contact & Support](/support/contact-support)**.

## About 4SCH

**4SCH** is a complete school management system that helps schools stay organised and connected.

It supports:
- **Student & staff records**
- **Attendance tracking**
- **Grading & report cards**
- **Timetables**
- **Fee management & online payments**
- **Messaging & announcements**
- **Reports & insights**

:::tip
These docs focus on **how to use 4SCH** in daily school operations. For platform-level technical details, refer to the [eSchool SaaS documentation](https://wrteam-in.github.io/eSchool-SaaS-Doc/schooladmin/intro/).
:::
