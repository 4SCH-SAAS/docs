---
id: online-exams
title: Online Exams Guide
sidebar_position: 8
description: Complete guide to online examinations in 4SCH - creating, taking, and managing online exams for teachers, students, and administrators.
keywords: [online exams, digital exams, exam management, student assessment, auto-grading, exam key, timed exams, MCQ exams, online testing]
---

# Online Exams Guide

import Link from '@docusaurus/Link';

Online Exams in 4SCH allow teachers and administrators to create, conduct, and grade digital examinations with automatic grading for multiple-choice questions. This comprehensive guide covers all aspects of the online exam system.

:::tip Quick Access
- 📊 **[Interactive Workflow Diagrams](https://docs.4sch.com/interactive-diagrams/online-exam-workflows.html)** - Visual flowcharts for all user roles
- 📋 **<Link to="/guides/online-exams-quick-reference">Quick Reference Guide</Link>** - Cheat sheet for fast access
:::

---

## Overview

### What are Online Exams?

Online Exams are digital assessments that:
- **Multiple Choice Questions (MCQ)** - Support single and multiple correct answers
- **Auto-Grading** - Automatic marking and instant results
- **Timed Exams** - Set duration limits for exam completion
- **Secure Access** - Protected with exam keys to prevent unauthorized access
- **Flexible Scheduling** - Set start and end dates/times
- **Multi-Class Support** - Link exams to multiple classes/sections
- **Question Bank** - Reuse questions across different exams
- **Real-time Monitoring** - Track student participation and completion

### Key Features

✅ **Question Bank Management** - Build reusable question libraries  
✅ **Random Question Assignment** - Auto-select questions by difficulty  
✅ **Image Support** - Add images to questions  
✅ **Bulk Import** - Import questions from Excel  
✅ **Instant Results** - Students see scores immediately after submission  
✅ **Detailed Reports** - View student performance and analytics  
✅ **Mobile & Web Access** - Take exams on any device  
✅ **One-Time Attempt** - Prevent multiple submissions  

---

## For School Administrators

### Setting Up Online Exams

Administrators have full control over the online exam system including creation, monitoring, and management.

#### Initial Setup Requirements

Before creating online exams, ensure:
1. **Academic Session** - Current session year is active
2. **Classes & Sections** - Classes are properly configured
3. **Subjects** - Subjects are assigned to classes
4. **Students** - Students are enrolled in classes
5. **Teachers** - Teachers are assigned to subjects (optional)

### Creating an Online Exam

**Step 1: Navigate to Online Exams**
1. Go to **Exams** → **Online Exams** from the main menu
2. Click **Create Online Exam** button

![Admin creating an online exam - Navigation](pathname:///img/screens/online-exams/admin-create-exam-nav.svg)

**Step 2: Fill Exam Details**

![Exam creation form](pathname:///img/screens/online-exams/exam-creation-form.svg)

Required Information:
- **Exam Title** - Descriptive name (e.g., "Mathematics Mid-Term")
- **Class** - Select target class
- **Section(s)** - Choose one or multiple sections
- **Subject** - Select subject for the exam
- **Session Year** - Academic session (auto-selected)
- **Start Date & Time** - When students can begin
- **End Date & Time** - Deadline for completion
- **Duration** - Time limit in minutes
- **Exam Key** - 6-digit numeric code for security

:::tip Exam Key Security
The exam key is a security feature that students must enter before accessing exam questions. Share this key only at exam time via announcement or classroom instruction.
:::

**Step 3: Configure Exam Settings**

Click **Submit** to create the exam structure.

**Step 4: Add Questions to the Exam**

After creating the exam, you'll need to add questions:

1. Click **Add Questions** button on the exam
2. Choose from two methods:
   - **Select from Question Bank**
   - **Create New Questions**
   - **Assign Random Questions**

### Managing the Question Bank

The question bank is a central repository for all online exam questions.

#### Creating Questions Manually

**Navigate:** Exams → Online Exam Questions

![Question bank interface](pathname:///img/screens/online-exams/question-bank-interface.svg)

1. Click **Create Question**
2. Fill in details:

![Create question form](pathname:///img/screens/online-exams/create-question-form.svg)

- **Class** - Target class level
- **Subject** - Related subject
- **Question** - Type your question (supports math equations)
- **Image** - Upload image if needed (optional)
- **Options** - Add 2-6 answer options
- **Correct Answer(s)** - Mark one or more correct options
- **Marks** - Point value for the question
- **Difficulty** - Easy, Medium, or Hard
- **Note** - Additional hints (optional)

3. Click **Submit**

:::caution Multiple Correct Answers
Questions can have multiple correct answers. Students must select ALL correct options to get marks - partial credit is not awarded.
:::

#### Importing Questions from Excel

For bulk question creation:

1. Go to **Exams** → **Online Exam Questions**
2. Click **Import Questions**
3. Download the **Sample Template**
4. Fill in the template:
   - One question per row
   - Include all options
   - Mark correct answers clearly
5. Upload completed file
6. Review and confirm import

**Template Format:**
```
Class | Subject | Question | Option A | Option B | Option C | Option D | Correct Answer | Marks | Difficulty
```

### Assigning Questions to Exams

#### Method 1: Select from Question Bank

1. Open the exam → Click **Add Questions**
2. Browse available questions filtered by:
   - Class
   - Subject
   - Difficulty level
3. Select questions you want to include
4. Set marks for each question
5. Click **Assign Questions**

#### Method 2: Assign Random Questions

Automatically select questions by criteria:

1. Open exam → Click **Add Questions** → **Random Assignment**
2. Set parameters:
   - **Total Questions** - Number of questions to add
   - **Total Marks** - Overall marks (divided equally)
   - **Difficulty Level** - All, Easy, Medium, or Hard
3. Click **Generate**

The system will randomly select questions matching your criteria.

:::tip Smart Question Selection
Random assignment helps create unique exams and prevents question memorization across multiple exam attempts or sections.
:::

### Monitoring Online Exams

#### View Exam Status

From the Online Exams list, you can see:
- **Status Badge** - Upcoming, Ongoing, or Completed
- **Participants** - Students who attempted / Total students
- **Questions** - Number of questions in exam
- **Class/Section** - Target audience
- **Dates** - Start and end date/time

#### Tracking Student Participation

1. Open the exam details
2. Click **Results** button
3. View:
   - List of students who completed the exam
   - Marks obtained by each student
   - Submission time
   - Percentage scores

### Viewing Results & Reports

#### Individual Exam Results

1. Go to **Exams** → **Online Exams**
2. Find the exam and click **Results**
3. See detailed breakdown:
   - Student name
   - Marks obtained / Total marks
   - Percentage
   - Submission timestamp

#### Downloading Reports

Export exam results for record-keeping or analysis:
- Click **Export** to download CSV/Excel
- Contains all student scores and statistics

### Managing Exams

#### Editing an Exam

You can edit exam details before students start attempting:

1. Find the exam in the list
2. Click **Edit** (three dots menu)
3. Modify:
   - Title
   - Exam key
   - Duration
   - Start/End dates
4. Click **Update**

:::warning Cannot Edit After Students Start
Once students begin attempting an exam, you cannot modify questions or marks to maintain fairness.
:::

#### Deleting an Exam

1. Find the exam in the list
2. Click **Delete** (three dots menu)
3. Confirm deletion

**Note:** Exams with student submissions are soft-deleted and can be restored.

### Best Practices for Administrators

✅ **Create Question Banks Early** - Build subject-wise question libraries  
✅ **Test Exams First** - Create a test exam to verify the flow  
✅ **Set Realistic Durations** - Allow 1-2 minutes per question  
✅ **Communicate Exam Keys** - Share keys via announcements  
✅ **Monitor Participation** - Check who hasn't attempted  
✅ **Review Questions** - Ensure questions are clear and accurate  
✅ **Backup Questions** - Export question banks regularly  

---

## For Teachers

### Creating Online Exams

Teachers can create online exams for subjects they teach.

#### Prerequisites

Before creating exams, verify:
1. You are assigned to teach the subject
2. Students are enrolled in your classes
3. Session year is active

### Step-by-Step: Creating Your First Online Exam

**Step 1: Access Online Exams**
1. Go to **Exams** → **Online Exams**
2. Click **Create Online Exam**

**Step 2: Fill Exam Information**

You'll see only the classes and subjects you teach:

- **Title** - Clear, descriptive name (e.g., "Physics Chapter 5 Quiz")
- **Class** - Your assigned class
- **Section(s)** - Select one or more sections
- **Subject** - Your teaching subject
- **Start Date & Time** - When to open the exam
- **End Date & Time** - Deadline for students
- **Duration** - Minutes allowed (e.g., 30, 60, 90)
- **Exam Key** - 6-digit number (e.g., 123456)

:::tip Planning Exam Duration
**Recommended durations:**
- 10 questions: 15-20 minutes
- 20 questions: 30-40 minutes
- 50 questions: 60-90 minutes

Allow extra time for reading and reviewing.
:::

**Step 3: Create or Select Questions**

After creating the exam structure, add questions:

### Building Your Question Bank

#### Creating Questions

**Method 1: Create While Adding to Exam**

1. Open your exam → **Add Questions** → **Create New**
2. Fill in:
   - **Question Text** - Use the equation editor for math/science formulas
   - **Image** - Upload diagram/chart if needed
   - **Answer Options** - Add 2-6 choices
   - **Correct Answer(s)** - Check one or more boxes
   - **Marks** - Points for this question
   - **Difficulty** - Help categorize questions
   - **Note** - Hints or context (optional)

**Method 2: Build Question Bank First**

1. Go to **Exams** → **Online Exam Questions**
2. Click **Create Question**
3. Build your subject-specific question library
4. Reuse questions across multiple exams

#### Question Types & Examples

**Single Correct Answer:**
```
Question: What is the capital of Nigeria?
Options:
  ○ Lagos
  ● Abuja (Correct)
  ○ Port Harcourt
  ○ Kano
```

**Multiple Correct Answers:**
```
Question: Which of these are prime numbers?
Options:
  ● 2 (Correct)
  ○ 4
  ● 5 (Correct)
  ○ 6
```

:::warning Grading Multiple Correct Answers
Students must select ALL correct options to receive marks. Selecting some but not all correct answers results in zero marks for that question.
:::

### Assigning Questions to Your Exam

#### From Existing Questions

1. Open exam → **Add Questions** → **Select from Bank**
2. Questions are filtered by your class and subject
3. Filter further by:
   - **Difficulty** - Easy, Medium, Hard
   - **Search** - Find specific questions
4. Select questions by checking boxes
5. Set **Marks** for each question
6. Click **Assign Selected**

#### Using Random Assignment

Create varied exams quickly:

1. Open exam → **Add Questions** → **Random**
2. Configure:
   - **Number of Questions** - How many to add
   - **Total Marks** - Will be distributed evenly
   - **Difficulty Filter** - All/Easy/Medium/Hard
3. Click **Generate**

**Example Configuration:**
- Total Questions: 20
- Total Marks: 40
- Difficulty: All Levels
- Result: 20 random questions, 2 marks each

### Managing Your Exams

#### Editing Exam Details

Before students start:
1. Find your exam
2. Click **Edit**
3. Update title, duration, dates, or exam key
4. **Save Changes**

#### Adding/Removing Questions

While exam is "Upcoming":
1. Open exam → **Add Questions**
2. Add more questions OR
3. Click **Remove** on existing questions

#### Monitoring Student Progress

Check who has attempted your exam:

1. Open exam details
2. View **Participants** counter (e.g., "15/30")
3. Click **Results** to see:
   - Student names
   - Scores achieved
   - Submission times

### Viewing and Analyzing Results

#### After Exam Completion

1. Go to **Exams** → **Online Exams**
2. Find your exam (status: "Completed")
3. Click **Results**

#### Understanding the Results View

You'll see a table with:
- **Student Name**
- **Marks Obtained** / Total Marks
- **Percentage**
- **Grade** (if configured)

#### Download Results

Export for your records:
- Click **Export** button
- Get Excel/CSV file with all scores

### Best Practices for Teachers

#### Before Creating Exams

✅ **Plan Your Questions** - Align with learning objectives  
✅ **Mix Difficulty Levels** - Include easy, medium, and hard questions  
✅ **Review Questions** - Check for clarity and accuracy  
✅ **Test Your Exam** - Create a test version first  

#### When Scheduling Exams

✅ **Announce in Advance** - Give students notice (3-7 days)  
✅ **Choose Appropriate Times** - Avoid late nights or holidays  
✅ **Set Realistic Durations** - Don't rush students  
✅ **Share Exam Key Securely** - Announce just before exam time  

#### After Creating the Exam

✅ **Verify Question Count** - Ensure all questions are added  
✅ **Check Total Marks** - Confirm marks allocation  
✅ **Test the Exam Key** - Make sure it's easy to remember  
✅ **Post Announcement** - Notify students about the exam  

#### During the Exam

✅ **Monitor Participation** - Check who has started  
✅ **Be Available** - Answer student queries via messaging  
✅ **Watch for Issues** - Check if students report problems  

#### After the Exam

✅ **Review Results** - Look for questions everyone missed  
✅ **Provide Feedback** - Send message about exam performance  
✅ **Address Concerns** - Handle student questions about grades  

### Common Teacher Questions

**Q: Can I reuse questions from one exam in another?**  
A: Yes! Questions are stored in the question bank and can be used in multiple exams.

**Q: Can I edit questions after students have started?**  
A: No. Questions cannot be edited once students begin attempting to ensure fairness.

**Q: What happens if a student loses internet during the exam?**  
A: Students can resume the exam if the time hasn't expired. Their timer continues counting.

**Q: Can I extend the deadline for specific students?**  
A: Not directly. You'll need to change the end date for all students.

**Q: How are multiple correct answer questions graded?**  
A: Students must select ALL correct options to receive marks. Partial credit is not awarded.

---

## For Students

### Taking Online Exams

Online exams allow you to take tests digitally on the mobile app or web portal.

### How to Access Online Exams

**On Mobile App:**
1. Open the 4SCH Student App
2. Tap **Exams** tab at the bottom
3. Switch to **Online Exams** tab
4. You'll see upcoming and available exams

**On Web Portal:**
1. Log in to [ngs.4sch.com](https://ngs.4sch.com)
2. Go to **Exams** → **Online Exams**
3. View available exams

### Understanding Exam Status

Exams appear with different statuses:

- 🟦 **Upcoming** - Scheduled but not yet started
- 🟩 **Ongoing** - Currently available to attempt
- ⚪ **Completed** - Deadline has passed or you've submitted

### Before Starting an Exam

#### What You Need

✅ **Stable Internet** - Wi-Fi or mobile data  
✅ **Exam Key** - 6-digit code from your teacher  
✅ **Quiet Environment** - Minimize distractions  
✅ **Adequate Time** - Ensure you have the full duration available  
✅ **Charged Device** - Don't let your battery die mid-exam  

#### Check Exam Details

Before clicking "Start Exam", review:
- **Subject** - Which subject is this exam for
- **Duration** - How long you have
- **Total Questions** - Number of questions
- **Total Marks** - Maximum score
- **End Date** - Deadline to complete
- **Exam Key** - Required 6-digit code

### Step-by-Step: Taking an Exam

![Student exam list view](pathname:///img/screens/online-exams/student-exam-list.svg)

#### Phase 1: Starting the Exam

1. **Find Your Exam**
   - Open the Online Exams section
   - Find the exam in "Ongoing" status
   - Tap/Click on the exam

![Exam details before starting](pathname:///img/screens/online-exams/student-exam-details.svg)

2. **Read Instructions**
   - Duration
   - Total questions
   - Total marks
   - Rules and guidelines

3. **Enter Exam Key**
   - Tap **Start Exam**
   - Enter the 6-digit exam key provided by your teacher
   - Tap **Submit**

![Exam key entry screen](pathname:///img/screens/online-exams/student-exam-key-entry.svg)

:::caution Get the Exam Key First
Ask your teacher for the exam key before starting. You cannot proceed without it.
:::

4. **Exam Begins**
   - Timer starts immediately
   - You'll see the first question
   - Your attempt is recorded (one-time only)

#### Phase 2: Answering Questions

![Single answer question interface](pathname:///img/screens/online-exams/student-question-single.svg)

**Question Display:**
- Question number (e.g., "Question 1 of 20")
- Question text (may include images)
- Answer options (radio buttons or checkboxes)
- Marks for the question
- Timer countdown

**How to Answer:**

**Single Answer Questions:**
- Tap/Click the circle ○ next to your chosen answer
- Only one option can be selected
- Change your answer by selecting a different option

![Multiple answer question interface](pathname:///img/screens/online-exams/student-question-multiple.svg)

**Multiple Answer Questions:**
- Tap/Click checkboxes ☑ for all correct answers
- You can select multiple options
- Deselect by tapping again

**Questions with Images:**
- Tap image to view full size
- Pinch to zoom on mobile
- Questions may include diagrams, charts, or equations

#### Phase 3: Navigating Through Questions

**Moving Between Questions:**
- **Next** - Go to next question
- **Previous** - Return to previous question
- **Question Navigator** - Jump to any question (if available)

**Marking for Review:**
- Some systems allow flagging questions to revisit
- Use this for questions you're unsure about

#### Phase 4: Time Management

![Timer and navigation interface](pathname:///img/screens/online-exams/student-timer-navigation.svg)

**Timer Display:**
- Shows remaining time (e.g., "25:30" = 25 minutes, 30 seconds)
- Usually at the top of the screen
- Turns red when time is running low (last 5 minutes)

**What Happens When Time Expires:**
- Exam auto-submits with your current answers
- You cannot make changes after submission
- Unanswered questions score zero

:::warning Auto-Submit
When time runs out, the exam submits automatically with whatever you've answered. Don't wait until the last second!
:::

#### Phase 5: Submitting the Exam

**Before Submitting:**
- Review all questions if time allows
- Ensure all questions are answered
- Check for accidental blank answers

**To Submit:**
1. Click **Submit Exam** button
2. Confirm submission (this action is final)
3. Wait for confirmation message

![Submit exam confirmation](pathname:///img/screens/online-exams/student-submit-confirmation.svg)

**After Submission:**
- Your answers are saved
- You cannot re-take the exam
- Results may be visible immediately or after teacher review

![Exam results display](pathname:///img/screens/online-exams/student-results-display.svg)

### Viewing Your Results

#### Immediate Results

Many exams show results right after submission:

1. **Overall Score** - Marks obtained / Total marks
2. **Percentage** - Your score as a percentage
3. **Pass/Fail** - If applicable

#### Detailed Results

Access full results later:

**On Mobile:**
1. Go to **Exams** → **Online Exams**
2. Switch to **Results** tab
3. Tap on the exam to view details

**On Web:**
1. Go to **Exams** → **Online Exam Results**
2. Click on the exam name
3. View detailed breakdown

**What You'll See:**
- Subject name
- Exam title
- Your marks
- Total marks
- Percentage
- Submission date/time

:::tip Learn from Results
Review your performance to identify topics needing more study. Some systems may show which questions you got wrong (check with your teacher).
:::

### Important Rules & Guidelines

#### Do's ✅

✅ **Start on Time** - Don't wait until the last minute  
✅ **Read Carefully** - Understand each question before answering  
✅ **Manage Your Time** - Keep track of the clock  
✅ **Answer All Questions** - Even if you're guessing  
✅ **Check Your Work** - Review before submitting if time allows  
✅ **Stay Calm** - Take deep breaths if you feel anxious  
✅ **Use Stable Internet** - Avoid public Wi-Fi if possible  

#### Don'ts ❌

❌ **Don't Share Exam Key** - Keep it confidential until exam time  
❌ **Don't Refresh the Page** - You might lose your progress  
❌ **Don't Switch Apps** - May cause timing issues on mobile  
❌ **Don't Wait to Submit** - Auto-submit at time expiry can fail  
❌ **Don't Try Multiple Attempts** - System allows only ONE attempt  
❌ **Don't Collaborate** - This is individual assessment  

### Troubleshooting Common Issues

#### Problem: "Invalid Exam Key" Error

**Solution:**
- Verify you entered the correct 6-digit key
- Check with your teacher for the right key
- Ensure there are no extra spaces
- Try typing instead of copy-pasting

#### Problem: Exam Won't Load

**Solution:**
1. Check your internet connection
2. Refresh the page/app
3. Clear browser cache (web)
4. Restart the app (mobile)
5. Try a different browser/device

#### Problem: Timer Not Showing

**Solution:**
- Refresh the page
- Your time is still counting - work quickly
- Note your start time manually
- Contact teacher if issue persists

#### Problem: Lost Internet Connection During Exam

**Solution:**
1. Reconnect to internet quickly
2. Refresh the page/app
3. Your answers should be auto-saved
4. Continue from where you left off
5. Timer continues counting even offline

#### Problem: Accidentally Closed the Exam

**Solution:**
- Reopen the exam immediately
- You can resume if time hasn't expired
- Your previous answers are usually saved
- Timer continues from where it was

#### Problem: Cannot Submit Exam

**Solution:**
1. Check internet connection
2. Try clicking Submit again
3. Wait 30 seconds and retry
4. If time expires, exam auto-submits
5. Screenshot the error and contact teacher

### Tips for Success

#### Before the Exam

📚 **Study Well** - Review all topics thoroughly  
🔌 **Charge Device** - 100% battery before starting  
📶 **Test Internet** - Ensure stable connection  
🤫 **Find Quiet Space** - Minimize distractions  
⏰ **Note Exam Time** - Set reminder 15 minutes before  
📝 **Get Exam Key** - Have it ready before starting  

#### During the Exam

⚡ **Start Promptly** - Begin as soon as allowed  
📖 **Read Questions Fully** - Don't rush, understand first  
✓ **Answer Easy Questions First** - Build confidence  
⏱️ **Watch the Time** - Pace yourself  
🎯 **Eliminate Wrong Options** - Narrow down choices  
🤔 **Trust Your Instincts** - First answer often correct  
✍️ **Answer Everything** - Never leave questions blank  

#### After the Exam

📊 **Review Results** - Understand your performance  
📚 **Identify Weak Areas** - Focus future study  
💭 **Reflect on Experience** - What could you do better?  
🙏 **Thank Your Teacher** - Acknowledge their effort  

### Frequently Asked Questions

**Q: Can I take the exam multiple times?**  
A: No. Online exams allow only ONE attempt per student.

**Q: What if I accidentally click the wrong answer?**  
A: Click the correct answer to change your selection before submitting.

**Q: Will I see correct answers after the exam?**  
A: This depends on your teacher's settings. Some exams show answers, others don't.

**Q: Can I skip questions and come back later?**  
A: Yes, use Next/Previous buttons to navigate. But watch your time!

**Q: What happens if my phone battery dies?**  
A: You can resume on another device if time remains. Always start with full battery.

**Q: Can I use calculator or notes during the exam?**  
A: Follow your teacher's instructions. Some exams are open-book, others aren't.

**Q: How is my score calculated?**  
A: Total marks from correct answers / Total possible marks × 100 = Percentage

**Q: What if I think a question has an error?**  
A: Answer to the best of your understanding, then report to your teacher afterward.

---

## For Parents

### Monitoring Your Child's Online Exams

Parents can track their child's exam schedule and results through the parent portal/app.

### Viewing Exam Schedule

**On Parent App:**
1. Open 4SCH Parent App
2. Select your child (if multiple children)
3. Go to **Exams** section
4. View upcoming online exams

**On Parent Web Portal:**
1. Log in to the parent portal
2. Select child from dashboard
3. Navigate to **Exams** → **Online Exams**

**What You'll See:**
- Exam title and subject
- Scheduled date and time
- Duration
- Status (Upcoming/Ongoing/Completed)

### Helping Your Child Prepare

#### Creating a Good Environment

✅ **Quiet Space** - Dedicated study area free from distractions  
✅ **Stable Internet** - Test connection before exam time  
✅ **Charged Device** - Ensure phone/tablet/laptop is fully charged  
✅ **Backup Plan** - Have alternative device available  

#### Before Exam Day

- Remind your child about the exam
- Help them create a study schedule
- Ensure they have the exam key from their teacher
- Check device and internet connectivity
- Plan to be available during exam time

#### During the Exam

- Minimize household distractions
- Don't interrupt unless emergency
- Keep other devices/siblings quiet
- Be available if technical issues arise
- Monitor from a distance (don't help with answers)

### Viewing Results

After your child completes an exam:

1. Go to **Exams** → **Online Exam Results**
2. View:
   - Subject and exam title
   - Marks obtained / Total marks
   - Percentage score
   - Submission date

![Parent viewing child's exam results](pathname:///img/screens/online-exams/parent-results-view.svg)

### Supporting Your Child

#### If Results Are Good

🎉 **Celebrate Success** - Acknowledge their hard work  
📚 **Encourage Consistency** - Maintain study habits  
💪 **Build Confidence** - Positive reinforcement  

#### If Results Need Improvement

💙 **Stay Positive** - Avoid harsh criticism  
🤝 **Understand Why** - Discuss what was difficult  
📖 **Plan Together** - Create improvement strategy  
👨‍🏫 **Teacher Communication** - Reach out for guidance  
⏰ **Study Routine** - Help establish regular study time  

### Common Parent Questions

**Q: Can I see the questions my child answered?**  
A: Usually no, for security reasons. Only results are shared.

**Q: Can my child retake a failed exam?**  
A: This depends on teacher/school policy. Contact the teacher directly.

**Q: What if there was a technical issue during the exam?**  
A: Document the issue with screenshots and contact the teacher immediately.

**Q: How can I verify the results are accurate?**  
A: Results are auto-calculated by the system. If you suspect an error, contact the teacher.

---

## Technical Details

### System Requirements

#### For Students (Mobile App)

**Android:**
- Android 7.0 or higher
- 2GB RAM minimum
- Stable internet (3G/4G/Wi-Fi)
- 100MB free storage

**iOS:**
- iOS 12.0 or higher
- iPhone 6s or newer
- Stable internet connection
- 100MB free storage

#### For All Users (Web Portal)

**Browsers:**
- Chrome 90+
- Firefox 88+
- Safari 14+
- Edge 90+

**Internet Speed:**
- Minimum: 2 Mbps
- Recommended: 5 Mbps or higher

### Security Features

- **Exam Keys** - 6-digit numeric codes prevent unauthorized access
- **One-Time Attempt** - Students cannot retake exams
- **Time Tracking** - System monitors exam duration
- **Auto-Save** - Answers saved periodically
- **Auto-Submit** - Automatic submission when time expires

### Data & Privacy

- Student answers are encrypted in transit
- Results are private to student, teachers, and parents
- Exam data is backed up regularly
- Access is role-based (students see only their exams)

---

## Troubleshooting

### For Students - Detailed Scenarios

#### Issue 1: "Invalid Exam Key" Error

**Symptoms:**
- Error message appears after entering exam key
- Cannot access exam questions
- Key is rejected repeatedly

**Possible Causes:**
1. Incorrect key entered
2. Extra spaces before/after the key
3. Wrong exam selected
4. Exam not yet started

**Solutions:**

**Step 1: Verify the Exam Key**
- Double-check with your teacher
- Ensure you have the latest key (teachers may change it)
- Key should be exactly 6 digits (e.g., 123456)
- No letters, spaces, or special characters

**Step 2: Check Your Entry**
```
❌ Wrong: " 123456" (space before)
❌ Wrong: "123456 " (space after)
❌ Wrong: "12 34 56" (spaces between)
✅ Correct: "123456"
```

**Step 3: Try Again**
1. Close the exam entry screen
2. Reopen the exam
3. Type the key manually (don't copy-paste)
4. Click Submit

**Step 4: If Still Failing**
- Try on a different device
- Check if you selected the correct exam
- Verify exam has started (check start date/time)
- Contact your teacher immediately

**Prevention:**
- Get exam key directly from teacher
- Write it down correctly before exam time
- Test it as soon as you receive it

---

#### Issue 2: Timer Disappeared or Not Showing

**Symptoms:**
- Timer suddenly vanishes from screen
- No indication of remaining time
- Page looks different than usual

**Immediate Actions:**

**Do NOT panic - your time is still counting!**

1. **Note Your Start Time**
   - Check your watch/clock
   - Calculate when exam should end
   - Continue answering questions

2. **Try Quick Fixes**
   - Refresh the page (answers auto-saved)
   - Scroll to top of page (timer may be there)
   - Check browser zoom (may be off-screen)

3. **Continue Working**
   - Don't waste time troubleshooting too long
   - Pace yourself based on total duration
   - Aim to finish 10-15 minutes early

4. **Document Issue**
   - Screenshot the problem if possible
   - Note exact time it occurred
   - Report to teacher after submission

**If Using Mobile App:**
- Close and reopen the app
- Your progress should be saved
- Timer resumes from where it was

---

#### Issue 3: Lost Internet Connection During Exam

**Symptoms:**
- "No internet" message
- Page won't load
- Answers not saving
- Spinning loader icon

**Immediate Response (First 30 Seconds):**

**STAY CALM - You have time to fix this!**

1. **Don't Close the Exam**
   - Keep the exam page/app open
   - Your timer is still running
   - Answers may be cached locally

2. **Reconnect Quickly**
   - Check WiFi is on
   - Switch to mobile data if WiFi failed
   - Move closer to WiFi router
   - Restart WiFi router if at home

3. **Refresh Connection**
   - Open another app/tab to test connection
   - Once connected, return to exam
   - Refresh the exam page/app

**After Reconnecting:**

1. **Check Your Progress**
   - Verify previously answered questions are saved
   - Note which question you were on
   - Check timer (if visible)

2. **Resume Quickly**
   - Continue from where you left off
   - Don't re-answer already completed questions
   - Work efficiently to make up lost time

3. **Submit Early**
   - Don't risk another disconnection
   - Submit 5-10 minutes before deadline
   - Better to submit than lose all progress

**If Connection Cannot Be Restored:**

1. **Contact Teacher Immediately**
   - Use phone/SMS to reach teacher
   - Explain the situation
   - Ask for time extension or resolution

2. **Document Everything**
   - Screenshot error messages
   - Note exact time connection lost
   - List what you'd completed
   - This helps with appeals

**Prevention for Next Time:**
- Use WiFi over mobile data (more stable)
- Test connection before exam
- Have backup internet source ready
- Inform teacher of connectivity issues beforehand

---

#### Issue 4: Accidentally Closed Exam Window/App

**Symptoms:**
- Exam window/app closed unexpectedly
- Back at home screen or browser
- Panic sets in

**Immediate Actions:**

**DON'T PANIC - You can resume!**

**For Web Portal:**
1. **Reopen Browser Immediately**
   - Open same browser you were using
   - Go to 4SCH portal (ngs.4sch.com)
   - Log in if needed

2. **Navigate Back to Exam**
   - Go to Exams → Online Exams
   - Find the exam (should show "In Progress")
   - Click to resume

3. **Verify Your Answers**
   - Check previously answered questions are there
   - Note current question number
   - Continue from where you left off

**For Mobile App:**
1. **Reopen App Immediately**
   - Tap 4SCH Student App icon
   - App should restore session

2. **Return to Exam**
   - Go to Exams tab
   - Select the exam
   - Should resume automatically

3. **Check Progress**
   - Verify timer is running
   - Confirm answers are saved
   - Continue answering

**Important Notes:**
- Your timer CONTINUES even when window is closed
- Most modern systems auto-save your answers
- You have until the timer expires to complete
- Don't waste time - resume quickly

**If Exam Won't Resume:**
- Screenshot the error
- Contact teacher via phone/SMS
- Explain what happened
- Ask for resolution

**Prevention:**
- Pin exam tab/window
- Close other applications
- Tell household members not to disturb
- On mobile: disable button navigation if possible

---

#### Issue 5: Cannot Submit Exam - Button Disabled/Not Working

**Symptoms:**
- Submit button is grayed out
- Nothing happens when clicking Submit
- Stuck on last question
- Time running out

**Quick Diagnosis:**

**Check 1: All Questions Answered?**
- Some systems require all questions to be answered
- Scroll through to find unanswered ones
- Even a guess is better than blank

**Check 2: Internet Connection?**
- Submission requires internet
- Check connection status
- Reconnect if needed

**Check 3: Already Submitted?**
- Check for confirmation message
- You may have already submitted successfully
- Don't try to submit twice

**Solutions by Cause:**

**Cause A: Unanswered Questions**
```
1. Navigate to first question
2. Go through each one checking for answers
3. Select an answer for any blank ones
4. Return to last question
5. Try Submit again
```

**Cause B: Poor Internet**
```
1. Check internet connection
2. Reconnect if needed
3. Wait 30 seconds
4. Try Submit again
5. If fails, wait and retry
```

**Cause C: Browser/App Issue**
```
For Web:
1. Try different browser (Chrome recommended)
2. Clear browser cache
3. Reattempt exam if time allows

For App:
1. Close and reopen app
2. Update app if outdated
3. Try on web portal instead
```

**Last Resort (Time Almost Expired):**

**Your answers are auto-saved!**

1. Stop trying to submit
2. Wait for auto-submit when time expires
3. Your last saved answers will be submitted
4. Check results after to confirm submission

**Prevention:**
- Submit 5-10 minutes before deadline
- Don't wait until last second
- Review submission confirmation carefully
- Screenshot confirmation message

---

#### Issue 6: Questions Not Loading or Partially Loading

**Symptoms:**
- Blank questions
- Missing options
- Images not appearing
- Incomplete question text

**Quick Fixes:**

**Fix 1: Refresh the Page**
```
1. Click browser refresh (F5)
2. Or close and reopen app
3. Navigate back to exam
4. Questions should load properly
```

**Fix 2: Check Internet Speed**
```
1. Images require good connection
2. Switch from mobile data to WiFi
3. Move closer to WiFi source
4. Close other bandwidth-using apps
```

**Fix 3: Browser Cache**
```
1. Clear browser cache (web only)
2. Hard refresh: Ctrl+F5 (Windows) or Cmd+Shift+R (Mac)
3. Reload the exam
```

**Fix 4: Try Different Browser/Device**
```
If available:
1. Open exam on another device
2. Use different browser
3. Continue from where you left off
```

**If Questions Still Won't Load:**

1. **Document the Issue**
   - Screenshot blank/incomplete questions
   - Note question numbers affected
   - Record exact time of issue

2. **Answer What You Can See**
   - Skip problematic questions
   - Answer complete questions
   - Come back if time allows

3. **Report to Teacher**
   - Contact during exam if possible
   - Submit what you completed
   - Explain issue afterward

**Prevention:**
- Test browser/app before exam
- Ensure good internet speed (5+ Mbps)
- Update app/browser to latest version
- Use recommended browsers (Chrome, Firefox)

---

#### Issue 7: Selected Answers Not Being Saved

**Symptoms:**
- Answers disappear when navigating
- Returns to unselected state
- Progress not retained

**Diagnosis Steps:**

**Test 1: Check Auto-Save**
```
1. Select an answer on Question 1
2. Navigate to Question 2
3. Navigate back to Question 1
4. Is your answer still there?
```

**Test 2: Browser Cookies**
```
Web users only:
1. Check cookies are enabled
2. Allow cookies from 4sch.com
3. Don't use Incognito/Private mode
```

**Test 3: Internet Stability**
```
1. Answers save to server
2. Requires active connection
3. Check connection is stable
```

**Solutions:**

**Solution 1: Enable Cookies (Web)**
```
Chrome:
Settings → Privacy → Cookies → Allow all

Firefox:
Settings → Privacy → Accept cookies

Safari:
Preferences → Privacy → Uncheck "Block all cookies"
```

**Solution 2: Stay Connected**
```
1. Keep internet connected throughout
2. Wait 2-3 seconds after selecting answer
3. Look for save indicator (if shown)
4. Then navigate to next question
```

**Solution 3: Use Different Browser/App**
```
1. Switch to Chrome browser (most reliable)
2. Or use mobile app instead of web
3. Answers typically save better on app
```

**Emergency Workaround:**
- Write down your answers on paper
- Question number : Selected option (A/B/C/D)
- If system fails, you have record
- Can appeal with this evidence

---

### For Teachers & Administrators - Detailed Scenarios

#### Issue 1: Cannot Create Exam - Permission Denied

**Symptoms:**
- "Permission Denied" error
- Create button missing or disabled
- Cannot access online exams section

**Diagnosis:**

**Check 1: User Role**
```
Required roles for creating exams:
✓ School Admin
✓ Teacher (for assigned subjects only)
✗ Other staff roles cannot create
```

**Check 2: Module Enabled**
```
Admin should verify:
Settings → Modules → "Exam Management"
Status must be "Enabled"
```

**Check 3: Subject Assignment**
```
For Teachers:
- Must be assigned to teach the subject
- Check: Subject Teachers → Your Name
- Verify you're listed for the subject/class
```

**Solutions:**

**Solution A: Request Permission**
```
1. Contact School Administrator
2. Request "Online Exam" permissions
3. Or "Teacher" role assignment
4. Wait for admin to grant access
```

**Solution B: Module Activation**
```
Admin only:
1. Go to System Settings → Modules
2. Find "Exam Management"
3. Toggle to "Enabled"
4. Save changes
```

**Solution C: Subject Assignment**
```
Admin should:
1. Go to Subject Teachers
2. Assign teacher to subject/class
3. Verify assignment is saved
4. Teacher refresh browser/logout-login
```

---

#### Issue 2: Questions Not Appearing in Question Selection

**Symptoms:**
- Question bank appears empty
- Cannot find created questions
- Filter shows no results

**Common Causes & Fixes:**

**Cause 1: Wrong Class/Subject Filter**
```
✓ Questions are filtered by:
  - Class (must match exam class)
  - Subject (must match exam subject)
  
Fix:
1. Verify exam's class and subject
2. Create questions for same class/subject
3. Or adjust exam to match existing questions
```

**Cause 2: Questions Already Added**
```
✓ Questions assigned to exam are excluded from list

Fix:
1. Check exam's question list
2. Remove and re-add if needed
3. Or create new questions
```

**Cause 3: No Questions Exist**
```
✓ Question bank is actually empty

Fix:
1. Create questions first
2. Or import from Excel
3. Then add to exam
```

**Cause 4: Semester/Session Mismatch**
```
Some schools use semesters:
1. Check exam's semester
2. Verify questions created for same semester
3. Adjust filters accordingly
```

**Solutions:**

**Solution 1: Create Questions First**
```
Before creating exam:
1. Go to Online Exam Questions
2. Create questions for class/subject
3. Mark difficulty levels
4. Then create exam and select questions
```

**Solution 2: Import Questions**
```
For bulk creation:
1. Download Excel template
2. Fill in questions (class, subject, options)
3. Import file
4. Verify import successful
5. Then add to exam
```

**Solution 3: Check Filters**
```
When selecting questions:
1. Clear all filters
2. Select correct class
3. Select correct subject
4. Questions should appear
```

---

#### Issue 3: Students Cannot Start Exam - "Already Attempted" Error

**Symptoms:**
- Student gets "Already Attempted" message
- Student hasn't actually taken the exam
- Cannot access exam questions

**Diagnosis:**

**Check 1: Student Status Table**
```
Admin/Teacher:
1. Check student_online_exam_status table
2. Look for student_id + exam_id combination
3. Status values:
   - 1 = Started but not submitted
   - 2 = Completed/Submitted
```

**Check 2: Demo Mode**
```
If in DEMO_MODE:
- System resets attempts automatically
- Issue shouldn't occur
- Check environment configuration
```

**Causes:**

**Cause A: Student Actually Started**
- Student clicked "Start Exam"
- Entered exam key
- But didn't submit
- System marked as "in progress"

**Cause B: System Glitch**
- Rare database inconsistency
- Incorrect status recorded
- Needs manual correction

**Cause C: Testing/Multiple Attempts**
- Admin/Teacher tested with student account
- Previous test attempt recorded
- Needs cleanup

**Solutions:**

**Solution 1: Clear Student Attempt (Admin)**
```
Database cleanup:
1. Access database management
2. Find: student_online_exam_status table
3. Delete row where:
   - student_id = [student's ID]
   - online_exam_id = [exam ID]
4. Also check: online_exam_student_answers
5. Delete corresponding rows
6. Student can now attempt
```

**Solution 2: Create New Exam**
```
Quick workaround:
1. Duplicate the problematic exam
2. Give it slightly different title
3. Assign same questions
4. Share new exam key
5. Students attempt new exam
```

**Solution 3: Contact Support**
```
If unable to resolve:
1. Document the issue
2. Note student ID and exam ID
3. Contact 4SCH technical support
4. Provide database access if requested
```

**Prevention:**
- Advise students not to click "Start" unless ready
- Test exams with dummy student accounts
- Clear test data before publishing exam
- Train teachers on testing procedures

---

#### Issue 4: Results Not Calculating Correctly

**Symptoms:**
- Wrong marks displayed
- Percentage doesn't match
- Missing student results

**Diagnosis Steps:**

**Check 1: Marks Assignment**
```
Verify each question:
1. Open exam → View questions
2. Check marks for each question
3. Total should match expected
4. Ensure no blank/zero marks
```

**Check 2: Answer Validation**
```
For multiple-answer questions:
1. Verify ALL correct answers marked
2. Check no extra answers marked correct
3. Student must select exact combination
```

**Check 3: Database Records**
```
Technical check:
1. Verify answers saved in database
2. Check option IDs match
3. Confirm marks calculation query
```

**Common Issues:**

**Issue A: Multiple Answer Grading**
```
❌ Problem:
Question has options A, B, C, D
Correct answers: A, C
Student selected: A, C
Shows: 0 marks

✓ Solution:
Check question setup:
- Both A and C marked as correct in database
- No other options marked correct
- Re-verify correct answers
```

**Issue B: Question Marks Changed After Exam**
```
❌ Problem:
Teacher changed marks after students attempted

✓ Solution:
Marks are fixed at time of assignment
Cannot change after students start
Create new exam if marks wrong
```

**Issue C: Missing Student Submission**
```
❌ Problem:
Student submitted but not in results

✓ Check:
1. student_online_exam_status: status = 2
2. online_exam_student_answers: has records
3. Database transaction completed
4. Re-run results calculation if needed
```

**Solutions:**

**Solution 1: Recalculate Results**
```
Admin action:
1. Access exam results page
2. Click "Recalculate" (if available)
3. Or run database update query
4. Refresh results view
```

**Solution 2: Verify Question Configuration**
```
For each question:
1. Edit question
2. Check correct answer(s) marked
3. Verify marks value is set
4. Save changes
5. Re-test with sample submission
```

**Solution 3: Manual Grade Adjustment**
```
Last resort:
1. Calculate correct marks manually
2. Update exam_results table directly
3. Document the correction
4. Inform student of adjustment
```

---

#### Issue 5: Exam Time Expires But Students Can Still Access

**Symptoms:**
- End date/time passed
- Students can still start exam
- Should be closed but isn't

**Diagnosis:**

**Check 1: Date/Time Settings**
```
Verify:
- End date is in correct format
- Time zone is correct
- Server time matches expected
- End date is truly in the past
```

**Check 2: System Time**
```
Technical check:
1. Compare server time vs. local time
2. Check PHP/system timezone setting
3. Verify database stores UTC or local time
4. Confirm comparison logic is correct
```

**Solutions:**

**Solution 1: Update End Date**
```
Quick fix:
1. Edit exam
2. Set end date to past date
3. Save changes
4. Students should no longer access
```

**Solution 2: Manually Close Exam**
```
Admin action:
1. Access database
2. Update exam status to "closed"
3. Or set end_date to now() - 1 day
4. Verify students cannot start
```

**Solution 3: System Time Sync**
```
Technical fix:
1. Check server timezone configuration
2. Sync server time with NTP
3. Verify PHP timezone setting
4. Restart web server if needed
```

---

### Rare But Critical Issues

#### Database Connection Lost During Exam

**Symptoms:**
- Multiple students report simultaneous errors
- All exams failing at once
- Server not responding

**Immediate Actions:**

**For Administrators:**

1. **Check Database Server**
   ```
   1. Verify database service is running
   2. Check connection credentials
   3. Test database connectivity
   4. Review error logs
   ```

2. **Notify Students & Teachers**
   ```
   1. Send announcement about issue
   2. Pause all ongoing exams if possible
   3. Document affected exams
   4. Note time of disruption
   ```

3. **Restore Service**
   ```
   1. Restart database service
   2. Verify web application connects
   3. Test with sample exam
   4. Announce service restoration
   ```

4. **Student Recovery**
   ```
   1. Extend exam deadlines
   2. Allow re-attempts for affected students
   3. Manually grade if needed
   4. Document incident for records
   ```

---

#### Mass Cheating Detected

**Indicators:**
- Identical answer patterns across multiple students
- Unrealistic completion times
- Perfect scores from struggling students
- Sequential submission times

**Investigation Steps:**

1. **Review Submission Data**
   ```
   Check:
   - Submission timestamps
   - Answer patterns
   - Time taken per question
   - IP addresses (if logged)
   ```

2. **Compare Answers**
   ```
   Look for:
   - Exact same wrong answers
   - Same answer sequence
   - Unrealistic similarity
   ```

3. **Interview Students**
   ```
   Ask about:
   - How they prepared
   - Where they took exam
   - Who was nearby
   - Any collaboration
   ```

**Prevention Measures:**

1. **Random Question Order**
   ```
   Implementation:
   - Shuffle question sequence per student
   - Randomize option order
   - Different students see different order
   ```

2. **Strict Monitoring**
   ```
   During exam:
   - Proctoring if in-person
   - Camera monitoring if remote
   - Lockdown browser if available
   ```

3. **Different Question Sets**
   ```
   Advanced:
   - Create multiple exam versions
   - Use random question selection
   - Different questions, same topics
   ```

---

## Emergency Contact Procedures

### For Students
1. **During Exam:** Contact teacher via phone/SMS immediately
2. **After Hours:** Email teacher with issue details
3. **Critical Issues:** Contact school admin office

### For Teachers
1. **Technical Issues:** Contact school IT administrator
2. **System Down:** Email 4SCH support with details
3. **Urgent:** Call school admin for immediate assistance

### For Administrators
1. **System Critical:** Contact 4SCH technical support
2. **Database Issues:** Contact hosting provider
3. **Security Concerns:** Escalate to 4SCH security team

---

**Remember:** Most issues have simple solutions. Stay calm, follow troubleshooting steps, and don't hesitate to ask for help!

---

## Best Practices Summary

### For School Administrators

✅ Build comprehensive question banks  
✅ Train teachers on the system  
✅ Monitor exam participation rates  
✅ Review system performance regularly  
✅ Backup exam data periodically  

### For Teachers

✅ Create diverse question types  
✅ Test exams before assigning to students  
✅ Provide clear instructions  
✅ Set realistic time limits  
✅ Review results for insights  

### For Students

✅ Prepare well before exam day  
✅ Ensure stable internet connection  
✅ Start exams promptly  
✅ Manage time effectively  
✅ Review results to improve  

### For Parents

✅ Provide supportive environment  
✅ Monitor without interfering  
✅ Encourage consistent study habits  
✅ Communicate with teachers  
✅ Celebrate achievements  

---

## Getting Help

### Having Issues with Online Exams?

**Students:**
- Contact your teacher first
- Message via 4SCH chat system
- Check the <Link to="/support/faq">FAQ</Link>

**Teachers & Administrators:**
- Refer to <Link to="/support/troubleshooting">Troubleshooting Guide</Link>
- Contact school IT administrator
- Reach out to 4SCH support

**Parents:**
- Contact your child's teacher
- Email school administration
- Check the <Link to="/guides/parent-guide">Parent Guide</Link>

---

## Next Steps

**For Administrators:**
- <Link to="/guides/school-admin">School Admin Guide</Link>
- <Link to="/reference/roles-permissions">Roles & Permissions</Link>

**For Teachers:**
- <Link to="/guides/teacher-guide">Teacher Guide</Link>
- [Assignment Submission Workflow](https://docs.4sch.com/interactive-diagrams/student-assignment-submission.html)

**For Students:**
- <Link to="/guides/student-guide">Student Guide</Link>
- <Link to="/support/faq">Frequently Asked Questions</Link>

**For Parents:**
- <Link to="/guides/parent-guide">Parent Guide</Link>
- <Link to="/support/contact-support">Contact Support</Link>

---

*Online exams make assessment efficient and provide instant feedback. Use them effectively to enhance teaching and learning!* 📝✨
