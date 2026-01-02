---
id: parent-guide
title: Parent/Guardian Guide
slug: /guides/parents
sidebar_position: 3
---

import Screenshot from '@site/src/components/Screenshot';

import TOCInline from '@theme/TOCInline';

import CardGrid from '@site/src/components/CardGrid';
import DashboardIcon from '@site/src/components/icons/Dashboard';
import UsersIcon from '@site/src/components/icons/Users';
import FinanceIcon from '@site/src/components/icons/Finance';
import MessagingIcon from '@site/src/components/icons/Messaging';
import ReportsIcon from '@site/src/components/icons/Reports';

# Parent/Guardian Guide

<TOCInline toc={[]} minHeadingLevel={2} maxHeadingLevel={3} />

<CardGrid
  cards={[
    { to: '#parent-dashboard', title: 'Dashboard', description: 'Overview across children', icon: <DashboardIcon /> },
    { to: '#student-profile', title: 'Student Profile', description: 'Grades, attendance, insights', icon: <UsersIcon /> },
    { to: '#payments', title: 'Payments', description: 'Invoices and receipts', icon: <FinanceIcon /> },
    { to: '#messaging', title: 'Messaging', description: 'Message teachers/admin', icon: <MessagingIcon /> },
  ]}
/>


## <span className="heading-icon"><DashboardIcon size={18} /></span> Parent Dashboard {#parent-dashboard}
- Children overview: Attendance, recent grades, fees
- Alerts: Upcoming events, deadlines, announcements

:::tip Screenshot
Parent Dashboard

<Screenshot src="/img/screens/parents/parent-dashboard.svg" alt="Parent portal dashboard with child cards, alerts, and billing summary" caption="See each child’s latest updates and outstanding actions." width={960} />

_See each child’s latest updates and outstanding actions._
:::

## <span className="heading-icon"><UsersIcon size={18} /></span> Student Profile {#student-profile}
- Attendance: Daily and subject-wise records
- Grades: Recent results and transcripts
- Timetable: Current schedule and exam calendar
- Documents: School letters, certificates

:::note Screenshot
Student Profile view

![Student Profile showing attendance chart, grades list, and timetable](/img/student-profile.svg)

_View academic progress, attendance, and documents for your child._
:::

## <span className="heading-icon"><FinanceIcon size={18} /></span> Payments {#payments}
- View invoices, due dates, and payment history
- Pay online via connected gateway
- Download receipts for reimbursement

:::note Screenshot
Billing overview

<Screenshot src="/img/screens/billing/billing-overview.svg" alt="Billing overview page listing invoices with statuses and actions" caption="Pay outstanding invoices and download receipts." width={960} />

_Pay outstanding invoices and download receipts._
:::

## <span className="heading-icon"><MessagingIcon size={18} /></span> Messaging {#messaging}
- Contact teachers or school office
- Receive announcements and reminders
- Manage notification preferences

## <span className="heading-icon"><ReportsIcon size={18} /></span> Tips {#tips}
- Enable push notifications for time-sensitive updates
- Update contact details under Profile → Account
