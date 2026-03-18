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

<p>
<span className="glossary-tag glossary-tag-technical">🔧 Technical</span><br/>
<strong>Backup</strong><br/>
A copy of the school's database and files created for disaster recovery. Regular backups protect against data loss from hardware failure, accidental deletion, or other disasters. Essential for data safety and business continuity.
</p>

</div>

### API (Application Programming Interface)
A set of protocols that allows the school system to communicate with external services like payment gateways, SMS providers, or email services.

---

## B

### Backup
A copy of the school's database and files created for disaster recovery. Regular backups protect against data loss from hardware failure, accidental deletion, or other disasters. Essential for data safety and business continuity.

---

## C

<div className="glossary-grid">

<p>
<span className="glossary-tag glossary-tag-administrative">📋 Admin</span><br/>
<strong>Certificate</strong><br/>
An official document generated and awarded to students for achievements, attendance, participation, or completion of courses. Can be customized using templates.
</p>

<p>
<span className="glossary-tag glossary-tag-administrative">📋 Admin</span><br/>
<strong>Chat</strong><br/>
See <a href="#messaging">Messaging</a>.
</p>

<p>
<span className="glossary-tag glossary-tag-academic">📚 Academic</span><br/>
<strong>Class</strong><br/>
A grade level or year group (e.g., Grade 1, Class 10, SS3). A class contains one or more sections.
</p>

<p>
<span className="glossary-tag glossary-tag-academic">📚 Academic</span><br/>
<strong>Class Section</strong><br/>
A subdivision of a class (e.g., Section A, Section B). Students are assigned to specific sections within their class.
</p>

<p>
<span className="glossary-tag glossary-tag-academic">📚 Academic</span><br/>
<strong>Class Group</strong><br/>
A grouping of multiple classes for administrative purposes, such as organizing exams, events, or timetables across several class levels.
</p>

<p>
<span className="glossary-tag glossary-tag-administrative">📋 Admin</span><br/>
<strong>Class Teacher</strong><br/>
A teacher designated as the primary teacher for a specific class section. Typically responsible for overall student welfare and coordination.
</p>

<p>
<span className="glossary-tag glossary-tag-academic">📚 Academic</span><br/>
<strong>Compulsory Subject</strong><br/>
See <a href="#c">Core Subject</a>.
</p>

<p>
<span className="glossary-tag glossary-tag-administrative">📋 Admin</span><br/>
<strong>Contact Inquiry</strong><br/>
A message or question submitted through the school's website contact form. Typically handled by admin staff.
</p>

<p>
<span className="glossary-tag glossary-tag-academic">📚 Academic</span><br/>
<strong>Core Subject</strong><br/>
A subject that all students in a class must study. Also called compulsory subject (e.g., Mathematics, English Language).
</p>

<p>
<span className="glossary-tag glossary-tag-technical">🔧 Technical</span><br/>
<strong>Custom Form Field</strong><br/>
Additional data fields created by schools to collect specific information about students, staff, or other entities beyond the default fields.
</p>

</div>

---

## D

<div className="glossary-grid">

<p>
<span className="glossary-tag glossary-tag-administrative">📋 Admin</span><br/>
<strong>Dashboard</strong><br/>
The main overview screen shown after logging in. Displays key metrics, recent activity, and shortcuts relevant to the user's role.
</p>

<p>
<span className="glossary-tag glossary-tag-technical">🔧 Technical</span><br/>
<strong>Database</strong><br/>
The system storing all school data including students, fees, attendance, exams, and settings. Regular database backups are essential for data protection.
</p>

<p>
<span className="glossary-tag glossary-tag-administrative">📋 Admin</span><br/>
<strong>Diary</strong><br/>
A communication tool where teachers can post notes, observations, or messages about individual students for parents to view. See <a href="#student-diary">Student Diary</a>.
</p>

<p>
<span className="glossary-tag glossary-tag-administrative">📋 Admin</span><br/>
<strong>Driver</strong><br/>
A transportation staff member who operates school vehicles and manages student pickups and dropoffs along assigned routes.
</p>

</div>

### Driver
A transportation staff member who operates school vehicles and manages student pickups and dropoffs along assigned routes.

---

## E

<div className="glossary-grid">

<p>
<span className="glossary-tag glossary-tag-academic">📚 Academic</span><br/>
<strong>Elective Subject</strong><br/>
A subject that students can choose from a group of options. Schools define elective groups where students select a specified number of subjects (e.g., choose 2 from Physics, Chemistry, Biology).
</p>

<p>
<span className="glossary-tag glossary-tag-administrative">📋 Admin</span><br/>
<strong>Enrollment</strong><br/>
The process of registering a student in a class and section for a specific session year. Also refers to the total number of enrolled students.
</p>

<p>
<span className="glossary-tag glossary-tag-academic">📚 Academic</span><br/>
<strong>Exam</strong><br/>
An assessment or test administered to evaluate student knowledge. Can be <a href="#offline-exam">Offline Exam</a> or <a href="#online-exam">Online Exam</a>.
</p>

<p>
<span className="glossary-tag glossary-tag-academic">📚 Academic</span><br/>
<strong>Exam Marks</strong><br/>
The scores or grades students receive on exams. Can be entered manually or uploaded in bulk.
</p>

<p>
<span className="glossary-tag glossary-tag-academic">📚 Academic</span><br/>
<strong>Exam Timetable</strong><br/>
The schedule showing when and where each exam will be conducted, including date, time, subject, and class information.
</p>

</div>

---

## F

<div className="glossary-grid">

<p>
<span className="glossary-tag glossary-tag-administrative">📋 Admin</span><br/>
<strong>FAQ (Frequently Asked Questions)</strong><br/>
A collection of common questions and answers about the school system, policies, or procedures. Helps users find quick answers without contacting support.
</p>

<p>
<span className="glossary-tag glossary-tag-technical">🔧 Technical</span><br/>
<strong>FCM (Firebase Cloud Messaging)</strong><br/>
Google's service for sending push notifications to mobile apps. Must be configured for students and parents to receive instant alerts on their phones. See <a href="../guides/notification-settings-management.md#push-notifications">Notification Settings</a>.
</p>

<p>
<span className="glossary-tag glossary-tag-financial">💰 Financial</span><br/>
<strong>Fee Type</strong><br/>
A category of fees (e.g., Tuition Fee, Library Fee, Sports Fee) that can be assigned to classes and collected from students.
</p>

<p>
<span className="glossary-tag glossary-tag-financial">💰 Financial</span><br/>
<strong>Fee Structure</strong><br/>
The configuration of which fee types apply to which classes, including amounts and due dates.
</p>

<p>
<span className="glossary-tag glossary-tag-technical">🔧 Technical</span><br/>
<strong>Form Field</strong><br/>
A custom field added to student or staff registration forms to collect school-specific information beyond the default fields (e.g., blood type, parent occupation, special needs).
</p>

</div>

### Form Field
A custom field added to student or staff registration forms to collect school-specific information beyond the default fields (e.g., blood type, parent occupation, special needs).

---

## G

<div className="glossary-grid">

<p>
<span className="glossary-tag glossary-tag-administrative">📋 Admin</span><br/>
<strong>Guidance</strong><br/>
Counseling or advisory content provided to students for academic planning, career advice, or personal development.

</p>
<p>
<span className="glossary-tag glossary-tag-administrative">📋 Admin</span><br/>
<strong>Guardian</strong><br/>
A parent or legal guardian of a student. Guardian accounts can manage multiple children in the school.

</p>
<p>
<span className="glossary-tag glossary-tag-administrative">📋 Admin</span><br/>
<strong>Grade</strong><br/>
Either a class level (e.g., Grade 10) or a letter/score representing academic performance (e.g., A, B+, 85%).

</p>
<p>
<span className="glossary-tag glossary-tag-administrative">📋 Admin</span><br/>
<strong>Guardian</strong><br/>
A parent or legal guardian of a student. Guardian accounts can manage multiple children in the school.

</p>
</div>

---

## H

<div className="glossary-grid">

<p>
<span className="glossary-tag glossary-tag-administrative">📋 Admin</span><br/>
<strong>Helper</strong><br/>
A transportation staff member who assists the driver with managing students, ensuring safety, and marking transportation attendance.

</p>
<p>
<span className="glossary-tag glossary-tag-administrative">📋 Admin</span><br/>
<strong>Holiday</strong><br/>
A non-school day defined in the system calendar. Used for planning and is visible to all users.

</p>
</div>

---

## I

<div className="glossary-grid">

<p>
<span className="glossary-tag glossary-tag-administrative">📋 Admin</span><br/>
<strong>Installment</strong><br/>
A portion of the total fee amount that can be paid separately. Allows parents to pay fees in parts rather than all at once.

</p>
</div>

---

## K

<div className="glossary-grid">

<p>
<span className="glossary-tag glossary-tag-administrative">📋 Admin</span><br/>
<strong>KPI (Key Performance Indicator)</strong><br/>
Metrics displayed on the dashboard to provide quick insights (e.g., student count, attendance percentage, fee collection rate).

</p>
</div>

---

## L

<div className="glossary-grid">

<p>
<span className="glossary-tag glossary-tag-administrative">📋 Admin</span><br/>
<strong>Language</strong><br/>
The language setting for the system interface. Some systems support multiple languages for localization.

</p>
<p>
<span className="glossary-tag glossary-tag-administrative">📋 Admin</span><br/>
<strong>Leave</strong><br/>
An approved absence for staff or teachers (sick leave, casual leave, annual leave, etc.). Leave must be applied for and approved by administrators.

</p>
<p>
<span className="glossary-tag glossary-tag-administrative">📋 Admin</span><br/>
<strong>Lesson</strong><br/>
A unit of teaching content within a [Topic](#t). Can include videos, documents, descriptions, and study materials.

</p>
<p>
<span className="glossary-tag glossary-tag-administrative">📋 Admin</span><br/>
<strong>License</strong><br/>
The subscription or permission to use the school management system. May have an expiration date requiring renewal.

</p>
</div>

---

## M

<div className="glossary-grid">

<p>
<span className="glossary-tag glossary-tag-administrative">📋 Admin</span><br/>
<strong>Messaging</strong><br/>
The communication system allowing teachers, parents, students, and staff to send messages to individuals or groups. Also called Chat.

</p>
<p>
<span className="glossary-tag glossary-tag-administrative">📋 Admin</span><br/>
<strong>Marks</strong><br/>
See [Exam Marks](#e).

</p>
<p>
<span className="glossary-tag glossary-tag-administrative">📋 Admin</span><br/>
<strong>Medium</strong><br/>
The language of instruction (e.g., English Medium, Hindi Medium, Gujarati Medium). Classes are assigned a medium.

</p>
</div>

---

## N

<div className="glossary-grid">

<p>
<span className="glossary-tag glossary-tag-administrative">📋 Admin</span><br/>
<strong>Notification</strong><br/>
An alert sent to users about events, updates, or important information. Can be delivered via push notification (mobile), email, SMS, or in-app alerts. See [Notification Settings](../guides/notification-settings-management.md).

</p>
</div>

---

## N

### Notification
An alert sent to users about events, updates, or important information. Can be delivered via push notification (mobile), email, SMS, or in-app alerts. See [Notification Settings](../guides/notification-settings-management.md).

---

## O

<div className="glossary-grid">

<p>
<span className="glossary-tag glossary-tag-administrative">📋 Admin</span><br/>
<strong>Offline Exam</strong><br/>
A traditional paper-based exam conducted in person. Marks are entered into the system manually or via bulk upload.

</p>
<p>
<span className="glossary-tag glossary-tag-administrative">📋 Admin</span><br/>
<strong>Online Exam</strong><br/>
A digital exam conducted through the system where students answer questions on a computer/mobile device. Marks are calculated automatically.

</p>
</div>

---

## P

<div className="glossary-grid">

<p>
<span className="glossary-tag glossary-tag-administrative">📋 Admin</span><br/>
<strong>Parent</strong><br/>
See [Guardian](#g).

</p>
<p>
<span className="glossary-tag glossary-tag-administrative">📋 Admin</span><br/>
<strong>Partial Payment</strong><br/>
When a student has paid some but not all of the compulsory fees. Shows as "partially paid" in fee reports.

</p>
<p>
<span className="glossary-tag glossary-tag-administrative">📋 Admin</span><br/>
<strong>Payment Gateway</strong><br/>
A third-party service that processes online fee payments (e.g., Paystack, Flutterwave, Razorpay, Stripe). Must be configured to accept online payments. See [Integration Guides](../reference/integrations.md#payment-gateways).

</p>
<p>
<span className="glossary-tag glossary-tag-administrative">📋 Admin</span><br/>
<strong>Payment Transaction</strong><br/>
A record of a fee payment made by a parent or guardian, including amount, date, payment method, and transaction reference.

</p>
<p>
<span className="glossary-tag glossary-tag-administrative">📋 Admin</span><br/>
<strong>Payroll</strong><br/>
The system for calculating and recording staff salaries, deductions, and payments. Generates salary expenses automatically.

</p>
<p>
<span className="glossary-tag glossary-tag-administrative">📋 Admin</span><br/>
<strong>Permission</strong><br/>
A specific capability or action a user is allowed to perform (e.g., `student-create`, `attendance-list`). See [Role](#r).

</p>
<p>
<span className="glossary-tag glossary-tag-administrative">📋 Admin</span><br/>
<strong>Pickup Point</strong><br/>
A designated location along a transportation route where students are picked up in the morning or dropped off in the afternoon.

</p>
<p>
<span className="glossary-tag glossary-tag-administrative">📋 Admin</span><br/>
<strong>Promote Student</strong><br/>
The process of moving students from one class to the next at the end of a session year (e.g., Grade 9 â†’ Grade 10). Also called Student Promotion.

</p>
</div>

---

## R

<div className="glossary-grid">

<p>
<span className="glossary-tag glossary-tag-administrative">📋 Admin</span><br/>
<strong>RBAC (Role-Based Access Control)</strong><br/>
The security system where users are assigned roles, and roles have specific permissions determining what users can access and do.

</p>
<p>
<span className="glossary-tag glossary-tag-administrative">📋 Admin</span><br/>
<strong>Result</strong><br/>
The outcome of an exam, showing marks, grades, and pass/fail status for students.

</p>
<p>
<span className="glossary-tag glossary-tag-administrative">📋 Admin</span><br/>
<strong>Role</strong><br/>
A collection of permissions assigned to users based on their job function (e.g., School Admin, Teacher, Guardian, Student).

</p>
<p>
<span className="glossary-tag glossary-tag-administrative">📋 Admin</span><br/>
<strong>Route (Transportation)</strong><br/>
A defined path for school buses with specific pickup points and schedules. Drivers are assigned to routes and follow them daily.

</p>
</div>

---

## S

<div className="glossary-grid">

<p>
<span className="glossary-tag glossary-tag-administrative">📋 Admin</span><br/>
<strong>Section</strong><br/>
See [Class Section](#c).

</p>
<p>
<span className="glossary-tag glossary-tag-administrative">📋 Admin</span><br/>
<strong>Semester</strong><br/>
A subdivision of the academic year, typically half a year (e.g., Semester 1, Semester 2). Some schools operate on semester systems.

</p>
<p>
<span className="glossary-tag glossary-tag-administrative">📋 Admin</span><br/>
<strong>Session Year</strong><br/>
An academic year during which school operates (e.g., "2025-2026"). Includes a start date and end date. Most data in the system is tied to a session year.

</p>
<p>
<span className="glossary-tag glossary-tag-administrative">📋 Admin</span><br/>
<strong>Shift</strong><br/>
A time period during which school operates (e.g., Morning Shift, Afternoon Shift). Used by schools with multiple shifts per day.

</p>
<p>
<span className="glossary-tag glossary-tag-administrative">📋 Admin</span><br/>
<strong>Slider</strong><br/>
A rotating image or announcement shown on the homepage or student/parent portal. Used for highlights and promotions.

</p>
<p>
<span className="glossary-tag glossary-tag-administrative">📋 Admin</span><br/>
<strong>SMS Gateway</strong><br/>
A third-party service that sends text messages (SMS) to mobile phones for notifications and alerts (e.g., Termii, Twilio, Msg91). See [Integration Guides](../reference/integrations.md#sms-gateways).

</p>
<p>
<span className="glossary-tag glossary-tag-administrative">📋 Admin</span><br/>
<strong>SMTP (Simple Mail Transfer Protocol)</strong><br/>
The protocol used for sending emails. SMTP server settings must be configured for the system to send email notifications. See [Notification Settings](../guides/notification-settings-management.md#email-notifications).

</p>
<p>
<span className="glossary-tag glossary-tag-administrative">📋 Admin</span><br/>
<strong>Staff</strong><br/>
Non-teaching employees of the school (e.g., office staff, accountant, admin). Distinguished from [Teacher](#t).

</p>
<p>
<span className="glossary-tag glossary-tag-administrative">📋 Admin</span><br/>
<strong>Stream</strong><br/>
An academic track or specialization within a class (e.g., Science Stream, Arts Stream, Commercial Stream). Used in senior secondary classes.

</p>
<p>
<span className="glossary-tag glossary-tag-administrative">📋 Admin</span><br/>
<strong>Student</strong><br/>
A learner enrolled in the school. Has a student account with access to assignments, exams, results, and timetable.

</p>
<p>
<span className="glossary-tag glossary-tag-administrative">📋 Admin</span><br/>
<strong>Student Diary</strong><br/>
A communication feature where teachers post observations, notes, or messages about individual students for parents to view.

</p>
<p>
<span className="glossary-tag glossary-tag-administrative">📋 Admin</span><br/>
<strong>Student Promotion</strong><br/>
See [Promote Student](#p).

</p>
<p>
<span className="glossary-tag glossary-tag-administrative">📋 Admin</span><br/>
<strong>Study Material</strong><br/>
Educational content (PDFs, videos, links) attached to lessons or topics for student learning.

</p>
<p>
<span className="glossary-tag glossary-tag-administrative">📋 Admin</span><br/>
<strong>Subject</strong><br/>
A course of study (e.g., Mathematics, English, Physics). Can be [Core Subject](#c) or [Elective Subject](#e).

</p>
<p>
<span className="glossary-tag glossary-tag-administrative">📋 Admin</span><br/>
<strong>Subject Teacher</strong><br/>
A teacher assigned to teach a specific subject to a specific class-section combination.

</p>
<p>
<span className="glossary-tag glossary-tag-administrative">📋 Admin</span><br/>
<strong>Subscription</strong><br/>
The licensing plan for cloud/SaaS versions of the school system. Includes package type, expiration date, and enabled features.

</p>
</div>

---

## T

<div className="glossary-grid">

<p>
<span className="glossary-tag glossary-tag-administrative">📋 Admin</span><br/>
<strong>Teacher</strong><br/>
An instructor employed by the school to teach students. Has access to assigned classes, attendance, assignments, and exams.

</p>
<p>
<span className="glossary-tag glossary-tag-administrative">📋 Admin</span><br/>
<strong>Timetable</strong><br/>
A schedule showing which subject is taught at what time, in which classroom, by which teacher. Can be class-based or teacher-based.

</p>
<p>
<span className="glossary-tag glossary-tag-administrative">📋 Admin</span><br/>
<strong>Topic</strong><br/>
A unit of content within a subject. Contains lessons, study materials, and may be linked to assignments or exams.

</p>
<p>
<span className="glossary-tag glossary-tag-administrative">📋 Admin</span><br/>
<strong>Transfer Student</strong><br/>
Moving a student from one school to another, or from one class/section to another within the same school.

</p>
<p>
<span className="glossary-tag glossary-tag-administrative">📋 Admin</span><br/>
<strong>Transportation</strong><br/>
The school bus/vehicle management system including routes, drivers, helpers, pickup points, and student transportation attendance.

</p>
</div>

---

## U

<div className="glossary-grid">

<p>
<span className="glossary-tag glossary-tag-administrative">📋 Admin</span><br/>
<strong>Unpaid</strong><br/>
A student who has not made any fee payments yet. Shows as "unpaid" in fee reports.

</p>
</div>

---

## V

<div className="glossary-grid">

<p>
<span className="glossary-tag glossary-tag-administrative">📋 Admin</span><br/>
<strong>Vehicle</strong><br/>
A school bus or transport vehicle used for student transportation. Vehicles are assigned to routes and have designated drivers.

</p>
</div>

---

## W

<div className="glossary-grid">

<p>
<span className="glossary-tag glossary-tag-administrative">📋 Admin</span><br/>
<strong>Webhook</strong><br/>
An automatic notification sent from an external service (like a payment gateway) to the school system to confirm events like successful payments. Essential for real-time payment confirmation.

</p>
</div>

---

## V

### Vehicle
A school bus or transport vehicle used for student transportation. Vehicles are assigned to routes and have designated drivers.

---

## W

### Webhook
An automatic notification sent from an external service (like a payment gateway) to the school system to confirm events like successful payments. Essential for real-time payment confirmation.

---

## Related Resources

- **[User Roles Guide](../intro/user-roles.md)** - Detailed explanation of each user role
- **[Roles & Permissions](roles-permissions.md)** - Complete permission list and RBAC system
- **[School Admin Guide](../guides/school-admin.md)** - Overview of administrative features

---

<p>
<span className="glossary-tag glossary-tag-administrative">📋 Admin</span><br/>
<strong>Can't find a term?</strong><br/>
Check the specific feature guides or use the search function in the documentation.

</p>
