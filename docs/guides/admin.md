---
id: admin-guide
title: School Admin Guide
slug: /guides/admin
sidebar_position: 1
---

import Screenshot from '@site/src/components/Screenshot';
import Link from '@docusaurus/Link';

import TOCInline from '@theme/TOCInline';
import CardGrid from '@site/src/components/CardGrid';
import DashboardIcon from '@site/src/components/icons/Dashboard';
import AcademicIcon from '@site/src/components/icons/Academic';
import AttendanceIcon from '@site/src/components/icons/Attendance';
import GradesIcon from '@site/src/components/icons/Grades';
import UsersIcon from '@site/src/components/icons/Users';
import FinanceIcon from '@site/src/components/icons/Finance';
import DataIcon from '@site/src/components/icons/Data';
import SecurityIcon from '@site/src/components/icons/Security';
import MessagingIcon from '@site/src/components/icons/Messaging';
import ReportsIcon from '@site/src/components/icons/Reports';

# School Administrator Guide

Welcome! As a school administrator, you're responsible for setting up and managing your school's 4SCH system. This guide walks you through everything from initial setup to daily management tasks.

:::tip Who Should Read This?
This guide is for school principals, directors, office managers, and anyone responsible for managing the school's system settings and operations.
:::

<TOCInline toc={[]} minHeadingLevel={2} maxHeadingLevel={3} />

<CardGrid
  cards={[
    { to: '#admin-dashboard', title: 'Dashboard', description: 'Your control center', icon: <DashboardIcon /> },
    { to: '#academic-setup', title: 'Academic Setup', description: 'Sessions, classes, subjects', icon: <AcademicIcon /> },
    { to: '#managing-users', title: 'User Management', description: 'Staff, teachers, parents', icon: <UsersIcon /> },
    { to: '#student-management', title: 'Students', description: 'Enrollment and records', icon: <UsersIcon /> },
    { to: '#fee-management', title: 'Fees & Finance', description: 'Fee structures and payments', icon: <FinanceIcon /> },
    { to: '#timetable-management', title: 'Timetables', description: 'Create class schedules', icon: <AcademicIcon /> },
    { to: '#attendance-settings', title: 'Attendance', description: 'Configure tracking', icon: <AttendanceIcon /> },
    { to: '#grading-setup', title: 'Grading', description: 'Exam types and scales', icon: <GradesIcon /> },
    { to: '#school-messaging', title: 'Messaging', description: 'Announcements and alerts', icon: <MessagingIcon /> },
    { to: '#reports-and-analytics', title: 'Reports', description: 'School-wide analytics', icon: <ReportsIcon /> },
  ]}
/>


## <span className="heading-icon"><DashboardIcon size={18} /></span> Your Admin Dashboard {#admin-dashboard}

Your Admin Dashboard is your command center. It gives you a bird's-eye view of everything happening in your school.

### What You'll See

**Key Metrics (At a Glance):**
- **Total Students** — Currently enrolled
- **Today's Attendance** — Percentage present today
- **Fee Collection** — Amount collected vs. outstanding
- **Active Staff** — Teachers and non-teaching staff
- **Pending Tasks** — Actions requiring your attention

**Recent Activity:**
- Latest student enrollments
- Recent fee payments
- New messages from parents or staff
- System alerts or notifications

**Quick Actions:**
These buttons let you perform common tasks instantly:
- ➕ **Add Student** — Enroll a new student
- ➕ **Add Staff** — Create teacher or staff account
- 📅 **Create Event** — Add school event to calendar
- 💰 **Generate Invoice** — Create fee invoice
- 📢 **Send Announcement** — Message entire school

:::tip Daily Dashboard Check
Start each day by reviewing your dashboard:
1. Check today's attendance rate
2. Review pending tasks
3. Check fee collection status
4. Read any urgent messages
:::

---

## <span className="heading-icon"><AcademicIcon size={18} /></span> Academic Setup {#academic-setup}

Before teachers and students can use the system, you need to set up your school's academic structure. Think of this as building the foundation.

### Step 1: Create Academic Sessions

An **Academic Session** is typically one school year (e.g., 2024/2025 or 2025/2026).

**How to Create a Session:**
1. Go to **Settings** → **Academic** → **Sessions**
2. Click **Create New Session**
3. Fill in:
   - **Session Name:** e.g., "2024/2025 Academic Year"
   - **Start Date:** e.g., September 1, 2024
   - **End Date:** e.g., July 31, 2025
   - **Status:** Active (set current year as active)
4. Click **Save**

:::note Multiple Sessions
You can have multiple sessions in the system:
- **Active Session** — Current school year (students attend classes)
- **Past Sessions** — For historical records
- **Future Session** — For planning next year

Only ONE session should be marked as "Active" at a time.
:::

### Step 2: Create Terms/Semesters

Most schools divide the year into terms (trimesters) or semesters.

**Common Term Structures:**

**Three Terms (Common in West Africa):**
- First Term: Sept - Dec
- Second Term: Jan - March
- Third Term: April - July

**Two Semesters:**
- First Semester: Sept - Jan
- Second Semester: Feb - June

**How to Create Terms:**
1. Go to **Sessions** → Select your session
2. Click **Add Term**
3. Fill in:
   - **Term Name:** "First Term" or "Term 1"
   - **Start Date:** September 11, 2024
   - **End Date:** December 20, 2024
4. Repeat for all terms
5. Click **Save**

:::tip
Mark the current term as **Active** so the system knows which term to use for attendance and grading.
:::

### Step 3: Add Classes/Grade Levels

Add all the classes (grade levels) your school offers.

**Examples:**
- **Primary School:** Primary 1, Primary 2, Primary 3, Primary 4, Primary 5, Primary 6
- **Junior Secondary:** JSS 1, JSS 2, JSS 3
- **Senior Secondary:** SSS 1, SSS 2, SSS 3

**How to Add Classes:**
1. Go to **Academic** → **Classes**
2. Click **Add Class**
3. Fill in:
   - **Class Name:** e.g., "JSS 2"
   - **Description:** e.g., "Junior Secondary School 2"
   - **Category:** Primary, Junior, or Senior
4. Click **Save**
5. Repeat for all your classes

### Step 4: Add Sections/Streams (If Applicable)

If you have multiple classes at the same level (e.g., JSS 2A, JSS 2B), create sections.

**Example:**
- JSS 2A (Science Stream)
- JSS 2B (Art Stream)
- JSS 2C (Commercial Stream)

**How to Add Sections:**
1. Go to **Classes** → Select a class
2. Click **Add Section**
3. Fill in:
   - **Section Name:** "A" or "Science Stream"
   - **Capacity:** Maximum students (e.g., 40)
   - **Class Teacher:** Assign a teacher (optional now, can add later)
4. Click **Save**

:::note Small Schools
If you only have one class per level (e.g., just one JSS 2 class), you don't need sections. Skip this step.
:::

### Step 5: Add Subjects

Add all subjects taught at your school.

**How to Add Subjects:**
1. Go to **Academic** → **Subjects**
2. Click **Add Subject**
3. Fill in:
   - **Subject Name:** e.g., "Mathematics"
   - **Subject Code:** e.g., "MATH" (optional, for reports)
   - **Type:** Core or Elective
   - **Description:** Brief description (optional)
4. Click **Save**
5. Repeat for all subjects

**Common Subjects:**
- Mathematics
- English Language
- Basic Science / Biology / Chemistry / Physics
- Social Studies / History / Geography
- Civic Education
- Christian Religious Studies / Islamic Religious Studies
- Physical & Health Education
- Computer Studies
- French / Other Languages
- Agricultural Science
- Home Economics
- Technical Drawing

### Step 6: Assign Subjects to Classes

Not all subjects are taught at all levels. Now specify which subjects are offered in each class.

**Example:**
- **Primary 3:** Math, English, Basic Science, Social Studies, CRS/IRS
- **JSS 2:** Math, English, Basic Science, Social Studies, CRS/IRS, Computer, French, Physical Education
- **SSS 3:** Math, English, Physics, Chemistry, Biology, Further Math (for science students)

**How to Assign Subjects:**
1. Go to **Classes** → Select a class
2. Click **Assign Subjects**
3. Check the boxes for subjects taught in that class
4. Click **Save**

:::tip
This step prevents teachers from seeing irrelevant subjects. A Primary 1 teacher won't see Chemistry in their subject list!
:::

### Step 7: Academic Setup Checklist

Before moving to the next section, confirm you've completed:

- ✅ Created the current academic session
- ✅ Created all terms for the session
- ✅ Marked the current term as "Active"
- ✅ Added all classes (grade levels)
- ✅ Added sections/streams (if applicable)
- ✅ Added all subjects
- ✅ Assigned subjects to each class

:::tip Pro Tip
If you're starting mid-year, you can still set up past terms. This is useful if you want to import historical data later.
:::

---

## <span className="heading-icon"><AttendanceIcon size={18} /></span> Attendance Settings {#attendance-settings}

Configure how attendance is tracked at your school.

### Attendance Modes

Choose how your school tracks attendance:

**Daily Attendance:**
- Mark once per day (typically at morning assembly)
- Shows whether student came to school
- Simpler for primary schools
- Faster to mark

**Period-Based Attendance:**
- Mark attendance every period/subject
- More detailed tracking
- Better for secondary schools
- Identifies students skipping specific classes

**How to Set:**
1. Go to **Settings** → **Attendance**
2. Select **Attendance Mode:** Daily or Period-Based
3. Click **Save**

:::tip Recommendation
- **Primary Schools:** Use Daily Attendance
- **Secondary Schools:** Use Period-Based if you have issues with students skipping specific classes
:::

### Late Arrival Policy

Define what counts as "late" and how to handle it.

**Settings:**
1. **Late Grace Period:** e.g., 15 minutes after school start
   - Arrival within 15 minutes = Present
   - Arrival after 15 minutes = Late
2. **Mark Late After:** Time after which students are marked late
3. **Count as Absent After:** Optional - mark as absent if very late (e.g., after 10:00 AM)

**How to Configure:**
1. Go to **Settings** → **Attendance** → **Late Policy**
2. Set grace period and cutoff times
3. Click **Save**

### Parent Notifications

Enable automatic notifications when students are absent or late.

**Notification Settings:**
1. Go to **Settings** → **Attendance** → **Notifications**
2. Enable:
   - ✅ **Notify on Absence** — Parent gets alert when student is marked absent
   - ✅ **Notify on Late Arrival** — Parent gets alert when student is late
   - ⬜ **Daily Attendance Summary** — Optional, can be too frequent
3. Choose notification method: SMS, Email, or Both
4. Click **Save**

**Sample Notification:**
> "Good morning. Your child [Name] was marked absent from school today. If this is incorrect, please contact the school office."

---

## <span className="heading-icon"><GradesIcon size={18} /></span> Grading Setup {#grading-setup}

Configure your school's grading system and exam structure.

### Step 1: Define Exam Types

Set up the types of assessments used in your school.

**Common Exam Types:**
- **Continuous Assessment (CA1)** — First test in the term
- **Continuous Assessment (CA2)** — Second test
- **Midterm Exam**
- **Final Exam**
- **Assignments/Projects**
- **Class Participation**

**How to Add Exam Types:**
1. Go to **Academic** → **Exam Types**
2. Click **Add Exam Type**
3. Fill in:
   - **Name:** e.g., "First CA Test"
   - **Short Code:** e.g., "CA1"
   - **Weightage:** Percentage of final grade (e.g., 15%)
4. Click **Save**
5. Repeat for all exam types

**Example Weightage Structure:**
- CA1: 15%
- CA2: 15%
- Midterm: 20%
- Final Exam: 50%
- **Total: 100%**

### Step 2: Set Grading Scale

Define grade boundaries for your school.

**Common Grading Scale:**

| Grade | Range | Description |
|-------|-------|-------------|
| A | 70-100% | Excellent |
| B | 60-69% | Very Good |
| C | 50-59% | Good |
| D | 40-49% | Pass |
| F | 0-39% | Fail |

**How to Configure:**
1. Go to **Settings** → **Grading** → **Grade Scale**
2. Click **Add Grade Level**
3. Fill in:
   - **Grade Letter:** A
   - **Minimum Score:** 70
   - **Maximum Score:** 100
   - **Description:** Excellent
4. Click **Save**
5. Repeat for all grades

### Step 3: Report Card Settings

Configure what appears on report cards.

**Report Card Components:**
- Student information
- Attendance summary
- Grades by subject
- Class teacher's comment
- Principal's comment
- Position in class (optional)
- Skills assessment (optional)

**How to Configure:**
1. Go to **Settings** → **Report Cards**
2. Enable/disable components
3. Upload school logo
4. Set signature positions
5. Click **Save**

---

## <span className="heading-icon"><MessagingIcon size={18} /></span> School Messaging {#school-messaging}

Send announcements and communicate with your school community.

### Sending School-Wide Announcements

**How to Send an Announcement:**
1. Go to **Messaging** → **New Announcement**
2. Fill in:
   - **Title:** e.g., "School Closure Due to Public Holiday"
   - **Message:** Write your announcement
   - **Recipients:** Select who receives it:
     - All Users
     - All Parents
     - All Teachers
     - Specific Classes
3. **Attach Files:** Optional (PDF, images)
4. **Schedule:** Send now or schedule for later
5. Click **Send**

**What Happens:**
- Recipients see announcement on their dashboard
- Email/SMS sent (if enabled)
- Announcement visible in Announcements section

### Messaging Specific Groups

**Message All Parents in a Class:**
1. Go to **Classes** → Select class
2. Click **Message Parents**
3. Write your message
4. Click **Send**

**Message All Teachers:**
1. Go to **Messaging** → **New Message**
2. Select **Recipients:** All Teachers
3. Write and send

### Emergency Alerts

For urgent matters (school closure, emergency):

1. Go to **Messaging** → **Emergency Alert**
2. Write brief, clear message
3. Select **All Users**
4. Click **Send Immediately**

**Tips for Emergency Messages:**
- Keep it short and clear
- Include specific instructions
- Send via SMS for faster delivery
- Follow up with email for details

---

## <span className="heading-icon"><ReportsIcon size={18} /></span> Reports and Analytics {#reports-and-analytics}

Access school-wide reports to monitor performance and operations.

### Types of Reports

**Academic Reports:**
- Class performance by subject
- Student grade distribution
- Subject-wise analysis
- Term comparison
- Pass/fail rates

**Attendance Reports:**
- Daily attendance summary
- Student attendance percentage
- Class attendance trends
- Chronic absenteeism report

**Financial Reports:**
- Fee collection summary
- Outstanding fees by class
- Payment history
- Revenue analysis

**Operational Reports:**
- Staff list with assignments
- Student enrollment summary
- Class capacity utilization

### Generating Reports

**How to Generate a Report:**
1. Go to **Reports**
2. Select **Report Category**
3. Select **Specific Report**
4. Choose **Filters:**
   - Date range
   - Classes
   - Terms/Sessions
5. Click **Generate Report**
6. View online, download PDF, or export to Excel

### Scheduling Reports

Set up automatic reports sent to your email.

**How to Schedule:**
1. Go to **Reports** → **Scheduled Reports**
2. Click **Create Schedule**
3. Fill in:
   - **Report Type**
   - **Frequency:** Daily, Weekly, Monthly
   - **Recipients:** Email addresses
   - **Format:** PDF or Excel
4. Click **Save**

**Use Cases:**
- Daily attendance report emailed every morning
- Weekly fee collection report
- Monthly academic performance summary

---

## Admin Best Practices

### Weekly Tasks

**Monday:**
- Review attendance for previous week
- Check fee collection status
- Read messages from parents

**Mid-Week:**
- Monitor ongoing assessments
- Follow up on outstanding issues
- Review staff attendance

**Friday:**
- Generate weekly reports
- Plan for next week
- Send weekend announcements if needed

### Monthly Tasks

- Generate and review monthly reports
- Check system performance
- Backup important data
- Review and update fee defaulters list
- Staff performance review

### Term Tasks

**Start of Term:**
- Activate new term in system
- Generate fee invoices
- Send welcome messages
- Verify student promotions

**Mid-Term:**
- Review academic progress
- Identify struggling students
- Monitor attendance patterns

**End of Term:**
- Ensure all grades are entered
- Publish report cards
- Generate term reports
- Promote students to next term/class

---

## Getting Help

**Need Training?**
Contact your 4SCH account manager to arrange training sessions for:
- New admin staff
- Teachers
- Refresher training

**Technical Issues?**
1. Check this documentation first
2. Contact 4SCH support via:
   - Email: support@4sch.com
   - Phone: [Support number]
   - In-app chat

**Have Feedback?**
We value your input! Share suggestions for improvements through the feedback form in your dashboard.

---

## Next Steps

Explore related documentation:
- <Link to="/guides/teachers">Teacher Guide</Link> — Understand what teachers see
- <Link to="/guides/parents">Parent Guide</Link> — Help parents use the system
- <Link to="/reference/roles-permissions">Roles & Permissions Reference</Link>
- <Link to="/support/faq">Frequently Asked Questions</Link>

Congratulations on setting up your school management system! 🎓

## <span className="heading-icon"><UsersIcon size={18} /></span> Managing Users (Staff & Teachers) {#managing-users}

After setting up the academic structure, you need to add your staff and teachers to the system.

### Adding Teachers and Staff

**How to Add a Staff Member:**
1. Go to **Users** → **Staff** → **Add Staff**
2. Fill in the required information:
   - **First Name** and **Last Name**
   - **Email Address** (they'll use this to log in)
   - **Phone Number**
   - **Role:** Select Teacher, Admin, Accountant, Librarian, etc.
   - **Employee ID:** Your internal staff ID (optional)
   - **Date of Joining**
3. Click **Save**

**What Happens Next:**
- The staff member receives an email with login credentials
- They can log in and change their password
- Based on their role, they'll see relevant features

### Assigning Teachers to Subjects

After adding teachers, assign them to the subjects they teach.

**How to Assign:**
1. Go to **Academic** → **Teacher Assignments**
2. Select a teacher
3. Choose:
   - **Class/Section:** Which class they teach
   - **Subject:** Which subject they teach to that class
4. Click **Add Assignment**
5. Repeat for all their classes

**Example:**
- **Mr. Okafor** teaches:
  - Mathematics to JSS 2A
  - Mathematics to JSS 2B
  - Physics to SSS 3A

### Assigning Class Teachers

Each class should have a **Class Teacher** (homeroom teacher) responsible for that class.

**How to Assign:**
1. Go to **Classes** → Select a class/section
2. Click **Edit**
3. Select **Class Teacher** from the dropdown
4. Click **Save**

**Class Teacher Responsibilities:**
- Primary contact for parents in that class
- Monitors overall performance and attendance
- Writes general comments on report cards

### User Roles Explained

Different roles have different access levels:

| Role | Access Level | Common Tasks |
|------|--------------|--------------|
| **Super Admin** | Full system access | School setup, billing, all settings |
| **School Admin** | School management | Manage staff, students, fees, reports |
| **Teacher** | Classroom management | Attendance, grading, messaging |
| **Accountant** | Finance only | Fee management, invoices, payments |
| **Librarian** | Library only | Book management, checkouts |
| **Non-Teaching Staff** | Limited access | Specific assigned functions |

### Deactivating Staff Accounts

When a staff member leaves:

1. Go to **Users** → **Staff**
2. Find the staff member
3. Click **Actions** → **Deactivate**
4. Confirm deactivation

**What Happens:**
- They can no longer log in
- Their historical data remains (for reports)
- You can reactivate them later if they return

:::caution Important
Don't delete staff accounts! Deactivate them instead. Deleting removes historical records of grades they entered and attendance they marked.
:::

---

## <span className="heading-icon"><UsersIcon size={18} /></span> Student Management {#student-management}

Now it's time to add students to the system.

### Adding Individual Students

**How to Add a Student:**
1. Go to **Students** → **Add Student**
2. Fill in **Personal Information:**
   - First Name, Last Name
   - Date of Birth
   - Gender
   - Admission Number (your school's student ID)
   - Date of Admission
3. Fill in **Class Information:**
   - Current Session
   - Class/Grade Level
   - Section (if applicable)
4. Fill in **Parent/Guardian Information:**
   - Father's Name, Phone, Email
   - Mother's Name, Phone, Email
   - Guardian's Name, Phone, Email (if different)
   - Emergency Contact
5. Fill in **Address:**
   - Home Address
   - City, State
6. **Optional Information:**
   - Blood Group
   - Medical Conditions/Allergies
   - Previous School
   - Nationality
7. Click **Save**

**What Happens Next:**
- Student is enrolled in the selected class
- Parents automatically receive login credentials via email/SMS
- Teachers can see the student in their class lists

### Adding Students in Bulk (CSV Import)

If you have many students, import them from a spreadsheet.

**Step 1: Prepare Your File**
1. Go to **Students** → **Import Students**
2. Click **Download Template**
3. Open the template in Excel
4. Fill in student information (one row per student)
5. Save as CSV

**Required Columns:**
- First Name
- Last Name
- Date of Birth
- Gender
- Admission Number
- Class
- Parent Phone Number or Email

**Step 2: Upload the File**
1. Click **Choose File** and select your CSV
2. Click **Upload**
3. The system validates the data and shows any errors
4. Fix errors in your file and re-upload
5. Click **Import** to complete

:::tip Bulk Import Tips
- Start with a small batch (10-20 students) to test
- Ensure admission numbers are unique
- Use the same class names you created earlier
- Double-check phone numbers and emails
:::

### Creating Parent Accounts

Parents need accounts to view their children's progress.

**Automatic Parent Account Creation:**
When you add a student and provide parent email/phone, the system automatically:
- Creates a parent account
- Links it to the student
- Sends login credentials

**Manual Parent Account Creation:**
1. Go to **Users** → **Parents** → **Add Parent**
2. Fill in parent details
3. Select which students to link to this parent
4. Click **Save**

**One Parent, Multiple Children:**
If a parent has multiple children at your school:
1. Create the parent account once
2. Link all their children to the same account
3. Parent sees all children when they log in

### Promoting Students to the Next Class

At the end of the academic year, promote students to the next grade.

**How to Promote Students:**
1. Go to **Students** → **Promotion**
2. Select:
   - **Current Session** and **Term**
   - **From Class:** e.g., JSS 2A
   - **To Class:** e.g., JSS 3A
3. The system lists all students in JSS 2A
4. Check students who are promoted (uncheck those repeating)
5. Click **Promote Selected Students**
6. Confirm the promotion

**What Happens:**
- Students move to the new class for the new session
- Historical records remain in the old class
- Teachers of the new class can now see these students

:::note Handling Repeating Students
For students repeating a class:
1. Don't check them during promotion
2. Manually reassign them to the same class for the new session
:::

### Managing Student Records

**Editing Student Information:**
1. Go to **Students** → Find the student
2. Click on their name
3. Click **Edit**
4. Update the information
5. Click **Save**

**Uploading Documents:**
You can attach documents to student profiles:
- Birth certificate
- Previous school report cards
- Medical records
- Passport photos
- Parent ID copies

**How to Upload:**
1. Open student profile
2. Go to **Documents** tab
3. Click **Upload Document**
4. Select file and add description
5. Click **Upload**

### Withdrawing/Transferring Students

When a student leaves your school:

1. Go to the student's profile
2. Click **Actions** → **Withdraw Student**
3. Fill in:
   - Withdrawal Date
   - Reason (Transfer, Relocation, Financial, etc.)
   - New School (if transferring)
4. Click **Confirm Withdrawal**

**What Happens:**
- Student is marked as "Withdrawn"
- They no longer appear in active class lists
- Historical records are preserved
- You can generate transfer certificates

---

## <span className="heading-icon"><FinanceIcon size={18} /></span> Fee Management {#fee-management}

Managing school fees is one of your most important responsibilities. 4SCH helps you track fees, generate invoices, and monitor payments.

### Step 1: Create Fee Categories

First, define all the types of fees your school charges.

**Common Fee Categories:**
- Tuition Fee
- Development Levy
- Library Fee
- Laboratory Fee
- Sports Fee
- Examination Fee
- Computer Fee
- Transport Fee (for students using school bus)
- Feeding Fee (for boarding schools or lunch programs)
- Uniform Fee
- PTA Levy

**How to Create Fee Categories:**
1. Go to **Finance** → **Fee Categories**
2. Click **Add Fee Category**
3. Fill in:
   - **Category Name:** e.g., "Tuition Fee"
   - **Description:** e.g., "Main academic fee for instruction"
   - **Optional/Mandatory:** Most are mandatory
4. Click **Save**
5. Repeat for all fee categories

### Step 2: Set Up Fee Structures

Different classes often have different fee amounts. Create fee structures for each class level.

**Example Fee Structure:**

| Fee Category | Primary 1-3 | Primary 4-6 | JSS 1-3 | SSS 1-3 |
|--------------|-------------|-------------|---------|---------|
| Tuition | ₦50,000 | ₦60,000 | ₦75,000 | ₦85,000 |
| Development | ₦10,000 | ₦10,000 | ₦15,000 | ₦15,000 |
| Library | ₦3,000 | ₦3,000 | ₦5,000 | ₦5,000 |
| **Total per Term** | **₦63,000** | **₦73,000** | **₦95,000** | **₦105,000** |

**How to Create a Fee Structure:**
1. Go to **Finance** → **Fee Structures**
2. Click **Create Fee Structure**
3. Fill in:
   - **Structure Name:** e.g., "2024/2025 JSS Fee Structure"
   - **Applicable Session:** Select the session
   - **Applicable Classes:** Select JSS 1, JSS 2, JSS 3
4. Add fee items:
   - Select fee category
   - Enter amount
   - Click **Add**
5. Repeat for all fee categories
6. Click **Save Structure**

### Step 3: Generate Invoices

After setting up fee structures, generate invoices for students.

**Bulk Invoice Generation:**
1. Go to **Finance** → **Generate Invoices**
2. Select:
   - **Session** and **Term**
   - **Classes** (or select all)
   - **Fee Structure** to apply
   - **Due Date** (when payment is expected)
3. Click **Generate Invoices**
4. System creates invoices for all students in selected classes

**What Happens:**
- Each student gets an invoice
- Parents can see the invoice in their portal
- Parents receive email/SMS notification about fees due

### Step 4: Recording Payments

When parents pay fees (in cash, by bank transfer, or online), record the payment.

**Recording a Cash/Bank Payment:**
1. Go to **Finance** → **Payments** → **Record Payment**
2. Search for the student
3. Select the invoice to pay
4. Enter:
   - **Amount Paid**
   - **Payment Method:** Cash, Bank Transfer, Cheque, Card
   - **Payment Date**
   - **Receipt Number** (your manual receipt)
   - **Reference Number** (bank reference if applicable)
5. Click **Record Payment**

**System Actions:**
- Marks invoice as Paid (or Partially Paid)
- Generates digital receipt
- Sends receipt to parent via email/SMS
- Updates fee collection reports

### Handling Partial Payments

Some parents pay in installments. 4SCH tracks this automatically.

**Example:**
- Total Fee: ₦95,000
- First Payment: ₦50,000 (Partial)
- Balance: ₦45,000
- Second Payment: ₦45,000 (Fully Paid)

Each partial payment is recorded separately, and the system shows the remaining balance.

### Fee Concessions and Scholarships

Some students receive discounts or scholarships.

**How to Apply a Concession:**
1. Go to the student's profile
2. Click **Finance** → **Apply Concession**
3. Fill in:
   - **Concession Type:** Scholarship, Sibling Discount, Staff Child, etc.
   - **Amount or Percentage:** e.g., 50% discount or ₦20,000 off
   - **Reason:** Brief note
   - **Valid For:** This term, this session, or permanent
4. Click **Apply**

**Result:**
- Student's invoice is automatically reduced
- Reports show concession granted
- Balance reflects the discounted amount

### Fee Reminders

Send reminders to parents with outstanding fees.

**Automatic Reminders:**
Set up automatic reminders in **Finance** → **Settings**:
- 7 days before due date
- On due date
- 3 days after due date
- Weekly thereafter until paid

**Manual Reminders:**
1. Go to **Finance** → **Outstanding Fees**
2. Select students with unpaid fees
3. Click **Send Reminder**
4. Customize message if needed
5. Click **Send**

### Payment Reports

Monitor fee collection with reports:

**Fee Collection Summary:**
- Total expected for the term
- Total collected
- Outstanding amount
- Collection percentage

**Access Reports:**
1. Go to **Reports** → **Finance**
2. Select report type
3. Choose date range
4. Click **Generate**
5. View online or download as PDF/Excel

### Online Payment Setup (Optional)

If your school accepts online payments, configure a payment gateway.

**Supported Payment Methods:**
- Paystack (Nigeria)
- Flutterwave (Multiple African countries)
- M-Pesa (Kenya)
- MTN Mobile Money (Multiple countries)
- Bank cards (Visa, Mastercard)

**How to Set Up:**
1. Go to **Settings** → **Payment Gateways**
2. Select your preferred gateway
3. Enter your API keys (provided by the payment provider)
4. Test the connection
5. Enable for parents

**Benefits:**
- Parents pay from home using cards or mobile money
- Instant payment confirmation
- Automatic receipt generation
- Reduced cash handling in school office

---

## <span className="heading-icon"><AcademicIcon size={18} /></span> Timetable Management {#timetable-management}

Create and publish class schedules for students and teachers.

### Creating a Timetable

**Step 1: Define School Timing**
1. Go to **Academic** → **Timetable Settings**
2. Set:
   - **School Start Time:** e.g., 8:00 AM
   - **Period Duration:** e.g., 40 minutes
   - **Break Times:** e.g., 10:30-11:00, 1:00-2:00
   - **School End Time:** e.g., 3:00 PM
   - **Number of Periods per Day:** e.g., 8 periods
3. Click **Save**

**Step 2: Create Timetable for a Class**
1. Go to **Timetable** → **Create Timetable**
2. Select **Class/Section** (e.g., JSS 2A)
3. For each day and period:
   - Select **Subject**
   - Select **Teacher**
   - Select **Room/Venue** (optional)
   - Click **Add**
4. Repeat for all periods in the week
5. Click **Save Timetable**

**Example Timetable (Monday for JSS 2A):**

| Time | Period | Subject | Teacher |
|------|--------|---------|---------|
| 8:00-8:40 | 1 | Assembly | All |
| 8:40-9:20 | 2 | Mathematics | Mr. Okafor |
| 9:20-10:00 | 3 | English | Mrs. Adeleke |
| 10:00-10:30 | - | Break | - |
| 10:30-11:10 | 4 | Basic Science | Mr. Eze |
| 11:10-11:50 | 5 | Social Studies | Mrs. Ibrahim |
| 11:50-12:30 | 6 | CRS | Pastor John |
| 12:30-1:10 | 7 | Physical Education | Mr. Okoro |
| 1:10-2:00 | - | Lunch | - |
| 2:00-2:40 | 8 | Computer Studies | Miss Adaeze |

### Publishing the Timetable

After creating timetables:
1. Review for conflicts (same teacher in two places)
2. Click **Publish Timetable**
3. Students and teachers can now see their schedules

**System Checks for:**
- Teacher conflicts (teaching two classes at once)
- Room conflicts (two classes in same room)
- Subject allocation (correct number of periods per subject)

### Exam Timetable

Create a separate timetable for exams.

**How to Create Exam Timetable:**
1. Go to **Exams** → **Exam Timetable**
2. Select:
   - **Exam Type:** Midterm, Final Exam
   - **Date Range:** e.g., Dec 10-15, 2024
3. For each exam:
   - **Date and Time**
   - **Subject**
   - **Duration:** e.g., 2 hours
   - **Venue**
   - **Classes Writing:** e.g., All JSS classes
4. Click **Save**
5. Click **Publish**

**Students and Parents can:**
- View complete exam schedule
- Download as PDF
- Set reminders for each exam

---

