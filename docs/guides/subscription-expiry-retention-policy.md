# Subscription Expiry & School Retention Policy

## Overview

This guide explains how the 4SCH system handles subscription expiration, grace periods, notifications, and school data retention. Understanding this workflow is crucial for both Super Admins managing the platform and School Admins managing their subscriptions.

---

## Configuration Settings

### System Settings (Super Admin Only)

Navigate to: **System Settings → Subscription Settings**

#### 1. Additional Billing Days (Grace Period)
- **Purpose**: Determines how long schools can access the system after subscription expires
- **Current Setting**: `3 days`
- **Minimum Value**: `2 days`
- **Recommended**: `7-14 days` for reasonable grace period
- **Impact**: After this period expires, school access is automatically terminated

#### 2. Current Plan Expiry Warning Days
- **Purpose**: Controls when expiry warnings appear in the School Admin dashboard
- **Current Setting**: `14 days`
- **Minimum Value**: `2 days`
- **Impact**: Dashboard warning appears when subscription has ≤14 days remaining

---

## Subscription Lifecycle Timeline

### Phase 1: Active Subscription
**Status**: ✅ Fully Operational

**Characteristics**:
- Subscription `end_date` is in the future
- All features accessible based on package
- Users can login and use all subscribed features
- Dashboard shows remaining days

**Database Status**:
```
Subscription: start_date ≤ today ≤ end_date
School Status: 1 (Active)
User Access: Enabled
Bill Status: Not generated
```

---

### Phase 2: Expiry Warning Period (14 Days Before Expiry)
**Status**: ⚠️ Warning Active

**When**: 14 days or less until subscription `end_date`

**Warning Display**:
- Appears in **School Admin Dashboard** only
- Shows warning banner with days remaining
- If auto-renewal is enabled, shows upcoming plan details
- Visual alert to encourage payment before expiry

**How It Works**:
- The system automatically checks your subscription status when you login
- If expiry is within 14 days (or less), a warning banner appears on your dashboard
- The banner shows how many days remain and payment options

**Important Notes**:
- ⚠️ **NO automatic email notifications** are sent during this period
- ⚠️ **NO push notifications** sent to mobile devices
- Warning is **dashboard-only** (visual notification)
- School remains fully operational

---

### Phase 3: Subscription Expiry Day (Day 0)
**Status**: 📅 Expired - Grace Period Begins

**Automated Actions**:
1. **Subscription Bill Generation** (Daily Cron @ midnight)
   - System generates `subscription_bill` record
   - Calculates bill amount based on package
   - Sets `due_date` = `end_date + additional_billing_days` (3 days)

2. **Grace Period Activation**
   - School enters 3-day grace period
   - `extra_billing_status` = 1 (within grace period)
   - All features remain accessible

**What Happens Automatically**:
- The system creates a bill for your subscription renewal
- Payment due date is set to 3 days after expiry
- Bill appears in your admin dashboard

**User Experience**:
- ✅ School continues operating normally
- ✅ Teachers/Students can login
- ✅ All features accessible
- 📊 Dashboard may show payment due notice

**Server Automation**:
- The system automatically runs daily checks at midnight
- No manual intervention needed from users
- Super Admin ensures server is properly configured

---

### Phase 4: Grace Period (Days 1-3 After Expiry)
**Status**: 🕒 Grace Period Active

**Duration**: 3 days (configurable via Additional Billing Days)

**Subscription Status Display**:
- Bill shows: **"Unpaid"** (before due_date)
- After due_date passes: **"Over Due"**

**How the System Calculates Grace Period**:
- Your subscription end date + 3 days = grace period deadline
- During these 3 days, the system considers you "still active"
- After day 3, grace period expires and access is terminated

**School Access**:
- ✅ Full system access maintained
- ✅ All users can login
- ✅ All features functional
- 💰 Payment can be made anytime during grace period

**Payment Options During Grace**:
1. Online payment via configured gateway
2. Manual payment (Super Admin marks as paid)
3. Auto-renewal (if enabled and next plan configured)

---

### Phase 5: Grace Period Expiry (Day 4 - After Additional Billing Days)
**Status**: ❌ Access Terminated

**What the System Does Automatically** (at midnight on Day 4):

The system performs these actions without any manual intervention:

1. **Identifies Unpaid Subscriptions**
   - Checks all bills past their due date
   - Finds subscriptions where payment hasn't been received

2. **Terminates Current Subscription**
   - Changes your subscription end date to yesterday
   - This effectively ends your active subscription immediately

3. **Removes Future Plans**
   - Deletes any upcoming subscription renewals you may have scheduled
   - Removes any addon services scheduled to start

4. **Disables Auto-Renewal**
   - Turns off automatic renewal to prevent future charges
   - You'll need to manually renew when ready

5. **Updates System Access**
   - Removes access to premium features
   - Updates your school's active feature list

**User Access Impact**:
- ❌ Students/Teachers: **BLOCKED from login**
- ❌ School Admin: **May be blocked** (if school status changed)
- 🚫 Login attempt shows: *"Your account has been deactivated. Please contact admin."*

**How Access Control Works**:
- The system checks your school's subscription status at every login
- If subscription is expired (past grace period), login is rejected
- Users see a clear message explaining their account is deactivated
- They are instructed to contact the school administrator

---

### Phase 6: Post-Expiry Status (Indefinite)
**Status**: 💤 Inactive - Awaiting Payment or Action

**School Data Status**:
- ✅ School record: **EXISTS in database**
- ✅ School database: **`school_[name]` INTACT**
- ✅ All data: **PRESERVED** (students, teachers, exams, fees, etc.)
- ✅ Files: **RETAINED** in storage
- ⏳ Duration: **Indefinite** (no automatic deletion)

**Subscription Status**:
- `end_date`: Set to yesterday (terminated)
- `status`: "Bill Not Generated" or "Over Due"
- `extra_billing_status`: 0 (grace period expired)

**Restoration Process**:
1. School Admin contacts Super Admin or makes payment
2. Super Admin creates new subscription package
3. School regains access immediately
4. All historical data remains intact

---

## Notification System Analysis

### Current Notification Capabilities

The 4SCH system includes a robust notification infrastructure:

#### Push Notifications
- **Available For**: Mobile apps (Student/Teacher/Parent apps)
- **Platforms**: Android, iOS, and web browsers
- **Current Use**: Transportation expiry reminders work perfectly
- **Example**: Drivers receive notifications 7 days before their plan expires

#### Email Notifications
- **System Capability**: Email system is fully configured and working
- **Current Use**: Various system notifications are sent via email
- **Configuration**: Super Admin manages email settings

---

### ⚠️ Critical Finding: NO Subscription Expiry Notifications

**Current Implementation**: ❌ **NOT IMPLEMENTED**

Despite having the notification infrastructure, the system **DOES NOT** currently send:

1. ❌ Email notifications before subscription expiry
2. ❌ Push notifications to School Admin mobile app
3. ❌ Automatic alerts about upcoming expiry (no scheduled reminder is sent for school subscriptions)
4. ❌ Email alerts when grace period is active
5. ❌ Notifications when access is terminated

**Evidence**:
The system has these scheduled tasks configured:
- Daily subscription bill generation ✅ Exists
- Monthly notification cleanup ✅ Exists  
- Daily transportation expiry reminders ✅ Exists
- ❌ NO subscription expiry reminder task exists

**Comparison with Transportation Module**:
- Transportation module: ✅ Sends reminders 7 days before expiry
- Subscription module: ❌ No similar reminder system

---

### Current Warning Mechanism

**Only Active Warning**: Dashboard Visual Alert

**Where**: School Admin Dashboard (home page)
**When**: 14 days or less until expiry
**Type**: Visual banner/alert on dashboard
**Content**:
- Days remaining until expiry
- Upcoming plan information (if auto-renewal enabled)
- Payment prompt

**Limitation**:
- Requires School Admin to **actively login** to see warning
- No proactive outreach to administrators
- Easy to miss if admin doesn't check dashboard regularly

---

## Data Retention & Deletion

### Automatic Retention Policy

**Key Principle**: 🔒 **Schools are NEVER automatically deleted**

**Data Preservation**:
- School databases remain intact indefinitely
- No automatic cleanup of expired schools
- Data preserved even after years of non-payment
- Manual intervention required for any deletion

### Manual Deletion Process

Only **Super Admin** can delete schools. Two-step process:

#### Step 1: Soft Delete (Deactivate)
**Action**: Move to "Trash"

**Process**:
1. Navigate to: **Schools → Select School → Delete**
2. System performs these actions:
   - Sets school status to inactive
   - Marks school record as deleted (but keeps it in database)
   - Deactivates the school admin user account

**Result**:
- School moved to trash
- Data **still preserved**
- Database **still exists**
- Can be restored

#### Step 2: Permanent Delete (Purge)
**Action**: Complete removal from system

**⚠️ WARNING**: This action is **IRREVERSIBLE**

**Process**:
1. Navigate to: **Schools → Trash → Permanently Delete**
2. System performs these **IRREVERSIBLE** actions:
   - Completely removes the school's database from the server
   - Deletes all uploaded files from storage (photos, documents, etc.)
   - Permanently removes the admin user account

**Result**:
- ❌ School database: **DESTROYED**
- ❌ All files: **DELETED**
- ❌ All data: **UNRECOVERABLE**
- ❌ Cannot be restored

---

## Scheduled Tasks (Cron Jobs)

4SCH runs a number of scheduled tasks automatically — generating invoices, applying grace periods, sending reminders, and cleaning up old data. For these to work, your server needs to run the 4SCH task scheduler once a minute.

### Required server configuration

**Critical:** the cron entry below must be set up on the server hosting 4SCH. Without it, no invoices are generated, no grace periods are applied, and no reminders are sent.

**Cron entry**:
```bash
* * * * * cd /your-project-path/ && php artisan schedule:run >> /dev/null 2>&1
```

Add this line to your server's crontab (run `crontab -e` as the user that owns the 4SCH project files). It runs every minute; 4SCH's internal scheduler then decides which individual tasks to actually execute.

### Tasks 4SCH runs for you

#### 1. Subscription bill generation & status management (every night)

**What it does**:
- Generates bills for expired subscriptions
- Moves schools to grace period when their subscription expires
- Terminates schools that exceed the grace period
- Handles auto-renewal if you've configured it

**Runs**: every day at midnight (00:00)

#### 2. Old notifications cleanup (monthly)

**What it does**: removes old read notifications so users' inboxes stay tidy.

**Runs**: once a month

#### 3. Transportation expiry reminders (daily)

**What it does**: sends a push notification to drivers 7 days before their transportation plan expires.

**Runs**: every day

**Note**: a similar automatic reminder for school subscriptions themselves is **not** currently sent. Keep an eye on the expiry warning shown in **Settings → Subscription** instead.

---

## Best Practices & Recommendations

### For Super Administrators

#### 1. Grace Period Configuration
- **Current**: 3 days
- **Recommended**: 7-14 days
- **Rationale**: Allows schools adequate time for payment processing, especially during weekends/holidays

#### 2. Warning Period Configuration
- **Current**: 14 days
- **Recommended**: Keep at 14-30 days
- **Rationale**: Earlier warnings provide more time for renewal planning

#### 3. Regular Monitoring
- Check subscription dashboard weekly
- Review overdue bills regularly
- Follow up with schools approaching expiry
- Monitor trash for old schools needing permanent deletion

#### 4. Communication
- Manually email schools before expiry (system doesn't do this automatically)
- Call schools with high outstanding balances
- Document communication attempts

### For School Administrators

#### 1. Dashboard Monitoring
- **Login regularly** (at least weekly) to check dashboard
- Monitor subscription status and expiry date
- Act on warning messages immediately

#### 2. Payment Planning
- Renew **before** expiry date (avoid grace period)
- Keep payment methods updated
- Enable auto-renewal for uninterrupted service

#### 3. Grace Period Awareness
- Understand you have **3 days** after expiry
- Access terminates on day 4 (users cannot login)
- Payment can be made anytime to restore access

#### 4. Data Backup
- Export important data regularly
- Don't rely on indefinite retention
- Request data export before cancellation

---

## Feature Enhancement Recommendations

### 🚀 Suggested Improvements

Based on the analysis, here are recommended enhancements:

#### 1. Implement Subscription Expiry Reminder System

**What's Needed**: A new automated reminder system similar to transportation reminders

**Proposed Notification Schedule**:
- 30 days before expiry: First email notification
- 14 days before expiry: Second email + push notification
- 7 days before expiry: Third email + push notification
- 3 days before expiry: Urgent email + push notification
- 1 day before expiry: Final warning email + push notification

**Benefits**:
- Proactive communication with schools
- Reduces unintentional lapses
- Improves payment collection
- Better customer experience

#### 2. Email Template System

**Create Templates For**:
- Subscription expiry warnings (multiple urgency levels)
- Grace period activation notice
- Access termination notice
- Payment confirmation
- Subscription renewal confirmation

#### 3. In-App Notifications

**Add to Dashboard**:
- Countdown timer for expiry
- Payment history widget
- Quick renewal button
- Notification bell icon with reminders

#### 4. Auto-Renewal Improvements

**Enhancements**:
- Automatic payment processing (if payment method saved)
- Retry failed payments
- Email notifications for auto-renewal status
- Grace handling for failed auto-renewals

#### 5. Grace Period Notifications

**During Grace Period**:
- Daily email reminders
- Push notifications
- Push notifications on the mobile app
- Dashboard banner with countdown

#### 6. Reporting & Analytics

**Super Admin Dashboard**:
- Schools expiring in next 7/14/30 days
- Overdue schools report
- Revenue forecast based on renewals
- Churn analysis (schools not renewing)

---

## Troubleshooting

### Common Issues

#### 1. "Cron job not running"
**Symptoms**: bills not generated overnight, expired schools not being moved to grace period.

**Solution**:
```bash
# On the server, check that cron is configured for the 4SCH user
crontab -l

# You should see the schedule:run entry
* * * * * cd /var/www/html/your-project && php artisan schedule:run >> /dev/null 2>&1

# To trigger the bill-generation task immediately for testing
cd /var/www/html/your-project
php artisan subscriptionBill:cron
```

If the cron entry isn't there, add it with `crontab -e`. If it is there but tasks still aren't running, check your server's cron logs.

#### 2. "School can still access the system after grace period"
**Symptoms**: users can log in despite the school being overdue.

**Solution**:
- Open the school in **Schools → All Schools** and confirm the status badge (should be **Inactive** or **Suspended**)
- Confirm the **subscription end date** shown for the school
- Review your latest scheduled-task execution logs to confirm the daily job ran
- If everything looks right but access is still allowed, ask the Super Admin to clear the system cache from **Settings → System → Clear Cache**

#### 3. "Warning not showing in the dashboard"
**Symptoms**: no expiry warning is shown even though expiry is approaching.

**Solution**:
- Open **System Settings → Subscription** and confirm the **Expiry Warning Days** value is set to a sensible number (e.g. `7`)
- Confirm the **subscription end date** for the affected school is correct
- Clear your browser cache, or ask the Super Admin to clear the system cache from **Settings → System → Clear Cache**

#### 4. "Cannot restore a deleted school"
**Symptoms**: a school was accidentally deleted.

**Solution**:
- **If soft-deleted (in Trash)**: open **Schools → Trash** and click **Restore** next to the school
- **If permanently deleted**: recovery is not possible from the dashboard. Your only option is to restore from a database backup, if one is available. Contact 4SCH support immediately so they can help locate and restore from the most recent backup.

---

## Configuration Summary

### Current System Configuration

| Setting | Value | Location | Impact |
|---------|-------|----------|--------|
| **Additional Billing Days** | 3 days | System Settings → Subscription | Grace period duration |
| **Current Plan Expiry Warning Days** | 14 days | System Settings → Subscription | When dashboard warning appears |
| **Trial Days** | Configurable | System Settings → Subscription | Free trial duration for new schools |
| **Cron Schedule** | Daily (midnight) | Server crontab | Automated processing frequency |
| **Auto-Delete Schools** | Never | N/A | Schools must be manually deleted |

### Default Behavior

| Event | Automatic Action | Manual Action Required |
|-------|------------------|------------------------|
| Subscription expires | Generate bill, start grace period | None (automatic) |
| Grace period expires | Terminate access, disable features | None (automatic) |
| Payment received | Restore access immediately | Payment processing (manual or gateway) |
| School deletion | None | Super Admin must delete manually |
| Notifications | Dashboard warning only | Emails/calls must be sent manually |

---


## Glossary

| Term | Definition |
|------|------------|
| **Additional Billing Days** | Grace period after subscription expires (currently 3 days) |
| **Current Plan Expiry Warning Days** | Days before expiry when dashboard warning appears (currently 14 days) |
| **Grace Period** | Time after expiry when school can still access system |
| **Extra Billing Status** | Boolean indicating if school is within grace period (1) or not (0) |
| **Soft Delete** | Marking record as deleted without removing from database |
| **Force Delete** | Permanent removal from database (irreversible) |
| **Auto-Renewal** | Automatic subscription renewal without manual intervention |
| **Subscription Bill** | Invoice generated when subscription expires |
| **Due Date** | end_date + additional_billing_days (payment deadline) |

---

## Related Documentation

- [School Management Guide](school-admin.md)
- [System Settings Configuration](../reference/admin-quick-reference.md)
- [Expense Management](expense-management.md)
- [Troubleshooting Guide](../support/troubleshooting.md)

---

## Changelog

| Date | Version | Changes |
|------|---------|---------|
| 2026-03-27 | 1.0 | Initial documentation based on codebase analysis |

---

**Document Status**: ✅ Complete and Accurate
**Last Reviewed**: March 27, 2026
**Configuration Based On**: 4SCH v3.x (PHP Laravel Backend)
**Settings**: Additional Billing Days = 3, Warning Days = 14
