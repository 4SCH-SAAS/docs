---
id: student-guide
title: Student Guide
slug: /guides/students
sidebar_position: 4
---

import Screenshot from '@site/src/components/Screenshot';

import TOCInline from '@theme/TOCInline';

import CardGrid from '@site/src/components/CardGrid';
import DashboardIcon from '@site/src/components/icons/Dashboard';
import GradesIcon from '@site/src/components/icons/Grades';
import AttendanceIcon from '@site/src/components/icons/Attendance';
import MessagingIcon from '@site/src/components/icons/Messaging';

# Student Guide

<TOCInline toc={[]} minHeadingLevel={2} maxHeadingLevel={3} />

<CardGrid
  cards={[
    { to: '#student-dashboard', title: 'Dashboard', description: 'Classes, timetable, announcements', icon: <DashboardIcon /> },
    { to: '#assignments', title: 'Assignments', description: 'Upcoming and submitted work', icon: <GradesIcon /> },
    { to: '#attendance', title: 'Attendance', description: 'Daily and term summaries', icon: <AttendanceIcon /> },
    { to: '#grades', title: 'Grades', description: 'Assessments and term results', icon: <GradesIcon /> },
    { to: '#messaging', title: 'Messaging', description: 'Communicate with teachers', icon: <MessagingIcon /> },
  ]}
/>


## <span className="heading-icon"><DashboardIcon size={18} /></span> Student Dashboard {#student-dashboard}
- Today view: Timetable, assignments due, announcements
- Quick links: Grades, attendance, messages

:::tip Screenshot
Student Dashboard

<Screenshot src="/img/student-dashboard.svg" alt="Student dashboard with timetable, due assignments, and announcements" caption="Start your day with a quick overview of classes and tasks." width={960} />

_Start your day with a quick overview of classes and tasks._
:::

## <span className="heading-icon"><GradesIcon size={18} /></span> Assignments {#assignments}
- View assigned work and instructions
- Submit before deadline (file upload or editor)
- Track feedback and scores

:::note Screenshot
Assignments list

<figure>
  <img src="/img/assignments-list.svg" alt="Assignments list with titles, due dates, and submission status" style={{maxWidth: 960, width:'100%', height:'auto'}} />
  <figcaption>Assignments list with titles, due dates, and submission status</figcaption>
</figure>

_Check what’s due and track submissions and feedback._
:::

## <span className="heading-icon"><AttendanceIcon size={18} /></span> Attendance {#attendance}
- View daily and subject attendance
- Request absence explanation if allowed

## <span className="heading-icon"><GradesIcon size={18} /></span> Grades {#grades}
- Check results per subject and term
- View cumulative progress charts

:::note Screenshot
Student Profile (grades and attendance)

<Screenshot src="/img/screens/students/student-profile.svg" alt="Student profile highlighting recent grades and attendance summary" caption="Review grades by term and attendance trends." width={960} />

_Review grades by term and attendance trends._
:::

## <span className="heading-icon"><MessagingIcon size={18} /></span> Messaging {#messaging}
- Receive class announcements
- Ask clarifying questions to teachers when permitted
