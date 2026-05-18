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
- What's the difference between Academic Periods and Term Exams?
  - **Academic Periods (Semesters)** organize your teaching schedule—subjects, lessons, and timetables. Many schools rename "Semester" to "Term" (e.g., Term 1, Term 2, Term 3). **Term Exams** organize your assessments and CA calculations. You typically create one Term Exam per Academic Period, using matching names. See [the full explanation](/guides/continuous-assessment#common-questions).
- What is the CA system?
  - The Continuous Assessment system lets your school evaluate students progressively across multiple assessments. Configure custom weightages for CA1, CA2, and the final exam (e.g., 20% + 20% + 60% = 100%). The system automatically calculates term totals and session cumulative averages. See the [CA System Guide](/guides/continuous-assessment) for complete details.
- How do I configure CA for an exam?
  - Go to Exams → View Exams → Configure CAs. Add your CA types (CA1, CA2, etc.) with their weightages. The total must equal 100%. The system validates this in real-time. See [Configuring CA](/guides/continuous-assessment#configuring-ca-for-exams).
- Why can't I save my CA configuration?
  - The total of all CA weightages plus the exam weightage must equal exactly 100%. For example: CA1 (20%) + CA2 (20%) + Exam (60%) = 100%. Adjust your percentages so they add up to 100% and try again.
- How do teachers enter marks for CA1, CA2, and the Exam?
  - Go to Exams → Submit Marks, select the exam and subject, then choose which assessment type to enter (CA1, CA2, or Exam) from the dropdown. Enter marks for each type separately. Each CA type is saved independently. See [Entering CA Marks](/guides/continuous-assessment#entering-ca-marks).
- What's the difference between Term Total and Session Cumulative?
  - **Term Total** is a student's weighted score for a single Term Exam (the sum of CA1 + CA2 + Exam contributions). **Session Cumulative** is the average of all Term Totals across the entire academic session, giving an overall performance measure. See [Understanding Session Cumulative](/guides/continuous-assessment#understanding-session-cumulative).
- Can I use CA for some exams but not others?
  - Yes! The CA system is completely optional and works alongside traditional exams. Exams without CA configuration work the way they always have. You can enable CA for exams that need progressive evaluation while keeping others simple.
- Where can students and parents see the CA breakdown?
  - Students and parents can view the complete CA breakdown on **both** the web portal and mobile apps. On the mobile app, tap **View CA Breakdown** under each subject in the result view to see individual CA scores, weightages, and a colour-coded progress bar. PDF report cards also display the full breakdown with individual CA scores, weightages, and term totals. See the [CA on Mobile Apps](/guides/continuous-assessment-mobile) guide.
- Can teachers enter CA marks from the mobile app?
  - Yes, starting from version 1.9.3. Open the Teacher Staff app and navigate to **Academics → Offline Exam Result**. After selecting the class, exam, and subject, an **Assessment Type** dropdown appears (when CA is configured). Choose the CA type (CA1, CA2, or Exam) and enter marks. The total marks header updates dynamically based on the selected CA type. See the [Teacher Mobile CA guide](/guides/continuous-assessment-mobile#for-teachers--entering-ca-marks).
- Why don't I see the Assessment Type dropdown on my mobile app?
  - The dropdown appears only if the selected exam has CA configured. Ask the school administrator to configure CA from the web platform first (**Exams → Manage Exam → Configure CA**). Also make sure your app is updated to version 1.9.3 or later.
- How do I migrate legacy exams (without CA) to the new CA structure?
  - Use the `exams:migrate-to-ca` Artisan command. Start with a dry run to preview changes, then execute with the `--add-ca-config` flag to add default CA configuration and proportionally adjust existing marks. See [Migrating Legacy Exams](/guides/continuous-assessment#migrating-legacy-exams-to-ca-structure) for full instructions. Note that running `migrate:school` already auto-normalizes `NULL ca_type` records as a safety measure.
- Will I need to migrate every time a new school is added?
  - **No.** New schools start with a clean CA-ready schema and will never have legacy `NULL ca_type` records. The `migrate:school` command auto-normalizes legacy records for existing schools and is idempotent, so it's safe to run as part of routine maintenance.
- I published results but parents aren't getting push notifications. What's wrong?
  - This was a known issue prior to version 1.9.3. The release fixes the guardian/parent notification lookup so that **both students and guardians** receive push notifications when results are published. If parents still don't receive notifications, verify their guardian profile is linked to the correct student and that the app has notification permissions enabled.
- The PDF shows Term Total as 0% — how do I fix that?
  - This was caused by stale data from earlier failed publishes (before the v1.9.3 SQL fix). Re-publish the affected exam from the web platform (**Exams → Manage Exam → Publish**). The system will recompute and store the correct values. Newly generated PDFs include on-the-fly recalculation as a safety net.

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
