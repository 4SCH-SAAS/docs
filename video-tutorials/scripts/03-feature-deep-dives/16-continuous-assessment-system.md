# Continuous Assessment (CA) System

**Video Duration:** 12-14 minutes  
**Target Audience:** Administrators and Teachers  
**Difficulty Level:** Intermediate  
**Prerequisites:** Basic 4SCH login and understanding of Offline Exams

---

## Video Objectives

By the end of this video, viewers will be able to:

1. Understand what the Continuous Assessment (CA) system does
2. Configure CA types (CA1, CA2, etc.) with weightages on exams
3. Enter CA-specific marks (separate from final exam marks)
4. View CA breakdown in published results and PDF reports
5. Migrate legacy exams to the CA structure

---

## Script

### INTRO (0:00 - 0:45)

**[Screen: Animated graphic showing CA1 + CA2 + Exam = Term Total]**

**Narrator:**
"Welcome! In this tutorial, we'll explore one of the most powerful features added to 4SCH: the Continuous Assessment system — or CA for short. This system lets you break a term's evaluation into multiple components — CA1, CA2, and a final Exam — each with its own weightage. Together they form a complete picture of student performance. Let's dive in!"

---

### PART 1: WHY CA? (0:45 - 1:45)

**[Screen: Side-by-side comparison of old vs new system]**

**Narrator:**
"Traditional grading often relies on a single end-of-term exam. CA, by contrast, evaluates students continuously throughout the term."

**[Screen: Diagram - CA1 (20%) + CA2 (20%) + Exam (60%) = 100%]**

"You might have CA1 worth 20%, CA2 worth 20%, and the final Exam worth 60%. The system automatically calculates the weighted total, so a student who excelled in CAs but struggled in the exam still gets fair credit."

**[Screen: Real student example with breakdown]**

"For example, a student who scored 18 out of 20 on CA1, 16 out of 20 on CA2, and 44 out of 60 on the final Exam ends up with a total of 78 out of 100 — a B+ grade — calculated automatically with the proper weightings."

---

### PART 2: CONFIGURING CA (For Admins) (1:45 - 4:30)

#### Step 1: Navigate to the Exam

**[Screen: Login → Exams → Manage Exam]**

**Narrator:**
"To configure CA, first navigate to **Exams → Manage Exam**. Select the exam you want to add CA to, or create a new one."

#### Step 2: Open CA Configuration

**[Screen: Click "Configure CA" button on exam row]**

"Each exam now has a **Configure CA** button. Click it to open the configuration modal."

#### Step 3: Add CA Types

**[Screen: CA modal with CA1, CA2, Exam rows]**

"In the modal, you'll see a table where you can add CA types. The system supports CA1 through CA5, plus the final Exam component."

**[Screen: Filling in weightages]**

"Set the weightage for each CA type. For a typical setup, you might have CA1 at 20%, CA2 at 20%, and the Exam at 60%. The total must equal 100% — the system validates this in real-time."

**[Screen: Validation indicator showing "Total: 100% ✓"]**

#### Step 4: Save Configuration

**[Screen: Click Save button]**

"Click **Save**. The system stores the CA structure for this exam. From now on, when teachers enter marks, they'll see a CA Type selector."

:::tip Note for Mixed Exams
You don't have to add all CA types. A simple exam could have just CA1 (40%) + Exam (60%). The system is flexible.
:::

---

### PART 3: ENTERING CA MARKS (For Teachers) (4:30 - 7:30)

#### On the Web Portal

**[Screen: Teacher dashboard → Exams → Manage Exam Marks]**

**Narrator:**
"Teachers, when entering marks for a CA-configured exam, the process gets a little smarter. Go to **Exams → Manage Exam Marks**."

**[Screen: Filter selection — Class, Exam, Subject, Status]**

"Select the class, exam, and subject. You'll notice a new dropdown: **Assessment Type**."

**[Screen: Assessment Type dropdown showing CA1 (20%) - 20 marks]**

"This dropdown lets you choose which CA component you're entering marks for. Select CA1 to enter CA1 marks for all students."

**[Screen: Click Search button → marks table appears]**

"Click **Search**. The marks table loads with the correct **Total Marks** for the selected CA type — in this case, 20 marks for CA1."

**[Screen: Teacher entering marks 16, 18, 15, 17 for different students]**

"Enter marks for each student. Validation prevents you from entering more than the CA's maximum."

**[Screen: Save as Draft / Submit buttons]**

"Choose **Save as Draft** if you're not finished, or **Submit** to publish."

**[Screen: Switch dropdown to CA2 → table reloads with CA2 marks]**

"Need to enter CA2 marks? Just switch the Assessment Type dropdown. The table reloads with empty fields (since CA2 hasn't been entered yet). CA1 marks remain safely stored — switching doesn't affect them."

#### On the Mobile App

**[Screen: Teacher mobile app → Academics → Offline Exam Result]**

"Teachers can also enter CA marks from the mobile app. Open the Teacher Staff app, go to **Academics → Offline Exam Result**, and select your class and exam."

**[Screen: Mobile CA dropdown appearing]**

"When the exam has CA configured, the same Assessment Type dropdown appears. Select CA1, enter marks for each student, and tap **Submit & Publish**. It's that simple!"

---

### PART 4: VIEWING CA RESULTS (7:30 - 10:00)

#### Web Result View

**[Screen: Login as student → Results page]**

**Narrator:**
"When students or parents view a published result, they see the aggregate at first."

**[Screen: Subject row showing Mathematics 78/100, Grade B+]**

"For each subject, the overall score and grade are shown. But there's a new feature."

**[Screen: Click "View CA Breakdown" link]**

"Click **View CA Breakdown** to expand the detail."

**[Screen: Expanded breakdown showing CA1, CA2, Exam with progress bars]**

"Now you see the complete picture — CA1 18/20, CA2 16/20, Exam 44/60, with progress bars color-coded by performance. Green for excellent, blue for good, orange for average, red for needs improvement."

#### Mobile Result View

**[Screen: Parent app → Tap result → View CA Breakdown]**

"Parents using the mobile app see the same expandable breakdown. Tap **View CA Breakdown** on any subject card to see the detail."

#### PDF Report Cards

**[Screen: Download Result PDF button → PDF opens]**

"PDF report cards include the full CA breakdown by default. The report shows each CA component, the weighted contribution, and the final term total with grade."

---

### PART 5: MIGRATING LEGACY EXAMS (10:00 - 11:30)

**[Screen: Terminal window]**

**Narrator:**
"What about exams created before the CA system was added? 4SCH includes a one-time migration command. Run it from the server command line:"

**[Screen: Command typed out]**

```bash
# Preview what will change (safe dry-run)
php artisan exams:migrate-to-ca --school=1

# Execute when ready
php artisan exams:migrate-to-ca --execute --add-ca-config --school=1
```

**[Screen: Migration output showing exams processed]**

"The command:
- Adds default CA configuration (CA1=20%, CA2=20%, Exam=60%)  
- Proportionally adjusts existing marks to the new totals
- Normalizes legacy data for full feature support

After running it, your old exams gain full CA capabilities."

:::tip
You can also run `php artisan exams:rescale-marks --execute --school=1` and `php artisan exams:resync-results --execute --school=1` if marks display incorrectly after configuration changes.
:::

---

### PART 6: BEST PRACTICES (11:30 - 12:30)

**[Screen: Checklist graphic]**

**Narrator:**
"A few tips for CA success:"

1. **Plan your weightages early.** Communicate to teachers and students at the start of term so everyone understands how grades are calculated.

2. **Use consistent CA structures across subjects** — same weightages for all subjects in a class makes comparisons fair.

3. **Enter marks promptly after each assessment.** Don't wait until the end of term — that defeats the purpose of *continuous* assessment.

4. **Review the CA breakdown** in results before publishing — catch any data entry errors early.

5. **Train teachers on the mobile app** — many find mobile entry faster than web for small classes.

---

### OUTRO (12:30 - 13:00)

**[Screen: Summary graphic]**

**Narrator:**
"That's the Continuous Assessment system in 4SCH! It gives you:

- ✅ Flexible CA configuration per exam
- ✅ Separate mark entry for each component  
- ✅ Automatic weighted calculation
- ✅ Beautiful breakdown views for students and parents
- ✅ Full mobile app support

If you have questions, check the [Continuous Assessment Guide](/guides/continuous-assessment) in our documentation. Happy teaching!"

---

## Production Notes

- **Visuals:** Use the demo school's existing CA-configured exam (e.g., 2nd Term Exam) for live screen recordings
- **Lower thirds:** Display key terms (CA1, CA2, weightage, term total) as on-screen text
- **Color coding:** Match the actual UI colors for performance (green/blue/orange/red)
- **Mobile recordings:** Use screen mirroring from a connected Android device for mobile sections

## Related Resources

- [Continuous Assessment Guide](/guides/continuous-assessment)
- [CA on Mobile Apps](/guides/continuous-assessment-mobile)
- [Video 13: Offline Exams Admin & Teacher Guide](./13-offline-exams-admin-teacher-guide.md)
- [Video 03 (Feature Focused): Report Card Generation](../05-feature-focused/03-report-card-generation.md)
