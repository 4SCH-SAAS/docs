# Video Script: Teacher-Subject Assignment

**Duration:** 5 minutes  
**Target Audience:** School Administrators, Academic Coordinators, Heads of Departments  
**Learning Objectives:**
- Assign teachers to subjects
- Configure class schedules with teacher-subject assignments
- Handle teacher load balancing
- Manage subject allocation across multiple classes
- Update assignments mid-year

---

## [00:00-00:15] INTRO (15 sec)

**[VISUAL]** Teachers being assigned to subjects, class schedules forming, color-coded timetables appearing  
**[MUSIC]** Professional, organizational background music

**[VOICEOVER]:**  
"Welcome to Teacher-Subject Assignment. Learn how to effectively allocate teachers to subjects and create balanced schedules."

---

## [00:15-00:55] Why Assignment Matters (40 sec)

**[VISUAL]**
- Problem visualization (left side):
  - Single teacher with overload: 8 classes, 40 hours/week
  - Empty classroom: No teacher assigned to Mathematics
  - Mismatched: Physics teacher teaching History
  - Scheduling conflicts: Teacher in two places simultaneously
  - Frustrated students and teachers
- Solution visualization (right side):
  - Teachers with balanced loads: 4-5 classes per teacher
  - All subjects covered: Each has qualified teacher
  - Proper expertise: Physics teacher teaches Physics
  - Conflict-free schedule: No overlaps
  - Engaged, satisfied staff and students
- Statistics displayed:
  - Typical allocation: 4-6 classes per teacher
  - Standard class load: 20-25 hours/week
  - Specialization: Teachers teach subjects they're qualified for
  - Workload balance: Prevents teacher burnout

**[VOICEOVER]:**  
"Assigning teachers to subjects is critical for school operations. Wrong assignments create chaos: classes without teachers, unqualified teachers in subjects they don't know, scheduling conflicts.

Proper assignment ensures every class has a qualified teacher, workload is balanced, and schedules don't conflict. Happy teachers, engaged students, better learning outcomes."

**[ON-SCREEN TEXT]**
- "Balanced Teacher Load"
- "Subject Expertise Match"
- "Conflict-Free Schedules"
- "Effective Allocation"

---

## [00:55-02:00] Setting Up Assignments (65 sec)

**[VISUAL]**
- Navigation: Dashboard > Administration > Academic > Teacher-Subject Assignment
- Assignment management dashboard displayed:
  - Three tabs: "By Teacher" / "By Subject" / "By Class"
  - "By Class" tab selected (most common view)
  - Table showing:
    - Class | Subject | Assigned Teacher | Load | Status
    - JSS1A | English Language | Mr. Femi Adeyemi | 1 class | ✓ Confirmed
    - JSS1A | Mathematics | Mrs. Nneka Obi | 1 class | ✓ Confirmed
    - JSS1A | Physics | Dr. Chukwu Okoro | 1 class | ✓ Confirmed
    - JSS1A | Biology | Mrs. Grace Okonkwo | 1 class | ✓ Confirmed
    - (Continues for all subjects and classes)
  - Action buttons: "Edit" / "Change Teacher" / "View Details"
- Example workflow: Assigning Mathematics to JSS2A
  - Click "+ Assign Subject" button for JSS2A
  - Form opens:
    - Subject: Dropdown showing "Mathematics" entered
    - Teacher: Dropdown showing available teachers
      - List shows: Mrs. Nneka Obi (4 classes, 18 hrs/week) - Load: 66%
      - Mr. Tunde Adeniyi (3 classes, 15 hrs/week) - Load: 50%
      - Mrs. Amara Nwosu (2 classes, 12 hrs/week) - Load: 40%
    - "i" icons show teacher profiles and qualifications
    - User clicks on Mrs. Amara Nwosu - less loaded
    - Confirmation shown: "Mrs. Amara Nwosu can teach Mathematics (Qualified: Yes)"
  - Option: View teacher's full profile
    - Name: Mrs. Amara Nwosu
    - Qualifications: B.Sc. Mathematics, PGDE
    - Experience: 8 years
    - Current assignments: JSS2B Physics, JSS3A Biology
    - Workload: 40% (2 classes, 12 hours/week)
    - Maximum capacity: 6 classes, 30 hours/week
  - Confirm assignment button: "Assign Mrs. Amara Nwosu to JSS2A Mathematics"
  - Assignment saved, table updates:
    - JSS2A | Mathematics | Mrs. Amara Nwosu | 3 classes | ✓ Confirmed

**[VOICEOVER]:**  
"The teacher-subject assignment interface shows your complete allocation. You can view by class (which subjects need teachers), by teacher (what does each teacher teach), or by subject (which classes need this subject).

To assign a teacher to a subject-class combination, click 'Assign Subject.' The system shows available teachers with their current workload. This helps you balance assignments - assigning to the less-loaded teacher spreads responsibility fairly.

You can view each teacher's profile: their qualifications, experience, and current load. Assign only qualified teachers to subjects. If Mrs. Amara Nwosu has a Mathematics degree and you're assigning Mathematics, great. If she's teaching a subject outside her expertise, the system flags it as a concern.

Confirm the assignment and the system updates your schedule immediately."

**[PRODUCTION NOTE]** Show complete assignment table. Display teacher selection with workload indicators. Show teacher profile with qualifications. Include confirmation of assignment.

---

## [02:00-03:10] Load Balancing & Conflict Resolution (70 sec)

**[VISUAL]**
- Load balancing feature:
  - Tool: "Analyze Workload"
  - Dashboard showing all teachers:
    - Teacher | Classes | Hours/Week | Load % | Status
    - Mr. Femi Adeyemi | 6 | 28 | 93% | High Load
    - Mrs. Nneka Obi | 5 | 25 | 83% | Optimal
    - Mrs. Grace Okonkwo | 4 | 20 | 67% | Optimal
    - Mrs. Amara Nwosu | 3 | 15 | 50% | Low Load
    - Dr. Chukwu Okoro | 7 | 35 | 117% | OVERLOADED ⚠️
  - Color-coded: Green (optimal 60-80%), Yellow (80-100%), Red (>100%)
  - Recommendation alert: "Dr. Chukwu is overloaded. Recommend reassigning 1-2 classes."
  - Action: "Rebalance Workload"
    - System suggests moving Dr. Chukwu's SSS2 Chemistry to Mrs. Grace Okonkwo
    - Reason: Mrs. Grace has capacity and is qualified
    - Preview: Dr. Chukwu: 6 classes (100%) | Mrs. Grace: 5 classes (84%)
    - Approve rebalancing
    - System updates all assignments

- Scheduling conflict detection:
  - Teacher assigned to two classes at same time
  - Scenario: Mr. Adeyemi assigned to:
    - JSS1A Mathematics (Mon-Fri, 8:00-9:00 AM)
    - JSS1B English (Mon-Fri, 8:00-9:00 AM)
  - System flags: "⚠️ Scheduling Conflict: Mr. Adeyemi cannot teach two classes simultaneously"
  - Options to resolve:
    - Reassign one class to different teacher
    - Change class time to avoid conflict
    - Display: "These classes meet at same time. You must change either teacher or schedule."
  - Click "Reassign Class"
    - JSS1B English reassigned to Mrs. Obi
    - Conflict resolved
    - System updates schedule

- Qualification mismatch detection:
  - Teacher without proper qualification assigned to subject
  - Scenario: Mr. Adeyemi (History qualification) assigned to Physics
  - Warning: "⚠️ Qualification Mismatch: Mr. Adeyemi has no Physics qualification"
  - Options:
    - Switch to qualified teacher
    - Accept assignment (with note that teacher will upskill)
    - Display caution flag in system

**[VOICEOVER]:**  
"4SCH monitors teacher workload automatically. The system shows each teacher's class count and hours per week. It calculates what percentage of maximum capacity they're using.

Optimal load is 60-80%. Too light and teachers aren't fully utilized. Too heavy and quality suffers and burnout risk increases.

If someone is overloaded, the system recommends rebalancing. Perhaps Dr. Chukwu has 7 classes at 117% capacity. The system might suggest moving one of his classes to a less-loaded teacher. You review the suggestion and approve the rebalancing. Assignments update automatically.

The system also detects scheduling conflicts. Can't have Mr. Adeyemi teaching JSS1A and JSS1B at the same time. You must either reassign one class or change the class schedule.

Similarly, qualification mismatches are flagged. If a teacher without Physics qualification is assigned to Physics, the system alerts you. You can override if you have a plan for that teacher to upskill, or you reassign to someone qualified."

**[ON-SCREEN TEXT]**
- "Workload Analysis: Dr. Chukwu 117% ⚠️"
- "Recommend: Reassign 1-2 Classes"
- "Schedule Conflict Detected"
- "Qualification Mismatch Alert"

---

## [03:10-04:15] Managing Changes & Mid-Year Adjustments (65 sec)

**[VISUAL]**
- Scenario: Teacher leaves mid-year or goes on leave
  - Current situation: Mrs. Obi teaches Mathematics to JSS2A
  - Mrs. Obi announces she's taking medical leave for 2 months
  - Navigate to Mrs. Obi's assignments
  - Button: "Reassign Due to Leave"
  - Option 1: "Temporary Reassignment" (2 months)
    - Select coverage teacher
    - Dropdown showing qualified Mathematics teachers available
    - Select: Mr. Tunde Adeniyi
    - Confirm: "Mr. Tunde Adeniyi will cover Mathematics for JSS2A from [date] to [date]"
    - Students notified: "Your Mathematics teacher is on leave. Mr. Tunde Adeniyi will teach the class."
    - Mrs. Obi's status: "On leave (2 months)" with return date shown
  - Option 2: "Permanent Reassignment" (if teacher is leaving)
    - Find new permanent teacher
    - Transition plan shown
    - New teacher given access to materials, previous assessments

- Add new teacher mid-year:
  - New teacher joins: Mr. Kingsley Eze (Physics)
  - Navigate to "Add New Teacher Assignment"
  - Form shows:
    - Teacher: Mr. Kingsley Eze (select from new teacher list)
    - Subject: Physics (from dropdown)
    - Classes to assign: Select classes needing Physics
      - JSS2C, SSS1B, SSS2A (3 classes available)
    - Load distribution: Automatically balanced
    - Start date: Date he joins
    - Confirmation message: "Mr. Kingsley assigned to 3 Physics classes, 15 hrs/week"
    - Student notifications sent
    - Timetable updated

- Change assignment during year:
  - Example: Reassign JSS3B Chemistry from Dr. Okoro to Mrs. Obi
  - Navigation: Select assignment, click "Change Teacher"
  - Confirmation dialog showing:
    - Current: Dr. Okoro (since Sept 2024)
    - New: Mrs. Obi (starting March 2024)
    - Reason: Load balancing / Teacher request / Other
    - Impact: "30 students in JSS3B will have new teacher"
    - Notification to students, parents, both teachers
  - Effective date: Choose when change takes effect
  - Historical record maintained: Teaching history shows both teachers

**[VOICEOVER]:**  
"Teachers leave, go on leave, or are reassigned. The system handles these changes smoothly.

If Mrs. Obi takes medical leave, you don't delete her assignment. Instead, mark it as temporary leave and assign a coverage teacher. Students know their regular teacher is on leave and who's covering. When Mrs. Obi returns, the system restores her assignments.

If a teacher leaves permanently, reassign their classes. New teachers who join mid-year are added to the system. Assign their classes, and students are notified. The timetable updates automatically.

Mid-year reassignments are tracked. If you move a class from one teacher to another, the system documents when the change happened and notes the reason. This history is valuable for evaluations and planning."

**[ON-SCREEN TEXT]**
- "Teacher Leave Management"
- "Temporary vs Permanent Reassignment"
- "New Teacher Integration"
- "Change History Maintained"

---

## [04:15-05:00] Reports & Verification (45 sec)

**[VISUAL]**
- Report generation:
  - Button: "Generate Assignment Report"
  - Report options:
    - "Teacher Schedule Report" (what each teacher teaches)
    - "Class Schedule Report" (which teachers are in each class)
    - "Subject Coverage Report" (all teachers per subject)
    - "Workload Analysis Report" (teacher load percentages)
  - Select "Class Schedule Report"
  - Report generated showing:
    - Class | Subject | Teacher | Qualification | Load
    - JSS1A | English | Mr. Femi Adeyemi | Qualified ✓ | 1/6
    - JSS1A | Mathematics | Mrs. Nneka Obi | Qualified ✓ | 1/5
    - (Complete timetable for all classes)
  - Export options: PDF / Excel
  - Print-friendly format
  - Can be shared with parents, posted on school notice board, or used for quality assurance

- Verification checklist:
  - Display: "Assignment Verification Checklist"
  - ✓ All classes have assigned teachers for all subjects
  - ✓ No scheduling conflicts exist
  - ✓ All teachers qualified for their assigned subjects
  - ✓ Workload is balanced (no teacher >100%)
  - ✓ Substitute coverage arranged for leaves
  - ✓ New teachers onboarded
  - Message: "All assignments verified. Ready for new academic year."

**[VOICEOVER]:**  
"Generate reports to verify your assignments are complete and correct. The class schedule report shows which teacher teaches each subject in each class - perfect for students and parents to understand their schedules.

The workload analysis report shows which teachers are overloaded or underloaded. The subject coverage report ensures all subjects are covered in all classes.

Before the academic year starts, run the verification checklist. Confirm all classes have teachers, schedules don't conflict, qualifications match subjects, and workload is balanced. When all boxes are checked, you're ready to go."

**[ON-SCREEN TEXT]**
- "Class Schedule Report Generated"
- "All Classes: Teachers Assigned ✓"
- "No Conflicts Detected ✓"
- "All Qualifications Match ✓"

---

## [05:00] CLOSING (instant end)

**[VOICEOVER]:**  
"That's teacher-subject assignment. Effective allocation, balanced workload, qualified teaching. Questions? Visit our support center."

---

## Production Notes

**Equipment & Settings:**
- Screen recording at 1080p minimum
- Show assignment table and forms clearly
- Zoom: 125-150% for table data and form fields
- Display realistic teacher and subject data

**Key Visual Elements:**
- Assignment management dashboard with class view
- Teacher selection dropdown with workload indicators
- Teacher profile display with qualifications
- Workload analysis with color-coded percentages
- Scheduling conflict warning
- Qualification mismatch alert
- Leave reassignment form
- New teacher assignment form
- Change history display
- Class schedule report
- Verification checklist

**Voiceover Specifications:**
- Clear, administrative tone
- Pace: 130-150 words per minute
- Emphasize balance, qualification, and effective allocation
- Focus on workflow and conflict resolution

**Timing Breakdown:**
- Introduction: 0:15
- Why Assignment Matters: 0:40
- Setting Up Assignments: 1:05
- Load Balancing: 1:10
- Managing Changes: 1:05
- Reports & Verification: 0:45
- **Total: 5 minutes**

**Content Checklist:**
- ✓ Show assignment management dashboard
- ✓ Display class view with all subjects
- ✓ Show teacher selection with workload
- ✓ Include teacher profile view
- ✓ Display workload analysis
- ✓ Show conflict detection
- ✓ Include qualification mismatch alert
- ✓ Show temporary leave reassignment
- ✓ Show new teacher assignment
- ✓ Display permanent reassignment
- ✓ Show change history
- ✓ Include report generation
- ✓ Display verification checklist

---

## SEO Metadata

**Title:** Teacher-Subject Assignment in 4SCH | Balanced Allocation & Scheduling (5 Min Tutorial)

**Meta Description:** Master teacher-subject assignment in 4SCH. Assign qualified teachers, balance workload, resolve conflicts, and manage mid-year changes. 5-minute tutorial for administrators.

**Keywords:**
- Teacher assignment
- Subject allocation
- Teacher scheduling
- Workload balancing
- Qualification matching
- Class assignment
- Academic management
- 4SCH assignment

**Tags:** #TeacherAssignment #Scheduling #AcademicManagement #Workload #4SCH #Tutorial #SchoolAdmin

**Video Description:**
Master teacher-subject assignment in 4SCH:
- Assign qualified teachers to subjects
- View assignments by class, teacher, or subject
- Analyze and balance teacher workload
- Detect and resolve scheduling conflicts
- Manage teacher leaves and mid-year changes
- Integrate new teachers
- Generate assignment reports
- Verify complete coverage

Perfect for academic coordinators and administrators. [Documentation and support]

