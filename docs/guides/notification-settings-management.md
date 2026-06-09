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
- **Email** - Requires SMTP configuration (Settings → Email Settings)
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

### For Admins: Configuring Push Notifications (FCM)

Push notifications are delivered through Google's free service, **Firebase Cloud Messaging (FCM)**. You need a free Firebase project for your school, and you'll paste two pieces of information from it into 4SCH.

**Prerequisites**
- A Google account
- A Firebase project for your school (free — takes about five minutes to create at [console.firebase.google.com](https://console.firebase.google.com/))

**Step 1: Get the FCM details from your Firebase project**

1. Open your project at [console.firebase.google.com](https://console.firebase.google.com/)
2. Click the gear icon and choose **Project Settings**
3. Open the **Cloud Messaging** tab
4. Make a note of:
   - **Server Key** — the long string under "Cloud Messaging API (Legacy)"
   - **Sender ID** — a short number near the top of the page

**Step 2: Paste them into 4SCH**

1. Sign in as **School Admin**
2. Go to **Settings → FCM Settings** (also labelled **Settings → Push Notifications** on some setups)
3. Fill in the form:
   - **FCM Server Key** — paste the Server Key
   - **Sender ID** — paste the Sender ID
4. Click **Save**

**Step 3: Send a test notification**

Follow the steps under [Sending Bulk Notifications](#sending-notifications) to send a test alert and confirm it pops up on a phone with the app installed.

:::tip Need a hand?
The full step-by-step Firebase walkthrough (with screenshots) lives in the [Integration Guides](../reference/integrations.md). If you get stuck, 4SCH support can also walk you through it on a short call.
:::

---

## 📧 Email Notification Configuration {#email-notifications}

Email notifications are sent to users' registered email addresses.

### Configuring Email (Admin Only)

4SCH sends email through your school's chosen email service. You enter the connection details once, then 4SCH uses them whenever it needs to send an email.

**Step 1: Open Email Settings**
1. Sign in as **School Admin**
2. Go to **Settings → Email Settings**

**Step 2: Fill in the form**

The page shows a single form. Fill it in using the details supplied by your email provider:

- **Mail Driver** — usually `smtp`
- **Mail Host** — the server address from your provider (e.g. `smtp.gmail.com`, `smtp.office365.com`, `smtp.sendgrid.net`)
- **Mail Port** — the port your provider uses (typically `587` for TLS, `465` for SSL)
- **Mail Username** — usually the email address you're sending from
- **Mail Password** — the password your provider expects (for Gmail/M365 this is an App Password, not your normal login password — see the tip below)
- **Mail Encryption** — `tls` or `ssl` (match what your provider tells you)
- **Mail From Address** — the address parents see as the sender (e.g. `school@example.com`)
- **Mail From Name** — the display name parents see (e.g. "ABC School")

**Step 3: Send a test email**
Click **Send Test Email**, enter any address, and click **Send**. The message should arrive within a few seconds. When you see it land, click **Save** to keep the settings.

**Common providers**

| Provider | Mail Host | Port | Encryption | Notes |
|---|---|---|---|---|
| Gmail | `smtp.gmail.com` | 587 | TLS | Use an App Password, not your normal Gmail password |
| Microsoft 365 / Outlook | `smtp.office365.com` | 587 | STARTTLS | Use an App Password if 2-Step Verification is on |
| SendGrid (good for bulk) | `smtp.sendgrid.net` | 587 | TLS | Mail Username is the word `apikey`, Mail Password is the SendGrid API Key |

:::tip Gmail & Microsoft 365 App Passwords
For Gmail or Microsoft 365 accounts with 2-Step Verification turned on, you need to generate an **App Password** to use in the **Mail Password** field — your normal account password won't work.

- **Gmail:** go to [myaccount.google.com/apppasswords](https://myaccount.google.com/apppasswords) and generate a 16-character app password.
- **Microsoft 365:** go to [account.microsoft.com/security](https://account.microsoft.com/security) → **Advanced security options** → **App passwords**.

Paste the generated password into the **Mail Password** field in 4SCH.
:::

:::note Sending lots of emails?
Free Gmail accounts cap at around 500 messages a day. If your school sends thousands a week (e.g. termly report cards to every parent), use a dedicated bulk-email service like SendGrid or Mailgun — set it up the same way using the details on that provider's site.
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

### SMS Gateway Setup (Admin Only)

**Step 1: Choose an SMS provider**

Popular options:
- Twilio (global)
- Msg91 (India)
- Termii (Nigeria)
- Africa's Talking (Africa)

Sign up on your chosen provider's website if you don't already have an account.

**Step 2: Get your credentials from the provider**

On your provider's website, open the page they label **API Keys** (Termii, Msg91, Africa's Talking) or **Account** (Twilio). You'll need to copy two values:
- An **API Key** or **Auth Token** — Twilio calls this the **Auth Token**, others usually call it the **API Key**
- An **Account ID** — Twilio calls this the **Account SID**; some providers don't have one

**Step 3: Enter them in 4SCH**

1. Go to **Settings → SMS Settings**
2. Select your provider from the **SMS Gateway** dropdown
3. Fill in the fields that appear:
   - **API Key** / **Auth Token** — paste the value from your provider
   - **Account SID** — only shown if you picked Twilio
   - **Sender ID** — the name (or number) parents see on their phone (e.g. `ABCSchool`)
4. Click **Save**

**Step 4: Send a test SMS**

1. Click **Send Test SMS**
2. Enter a mobile number including the country code (e.g. `+234…`)
3. Click **Send** and check the phone

:::tip Sender ID approval
Some networks require your **Sender ID** to be approved before SMS will be delivered. Termii usually approves automatically within 24 hours; Twilio requires you to register a sender ID or buy a dedicated number. Check your provider's documentation if your test SMS doesn't arrive.
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

1. **FCM not configured**
   - Go to **Settings → FCM Settings**
   - Confirm the **FCM Server Key** and **Sender ID** are filled in (and free of leading/trailing spaces)
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

6. **Firebase project misconfigured**
   - In your Firebase project, confirm the **Android package name** and **iOS bundle ID** match the build of the 4SCH mobile app your school is using
   - If you've recently rotated your FCM Server Key in Firebase, paste the new one into 4SCH

---

### Email Notifications Not Sent

**Problem:** Emails not being delivered

**Solutions:**

1. **SMTP not configured**
   - Go to **Settings → Email Settings**
   - Confirm all SMTP fields are filled in (Mail Host, Mail Port, Mail Username, Mail Password, Mail Encryption, Mail From Address)
   - Click **Send Test Email** to confirm

2. **Wrong email credentials**
   - Double-check the **Mail Username** and **Mail Password**
   - For Gmail / Microsoft 365 with 2-Step Verification, you must use an **App Password** — see the App Password tip above

3. **Emails going to spam**
   - Ask users to check their spam / junk folder
   - Ask them to add your school's sender address to their contacts
   - Use a professional sender address from your school's own domain (not a free `gmail.com` address)

4. **Port blocked by firewall**
   - If `Send Test Email` reports a connection timeout, try another port (e.g. switch between `587` and `465`)
   - Ask your hosting provider whether outbound SMTP ports are restricted

5. **Wrong email address on file**
   - Open the user's profile and check the email field for typos

6. **Daily sending limit reached**
   - Gmail: 500 emails / day
   - Microsoft 365: 10,000 emails / day
   - For higher volumes, use a dedicated email service like **SendGrid** or **Mailgun** — set it up using the same Email Settings form

---

### SMS Notifications Not Delivered

**Problem:** SMS messages not received

**Solutions:**

1. **SMS gateway not configured**
   - Go to **Settings → SMS Settings**
   - Confirm your **API Key** / **Auth Token**, **Sender ID** (and **Account SID** if using Twilio) are filled in
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
