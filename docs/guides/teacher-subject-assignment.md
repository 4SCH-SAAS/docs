---
id: teacher-subject-assignment
title: Teacher-Subject Assignment Guide
sidebar_label: Teacher-Subject Assignment
---

# Teacher-Subject Assignment Guide

**Roles:** School Admin

Teacher-Subject Assignment is a critical setup step that determines which teachers teach which subjects to which classes. Proper assignment ensures that teachers see only their relevant classes and students in attendance, assignments, exams, and grading workflows.

:::info Prerequisites
Before assigning teachers to subjects, ensure you have:
- Created session years
- Set up classes with sections
- Assigned subjects to classes (core and elective)
- Added teacher accounts
:::

---

## Overview

The system uses a flexible assignment model where:

1. **Subjects are assigned to Classes** first (compulsory/core and elective subjects)
2. **Teachers are then assigned to specific Class-Section-Subject combinations**
3. **Teachers can teach multiple subjects across multiple classes**
4. **Multiple teachers can teach the same subject** to different sections

This structure supports:
- Subject specialists teaching their subject across multiple classes
- Class teachers teaching multiple subjects to their own class
- Team teaching scenarios (multiple teachers for one subject)
- Flexible scheduling and substitutions

---

## Understanding the Assignment Structure

### Class Subject Hierarchy

```
Class (e.g., "Grade 10")
  ├── Section A
  │     ├── Mathematics (Core) → Teacher: Mr. Obi
  │     ├── English (Core) → Teacher: Mrs. Adeyemi  
  │     └── Physics (Elective) → Teacher: Dr. Eze
  │
  └── Section B
        ├── Mathematics (Core) → Teacher: Mr. Obi (same teacher, different section)
        ├── English (Core) → Teacher: Miss Bello (different teacher)
        └── Chemistry (Elective) → Teacher: Dr. Eze
```

### Key Components

**Class Subject** (`class_subjects` table)
- Links a Subject to a Class
- Specifies if it's Core (compulsory) or Elective (optional)
- Can be semester-specific (if your school uses semesters)

**Subject Teacher** (`subject_teachers` table)
- Links a Teacher to a specific Class-Section-Subject combination
- This is what controls:
  - What subjects appear on teacher's dashboard
  - Which students they can mark attendance for
  - Which assignments/exams they can create and grade

---

## Step 1: Assign Subjects to Classes

Before assigning teachers, you must define which subjects are taught in each class.

### Assigning Core Subjects

**Core subjects** are compulsory for all students in the class.

**Steps:**
1. Go to **Academics → Class Subject**
2. Find the class you want to configure
3. Click **Edit** (pencil icon)
4. In the **Core Subjects** section:
   - Click **Add Core Subject** button
   - Select the subject from the dropdown
   - If using semesters, select which semester this subject is taught in
   - Click **Add** to add another core subject
   - Repeat for all compulsory subjects
5. Click **Submit**

**Example Core Subjects for Grade 9:**
- Mathematics
- English Language
- Basic Science
- Social Studies
- Civic Education

### Assigning Elective Subjects

**Elective subjects** give students a choice. Students must select a specified number from each group.

**Steps:**
1. In the same **Edit Class Subject** screen, scroll to **Elective Subjects** section
2. Click **Add Elective Subject Group** button
3. For each group:
   - If using semesters, select the semester
   - Click **Add Subject** (+) to add subjects to this group
   - Select subjects from the dropdown
   - Click **Add** again to add more subjects to the same group
   - Set **Total Selectable Subjects** (how many students must choose from this group)
4. Create additional groups if needed (e.g., one for sciences, one for languages)
5. Click **Submit**

**Example Elective Subject Groups for SS1:**

**Group 1: Sciences** (Select 2)
- Physics
- Chemistry
- Biology

**Group 2: Social Sciences** (Select 1)
- Geography  
- Economics
- Government

:::tip Subject Types
When creating subjects (under **Academics → Subjects**), you define the subject type (Theory, Practical, etc.). This helps differentiate subjects with similar names.
:::

---

## Step 2: Assign Teachers to Subjects

After subjects are assigned to classes, you assign specific teachers to teach those subjects.

:::info Where to Assign Teachers
Teacher-subject assignments are typically managed through:
- **Staff/Teacher management interface**
- **Class-Subject details view**
- **Timetable creation** (which may auto-create assignments)

The exact interface location depends on your system version. Common paths include:
- **Staff → Teachers → [Edit Teacher] → Assign Subjects**
- **Academics → Class Subject → [View Class] → Assign Teachers**
- **Academics → Timetable → [Create Timetable]** (creates subject-teacher links)
:::

### Assignment Methods

#### Method 1: During Teacher Creation/Editing

When adding or editing a teacher:

1. Go to **Staff → Teachers**
2. Click **Add Teacher** (or **Edit** for existing teacher)
3. Fill in personal and employment details
4. In the **Subject Assignment** section:
   - Select the **Class** the teacher will teach
   - Select the **Section** (or select all sections if teaching multiple)
   - Select the **Subject(s)** they will teach in that class
   - Click **Add Assignment** if teacher teaches other classes/subjects
   - Repeat for all class-section-subject combinations
5. Click **Submit**

**Example Assignment:**
```
Teacher: Mr. Obi Emmanuel
├── Class 9A → Mathematics
├── Class 9B → Mathematics  
├── Class 10A → Mathematics
└── Class 10A → Further Mathematics
```

#### Method 2: Bulk Assignment via Timetable

Creating a timetable automatically establishes teacher-subject assignments:

1. Go to **Academics → Timetable**
2. Select Class and Section
3. For each period in the timetable:
   - Select the Subject
   - Select the Teacher for that subject
   - Select the Day and Period timing
4. Click **Submit**

**Benefits:**
- Assigns teachers while setting up the schedule
- Ensures only assigned teachers can access the class-subject
- Teachers see their schedule immediately

:::tip Timetable-Based Assignment
If you create your timetable first, teacher-subject assignments may be created automatically. You can then modify assignments separately if needed.
:::

#### Method 3: Direct Class-Subject Management

Some installations allow direct management:

1. Go to **Academics → Class Subject**
2. Click the **eye icon** or **View Details** for a class
3. You'll see a list of all subjects for that class
4. For each subject, assign teachers by:
   - Clicking **Assign Teacher**
   - Selecting the teacher from dropdown
   - Selecting which section(s) they teach
   - Clicking **Save**

---

## Step 3: Verify Teacher Assignments

After assigning teachers, verify that assignments are correct.

### View Teacher's Assigned Subjects

**Option 1: Teacher List View**

1. Go to **Staff → Teachers**
2. In the teacher list, you should see a column showing assigned classes/subjects
3. Or click **View Details** on a specific teacher to see their full assignment

**Option 2: Teacher Reports**

1. Go to **Reports → Teacher Reports**
2. Select a teacher
3. View the **Assigned Class-Subject Report** tab
4. This shows:
   - Classes the teacher is assigned to
   - Sections within each class
   - Subjects they teach in each section

**What you'll see:**
```
Class Teacher Of:
- Class 9A (Science Stream)

Teaching Overview:
┌────────┬─────────┬────────┬────────┬───────────────────────────┐
│ Class  │ Section │ Medium │ Stream │ Subjects                  │
├────────┼─────────┼────────┼────────┼───────────────────────────┤
│ 9      │ A       │ English│ Science│ Mathematics, Physics      │
│ 9      │ B       │ English│ Science│ Mathematics               │
│ 10     │ A       │ English│ Science│ Mathematics, Further Maths│
└────────┴─────────┴────────┴────────┴───────────────────────────┘
```

### Verify from Teacher's Perspective

Ask the teacher to log in and check:

1. **Dashboard** - They should see their assigned classes
2. **Attendance** - Only their classes/subjects appear in the dropdown
3. **Assignments** - They can only create assignments for assigned subjects
4. **Exams** - They can only enter marks for subjects they teach

**If a teacher cannot see expected classes:**
- Verify the subject is assigned to the class
- Check teacher-subject assignment exists
- Ensure class section exists
- Check teacher's role has required permissions

---

## Managing Teacher Assignments

### Editing Teacher Assignments

**To modify a teacher's subjects:**

1. Go to **Staff → Teachers**
2. Click **Edit** on the teacher
3. In the subject assignment section:
   - Remove subjects by clicking the **delete/remove** button
   - Add new subjects by selecting class-section-subject and clicking **Add**
4. Click **Submit**

**Changes take effect immediately:**
- Teacher's dashboard updates
- Access to class attendance, assignments, and exams adjusts accordingly

### Handling Mid-Year Teacher Changes

**Scenario: A teacher leaves and needs to be replaced**

**Step 1: Identify Assignments**
1. View the departing teacher's assigned classes/subjects
2. Note all class-section-subject combinations

**Step 2: Reassign to New Teacher**
1. Edit the new teacher's profile
2. Add all the class-section-subject assignments from step 1
3. Submit changes

**Step 3: Remove Old Teacher** (Optional)
1. Edit the departing teacher
2. Remove subject assignments (or deactivate their account)
3. This prevents them from accessing student data

**What happens to existing data:**
- Attendance marked by the old teacher remains (historical record)
- Assignments created by old teacher remain (with creator's name)
- Going forward, new teacher can manage the class

:::caution Data Ownership
Past records (attendance, assignment submissions, grades) remain attributed to the original teacher who created them. The new teacher takes over ongoing management.
:::

### Assigning Substitute/Relief Teachers

**For temporary coverage:**

1. Go to **Staff → Teachers → [Edit Substitute Teacher]**
2. Add the class-section-subject assignment temporarily
3. After the regular teacher returns:
   - Edit substitute teacher and remove the assignment
   - Verify regular teacher still has the assignment

**Alternative: Temporary Assignment**
- Some schools add notes in the timetable or announcements
- The substitute uses their own login but doesn't have formal subject assignment
- Admin manually grants temporary access if needed

---

## Common Assignment Scenarios

### Scenario 1: Subject Specialist Across Multiple Classes

**Example:** Mr. Obi teaches Mathematics to all grade 9 and 10 classes

**Setup:**
1. Edit Mr. Obi's teacher profile
2. Assign:
   - Class 9, Section A, Subject: Mathematics
   - Class 9, Section B, Subject: Mathematics
   - Class 10, Section A, Subject: Mathematics
   - Class 10, Section B, Subject: Mathematics

**Result:**
- Mr. Obi sees all 4 classes on his dashboard
- He can mark attendance, create assignments, and grade for all of them

### Scenario 2: Class Teacher Teaching Multiple Subjects

**Example:** Mrs. Adeyemi is Class Teacher for Class 5A and teaches them 5 subjects

**Setup:**
1. Assign Mrs. Adeyemi as Class Teacher for Class 5A (if using Class Teacher feature)
2. Assign subjects:
   - Class 5, Section A, Subject: English
   - Class 5, Section A, Subject: Mathematics
   - Class 5, Section A, Subject: Social Studies
   - Class 5, Section A, Subject: Basic Science
   - Class 5, Section A, Subject: Civic Education

**Result:**
- Mrs. Adeyemi is marked as Class Teacher (special designation)
- She can manage all 5 subjects for her class
- She sees her class prominently on the dashboard

### Scenario 3: Team Teaching (Multiple Teachers, One Subject)

**Example:** Physics for SS3 is taught by 2 teachers (theory and practical)

**Setup:**
1. Create two separate subjects:
   - "Physics - Theory"
   - "Physics - Practical"
2. Assign:
   - Dr. Eze → Class SS3, Section A, Subject: Physics - Theory
   - Mr. Chukwu → Class SS3, Section A, Subject: Physics - Practical

**Result:**
- Both teachers see SS3A in their dashboard
- Each manages their specific aspect (theory vs practical)
- Report cards can show separate grades for theory and practical

### Scenario 4: Elective Subjects with Different Teachers

**Example:** SS1 students choose between Physics, Chemistry, or Biology (only one)

**Setup:**
1. Create Elective Subject Group for SS1:
   - Physics
   - Chemistry
   - Biology
   - Total Selectable: 1
2. Assign teachers:
   - Dr. Eze → SS1, All Sections, Subject: Physics
   - Mrs. Okafor → SS1, All Sections, Subject: Chemistry
   - Mr. Adeleke → SS1, All Sections, Subject: Biology

**Result:**
- Each teacher sees only students who selected their subject
- Attendance and assignments are subject-specific
- Students appear in only one teacher's class for this elective

---

## Permissions & Access Control

### Required Permissions

**For Admins (to assign teachers):**
- `teacher-create` or `teacher-edit` - Modify teacher profiles
- `class-subject-edit` - Edit class-subject assignments
- `timetable-create` - Create timetables (if using timetable-based assignment)

**For Teachers (to view assignments):**
- Teachers automatically see their assigned classes
- No special permission needed to view assignments
- Permissions for marking attendance, creating assignments, etc. are separate

### What Teacher-Subject Assignment Controls

**Grants Access To:**
- ✅ View specific class-section's student list
- ✅ Mark attendance for that class-subject
- ✅ Create assignments for that subject
- ✅ Create lessons and study materials
- ✅ Enter exam marks for that subject
- ✅ View student performance in that subject
- ✅ Message students/parents of that class

**Does NOT Grant:**
- ❌ Administrative functions (fee management, user creation, etc.)
- ❌ Access to other teachers' classes
- ❌ Ability to modify class structure or subjects
- ❌ Access to school-wide reports (unless given separate permission)

---

## Best Practices

### Assignment Planning

**Do This:**
- ✅ Assign subjects to classes before the session year starts
- ✅ Complete teacher-subject assignments before first day of school
- ✅ Use consistent naming (e.g., "Mathematics" not "Maths" in some places)
- ✅ Document assignments in a spreadsheet for reference
- ✅ Verify assignments by having teachers log in and confirm they see correct classes

**Avoid This:**
- ❌ Changing teacher assignments mid-term (creates confusion)
- ❌ Leaving subjects unassigned (no one can teach them)
- ❌ Assigning teachers to subjects they're not qualified for
- ❌ Forgetting to assign elective subject teachers

### Naming Conventions

**Subject Names:**
- Use full names: "Mathematics" not "Math" or "Maths"
- Include type when relevant: "Physics - Theory" vs "Physics - Practical"
- Be consistent across all classes

**Class Names:**
- Use standard format: "Grade 9" or "Class 9" or "SS1" consistently
- Include stream if applicable: "Class 9 - Science Stream"

### Assignment Documentation

**Maintain Records:**
1. Create a spreadsheet showing:
   - Teacher Name
   - Classes Taught
   - Subjects Taught
   - Number of Periods per Week (from timetable)
2. Update when changes occur
3. Use for planning teacher workload and scheduling

**Example:**
```
Teacher         | Classes   | Subjects              | Periods/Week
----------------|-----------|----------------------|-------------
Mr. Obi         | 9A, 9B,   | Mathematics          | 20
                | 10A, 10B  |                      |
Mrs. Adeyemi    | 5A        | English, Maths,      | 25
                |           | Social Studies, etc. |
Dr. Eze         | SS2, SS3  | Physics, Chemistry   | 18
```

### Semester-Based Schools

If your school uses semesters:

**Planning:**
- Assign subjects with semester specification
- Some subjects may be Semester 1 only, others Semester 2 only, others full year
- Teachers may teach different subjects in different semesters

**Example:**
```
Semester 1:
- Dr. Eze → SS2A → Physics

Semester 2:
- Dr. Eze → SS2A → Chemistry
```

**Switching Semesters:**
- At the start of a new semester, verify all subject assignments are correct
- Teachers may need new assignments added and old ones removed
- Test teacher dashboard to ensure they see current semester subjects only

---

## Troubleshooting

### "Teacher Cannot See Their Class"

**Problem:** A teacher logs in but doesn't see the expected class on their dashboard.

**Solutions:**
1. **Verify subject is assigned to the class:**
   - Go to **Academics → Class Subject**
   - Ensure the subject exists for that class
2. **Check teacher-subject assignment:**
   - Go to **Staff → Teachers → [Teacher] → Edit**
   - Verify class-section-subject assignment exists
3. **Check session year:**
   - Ensure the current session year is active
   - Subject assignments may be tied to specific session years
4. **Verify teacher role:**
   - Teacher must have "Teacher" role assigned
   - Check in **Staff → Teachers → [Teacher]** role field
5. **Check class section exists:**
   - The section (e.g., "Section A") must exist for that class
   - Verify in **Academics → Class Section**

### "Teacher Sees Too Many Classes"

**Problem:** Teacher has access to classes they shouldn't be teaching.

**Solution:**
1. Edit the teacher's profile
2. Review all subject assignments
3. Remove incorrect assignments
4. Verify by asking teacher to refresh their dashboard

### "Cannot Assign Teacher to Elective Subject"

**Problem:** When trying to assign a teacher to an elective subject, it doesn't appear or save.

**Solution:**
1. Ensure the elective subject is properly added to the class:
   - Go to **Academics → Class Subject → Edit**
   - Check elective subject groups
   - Ensure subject is in a group with selectable subjects set
2. Verify the subject exists in the system:
   - **Academics → Subjects** should list it
3. Check that subject medium matches class medium:
   - Subject medium must match the class medium
4. Try assigning via timetable:
   - Creating a timetable entry may establish the link

### "Students Don't See Teacher's Subject"

**Problem:** Students can't see assignments or lessons from a teacher.

**Solutions:**
1. **Verify teacher-subject assignment** (see above)
2. **Check student enrollment:**
   - Students must be enrolled in the class-section
   - For elective subjects, students must have selected that elective
3. **Check subject visibility settings:**
   - Some systems allow hiding subjects; ensure not hidden
4. **Verify session year:**
   - Teacher and students must be in the same active session year

### "Multiple Teachers for Same Subject-Class"

**Problem:** Two teachers are both assigned to Class 9A Mathematics.

**This may be intentional:**
- Team teaching scenario
- One teacher for theory, another for practical
- Substitute teacher added temporarily

**If unintentional:**
1. Decide which teacher should have the assignment
2. Edit the other teacher and remove that assignment
3. Or split sections: Teacher A → Section A, Teacher B → Section B

**System behavior with multiple teachers:**
- Both can mark attendance (may cause confusion)
- Both can create assignments
- Students see combined view (may see duplicate content)
- **Recommended:** Coordinate between teachers or separate assignments clearly

---

## Related Features

- **[School Admin Guide](school-admin.md#academic-management)** - Setting up classes, subjects, and academic structure
- **[Teacher Guide](teachers.md)** - What teachers see and do with their assigned classes
- **[Timetable Management](school-admin.md)** - Creating timetables which may auto-assign teachers
- **[Attendance Reports](attendance-reports.md)** - Viewing attendance by teacher and subject

---

## Summary Checklist

**Before Session Year Starts:**
- ✅ Create all classes with sections
- ✅ Assign core subjects to each class
- ✅ Set up elective subject groups (if applicable)
- ✅ Create teacher accounts
- ✅ Assign teachers to class-section-subject combinations
- ✅ Create timetable (may auto-assign teachers)
- ✅ Verify all subjects have at least one teacher assigned
- ✅ Have teachers log in and confirm they see correct classes

**During the Year:**
- ✅ When a teacher joins, assign their subjects immediately
- ✅ When a teacher leaves, reassign their classes to others
- ✅ For substitute teachers, grant temporary access and remove when done
- ✅ If adding a new subject mid-year, assign a teacher right away

**End of Year:**
- ✅ Review teacher assignments for next year
- ✅ Adjust based on teacher availability and subject expertise
- ✅ Plan for new classes or subject changes
- ✅ Re-assign teachers in the new session year

---

Proper teacher-subject assignment is the foundation for smooth daily operations. Teachers depend on it to access their classes, students depend on it to see their subjects, and the entire academic workflow depends on accurate assignments. Take time to set it up correctly! 👩‍🏫📚
