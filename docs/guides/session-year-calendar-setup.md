---
id: session-year-calendar-setup
title: Session Year & Academic Calendar Setup
sidebar_label: Session Year Setup
description: Complete guide for creating and managing session years, setting up academic calendars, configuring semesters/terms, and planning the academic cycle.
keywords: [session year, academic calendar, academic year, semester setup, term setup, school calendar, academic planning, session management, year transition, student promotion]
---

# Session Year & Academic Calendar Setup

**Role:** School Admin

The Session Year (also called Academic Year) is the foundation of your school's data organization. Every student enrollment, exam, fee record, and attendance entry is tied to a specific session year. Proper setup is critical for smooth school operations.

:::info What is a Session Year?
A **Session Year** represents one complete academic cycle, typically running from one enrollment period to the next (e.g., "2025-2026" running from April 2025 to March 2026, or September 2025 to August 2026, depending on your school's calendar).
:::

---

## Overview

**Session Year includes:**
- Start and end dates defining the academic period
- Optional semester/term subdivisions
- Fee installment schedules
- Default session designation (which year is currently active)
- Holiday calendar and academic events

**Why Session Years Matter:**
- **Data Organization** - All academic records are separated by session year
- **Fee Management** - Each session has its own fee structure and collection tracking
- **Student Progression** - Students are promoted from one year to the next at session end
- **Reporting** - Generate year-over-year comparisons and historical reports
- **Archiving** - Old session data remains accessible but separate from current operations

---

## 📅 Creating a New Session Year {#creating-session-year}

### Step 1: Access Session Year Management

1. Log in as **School Admin**
2. Go to **Academics → Session Years** (or **Settings → Session Years**)
3. You'll see a list of existing session years (if any)

### Step 2: Add New Session Year

1. Click **Add Session Year** or **Create New**
2. Fill in the required fields:

**Required Fields:**
- **Name** *(required)* - Display name for the session (e.g., "2025-2026", "Academic Year 2025-26")
- **Start Date** *(required)* - First day of the academic session (format: DD-MM-YYYY)
- **End Date** *(required)* - Last day of the academic session (format: DD-MM-YYYY)

**Fee-Related Fields:**
- **Include Fee Installments** - Enable if you want to split fees into installments
- **Fee Due Date** - Default date when fees are due (optional, can be set per installment)
- **Fee Due Charges** - Late fee percentage or amount (optional)

3. Click **Submit** or **Save**

**Example:**
```
Name: 2025-2026
Start Date: 01-04-2025 (April 1, 2025)
End Date: 31-03-2026 (March 31, 2026)
Include Fee Installments: Yes
```

:::tip Naming Convention
Use a consistent naming format:
- "2025-2026" (most common, clear start-end years)
- "AY 2025-26" (Academic Year abbreviation)
- "Session 2025-2026"
Avoid: "2025", "Next Year", "Current Session" (not descriptive enough)
:::

### Step 3: Set as Default (Active) Session

After creating the session year:
1. In the session year list, find your newly created session
2. Click **Set as Default** or toggle the **Default** switch
3. The default session becomes the active session for all current operations

**What "Default" Means:**
- New student admissions go into this session
- Fee collection defaults to this session
- Attendance marking defaults to this session
- Dashboard shows data for this session
- Only ONE session can be default at a time

:::caution One Default Session
You must have exactly one default session at all times. When you set a new session as default, the previous default is automatically unmarked.
:::

---

## 📆 Configuring Semesters/Terms {#configuring-semesters}

If your school divides the academic year into semesters or terms, configure them after creating the session year.

### When to Use Semesters

**Use Semesters/Terms if:**
- You conduct exams twice a year (mid-year and final)
- You teach different subjects in different halves of the year
- Fee payment is split into term-based installments
- You issue report cards per semester

**Don't Use Semesters if:**
- Your school runs continuous assessment without distinct terms
- Exams are conducted monthly or quarterly (use regular exams instead)

### Creating Semesters

**Step 1: Access Semester Management**
1. Go to **Academics → Semesters** (or **Academics → Session Years → [Select Session] → Semesters**)

**Step 2: Add Semester**
1. Click **Add Semester**
2. Fill in details:
   - **Name** - e.g., "Semester 1", "First Term", "Fall Semester"
   - **Start Date** - First day of this semester (must be within session year dates)
   - **End Date** - Last day of this semester
   - **Session Year** - Select the session year this semester belongs to
3. Click **Submit**

**Step 3: Repeat for Additional Semesters**
- Most schools have 2 semesters or 3 terms
- Ensure no date gaps or overlaps between semesters

**Example: Two-Semester System**
```
Session Year: 2025-2026 (April 1, 2025 - March 31, 2026)

Semester 1:
Name: Semester 1
Start: 01-04-2025
End: 30-09-2025

Semester 2:
Name: Semester 2
Start: 01-10-2025
End: 31-03-2026
```

**Example: Three-Term System**
```
Session Year: 2025-2026 (September 1, 2025 - June 30, 2026)

Term 1:
Name: Autumn Term
Start: 01-09-2025
End: 20-12-2025

Term 2:
Name: Spring Term
Start: 06-01-2026
End: 28-03-2026

Term 3:
Name: Summer Term
Start: 14-04-2026
End: 30-06-2026
```

:::tip Semester Dates
- Leave small gaps between semesters for holidays/breaks
- Align semester end dates with exam periods
- Consider holidays when setting dates
:::

---

## 🔄 Copying Configuration from Previous Year {#copying-configuration}

When starting a new session year, you often want to copy settings from the previous year to save time.

### What Can Be Copied

**Typically Copied:**
- Fee structure (fee types and amounts)
- Class structure (classes, sections, streams)
- Subject assignments to classes
- Holiday calendar (recurring holidays)

**Not Automatically Copied:**
- Student enrollments (students need to be promoted)
- Teacher assignments (may need updates for new subjects)
- Exam schedules (unique each year)

### Manual Copying Workflow

Since automatic copying may not be available, follow this workflow:

**Step 1: Create New Session Year**
- Create the new session year as described above

**Step 2: Copy Fee Structure**
1. Go to **Fees → Fee Types**
2. Note existing fee types and amounts
3. For the new session year, assign same fee types to classes
4. Adjust amounts if fees increased

**Step 3: Verify Class Structure**
1. Go to **Academics → Classes**
2. Classes persist across session years (no action needed)
3. Verify sections still match your needs

**Step 4: Re-Assign Subjects (if needed)**
1. Go to **Academics → Class Subject**
2. Check if subjects are session-year specific
3. Add subjects for new session if required

**Step 5: Copy Holiday Calendar**
1. Go to **Academics → Holidays**
2. Create holidays for the new session year
3. Copy recurring holidays (national holidays, school-specific holidays)

**Step 6: Plan Timetable**
1. Review previous year's timetable
2. Create new timetable for current session (if timetables are session-specific)

:::tip Planning Checklist
Before the new session starts, have a checklist:
- ✅ New session year created
- ✅ Fee structure configured
- ✅ Holidays added
- ✅ Classes and sections verified
- ✅ Timetable prepared
- ✅ Teachers re-assigned to subjects (if needed)
:::

---

## 🏫 Archiving Old Session Years {#archiving-session-years}

Old session years remain in the system for historical reference but should be "archived" to avoid confusion.

### What Happens to Old Sessions

**Old session years:**
- Remain in the database (not deleted)
- Can be viewed by filtering/selecting that session
- Are no longer editable (soft-locked)
- Don't appear in default dropdowns

### How to Archive

**Soft Archive (Recommended):**
1. Simply set a new session as default
2. The old session automatically becomes non-default
3. Users won't see it in current operations but can access via filters

**Hard Archive (if supported):**
1. Go to **Academics → Session Years**
2. Find the old session
3. Click **Archive** or **Delete**
4. Confirm archiving

:::warning Don't Delete Session Years
Deleting a session year removes ALL associated data (students, fees, exams, results). Only delete if you're absolutely certain you don't need the data. Most schools should use soft archiving instead.
:::

### Accessing Archived Session Data

**To view old session year data:**
1. Go to the report or feature (e.g., Fee Collection, Exam Results)
2. Look for **Session Year** filter/dropdown
3. Select the archived session year
4. Data from that year will display

**Common Use Cases:**
- Viewing old student results for transcripts
- Generating historical reports for audits
- Comparing year-over-year performance
- Verifying old fee payment records

---

## 💰 Impact on Fees, Exams, and Results {#impact-on-modules}

Session years affect multiple modules. Understanding these impacts helps avoid errors.

### Fees

**Per Session Year:**
- Each session has its own fee structure
- Fee types may have different amounts per year
- Fee collection tracked separately per session
- Outstanding fees carry forward (or don't, based on configuration)

**Fee Installments:**
- Configured per session year
- Can have different installment schedules each year
- Due dates typically within the session year dates

**Example:**
```
Session 2024-2025:
Tuition Fee: ₦50,000
Library Fee: ₦5,000

Session 2025-2026:
Tuition Fee: ₦55,000 (increased)
Library Fee: ₦5,000 (same)
```

**Action Required:**
- Set up fee structure for new session year before admissions start
- Configure installments if applicable
- Communicate fee changes to parents

---

### Exams & Results

**Exam Scheduling:**
- Exams are tied to a specific session year
- You can schedule multiple exams per session (mid-term, final, etc.)
- If using semesters, exams can be semester-specific

**Results:**
- Results are stored per session year
- Historical results remain accessible
- Report cards generated per session

**Example:**
```
Session 2025-2026:
- Mid-Term Exam (Semester 1): October 2025
- Final Exam (Semester 2): March 2026

Session 2026-2027:
- Mid-Term Exam (Semester 1): October 2026
- Final Exam (Semester 2): March 2027
```

---

### Attendance

**Attendance Tracking:**
- Attendance marked within a session year
- Attendance percentages calculated per session
- Can filter attendance reports by session year

**Impact:**
- When session changes, attendance percentage resets for new session
- Old attendance data remains for historical reports

---

### Student Enrollment & Promotion

**New Enrollments:**
- Students admitted into the default (active) session year
- Students assigned to a class within that session

**Promotion Workflow:**
- At end of session year, promote students to next class
- Promotion creates new enrollment in new session year
- Old enrollment remains for historical records

**Example:**
```
Session 2024-2025:
- Student A enrolled in Class 9

End of Session → Promote Students

Session 2025-2026:
- Student A promoted to Class 10
- Enrollment record: Class 10, Session 2025-2026
```

:::tip Promotion Planning
Plan student promotion 2-3 weeks before the session ends. This ensures new session enrollments are ready when the new year starts.
:::

---

## 📋 Best Practices {#best-practices}

### Session Year Planning

**Before Session Starts:**
1. ✅ Create new session year 2-3 months in advance
2. ✅ Configure fee structure
3. ✅ Set up holiday calendar
4. ✅ Prepare timetable
5. ✅ Test with a few sample students

**During Session:**
1. ✅ Monitor attendance and fee collection
2. ✅ Conduct exams as per schedule
3. ✅ Update holiday calendar if needed (unplanned holidays)

**End of Session:**
1. ✅ Finalize all exam results
2. ✅ Generate report cards
3. ✅ Promote students to next class
4. ✅ Archive session year
5. ✅ Set new session as default

---

### Naming Consistency

**Be Consistent:**
- Always use the same format (e.g., "YYYY-YYYY")
- Don't mix "2025-26" and "2025-2026"
- Use full years for clarity

**Good Examples:**
- ✅ "2025-2026"
- ✅ "Academic Year 2025-2026"
- ✅ "AY 2025-26" (if abbreviation is standard)

**Avoid:**
- ❌ "2025" (doesn't show end year)
- ❌ "Next Session" (vague, time-dependent)
- ❌ "Current Year" (will become outdated)

---

### Date Selection

**Align with School Operations:**
- Start date should match when students physically start classes
- End date should be after final exams and result publication
- Consider holidays and breaks when setting dates

**Common Patterns:**
- **April-March:** Common in India and some African countries
- **September-August:** Common in Nigeria, UK, US
- **January-December:** Some international schools

**Example:**
```
For Nigerian secondary schools:
Start: September (when students resume)
End: July/August (after final exams)

Session 2025-2026:
Start: 08-09-2025 (second Monday of September)
End: 31-07-2026 (end of July after exams)
```

---

### Fee Installment Planning

**If Using Installments:**
- Decide how many installments (2, 3, or 4 per session)
- Set reasonable due dates spread across the session
- Communicate installment schedule to parents early

**Example: 3 Installments**
```
Session 2025-2026 (April-March)
Total Fee: ₦90,000

Installment 1: ₦30,000 - Due: May 15, 2025
Installment 2: ₦30,000 - Due: September 15, 2025
Installment 3: ₦30,000 - Due: January 15, 2026
```

---

## 🔧 Troubleshooting {#troubleshooting}

### Cannot Create Session Year

**Problem:** Error when creating new session year

**Possible Causes & Solutions:**
1. **Overlapping dates** - New session dates overlap with existing session
   - **Solution:** Ensure start/end dates don't conflict with another session
2. **Invalid date format** - Date entered incorrectly
   - **Solution:** Use DD-MM-YYYY format (e.g., 01-04-2025)
3. **End date before start date** - Logical error
   - **Solution:** Verify end date is after start date
4. **Duplicate name** - Session year with same name exists
   - **Solution:** Use unique name for each session

---

### Session Year Not Showing in Dropdown

**Problem:** Newly created session doesn't appear in filter dropdowns

**Solutions:**
1. **Refresh the page** - Browser cache may be outdated
2. **Set as default** - Non-default sessions may not show in some dropdowns
3. **Check dates** - Ensure dates are valid and session is not soft-deleted
4. **Verify creation** - Go to Session Years list and confirm it exists

---

### Cannot Delete Session Year

**Problem:** "Session year in use" or cannot delete

**Cause:**
- Session has associated data (students, fees, exams)
- System prevents deletion to protect data integrity

**Solution:**
- Don't delete active or recent sessions
- Archive instead (set as non-default)
- Only delete test sessions with no real data

---

### Fees Not Showing for Session

**Problem:** Fee structure doesn't appear for new session year

**Solution:**
1. Go to **Fees → Fee Configuration**
2. Select the new session year
3. Assign fee types to classes for this session
4. Set fee amounts
5. Verify fee structure is configured per session

---

### Students Not in New Session

**Problem:** After creating new session, students don't appear

**Cause:**
- Students are enrolled in old session year, not new one
- Need to promote students to new session

**Solution:**
1. Use **Student Promotion** feature
2. Select students from old session (e.g., Class 9, Session 2024-2025)
3. Promote to new class and new session (e.g., Class 10, Session 2025-2026)
4. This creates new enrollment records

:::tip
See the [School Admin Guide](school-admin.md#student-management) for detailed student promotion workflows.
:::

---

### Semesters Not Appearing

**Problem:** Created semesters don't show in exam or subject assignment

**Solutions:**
1. **Verify semester dates** - Must be within session year dates
2. **Check session year selection** - Ensure correct session is selected
3. **Semester assignment** - Some features require explicitly selecting semester
4. **Refresh data** - Clear cache or re-login

---

## 🔗 Related Features

- **[Admin Dashboard](admin-dashboard-analytics.md#session-year-filter)** - Session year filtering on dashboard
- **[Expense Management](expense-management.md#session-year-management)** - Expense tracking per session
- **[School Admin Guide](school-admin.md#academic-management)** - Overall academic structure setup
- **[Offline Exams](offline-exams.md)** - Scheduling exams within sessions

---

## Summary Checklist

**Creating New Session Year:**
- ✅ Choose appropriate start and end dates
- ✅ Use consistent naming convention
- ✅ Configure fee installments if applicable
- ✅ Create semesters/terms if your school uses them
- ✅ Set as default when ready to go live

**Session Transition (End of Year):**
- ✅ Finalize all data for old session (results, fees)
- ✅ Create new session year 2-3 months in advance
- ✅ Copy fee structure and holiday calendar
- ✅ Promote students to new session
- ✅ Set new session as default
- ✅ Archive old session for historical access

**Ongoing Maintenance:**
- ✅ Monitor active session throughout the year
- ✅ Ensure all data entry uses correct session
- ✅ Update holidays as needed
- ✅ Plan next session well in advance

---

Session year setup is the backbone of your school's data organization. Take time to plan it carefully, and your academic operations will run smoothly all year long! 📅🏫✨
