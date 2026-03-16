---
id: school-admin
title: School Administrator Guide
description: Complete guide for school administrators managing 4SCH. Learn how to set up classes, manage fees, create timetables, enroll students, and configure your Nigerian school management system.
keywords: [school administration, school management system, Nigerian schools, student enrollment, fee management, timetable creation, academic sessions, 4SCH admin guide, school software Nigeria]
sidebar_position: 1
---

import Screenshot from '@site/src/components/Screenshot';
import Link from '@docusaurus/Link';
import TOCInline from '@theme/TOCInline';
import CardGrid from '@site/src/components/CardGrid';
import DashboardIcon from '@site/src/components/icons/Dashboard';
import AcademicIcon from '@site/src/components/icons/Academic';
import UsersIcon from '@site/src/components/icons/Users';
import FinanceIcon from '@site/src/components/icons/Finance';
import ReportsIcon from '@site/src/components/icons/Reports';
import SecurityIcon from '@site/src/components/icons/Security';

# School Administrator Guide

Welcome! As a school administrator, you have complete control over your school's 4SCH system. This comprehensive guide will walk you through setting up and managing all aspects of your school management system.

:::info Who is this guide for?
This guide is specifically for **School Administrators** who manage the school system through the **web-based admin panel**. If you're a teacher or staff member, see the <Link to="/guides/teacher-guide">Teacher Guide</Link> or <Link to="/guides/non-teaching-staff-guide">Staff Guide</Link>.
:::

<Screenshot
  src="/img/screens/admin/admin-dashboard.svg"
  alt="School Admin Dashboard"
  caption="School Admin Dashboard - Your command center"
/>

## Quick Navigation

<CardGrid
  cards={[
    { to: '#initial-setup', title: 'Initial Setup', description: 'First-time configuration', icon: <DashboardIcon /> },
    { to: '#academic-management', title: 'Academic Setup', description: 'Sessions, classes, subjects', icon: <AcademicIcon /> },
    { to: '#user-management', title: 'User Management', description: 'Students, teachers, staff', icon: <UsersIcon /> },
    { to: '#fee-management', title: 'Fee Management', description: 'Structure, invoices, payments', icon: <FinanceIcon /> },
    { to: '#reports-analytics', title: 'Reports & Analytics', description: 'Insights and exports', icon: <ReportsIcon /> },
    { to: '#system-settings', title: 'System Settings', description: 'Configuration and security', icon: <SecurityIcon /> },
  ]}
/>

---

## <span className="heading-icon"><DashboardIcon size={18} /></span> Getting Started {#initial-setup}

### First Login

When you first access the admin panel:

1. Navigate to your school's admin URL (e.g., `https://yourschool.4sch.com/admin`)
2. Enter your **Admin Email** and **Password**
3. Click **Login**

:::tip Security Best Practice
Change your default password immediately after first login. Go to **Profile → Change Password**.
:::

### Understanding the Admin Dashboard

Your dashboard provides a complete overview of your school:

**Key Metrics:**
- **Total Students** - Current enrollment count
- **Total Teachers** - Active teaching staff
- **Attendance Today** - Real-time attendance percentage
- **Fees Collected** - Financial summary for current session

**Quick Actions:**
- Add new students or staff
- Generate reports
- View pending approvals
- Access settings

**Recent Activity:**
- Latest admissions
- Fee payments received
- Announcements posted
- System updates

---

## <span className="heading-icon"><AcademicIcon size={18} /></span> Academic Management {#academic-management}

<!-- Anchor for "academic setup" links -->
<a id="academic-setup"></a>

### Setting Up Academic Sessions

Academic sessions represent school years (e.g., 2024-2025).

**To create a new session:**

1. Go to **Academics → Session Years**
2. Click **Add New Session**
3. Fill in:
   - **Session Name**: e.g., "2024-2025"
   - **Start Date**: First day of school
   - **End Date**: Last day of school
   - **Default Session**: Check if this is the current active session
4. Click **Save**

:::caution Important
Only one session can be marked as "default" (active). This is the session students and teachers see.
:::

### Creating Classes and Sections

Classes represent grade levels (e.g., Class 10), and sections are divisions within a class (e.g., 10-A, 10-B).

**Step 1: Create Classes**

1. Go to **Academics → Classes**
2. Click **Add New Class**
3. Enter:
   - **Class Name**: e.g., "Class 10"
   - **Medium**: Language of instruction (e.g., English)
4. Click **Save**

**Step 2: Add Sections**

1. Select the class you just created
2. Click **Add Section**
3. Enter:
   - **Section Name**: e.g., "A", "B", "Science", "Commerce"
   - **Capacity**: Maximum students (optional)
4. Click **Save**

### Setting Up Subjects

Subjects are the courses taught in your school.

**To add subjects:**

1. Go to **Academics → Subjects**
2. Click **Add New Subject**
3. Fill in:
   - **Subject Name**: e.g., "Mathematics", "English"
   - **Subject Code**: e.g., "MATH101"
   - **Type**: Core or Elective
4. Click **Save**

**Assigning Subjects to Classes:**

1. Go to **Academics → Class Subjects**
2. Select a class and section
3. Choose subjects from the list
4. Assign teachers to each subject
5. Click **Save**

### Creating Timetables

**To create a class timetable:**

1. Go to **Academics → Timetable**
2. Select **Class**, **Section**, and **Session**
3. Click **Create Timetable**
4. For each day:
   - Add time slots (e.g., 9:00 AM - 10:00 AM)
   - Assign subject and teacher
   - Add room/venue (optional)
5. Click **Save Timetable**

:::tip Time-Saving Feature
Use the **Copy Timetable** feature to duplicate a similar class's schedule and modify it.
:::

**Timetable Validation & Conflicts:**

The system checks for:
- **Teacher double-booking**: A teacher can't be scheduled for two classes at the same time
- **Classroom conflicts**: If room assignments are used, same room can't be used simultaneously
- **Time slot overlaps**: Ensure start/end times don't conflict

If you encounter conflicts, review teacher assignments or adjust time slots.

### Managing Exams

**Creating Exam Schedules:**

1. Go to **Exams → Exam Types**
2. Add exam types (e.g., Mid-Term, Final, Monthly Test)
3. Go to **Exams → Create Exam**
4. Fill in:
   - **Exam Name**: e.g., "Mid-Term Exam - Term 1"
   - **Session** and **Class**
   - **Start Date** and **End Date**
5. Click **Save**

**Publishing Exam Timetable:**

1. Select the exam
2. Click **Add Timetable**
3. For each subject:
   - **Date** and **Time**
   - **Duration**
   - **Total Marks**
   - **Passing Marks**
   - **Venue/Room**
4. Click **Publish Timetable**

---

## <span className="heading-icon"><UsersIcon size={18} /></span> User Management {#user-management}

### Adding Students

**Single Student Admission:**

1. Go to **Students → Add Student**
2. Fill in **Personal Details**:
   - First Name, Last Name
   - Date of Birth
   - Gender
   - Photo (optional)
3. Add **Contact Information**:
   - Email (if applicable)
   - Mobile Number
   - Current Address
4. Set **Academic Details**:
   - Admission Number
   - Class and Section
   - Roll Number
   - Admission Date
5. Add **Guardian/Parent Information**:
   - Name, Email, Phone
   - Relationship to student
6. Click **Submit**

**Bulk Student Import:**

1. Go to **Students → Import Students**
2. Download the CSV template
3. Fill in student details in the template
4. Upload the completed CSV file
5. Review and confirm the import

:::warning Data Validation
Ensure email addresses and admission numbers are unique. Duplicates will cause import errors.
:::

### Managing Teachers

**Adding a Teacher:**

1. Go to **Staff → Teachers → Add Teacher**
2. Fill in:
   - **Personal Details**: Name, DOB, Gender, Photo
   - **Contact**: Email, Phone, Address
   - **Employment Details**:
     - Employee ID
     - Joining Date
     - Qualification
     - Designation (e.g., Senior Teacher, HOD)
3. **Assign Subjects**:
   - Select classes and subjects they teach
4. **Set Login Credentials**:
   - Email (used for login)
   - Generate password
5. Click **Save**

### Adding Non-Teaching Staff

Non-teaching staff includes accountants, admission officers, librarians, transport coordinators, etc.

**To add staff:**

1. Go to **Staff → Non-Teaching Staff → Add Staff**
2. Fill in personal and contact details
3. Set **Role**:
   - Accountant
   - Admission Officer
   - Transport Coordinator
   - Librarian
   - Office Clerk
4. Assign **Permissions** based on their role
5. Create login credentials
6. Click **Save**

### Managing Parents/Guardians

Parents are automatically created when you add a student. To manage them:

1. Go to **Parents → All Parents**
2. View parent details linked to students
3. Edit contact information if needed
4. Reset passwords if parents forget credentials

---

## <span className="heading-icon"><FinanceIcon size={18} /></span> Fee Management {#fee-management}

### Setting Up Fee Structure

**Step 1: Create Fee Types**

1. Go to **Fees → Fee Types**
2. Click **Add Fee Type**
3. Examples:
   - Tuition Fee
   - Sports Fee
   - Library Fee
   - Lab Fee
   - Transport Fee
   - Exam Fee
4. For each, set:
   - **Name**
   - **Description**
   - **Optional or Compulsory**

**Step 2: Define Fee Structures for Classes**

1. Go to **Fees → Fee Structures**
2. Select **Class** and **Session**
3. Add fee types with amounts:
   - Tuition Fee: ₦50,000
   - Sports Fee: ₦5,000
   - Library Fee: ₦3,000
4. Set **Payment Schedule**:
   - Full Payment
   - Installments (e.g., 3 installments)
5. Set **Due Dates** for each installment
6. Click **Save**

### Creating Invoices

**Manual Invoice Generation:**

1. Go to **Fees → Generate Invoices**
2. Select **Class**, **Section**, **Session**
3. Choose students (or select all)
4. The system generates invoices based on fee structure
5. Click **Generate Invoices**

**Auto-Generated Invoices:**
- Set up automatic invoice generation for new admissions
- Go to **Settings → Fee Settings**
- Enable **Auto-Generate Invoices**

### Recording Payments

**Cash/Offline Payments:**

1. Go to **Fees → Record Payment**
2. Search for student
3. View outstanding balance
4. Enter:
   - **Amount Paid**
   - **Payment Date**
   - **Payment Method**: Cash, Cheque, Bank Transfer
   - **Receipt Number**
   - **Notes** (optional)
5. Click **Record Payment**
6. Print receipt for parent

**Online Payments:**

Online payments through payment gateways are recorded automatically. You can:
- View transaction details
- Download payment receipts
- Reconcile with bank statements

### Payment Gateway Setup

To enable online fee payments:

1. Go to **Settings → Payment Gateway**
2. Choose your provider:
   - Paystack
   - Flutterwave
   - Stripe
   - RazorPay
3. Enter your **API Keys**:
   - Public Key
   - Secret Key
4. Set **Payment Settings**:
   - Minimum amount
   - Convenience fee (if applicable)
5. Test the connection
6. **Enable** the gateway

### Fee Reports

Generate comprehensive fee reports:

1. Go to **Fees → Reports**
2. Choose report type:
   - **Fee Collection Report**: Total collected vs pending
   - **Class-wise Collection**: Collection by class
   - **Defaulters Report**: Students with pending fees
   - **Payment Method Report**: Cash vs online
3. Select date range
4. Export as PDF or Excel

---

## <span className="heading-icon"><ReportsIcon size={18} /></span> Reports & Analytics {#reports-analytics}

### Student Reports

**Attendance Reports:**
1. Go to **Reports → Attendance**
2. Filter by:
   - Class/Section
   - Date range
   - Student
3. View statistics:
   - Total present/absent days
   - Attendance percentage
   - Monthly trends
4. Export report

**Academic Performance Reports:**
1. Go to **Reports → Exam Results**
2. Select exam and class
3. View:
   - Subject-wise performance
   - Class average
   - Top performers
   - Students needing attention
4. Generate report cards

### Financial Reports

**Fee Collection Summary:**
- Total fees due
- Amount collected
- Pending amount
- Collection rate

**Income vs Expense:**
- Track school revenue
- Monitor expenses
- View profit/loss
- Monthly comparisons

### Staff Reports

**Teacher Performance:**
- Classes taught
- Attendance marking
- Assignment grading rate
- Student feedback

**Leave Reports:**
- Leave applications
- Approved/rejected
- Leave balance
- Attendance record

---

## <span className="heading-icon"><SecurityIcon size={18} /></span> System Settings {#system-settings}

### School Profile

Update your school's information:

1. Go to **Settings → School Profile**
2. Edit:
   - **School Name**
   - **Logo** (upload image)
   - **Address**
   - **Contact Numbers**
   - **Email**
   - **Website**
   - **School Code**
3. Click **Save**

### Role & Permissions

Define what each user role can access:

1. Go to **Settings → Roles & Permissions**

### Student Diary Management

The **Student Diary** feature enables teachers to track student behavior and performance. As an admin, you control:

**Permissions:**
- `student-diary-create` — Allow teachers to create diary notes and categories
- `student-diary-edit` — Allow teachers to edit diary categories
- `student-diary-delete` — Allow teachers to delete diary notes/categories

**Key Admin Functions:**
- **Restore deleted diary notes** — If a teacher accidentally deletes a note, you can restore it from trash
- **Manage categories school-wide** — Review and organize diary categories created by teachers
- **View all diary notes** — Monitor how teachers are using the diary feature

:::tip Best Practice
Encourage teachers to balance positive and negative diary entries. Diary should be used for **recognition** as much as for **discipline**.
:::

---

### Modules & Feature Access (Missing Menus) {#modules-feature-access}

If a user cannot see a menu (or receives a "feature not available" style error), it is usually due to one of these:

1. **Module is disabled for the school** (feature not enabled)
2. **Permission is not granted** for the user role

Common module names used by the system include:

- **Exam Management**
- **Assignment Management**
- **Attendance Management**
- **Fees Management**
- **Timetable Management**
- **Announcement Management**
- **Lesson Management**
- **Staff Leave Management**
- **Expense Management**

If a teacher/parent/student reports a missing feature:
- Confirm the **role permissions** first
- Then verify the **module/feature is enabled** for your school plan/settings
- If you still can’t enable it, contact support to activate the module for your school

:::tip Quick check
If the feature is visible for admins but not for teachers, it is usually a **role permission** issue.
:::
2. Select a role (e.g., Teacher, Accountant)
3. Enable/disable the permissions you want (for example: View students, Edit students, View fees, Collect fees, Generate reports)
4. Click **Save**

### Notification Settings

Configure system notifications:

1. Go to **Settings → Notifications**
2. Set up:
   - **Email Notifications**: Announcements, fee reminders
   - **SMS Notifications**: Attendance alerts, exam notices
   - **Push Notifications**: Mobile app alerts
3. Configure notification templates
4. Set frequency and triggers

### Backup & Data Management

**Database Backups:**

1. Go to **Settings → Database Backup**
2. Options:
   - **Manual Backup**: Create backup now
   - **Scheduled Backups**: Daily, weekly, monthly
3. Download backup files
4. Store securely

**Data Import/Export:**

1. Go to **Settings → Data Management**
2. Export data:
   - Student records
   - Fee data
   - Attendance logs
3. Import data from other systems
4. Use CSV templates

---

## Communication & Announcements

### Posting Announcements

**School-Wide Announcements:**

1. Go to **Communication → Announcements**
2. Click **Create Announcement**
3. Fill in:
   - **Title**: e.g., "PTA Meeting Notice"
   - **Message**: Full details
   - **Target Audience**:
     - All Users
     - Parents Only
     - Specific Classes
   - **Attachments** (if any)
   - **Send Notifications**: Email/SMS/Push
4. Click **Publish**

### Messaging System

**Send Messages to Parents/Teachers:**

1. Go to **Communication → Messages**
2. Compose new message
3. Select recipients:
   - Individual users
   - Entire class
   - All parents
4. Type message
5. Send immediately or schedule

---

## Transportation Management

### Setting Up Routes

1. Go to **Transportation → Routes**
2. Click **Add Route**
3. Enter:
   - **Route Name**: e.g., "Route A - Downtown"
   - **Pickup Points**: Add stops with timings
   - **Vehicle Assignment**
   - **Driver & Helper Details**
4. Click **Save**

### Managing Transport Fees

1. Go to **Transportation → Fees**
2. Set fees per route
3. Link to student fee structure
4. Generate transport invoices

### Live Tracking

Monitor school buses in real-time:
1. Go to **Transportation → Live Tracking**
2. View all active buses on map
3. Check route progress
4. Send alerts to drivers

---

## Holidays & Events

### Adding Holidays

1. Go to **Academics → Holidays**
2. Click **Add Holiday**
3. Enter:
   - **Holiday Name**: e.g., "Independence Day"
   - **Date**
   - **Description**
4. Click **Save**

Holidays appear on calendars for students and teachers.

### School Calendar

Manage all school events:
1. Go to **Academics → Calendar**
2. Add events:
   - Exams
   - Holidays
   - Sports Day
   - PTA Meetings
3. Events sync to mobile apps

---

## Gallery Management

Share school photos and videos:

1. Go to **Gallery → Manage Gallery**
2. Create albums by:
   - **Session Year**
   - **Event Type** (Sports Day, Annual Function)
3. Upload photos/videos
4. Publish for viewing by parents and students

---

## Leave Management

### Approving Staff Leave

1. Go to **Staff → Leave Requests**
2. View pending requests
3. Check:
   - Leave type (Sick, Casual, Earned)
   - Duration
   - Reason
   - Leave balance
4. **Approve** or **Reject** with comments

---

## Tips for School Administrators

### Daily Tasks Checklist

**Every Morning:**
- ✅ Check dashboard for key metrics
- ✅ Review pending approvals (leave, admissions)
- ✅ Monitor attendance reports
- ✅ Check system notifications

**Weekly Tasks:**
- ✅ Review fee collection status
- ✅ Generate weekly reports
- ✅ Check staff attendance
- ✅ Post announcements for upcoming events

**Monthly Tasks:**
- ✅ Generate monthly financial reports
- ✅ Review academic performance
- ✅ Back up database
- ✅ Plan next month's activities

### Best Practices

**Security:**
- Change default passwords immediately
- Use strong passwords (min 12 characters)
- Enable two-factor authentication
- Regularly review user permissions
- Log out when leaving your workstation

**Data Management:**
- Perform weekly database backups
- Verify data before bulk imports
- Keep records organized by session
- Archive old session data

**Communication:**
- Send important notices via multiple channels
- Use templates for routine communications
- Schedule announcements in advance
- Keep parents informed regularly

**Financial Management:**
- Reconcile fees daily
- Follow up on pending payments promptly
- Generate fee receipts immediately
- Keep digital copies of all transactions

---

Tool call argument 'replace' pruned from message history.

### Can't Log In

**Solution:**
1. Verify you're using the correct admin URL
2. Check email and password (case-sensitive)
3. Clear browser cache and cookies
4. Try password reset
5. Contact technical support if issue persists

### Students Not Seeing Assignments

**Check:**
- Assignment is published (not in draft)
- Correct class/section is selected
- Student is enrolled in the class
- Assignment date range is valid

### Payment Gateway Not Working

**Verify:**
- API keys are correct
- Gateway is enabled in settings
- Test mode is disabled (for live payments)
- Firewall isn't blocking requests
- Contact payment provider support

### Reports Not Generating

**Try:**
- Reduce date range
- Check if data exists for selected filters
- Clear browser cache
- Try different export format
- Contact support with error message

---

## Getting Help

### Support Resources

- **Documentation**: <Link to="/support/faq">FAQ</Link> and <Link to="/support/troubleshooting">Troubleshooting Guide</Link>
- **Video Tutorials**: Access from Help menu in admin panel
- **Email Support**: support@4sch.com
- **Phone Support**: Available during business hours

### Training for Your Team

Consider scheduling training sessions for:
- New administrators
- Teachers using grading features
- Accountants using fee management
- Admission officers

---

## Next Steps

Now that you've set up your system:

1. <Link to="/guides/teacher-guide">Train your teachers</Link> on using their features
2. <Link to="/guides/parent-guide">Guide parents</Link> on accessing the parent portal
3. <Link to="/guides/student-guide">Help students</Link> understand the student app
4. <Link to="/reference/data-import-export">Import existing data</Link> if migrating from another system

:::tip
Bookmark this guide and refer back to it as you explore different features of the system!
:::

