---
id: teacher-guide
title: Teacher Guide
sidebar_position: 2
---

import Screenshot from '@site/src/components/Screenshot';
import Link from '@docusaurus/Link';

import TOCInline from '@theme/TOCInline';
import CardGrid from '@site/src/components/CardGrid';
import ReportsIcon from '@site/src/components/icons/Reports';
import GradesIcon from '@site/src/components/icons/Grades';
import DashboardIcon from '@site/src/components/icons/Dashboard';
import AttendanceIcon from '@site/src/components/icons/Attendance';
import MessagingIcon from '@site/src/components/icons/Messaging';

# Teacher Guide

Welcome! This guide shows you how to use 4SCH for your daily classroom activities. Whether you're marking attendance, grading assignments, or communicating with parents, you'll find step-by-step instructions here.

<TOCInline toc={[]} minHeadingLevel={2} maxHeadingLevel={3} />

{<CardGrid
  cards={[
    { to: '#teacher-dashboard', title: 'Dashboard', description: 'Your daily overview', icon: <DashboardIcon /> },
    { to: '#marking-attendance', title: 'Attendance', description: 'Mark who\'s present or absent', icon: <AttendanceIcon /> },
    { to: '#managing-assignments', title: 'Assignments', description: 'Create and grade work', icon: <GradesIcon /> },
    { to: '#entering-grades', title: 'Grades & Exams', description: 'Record test and exam scores', icon: <GradesIcon /> },
    { to: '#communicating-with-parents', title: 'Messaging', description: 'Contact parents and students', icon: <MessagingIcon /> },
    { to: '#class-reports', title: 'Reports', description: 'View class performance', icon: <ReportsIcon /> },
  ]}
/>}


## <span className="heading-icon"><DashboardIcon size={18} /></span> Your Teacher Dashboard {#teacher-dashboard}

When you log in, the first thing you see is your **Teacher Dashboard**. This is your control center for the day.

**What You'll See:**
- **Today's Classes** — Your schedule for the day with class times
- **Pending Tasks** — Attendance not yet marked, assignments to grade
- **Recent Messages** — Unread messages from parents or administrators
- **Upcoming Events** — Tests, exams, parent-teacher meetings

**Quick Actions:**
- Mark attendance for your current class
- Enter grades quickly
- Send a message to your class
- View your complete timetable

:::tip Start Your Day Right
When you arrive at school, open your dashboard and check:
1. Which classes you're teaching today
2. If you have any pending attendance to mark
3. New messages from parents or admin
:::

---

## <span className="heading-icon"><AttendanceIcon size={18} /></span> Marking Attendance {#marking-attendance}

Attendance is one of your most important daily tasks. Here's how to do it efficiently.

### Why Mark Attendance in 4SCH?

- **Parents get instant notifications** when their child is absent
- **Automatic tracking** of attendance patterns helps identify struggling students
- **No more paper registers** that get lost or damaged
- **Generates attendance reports** automatically for admin

### How to Mark Attendance

**Step 1: Go to Your Class**
1. From your dashboard, click on the class you're teaching now
2. Or go to **Classes** in the main menu and select your class

**Step 2: Select the Period** (if applicable)
- If your school uses period-based attendance, select the current period
- If using daily attendance, you'll mark once per day

**Step 3: Mark Each Student**
Click on each student's status:
- ✅ **Present** — Student is in class
- ❌ **Absent** — Student is not here
- ⏰ **Late** — Student arrived late
- 🏥 **Excused** — Student has permission to be absent (medical, family emergency)

**Step 4: Add Notes (Optional)**
If a student is absent or late, you can add a note:
- "Sick according to parent"
- "Late due to transport delay"
- "No reason given"

**Step 5: Submit Attendance**
Click **Submit** or **Save**. The attendance is now recorded and parents are notified (if enabled by your school).

### Common Attendance Questions

**Q: What if I forgot to mark attendance?**
A: You can mark attendance for previous days. Go to Classes → Attendance History → Select the date → Mark attendance.

**Q: What if I made a mistake?**
A: Click on the student again and change their status. As long as you haven't submitted, you can edit freely. After submission, contact your admin to make changes.

**Q: Do I need to mark attendance for every period?**
A: It depends on your school's policy. Some schools mark once per day, others mark every period. Check with your admin.

**Q: What if a student arrives after I've submitted attendance?**
A: Update their status from "Absent" to "Late" and add a note about when they arrived.

:::caution Common Mistake
Don't mark attendance at the end of the day from memory! Mark it during or right after class when it's fresh. This ensures accuracy and sends timely notifications to parents.
:::

---

## <span className="heading-icon"><GradesIcon size={18} /></span> Managing Assignments {#managing-assignments}

Assignments help you track student progress between major exams. Here's how to create, collect, and grade them.

### Creating an Assignment

**When to Use Assignments:**
- Homework to be submitted
- Class projects
- Essays or reports
- Group work that needs submission

**How to Create an Assignment:**

1. Go to **Assignments** → **Create New**
2. Fill in the details:
   - **Title:** "Chapter 5 Math Problems" or "History Essay: Colonial Era"
   - **Subject:** Select your subject
   - **Class:** Select the class (or section)
   - **Instructions:** Write clear instructions for students
   - **Due Date:** When should they submit?
   - **Total Points:** e.g., 20 marks, 100 points
   - **Submission Type:** File upload, text entry, or both

3. **Optional Settings:**
   - **Attach files:** Add worksheets, rubrics, or reference materials
   - **Late submission:** Allow or block late submissions
   - **Group assignment:** Let students work in groups

4. Click **Create Assignment**

**What Happens Next:**
- Students see the assignment on their dashboard
- They can download any files you attached
- They submit their work before the due date
- You get notified when submissions come in

### Viewing Submissions

1. Go to **Assignments** → Select the assignment
2. You'll see a list of students with their submission status:
   - ✅ **Submitted** — Student has turned in work
   - ⏰ **Late** — Submitted after the due date
   - ❌ **Not Submitted** — No submission yet
   - 📝 **Graded** — You've already graded this

3. Click on a student's name to view their submission

### Grading Assignments

**Step 1: Open the Submission**
Click on a student's name to see what they submitted.

**Step 2: Review Their Work**
- If it's a file, download and review it
- If it's text, read it in the system

**Step 3: Enter the Grade**
- Type the score (e.g., 15 out of 20)
- The system may show percentage automatically

**Step 4: Add Feedback** (Recommended)
Write comments to help the student improve:
- "Good work! Check your calculations in question 3."
- "Your essay structure is excellent. Work on grammar."
- "Remember to show your working for math problems."

**Step 5: Save and Publish**
- Click **Save** to save your grading
- Click **Publish** to release the grade to the student

:::tip Grading Efficiently
Grade all submissions for one question/section at a time rather than grading each student's entire work. This helps you stay consistent in your grading and saves time.
:::

### Complete Workflow: Creating and Grading an Assignment

This workflow shows you the entire process from creating an assignment to publishing grades.

#### Phase 1: Planning Your Assignment (5-10 minutes)

**Before you create the assignment in 4SCH, plan:**

1. **Learning Objective:** What should students learn or demonstrate?
   - Example: "Students will solve quadratic equations using the formula"
   - Example: "Students will write a persuasive essay with introduction, body, and conclusion"

2. **Assessment Criteria:** How will you grade it?
   - Create a simple rubric or point breakdown
   - Example: "5 points per correct answer (4 questions = 20 points)"
   - Example: "Structure (5), Content (10), Grammar (5) = 20 points total"

3. **Due Date:** When should students submit?
   - Give at least 3-7 days for homework
   - Allow 1-2 weeks for projects or essays
   - Consider: Do students need weekends? Any upcoming exams?

4. **Resources Needed:** What will students need?
   - Worksheet to download?
   - Reference materials?
   - Rubric or marking scheme?

#### Phase 2: Creating in 4SCH (5 minutes)

**Step-by-step creation:**

1. **Navigate:** Dashboard → Assignments → Create New Assignment

2. **Fill Basic Info:**
   ```
   Title: Chapter 5: Quadratic Equations Practice
   Subject: Mathematics
   Class: Form 3A
   Due Date: March 25, 2026 at 11:59 PM
   Total Points: 20
   ```

3. **Write Clear Instructions:**
   ```
   Instructions:
   Solve all 4 quadratic equations using the quadratic formula.
   Show all your working. Answers without working will receive
   half marks only.

   Submit your solutions as:
   - Handwritten work (scan or photo - must be clear)
   - Typed document (Word or PDF)

   Formula: x = [-b ± √(b²-4ac)] / 2a
   ```

4. **Attach Resources:**
   - Click "Attach Files"
   - Upload: `quadratic_equations_worksheet.pdf`
   - Upload: `worked_example.pdf` (optional)

5. **Configure Settings:**
   - ✅ Allow late submissions (but note them)
   - ✅ Email notifications to students
   - ❌ Group assignment (individual work)
   - ✅ Show points to students

6. **Review and Create:**
   - Preview how students will see it
   - Check: Title clear? Instructions complete? Due date correct?
   - Click **Create Assignment**

**✅ Assignment is now live! Students receive notification.**

#### Phase 3: Monitoring Submissions (Ongoing)

**Daily checks (2-3 minutes):**

1. Open **Assignments** → Select your assignment
2. Check the submission counter:
   - "15 of 30 submitted" means 15 students have submitted
   - Click "View Submissions"

3. **Identify who hasn't submitted:**
   - Sort by "Not Submitted"
   - 3 days before deadline: Send a reminder
   - 1 day before deadline: Follow up with students in class

**Sending a reminder:**
1. Click "Not Submitted" tab
2. Select all students (or specific ones)
3. Click "Send Reminder"
4. Message auto-sends: "Reminder: Quadratic Equations assignment due in 3 days"

#### Phase 4: Grading Submissions (15-30 minutes for 30 students)

**Efficient grading process:**

1. **Set aside focused time:**
   - Don't grade during teaching breaks
   - Allocate 30-60 minutes without interruptions
   - Grade all submissions at once for consistency

2. **Start grading:**
   - Assignments → Select assignment → View Submissions
   - Sort by "Submitted" (start with on-time submissions)

3. **For each submission:**

   **Click student name → Review work → Grade**

   **Question 1: (5 points)**
   - Correct answer with working: 5/5
   - Correct answer, no working: 2.5/5
   - Wrong answer with attempt: 1/5
   - No attempt: 0/5

   Repeat for Questions 2, 3, 4

4. **Calculate total:**
   - System auto-sums: Q1(5) + Q2(5) + Q3(4) + Q4(5) = 19/20

5. **Add feedback:**
   ```
   Excellent work, Sarah! You showed all working clearly.
   Small mistake in Q3: You used wrong sign in the formula.
   Review the example and try Q3 again.
   Overall: 95% - Outstanding!
   ```

6. **Save grade:**
   - Click "Save" (grade saved, not visible to student yet)
   - Move to next student

7. **Batch actions:**
   - Grade all Question 1s for all students first
   - Then all Question 2s, etc.
   - This ensures consistent marking

#### Phase 5: Publishing Grades (2 minutes)

**After grading all submissions:**

1. Return to assignment overview
2. Review grade distribution:
   - How many A's, B's, C's?
   - Anyone scoring unusually low? (Investigate)
   - Anyone scoring unusually high? (Verify)

3. **Publish grades:**
   - Click "Publish All Grades"
   - Confirm: "Publish 27 grades?" → Yes
   - Students and parents receive notification

**Alternative: Publish individually**
- Useful if you want to discuss low grades with students first
- Select specific students → Publish Selected

#### Phase 6: Follow-up (Ongoing)

**After publishing:**

1. **Check for patterns:**
   - Did most students struggle with Q3? Re-teach that concept
   - Everyone got Q1 perfect? Maybe too easy next time
   - Use "View Statistics" to see class average

2. **Handle late submissions:**
   - Set a policy: "Late = -10% per day" or "No marks after deadline"
   - Grade late submissions separately
   - Add note: "Late submission: -2 points"

3. **Parent inquiries:**
   - Parent asks: "Why did John get 12/20?"
   - You can show them the graded work with your feedback
   - Explain: "Missing working in 3 questions = lost points"

4. **Use results for planning:**
   - Low class average? Review the topic before moving on
   - High average? Students ready for more challenging work

#### Complete Timeline Example

**Monday (Week 1):**
- 9:00 AM: Create assignment in 4SCH
- 9:05 AM: Explain assignment to students in class
- Students have until Monday (Week 2)

**Thursday (Week 1):**
- Quick check: 8 of 30 submitted already ✓

**Friday (Week 2) - 2 days before deadline:**
- Send reminder to 22 students who haven't submitted

**Monday (Week 2) - Due date:**
- 27 of 30 submitted by 11:59 PM ✓
- 3 students didn't submit

**Tuesday (Week 2):**
- 2:00 PM - 3:00 PM: Grade all 27 submissions
- 3:00 PM: Publish grades
- 3:05 PM: Students and parents receive grades

**Wednesday (Week 2):**
- Follow up with 3 students who didn't submit
- Answer parent questions about grades
- Note: Need to re-teach quadratic formula applications

#### Time Investment Summary

| Activity | Time Required |
|----------|--------------|
| Planning the assignment | 5-10 minutes |
| Creating in 4SCH | 5 minutes |
| Monitoring submissions | 2 min/day × 7 days = 14 minutes |
| Grading 30 submissions | 30-60 minutes (1-2 min each) |
| Publishing and review | 5 minutes |
| Follow-up | 10-15 minutes |
| **TOTAL** | **~90 minutes for entire process** |

**Efficiency tips:**
- Create assignment templates for recurring tasks
- Use rubrics to speed up grading
- Grade during free periods, not after school
- Set clear expectations to reduce re-grading

### Common Assignment Mistakes to Avoid

❌ **Don't:** Create assignments with unclear instructions
✅ **Do:** Write step-by-step instructions and include examples

❌ **Don't:** Set due dates that are too soon (students need time)
✅ **Do:** Give at least 3-5 days for homework, 1-2 weeks for projects

❌ **Don't:** Forget to attach necessary files
✅ **Do:** Double-check that worksheets or reference materials are attached

❌ **Don't:** Grade without feedback
✅ **Do:** Always add at least one helpful comment per student

---

## <span className="heading-icon"><GradesIcon size={18} /></span> Entering Grades for Tests & Exams {#entering-grades}

For formal assessments like class tests, midterms, and final exams, you'll enter grades in the **Gradebook**.

### Understanding Your Gradebook

The gradebook is organized by:
- **Terms/Semesters** — Each grading period has its own gradebook
- **Subjects** — You only see subjects you teach
- **Assessments** — Tests, quizzes, exams that make up the final grade

Your school admin sets up the assessment structure. You just enter the scores.

### How to Enter Test Scores

**Step 1: Open the Gradebook**
Go to **Gradebook** or **Grades** from the main menu.

**Step 2: Select Your Class and Subject**
Choose the class and subject you want to enter grades for.

**Step 3: Select the Assessment**
Pick the specific test/exam:
- "First CA Test" (Continuous Assessment)
- "Midterm Exam"
- "Quiz 1"
- "Final Exam"

**Step 4: Enter Scores**
You'll see a table with all students' names:
- Type each student's score in the box next to their name
- The system may calculate percentages automatically
- If a student was absent, mark them as "Absent" or leave blank

**Step 5: Add Comments** (Optional)
For students who did exceptionally well or poorly, add a note:
- "Excellent performance!"
- "Needs improvement in Problem Solving"
- "Absent due to illness"

**Step 6: Save Your Work**
Click **Save Draft** to save without publishing. Students and parents won't see the grades yet.

**Step 7: Publish Grades**
When you're ready to release the results:
1. Review all scores for accuracy
2. Click **Publish** or **Release Grades**
3. Students and parents can now see the results

:::caution Before You Publish
Once grades are published, they're visible to students and parents. Always double-check your entries before publishing! If you need to make changes after publishing, contact your admin.
:::

### Bulk Grade Entry (Time-Saver!)

If you have scores written on paper, here's the fastest way to enter them:

1. Open the gradebook for the assessment
2. Click **Bulk Entry** or **Quick Entry** (if available)
3. Type scores in sequence, pressing Tab or Enter to move to the next student
4. Save when done

This is much faster than clicking on each student individually!

### What If I Make a Mistake?

**Before Publishing:**
Just change the score and save again. Easy!

**After Publishing:**
Contact your school administrator. They can either:
- Give you permission to edit published grades
- Make the correction for you

Some schools lock grades after publishing to maintain integrity.

---

## <span className="heading-calls"><MessagingIcon size={18} /></span> Communicating with Parents & Students {#communicating-with-parents}

Good communication with parents makes your job easier. 4SCH helps you reach parents instantly.

### When to Message Parents

**Good reasons to send messages:**
- Student is falling behind in class
- Upcoming exam or project deadline
- Student showed excellent improvement
- Behavioral concerns
- Class trip or special event
- Reminder about required materials

**Avoid messaging for:**
- General school announcements (admin handles this)
- Issues that need immediate attention (call instead)

### How to Send a Message

**Option 1: Message the Whole Class**

1. Go to **Messaging** → **New Message**
2. Select **Recipients:** Choose "All Parents - [Your Class Name]"
3. Write your **Subject:** "Math Test on Friday"
4. Type your **Message:** Keep it clear and concise
5. **Attach files** if needed (study guide, syllabus)
6. Click **Send**

All parents in that class receive the message instantly.

**Option 2: Message Individual Parents**

1. Go to your **Class List**
2. Click on the student's name
3. Click **Message Parent**
4. Write your message
5. Click **Send**

**Option 3: Message a Group**

If you want to message just a few parents:
1. Go to **Messaging** → **New Message**
2. Select **Recipients:** Click "Select Individually"
3. Check the boxes next to the parents you want to message
4. Write and send your message

### Writing Effective Messages

**Good Message Example:**
> **Subject:** JSS 2 Science Project Due Next Week
>
> Dear Parents,
>
> Your child has a Science project due on Friday, May 12th. They need to create a model of the solar system.
>
> Materials needed:
> - Cardboard or foam board
> - Paint or markers
> - String or wire
>
> Please help them start this weekend so they have enough time.
>
> If you have questions, reply to this message.
>
> Thank you,
> Mr. Johnson

**Why This Works:**
- Clear subject line
- Specific date
- Lists exactly what's needed
- Gives parents time to prepare
- Invites questions

**Poor Message Example:**
> "Project due soon. Get materials."

This is too vague and doesn't help parents understand what's needed.

### Responding to Parent Messages

Parents can reply to your messages. You'll receive notifications.

**Response Time Guidelines:**
- Try to reply within 24 hours during weekdays
- For urgent matters, respond same-day if possible
- Set boundaries: "I check messages after school at 4pm"

**Sample Responses:**

*Parent asks about low grade:*
> "Thank you for reaching out. I'd like to discuss this properly. Can we schedule a brief call tomorrow during my free period at 11am?"

*Parent asks for homework extension:*
> "I understand [child's name] was sick. Please submit the homework by Wednesday instead of Monday. Hope they feel better!"

:::tip Managing Parent Communication
Set clear expectations early:
- Tell parents when you check messages (e.g., "after 4pm daily")
- Encourage specific questions rather than vague concerns
- For complex issues, suggest a phone call or meeting instead of long message threads
:::

---

## <span className="heading-icon"><ReportsIcon size={18} /></span> Viewing Class Reports {#class-reports}

Reports help you understand how your class is performing and identify students who need extra help.

### Types of Reports You Can Access

**1. Class Performance Report**
- Shows average scores for each assessment
- Highlights students scoring above/below average
- Compares your class to other sections (if applicable)

**How to use it:** Identify topics where many students struggled and plan review sessions.

**2. Attendance Report**
- Shows attendance percentage for each student
- Highlights students with frequent absences
- Shows attendance trends over time

**How to use it:** Identify students at risk due to poor attendance and alert parents early.

**3. Individual Student Report**
- Shows one student's complete performance
- Includes all subjects, attendance, and behavior notes

**How to use it:** Prepare for parent-teacher meetings or when discussing a student with admin.

**4. Grade Distribution**
- Shows how many students got A's, B's, C's, etc.
- Helps you understand if your assessments are fair

**How to use it:** If everyone scored very high or very low, you might need to adjust difficulty level.

### How to Access Reports

1. Go to **Reports** in the main menu
2. Select the report type
3. Choose your class and date range
4. Click **Generate Report**
5. View online or download as PDF/Excel

### Tips for Using Reports Effectively

**Weekly Check:**
- Review attendance report every Monday
- Follow up with parents of students with absences

**After Each Test:**
- Check class performance report
- Plan review for weak areas

**Before Report Card Release:**
- Generate individual student reports
- Prepare comments for report cards

**End of Term:**
- Export full class report
- Use data for next term's planning

---

## Tips for New Teachers Using 4SCH

### Your First Week Checklist

✅ **Day 1:** Log in and explore your dashboard
✅ **Day 2:** Review your assigned classes and subjects
✅ **Day 3:** Mark attendance for the first time
✅ **Day 4:** Create your first assignment
✅ **Day 5:** Send a welcome message to all parents

### Time-Saving Habits

**1. Mark Attendance Immediately**
Don't wait until the end of the day. Mark it right after each class while it's fresh.

**2. Grade in Batches**
Set aside dedicated time to grade all submissions at once rather than one-by-one as they come in.

**3. Use Templates for Common Messages**
Create message templates for:
- "Assignment reminder"
- "Missing homework follow-up"
- "Excellent performance this week"

**4. Check Your Dashboard Every Morning**
Spend 5 minutes reviewing your day before classes start.

### Common Teacher Questions

**Q: Can students see my personal contact information?**
A: No. All communication happens through 4SCH. Your email and phone number remain private.

**Q: What if I'm teaching multiple subjects to the same class?**
A: You'll see separate gradebooks for each subject. Keep them organized by subject name.

**Q: Can I edit attendance after the term ends?**
A: Usually no. Schools lock historical data. Mark attendance accurately from the start!

**Q: What if the internet is down at school?**
A: Mark attendance on paper, then enter it into 4SCH when internet returns. Some schools have backup mobile data hotspots.

**Q: How do I handle parent complaints about grades?**
A: Stay professional. Show them the gradebook and explain your grading criteria. If needed, involve your head of department or admin.

---

## Getting Help

**Need assistance?**
- **First:** Check this documentation
- **Second:** Ask a colleague who uses 4SCH
- **Third:** Contact your school's 4SCH administrator
- **Last Resort:** Your admin can contact 4SCH support

**Found a bug or issue?**
Report it to your school admin with:
- What you were trying to do
- What happened instead
- Screenshot if possible

---

## Next Steps

Now that you know the basics, explore these advanced features:

- <Link to="/reference/roles-permissions">Understanding Permissions</Link>

Happy teaching! 📚
