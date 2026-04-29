---
id: faq
title: FAQ
sidebar_position: 1
description: Frequently asked questions about 4SCH School Management System. Answers for login, attendance, grades, billing, messaging, and data privacy.
keywords: [FAQ, frequently asked questions, help, login issues, password reset, attendance questions, grade queries, payment help, 4SCH support, student web portal, student login, ngs.4sch.com]
---

# Frequently Asked Questions

Access & Accounts:
- I forgot my password. What do I do?
  - **Students:** Use the self-service password reset on the mobile app or web portal at [ngs.4sch.com](https://ngs.4sch.com). You'll need your School Code, GR Number, and Date of Birth (dd-mm-yyyy format). See the Student Guide for details.
  - **Teachers/Parents/Staff:** Use "Forgot Password" on the sign-in page. If SSO is enabled, reset via your identity provider or contact the school office.
- How do students access 4SCH?
  - Students can access 4SCH via the web portal at [https://ngs.4sch.com](https://ngs.4sch.com) or through the mobile app (Android/iOS). Both provide full access to assignments, grades, timetables, and study materials.
- What login credentials do students need?
  - Students need three pieces of information provided by the school: **School Code** (unique identifier for your school), **GR Number** (General Roll Number - student registration number), and **Password** (initial password from school). These same credentials are used for both web portal and mobile app login.
- What information do students need to reset their password?
  - Students need three pieces of information: **School Code** (provided by school), **GR Number** (General Roll Number on student ID), and **Date of Birth** in dd-mm-yyyy format (e.g., 15-08-2010). This self-service feature is available on both the mobile app and web portal.
- Can multiple guardians access one student?
  - Yes. Link multiple guardians to a Student Profile from Admin Console → Students → Guardians.

Attendance:
- Can teachers correct attendance after submission?
  - Yes, if allowed by policy. Corrections require admin approval when configured.
- Do parents get notified immediately when a student is absent?
  - Instant alerts can be enabled per school policy.

Grades:
- When do students see grades?
  - After the teacher publishes results and any required approvals are completed.
- Can we customize grade scales?
  - Yes. Define numeric or letter scales and map to transcripts.

Continuous Assessment (CA):
- What is the CA system?
  - The Continuous Assessment system allows schools to configure progressive evaluation with weighted scoring (e.g., CA1 20% + CA2 20% + Exam 60%). See the [CA System Guide](/guides/continuous-assessment) for complete details.
- How do I configure CA for my exam?
  - Navigate to Exams → View Exams → Configure CAs. Add CA types with weightages ensuring the total equals 100%. See [Configuring CA](/guides/continuous-assessment#configuring-ca-for-exams).
- Why can't I save my CA configuration?
  - The total weightage must equal exactly 100%. Check that CA weightages + Exam weightage = 100%. The system shows real-time validation.
- How do I enter marks for CA1, CA2, and Exam separately?
  - Go to Exams → Submit Marks, select your exam and subject, then choose the CA type (CA1, CA2, or Exam) from the dropdown. Enter marks for each type separately. See [Entering CA Marks](/guides/continuous-assessment#entering-ca-marks).
- What's the difference between term total and session cumulative?
  - **Term Total** is the weighted sum of CA1 + CA2 + Exam for a single term. **Session Cumulative** is the average of all term totals across the entire academic session. See [Understanding Session Cumulative](/guides/continuous-assessment#understanding-session-cumulative).
- Can I use CA for some exams and not others?
  - Yes! The CA system is completely optional. Exams without CA configuration work with traditional marks entry. The system is backward compatible.
- Where can students see their CA breakdown?
  - Students can view CA breakdown on the web portal under Results. The mobile app shows term totals. PDF report cards display complete CA breakdown with individual component scores.

Billing:
- Which payment methods are supported?
  - Depends on configured gateway. Typically cards, bank transfer, and local options.
- Can parents pay multiple invoices at once?
  - Yes. Use “Pay All” from the Billing tab.

Messaging:
- Who can I message?
  - Teachers can message assigned classes; Parents and Students can message recipients based on school policy.

## Notifications {#notifications}

- What triggers a notification?
  - **New assignment created/updated** — Students (and linked guardians) in the target class/subject receive an alert.
  - **Assignment accepted/rejected** — The student (and linked guardian) receive an alert after the teacher reviews the submission.
  - **Diary note posted** — Students (and linked guardians) receive an alert. For elective subjects, only enrolled students are notified.
  - **Attendance marked absent** — If enabled when marking attendance, absent users receive an "Absent" notification.
  - **Admin broadcast** — Admin/staff can send bulk notifications to selected roles or class sections.

Data & Privacy:
- How do we export student data?
  - Admin Console → Reports → Exports. Full exports are permission-restricted.

Access & Permissions:
- Why can’t I see Exams/Assignments/Fees in my menu?
  - Either the **module is disabled** for your school or your **role permissions** don’t allow access. Ask your school admin to review **Settings → Roles & Permissions**, and confirm the relevant module is enabled (e.g., Exam Management, Assignment Management, Fees Management).
