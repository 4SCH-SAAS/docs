---
id: reports-analytics
title: Reports & Analytics
slug: /guides/reports-analytics
sidebar_position: 7
---

import Screenshot from '@site/src/components/Screenshot';

import TOCInline from '@theme/TOCInline';

import CardGrid from '@site/src/components/CardGrid';
import ReportsIcon from '@site/src/components/icons/Reports';

# Reports & Analytics

<TOCInline toc={[]} minHeadingLevel={2} maxHeadingLevel={3} />

<CardGrid
  cards={[
    { to: '#dashboards', title: 'Dashboards', description: 'KPIs and quick overview', icon: <ReportsIcon /> },
    { to: '#filters-and-drilldowns', title: 'Filters & drilldowns', description: 'Slice, dice, and explore', icon: <ReportsIcon /> },
    { to: '#operational-reports', title: 'Operational reports', description: 'Attendance, finance, messaging', icon: <ReportsIcon /> },
    { to: '#academic-reports', title: 'Academic reports', description: 'Grades and exams', icon: <ReportsIcon /> },
    { to: '#exports', title: 'Exports', description: 'CSV/PDF exports', icon: <ReportsIcon /> },
  ]}
/>


## <span className="heading-icon"><ReportsIcon size={18} /></span> Dashboards {#dashboards}
- Attendance snapshot, fee collection, and academic performance
- Filters by class, section, term, and date range

:::tip Screenshot
Reports overview dashboard

<Screenshot src="/img/screens/reports/reports-overview.svg" alt="Reports overview showing KPI tiles and trend charts" caption="Track key indicators across attendance, finance, and academics." width={960} />

_Track key indicators across attendance, finance, and academics._
:::

## <span className="heading-icon"><ReportsIcon size={18} /></span> Filters and Drilldowns {#filters-and-drilldowns}
- Apply filters to narrow to class/section/date ranges
- Click through to underlying records

:::note Screenshot
Report filters and drilldown

![Report filter panel with class/section selectors and drilldown link](/img/reports-filters.svg)

_Use filters to focus and drill into detailed records._
:::

## <span className="heading-icon"><ReportsIcon size={18} /></span> Operational reports {#operational-reports}
- Daily attendance summary
- Student roster by class/section
- Fee collection and outstanding balances

## <span className="heading-icon"><ReportsIcon size={18} /></span> Academic reports {#academic-reports}
- Grade distribution by subject and class
- Student progress over time
- Exam results and transcripts

## <span className="heading-icon"><ReportsIcon size={18} /></span> Exports {#exports}
- CSV, PDF, and print-ready formats
- Schedule recurring exports to email/SFTP
