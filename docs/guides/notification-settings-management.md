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
- **Push Notifications** - Pop-up alerts on the 4SCH mobile app
- **Email Notifications** - Sent to registered email addresses
- **SMS Notifications** - Text messages to registered mobile numbers
- **In-App Notifications** - Listed in the bell icon when you're signed in
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
- **Email** - Sent through 4SCH's built-in email service, or from your school's own email account
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

### For Admins: Turning Push Notifications On

Push notifications are powered by a Google service called Firebase Cloud Messaging. Most schools never need to touch the technical side of this — your 4SCH support representative will have it set up before you go live, and you can confirm it's working by sending a test notification (see [Sending Bulk Notifications](#sending-notifications) below).

If your school is self-hosting 4SCH or wants to use its own Firebase account, the step-by-step setup instructions live in the [Integration Guides](../reference/integrations.md). Once your support contact has connected your Firebase account, push notifications work automatically — there's nothing else for you to do in the admin dashboard.

---

## 📧 Email Notification Configuration {#email-notifications}

Email notifications are sent to users' registered email addresses.

### Choosing How Email Is Sent (Admin Only)

You have three easy options for email — pick the one that fits your school best.

**Step 1: Open Email Settings**
1. Log in as **School Admin**
2. Go to **Settings → Email Settings**

**Step 2: Choose your email option**

- **Use 4SCH's built-in email service** *(recommended for most schools)* — turn it on and you're done. Messages are sent on your school's behalf.
- **Send from your school's Gmail or Microsoft 365 account** — pick the matching option, click **Sign in with Google** or **Sign in with Microsoft**, sign in to your school's account in the pop-up window, and click **Allow**. A green **Connected** badge appears when it's working.
- **Use a custom email provider** — your IT provider can paste the details into the form. If your school has bought a dedicated bulk-email service (e.g. SendGrid, Mailgun), your 4SCH support representative can connect it for you in a few minutes.

**Step 3: Set the sender details**
- **From name** — what parents see in their inbox (e.g. "ABC School")
- **Reply-to** — the school address you'd like replies to go to (optional)

**Step 4: Send a test email**
Click **Send Test Email**, type any address, and click **Send**. You should see the message arrive within a few seconds. If it works, click **Save**.

:::tip Sending lots of emails?
If your school regularly sends thousands of messages a week (e.g. termly report cards to every parent), contact 4SCH support — they'll help you switch on a high-volume email plan so nothing is delayed.
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
   - **Body** - Email content (supports variables like `{student_name}`, `{class}`, `{date}`)
3. Use provided variables to personalize emails
4. Click **Save**

**Available Variables (examples):**
- `\{school_name\}` - Your school name
- `\{student_name\}` - Student's full name
- `\{parent_name\}` - Parent's name
- `\{class\}` - Student's class
- `\{date\}` - Current date or event date
- `\{amount\}` - Fee amount (for fee notifications)

---

## 📲 SMS Notification Configuration {#sms-notifications}

SMS notifications are sent as text messages to mobile phones.

### Setting Up SMS (Admin Only)

**Step 1: Choose an SMS provider**
Popular options:
- Twilio (Global)
- Msg91 (India)
- Termii (Nigeria)
- Africa's Talking (Africa)

Sign up on your chosen provider's website if you don't already have an account.

**Step 2: Connect the provider to 4SCH**
1. Go to **Settings → SMS Settings**
2. Select your provider from the dropdown
3. Paste the access keys your provider gave you into the matching boxes (the field labels in 4SCH match the labels on the provider's own site)
4. Set the **Sender ID** parents will see on their phone (e.g. "ABCSchool")
5. Click **Save** — a green **Connected** badge appears when it's working

**Step 3: Send a test SMS**
1. Click **Send Test SMS**
2. Enter a mobile number (include the country code, e.g. +234…)
3. Click **Send** and check the phone

:::tip Need help with the access keys?
If you're not sure where to find them on your provider's website, contact 4SCH support — they can walk you through the screens in a quick call.
:::

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
   - ☑ **Push Notification** (if push is set up)
   - ☑ **Email** (if email is set up)
   - ☑ **SMS** (if an SMS provider is connected)
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

1. **Push not switched on yet**
   - Go to **Settings → Push Notifications**
   - Confirm the status shows **Connected** — if it doesn't, contact 4SCH support
   - Send a test notification to confirm it's working

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

6. **Mobile app rebuilt with new branding**
   - If your school recently switched mobile-app branding or domain, contact 4SCH support to refresh the push connection

---

### Email Notifications Not Sent

**Problem:** Emails not being delivered

**Solutions:**

1. **Email not set up yet**
   - Go to **Settings → Email Settings**
   - Confirm the status shows **Connected**
   - Click **Send Test Email** to confirm

2. **Sign-in to Gmail/Microsoft expired**
   - Open Email Settings and click **Reconnect** — sign in again in the pop-up

3. **Emails going to spam**
   - Ask users to check their spam/junk folder
   - Ask them to add your school's sender address to their contacts
   - Use a professional sender address (not a free gmail.com address)

4. **Wrong email address on file**
   - Open the user's profile and check the email field for typos

5. **Sending lots of email all at once**
   - Free email accounts (like Gmail) often cap at 500 messages a day
   - Contact 4SCH support to switch to a high-volume email plan during busy periods (e.g. termly report cards)

---

### SMS Notifications Not Delivered

**Problem:** SMS messages not received

**Solutions:**

1. **SMS provider not connected yet**
   - Go to **Settings → SMS Settings**
   - Confirm the status shows **Connected**
   - Click **Send Test SMS** to confirm

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
- ✅ Confirm push notifications are connected
- ✅ Connect your email option for email notifications
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
