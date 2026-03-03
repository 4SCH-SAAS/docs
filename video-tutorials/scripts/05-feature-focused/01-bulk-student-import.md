# Video Script: Bulk Student Import

**Duration:** 6 minutes  
**Target Audience:** School Administrators, Data Managers, IT Staff  
**Learning Objectives:**
- Download and use the student import template
- Import large numbers of students efficiently
- Validate data before importing
- Handle import errors and corrections
- Verify successful imports with reports

---

## [00:00-00:20] INTRO (20 sec)

**[VISUAL]** Spreadsheet rows transforming into student profiles with smooth animations, database icons, progress indicators  
**[MUSIC]** Professional, tech-focused background music

**[VOICEOVER]:**  
"Welcome to Bulk Student Import. Instead of entering hundreds of students manually, learn how to import them in minutes using 4SCH's simple, reliable import system."

---

## [00:20-01:00] Why Bulk Import Matters (40 sec)

**[VISUAL]**
- Split screen comparison:
  - Left: Manual entry icon with clock ticking, 1 student per 5 minutes = 500 students = 42 hours
  - Right: Bulk import icon with progress bar completing instantly = 500 students = 5 minutes
- Timeline visualization showing semester start:
  - August 1st: New academic year begins
  - Manual approach: deadline would be impossible
  - Import approach: complete by August 1st morning
- Real scenarios displayed:
  - New intake: 300 JSS1 students
  - School merger: 1,200 transferred students
  - System migration: 5,000 historical records
  - Annual promotion: 2,500 students advancing grades

**[VOICEOVER]:**  
"Imagine manually entering 500 students. At five minutes per student, that's 42 hours of data entry. Prone to typos. Repetitive work. Wasted resources.

Bulk import does it in five minutes. Accurately. Reliably.

Schools use bulk import for new intakes - 300 JSS1 students admitted at once. For school mergers - transferring thousands of students. For migrations - moving from legacy systems. For annual promotions - advancing entire cohorts to new grades.

Without bulk import, these operations are nightmares. With it, they're routine administrative tasks."

**[ON-SCREEN TEXT]**
- "500 students: 42 hours manual vs 5 minutes import"
- "New Intakes • Mergers • Migrations • Promotions"
- "Accurate • Reliable • Fast"

---

## [01:00-02:00] Getting the Template (60 sec)

**[VISUAL]**
- Admin Dashboard with navigation highlighted
- Menu path: Dashboard > Administration > Data Management > Import
- Import section opens with tabs: Students, Teachers, Classes, etc.
- "Students" tab is selected
- Blue button: "Download Student Import Template" is prominent
- Click action shows Excel file downloading: "4SCH_Student_Template.xlsx"
- File opens in Excel showing column headers:
  - Required fields (marked with *):
    - First Name*
    - Last Name*
    - Email*
    - Date of Birth*
    - Gender*
    - Class/Section*
    - Enrollment Date*
    - Parent/Guardian Name*
  - Optional fields:
    - Phone Number
    - Address
    - Blood Type
    - Allergies
    - Medical Notes
    - Admission Number
    - Previous School
    - Transportation (Yes/No)
- Instructions box visible at top of spreadsheet:
  - "Fill all required fields (marked *)"
  - "Optional fields can be left blank"
  - "Date format: DD/MM/YYYY"
  - "Email must be valid"
  - "Do not modify header row"
- Example row shown with realistic data:
  - First Name: Chioma
  - Last Name: Okafor
  - Email: chioma.okafor@email.com
  - DOB: 15/05/2009
  - Gender: Female
  - Class: JSS1A
  - Parent: Mrs. Grace Okafor
  - Enrollment: 01/09/2024

**[VOICEOVER]:**  
"First, download the template. Go to Administration, then Data Management, then Import. Select Students and click 'Download Student Import Template.'

This Excel file is pre-formatted with all the columns 4SCH needs. Don't worry - you don't have to use every column. Required fields are marked with an asterisk. Optional fields can be left blank if you don't have the information yet.

Notice the instructions at the top. Dates must be in DD/MM/YYYY format. Emails must be valid. Never modify the header row - 4SCH needs it to understand what each column contains.

The template includes fields for basic information: name, email, date of birth, gender, class assignment, and parent details. It also includes optional fields for medical information, previous school history, and transportation needs.

Save this template. You'll fill it with your student data."

**[PRODUCTION NOTE]** Show clear download and template opening. Display all column headers and example data. Highlight required vs optional fields.

---

## [02:00-03:15] Preparing Your Data (75 sec)

**[VISUAL]**
- Excel spreadsheet with student data being entered:
  - Row 2: Tunde Adeyemi, tunde.adeyemi@email.com, 22/08/2009, Male, JSS1A, Mr. Femi Adeyemi
  - Row 3: Amara Nwosu, amara.nwosu@email.com, 10/03/2010, Female, JSS1A, Mrs. Nneka Nwosu
  - Row 4: Zainab Ibrahim, zainab.ibrahim@email.com, 05/12/2008, Female, JSS1B, Mr. Ahmed Ibrahim
  - Row 5: Chukwu Obi, chukwu.obi@email.com, 17/07/2009, Male, JSS1B, Mrs. Ifeoma Obi
  - Continuing for ~15 rows visible, all with complete, realistic Nigerian student data
- Screens showing common data preparation tasks:
  - Screen 1: Removing duplicate emails (red highlighting duplicates, then deleting)
  - Screen 2: Fixing date format inconsistencies (25-05-2009 → 25/05/2009)
  - Screen 3: Ensuring all required fields are filled (blank email field highlighted in red)
  - Screen 4: Removing extra spaces and special characters from names
  - Screen 5: Verifying class names match system (JSS1A, not "Class 1A" or "Form 1A")
- Data quality checklist visible:
  - ✓ All required fields filled
  - ✓ No duplicate emails
  - ✓ Dates in DD/MM/YYYY format
  - ✓ Class names match system
  - ✓ Valid email addresses
  - ✓ No extra spaces or special characters
- Save file: Ctrl+S, file saved as "Student_Import_2024.xlsx"

**[VOICEOVER]:**  
"Before importing, prepare your data carefully. Start with your student list - maybe it's from your previous system, a spreadsheet you maintain, or a form you collected.

Copy the student information into the template. Fill all required fields: first name, last name, email, date of birth, gender, class, and parent name. Optional fields can wait if you don't have the data yet.

Next, do quality checks. Remove duplicate records - if a student appears twice, delete one. Ensure all emails are unique and valid - the system won't accept fake emails. Fix date formats - they must be DD/MM/YYYY. No 2009-05-15, no 15-05-2009, only 15/05/2009.

Verify that class names match your system. If you use 'JSS1A,' don't write 'Class 1A' or 'Form 1A.' The system needs consistency.

Check for extra spaces, unnecessary characters, or inconsistent formatting. Clean data means successful imports.

When your data is clean and complete, save the file. You're ready to import."

**[ON-SCREEN TEXT]**
- "Data Preparation Checklist"
- "Required Fields ✓"
- "Valid Emails ✓"
- "Correct Date Format ✓"
- "Matching Class Names ✓"

---

## [03:15-04:30] Starting the Import (75 sec)

**[VISUAL]**
- Return to 4SCH: Administration > Data Management > Import > Students
- Import form displayed:
  - Step 1 of 4: Select File
  - Button: "Choose File" (grayed out initially)
  - User clicks button, file dialog opens
  - Navigate to desktop, select "Student_Import_2024.xlsx"
  - File name appears in form: "Student_Import_2024.xlsx (5.2 MB, 487 records)"
  - System recognizes: "Excel file detected"
- Step 1 complete, proceed to Step 2: Review & Map
  - System shows detected headers from file
  - Automatic mapping display:
    - Column A (First Name) → Student First Name ✓
    - Column B (Last Name) → Student Last Name ✓
    - Column C (Email) → Student Email ✓
    - Column D (DOB) → Date of Birth ✓
    - Column E (Gender) → Gender ✓
    - Column F (Class) → Class/Section ✓
    - Etc.
  - All mappings show green checkmarks (correct)
  - Option to modify mappings if needed (but not in this case)
  - "Next" button is now active
- Step 2 complete, proceed to Step 3: Validate Data
  - Progress indicator: "Validating... 150/487 records"
  - Validation checks running:
    - ✓ Checking required fields
    - ✓ Validating email formats
    - ✓ Verifying date formats
    - ✓ Checking class names
    - ✓ Removing duplicates
  - Validation complete: "487 records validated successfully. 0 errors. 0 warnings."
  - Green success banner: "All data is valid and ready to import"

**[VOICEOVER]:**  
"Return to 4SCH and go back to the Import section. Click 'Choose File' and select your prepared Excel file.

The system automatically detects the file format and shows you the file name and record count. 487 students ready to import.

Next, the system reviews the mapping. It automatically matches your Excel columns to 4SCH database fields. If you've used the official template, the mapping is already correct. All columns show green checkmarks.

If you used a custom format, you can adjust the mapping here. Tell the system which Excel column corresponds to which database field.

Once the mapping is correct, proceed to validation. The system thoroughly checks all 487 records. It verifies required fields aren't blank, emails are valid, dates are in the right format, and class names match your system.

Validation is the system's quality gate. Bad data doesn't get through. When validation passes, you see a green success message: all records are valid and ready to import."

**[PRODUCTION NOTE]** Show complete step-by-step flow. Include file selection, automatic header mapping, and validation process. Display validation checklist and success message.

---

## [04:30-05:20] Completing the Import (50 sec)

**[VISUAL]**
- Step 4: Confirm Import
  - Summary displayed:
    - File: Student_Import_2024.xlsx
    - Records to import: 487
    - Classes affected: JSS1A, JSS1B, JSS2A, JSS2B, JSS2C, SSS1A, SSS1B, SSS1C
    - Estimated time: < 1 minute
  - Two buttons: "Cancel" (gray) and "Import Now" (green, prominent)
  - User clicks "Import Now"
- Import in progress:
  - Large progress bar filling
  - Live counter: "Importing: 125/487 records"
  - Animated database icon
  - Status messages appearing:
    - "Processing batch 1..."
    - "Creating student records..."
    - "Assigning to classes..."
  - Progress bar continues: "250/487... 375/487... 487/487"
- Import complete:
  - Green success page displayed
  - Large checkmark icon
  - Success message: "Import Successful!"
  - Summary shown:
    - New Students Created: 487
    - Updated Records: 0
    - Errors: 0
    - Total Records Processed: 487
    - Import Duration: 42 seconds
  - Two buttons:
    - "Download Report" (blue)
    - "View Summary" (green)
- User clicks "Download Report"
  - PDF file downloaded: "Import_Report_20250216.pdf"
  - Report shows:
    - Import date and time
    - User who performed import
    - File name and size
    - Class distribution table (showing 487 students spread across classes)
    - Record details (sample of imported students)

**[VOICEOVER]:**  
"You're now on the confirmation screen. Review the summary: 487 students from various classes, ready to import. The system estimates it'll take less than a minute.

Click 'Import Now' and the system gets to work. You see real-time progress: processing records, creating student profiles, assigning to classes.

For 487 students, it takes about 40 seconds. All records created successfully. Zero errors.

The import complete screen confirms success: 487 new students created, no errors. You can download a detailed report showing exactly which students were imported, their classes, and confirmation that the process succeeded.

Your students are now in the system, ready for teaching and learning."

**[ON-SCREEN TEXT]**
- "Confirming Import..."
- "487 Records Processing"
- "Import Complete: 487 Students Created"
- "0 Errors • 42 Seconds"

---

## [05:20-06:00] Handling Errors & Best Practices (40 sec)

**[VISUAL]**
- Quick overview of error scenarios:
  - Screen 1: File with errors - validation shows "482 valid, 5 errors"
    - Error detail: Row 145 - Missing email address
    - Error detail: Row 203 - Invalid date format
    - Error detail: Rows 287, 312, 456 - Duplicate email addresses
  - Screen 2: Error download - User downloads "Import_Errors.xlsx" showing problematic rows
  - Screen 3: Fixing errors - User opens original file, corrects rows, saves as new version
  - Screen 4: Retry import - Upload corrected file, validation passes, import succeeds
- Best practices checklist displayed:
  - ✓ Always validate before importing
  - ✓ Keep backup of original data
  - ✓ Import during off-peak hours (evening/weekend)
  - ✓ Download and review import report
  - ✓ Verify students appear in correct classes
  - ✓ Cross-check a few student records manually
- Message: "Quality data = successful operations"

**[VOICEOVER]:**  
"Occasionally, data has errors. The validation catches them before they enter your system. You'll see exactly which rows have problems: missing emails, wrong date formats, duplicate entries.

Download the error report. Fix the issues in your Excel file. Re-upload and validate again. Usually, the second import succeeds.

Best practices: Always validate data before importing. Keep a backup of your original files. Import during off-hours so school operations aren't affected. After import, review the report and spot-check a few students to confirm they were imported correctly.

Quality data leads to quality operations. Take time to prepare your data well, and imports will be trouble-free."

**[ON-SCREEN TEXT]**
- "Error Handling Strategy"
- "Validate First • Fix Issues • Re-Import"
- "Quality Data = Successful Operations"

---

## [06:00] CLOSING (instant end)

**[VOICEOVER]:**  
"That's bulk student import. Fast, accurate, and reliable. Questions? Visit our support center."

---

## Production Notes

**Equipment & Settings:**
- Screen recording at 1080p minimum
- Show Excel template and 4SCH interface
- Zoom: 125-150% for spreadsheet and form readability
- Use realistic Nigerian student names and data
- Display all progress indicators

**Key Visual Elements:**
- Excel spreadsheet with realistic student data (15+ rows)
- Import wizard with step-by-step progression
- Progress bars and live counters during import
- Validation checklist with checkmarks
- Green success indicators
- Error reports with highlighted problematic rows
- Import summary with statistics
- Class distribution visualization

**Voiceover Specifications:**
- Clear, instructional tone
- Pace: 130-150 words per minute
- Emphasize data quality and efficiency
- Step-by-step, beginner-friendly language

**Timing Breakdown:**
- Introduction: 0:20
- Why Bulk Import: 0:40
- Getting Template: 1:00
- Data Preparation: 1:15
- Starting Import: 1:15
- Completing Import: 0:50
- Handling Errors: 0:40
- **Total: 6 minutes**

**Content Checklist:**
- ✓ Show template download
- ✓ Display template structure with all columns
- ✓ Demonstrate data preparation steps
- ✓ Show file selection and upload
- ✓ Display automatic header mapping
- ✓ Show validation process with checklist
- ✓ Demonstrate successful import with progress
- ✓ Show import report download
- ✓ Include error handling strategy
- ✓ Provide best practices

---

## SEO Metadata

**Title:** Bulk Student Import in 4SCH | Fast & Reliable (6 Min Tutorial)

**Meta Description:** Learn how to bulk import hundreds of students in minutes. Template download, data validation, error handling, and import verification. 6-minute tutorial for school administrators.

**Keywords:**
- Bulk student import
- Student data import
- Excel student upload
- Mass student entry
- Import template
- Data validation
- 4SCH import
- Student database

**Tags:** #BulkImport #StudentManagement #DataManagement #4SCH #Tutorial #SchoolAdmin

**Video Description:**
Master bulk student import in 4SCH:
- Download the student import template
- Prepare and validate your data
- Use the step-by-step import wizard
- Verify successful imports with reports
- Handle and correct import errors
- Follow best practices for data quality

Perfect for school administrators managing new intakes, transfers, or migrations. [Documentation and support]

