---
id: session-year-calendar
title: Session Year & Academic Calendar Setup
description: Complete guide to setting up academic sessions, terms/semesters, and managing the academic calendar in 4SCH. Learn best practices for session planning and year-end transitions.
keywords: [academic session, school year, session setup, term management, semester system, academic calendar, session year, school calendar, Nigerian school terms]
sidebar_position: 18
---

import Link from '@docusaurus/Link';

# Session Year & Academic Calendar Setup

The academic session (school year) is the foundation of your school's data structure. Everything in the system—enrollments, fees, exams, attendance—is tied to a specific session. Proper session setup and management ensures smooth school operations throughout the year.

:::info Who Should Read This?
- **School Administrators** - Set up and manage academic sessions
- **IT Administrators** - Understand session architecture for system configuration
- **Accountants** - Session context for financial reporting
:::

---

## Understanding Academic Sessions

### What is an Academic Session?

An **academic session** (or school year) represents one complete cycle of the academic calendar, typically:
- **Duration:** 9-12 months
- **Structure:** Divided into terms (Nigeria) or semesters (other countries)
- **Format:** Named as "2024/2025" or "2024-2025"

### Why Sessions Matter

Every major record in the system is linked to a session:
- Student enrollments and class assignments
- Fee structures and invoices
- Exam schedules and results
- Attendance records
- Timetables
- Academic reports

:::tip Session Planning Best Practice
Set up your next session **at least 2-3 weeks before** the current one ends. This allows time for:
- Student promotions to next classes
- Fee structure configuration
- Timetable preparation
- Staff assignments review
:::

---

## Session Structure

### Common Structures

**Nigerian Schools (3-Term System):**
```
Session: 2024/2025
├── First Term: September 2024 - December 2024
├── Second Term: January 2025 - March 2025
└── Third Term: April 2025 - July 2025
```

**Semester System:**
```
Session: 2024/2025
├── First Semester: September 2024 - January 2025
└── Second Semester: February 2025 - June 2025
```

**Quarter System:**
```
Session: 2024/2025
├── Q1: September - November 2024
├── Q2: December 2024 - February 2025
├── Q3: March - May 2025
└── Q4: June - August 2025
```

:::warning Important
Choose your structure carefully! Changing term/semester structure mid-session causes data complications. Plan before the session starts.
:::

---

## Creating a New Academic Session

### Step 1: Access Session Management

1. Log in as **Admin**
2. Navigate to **Settings** → **Session Years** or **Academic Sessions**
3. Click **Add New Session** or **Create Session**

### Step 2: Enter Session Details

**Session Name:**
```
Format: YYYY/YYYY or YYYY-YYYY
Examples:
✅ "2024/2025"
✅ "2024-2025"
✅ "Academic Year 2024/2025"

❌ "2024" (incomplete)
❌ "Next Session" (not specific)
```

**Start Date:**
- When does the session begin?
- Example: September 9, 2024
- Usually aligns with first term/semester start

**End Date:**
- When does the session conclude?
- Example: July 25, 2025
- Usually aligns with last term/semester end

**Default/Current Session:**
- ✅ Check this box if it's the active session
- ⚠️ Only ONE session can be default at a time
- System automatically switches when you mark a new one

:::tip Naming Convention
Use consistent naming across years:
- "2023/2024", "2024/2025", "2025/2026" ✅
- Avoid: "2023-24", "24/25" (inconsistent, harder to sort)
:::

### Step 3: Save Session

1. Review all details
2. Click **Save** or **Create Session**
3. Session is created but terms/semesters are empty
4. Proceed to add terms/semesters

---

## Adding Terms/Semesters

### For Each Term/Semester

**Term Name:**
```
Examples (Nigerian 3-Term):
- "First Term"
- "Second Term"  
- "Third Term"

Examples (Semester System):
- "First Semester"
- "Second Semester"

Examples (Custom):
- "Fall Term"
- "Spring Term"
- "Summer Term"
```

**Start Date:**
- When does this term/semester begin?
- Include any pre-term activities if applicable

**End Date:**
- When does it conclude?
- Account for exams and result processing time

**Current Term:**
- ✅ Check for the active term
- Only ONE term can be current
- Students see assignments/exams from current term

:::tip Term Dates Planning
**Include buffer periods:**
- Start date: 1-2 days before actual classes (for registration)
- End date: Through result publication, not just last day of class
- Leave 1-2 week breaks between terms for admin tasks
:::

### Example: Complete Session Setup

**Session: 2024/2025**

| Term | Start Date | End Date | School Days |
|------|------------|----------|-------------|
| First Term | Sept 9, 2024 | Dec 20, 2024 | ~70 days |
| Second Term | Jan 6, 2025 | April 11, 2025 | ~65 days |
| Third Term | April 28, 2025 | July 25, 2025 | ~65 days |

**Total:** ~200 school days (typical for Nigerian schools)

---

## Managing the Current/Active Session

### What "Current Session" Means

The **current (default) session** is what users see by default:
- Students: See their current class, assignments, results
- Teachers: Mark attendance, create assignments for current session
- Parents: View current fees, academic progress
- Reports: Default to current session data

### Switching to a New Session

**When to Switch:**
- At the start of a new academic year
- After completing student promotions
- When previous session is fully closed

**How to Switch:**
1. Go to **Session Years** management
2. Find the new session (e.g., 2025/2026)
3. Click **Edit**
4. Check **"Set as Default"** or **"Current Session"**
5. Save

**What Happens:**
- Previous session unmarked as default (automatically)
- New session becomes active across the system
- Users now see new session by default

:::warning Before Switching Sessions
Complete these tasks in the old session:
- ✅ All exam results published
- ✅ Report cards generated and distributed
- ✅ Fee balances settled or documented
- ✅ Student promotions processed
- ✅ Data backup taken

**Don't rush!** Take 1-2 weeks post-session to finalize everything.
:::

---

## Academic Calendar Best Practices

### Planning Your Calendar

**Factor in:**

**1. Public Holidays**
- National holidays (Independence Day, Christmas, Eid, etc.)
- State/local holidays
- School-specific observances

**2. Exam Periods**
- Internal mid-term exams
- End-of-term exams
- External exams (WAEC, NECO, JAMB)
- Result processing time (1-2 weeks)

**3. School Events**
- Inter-house sports
- Cultural day/week
- Prize giving day
- PTA meetings
- Open house/prospective parent days

**4. Break Periods**
- Mid-term breaks (if applicable)
- Term breaks
- Public holiday clusters

:::tip Calendar Template
Create a master calendar template that you reuse yearly:
- Copy previous year's structure
- Adjust dates for new year
- Add new events/changes
- Review with academic committee
- Publish to staff 2 months before session starts
:::

### Sample Academic Calendar (Nigerian School)

**First Term 2024/2025**
- Sept 9: Resumption
- Sept 16: PTA Meeting
- Oct 1: Independence Day (holiday)
- Oct 21-25: Mid-term break
- Nov 18-22: End of term exams
- Dec 2-6: Sports week
- Dec 16: Prize giving day
- Dec 20: Term ends

**Second Term 2024/2025**
- Jan 6: Resumption
- Jan 20-24: Mid-term break
- March 3-7: End of term exams
- March 24-28: Cultural week
- April 11: Term ends

**Third Term 2024/2025**
- April 28: Resumption
- May 19-23: Mid-term break
- June 16-27: WAEC/NECO (for SS3)
- July 7-11: End of term exams
- July 21: Prize giving & graduation
- July 25: Term ends

---

## Session Year Transitions

### End-of-Session Checklist

**4-6 Weeks Before Session Ends:**
- [ ] Create next session in system
- [ ] Set up terms/semesters for next session
- [ ] Configure fee structures for next session
- [ ] Plan student promotion criteria

**2-3 Weeks Before Session Ends:**
- [ ] Finalize all exam results
- [ ] Generate report cards
- [ ] Process student promotions/demotions
- [ ] Archive important documents

**Last Week of Session:**
- [ ] Settle all fee balances or document outstanding
- [ ] Backup all session data
- [ ] Generate end-of-session reports
- [ ] Communicate next session dates to parents

**After Session Ends:**
- [ ] Review session performance metrics
- [ ] Archive old session (mark as closed)
- [ ] Switch to new session as default
- [ ] Open new session for enrollments

:::tip Session Closure Best Practice
Never delete old sessions! Archive them instead:
- Historical data remains accessible
- Reports can still be generated
- Auditing and compliance preserved
- Parents can view past records
:::

### Student Promotion Process

**Workflow:**
1. **Finalize Current Session Results**
   - All exams graded
   - Results approved and published

2. **Determine Promotion Criteria**
   - Based on exam performance
   - Attendance requirements
   - Conduct assessment

3. **Bulk Promote Students**
   - Use system's promotion feature
   - Move JSS 1 → JSS 2, JSS 2 → JSS 3, etc.
   - Handle repeaters separately

4. **Manual Adjustments**
   - Demote students who didn't meet criteria
   - Promote exceptional cases
   - Handle graduations (leaving students)

5. **Verify Promotions**
   - Check class enrollment numbers
   - Ensure no students missed
   - Confirm graduation list

:::warning Promotion Timing
**DO:** Promote students during the break between sessions
**DON'T:** Promote mid-session or while current session is active

**Why?** Prevents data conflicts and confusion.
:::

---

## Multi-Session Management

### Viewing Historical Sessions

**Access past session data:**
1. Most reports have a "Session" filter
2. Select the session year you want
3. View data from that specific session

**Use cases:**
- Generate previous year's reports
- Compare year-over-year performance
- Retrieve old student records
- Audit historical fee payments

### Running Multiple Sessions Simultaneously

**Rare scenario:** Operating overlapping sessions

**Example:** 
- Regular session: Jan-Dec calendar year
- Summer school: May-July (separate session)
- Remedial session: Aug-Sept (separate session)

**How to manage:**
- Create separate sessions for each
- Clearly name them ("2024 Regular", "2024 Summer School")
- Be explicit when switching current session
- Train staff on selecting correct session

:::caution When NOT to Use Multiple Sessions
**Don't create separate sessions for:**
- Different class levels (use class structure instead)
- Different streams (Science, Arts, Commercial)
- Different shifts (Morning, Afternoon)

**Only** create separate sessions for truly distinct academic cycles.
:::

---

## Common Issues & Solutions

### Issue: "Cannot Change Current Session"

**Cause:** Old session still has active data or pending operations

**Solution:**
1. Check for unpublished exam results
2. Verify no pending fee payments
3. Ensure all students promoted/archived
4. Contact support if stuck

---

### Issue: "Students Appearing in Wrong Session"

**Cause:** Student enrolled in multiple sessions or promotion incomplete

**Solution:**
1. Go to student profile
2. Check "Session History" or "Enrollments"
3. Remove enrollment from wrong session
4. Ensure correct session enrollment exists

---

### Issue: "Reports Showing Wrong Session Data"

**Cause:** Report filter set to wrong session

**Solution:**
1. Check report filters carefully
2. Select correct session from dropdown
3. Some reports default to "Current Session" - verify it's correct
4. Save frequently-used filter combinations

---

## Advanced: Session-Based Features

### Session-Specific Configurations

Certain settings can differ by session:

**Fee Structures:**
- Create different fee structures per session
- Adjust fees yearly for inflation
- Link fee structure to specific session

**Class Sections:**
- May vary year to year (e.g., 3 sections in 2024, 4 in 2025)
- Configured per session

**Subjects Offered:**
- Can change between sessions
- Add/remove electives
- Update course offerings

:::tip Session Planning Meeting
Hold a session planning meeting 2-3 months before each new session:

**Attendees:** Admin, Principal, HODs, Accountant
**Agenda:**
- Review past session performance
- Set enrollment targets
- Plan fee adjustments
- Determine staffing needs
- Schedule major events
- Confirm calendar dates

**Output:** Complete next session setup ready to activate
:::

---

## Technical Notes

### Session Data Structure

**In the database:**
- `session_years` table stores all sessions
- `is_current` field marks active session (only one = 1)
- Most tables have `session_year_id` foreign key

**Data isolation:**
- Students can have records across multiple sessions
- Filtering by session isolates that year's data
- Crucial for accurate reporting

### Session Naming in Code

**Consistent format helps:**
- Sorting: "2024/2025" sorts correctly chronologically
- Parsing: Easier to extract start/end year
- Display: User-friendly across all interfaces

---

## Related Resources

- <Link to="/guides/school-admin">School Admin Guide - General Setup</Link>
- <Link to="/guides/student-guide">Student Guide - Understanding Your Session</Link>
- <Link to="/reference/data-import-export">Data Import/Export - Session Data Management</Link>
- <Link to="/guides/accountant-guide">Accountant Guide - Session-Based Financial Reporting</Link>

---

## Quick Reference

### Session Setup Checklist

**New Session Creation:**
- [ ] Name format: YYYY/YYYY
- [ ] Start and end dates set
- [ ] Terms/semesters configured with dates
- [ ] First term marked as current
- [ ] Session NOT yet marked as default (wait until ready to switch)

**Session Transition:**
- [ ] Previous session exams completed
- [ ] Results published
- [ ] Students promoted
- [ ] Data backed up
- [ ] New session marked as default
- [ ] Staff notified of switch

**Annual Calendar:**
- [ ] Public holidays marked
- [ ] Exam periods blocked
- [ ] School events scheduled
- [ ] Break periods defined
- [ ] Minimum instructional days met (usually 180-200)

---

:::tip Remember
**The academic session is your school's timeline.** Proper setup ensures:
- Accurate record keeping
- Clean data segregation
- Smooth year-over-year transitions
- Reliable reporting
- Happy parents and students!

Take time to plan it right at the start of each year. 🎓
:::
