---
id: overview
title: Introduction & Overview
slug: /
sidebar_position: 1
---

# 4SCH School Management System

4SCH is an all-in-one platform for schools to manage daily operations and engagement across the entire community—administrators, teachers, parents, and students. It centralizes academic records, attendance, grading, timetables, messaging, billing, and reporting in one secure, cloud-hosted system.

Key benefits:
- Unified records: Student, staff, class, and fee data in one place
- Time-saving automation: Timetable publishing, attendance flows, grade calculations, and notifications
- Clear communication: Role-aware messaging, announcements, and alerts
- Actionable insights: Real-time dashboards and comprehensive reports
- Multi-school support: Manage multiple schools or branches with consistent controls

Primary user roles:
- School Admin: Configure the institution, academic structure, fees, permissions, and compliance
- Teacher: Manage classes, attendance, assignments, grades, and communication
- Parent/Guardian: View student progress, attendance, invoices, and communicate with school
- Student: Access timetable, assignments, grades, attendance notes, and announcements

Core modules:
- Academic Structure: Sessions, terms, classes, sections, subjects
- Attendance: Daily and period-based attendance
- Timetable & Scheduling: Classes, exams, substitutions, room allocations
- Assessments & Grades: Gradebooks, weightages, rubrics, transcripts
- Student Information: Profiles, enrollments, guardians, documents
- Finance: Fees, invoices, payments, concessions, ledgers, receipts
- Messaging & Announcements: In-app, email, push notifications
- Reports & Analytics: Operational and academic reports, exports
- Integrations: Payment gateways, email/SMS, SSO, LMS

High-level flow (Mermaid):
```mermaid
flowchart LR
  A[Admin Console] --> B[Academic Setup]
  B --> C[Timetable]
  C --> D[Attendance & Assessments]
  D --> E[Reports & Analytics]
  A --> F[Finance Setup]
  F --> G[Invoices & Payments]
  A --> H[Messaging & Alerts]
  subgraph Community
    I[Teachers]
    J[Parents]
    K[Students]
  end
  D --> I
  G --> J
  C --> K
  H --> I
  H --> J
  H --> K
```
