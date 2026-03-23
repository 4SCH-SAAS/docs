---
id: offline-exams
title: Offline Exams Guide
sidebar_position: 11
description: Complete guide to traditional offline examinations in 4SCH - scheduling, timetables, mark entry, and result management for all users.
keywords: [offline exams, traditional exams, exam timetable, mark entry, exam results, grading, report cards, exam scheduling]
---

# Offline Exams Guide

import Link from '@docusaurus/Link';

Offline Exams in 4SCH manage traditional paper-based examinations - from scheduling and timetable creation to mark entry and result generation. This comprehensive guide covers all aspects of the offline exam system.

:::tip Quick Access
- 📋 **<Link to="/guides/online-exams">Online Exams Guide</Link>** - For digital MCQ-based exams
- 📊 **[Interactive Workflow Diagrams](pathname:///interactive-diagrams/offline-exam-workflows.html)** - Visual flowcharts for all roles
- 🚀 **<Link to="/guides/offline-exams-quick-reference">Quick Reference Guide</Link>** - Cheat sheet for fast access
:::

---

## Overview

### What are Offline Exams?

Offline Exams are traditional paper-based examinations that:
- **Timetable-Based** - Schedule exam dates and times for each subject
- **Manual Grading** - Teachers enter marks after evaluating answer sheets
- **Subject-wise Marks** - Track marks for each subject individually
- **Comprehensive Results** - Generate overall results with grades and percentages
- **Flexible Scheduling** - Support multiple exam periods (Mid-term, Final, Unit tests)
- **Pass/Fail Criteria** - Set passing marks for each subject
- **Grade Calculation** - Automatic grade assignment based on marks
- **Result Publishing** - Publish results to students and parents when ready

### Key Features

✅ **Exam Timetable Creation** - Schedule multiple subjects with dates and times  
✅ **Mark Entry** - Teachers enter obtained marks for each student  
✅ **Automatic Calculation** - Total marks, percentage, and grades calculated automatically  
✅ **Result Management** - Publish or unpublish results  
✅ **Subject-wise Reports** - Detailed breakdown by subject  
✅ **Pass/Fail Status** - Track per-subject and overall pass/fail  
✅ **Mobile & Web Access** - Students and parents view results anywhere  
✅ **Historical Records** - Maintain exam history across session years  

### Offline vs Online Exams

| Feature | Offline Exams | Online Exams |
|---------|---------------|--------------|
| **Format** | Paper-based | Digital (MCQ) |
| **Grading** | Manual entry by teachers | Automatic |
| **Results** | After teacher evaluation | Instant |
| **Question Types** | Any (essay, practical, MCQ) | Multiple choice only |
| **Scheduling** | Timetable with dates/times | Start/end date range |
| **Use Cases** | Major exams, essays, practicals | Quizzes, tests, assessments |

---

## For School Administrators

### Setting Up Offline Exams

Administrators have full control over the offline exam system including creation, monitoring, and result publication.

#### Initial Setup Requirements

Before creating offline exams, ensure:
1. **Academic Session** - Current session year is active
2. **Classes & Sections** - Classes are properly configured
3. **Subjects** - Subjects are assigned to classes
4. **Students** - Students are enrolled in classes
5. **Teachers** - Teachers are assigned to subjects
6. **Grading System** - Grade ranges configured (optional)

### Creating an Offline Exam

#### Step 1: Create Exam Structure

**Navigate:** Exams → Offline Exams → Create Exam

**Required Information:**
- **Exam Name** - Descriptive name (e.g., "First Term Examination 2025")
- **Class** - Select target class
- **Session Year** - Academic session (auto-selected)
- **Description** - Additional details (optional)
- **Start Date** - When exams begin
- **End Date** - When exams end
- **Publish** - Whether results are visible to students (initially set to "No")

:::tip Naming Convention
Use clear names like:
- "Mid-Term Examination - March 2025"
- "Final Examination - June 2025"
- "Unit Test 1 - Class 10"
:::

**Click Submit** to create the exam structure.

---

#### Step 2: Create Exam Timetable

After creating the exam, add subject-wise timetable:

**Navigate:** Open the exam → Create Timetable

**For Each Subject:**

1. **Subject** - Select from class subjects
2. **Date** - Exam date for this subject
3. **Start Time** - When the exam begins (e.g., 09:00 AM)
4. **End Time** - When the exam ends (e.g., 12:00 PM)
5. **Total Marks** - Maximum marks for this subject (e.g., 100)
6. **Passing Marks** - Minimum marks to pass (e.g., 35)

**Click Add** to include the subject in the timetable.

Repeat for all subjects in the exam.

:::info Example Timetable
```
Date: March 15, 2025
Subject: Mathematics
Time: 09:00 AM - 12:00 PM
Total Marks: 100
Passing Marks: 35

Date: March 17, 2025
Subject: English
Time: 09:00 AM - 11:30 AM
Total Marks: 80
Passing Marks: 28
```
:::

---

### Managing Exam Timetables

#### Viewing Timetables

1. Go to **Exams** → **Offline Exams**
2. Find the exam and click **View Timetable**
3. See complete schedule with all subjects

#### Editing Timetable Entries

1. Open the exam timetable
2. Click **Edit** on the subject you want to modify
3. Update date, time, or marks
4. Click **Save**

:::warning Timing Conflicts
The system may warn if exam times overlap. Ensure proper spacing between subjects.
:::

#### Deleting Timetable Entries

1. Open the exam timetable
2. Click **Delete** on the subject
3. Confirm deletion

**Note:** Cannot delete if marks have already been entered for that subject.

---

### Mark Entry Workflow

Once exams are conducted, marks need to be entered:

#### Option 1: Admin Enters Marks

**Navigate:** Exams → Offline Exams → Select Exam → Enter Marks

1. **Select Subject** from the timetable
2. **View Student List** for the class
3. **Enter Marks** for each student:
   - Obtained marks (out of total marks)
   - System validates marks don't exceed total
   - System calculates pass/fail based on passing marks
4. **Save Marks** for the subject

#### Option 2: Teacher Enters Marks

Teachers assigned to subjects can enter marks directly:

**Navigate:** Teacher Dashboard → Exams → Mark Entry

1. Select exam and subject
2. Enter marks for their students
3. Submit for admin review (if workflow enabled)

---

### Result Calculation

The system automatically calculates results based on entered marks.

#### Calculation Logic

**For Each Student:**

1. **Subject-wise:**
   - Obtained Marks = Entered by teacher
   - Pass/Fail = Obtained >= Passing Marks
   - Grade = Based on percentage and grade ranges

2. **Overall Result:**
   - Total Marks = Sum of all subject total marks
   - Obtained Marks = Sum of all obtained marks
   - Percentage = (Obtained / Total) × 100
   - Grade = Based on overall percentage
   - Status = Pass if all subjects passed, else Fail

#### Example Calculation

```
Student: Chukwudi Okafor
Class: 10-A

Subject         Total  Passing  Obtained  Pass/Fail
Mathematics     100    35       75        Pass
English         80     28       65        Pass
Science         100    35       80        Pass
Social Science  80     28       55        Pass

Total Marks: 360
Obtained Marks: 275
Percentage: 76.39%
Grade: A
Overall Status: Pass
```

---

### Publishing Results

Results are initially hidden from students and parents. Publish when ready:

#### To Publish Results

1. Go to **Exams** → **Offline Exams**
2. Find the exam
3. Click **Publish Results**
4. Confirm publication

**Effect:**
- Students can view their results on mobile app/web portal
- Parents can see their child's results
- Results appear in student reports

#### To Unpublish Results

If corrections are needed:

1. Find the exam
2. Click **Unpublish Results**
3. Make necessary corrections to marks
4. Republish when ready

:::caution Important
Unpublishing temporarily hides results from students/parents. Use this feature carefully and communicate with stakeholders.
:::

---

### Viewing Overall Results

**Navigate:** Exams → Exam Results

**Available Views:**

1. **By Exam** - All students' results for an exam
2. **By Class** - All exams for a class
3. **By Student** - Individual student's all exam results

**Export Options:**
- Download as Excel/CSV
- Print result sheets
- Generate report cards

---

### Best Practices for Administrators

✅ **Plan Timetable Early** - Create timetables at least 2 weeks before exams  
✅ **Check for Conflicts** - Ensure no exam time overlaps  
✅ **Set Realistic Passing Marks** - Typically 35-40% of total marks  
✅ **Double-Check Marks** - Review before publishing results  
✅ **Communicate Delays** - Inform if result publication is delayed  
✅ **Backup Data** - Export results regularly  
✅ **Archive Old Exams** - Keep historical records organized

:::tip Bulk marks upload
If your school enters marks using spreadsheets, see <Link to="/reference/data-import-export#bulk-marks-upload-offline-exams">Bulk Marks Upload</Link>.
:::  

---

## For Teachers

### Viewing Exam Timetable

As a teacher, you can view timetables for your classes.

**Navigate:** Exams → Exam Timetable

**What You See:**
- Exams for classes you teach
- Subjects you're assigned to
- Dates and times for each exam
- Total and passing marks

---

### Entering Marks

#### Prerequisites

- Exam must be created by admin
- Timetable must include your subject
- Students must be enrolled in your class
- Exam must have been conducted

#### Step-by-Step: Entering Marks

**1. Access Mark Entry**

**Navigate:** Exams → Mark Entry (or Offline Exams → Select Exam → Enter Marks)

**2. Select Exam and Subject**

- Choose the exam from dropdown
- Select your subject from timetable
- Student list appears

**3. Enter Marks for Each Student**

**For Each Student:**
- **Roll Number** - Student identification
- **Student Name** - Full name
- **Obtained Marks** - Enter marks out of total
- **Passing Status** - Auto-calculated (Pass/Fail)
- **Grade** - Auto-assigned based on marks (if enabled)
- **Teacher Review** - Optional comments

**4. Validation**

System validates:
- Marks don't exceed total marks
- Marks are non-negative numbers
- All required fields filled

**5. Save Marks**

- Click **Save** to store marks
- Confirmation message appears
- Marks are saved but not yet published to students

:::tip Quick Entry
Use Tab key to move between fields quickly. Enter marks efficiently for large classes.
:::

---

### Editing Marks

If you made an error or need to update:

1. Return to mark entry for the subject
2. Modify the marks for specific students
3. Click **Save** again

:::caution Mark entry restrictions
- If the exam is **published**, teachers cannot update marks until the admin **unpublishes** the result.
- Some schools restrict mark entry to the exam date window (between the exam start and end dates).

If you cannot edit marks, contact your school admin.
:::

**Note:** You can edit marks anytime before results are published.

---

### Viewing Results After Entry

After entering marks:

**Navigate:** Exams → View Results

**You Can See:**
- List of students with marks you entered
- Subject-wise pass/fail status
- Overall exam performance for your subject
- Class average, highest, lowest marks

---

### Best Practices for Teachers

✅ **Enter Marks Promptly** - Within 1-2 weeks of exam completion  
✅ **Double-Check Entries** - Verify marks before saving  
✅ **Note Absences** - Mark students as absent if they didn't appear  
✅ **Use Teacher Review** - Add comments for exceptional cases  
✅ **Be Fair** - Grade consistently across all students  
✅ **Communicate Issues** - Report discrepancies to admin immediately  

---

## For Students

### Viewing Exam Timetable

Students can access exam schedules to prepare effectively.

#### On Mobile App

1. Open **4SCH Student App**
2. Tap **Exams** tab at the bottom
3. Switch to **Exam Timetable** section
4. View upcoming exams

#### On Web Portal

1. Login to [ngs.4sch.com](https://ngs.4sch.com)
2. Go to **Exams** → **Exam Timetable**
3. See your exam schedule

**Information Displayed:**
- Exam name
- Subject name
- Date
- Start time - End time
- Total marks
- Passing marks

:::tip Study Planning
Use the timetable to create a study schedule. Prioritize subjects with earlier exam dates.
:::

---

### Viewing Exam Results

After the school publishes results, you can view them.

#### Downloading Result PDF (if enabled)

Some schools enable a downloadable **Result PDF** for sharing or printing.

- **Student:** Exams → Exam Results → Select exam → Download/Share Result PDF
- **Parent:** Select child → Exams → Results → Select exam → Download/Share Result PDF

:::note Report Card vs Result PDF
A **Report Card PDF** is usually term-based (all subjects + remarks). A **Result PDF** is usually exam-specific.
:::

#### On Mobile App

**Step 1: Access Results**
1. Open **4SCH Student App**
2. Tap **Exams** tab
3. Switch to **Exam Results** section

**Step 2: View Available Results**
- See list of exams with published results
- Tap on an exam to view detailed results

**Step 3: Review Your Performance**

**Overall Result View:**
- Exam name
- Total marks across all subjects
- Marks you obtained
- Percentage
- Grade
- Pass/Fail status
- Exam date

**Subject-wise Breakdown:**
- Subject name
- Total marks for subject
- Passing marks required
- Marks obtained
- Pass/Fail for that subject
- Grade (if applicable)
- Teacher review/comments (if any)

#### On Web Portal

1. Login to [ngs.4sch.com](https://ngs.4sch.com)
2. Go to **Exams** → **Exam Results**
3. Click on the exam to view details
4. See overall and subject-wise performance

---

### Understanding Your Result

#### Pass/Fail Criteria

**Subject-level:**
- **Pass** = Obtained marks ≥ Passing marks
- **Fail** = Obtained marks < Passing marks

**Overall Result:**
- **Pass** = Passed in ALL subjects
- **Fail** = Failed in ONE or more subjects

#### Grades Explained

Grades are calculated based on percentage:

**Common Grading Scale:**
- **A+** = 90-100%
- **A** = 80-89%
- **B** = 70-79%
- **C** = 60-69%
- **D** = 50-59%
- **E** = 40-49%
- **F** = Below 40% (Fail)

:::note School-Specific Grading
Your school may use a different grading scale. Check with your teacher for the exact ranges.
:::

---

### Exam Preparation Tips

✅ **Review Timetable Early** - Plan study schedule based on exam dates  
✅ **Focus on Weak Subjects** - Allocate more time to difficult subjects  
✅ **Practice Past Papers** - Ask teachers for previous years' questions  
✅ **Manage Time** - Arrive early on exam day  
✅ **Stay Calm** - Exam anxiety is normal; practice relaxation techniques  
✅ **Ask Questions** - Clarify doubts with teachers before exams  

---

## For Parents {#for-parents}

### Monitoring Your Child's Exams

Parents can track exam schedules and results through the parent portal/app.

#### Viewing Exam Schedule

**On Parent App:**
1. Open **4SCH Parent App**
2. Select your child (if multiple children)
3. Go to **Exams** section
4. Tap **Exam Timetable**

**On Parent Web Portal:**
1. Login to parent portal
2. Select child from dashboard
3. Navigate to **Exams** → **Timetable**

**What You'll See:**
- Exam name
- Subject-wise schedule
- Dates and times
- Total and passing marks for each subject

---

### Viewing Your Child's Results

After school publishes results:

**Access Results:**
1. Go to **Exams** → **Results** in parent app/portal
2. Select the exam
3. View comprehensive results

**Result Information:**
- Overall performance (total marks, percentage, grade)
- Subject-wise breakdown
- Pass/Fail status for each subject
- Overall pass/fail status
- Teacher comments (if any)

---

### Supporting Your Child

#### Before Exams

**Help with Preparation:**
- Create a quiet study environment
- Help establish a study routine
- Review timetable together
- Ensure adequate rest and nutrition
- Minimize distractions during study time

**Emotional Support:**
- Encourage without pressure
- Help manage exam anxiety
- Celebrate effort, not just results
- Be available to discuss concerns

#### After Results

**If Results Are Good:**
🎉 **Celebrate Achievement** - Acknowledge hard work  
📚 **Encourage Consistency** - Maintain study habits  
🎯 **Set New Goals** - Aim for continuous improvement  

**If Results Need Improvement:**
💙 **Stay Positive** - Avoid harsh criticism  
🔍 **Identify Weak Areas** - Review subject-wise performance  
📖 **Create Improvement Plan** - Focus on failed subjects  
👨‍🏫 **Teacher Communication** - Arrange parent-teacher meeting  
⏰ **Extra Support** - Consider tutoring if needed  

---

### Common Parent Questions

**Q: When will exam timetable be available?**  
A: Schools typically publish timetables 2-3 weeks before exams begin. Check announcements regularly.

**Q: How long after exams will results be published?**  
A: Typically 2-4 weeks, depending on number of students and subjects. Teachers need time for evaluation.

**Q: Can I see my child's answer sheets?**  
A: This depends on school policy. Contact the class teacher or principal to request.

**Q: My child failed in one subject. What happens?**  
A: Contact the class teacher to discuss remedial options. Some schools offer re-exams or supplementary exams.

**Q: Can I dispute marks?**  
A: Yes, most schools have a re-evaluation process. Contact the principal's office with your request.

---

## System Features

### Exam Status Tracking

Exams have different statuses based on dates:

**Status Indicators:**
- **Upcoming (0)** - Current date is before start date
- **Ongoing (1)** - Current date is between start and end date
- **Completed (2)** - Current date is after end date

**Mobile App Display:**
- 🔵 Blue badge = Upcoming
- 🟢 Green badge = Ongoing
- ⚪ Grey badge = Completed

---

### Grade Calculation System

#### Grade Configuration

Administrators can configure grade ranges:

**Example Configuration:**
```
A+ : 90-100%
A  : 80-89%
B  : 70-79%
C  : 60-69%
D  : 50-59%
E  : 35-49%
F  : 0-34% (Fail)
```

#### Automatic Grade Assignment

When marks are entered:
1. System calculates percentage for subject
2. Matches percentage to grade range
3. Assigns appropriate grade
4. Calculates overall grade from total percentage

---

### Data Security & Privacy

- **Student marks** are encrypted and secure
- **Access control** - Role-based permissions
- **Results privacy** - Only visible when published
- **Historical records** - Maintained across sessions
- **Backup** - Regular automated backups

---

### Academic Session Management

Exams are linked to session years:

**Benefits:**
- Track exam history across years
- Compare year-over-year performance
- Maintain historical records
- Generate multi-year reports

**Session Year Handling:**
- Each exam belongs to one session year
- Students see only current session exams by default
- Historical exams accessible in archives

---

## Troubleshooting

### For Students

#### Problem: Cannot See Exam Timetable

**Possible Causes:**
- Exam not yet created by admin
- You're not enrolled in the class
- Timetable not yet published

**Solution:**
- Check with class teacher
- Verify enrollment status
- Wait for official announcement

#### Problem: Results Not Showing

**Possible Causes:**
- Results not yet published by school
- Marks not entered for all subjects
- Technical issue with account

**Solution:**
- Check if exam is completed
- Wait for school announcement
- Contact class teacher for timeline
- If all others can see, report technical issue

---

### For Teachers

#### Problem: Cannot Enter Marks

**Possible Causes:**
- Not assigned to the subject
- Exam timetable not created
- Subject not included in timetable
- Permission issues

**Solution:**
- Verify subject assignment with admin
- Check if timetable exists for exam
- Request admin to add subject to timetable
- Contact admin for permission issues

#### Problem: Marks Not Saving

**Possible Causes:**
- Invalid marks (exceeding total)
- Network connection issue
- Session timeout
- Database error

**Solution:**
- Verify marks are within valid range
- Check internet connection
- Refresh page and try again
- Clear browser cache
- Contact IT support if persists

---

### For Administrators

#### Problem: Cannot Publish Results

**Possible Causes:**
- Marks not entered for all subjects
- Marks not entered for all students
- System validation errors

**Solution:**
- Verify all subjects have marks entered
- Check for missing student marks
- Review validation error messages
- Complete missing mark entries

#### Problem: Grade Not Calculating

**Possible Causes:**
- Grade ranges not configured
- Percentage calculation error
- Data inconsistency

**Solution:**
- Configure grade ranges in settings
- Verify marks are correctly entered
- Recalculate results
- Check for data corruption

---

## Best Practices Summary

### For School Administrators

✅ Create exams well in advance  
✅ Ensure complete timetables before printing  
✅ Set clear mark entry deadlines for teachers  
✅ Review marks before publishing  
✅ Communicate result publication dates  
✅ Maintain backup of all exam data  
✅ Archive completed exams properly  

### For Teachers

✅ Review timetable for accuracy  
✅ Enter marks promptly after evaluation  
✅ Double-check all mark entries  
✅ Add meaningful teacher reviews  
✅ Report discrepancies immediately  
✅ Be available for result queries  

### For Students

✅ Note exam dates and times early  
✅ Create and follow study schedule  
✅ Arrive on time for exams  
✅ Review results carefully  
✅ Identify areas for improvement  
✅ Seek help when needed  

### For Parents

✅ Monitor exam schedule  
✅ Support child's preparation  
✅ Review results constructively  
✅ Communicate with teachers  
✅ Encourage without pressure  
✅ Celebrate efforts and improvements  

---

## Getting Help

### Having Issues with Offline Exams?

**Students:**
- Contact your class teacher first
- Check the <Link to="/support/faq">FAQ</Link>
- Email school admin

**Teachers:**
- Refer to <Link to="/support/troubleshooting">Troubleshooting Guide</Link>
- Contact school IT administrator
- Reach out to 4SCH support

**Parents:**
- Contact your child's class teacher
- Email school administration
- Check the <Link to="/guides/parent-guide">Parent Guide</Link>

**Administrators:**
- Check system logs
- Review <Link to="/guides/school-admin">Admin Guide</Link>
- Contact 4SCH technical support

---

## Next Steps

**For Administrators:**
- <Link to="/guides/school-admin">School Admin Guide</Link>
- <Link to="/reference/data-import-export">Data Import/Export</Link>

**For Teachers:**
- <Link to="/guides/teacher-guide">Teacher Guide</Link>
- <Link to="/guides/online-exams">Online Exams</Link>

**For Students:**
- <Link to="/guides/student-guide">Student Guide</Link>
- <Link to="/support/faq">Frequently Asked Questions</Link>

**For Parents:**
- <Link to="/guides/parent-guide">Parent Guide</Link>
- <Link to="/support/contact-support">Contact Support</Link>

---

*Offline exams are the foundation of academic assessment. Use this system effectively to streamline examination management and provide timely feedback to students!* 📝✨
