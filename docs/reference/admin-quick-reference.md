---
id: admin-quick-reference
title: School Admin Quick Reference Card
description: Printable 1-2 page quick reference card for School Administrators. Daily KPIs, common tasks, navigation shortcuts, troubleshooting, and emergency contacts for Nigerian school management systems.
keywords: [school admin, quick reference, cheat sheet, daily tasks, troubleshooting, Nigeria]
---

# School Admin Quick Reference Card

**Print this card and keep it at your desk for quick lookup!**

:::info Print Instructions
- **Format**: Best printed as 2-page portrait on A4 paper
- **Margins**: Set to 0.5 inches for optimal fit
- **Color**: Recommended (alerts and highlights are color-coded)
- **Scaling**: Fit to page width, no scaling
- **CSS Note**: This page uses print-friendly styling. Use browser's Print function (Ctrl+P or Cmd+P)
:::

---

## DASHBOARD - DAILY KPI CHECK ✓

**First task every morning (5 minutes)**

| KPI | Where to Check | Action if Red Flag |
|-----|---------------|--------------------|
| **Fee Collection Rate** | Dashboard → Finance | Follow up with defaulters |
| **Student Attendance %** | Dashboard → Academics | Investigate low attendance classes |
| **Pending Approvals** | Dashboard → Alerts | Approve leave, admissions, etc. |
| **System Alerts** | Dashboard → Notifications | Address license, backup, or storage warnings |
| **Failed Payments** | Dashboard → Finance | Contact parents about failed online payments |

**Key Metrics by Status:**
- **Green** (&gt;80%): Acceptable
- 🟡 **Yellow** (60-80%): Monitor
- **Red** (&lt;60%): Immediate action needed

---

## QUICK TASK REFERENCE

### Add Student (2 minutes)
```
Students → Add Student → Fill Personal Details → 
Academic Details (Class/Section/Roll No) → 
Guardian Info → Submit
```
**Quick Tip**: Use bulk import for 10+ students at once

### Add Teacher (3 minutes)
```
Staff → Teachers → Add Teacher → 
Personal & Contact Info → 
Employment Details → Assign Subjects → 
Create Login (Email + Generate Password) → Save
```

### Add Fee Structure (3 minutes)
```
Fees → Fee Structures → Select Class & Session → 
Add Fee Types with Amounts (e.g., Tuition: ₦50,000) → 
Set Payment Schedule (Full or 3 Installments) → Save
```

### Generate Invoices (1 minute)
```
Fees → Generate Invoices → Select Class/Section/Session → 
Select Students (or All) → Generate → Save
```

### Record Payment (1 minute)
```
Fees → Record Payment → Search Student → 
Enter Amount + Method (Cash/Bank/Cheque) → 
Add Receipt Number → Record
```

### Create Announcement (2 minutes)
```
Communication → Announcements → Create → 
Title + Message → Select Audience (All/Parents/Class) → 
Enable Notifications (Email/SMS) → Publish
```

### Mark Attendance (1 minute)
```
Academics → Attendance → Select Class/Date → 
Mark Present/Absent → Save
```

### Generate Report Card (2 minutes)
```
Reports → Exam Results → Select Exam/Class → 
Preview → Download PDF → Print
```

---

## NAVIGATION SHORTCUTS & MENU STRUCTURE

### Main Navigation (Left Sidebar)

```
📊 DASHBOARD
├─ Overview (KPIs, alerts, quick stats)
├─ Fee Status (Collection summary)
└─ Pending Approvals

📚 ACADEMICS
├─ Session Years (2024-2025)
├─ Classes & Sections
├─ Subjects & Teacher Assignments
├─ Timetable
├─ Exams (Schedules & Results)
├─ Attendance
├─ Holidays
└─ Calendar

👥 STAFF & STUDENTS
├─ Teachers (Add/Edit/Assign)
├─ Non-Teaching Staff
├─ Students (Admit/Transfer/Promote)
├─ Parents/Guardians
└─ Leave Requests

💰 FINANCES
├─ Fee Types & Structures
├─ Generate Invoices
├─ Record Payments
├─ Reports (Collection, Defaulters, Payment Methods)
├─ Payment Gateway Settings
└─ Expense Management

📋 REPORTS
├─ Attendance Analytics
├─ Academic Performance
├─ Fee Collection
├─ Staff Performance
└─ Custom Reports

🚌 TRANSPORTATION
├─ Routes & Stops
├─ Vehicle Management
├─ Driver Assignments
├─ Transport Fees
└─ Live Tracking

💬 COMMUNICATION
├─ Announcements
├─ Messaging
├─ Notification Settings
└─ Gallery

⚙️ SETTINGS
├─ School Profile
├─ Roles & Permissions
├─ Payment Gateway Config
├─ Database Backup
├─ Data Import/Export
├─ SMS & Email Settings
└─ License & Subscription
```

### Keyboard Shortcuts

| Shortcut | Action |
|----------|--------|
| `Ctrl+S` or `Cmd+S` | Save form |
| `Escape` | Close popup/modal |
| `Ctrl+P` or `Cmd+P` | Print page |
| `Ctrl+F` or `Cmd+F` | Search on page |

---

## DAILY WORKFLOW CHECKLIST

### ✅ MORNING (9:00 AM - 30 minutes)
- [ ] Check Dashboard for alerts & KPIs
- [ ] Review pending approvals (leave, admissions)
- [ ] Check failed payment notifications
- [ ] Scan system alerts (license, backup, storage)

### ✅ DURING DAY (Ongoing)
- [ ] Add/admit new students
- [ ] Record fee payments
- [ ] Approve staff leave requests
- [ ] Handle queries from teachers/parents

### ✅ WEEKLY (Every Friday)
- [ ] Generate fee collection report
- [ ] Check attendance by class
- [ ] Review student performance trends
- [ ] Post announcements for next week

### ✅ MONTHLY (Month-end)
- [ ] Generate financial statements (Income/Expense)
- [ ] Review academic progress by class
- [ ] Database backup (verify completion)
- [ ] Generate staff performance summary

### ✅ QUARTERLY (End of term)
- [ ] Generate report cards for all classes
- [ ] Archive session data
- [ ] Review system performance
- [ ] Plan staffing for next term

---

## COMMON TASKS - QUICK SOLUTIONS

### Fee Management

**Problem**: Parent says they paid but system shows unpaid
```
Solution:
1. Fees → Record Payment → Search Student
2. Verify payment in your bank (if online)
3. Check if payment matched to correct student
4. Manually record if bank transfer not auto-synced
5. Send payment confirmation via SMS
```

**Problem**: Need to generate fee reminder notifications
```
Solution:
1. Fees → Reports → Defaulters
2. Export student list
3. Communication → Create Announcement
4. Target: Parents of selected class
5. Message: "Fee due by [date]. ₦[amount] pending"
6. Send via SMS/Email
```

**Problem**: Need to apply fee discount for needy student
```
Solution:
1. Fees → Fee Structures → Select Student/Class
2. Edit fee amount → Apply discount
3. Regenerate invoice
4. Mark reason in notes (e.g., "Scholarship")
```

### Student Management

**Problem**: Student transferred to another school
```
Solution:
1. Students → Select Student
2. Change Status: "Transfer Out"
3. Mark Transfer Date
4. Generate Final Report Card
5. Archive records (Settings → Archive Data)
```

**Problem**: Wrong class assigned to student
```
Solution:
1. Students → Select Student
2. Edit → Academic Details
3. Change Class/Section/Roll No
4. Update → Timetable recalculates
5. Notify teacher of change
```

**Problem**: Need to promote all students to next class
```
Solution:
1. Students → Bulk Actions
2. Select Class/Section
3. Promotion Option → Assign New Class
4. Verify data → Execute
5. New timetables apply in new session
```

### Report Generation

**Problem**: Report shows no data for selected date range
```
Solution:
1. Check if attendance was actually marked for those dates
2. Verify students exist in that class during period
3. Try smaller date range
4. Check if correct session is selected
5. Clear browser cache and try again
```

**Problem**: Performance report showing all students as absent
```
Solution:
1. Academics → Attendance
2. Verify attendance marked for the class
3. Check if dates fall within session calendar
4. Regenerate report with shorter date range
5. Contact support with class name & date range
```

---

## TROUBLESHOOTING QUICK FIXES

### 🚨 License & Subscription Issues

| Problem | Immediate Fix | Escalate If |
|---------|---------------|-------------|
| **"License Expired" Alert** | Go to Settings → License → Renew License (online payment) | Payment fails or license won't activate |
| **"Trial Expiring Soon"** | Contact sales team in Settings → Support (buy plan before expiry) | Can't access payment link |
| **Module Not Available** | Settings → Roles & Permissions → Enable for your plan | Feature shows as disabled in your plan |
| **Can't Invite Users** | Check user limit in Settings → License (upgrade if exceeded) | License shows unlimited but still blocked |

### 🔐 Permission & Access Issues

| Problem | Quick Fix |
|---------|-----------|
| **Teacher Can't See Class/Students** | Settings → Roles & Permissions → Verify "View Students" permission enabled |
| **Staff Can't Generate Reports** | Settings → Roles & Permissions → Enable "Generate Reports" for their role |
| **Accountant Can't Record Fees** | Settings → Roles & Permissions → Enable "Record Payments" & "View Fees" |
| **Student Missing Timetable** | Academics → Timetable → Verify student enrolled in class during selected session |

### 💾 Backup & Data Issues

| Problem | Quick Fix |
|---------|-----------|
| **"Backup Not Completed"** | Settings → Database Backup → Manual Backup Now (wait 10-15 mins) |
| **"Storage Full" Alert** | Settings → Data Management → Archive Old Sessions → Delete temp files |
| **Can't Import Student Data** | Verify CSV format matches template; check for duplicate emails/admission numbers |
| **Lost Data Accidentally** | Settings → Database Backup → Restore from previous backup (with date) |

### 🌐 Connectivity & Performance

| Problem | Quick Fix |
|---------|-----------|
| **Page Loading Slowly** | Clear browser cache (Ctrl+Shift+Del) → Try different browser → Check internet speed |
| **Timeout During Report** | Reduce date range → Try PDF export instead of Excel → Check server status |
| **Payment Gateway Not Working** | Settings → Payment Gateway → Test Connection → Re-paste the access keys from your provider's site → Contact 4SCH support if it still fails |
| **SMS Not Sending** | Settings → SMS Settings → Verify balance/account active → Check phone format (11 digits for Nigeria) |

### 🔴 Critical Issues

| Issue | Action | Contact Support With |
|-------|--------|---------------------|
| **Can't Log In** | Clear cache → Reset password → Try incognito mode | Error message & browser type |
| **Dashboard Showing Old Data** | Refresh page → Clear cache → Wait 5 mins for sync | Affected data range |
| **Payment Transactions Missing** | Check bank for duplicates → Reconcile manually → Check sync settings | Transaction IDs & dates |
| **System Down/Errors** | Wait 5 mins → Try again → Switch browser | Full error message screenshot |

**Common Error Messages:**
- `"Server Error 500"` → Try again in 5 mins (temporary server issue)
- `"Permission Denied"` → Check role permissions (not user issue)
- `"Record Not Found"` → Data may have been archived or deleted
- `"Network Timeout"` → Check internet, try with mobile hotspot

---

## EMERGENCY CONTACTS & SUPPORT

### 🆘 Immediate Help

| Issue Level | Contact | Response Time |
|------------|---------|----------------|
| **🔴 System Down** | +234-XXX-XXXX-XXX (24/7 Hotline) | 30 minutes |
| **🔴 Data Loss** | emergency-support@4sch.com | 1 hour |
| **🟡 Payment Issue** | payment-support@4sch.com (during business hours) | 4 hours |
| **🟡 Report Bug** | support@4sch.com (with screenshot) | 8 hours |
| **🟢 General Help** | FAQ & Help menu in system | Self-service |

### 📞 Support Details

- **Email**: support@4sch.com
- **Phone**: +234-XXX-XXXX-XXX (9 AM - 5 PM, Mon-Fri)
- **WhatsApp**: +234-XXX-XXXX-XXX (quick support)
- **Portal**: support.4sch.com/tickets
- **Video Tutorials**: Help menu → Video Tutorials

### 📋 When Contacting Support, Have Ready

- [ ] Your school name & admin email
- [ ] Exact error message (screenshot)
- [ ] Steps you took when issue occurred
- [ ] Browser type & version (Chrome/Edge/Safari)
- [ ] Whether issue affects one user or all users
- [ ] Screenshot of the problem (if applicable)

### 🏥 Preventive Maintenance

**Daily** (2 min)
- Check dashboard alerts
- Monitor system status

**Weekly** (10 min)
- Backup database manually
- Review fee payment status
- Check system notifications

**Monthly** (30 min)
- Full system backup
- Review user permissions
- Check license status
- Archive old data if needed

**Quarterly** (1 hour)
- Review system performance
- Update contact information
- Audit user access
- Plan infrastructure upgrades

---

## NIGERIAN SCHOOL CONTEXT - SPECIFIC NOTES

### Fee Structure Example (Nigerian Schools)

```
Class JS 1-3:
├─ Tuition Fee: ₦80,000/term (₦30,000 + ₦30,000 + ₦20,000)
├─ Registration: ₦5,000 (once per session)
├─ Sports: ₦5,000/term
├─ Library: ₦3,000/term
├─ School Levy: ₦2,000/term
└─ Exam Fee: ₦8,000/term

Class SS 1-3:
├─ Tuition Fee: ₦100,000/term
├─ WAEC/NECO Fees: ₦25,000 (one-time for exam year)
├─ Project Materials: ₦10,000/term
└─ [Same others as JS]

TOTAL/Student/Term: ₦103,000-₦130,000
```

### Common Holidays (Nigerian Schools)

- **New Year** - January 1
- **Easter** - March/April (moveable)
- **Sallah** - June (approximate, moveable)
- **Independence Day** - October 1
- **Christmas** - December 25-26

**Set in**: Academics → Holidays (so system auto-blocks attendance marking)

### Payment Methods (Common in Nigeria)

1. **Cash** - In-person to accounting officer
2. **Bank Transfer** - Via school's designated account
3. **Online** - Via Paystack/Flutterwave (2-3% convenience fee typical)
4. **Cheque** - Clearance takes 3-7 days

**Configure in**: Settings → Payment Gateway → Select Provider

### Staff Roles (Nigerian Context)

- **Principal** - Overall administration (parent/owner)
- **Vice Principal** - Academic affairs
- **Bursar** - Financial management (Accountant role)
- **Registrar** - Admissions & records (Admission Officer role)
- **Head of Department** - Subject/class coordination

**Map in**: Staff → Designations & Roles

---

## QUICK REFERENCE - COMMONLY USED PATHS

```
FEES WORKFLOW:
Fee Types (Tuition, Sports, Lab) 
  ↓
Fee Structures (Amount by Class & Session)
  ↓
Generate Invoices (For students in that class)
  ↓
Record Payments (As cash/bank/cheque received)
  ↓
Generate Report (Collection %, Defaulters)
  ↓
Send Reminders (Communication → Announcements)

STUDENT WORKFLOW:
Add Student (Personal + Academic + Guardian Info)
  ↓
Assign to Class & Section
  ↓
Generate Fee Invoice
  ↓
Create Timetable
  ↓
Mark Attendance
  ↓
Record Exam Results
  ↓
Generate Report Card

STAFF WORKFLOW:
Add Teacher (Personal + Employment + Subjects)
  ↓
Assign to Classes
  ↓
Create/Manage Timetable
  ↓
Record Attendance
  ↓
Grade Assignments & Exams
  ↓
Generate Performance Report
```

---

## PRINT THIS - KEEP AT DESK

**Last Updated**: 2024
**Version**: 1.0
**Print in Color**: Recommended (color-coded alerts and highlights)

---

## Related Documentation

- **Full Admin Guide**: [School Administrator Guide](../guides/school-admin.md)
- **Dashboard Analytics**: [Admin Dashboard & Analytics](../guides/admin-dashboard-analytics.md)
- **Fee Management**: [Fee Structure Setup](../guides/school-admin.md#fee-management)
- **Troubleshooting**: [Full Troubleshooting Guide](../support/troubleshooting.md)
- **FAQ**: [Frequently Asked Questions](../support/faq.md)

:::tip Print-Friendly CSS
This markdown page is optimized for printing. When you print:
- Tables will fit on pages with proper breaks
- Color-coded sections stay visible
- Navigation menus condense
- Footer information displays clearly

Use your browser's Print function (Ctrl+P) and select "Save as PDF" or print directly to paper.
:::
