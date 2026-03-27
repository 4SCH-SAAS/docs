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

**Code Reference** (`DashboardController.php`, line 136):
```php
if ($license_expire <= ($settings['current_plan_expiry_warning_days'] ?? 7) && $subscription) {
    // Display warning banner with expiry information
    // Shows upcoming plan if auto-renewal is enabled
}
```

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

**Database Changes**:
```sql
-- New record created
INSERT INTO subscription_bills (
    subscription_id,
    amount,
    due_date = end_date + 3 days,
    created_at = end_date + 1 day
)
```

**User Experience**:
- ✅ School continues operating normally
- ✅ Teachers/Students can login
- ✅ All features accessible
- 📊 Dashboard may show payment due notice

**Cron Job Configuration**:
```bash
# Must be configured on server (runs daily at midnight)
cd /your-project-path/ && php artisan schedule:run >> /dev/null 2>&1
```

---

### Phase 4: Grace Period (Days 1-3 After Expiry)
**Status**: 🕒 Grace Period Active

**Duration**: 3 days (configurable via Additional Billing Days)

**Subscription Status Display**:
- Bill shows: **"Unpaid"** (before due_date)
- After due_date passes: **"Over Due"**

**System Behavior**:
```php
// Subscription.php - getExtraBillingStatusAttribute()
$extra_day = end_date + additional_billing_days; // +3 days
if (today <= $extra_day) {
    extra_billing_status = 1; // Still within grace
}
```

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

**Automated Actions** (Daily Cron Job):

#### 1. Identify Overdue Bills
```php
// SubscriptionBillCron.php - Line 62
$subscriptionBill = SubscriptionBill::whereHas('transaction', function($q) {
    $q->whereNot('payment_status',"succeed");
})->where('due_date','<',$today_date)->get();
```

#### 2. Terminate Current Subscription
```php
// Sets end_date to yesterday
Subscription::where('school_id', $bill->school_id)
    ->where('start_date','<=', $today_date)
    ->where('end_date','>=', $today_date)
    ->update(['end_date' => Carbon::yesterday()->format('Y-m-d')]);
```

#### 3. Delete Future Plans
```php
// Remove any upcoming scheduled subscriptions
Subscription::where('school_id', $bill->school_id)
    ->where('start_date','>', $today_date)
    ->delete();

AddonSubscription::where('school_id', $bill->school_id)
    ->where('start_date','>', $today_date)
    ->delete();
```

#### 4. Disable Auto-Renewal
```php
// Prevent automatic renewal attempts
SchoolSetting::updateOrCreate([
    'school_id' => $bill->school_id,
    'name' => 'auto_renewal_plan'
], ['data' => 0]);
```

#### 5. Clear Feature Cache
```php
// Remove cached features for the school
$cache->removeSchoolCache(
    config('constants.CACHE.SCHOOL.FEATURES'),
    $bill->school_id
);
```

**User Access Impact**:
- ❌ Students/Teachers: **BLOCKED from login**
- ❌ School Admin: **May be blocked** (if school status changed)
- 🚫 Login attempt shows: *"Your account has been deactivated. Please contact admin."*

**Middleware Protection** (`CheckSchoolStatus.php`):
```php
if (Auth::user()->hasRole('Student') || Auth::user()->hasRole('Teacher')) {
    if ($user->school->status == 0 || $user->status == 0) {
        // Reject login with deactivation message
        return redirect()->route('login')
            ->with('error', 'Your account has been deactivated');
    }
}
```

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

#### FCM (Firebase Cloud Messaging) Push Notifications
- **Target**: Mobile apps (Student/Teacher/Parent apps)
- **Method**: `send_notification()` helper function
- **Delivery**: Queued job via `SendFcmNotification`
- **Platforms**: Android/iOS mobile apps + Web notifications

**Example Usage** (from `TransportationExpiryReminder.php`):
```php
send_notification(
    [$userId],                    // Recipients
    $title,                       // Notification title
    $body,                        // Notification message
    'Transportation',             // Type/Category
    ['user_id' => $userId]       // Custom data
);
```

#### Email Notifications
- **Infrastructure**: Laravel Mail system configured
- **Templates**: Blade-based email templates available
- **Configuration**: SMTP settings in System Settings

---

### ⚠️ Critical Finding: NO Subscription Expiry Notifications

**Current Implementation**: ❌ **NOT IMPLEMENTED**

Despite having the notification infrastructure, the system **DOES NOT** currently send:

1. ❌ Email notifications before subscription expiry
2. ❌ Push notifications to School Admin mobile app
3. ❌ SMS notifications about upcoming expiry
4. ❌ Email alerts when grace period is active
5. ❌ Notifications when access is terminated

**Evidence**:
```bash
# Scheduled cron jobs (Kernel.php, line 24-26)
$schedule->command('subscriptionBill:cron')->daily();        # ✅ Exists
$schedule->command('notifications:delete')->monthly();       # ✅ Exists
$schedule->command('transport:expiry-reminder')->daily();    # ✅ Exists
# ❌ NO subscription:expiry-reminder command exists
```

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
2. System performs:
   ```php
   // SchoolController@destroy
   - Set school status = 0 (inactive)
   - Soft delete school record (add deleted_at timestamp)
   - Soft delete admin user account
   ```

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
2. System performs:
   ```php
   // SchoolController@trash
   - DROP DATABASE `school_[database_name]`  // ⚠️ Complete database deletion
   - Delete all uploaded files from storage
   - Force delete admin user (permanent)
   ```

**Result**:
- ❌ School database: **DESTROYED**
- ❌ All files: **DELETED**
- ❌ All data: **UNRECOVERABLE**
- ❌ Cannot be restored

---

## Scheduled Tasks (Cron Jobs)

### Required Server Configuration

**Critical**: Cron job must be configured on server for system to function properly.

**Cron Command**:
```bash
* * * * * cd /your-project-path/ && php artisan schedule:run >> /dev/null 2>&1
```

**Schedule**: Every minute (Laravel scheduler determines which tasks to run)

### Active Scheduled Tasks

#### 1. Subscription Bill Cron (Daily - Midnight)
```php
// Kernel.php, line 24
$schedule->command('subscriptionBill:cron')->daily();
```

**Purpose**: 
- Generate bills for expired subscriptions
- Terminate subscriptions after grace period
- Handle auto-renewal if configured

**Runs**: Every day at 00:00 (midnight)

#### 2. Delete Notifications (Monthly)
```php
// Kernel.php, line 25
$schedule->command('notifications:delete')->monthly();
```

**Purpose**: Clean up old notifications from database

#### 3. Transportation Expiry Reminder (Daily)
```php
// Kernel.php, line 26
$schedule->command('transport:expiry-reminder')->daily();
```

**Purpose**: Send push notifications 7 days before transport plan expiry

**Note**: Similar reminder does NOT exist for subscriptions

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

**Create New Command**: `SubscriptionExpiryReminder.php`

**Proposed Schedule**:
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
- SMS alerts (if configured)
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
**Symptoms**: Bills not generated, subscriptions not terminating
**Solution**: 
```bash
# Verify cron is configured
crontab -l

# Should show:
* * * * * cd /var/www/html/your-project && php artisan schedule:run >> /dev/null 2>&1

# Test manually
cd /var/www/html/your-project
php artisan subscriptionBill:cron
```

#### 2. "School can still access after grace period"
**Symptoms**: Users can login despite overdue status
**Solution**:
- Check `CheckSchoolStatus` middleware is applied
- Verify school status in database
- Check subscription end_date value
- Review cron job execution logs

#### 3. "Warning not showing in dashboard"
**Symptoms**: No expiry warning despite approaching expiry
**Solution**:
- Verify `current_plan_expiry_warning_days` setting
- Check subscription end_date calculation
- Review DashboardController logic
- Clear cache: `php artisan cache:clear`

#### 4. "Cannot restore deleted school"
**Symptoms**: Accidentally deleted school
**Solution**:
- If soft deleted: Use restore function in trash
- If permanently deleted: **NO RECOVERY POSSIBLE**
- Restore from database backup (if available)

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

## Technical Reference

### Key Files

| File | Purpose |
|------|---------|
| `app/Console/Commands/SubscriptionBillCron.php` | Daily cron for bill generation and termination |
| `app/Console/Kernel.php` | Scheduled tasks configuration |
| `app/Models/Subscription.php` | Subscription model with status logic |
| `app/Http/Middleware/CheckSchoolStatus.php` | Access control middleware |
| `app/Http/Controllers/DashboardController.php` | Warning display logic |
| `app/Http/Controllers/SchoolController.php` | School deletion logic |
| `app/Helpers/notification_helper.php` | Push notification functions |

### Database Tables

| Table | Purpose |
|-------|---------|
| `subscriptions` | Main subscription records |
| `subscription_bills` | Generated bills for expired subscriptions |
| `schools` | School information and status |
| `system_settings` | Platform-wide configuration |
| `school_settings` | Per-school settings (auto-renewal, etc.) |

### Key Database Fields

```sql
-- subscriptions table
id, package_id, school_id, start_date, end_date, billing_cycle, package_type

-- subscription_bills table
id, subscription_id, amount, due_date, created_at

-- schools table
id, name, status, database_name, deleted_at

-- system_settings table
name ('additional_billing_days', 'current_plan_expiry_warning_days'), data
```

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
- [Payment Gateway Setup](../guides/fee-management.md)
- [Database Backup Procedures](../support/troubleshooting.md)

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
