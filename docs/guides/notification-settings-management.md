---
id: notification-settings-management
title: Notification Settings & Management
sidebar_label: Notification Settings
description: Complete guide for managing notifications, configuring notification preferences, sending bulk notifications, and troubleshooting notification delivery.
keywords: [notifications, push notifications, email notifications, SMS notifications, notification settings, notification preferences, FCM, Firebase, bulk notifications, alerts]
---

# Notification Settings & Management

**Roles:** School Admin (configure), All Users (manage preferences)

Notifications keep the school community informed about important events, updates, and activities. This guide covers how to configure notification settings, manage user preferences, send bulk notifications, and troubleshoot delivery issues.

:::info Notification Types
The system supports multiple notification channels:
- **Push Notifications** - Mobile app alerts (requires FCM setup)
- **Email Notifications** - Sent to registered email addresses
- **SMS Notifications** - Text messages (requires SMS gateway)
- **In-App Notifications** - Visible when logged into the system
:::

---

## Overview

### Notification System Components

**1. System Notifications (Automatic)**
- Triggered by system events (new assignment, exam scheduled, etc.)
- Sent automatically based on rules
- Users can enable/disable specific types

**2. Custom Notifications (Manual)**
- Created by admins
- Sent to selected user groups
- Can include images and custom messages

**3. Notification Channels**
- **In-App** - Always available, no configuration needed
- **Push** - Requires Firebase Cloud Messaging (FCM) setup
- **Email** - Requires SMTP configuration
- **SMS** - Requires SMS gateway integration

---

## 🔔 User Notification Preferences {#user-preferences}

Every user can control which notifications they receive.

### Accessing Notification Settings

**For Students/Parents/Teachers:**
1. Log in to your account
2. Click on **Profile** or **Settings** icon
3. Go to **Notification Preferences** or **Notifications**
4. You'll see a list of notification types

**For Admins:**
- Same process, but you have additional bulk notification options

### Enabling/Disabling Notification Types

**Common Notification Types:**

**For Parents:**
- ☑ **Attendance Alerts** - Child marked absent
- ☑ **Fee Reminders** - Payment due dates
- ☑ **Assignment Notifications** - New homework assigned
- ☑ **Exam Announcements** - Upcoming exams
- ☑ **Result Publication** - Grades available
- ☑ **General Announcements** - School-wide messages
- ☑ **Transport Alerts** - Route changes, delays

**For Students:**
- ☑ **Assignment Deadlines** - Homework due soon
- ☑ **Exam Reminders** - Upcoming tests
- ☑ **Grade Notifications** - Results published
- ☑ **Announcements** - Important school news
- ☑ **Timetable Changes** - Schedule updates

**For Teachers:**
- ☑ **Assignment Submissions** - Student submitted work
- ☑ **Leave Requests** - Leave approval needed
- ☑ **Admin Messages** - School management communications
- ☑ **Exam Schedules** - Exam duty assignments

**How to Configure:**
1. Check/uncheck boxes next to each notification type
2. Click **Save** or **Update Preferences**
3. Changes take effect immediately

:::tip Recommendation
Keep critical notifications enabled:
- Parents: Attendance alerts, fee reminders
- Students: Assignment deadlines, exam reminders
- Teachers: Assignment submissions, admin messages
:::

---

## 📱 Push Notification Setup (Mobile App) {#push-notifications}

Push notifications appear on mobile devices even when the app is closed.

### For Users: Enabling Push Notifications

**Step 1: Install Mobile App**
1. Download the school's mobile app from App Store (iOS) or Play Store (Android)
2. Log in with your credentials

**Step 2: Grant Notification Permission**
1. When prompted "Allow notifications?", tap **Allow**
2. If you accidentally denied, go to phone settings:
   - **iOS:** Settings → [App Name] → Notifications → Allow Notifications (ON)
   - **Android:** Settings → Apps → [App Name] → Notifications → Allow Notifications (ON)

**Step 3: Configure Preferences**
1. In the app, go to **Settings → Notifications**
2. Choose which notifications you want to receive
3. Save preferences

:::caution Battery Optimization
On Android, disable battery optimization for the school app to ensure notifications are received. Go to Settings → Battery → Battery Optimization → Select app → Don't optimize.
:::

---

### For Admins: Configuring FCM (Firebase Cloud Messaging)

Push notifications require Firebase Cloud Messaging (FCM) configuration.

**Prerequisites:**
- Google Firebase account
- Firebase project created for your school

**Step 1: Obtain FCM Credentials**
1. Go to [Firebase Console](https://console.firebase.google.com/)
2. Select your project (or create new)
3. Go to **Project Settings** (gear icon)
4. Navigate to **Cloud Messaging** tab
5. Copy:
   - **Server Key** (for backend)
   - **Sender ID**

**Step 2: Configure in School System**
1. Log in as **School Admin**
2. Go to **Settings → FCM Settings** (or **Settings → Push Notifications**)
3. Enter:
   - **FCM Server Key** - Paste the server key from Firebase
   - **Sender ID** - Paste the sender ID
4. Click **Save**

**Step 3: Test Push Notifications**
1. Send a test notification (see [Sending Bulk Notifications](#sending-notifications))
2. Verify it appears on a mobile device with the app installed
3. If not received, check troubleshooting section

:::tip Firebase Setup Guide
For detailed Firebase project setup, see the [Integration Guides](../reference/integrations.md) or contact support.
:::

---

## 📧 Email Notification Configuration {#email-notifications}

Email notifications are sent to users' registered email addresses.

### SMTP Configuration (Admin Only)

**Step 1: Access Email Settings**
1. Log in as **School Admin**
2. Go to **Settings → Email Settings** (or **Settings → SMTP Configuration**)

**Step 2: Enter SMTP Details**
- **Mail Driver** - Usually "SMTP"
- **Mail Host** - SMTP server address (e.g., smtp.gmail.com, smtp.office365.com)
- **Mail Port** - Port number (usually 587 for TLS, 465 for SSL)
- **Mail Username** - Your email address (e.g., school@example.com)
- **Mail Password** - Email password or app-specific password
- **Mail Encryption** - TLS or SSL
- **Mail From Address** - Email address shown as sender
- **Mail From Name** - Display name (e.g., "ABC School")

**Step 3: Test Email**
1. Click **Send Test Email**
2. Enter a test email address
3. Click **Send**
4. Check if test email was received
5. If successful, click **Save Configuration**

**Common SMTP Providers:**

**Gmail:**
```
Host: smtp.gmail.com
Port: 587
Encryption: TLS
Note: Use App Password, not regular password
```

**Microsoft 365/Outlook:**
```
Host: smtp.office365.com
Port: 587
Encryption: STARTTLS
```

**SendGrid (Recommended for bulk):**
```
Host: smtp.sendgrid.net
Port: 587
Username: apikey
Password: Your SendGrid API Key
```

:::caution Gmail App Passwords
If using Gmail, enable 2-Step Verification and generate an App Password at https://myaccount.google.com/apppasswords. Use the app password, not your regular Gmail password.
:::

---

### Email Templates

Customize email notification templates:

**Step 1: Access Email Templates**
1. Go to **Settings → Email Templates**
2. You'll see templates for different notification types:
   - Fee reminder
   - Attendance alert
   - Exam announcement
   - etc.

**Step 2: Edit Template**
1. Click **Edit** on a template
2. Modify:
   - **Subject Line** - Email subject
   - **Body** - Email content (supports variables like {student_name}, {class}, {date})
3. Use provided variables to personalize emails
4. Click **Save**

**Available Variables (examples):**
- `{school_name}` - Your school name
- `{student_name}` - Student's full name
- `{parent_name}` - Parent's name
- `{class}` - Student's class
- `{date}` - Current date or event date
- `{amount}` - Fee amount (for fee notifications)

---

## 📲 SMS Notification Configuration {#sms-notifications}

SMS notifications are sent as text messages to mobile phones.

### SMS Gateway Setup (Admin Only)

**Step 1: Choose SMS Provider**
Popular options:
- Twilio (Global)
- Msg91 (India)
- Termii (Nigeria)
- Africa's Talking (Africa)
- Custom gateway

**Step 2: Configure SMS Settings**
1. Go to **Settings → SMS Settings**
2. Select your SMS provider from dropdown
3. Enter credentials:
   - **API Key** or **Auth Token**
   - **Sender ID** (e.g., "ABCSchool")
   - **Account SID** (if using Twilio)
4. Click **Save**

**Step 3: Test SMS**
1. Click **Send Test SMS**
2. Enter a mobile number
3. Click **Send**
4. Verify SMS received

:::tip SMS Costs
SMS notifications incur costs per message. Monitor usage and budget accordingly. Consider using SMS for critical alerts only (attendance, fees) and email for general updates.
:::

---

## 📣 Sending Bulk Notifications {#sending-notifications}

Admins can send custom notifications to specific user groups.

### Creating a Custom Notification

**Step 1: Access Notification Center**
1. Log in as **School Admin**
2. Go to **Communication → Notifications** (or **Send Notification**)

**Step 2: Create Notification**
1. Click **Send Notification** or **Create New**
2. Fill in details:
   - **Title** *(required)* - Notification headline
   - **Message** *(required)* - Notification content
   - **Image** *(optional)* - Attach image (for visual notifications)
   - **Send To** *(required)* - Select recipient group

**Send To Options:**
- **All Users** - Everyone in the school
- **All Students** - All enrolled students
- **All Parents** - All guardian accounts
- **All Teachers** - All teaching staff
- **All Staff** - Non-teaching staff
- **Specific Class** - Students in selected class/section
- **Custom** - Manually select individual users

3. Choose delivery channels:
   - ☑ **Push Notification** (if FCM configured)
   - ☑ **Email** (if SMTP configured)
   - ☑ **SMS** (if SMS gateway configured)
   - ☑ **In-App** (always available)

4. Click **Send** or **Schedule**

**Example:**
```
Title: School Closure - Weather Alert
Message: Due to heavy rain, school will be closed tomorrow (March 18). Online classes will be held as per timetable. Stay safe!
Image: [Upload weather alert graphic]
Send To: All Users
Channels: Push + Email + SMS
```

:::tip Scheduling Notifications
Some systems allow scheduling notifications for future delivery. Use this to prepare announcements in advance and send at optimal times.
:::

---

### Bulk Notification Best Practices

**Do:**
- ✅ Keep messages concise and clear
- ✅ Use descriptive titles
- ✅ Send time-sensitive info via Push/SMS
- ✅ Use "All Users" sparingly (avoid notification fatigue)
- ✅ Proofread before sending (can't be recalled)

**Don't:**
- ❌ Send marketing/promotional content
- ❌ Overuse SMS (costs money)
- ❌ Send non-urgent messages late at night
- ❌ Include sensitive personal info (use secure channels)

**Frequency Guidelines:**
- **Daily:** Announcements, reminders (in-app/email)
- **Weekly:** Newsletters, updates (email)
- **As-needed:** Urgent alerts (push/SMS)
- **Avoid:** Multiple messages per hour

---

## 🔍 Viewing Notification History {#notification-history}

Track sent notifications and delivery status.

### For Admins

**View Sent Notifications:**
1. Go to **Communication → Notification History** (or **Sent Notifications**)
2. You'll see a list of all notifications sent:
   - Date and time sent
   - Title and message
   - Sent to (recipient group)
   - Delivery channels used
   - Read/unread status (for in-app notifications)

**Delivery Reports:**
- View how many users received/opened notifications
- Check failed deliveries
- Export delivery reports for records

### For Users

**View Your Notifications:**
1. Click the **notification bell icon** in the header
2. See list of notifications you've received
3. Click to read unread notifications
4. Mark as read or delete

---

## 🛠️ Troubleshooting {#troubleshooting}

### Push Notifications Not Received

**Problem:** Users not receiving push notifications on mobile app

**Possible Causes & Solutions:**

1. **FCM not configured**
   - Go to Settings → FCM Settings
   - Verify Server Key and Sender ID are entered correctly
   - Test with a sample notification

2. **User didn't allow app permissions**
   - Ask user to check phone Settings → Apps → [School App] → Notifications
   - Ensure "Allow Notifications" is ON

3. **Battery optimization blocking notifications (Android)**
   - Go to Settings → Battery → Battery Optimization
   - Find school app and select "Don't optimize"

4. **User logged out of app**
   - Notifications only received when logged in
   - Ask user to log back in

5. **Outdated app version**
   - Update to latest version from App Store/Play Store

6. **Firebase project misconfigured**
   - Verify Firebase project has correct package name (Android) or bundle ID (iOS)
   - Check FCM credentials haven't expired

---

### Email Notifications Not Sent

**Problem:** Emails not being delivered

**Solutions:**

1. **SMTP not configured**
   - Go to Settings → Email Settings
   - Verify all SMTP details are correct
   - Send test email

2. **Incorrect email credentials**
   - Double-check username and password
   - For Gmail, use App Password, not regular password

3. **Emails going to spam**
   - Ask users to check spam/junk folder
   - Add school email to contacts
   - Use professional email domain (not gmail.com for sender)

4. **Port blocked by firewall**
   - Try different port (587, 465, or 25)
   - Contact hosting provider about port restrictions

5. **Email address invalid**
   - Verify user's email address is correct
   - Check for typos

6. **Daily sending limit reached**
   - Gmail: 500 emails/day
   - Use dedicated email service (SendGrid, Mailgun) for bulk emails

---

### SMS Notifications Not Delivered

**Problem:** SMS messages not received

**Solutions:**

1. **SMS gateway not configured**
   - Go to Settings → SMS Settings
   - Verify API credentials
   - Send test SMS

2. **Invalid mobile number**
   - Check mobile number format (must include country code)
   - Example: +234 812 345 6789 (Nigeria)

3. **Insufficient SMS balance**
   - Check SMS gateway account balance
   - Top up credits

4. **Sender ID not approved**
   - Some countries require sender ID registration
   - Contact SMS provider to register sender ID

5. **Network issues**
   - User's network may be down
   - Try resending after some time

---

### In-App Notifications Not Showing

**Problem:** Notifications not visible in the bell icon

**Solutions:**

1. **User hasn't refreshed page**
   - Ask user to refresh browser (F5)
   - Or log out and back in

2. **Notification preferences disabled**
   - Check Settings → Notification Preferences
   - Ensure desired notification types are enabled

3. **Browser cache**
   - Clear browser cache
   - Try incognito/private mode

4. **Session expired**
   - Log out and back in

---

### "Notification Already Read" Issue

**Problem:** Notification shows as read even though user didn't open it

**Cause:**
- Notification opened on one device (e.g., mobile app)
- Syncs across all devices as "read"

**This is normal behavior** - notifications are user-specific, not device-specific.

---

## 📊 Notification Analytics {#analytics}

Track notification effectiveness.

### Metrics to Monitor

**Delivery Metrics:**
- Total notifications sent
- Successfully delivered
- Failed deliveries
- Bounce rate (emails)

**Engagement Metrics:**
- Open rate (how many users opened)
- Click-through rate (if notification has links)
- Time to open (how quickly users read)

**Channel Performance:**
- Push vs Email vs SMS effectiveness
- Best time to send (morning vs evening)

### Optimizing Notifications

**Based on Analytics:**
1. **Low open rates?** → Improve titles, send at better times
2. **High unsubscribe?** → Reduce frequency, improve relevance
3. **Email bounces?** → Clean email list, verify addresses
4. **SMS failures?** → Validate mobile numbers, check format

---

## 🔐 Privacy & Compliance {#privacy}

### User Privacy

**Respect User Preferences:**
- Don't send to users who've disabled notifications
- Honor unsubscribe requests immediately
- Don't share contact info with third parties

**Data Protection:**
- Don't include sensitive personal info in notifications
- Use secure channels for confidential communications
- Comply with data protection laws (GDPR, etc.)

### Opt-Out Management

**Allow users to:**
- Disable specific notification types
- Unsubscribe from emails (include unsubscribe link)
- Opt-out of SMS (provide STOP keyword)

**Don't:**
- Force users to receive all notifications
- Make opt-out difficult to find
- Re-enable notifications without consent

---

## 🔗 Related Features

- **[Homepage Content Management](homepage-content-management.md)** - Creating announcements that trigger notifications
- **[Admin Dashboard](admin-dashboard-analytics.md#notifications)** - Dashboard notification alerts
- **[Parent Guide](parents.md#enabling-notifications)** - Parent-specific notification setup
- **[Student Guide](students.md)** - Student notification preferences

---

## Summary Checklist

**For Admins (Initial Setup):**
- ✅ Configure FCM for push notifications
- ✅ Set up SMTP for email notifications
- ✅ Configure SMS gateway (if using SMS)
- ✅ Test all notification channels
- ✅ Customize email templates
- ✅ Document notification policies

**For Users (Daily Use):**
- ✅ Enable notifications for your role
- ✅ Allow push notifications on mobile app
- ✅ Keep email address updated
- ✅ Check notifications regularly
- ✅ Disable unwanted notification types

**For Admins (Sending Notifications):**
- ✅ Choose appropriate recipient group
- ✅ Write clear, concise message
- ✅ Select right delivery channels
- ✅ Send at optimal times
- ✅ Monitor delivery and engagement

---

Notifications keep your school community connected and informed. Configure them properly, respect user preferences, and use them wisely! 🔔📱✨
