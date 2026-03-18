---
id: data-import-export
title: Data Import & Export Guide
sidebar_label: Data Import & Export
sidebar_position: 2
description: Comprehensive guide for importing and exporting data using CSV/Excel templates. Bulk upload students, staff, and exam marks efficiently.
keywords: [data import, CSV upload, bulk student import, export data, data migration, staff import, student enrollment, CSV templates, data transfer, Excel import]
---

# Data Import & Export Guide

**Roles:** School Admin, Accountant (for specific exports)

Data Import & Export features allow schools to efficiently manage large volumes of data by uploading CSV/Excel files for bulk operations and exporting data for reporting, backup, or migration purposes. This saves hours of manual data entry and enables easy data transfer between systems.

:::info Feature Access
Import/Export features require appropriate permissions. Ensure you have `student-create`, `staff-create`, or `exam-marks-create` permissions for respective import operations.
:::

---

## Overview

The system supports import and export for:

**Import Capabilities:**
1. **Student Bulk Admission** - Add multiple students at once
2. **Staff Bulk Registration** - Register multiple staff members
3. **Teacher Bulk Import** - Add teaching staff with subject assignments
4. **Exam Marks Upload** - Bulk upload offline exam results

**Export Capabilities:**
1. **Student Data Export** - Download student records with custom fields
2. **Staff Data Export** - Download staff records
3. **Teacher Data Export** - Download teacher records
4. **Exam Marks Export** - Download exam results templates
5. **Various Reports** - Export attendance, fees, results as CSV/PDF

**Key Features:**
- Excel/CSV template-based imports
- Multi-sheet templates with validation guides
- Custom form field support
- Validation before import
- Error reporting with specific row numbers
- Export with current data or blank templates

---

## 📥 Importing Data

### Student Bulk Import {#student-import}

Import multiple students at once with guardian information and custom form fields.

**Step 1: Download the Template**

1. Go to **Students → Bulk Admission** (or similar menu path)
2. Click **Download Template** or **Export Sample**
3. An Excel file will download with multiple sheets:
   - **Main Sheet For Admission** - Student and guardian data
   - **Form Field Values** - Valid options for custom dropdowns/checkboxes

**Step 2: Fill in the Template**

**Required Columns:**
- `first_name` - Student's first name
- `last_name` - Student's last name
- `mobile` - Student's mobile number (10 digits)
- `gender` - Either "male" or "female" (lowercase)
- `dob` - Date of birth (format: DD-MM-YYYY, e.g., 15-01-2010)
- `admission_date` - Date of admission (format: DD-MM-YYYY)
- `current_address` - Current residential address
- `permanent_address` - Permanent address
- `guardian_email` - Guardian's email address
- `guardian_first_name` - Guardian's first name
- `guardian_last_name` - Guardian's last name
- `guardian_gender` - Guardian's gender ("male" or "female")
- `guardian_mobile` - Guardian's mobile number

**Custom Form Fields:**
- Additional columns appear based on your school's custom form fields
- Check the **Form Field Values** sheet for dropdown/radio/checkbox options
- Required fields must be filled; optional fields can be left blank
- For dropdowns/checkboxes, use exact values from the Form Field Values sheet

**Example Row:**
```
first_name: John
last_name: Doe
mobile: 0812345678
gender: male
dob: 15-01-2010
admission_date: 01-09-2025
current_address: 123 Main St, Lagos
permanent_address: 123 Main St, Lagos
guardian_email: parent@example.com
guardian_first_name: Jane
guardian_last_name: Doe
guardian_gender: female
guardian_mobile: 0809876543
```

**Step 3: Upload the File**

1. In the **Bulk Admission** page, click **Choose File** or **Upload**
2. Select your completed Excel file
3. The system validates the file and shows a preview
4. Review any errors (highlighted rows)
5. If valid, click **Submit** or **Import**

**What Happens:**
- Student accounts are created automatically
- Guardian accounts are created and linked
- Login credentials are generated (typically email as username)
- Students can be assigned to classes separately (or in the import if supported)

:::tip Guardian Accounts
If a guardian email already exists in the system, the new student is linked to that existing guardian account. This allows one guardian to have multiple children in the school.
:::

**Common Errors:**
- **"Invalid date format"** - Use DD-MM-YYYY format (e.g., 15-01-2010, not 2010-01-15)
- **"Mobile number invalid"** - Must be 10 digits, numbers only
- **"Gender must be male or female"** - Use exact lowercase values
- **"Guardian email already exists"** - This is OK; student will be linked to existing guardian
- **"Required field missing"** - Check custom form fields marked as required

---

### Staff Bulk Import {#staff-import}

Import multiple staff members with employment details.

**Step 1: Download the Template**

1. Go to **Staff → Bulk Import** or **Staff → Import Staff**
2. Click **Download Template**
3. Excel file downloads with:
   - **Staff Registration** sheet - Main data
   - **Form Field Values** sheet - Custom field options

**Step 2: Fill in the Template**

**Required Columns:**
- `first_name` - Staff member's first name
- `last_name` - Staff member's last name
- `mobile` - Mobile number (10 digits)
- `email` - Unique email address (will be used for login)
- `dob` - Date of birth (DD-MM-YYYY)
- `salary` - Monthly salary (numbers only, e.g., 50000)
- `joining_date` - Date joined the school (DD-MM-YYYY)

**Custom Form Fields:**
- Additional columns for custom fields (e.g., qualification, department)
- Check Form Field Values sheet for valid options
- Required vs optional fields indicated in template

**Example Row:**
```
first_name: Michael
last_name: Okonkwo
mobile: 0801234567
email: michael.okonkwo@school.com
dob: 20-05-1985
salary: 75000
joining_date: 01-09-2024
```

**Step 3: Upload**

1. Click **Choose File** in the import page
2. Select your completed file
3. Review validation preview
4. Click **Import** or **Submit**

**What Happens:**
- Staff accounts created
- Login credentials generated
- Role assigned (typically "Staff" by default)
- Can assign specific permissions later

:::caution Email Uniqueness
Each staff member must have a unique email address. Duplicate emails will cause import errors.
:::

---

### Teacher Bulk Import {#teacher-import}

Similar to staff import but specifically for teaching staff.

**Process:**
1. Download template from **Staff → Teachers → Import Teachers**
2. Fill in required fields (same as staff import)
3. Upload and validate
4. Teachers are created with "Teacher" role

**After Import:**
- Assign teachers to subjects (see [Teacher-Subject Assignment Guide](../guides/teacher-subject-assignment.md))
- Set class teacher designations if needed
- Grant additional permissions if required

---

### Exam Marks Bulk Upload {#marks-import}

Upload offline exam marks for an entire class at once.

### Bulk Marks Upload (Offline Exams)

Schools can upload offline exam marks in bulk using an Excel/CSV template.

**Where you’ll find it (typical):** Exams → Offline Exams → Select Exam → Mark Entry / Bulk Upload

#### Template Columns

The exported “dummy” file includes these columns:

- `exam_marks_id` (optional)
- `student_id` (required)
- `student_name` (for reference)
- `total_marks` (required)
- `obtained_marks` (required)

#### How updates vs new uploads work

- **First-time upload (new marks):** leave `exam_marks_id` empty.
- **Updating existing marks:** download the latest dummy file and keep the `exam_marks_id` values, then re-upload.

If you try to upload new rows (empty `exam_marks_id`) for a student who already has marks for that exam + subject, the system returns an error like:

> "Marks already exist. Please download the latest Dummy file to update marks."

#### Validation rules

- `student_id` must be numeric
- `total_marks` must be numeric
- `obtained_marks` must be numeric

The system also calculates:
- pass/fail based on the timetable’s **passing marks**
- grade based on the configured grade ranges

:::note Grades required
If grade ranges are not configured, bulk upload may fail with a "Grades data does not exist" type error.
:::

:::tip Updating Existing Marks
To update marks that were already uploaded:
1. Download the latest "Dummy File" - it includes `exam_marks_id` for existing entries
2. Modify the `obtained_marks` or `total_marks` columns
3. Re-upload the file
4. The system updates existing records instead of creating duplicates
:::

---

## 📤 Exporting Data

### Student Data Export {#student-export}

Download student records with all custom fields for backup or analysis.

**How to Export:**

1. Go to **Students → Student List**
2. Apply any filters if needed (class, section, session year)
3. Click **Export** button (usually shows download or Excel icon)
4. Choose format:
   - **Excel/CSV** - For data manipulation
   - **PDF** - For printing or official records

**What's Included:**
- All student personal information
- Guardian details
- Custom form field values
- Current class/section enrollment
- Contact information

**Export Options:**
- **Blank Template** - Download template for bulk admission (no student data)
- **Current Students** - Export all enrolled students matching filters

**Use Cases:**
- **Backup** - Keep offline records of all students
- **Analysis** - Import into Excel for statistical analysis
- **Migration** - Transfer data to another system
- **Printing** - Create student directories

---

### Staff/Teacher Data Export {#staff-export}

Download staff or teacher records.

**How to Export:**

1. Go to **Staff → Staff List** or **Staff → Teachers**
2. Click **Export** or **Download Template**
3. Choose between:
   - **Blank Template** - For bulk import
   - **Current Staff** - Export existing staff records

**What's Included:**
- Staff personal information
- Employment details (salary, joining date)
- Custom form field values
- Role assignments

---

### Exam Marks Export {#marks-export}

Download exam marks for offline editing or record-keeping.

**How to Export:**

1. Go to **Exams → Offline Exams → [Select Exam]**
2. Choose the class, section, and subject
3. Click **Download Dummy File** or **Export Marks**
4. Excel file downloads with:
   - Student names and IDs
   - Current marks (if already entered)
   - `exam_marks_id` for updates
   - Total marks column

**Use Cases:**
- **Offline Entry** - Download, fill marks offline, then re-upload
- **Updates** - Download existing marks, correct errors, re-upload
- **Record Keeping** - Keep offline copies of exam results
- **Printing** - Print mark sheets for verification

---

### Report Exports {#report-exports}

Most reports in the system can be exported.

**Available Report Exports:**

**Attendance Reports:**
- Student attendance (by date range, class, student)
- Staff attendance
- Subject-wise attendance
- See [Attendance Reports Guide](../guides/attendance-reports.md)

**Fee Reports:**
- Fee collection summary
- Outstanding fees by class/student
- Payment transaction history

**Result Reports:**
- Exam results by class/student
- Subject-wise performance
- Grade distribution

**How to Export Reports:**

1. Navigate to the report page (e.g., **Reports → Attendance Reports**)
2. Apply filters (date range, class, etc.)
3. Click **Export** or **Download**
4. Choose format:
   - **CSV** - For spreadsheet analysis
   - **PDF** - For printing or archiving
   - **Excel** - For data manipulation

---

## Best Practices {#best-practices}

### Before Importing

**1. Prepare Your Data**
- ✅ Clean up data in Excel/CSV before upload
- ✅ Ensure all required fields are filled
- ✅ Use consistent date format (DD-MM-YYYY)
- ✅ Remove duplicate rows
- ✅ Verify email addresses are unique (for staff/teachers)

**2. Use the Correct Template**
- ✅ Always download the latest template from the system
- ✅ Don't add/remove columns from the template
- ✅ Don't change column names
- ✅ Check the Form Field Values sheet for dropdown options

**3. Test with Small Batch**
- ✅ Upload 5-10 records first to test
- ✅ Verify imported data is correct
- ✅ Then upload the full dataset

**4. Backup Before Import**
- ✅ Export existing data before bulk import
- ✅ This allows you to restore if something goes wrong

### Data Quality Tips

**Normalize Names:**
```
✅ Good:
Class 9
Class 10
Section A
Section B

❌ Avoid:
Class 9, Cl 9, Grade 9 (inconsistent)
Section A, Sec A, A (inconsistent)
```

**Date Formats:**
```
✅ Correct: 15-01-2010
❌ Wrong: 15/01/2010, 2010-01-15, 01-15-2010
```

**Gender Values:**
```
✅ Correct: male, female (lowercase)
❌ Wrong: Male, MALE, M, F
```

**Mobile Numbers:**
```
✅ Correct: 0812345678 (10 digits)
❌ Wrong: +234 812345678, 812345678, 0812-345-678
```

**Email Addresses:**
```
✅ Correct: john.doe@example.com
❌ Wrong: john.doe (missing domain), john@@ (invalid format)
```

### Custom Form Fields

**Understanding Field Types:**

**Text/Textarea Fields:**
- Enter any text value
- If required, cannot be left blank
- If optional, can leave blank or enter "N/A"

**Number Fields:**
- Enter numbers only (e.g., 545454)
- No letters or special characters

**Dropdown/Radio/Checkbox Fields:**
- **MUST** use exact values from Form Field Values sheet
- Case-sensitive in some systems
- Copy-paste from Form Field Values to avoid typos

**Example:**
```
Form Field Values sheet shows: "Science Stream", "Arts Stream", "Commercial Stream"

✅ Correct: Science Stream
❌ Wrong: science stream, Science, Stream Science
```

### Handling Errors

**Common Import Errors:**

**1. "Invalid date format"**
- **Problem:** Date not in DD-MM-YYYY format
- **Solution:** Reformat dates in Excel to DD-MM-YYYY (e.g., 15-01-2010)
- Use Excel formula: `=TEXT(A1,"DD-MM-YYYY")` if needed

**2. "Email already exists"**
- **Problem:** Duplicate email in staff/teacher import
- **Solution:** Each staff/teacher needs unique email
- For students, duplicate guardian email is OK (links to existing guardian)

**3. "Required field missing"**
- **Problem:** Empty cell in required column
- **Solution:** Check custom form fields; fill all required fields

**4. "Invalid value for dropdown"**
- **Problem:** Value doesn't match Form Field Values sheet options
- **Solution:** Copy exact value from Form Field Values sheet

**5. "Grades data does not exist" (Marks Import)**
- **Problem:** Grade ranges not configured
- **Solution:** Go to **Exams → Grades** and set up grade ranges first

**6. "Student ID not found" (Marks Import)**
- **Problem:** Student ID in file doesn't exist in system
- **Solution:** Verify student IDs are correct; download latest template

**7. "Marks already exist" (Marks Import)**
- **Problem:** Trying to upload new marks for student who already has marks
- **Solution:** Download latest Dummy File (includes exam_marks_id) to update

### After Import

**Verify Imported Data:**
1. ✅ Check record count matches uploaded rows
2. ✅ Spot-check several records for accuracy
3. ✅ Verify custom form field values imported correctly
4. ✅ For students, confirm guardians linked properly
5. ✅ For staff, confirm roles assigned correctly

**Follow-Up Actions:**

**After Student Import:**
- Assign students to classes/sections (if not done in import)
- Assign elective subjects
- Verify guardian accounts created
- Send welcome emails/credentials to parents

**After Staff Import:**
- Assign specific roles and permissions
- For teachers: Assign subjects (see [Teacher-Subject Assignment](../guides/teacher-subject-assignment.md))
- Set up payroll information if needed
- Send welcome emails with login credentials

**After Marks Import:**
- Verify grades calculated correctly
- Check pass/fail status
- Generate result reports
- Notify students/parents of published results

---

## Security & Privacy

### Data Export Security

**Best Practices:**
- 🔒 Exported files contain sensitive data (personal info, grades, salaries)
- 🔒 Store exported files securely (password-protected, encrypted drives)
- 🔒 Delete old exports when no longer needed
- 🔒 Don't share exports via unsecured channels (email, WhatsApp)
- 🔒 Limit export permissions to trusted admin staff only

### Import Security

**Validation:**
- ✅ System validates data before import
- ✅ Review validation preview carefully
- ✅ Don't bypass validation errors
- ✅ Incorrect data can affect grades, fees, and attendance tracking

### GDPR & Data Protection

**If subject to data protection laws:**
- 📋 Maintain import/export logs
- 📋 Document who exported what data and when
- 📋 Obtain consent before collecting student/guardian data
- 📋 Provide data export upon request (GDPR "right to access")
- 📋 Support data deletion requests (GDPR "right to erasure")

---

## Troubleshooting

### "File format not supported"

**Problem:** Upload fails with format error.

**Solutions:**
1. Ensure file is .xlsx or .csv format
2. Don't save as .xls (old Excel format)
3. If using Google Sheets, download as "Microsoft Excel (.xlsx)"
4. Don't add extra sheets beyond the template sheets

### "Too many rows"

**Problem:** Import times out or fails with large files.

**Solution:**
- Split into batches of 100-200 records
- Upload in multiple batches
- Contact support if you regularly import 500+ records at once

### "Column XYZ not found"

**Problem:** Template columns were modified.

**Solution:**
- Download fresh template
- Don't rename, add, or remove columns
- Copy your data to the fresh template

### Import Succeeds But Data Looks Wrong

**Problem:** Import completed but data appears incorrect.

**Solutions:**
1. **Check date fields** - May have imported in wrong format
2. **Check dropdown values** - May have imported as text instead of selected option
3. **Export data** to verify what was actually imported
4. If major issues, delete imported records and re-import

### Can't Find Import/Export Button

**Problem:** Import/Export features not visible.

**Solutions:**
1. Check your user role has required permissions:
   - `student-create` for student import
   - `staff-create` for staff import
   - `exam-marks-create` for marks import
2. Verify feature is enabled for your school
3. Contact admin if permissions are unclear

---

## Permissions Required {#permissions}

**For Import Operations:**
- `student-create` - Import students
- `staff-create` - Import staff/teachers
- `exam-marks-create` - Import exam marks

**For Export Operations:**
- `student-list` - Export students
- `staff-list` - Export staff
- `exam-list` - Export marks
- Various report permissions for specific exports

**For Admins:**
- Admins typically have all import/export permissions by default
- Accountants may have fee-related export permissions
- Teachers may have class-specific export permissions (attendance, marks for their classes)

---

## Related Features

- **[Teacher-Subject Assignment](../guides/teacher-subject-assignment.md)** - Assign teachers to subjects after import
- **[School Admin Guide](../guides/school-admin.md#user-management)** - Managing students and staff
- **[Offline Exams Guide](../guides/offline-exams.md)** - Complete offline exam workflow including marks upload
- **[Attendance Reports](../guides/attendance-reports.md)** - Exporting attendance data

---

## Summary Checklist

**Before Importing:**
- ✅ Download the correct template
- ✅ Fill in all required fields
- ✅ Use correct date format (DD-MM-YYYY)
- ✅ Verify dropdown values match Form Field Values sheet
- ✅ Test with small batch first
- ✅ Backup existing data

**During Import:**
- ✅ Review validation preview carefully
- ✅ Fix all errors before submitting
- ✅ Note any warnings or skipped rows

**After Import:**
- ✅ Verify record count
- ✅ Spot-check imported data
- ✅ Complete follow-up actions (class assignment, subject assignment, etc.)
- ✅ Send credentials to new users
- ✅ Delete import file from downloads folder (security)

**For Exports:**
- ✅ Apply filters before exporting if needed
- ✅ Choose appropriate format (CSV for analysis, PDF for printing)
- ✅ Store exported files securely
- ✅ Delete old exports when no longer needed

---

Data import and export features save significant time and reduce manual data entry errors. Use templates carefully, validate thoroughly, and keep backups! 📊📥📤
