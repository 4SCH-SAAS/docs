---
id: admin-dashboard-analytics
title: Admin Dashboard & Analytics Guide
sidebar_label: Admin Dashboard & Analytics
description: Complete guide to using the admin dashboard, understanding KPIs, analytics, metrics, and data-driven decision making for school management.
keywords: [admin dashboard, analytics, KPIs, metrics, school statistics, dashboard widgets, data visualization, attendance analytics, fee collection stats, reports, school insights]
---

# Admin Dashboard & Analytics Guide

**Roles:** School Admin

The Admin Dashboard is your command center for monitoring and managing your school's daily operations. It provides real-time insights into student enrollment, attendance, fees, staff, and upcoming events—all in one place.

:::info Dashboard Access
Only users with **School Admin** role can access the full administrative dashboard. Teachers, parents, and students have their own role-specific dashboards.
:::

---

## Overview

When you log in as a School Admin, the dashboard displays:

1. **Key Performance Indicators (KPIs)** - Student count, teacher count, fees status
2. **Recent Activity** - Latest announcements, upcoming holidays
3. **Financial Overview** - Fee collection status for current session
4. **Attendance Insights** - Real-time attendance trends (if configured)
5. **Exam Results Summary** - Quick view of recent exam performance
6. **Quick Actions** - Shortcuts to common tasks

---

## 📊 Key Metrics & KPIs {#key-metrics}

### Student Statistics

**Total Students**
- Shows current total enrollment count
- Includes all active students across all classes
- **Calculation:** Count of all students with `application_status = 1` (accepted/enrolled)

**Gender Distribution**
- **Boys:** Percentage of male students
- **Girls:** Percentage of female students
- **Displayed as:** Pie chart or percentage bars
- **Use case:** Track gender balance, plan gender-specific facilities/programs

**Example:**
```
Total Students: 450
Boys: 52% (234 students)
Girls: 48% (216 students)
```

:::tip
If gender distribution is significantly imbalanced, consider targeted admission campaigns to attract underrepresented groups.
:::

---

### Staff Statistics

**Total Teachers**
- Count of users with "Teacher" role
- Includes both active and inactive (soft-deleted) teachers
- **Use case:** Monitor teacher-student ratio

**Total Staff** (if displayed)
- Count of non-teaching staff (accountants, office staff, etc.)
- **Use case:** Track staff headcount

**Recommended Ratios:**
- **Primary School:** 1 teacher per 20-30 students
- **Secondary School:** 1 teacher per 25-35 students
- **Total Staff:** Approximately 1 non-teaching staff per 50 students

---

### Academic Structure

**Total Classes**
- Count of distinct class levels (e.g., Grade 1, Grade 2, ..., Grade 12)
- **Use case:** Quick view of school size and structure

**Total Streams** (if applicable)
- Count of academic streams (Science, Arts, Commercial, etc.)
- **Use case:** Track diversification of academic offerings

---

### Financial Overview

The dashboard shows fee collection status for the **current session year**.

**Fee Collection Summary:**

1. **Fully Paid Students**
   - Students who have paid 100% of compulsory fees
   - **Displayed as:** Count and percentage
   - **Example:** 320 students (71%)

2. **Partially Paid Students**
   - Students who have paid some but not all compulsory fees
   - **Displayed as:** Count and percentage
   - **Example:** 80 students (18%)

3. **Unpaid Students**
   - Students with no fee payments yet
   - **Displayed as:** Count and percentage
   - **Example:** 50 students (11%)

**Visual Representation:**
- Typically shown as a **donut chart** or **bar graph**
- Color coding:
  - Green: Fully paid
  - Yellow/Orange: Partially paid
  - Red: Unpaid

**What This Tells You:**
- **Collection Rate:** If 70%+ are fully paid, collection is good
- **Outstanding Amount:** Partially paid + unpaid = follow-up needed
- **Cash Flow:** High fully paid percentage = better cash flow

:::tip Financial Health
A healthy school typically maintains 75-85% fee collection rate by mid-session. If your unpaid percentage exceeds 20%, prioritize fee reminders and follow-ups.
:::

---

### Subscription & License (SaaS Schools)

**License Expiry:**
- Days remaining until your current subscription expires
- **Warning threshold:** Typically shows alert when 7 days or fewer remain
- **Displayed as:** Days count or progress bar

**Example:**
```
License expires in: 45 days
Status: Active
```

**Action Items When Expiring Soon:**
- Renew subscription before expiry
- If auto-renewal is enabled, verify payment method
- Check if pending payment for upcoming plan

**Prepaid Upcoming Plans:**
- If you've purchased a plan in advance, dashboard shows:
  - Upcoming plan details
  - Start date (typically day after current plan expires)
  - Payment status (paid/pending)

:::caution
If license expires, you may lose access to certain features or the entire system. Always renew at least 3-5 days before expiry.
:::

---

## 📅 Recent Activity & Announcements {#recent-activity}

### Announcements

The dashboard displays the **5 most recent announcements** posted school-wide.

**What's Shown:**
- Announcement title
- Posted by (admin name)
- Posted date
- Preview of announcement content

**Types of Announcements Displayed:**
- School-wide announcements only (not class-specific)
- Announcements without subject/class restrictions

**Quick Actions:**
- Click announcement to view full details
- Click "Post New Announcement" to create one

**Use Case:**
- Stay informed about what's been communicated
- Verify announcements posted correctly
- Ensure important messages are highlighted

:::tip
Check this section daily to ensure critical announcements (exams, holidays, events) are visible to your school community.
:::

---

### Upcoming Holidays

Shows upcoming holidays for the **current session year**.

**What's Displayed:**
- Holiday name (e.g., "Independence Day")
- Holiday date
- Type (public holiday, school-specific, etc.)
- Days until the holiday

**Sorting:**
- Holidays are shown in **chronological order** (nearest first)
- Only shows holidays **from today onwards** within the current session year

**Use Case:**
- Plan staff/teacher schedules around holidays
- Prepare notices for parents
- Schedule exams avoiding holiday periods

**Example:**
```
Upcoming Holidays:
- Eid al-Fitr: April 10, 2026 (5 days away)
- Labour Day: May 1, 2026 (26 days away)
- Democracy Day: June 12, 2026 (68 days away)
```

---

## 📈 Attendance & Performance Graphs {#graphs}

Depending on your system configuration, the dashboard may display:

### Attendance Graph (if configured)

**What It Shows:**
- Attendance percentage by class or class-section
- Trends over time (daily, weekly, monthly)
- Color-coded bars:
  - Green: &gt;90% attendance
  - Yellow: 75-90% attendance
  - Red: &lt;75% attendance

**Filters Available:**
- Select specific class
- Choose date range
- View by section

**Use Case:**
- Identify classes with low attendance
- Track attendance improvement over time
- Spot patterns (e.g., attendance drops on Fridays)

**Action Items:**
- Classes with &lt;75% attendance: Investigate reasons, send reminders
- Consistently low attendance: Meet with class teacher, contact parents

---

### Exam Results Graph (if configured)

**What It Shows:**
- Average scores per exam
- Class-wise performance comparison
- Subject-wise performance trends

**Displayed As:**
- Bar charts showing class averages
- Line graphs showing performance trends
- Top performers list

**Use Case:**
- Monitor academic performance at a glance
- Identify underperforming classes or subjects
- Plan remedial sessions

---

## 🎯 Quick Actions {#quick-actions}

Most dashboards include shortcuts to frequently used functions:

**Common Quick Actions:**
- ➕ Add New Student
- ➕ Add New Teacher
- 📢 Post Announcement
- 📊 Generate Report
- 💰 Record Fee Payment
- 📅 View Today's Timetable
- 📝 Create Assignment/Exam

**How to Use:**
- Click the quick action button
- Opens a modal or redirects to the relevant page
- Complete the action without navigating through menus

:::tip Productivity
Bookmark frequently used quick actions or use keyboard shortcuts (if available) to save time on repetitive tasks.
:::

---

## 🔍 Filtering & Customizing the Dashboard {#filtering}

### Session Year Filter

**What It Does:**
- Changes all dashboard data to show a specific session year
- Affects: Student count, fees, exams, announcements

**How to Use:**
1. Look for **Session Year** dropdown at top of dashboard
2. Select the session year you want to view
3. Dashboard refreshes with data for that session

**Use Cases:**
- Compare current year vs previous year enrollment
- Review financial data from past sessions
- Verify historical records

**Example:**
```
Session Year: [2025-2026 ▼]

Change to: [2024-2025 ▼]
→ Dashboard now shows 2024-2025 data
```

---

### Date Range Filters (if available)

Some dashboard widgets allow custom date ranges:

**Attendance Graph:**
- Select "Last 7 days", "Last 30 days", or custom range
- Useful for tracking short-term trends

**Fee Collection:**
- Filter by month, quarter, or session
- Analyze collection patterns

**Announcements:**
- Filter by date posted
- View archived announcements

---

### Class/Section Filters

**Attendance and exam graphs** may allow:
- Filter by specific class (e.g., Grade 10)
- Filter by section (e.g., Grade 10-A)
- View all classes combined

**Use Case:**
- Deep-dive into specific class performance
- Compare sections within same class level

---

## 📤 Exporting Dashboard Data {#exporting}

### Export Options

Many dashboard widgets include export functionality:

**Available Formats:**
- **CSV** - For spreadsheet analysis (Excel, Google Sheets)
- **PDF** - For printing or sharing
- **Excel (XLSX)** - For advanced data manipulation

**What Can Be Exported:**
- Fee collection summary
- Student enrollment list
- Attendance statistics
- Exam results overview
- Financial reports

**How to Export:**
1. Locate the widget/section you want to export
2. Click **Export** button (usually shows download icon)
3. Choose format
4. File downloads to your device

**Example: Exporting Fee Collection Data**
```
1. Go to Fee Collection widget on dashboard
2. Click "Export" icon
3. Select "Excel (XLSX)"
4. File downloaded: fee-collection-2026-03-17.xlsx
```

:::tip
Export data regularly for offline analysis, backup, or sharing with school management/board members.
:::

---

### Using Exported Data

**Fee Collection CSV/Excel:**
- Import into accounting software
- Create pivot tables for deeper analysis
- Share with finance committee

**Student Enrollment Data:**
- Plan classroom allocation
- Analyze enrollment trends
- Create student directories

**Attendance Data:**
- Identify chronic absentees
- Calculate attendance percentages
- Support intervention programs

---

## 🛠️ Dashboard Customization (if available) {#customization}

Some systems allow you to customize which widgets appear on your dashboard.

### Adding/Removing Widgets

**If Customization Is Available:**
1. Look for **Customize Dashboard** or **Settings** icon
2. Select widgets to show/hide:
   - ☑ Student Statistics
   - ☑ Fee Collection
   - ☑ Attendance Graph
   - ☐ Exam Results (hide if not needed)
3. Drag and drop to rearrange
4. Click **Save Layout**

### Setting Default Filters

**If Supported:**
- Set default session year
- Set default class/section view
- Set default date range for graphs

**Benefits:**
- Dashboard loads with your preferred view
- Saves time on daily checks
- Focus on most relevant data

:::note
Dashboard customization availability depends on your system version and subscription plan. Contact support if you need custom widgets.
:::

---

## 💡 Best Practices {#best-practices}

### Daily Dashboard Routine

**Start Your Day:**
1. ✅ Check total student/teacher count (verify no unexpected changes)
2. ✅ Review today's attendance status (if real-time)
3. ✅ Check announcements (ensure critical info is posted)
4. ✅ Review upcoming holidays (plan ahead)
5. ✅ Check license expiry (renew if needed)

**Takes:** 2-3 minutes
**Value:** Stay informed, catch issues early

---

### Weekly Dashboard Review

**Every Monday:**
1. ✅ Review previous week's attendance trends
2. ✅ Check fee collection progress
3. ✅ Verify pending approvals (if shown)
4. ✅ Post week-ahead announcements
5. ✅ Export and save weekly reports

**Takes:** 10-15 minutes
**Value:** Track progress, plan week ahead

---

### Monthly Dashboard Analysis

**First Week of Month:**
1. ✅ Review previous month's fee collection (compare to target)
2. ✅ Analyze attendance patterns (identify declining trends)
3. ✅ Export monthly reports (fees, attendance, enrollment)
4. ✅ Compare current month vs same month last year
5. ✅ Present dashboard summary to school leadership

**Takes:** 30-45 minutes
**Value:** Data-driven decision making

---

### Making Data-Driven Decisions

**Use Dashboard Data To:**

**Enrollment Planning:**
- Track enrollment trends over multiple sessions
- Identify which classes are growing/shrinking
- Plan classroom allocation and teacher hiring

**Financial Planning:**
- Monitor fee collection rate monthly
- Identify fee defaulters early for follow-up
- Forecast cash flow based on collection patterns

**Academic Interventions:**
- Spot classes with low attendance
- Identify underperforming subjects/classes
- Plan remedial sessions or tutoring

**Staff Management:**
- Ensure teacher-student ratio is maintained
- Allocate teachers based on class sizes
- Plan recruitment for next session

**Example Decision:**
```
Observation: Dashboard shows Class 10 has 55 students with only 1 math teacher
Analysis: Ratio is 1:55, which is too high
Decision: Assign additional math teacher or split into two sections
Action: Update class structure, assign teachers
Result: Better teacher-student ratio, improved learning outcomes
```

---

## 📱 Mobile Dashboard Access {#mobile-access}

### Web-Based Mobile View

**Accessing on Mobile:**
1. Open mobile browser (Chrome, Safari)
2. Navigate to your admin URL
3. Log in with admin credentials
4. Dashboard adapts to mobile screen

**Mobile View Features:**
- Responsive layout (widgets stack vertically)
- Simplified graphs (easier to read on small screens)
- Touch-friendly buttons
- Swipe to navigate between widgets

**Limitations:**
- Some advanced graphs may not display
- Export functionality may be limited
- Better experience on tablet than phone

:::tip
For best mobile experience, use a tablet (iPad, Android tablet) or access dashboard on desktop/laptop when possible.
:::

---

### Mobile App Dashboard (if available)

**If your system has a dedicated admin mobile app:**
- Download from App Store / Play Store
- Login with admin credentials
- Access simplified dashboard

**Mobile App Advantages:**
- Push notifications for critical alerts
- Offline viewing of cached data
- Faster load times
- Optimized for touch

---

## 🔔 Dashboard Notifications & Alerts {#notifications}

### System Alerts

The dashboard may display alerts for:

**License/Subscription:**
- 🔴 **Critical:** License expires in 3 days or fewer
- 🟡 **Warning:** License expires in 4-7 days
- 🟢 **Info:** License expires in 8-30 days

**Pending Actions:**
- Unapproved student applications
- Pending leave requests
- Outstanding fee reminders to send
- Overdue reports

**System Issues:**
- Payment gateway disconnected
- Database backup not run recently
- Low storage space
- Pending system updates

**How Alerts Appear:**
- Red badge with count (e.g., "3 pending approvals")
- Banner at top of dashboard
- Modal popup for critical issues

**Action:**
- Click alert to view details
- Resolve issue immediately for critical alerts
- Schedule time to address warnings

---

## 🔧 Troubleshooting Dashboard Issues {#troubleshooting}

### Dashboard Not Loading

**Problem:** Dashboard page stays blank or shows loading spinner indefinitely

**Solutions:**
1. **Check internet connection** - Verify you're online
2. **Clear browser cache:**
   - Chrome: Ctrl+Shift+Delete (Windows) or Cmd+Shift+Delete (Mac)
   - Select "Cached images and files"
   - Clear data
3. **Try different browser** - Use Chrome, Firefox, or Edge
4. **Disable browser extensions** - AdBlockers may interfere
5. **Contact support** if issue persists

---

### Metrics Show Zero

**Problem:** Student count, teacher count, or fees show 0

**Possible Causes:**
1. **Wrong session year selected** - Change session year filter
2. **No data exists yet** - New school setup, data not entered
3. **Database connection issue** - Temporary server problem

**Solutions:**
1. Change session year to current session
2. Refresh page (F5 or Ctrl+R)
3. Wait 5 minutes and try again
4. Contact support if data should exist

---

### Graphs Not Displaying

**Problem:** Attendance or exam graphs show blank or error

**Causes:**
1. **No data for selected filters** - Change date range or class
2. **Feature not enabled** - Graph module may be disabled
3. **Browser compatibility** - Old browser version

**Solutions:**
1. Adjust filters (broaden date range, select different class)
2. Check if feature is enabled for your school
3. Update browser to latest version
4. Try different device/browser

---

### Export Not Working

**Problem:** Click export but file doesn't download

**Solutions:**
1. **Check browser download settings** - Ensure downloads are allowed
2. **Disable popup blocker** - May be blocking download
3. **Check file size** - Large exports may timeout; reduce date range
4. **Try different format** - If Excel fails, try CSV
5. **Clear browser cache** and try again

---

### Slow Dashboard Performance

**Problem:** Dashboard takes long to load or is sluggish

**Solutions:**
1. **Close unused browser tabs** - Free up memory
2. **Clear browser cache** - Old cached data may slow things down
3. **Reduce visible widgets** - Hide widgets you don't use
4. **Check device performance** - Close other applications
5. **Use wired connection** - WiFi may be slow; try Ethernet
6. **Contact support** - May be server-side issue

---

## 📚 Related Features

- **[School Admin Guide](school-admin.md)** - Complete admin feature overview
- **[Attendance Reports](attendance-reports.md)** - Detailed attendance analytics
- **[Expense Management](expense-management.md)** - Financial tracking and reporting
- **[Roles & Permissions](../reference/roles-permissions.md)** - Understanding admin permissions

---

## Summary Checklist

**Daily:**
- ✅ Check student/teacher count
- ✅ Review announcements
- ✅ Check upcoming holidays
- ✅ Monitor license expiry

**Weekly:**
- ✅ Review attendance trends
- ✅ Check fee collection progress
- ✅ Export weekly reports

**Monthly:**
- ✅ Analyze fee collection vs target
- ✅ Review enrollment trends
- ✅ Export monthly reports
- ✅ Present data to leadership

**Best Practices:**
- ✅ Use session year filter to compare periods
- ✅ Export data regularly for offline analysis
- ✅ Act on alerts promptly
- ✅ Customize dashboard for your workflow

---

Your admin dashboard is your daily control center. Make it a habit to check it every morning, and use the insights to make data-driven decisions that improve your school's operations! 📊✨
