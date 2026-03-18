---
id: glossary
title: Glossary of Terms
sidebar_label: Glossary
sidebar_position: 3
description: Comprehensive glossary of terms used in the school management system. Definitions for academic, administrative, and technical terminology.
keywords: [glossary, definitions, terminology, school terms, academic terms, technical terms, reference]
---

import '@site/src/css/glossary.css';

# Glossary of Terms

Quick reference guide to terminology used throughout the school management system.

:::tip Quick Navigation
Use the alphabetical sections below or press `Ctrl+F` / `Cmd+F` to search for specific terms.
:::

<div className="glossary-filter-bar">
  <strong>Filter by Category:</strong>
  <div className="glossary-filter-buttons">
    <button className="glossary-filter-btn active" data-filter="all">📚 All</button>
    <button className="glossary-filter-btn" data-filter="academic">📚 Academic</button>
    <button className="glossary-filter-btn" data-filter="administrative">📋 Administrative</button>
    <button className="glossary-filter-btn" data-filter="technical">🔧 Technical</button>
    <button className="glossary-filter-btn" data-filter="financial">💰 Financial</button>
  </div>
</div>

<script>{`
if (typeof window !== 'undefined') {
  window.addEventListener('load', function() {
    const filterBtns = document.querySelectorAll('.glossary-filter-btn');
    filterBtns.forEach(btn => {
      btn.addEventListener('click', function() {
        filterBtns.forEach(b => b.classList.remove('active'));
        this.classList.add('active');
        const filter = this.getAttribute('data-filter');
        const cards = document.querySelectorAll('.glossary-grid p');
        cards.forEach(card => {
          if (filter === 'all') {
            card.style.display = 'block';
          } else {
            const tag = card.querySelector('.glossary-tag-' + filter);
            card.style.display = tag ? 'block' : 'none';
          }
        });
      });
    });
  });
}
`}</script>

---

## A

<div className="glossary-grid">

<p>
<span className="glossary-tag glossary-tag-academic">📚 Academic</span><br/>
<strong>Academic Structure</strong><br/>
The organizational framework of classes, sections, subjects, and streams that define how students are grouped and taught.
</p>

<p>
<span className="glossary-tag glossary-tag-academic">📚 Academic</span><br/>
<strong>Academic Year</strong><br/>
See <a href="#session-year">Session Year</a>.
</p>

<p>
<span className="glossary-tag glossary-tag-administrative">📋 Admin</span><br/>
<strong>Admission</strong><br/>
The process of accepting a new student into the school. Includes application review, approval, and enrollment.
</p>

<p>
<span className="glossary-tag glossary-tag-administrative">📋 Admin</span><br/>
<strong>Announcement</strong><br/>
A message or notice posted to inform students, parents, teachers, or staff about important information, events, or updates.
</p>

<p>
<span className="glossary-tag glossary-tag-academic">📚 Academic</span><br/>
<strong>Assignment</strong><br/>
Academic work assigned by a teacher to students, which may include homework, projects, or other tasks. Students submit completed work through the system.
</p>

<p>
<span className="glossary-tag glossary-tag-academic">📚 Academic</span><br/>
<strong>Attendance</strong><br/>
The record of whether a student or staff member was present, absent, or on leave on a given day. Can be marked daily or per period.
</p>

<p>
<span className="glossary-tag glossary-tag-technical">🔧 Technical</span><br/>
<strong>API (Application Programming Interface)</strong><br/>
A set of protocols that allows the school system to communicate with external services like payment gateways, SMS providers, or email services.
</p>

</div>

---

## B

<div className="glossary-grid">

**Backup**  
A copy of the school's database and files created for disaster recovery. Regular backups protect against data loss from hardware failure, accidental deletion, or other disasters. Essential for data safety and business continuity.

</div>

---

## C

<div className="glossary-grid">

**Certificate**  
An official document generated and awarded to students for achievements, attendance, participation, or completion of courses. Can be customized using templates.

**Chat**  
See [Messaging](#messaging).

**Class**  
A grade level or year group (e.g., Grade 1, Class 10, SS3). A class contains one or more sections.

**Class Section**  
A subdivision of a class (e.g., Section A, Section B). Students are assigned to specific sections within their class.

**Class Group**  
A grouping of multiple classes for administrative purposes, such as organizing exams, events, or timetables across several class levels.

**Class Teacher**  
A teacher designated as the primary teacher for a specific class section. Typically responsible for overall student welfare and coordination.

**Compulsory Subject**  
See [Core Subject](#core-subject).

**Contact Inquiry**  
A message or question submitted through the school's website contact form. Typically handled by admin staff.

**Core Subject**  
A subject that all students in a class must study. Also called compulsory subject (e.g., Mathematics, English Language).

**Custom Form Field**  
Additional data fields created by schools to collect specific information about students, staff, or other entities beyond the default fields.

</div>

---

## D

<div className="glossary-grid">

**Dashboard**  
The main overview screen shown after logging in. Displays key metrics, recent activity, and shortcuts relevant to the user's role.

**Database**  
The system storing all school data including students, fees, attendance, exams, and settings. Regular database backups are essential for data protection.

**Diary**  
A communication tool where teachers can post notes, observations, or messages about individual students for parents to view. See [Student Diary](#student-diary).

**Driver**  
A transportation staff member who operates school vehicles and manages student pickups and dropoffs along assigned routes.

</div>

---

## E

<div className="glossary-grid">

**Elective Subject**  
A subject that students can choose from a group of options. Schools define elective groups where students select a specified number of subjects (e.g., choose 2 from Physics, Chemistry, Biology).

**Enrollment**  
The process of registering a student in a class and section for a specific session year. Also refers to the total number of enrolled students.

**Exam**  
An assessment or test administered to evaluate student knowledge. Can be [Offline Exam](#offline-exam) or [Online Exam](#online-exam).

**Exam Marks**  
The scores or grades students receive on exams. Can be entered manually or uploaded in bulk.

**Exam Timetable**  
The schedule showing when and where each exam will be conducted, including date, time, subject, and class information.

</div>

---

## F

<div className="glossary-grid">

**FAQ (Frequently Asked Questions)**  
A collection of common questions and answers about the school system, policies, or procedures. Helps users find quick answers without contacting support.

**FCM (Firebase Cloud Messaging)**  
Google's service for sending push notifications to mobile apps. Must be configured for students and parents to receive instant alerts on their phones. See [Notification Settings](../guides/notification-settings-management.md#push-notifications).

**Fee Type**  
A category of fees (e.g., Tuition Fee, Library Fee, Sports Fee) that can be assigned to classes and collected from students.

**Fee Structure**  
The configuration of which fee types apply to which classes, including amounts and due dates.

**Form Field**  
A custom field added to student or staff registration forms to collect school-specific information beyond the default fields (e.g., blood type, parent occupation, special needs).

</div>

---

## G

<div className="glossary-grid">

**Guidance**  
Counseling or advisory content provided to students for academic planning, career advice, or personal development.

**Guardian**  
A parent or legal guardian of a student. Guardian accounts can manage multiple children in the school.

**Grade**  
Either a class level (e.g., Grade 10) or a letter/score representing academic performance (e.g., A, B+, 85%).

**Guardian**  
A parent or legal guardian of a student. Guardian accounts can manage multiple children in the school.

</div>

---

## H

<div className="glossary-grid">

**Helper**  
A transportation staff member who assists the driver with managing students, ensuring safety, and marking transportation attendance.

**Holiday**  
A non-school day defined in the system calendar. Used for planning and is visible to all users.

</div>

---

## I

<div className="glossary-grid">

**Installment**  
A portion of the total fee amount that can be paid separately. Allows parents to pay fees in parts rather than all at once.

</div>

---

## K

<div className="glossary-grid">

**KPI (Key Performance Indicator)**  
Metrics displayed on the dashboard to provide quick insights (e.g., student count, attendance percentage, fee collection rate).

</div>

---

## L

<div className="glossary-grid">

**Language**  
The language setting for the system interface. Some systems support multiple languages for localization.

**Leave**  
An approved absence for staff or teachers (sick leave, casual leave, annual leave, etc.). Leave must be applied for and approved by administrators.

**Lesson**  
A unit of teaching content within a [Topic](#topic). Can include videos, documents, descriptions, and study materials.

**License**  
The subscription or permission to use the school management system. May have an expiration date requiring renewal.

</div>

---

## M

<div className="glossary-grid">

**Messaging**  
The communication system allowing teachers, parents, students, and staff to send messages to individuals or groups. Also called Chat.

**Marks**  
See [Exam Marks](#exam-marks).

**Medium**  
The language of instruction (e.g., English Medium, Hindi Medium, Gujarati Medium). Classes are assigned a medium.

</div>

---

## N

<div className="glossary-grid">

**Notification**  
An alert sent to users about events, updates, or important information. Can be delivered via push notification (mobile), email, SMS, or in-app alerts. See [Notification Settings](../guides/notification-settings-management.md).

</div>

---

## O

<div className="glossary-grid">

**Offline Exam**  
A traditional paper-based exam conducted in person. Marks are entered into the system manually or via bulk upload.

**Online Exam**  
A digital exam conducted through the system where students answer questions on a computer/mobile device. Marks are calculated automatically.

</div>

---

## P

<div className="glossary-grid">

**Parent**  
See [Guardian](#guardian).

**Partial Payment**  
When a student has paid some but not all of the compulsory fees. Shows as "partially paid" in fee reports.

**Payment Gateway**  
A third-party service that processes online fee payments (e.g., Paystack, Flutterwave, Razorpay, Stripe). Must be configured to accept online payments. See [Integration Guides](../reference/integrations.md#payment-gateways).

**Payment Transaction**  
A record of a fee payment made by a parent or guardian, including amount, date, payment method, and transaction reference.

**Payroll**  
The system for calculating and recording staff salaries, deductions, and payments. Generates salary expenses automatically.

**Permission**  
A specific capability or action a user is allowed to perform (e.g., `student-create`, `attendance-list`). See [Role](#role).

**Pickup Point**  
A designated location along a transportation route where students are picked up in the morning or dropped off in the afternoon.

**Promote Student**  
The process of moving students from one class to the next at the end of a session year (e.g., Grade 9 â†’ Grade 10). Also called Student Promotion.

</div>

---

## R

<div className="glossary-grid">

**RBAC (Role-Based Access Control)**  
The security system where users are assigned roles, and roles have specific permissions determining what users can access and do.

**Result**  
The outcome of an exam, showing marks, grades, and pass/fail status for students.

**Role**  
A collection of permissions assigned to users based on their job function (e.g., School Admin, Teacher, Guardian, Student).

**Route (Transportation)**  
A defined path for school buses with specific pickup points and schedules. Drivers are assigned to routes and follow them daily.

</div>

---

## S

<div className="glossary-grid">

**Section**  
See [Class Section](#class-section).

**Semester**  
A subdivision of the academic year, typically half a year (e.g., Semester 1, Semester 2). Some schools operate on semester systems.

**Session Year**  
An academic year during which school operates (e.g., "2025-2026"). Includes a start date and end date. Most data in the system is tied to a session year.

**Shift**  
A time period during which school operates (e.g., Morning Shift, Afternoon Shift). Used by schools with multiple shifts per day.

**Slider**  
A rotating image or announcement shown on the homepage or student/parent portal. Used for highlights and promotions.

**SMS Gateway**  
A third-party service that sends text messages (SMS) to mobile phones for notifications and alerts (e.g., Termii, Twilio, Msg91). See [Integration Guides](../reference/integrations.md#sms-gateways).

**SMTP (Simple Mail Transfer Protocol)**  
The protocol used for sending emails. SMTP server settings must be configured for the system to send email notifications. See [Notification Settings](../guides/notification-settings-management.md#email-notifications).

**Staff**  
Non-teaching employees of the school (e.g., office staff, accountant, admin). Distinguished from [Teacher](#teacher).

**Stream**  
An academic track or specialization within a class (e.g., Science Stream, Arts Stream, Commercial Stream). Used in senior secondary classes.

**Student**  
A learner enrolled in the school. Has a student account with access to assignments, exams, results, and timetable.

**Student Diary**  
A communication feature where teachers post observations, notes, or messages about individual students for parents to view.

**Student Promotion**  
See [Promote Student](#promote-student).

**Study Material**  
Educational content (PDFs, videos, links) attached to lessons or topics for student learning.

**Subject**  
A course of study (e.g., Mathematics, English, Physics). Can be [Core Subject](#core-subject) or [Elective Subject](#elective-subject).

**Subject Teacher**  
A teacher assigned to teach a specific subject to a specific class-section combination.

**Subscription**  
The licensing plan for cloud/SaaS versions of the school system. Includes package type, expiration date, and enabled features.

</div>

---

## T

<div className="glossary-grid">

**Teacher**  
An instructor employed by the school to teach students. Has access to assigned classes, attendance, assignments, and exams.

**Timetable**  
A schedule showing which subject is taught at what time, in which classroom, by which teacher. Can be class-based or teacher-based.

**Topic**  
A unit of content within a subject. Contains lessons, study materials, and may be linked to assignments or exams.

**Transfer Student**  
Moving a student from one school to another, or from one class/section to another within the same school.

**Transportation**  
The school bus/vehicle management system including routes, drivers, helpers, pickup points, and student transportation attendance.

</div>

---

## U

<div className="glossary-grid">

**Unpaid**  
A student who has not made any fee payments yet. Shows as "unpaid" in fee reports.

</div>

---

## V

<div className="glossary-grid">

**Vehicle**  
A school bus or transport vehicle used for student transportation. Vehicles are assigned to routes and have designated drivers.

</div>

---

## W

<div className="glossary-grid">

**Webhook**  
An automatic notification sent from an external service (like a payment gateway) to the school system to confirm events like successful payments. Essential for real-time payment confirmation.

</div>

---

## Related Resources

- **[User Roles Guide](../intro/user-roles.md)** - Detailed explanation of each user role
- **[Roles & Permissions](roles-permissions.md)** - Complete permission list and RBAC system
- **[School Admin Guide](../guides/school-admin.md)** - Overview of administrative features

---

**Can't find a term?** Check the specific feature guides or use the search function in the documentation.
