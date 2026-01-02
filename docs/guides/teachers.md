---
id: teacher-guide
title: Teacher Guide
slug: /guides/teachers
sidebar_position: 2
---

import Screenshot from '@site/src/components/Screenshot';

import TOCInline from '@theme/TOCInline';
import CardGrid from '@site/src/components/CardGrid';
import ReportsIcon from '@site/src/components/icons/Reports';
import GradesIcon from '@site/src/components/icons/Grades';
import DashboardIcon from '@site/src/components/icons/Dashboard';

# Teacher Guide

<TOCInline toc={[]} minHeadingLevel={2} maxHeadingLevel={3} />

<CardGrid
  cards={[
    { to: '#teacher-dashboard', title: 'Dashboard', description: 'Today’s classes, quick actions', icon: <DashboardIcon /> },
    { to: '#teacher-dashboard', title: 'Dashboard', description: 'Today’s classes, quick actions' },
    { to: '#daily-workflows', title: 'Daily workflows', description: 'Attendance, assignments, grades', icon: <GradesIcon /> },
    { to: '#exams-and-assessments', title: 'Exams & assessments', description: 'Types, weights, moderation', icon: <ReportsIcon /> },
    { to: '#reports', title: 'Reports', description: 'Class performance, trends', icon: <ReportsIcon /> },
  ]}
/>


## <span className="heading-icon"><DashboardIcon size={18} /></span> Teacher Dashboard {#teacher-dashboard}
- Today’s classes and timetable
- Quick attendance and grade entry
- Recent messages and tasks

:::tip Screenshot
Teacher Dashboard

![Teacher dashboard showing today’s classes, quick actions, and inbox](/img/teacher-dashboard.svg)

_Get an at-a-glance view of your schedule and pending tasks._
:::

## Daily workflows {#daily-workflows}
- Take attendance:
  - Open Classes → Select class/period
  - Mark present/absent/late; add notes
  - Submit to notify parents (if enabled)

:::note Screenshot
Attendance entry screen

![Attendance entry table with student list and status toggles](/img/attendance-entry.svg)

_Mark daily or period-based attendance and add notes._
:::

- Manage assignments:
  - Create assignment with due date and rubric
  - Collect submissions (file or text)
  - Grade and provide feedback

- Enter grades:
  - Open Gradebook → Select subject and assessment
  - Bulk enter marks, add comments
  - Save draft, then publish to students/parents

:::tip Screenshot
Gradebook entry view

<Screenshot src="/img/screens/teachers/gradebook.svg" alt="Gradebook grid with assessments, student rows, and score inputs" caption="Enter scores in bulk, add comments, and publish when ready." width={960} />

_Enter scores in bulk, add comments, and publish when ready._
:::

- Communicate:
  - Messaging → New message
  - Choose audience (class, group, individuals)
  - Attach files and schedule if needed

## <span className="heading-icon"><ReportsIcon size={18} /></span> Exams and Assessments {#exams-and-assessments}
- Create assessments tied to exam types
- Customize weightages for class if allowed
- Record scores and moderate results
- Lock gradebook once reviewed

## Reports {#reports}
- Class performance by assessment
- Attendance trends and follow-ups
- Export grade sheets for meetings
