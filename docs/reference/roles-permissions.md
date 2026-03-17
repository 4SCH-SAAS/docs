---
id: roles-permissions
title: Roles & Permissions Guide
sidebar_label: Roles & Permissions
sidebar_position: 1
description: Comprehensive guide to roles and permissions in 4SCH. Default roles, custom permissions, security best practices, and access control.
keywords: [roles permissions, access control, user permissions, custom roles, security settings, permission matrix, role-based access, school security, admin permissions]
---

# Roles & Permissions Guide

**Roles:** School Admin

Roles and Permissions control who can access what features in the system. Proper role configuration ensures security, prevents unauthorized access, and gives users exactly the capabilities they need—nothing more, nothing less.

:::info Permission System
This system uses **role-based access control (RBAC)** powered by Spatie Laravel Permission. Each user is assigned one or more roles, and each role has specific permissions.
:::

---

## Overview

### What Are Roles?

**Roles** are predefined sets of permissions assigned to users based on their job function. Examples:
- **School Admin** - Full access to all school features
- **Teacher** - Access to classes, attendance, assignments, exams
- **Guardian** - View child's progress, pay fees, communicate
- **Student** - View timetable, submit assignments, take exams

### What Are Permissions?

**Permissions** are specific capabilities within the system. They follow a `module-action` pattern:
- `student-list` - View list of students
- `student-create` - Add new students
- `student-edit` - Modify student records
- `student-delete` - Remove students

**Standard Actions:**
- **list** - View records in a module
- **create** - Add new records
- **edit** - Modify existing records
- **delete** - Remove records

### How They Work Together

```
User → Assigned Role(s) → Role Has Permissions → Access Granted/Denied
```

**Example:**
```
User: Mr. Obi
Role: Teacher
Permissions: attendance-list, attendance-create, assignment-list, assignment-create, ...
Result: Can mark attendance and create assignments for assigned classes
```

---

## 🎭 Default Roles {#default-roles}

The system comes with predefined roles that cover most school scenarios.

### School Admin

**Purpose:** Full control of school operations

**Key Responsibilities:**
- Configure school settings and academic structure
- Manage all users (students, staff, parents)
- Create and assign roles
- Access all reports and analytics
- Manage fees, exams, and results

**Default Permissions:** 100+ permissions covering all modules

**Cannot Be:**
- Deleted
- Renamed
- Modified (core permissions)

:::tip
The first user created when setting up a school is automatically assigned the School Admin role.
:::

---

### Teacher

**Purpose:** Manage assigned classes, students, and academic activities

**Key Responsibilities:**
- Mark attendance for assigned classes
- Create and grade assignments
- Create and manage lessons/topics
- Enter exam marks
- Communicate with students and parents
- View class-specific reports

**Default Permissions:**
- `attendance-list`, `attendance-create`
- `assignment-list`, `assignment-create`, `assignment-edit`, `assignment-delete`
- `assignment-submission` (view student submissions)
- `lesson-list`, `lesson-create`, `lesson-edit`, `lesson-delete`
- `topic-list`, `topic-create`, `topic-edit`, `topic-delete`
- `exam-upload-marks`
- `online-exam-create`, `online-exam-list`, `online-exam-edit`, `online-exam-delete`
- `online-exam-questions-create`, `online-exam-questions-list`, `online-exam-questions-edit`, `online-exam-questions-delete`
- `class-teacher` (if designated as class teacher)
- `student-diary-create`, `student-diary-list`, `student-diary-edit`, `student-diary-delete`
- `announcement-list` (view announcements)

**Scope:** Teachers only see data for classes/subjects they're assigned to (see [Teacher-Subject Assignment](../guides/teacher-subject-assignment.md))

**Cannot Be:**
- Deleted
- Renamed

---

### Guardian (Parent)

**Purpose:** Monitor child's academic progress and communicate with school

**Key Responsibilities:**
- View child's attendance, assignments, grades
- Pay school fees
- Communicate with teachers
- View timetable and announcements
- Download reports and results

**Default Permissions:**
- Auto-granted view access to child's data only
- No create/edit/delete permissions
- No admin or staff-level access

**Special Behavior:**
- Can have multiple children in the school
- Automatically linked when child is registered
- Access limited to their own children's data

**Cannot Be:**
- Deleted
- Renamed
- Given staff-level permissions

---

### Student

**Purpose:** Access learning materials and submit work

**Key Responsibilities:**
- View timetable and announcements
- Submit assignments
- Take online exams
- View grades and results
- Communicate with teachers (if enabled)

**Default Permissions:**
- Auto-granted view access to their own data
- Submit assignments
- Take exams
- View class materials (lessons, topics)

**Scope:** Students only see their own data, never other students'

**Cannot Be:**
- Deleted
- Renamed
- Given staff-level permissions

---

### Driver

**Purpose:** Manage transportation routes and student pickups/dropoffs

**Key Responsibilities:**
- View assigned routes and schedules
- Mark student attendance on bus
- Start and end trips
- Report issues or delays
- View route details

**Default Permissions:**
- `route-list`
- `pickup-points-list`
- `RouteVehicle-list`
- Transportation attendance marking

**Scope:** Only see assigned routes and students

---

### Helper

**Purpose:** Assist driver with transportation operations

**Key Responsibilities:**
- Support driver with student management
- Help with attendance
- Monitor student safety

**Default Permissions:**
- Similar to Driver but may have limited capabilities
- Typically assigned alongside a driver

---

## 🔧 Custom Roles {#custom-roles}

Beyond default roles, you can create custom roles for specific staff positions.

### When to Create Custom Roles

**Create custom roles for:**
- ✅ Front desk staff (limited to admissions, inquiries)
- ✅ Accountants (fees, payroll, expenses only)
- ✅ Registrars (student records, transfers only)
- ✅ Department heads (view reports, manage specific subjects)
- ✅ IT support staff (system settings only)
- ✅ Librarians (if you add library module)

**Don't create custom roles for:**
- ❌ Individual users (assign permissions to role, not user directly)
- ❌ Temporary access (grant temporarily, then revoke)
- ❌ Very similar to existing roles (use existing role + additional permissions)

### Creating a Custom Role

**Step 1: Access Role Management**
1. Log in as **School Admin**
2. Go to **Settings → Roles & Permissions** (or **Staff → Roles**)

**Step 2: Create New Role**
1. Click **Add Role** or **Create Role**
2. Enter role details:
   - **Role Name** - Descriptive name (e.g., "Accountant", "Front Desk")
   - **Description** *(optional)* - Purpose of this role
3. Click **Next** or **Create**

**Step 3: Assign Permissions**
1. Review the permission list (organized by module)
2. Check boxes for permissions this role needs
3. Consider the **least privilege principle** - grant only necessary permissions
4. Click **Submit** or **Save**

**Example: Creating an Accountant Role**

```
Role Name: Accountant
Description: Manages fees, expenses, and financial reports

Permissions:
☑ fees-list
☑ fees-paid
☑ fees-config
☑ fees-type-list
☑ fees-class-list
☑ expense-list
☑ expense-create
☑ expense-edit
☑ expense-category-list
☑ reports-expense
☑ student-list (view only, for fee collection)
☐ student-create (not needed)
☐ student-edit (not needed)
☐ student-delete (not needed)
```

**Step 4: Assign Role to Users**
1. Go to **Staff → Staff List**
2. Edit the user who needs this role
3. In the **Role** dropdown, select your custom role
4. Click **Save**

---

## 📋 Complete Permission List {#permission-list}

The system has 100+ permissions organized by module. Here's the complete list:

### Academic Management

**Medium (Language of Instruction)**
- `medium-list` - View mediums
- `medium-create` - Add new medium
- `medium-edit` - Modify medium
- `medium-delete` - Delete medium

**Section**
- `section-list`, `section-create`, `section-edit`, `section-delete`

**Class**
- `class-list`, `class-create`, `class-edit`, `class-delete`

**Class Section**
- `class-section-list`, `class-section-create`, `class-section-edit`, `class-section-delete`

**Subject**
- `subject-list`, `subject-create`, `subject-edit`, `subject-delete`

**Session Year**
- `session-year-list`, `session-year-create`, `session-year-edit`, `session-year-delete`

**Semester**
- `semester-list`, `semester-create`, `semester-edit`, `semester-delete`

**Stream**
- `stream-list`, `stream-create`, `stream-edit`, `stream-delete`

**Shift**
- `shift-list`, `shift-create`, `shift-edit`, `shift-delete`

**Class Group**
- `class-group-list`, `class-group-create`, `class-group-edit`, `class-group-delete`

**Timetable**
- `timetable-list`, `timetable-create`, `timetable-edit`, `timetable-delete`

**Grades**
- `grade-list`, `grade-create`, `grade-edit`, `grade-delete`

---

### User Management

**Teacher**
- `teacher-list`, `teacher-create`, `teacher-edit`, `teacher-delete`
- `class-teacher` - Designate as class teacher

**Staff**
- `staff-list`, `staff-create`, `staff-edit`, `staff-delete`

**Guardian (Parent)**
- `guardian-list`, `guardian-create`, `guardian-edit`, `guardian-delete`

**Student**
- `student-list`, `student-create`, `student-edit`, `student-delete`
- `student-reset-password` - Reset student password
- `student-change-password` - Change student password
- `reset-password-list` - View password reset requests
- `promote-student-list`, `promote-student-create`, `promote-student-edit`, `promote-student-delete`
- `transfer-student-list`, `transfer-student-create`, `transfer-student-edit`, `transfer-student-delete`

**Role Management**
- `role-list`, `role-create`, `role-edit`, `role-delete`

---

### Attendance & Diary

**Attendance**
- `attendance-list` - View/mark attendance
- `attendance-create` - Mark attendance (often combined with list)

**Staff Attendance**
- `staff-attendance-list` - View staff attendance
- `staff-attendance-edit` - Mark/edit staff attendance

**Student Diary**
- `student-diary-list`, `student-diary-create`, `student-diary-edit`, `student-diary-delete`

---

### Learning & Assignments

**Lessons**
- `lesson-list`, `lesson-create`, `lesson-edit`, `lesson-delete`

**Topics**
- `topic-list`, `topic-create`, `topic-edit`, `topic-delete`

**Assignments**
- `assignment-list`, `assignment-create`, `assignment-edit`, `assignment-delete`
- `assignment-submission` - View student submissions

**Assign Elective Subjects**
- `assign-elective-subject-list`, `assign-elective-subject-create`, `assign-elective-subject-edit`, `assign-elective-subject-delete`

---

### Exams & Results

**Offline Exams**
- `exam-list`, `exam-create`, `exam-edit`, `exam-delete`
- `exam-timetable-list`, `exam-timetable-create`, `exam-timetable-delete`
- `exam-upload-marks` - Upload marks via Excel
- `exam-result` - View exam results
- `exam-result-edit` - Edit published results
- `view-exam-marks` - View marks

**Online Exams**
- `online-exam-list`, `online-exam-create`, `online-exam-edit`, `online-exam-delete`
- `online-exam-questions-list`, `online-exam-questions-create`, `online-exam-questions-edit`, `online-exam-questions-delete`
- `online-exam-result-list` - View online exam results

---

### Fee Management

**Fees Configuration**
- `fees-config` - Configure fee structure
- `fees-classes` - Assign fees to classes
- `fees-paid` - Mark fees as paid / fee collection

**Fee Types**
- `fees-type-list`, `fees-type-create`, `fees-type-edit`, `fees-type-delete`

**Fee Classes**
- `fees-class-list`, `fees-class-create`, `fees-class-edit`, `fees-class-delete`

**Fees (General)**
- `fees-list`, `fees-create`, `fees-edit`, `fees-delete`

---

### Expense Management

**Expense Categories**
- `expense-category-list`, `expense-category-create`, `expense-category-edit`, `expense-category-delete`

**Expenses**
- `expense-list`, `expense-create`, `expense-edit`, `expense-delete`

---

### Payroll & Leave

**Payroll**
- `payroll-list`, `payroll-create`, `payroll-edit`, `payroll-delete`

**Payroll Settings**
- `payroll-settings-list`, `payroll-settings-create`, `payroll-settings-edit`, `payroll-settings-delete`

**Leave Management**
- `leave-list`, `leave-create`, `leave-edit`, `leave-delete`
- `approve-leave` - Approve/reject leave requests

---

### Transportation

**Routes**
- `route-list`, `route-create`, `route-edit`, `route-delete`

**Pickup Points**
- `pickup-points-list`, `pickup-points-create`, `pickup-points-edit`, `pickup-points-delete`

**Vehicles**
- `vehicles-list`, `vehicles-create`, `vehicles-edit`, `vehicles-delete`

**Route-Vehicle Assignment**
- `RouteVehicle-list`, `RouteVehicle-create`, `RouteVehicle-edit`, `RouteVehicle-delete`

**Driver & Helper**
- `driver-helper-list`, `driver-helper-create`, `driver-helper-edit`, `driver-helper-delete`

**Transportation Fees**
- `transportation-fees-list`, `transportation-fees-create`, `transportation-fees-edit`, `transportation-fees-delete`

**Transportation Expense**
- `transportationexpense-list`, `transportationexpense-create`, `transportationexpense-edit`, `transportationexpense-delete`

**Transportation Requests**
- `transportationRequests-list`, `transportationRequests-create`, `transportationRequests-edit`
- `transportationRequests-receipt` - Download receipts

---

### Communication & Announcements

**Announcements**
- `announcement-list`, `announcement-create`, `announcement-edit`, `announcement-delete`

**Sliders (Homepage)**
- `slider-list`, `slider-create`, `slider-edit`, `slider-delete`

**Notifications**
- `notification-list`, `notification-create`, `notification-edit`, `notification-delete`

**Gallery**
- `gallery-list`, `gallery-create`, `gallery-edit`, `gallery-delete`

---

### System Settings

**School Settings**
- `school-setting-manage` - Manage school-wide settings

**System Settings**
- `system-setting-manage` - Manage system configuration

**App Settings**
- `app-settings` - Configure mobile app settings

**FCM (Push Notifications)**
- `fcm-setting-create`, `fcm-setting-manage` - Configure Firebase Cloud Messaging

**Email Settings**
- `email-setting-create` - Configure SMTP/email

**Payment Settings**
- `payment-settings` - Configure payment gateways

**Web Settings**
- `web-settings`, `school-web-settings` - Configure website

**ID Card Settings**
- `id-card-settings` - Configure ID card templates

**Email Templates**
- `email-template` - Manage email templates

**Database Backup**
- `database-backup` - Create/download backups

---

### Content Management

**Holidays**
- `holiday-list`, `holiday-create`, `holiday-edit`, `holiday-delete`

**Languages**
- `language-list`, `language-create`, `language-edit`, `language-delete`

**Form Fields (Custom Fields)**
- `form-fields-list`, `form-fields-create`, `form-fields-edit`, `form-fields-delete`

**Guidance**
- `guidance-list`, `guidance-create`, `guidance-edit`, `guidance-delete`

**FAQs**
- `faqs-list`, `faqs-create`, `faqs-edit`, `faqs-delete`

**Certificates**
- `certificate-list`, `certificate-create`, `certificate-edit`, `certificate-delete`

**Contact Inquiries**
- `contact-inquiry-list` - View contact form submissions

---

### Reports

**Student Reports**
- `reports-student` - Generate student-related reports

**Teacher Reports**
- `reports-teacher` - Generate teacher-related reports

**Exam Reports**
- `reports-exam` - Generate exam/result reports

**Expense Reports**
- `reports-expense` - Generate financial expense reports

---

### Static Pages

**Privacy Policy**
- `privacy-policy` - Manage privacy policy page

**Terms & Conditions**
- `terms-condition` - Manage terms page

**School Terms & Conditions**
- `school-terms-condition` - School-specific terms

**About Us**
- `about-us` - Manage about page

**Contact Us**
- `contact-us` - Manage contact page

---

### Subscription Management (SaaS)

**Subscription View**
- `subscription-view` - View subscription details

**Subscription Settings**
- `subscription-settings` - Manage subscription plans

**Subscription Bills**
- `subscription-change-bills` - Modify subscription billing

**Bill Payment**
- `subscription-bill-payment` - Process subscription payments

**Schools** (Super Admin Only)
- `schools-list`, `schools-create`, `schools-edit`, `schools-delete`

**Packages** (Super Admin Only)
- `package-list`, `package-create`, `package-edit`, `package-delete`

**Addons** (Super Admin Only)
- `addons-list`, `addons-create`, `addons-edit`, `addons-delete`

---

## 🔐 Managing Roles & Permissions {#managing-roles}

### Assigning Roles to Users

**During User Creation:**
1. When adding a new staff member or teacher
2. In the user form, select **Role** from dropdown
3. Save the user

**For Existing Users:**
1. Go to **Staff → Staff List** (or **Staff → Teachers**)
2. Click **Edit** on the user
3. Change the **Role** dropdown
4. Click **Save**

**Multiple Roles:**
- Some systems allow assigning multiple roles to one user
- The user gets the combined permissions of all roles
- Use sparingly to avoid confusion

### Editing Role Permissions

**Step 1: Access Roles**
1. Go to **Settings → Roles & Permissions**
2. View list of all roles

**Step 2: Edit Role**
1. Click **Edit** (pencil icon) on the role
2. Or click **View** then **Edit Permissions**

**Step 3: Modify Permissions**
1. Check/uncheck permission boxes
2. Permissions are grouped by module for easier navigation
3. Click **Save** or **Update**

**What Happens:**
- All users with that role immediately get the updated permissions
- They may need to log out and back in to see changes
- Changes take effect system-wide

:::caution Reserved Roles
You cannot edit permissions for **School Admin**, **Teacher**, **Guardian**, or **Student** roles. These are system-protected. Create a custom role instead.
:::

### Deleting Custom Roles

**Step 1: Check Usage**
- Before deleting, ensure no users are assigned to this role
- Or reassign users to a different role first

**Step 2: Delete**
1. In the roles list, click **Delete** (trash icon)
2. Confirm the deletion

**What Happens:**
- The role is removed from the system
- If any users had this role, they lose those permissions
- Cannot delete reserved roles (School Admin, Teacher, etc.)

---

## 🛡️ Security Best Practices {#security-best-practices}

### Principle of Least Privilege

**Grant only necessary permissions:**
- ✅ Front desk staff: `student-create`, `guardian-create`, `contact-inquiry-list`
- ✅ Accountant: `fees-paid`, `expense-create`, `reports-expense`
- ❌ Don't give everyone `student-delete` or `exam-result-edit`

**Why this matters:**
- Reduces risk of accidental data loss
- Limits damage from compromised accounts
- Maintains data integrity

**Example:**
```
Bad:
Role: Front Desk Staff
Permissions: student-list, student-create, student-edit, student-delete, 
             fees-paid, exam-result-edit, staff-create

Good:
Role: Front Desk Staff  
Permissions: student-list, student-create, guardian-create, 
             contact-inquiry-list, holiday-list
```

### Regular Permission Audits

**Monthly Review:**
1. Go to **Settings → Roles & Permissions**
2. Review each custom role
3. Ask: "Does this role still need these permissions?"
4. Remove unnecessary permissions
5. Document changes

**When staff change positions:**
- Immediately update their role
- Don't leave old permissions "just in case"

**Checklist:**
- ✅ Review roles every 3-6 months
- ✅ Remove permissions after staff leave
- ✅ Verify new staff have correct role
- ✅ Audit who has `delete` permissions

### Protecting Sensitive Operations

**Require School Admin for:**
- ✅ Creating or deleting roles
- ✅ Changing system settings
- ✅ Accessing database backups
- ✅ Managing payment gateway settings
- ✅ Viewing all financial reports

**Limit These Permissions:**
- `student-delete`, `staff-delete` - Very few users should have this
- `exam-result-edit` - Only admin and head teacher
- `fees-config` - Only admin and accountant
- `database-backup` - Only IT staff or admin
- `payment-settings` - Only admin

### Multi-Factor Authentication (MFA)

**Enable for:**
- ✅ All School Admin users
- ✅ Accountants (handle money)
- ✅ Anyone with delete permissions
- ✅ System administrators

**How to Enable:**
- Go to user profile settings
- Enable Two-Factor Authentication
- Use app like Google Authenticator or Authy

### Password Policies

**Enforce strong passwords:**
- Minimum 8 characters
- Mix of letters, numbers, symbols
- Change every 90 days (for staff)
- No common passwords (123456, password, etc.)

**Password Management:**
- `student-reset-password` - Allow admins/teachers to reset
- `reset-password-list` - Track who requested resets
- Disable accounts of former staff immediately

### Temporary Access

**For substitute teachers or temporary staff:**
1. Create their account with appropriate role
2. Set an **end date** or reminder to disable
3. When they leave, immediately:
   - Change their password
   - Or delete their account
   - Or disable their login

**Don't:**
- ❌ Share login credentials
- ❌ Leave temp accounts active indefinitely
- ❌ Give temp staff more permissions than needed

---

## 📊 Permission Matrix by Role {#permission-matrix}

Here's a quick reference showing typical permissions by role:

| Module | School Admin | Teacher | Accountant | Front Desk | Guardian | Student |
|--------|-------------|---------|------------|------------|----------|---------|
| **Students** | List, Create, Edit, Delete | List (own classes) | List | Create, List | View own child | View self |
| **Attendance** | List | List, Create | List | — | View child | View self |
| **Assignments** | All | Create, Edit, Grade | — | — | View child | Submit |
| **Exams** | All | Create, Upload Marks | — | — | View child results | Take, View results |
| **Fees** | All | — | List, Paid, Config | — | Pay, View | View |
| **Expenses** | All | — | Create, List, Edit | — | — | — |
| **Reports** | All | Own classes | Financial | — | Child reports | Own reports |
| **Settings** | All | — | — | — | — | — |
| **Announcements** | Create, Edit, Delete | List | — | — | View | View |
| **Roles** | Manage | — | — | — | — | — |

**Legend:**
- **All** - Full CRUD (Create, Read, Update, Delete)
- **List** - View only
- **—** - No access

---

## Troubleshooting {#troubleshooting}

### "Permission Denied" Error

**Problem:** User gets "You do not have permission" message

**Solutions:**
1. **Check user's role:**
   - Go to **Staff → Staff List** → Edit user
   - Verify role assignment
2. **Check role permissions:**
   - Go to **Settings → Roles & Permissions**
   - View the role, check if required permission is enabled
3. **Permission name:**
   - Ensure exact permission is granted (e.g., `student-list` not `students-list`)
4. **Session refresh:**
   - Have user log out and back in
   - Permissions may be cached

### User Can't See Expected Feature

**Problem:** Menu item or feature not visible

**Causes:**
1. **Module disabled:**
   - Check if feature module is enabled for your school
   - Contact support if feature missing
2. **No permission:**
   - User role lacks the required `*-list` permission
3. **Feature access:**
   - Some features require subscription/package upgrade

**Solution:**
- Grant the required permission to user's role
- Or assign a different role that has access

### Changes Don't Take Effect

**Problem:** Permissions updated but user still can't access

**Solutions:**
1. **Clear cache:**
   - User should log out completely
   - Close browser
   - Log back in
2. **Check permission spelling:**
   - Must match exactly: `attendance-list` not `Attendance-List`
3. **Role assignment:**
   - Verify user actually has the edited role assigned

### Can't Delete Role

**Problem:** "Role in use" or cannot delete

**Solution:**
- Check if any users have this role assigned
- Reassign those users to a different role first
- Then try deleting again
- System roles (School Admin, Teacher, etc.) cannot be deleted

### Too Many Permissions

**Problem:** Role has too many permissions, hard to manage

**Solution:**
- **Split into multiple roles:**
  - E.g., "Accountant - Fees" and "Accountant - Expenses"
- **Remove unused permissions:**
  - Audit and clean up
- **Use default roles when possible:**
  - Don't recreate Teacher role as "My Teacher"

---

## Related Features

- **[Teacher-Subject Assignment](../guides/teacher-subject-assignment.md)** - Assign teachers to classes (controls what teachers can access)
- **[Data Import/Export](data-import-export.md#permissions)** - Required permissions for import/export
- **[School Admin Guide](../guides/school-admin.md)** - Full admin capabilities
- **[Expense Management](../guides/expense-management.md#permissions)** - Permission details for expense features

---

## Summary Checklist

**When Setting Up School:**
- ✅ Review default roles (School Admin, Teacher, Guardian, Student)
- ✅ Create custom roles for specific positions (Accountant, Front Desk, etc.)
- ✅ Assign roles to all staff members
- ✅ Test that users can access what they need
- ✅ Verify users cannot access what they shouldn't

**Monthly Maintenance:**
- ✅ Review custom roles and permissions
- ✅ Remove permissions from roles that don't need them
- ✅ Disable or delete accounts of former staff
- ✅ Check who has sensitive permissions (delete, settings, etc.)

**Security Checks:**
- ✅ Use least privilege principle
- ✅ Enable MFA for admins and accountants
- ✅ Enforce strong password policies
- ✅ Audit permission changes
- ✅ Review user access quarterly

---

Proper role and permission configuration is the foundation of a secure school management system. Take time to set it up correctly and review regularly! 🔐👥

