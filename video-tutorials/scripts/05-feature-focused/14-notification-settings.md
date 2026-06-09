# Video Script: Notification Settings Management

**Duration:** 6-8 minutes  
**Target Audience:** School Administrators, Teachers, Parents  
**Difficulty Level:** Beginner to Intermediate  
**Prerequisites:** Basic understanding of school management system

---

## Video Metadata

**Title:** Master Notification Settings in 4SCH — Email, Push & In-App Notifications  
**Description:** Learn how to configure notification preferences, set up email and push notifications, manage the in-app notification inbox, and customize notification templates for your school. Perfect for admins wanting to keep parents, teachers, and students informed.

**Tags:** notifications, email notifications, push notifications, in-app notifications, notification preferences, notification templates, 4SCH tutorials, school communication, notification settings

---

## Script Outline

1. **Introduction** (0:00 - 0:45)
2. **Notification System Overview** (0:45 - 1:30)
3. **User Notification Preferences** (1:30 - 2:30)
4. **Setting Up Push Notifications** (2:30 - 3:45)
5. **Email Notification Configuration** (3:45 - 5:00)
6. **Customizing Notification Templates** (5:00 - 6:00)
7. **Managing Your Notification Inbox** (6:00 - 7:00)
8. **Best Practices & Conclusion** (7:00 - 7:30)

---

## Full Script

### Introduction (0:00 - 0:45)

**[VISUAL]**
- 4SCH logo animation
- Title slide: "Notification Settings Management"
- Quick montage of push notifications, emails, and in-app bell alerts appearing
- Transition to admin settings dashboard

**[VOICEOVER]:**  
"Welcome to the Notification Settings guide for 4SCH! Keeping your school community informed is one of your most important responsibilities.

Whether it's alerting parents about their child's attendance, reminding students about exam dates, or notifying teachers of urgent admin messages - notifications are your lifeline to communication.

In this video, I'll show you how to set up every notification channel that 4SCH supports — push notifications on mobile apps, email to inboxes, and the in-app notification inbox. We'll also customize notification templates so every message represents your school professionally.

By the end, you'll have a complete notification system that keeps everyone connected. Let's get started."

---

### Notification System Overview (0:45 - 1:45)

**[VISUAL]**
- Dashboard showing Settings menu
- Highlight Notification Settings option
- Show three notification channels:
  - Push notifications (app icon)
  - Email notifications (envelope icon)
  - In-app notifications (bell icon)
- Animation showing messages flowing through each channel

**[VOICEOVER]:**  
"Your 4SCH notification system has three delivery channels, each serving a different purpose.

**Push Notifications** reach users on their mobile phones — even when the app is closed. These are instant and attention-grabbing, perfect for urgent alerts. They use Firebase Cloud Messaging, which we'll set up shortly.

**Email Notifications** go to registered email addresses. They're perfect for detailed communications that users might want to keep for reference — like exam schedules or fee reminders.

**In-App Notifications** appear in every user's bell icon when they're signed in. They're always available and require no external setup. Every notification a user receives is also saved in their bell, so they always have a history they can scroll back through — even if they missed the original push or email.

All three channels work together. A single notification event — like 'School Closure' — can be sent via push, email, and in-app simultaneously, so everyone gets the message through their preferred channel."

---

### User Notification Preferences (1:45 - 2:45)

**[VISUAL]**
- Login screen transitioning to user dashboard
- Click on Profile/Settings
- Navigate to Notification Preferences
- Show preference interface with checkboxes
- Highlight different notification types for different roles:
  - Parents: Attendance, Fees, Assignments, Exams, Results
  - Students: Deadlines, Exams, Grades, Announcements
  - Teachers: Submissions, Leave Requests, Admin Messages

**[VOICEOVER]:**  
"Before sending notifications, let's understand that every user can control what they receive.

When a parent logs in and goes to Settings → Notification Preferences, they'll see a checklist of notification types. Parents might want Attendance Alerts and Fee Reminders - those are critical. But maybe they don't want Assignment Notifications if their child is in SSS 3 focusing on exams.

Students can toggle Assignment Deadlines and Exam Reminders. Teachers enable Assignment Submissions and Leave Request notifications.

This is important: Respecting user preferences builds trust. Don't send notifications users don't want. If someone unchecks 'General Announcements', don't send them anyway.

Watch how each user can customize. Click the checkbox next to 'Attendance Alerts' - it's now unchecked. This parent won't receive attendance notifications. Click Save, and it takes effect immediately.

This preference system ensures your notification system remains valuable, not intrusive."

---

### Setting Up Push Notifications (2:45 - 3:45)

**[VISUAL]**
- Admin dashboard
- Navigate to Settings → Push Notifications (or FCM Settings)
- Show Firebase Console in browser
- Highlight:
  - Project Settings
  - Cloud Messaging tab
  - Server Key and Sender ID fields
- Return to 4SCH, show form fields for entering credentials
- Click "Send Test Notification"
- Mobile phone shows notification arriving

**[VOICEOVER]:**  
"Push notifications are the most immediate way to reach users. They pop up on phones instantly, perfect for time-sensitive alerts.

To enable push notifications, you need Firebase Cloud Messaging - Google's service for sending push alerts. Here's the simple setup:

First, go to Firebase Console at console.firebase.google.com. If you don't have a project yet, create one for your school.

Once you're in your project, click the gear icon for Project Settings, then navigate to the Cloud Messaging tab. You'll see two values: the Server Key and the Sender ID. These are your credentials.

Back in your 4SCH admin panel, go to Settings → Push Notifications. Paste the Server Key here, and the Sender ID here. Click Save.

Now, let's test. Click 'Send Test Notification'. Enter a test message - maybe 'Welcome to 4SCH' - and select a teacher or admin account to test. Click Send.

Watch - the notification arrives on the mobile phone instantly. That's push notification working perfectly.

Remember: Users must have your mobile app installed and have granted notification permissions for this to work. If someone denied permissions, they won't receive push notifications until they enable them in their phone settings."

---

### Email Notification Configuration (3:45 - 5:00)

**[VISUAL]**
- Admin dashboard, Settings menu
- Navigate to **Settings → Email Settings**
- Show the simple form:
  - "Email service" dropdown (4SCH Default · Gmail · Microsoft 365 · Custom)
  - "Send-from email" field
  - "Display name" field
  - "Connect / Sign in" button (for Gmail / Microsoft 365)
- Click "Sign in with Google" — Google's sign-in window opens
- After signing in and clicking "Allow", a green "Connected" badge appears
- Click "Send Test Email" → browser shows email arriving in the inbox

**[VOICEOVER]:**  
"Email notifications are perfect for longer messages users may want to save — exam schedules, detailed fee statements, or assignment instructions.

In **Settings → Email Settings**, you have three easy options. The simplest is **'Use 4SCH's email service'** — turn it on and you're done. 4SCH sends emails on your behalf and you don't need to set anything up.

If you'd prefer emails to come from your school's own Gmail or Microsoft 365 account, pick that option from the dropdown and click **'Sign in with Google'** or **'Sign in with Microsoft'**. A familiar sign-in window opens; sign in, click **Allow**, and you'll see a green **Connected** badge appear.

Set the **Display name** that parents see in their inbox — something like 'ABC School Communications' — and click **Send Test Email** to confirm it works.

For very large schools sending thousands of emails a week, contact 4SCH support — they'll help you switch to a high-volume email service so nothing is delayed during busy reporting periods.

The beauty of email is that families can keep messages for reference — perfect for the kind of information they'll need to come back to later."

---

### Customizing Notification Templates (5:00 - 6:00)

**[VISUAL]**
- Admin dashboard, navigate to Settings → Notification Templates
- Show list of templates:
  - Attendance Alert
  - Fee Reminder
  - Exam Announcement
  - Assignment Notification
  - General Announcement
- Click "Edit" on Fee Reminder template
- Show template editor interface:
  - Subject line field
  - Body field with text editor
  - Variables panel on right showing: {school_name}, {student_name}, {parent_name}, {amount}, {due_date}, {class}
- Edit example:
  - Subject: "Fee Reminder - {student_name}"
  - Body: Show before and after with variables inserted
- Save changes
- Show preview of how email will look to parent

**[VOICEOVER]:**  
"Generic notifications feel impersonal. Customization makes them feel like they're directly for that person.

Go to Settings → Notification Templates. You'll see templates for different notification types - Attendance Alert, Fee Reminder, Exam Announcement, and more.

Let's edit the Fee Reminder template. Click Edit. You see the Subject Line and Body fields.

Here's the power: You can use variables. On the right, you see available variables like {student_name}, {parent_name}, {class}, {amount}, {due_date}.

Watch me customize this. Instead of generic text, I'll write:

Subject: 'Fee Reminder - {student_name}'

Body: 'Dear {parent_name},

This is a friendly reminder that fees for {student_name} in {class} are due by {due_date}. Outstanding amount: ₦{amount}.

Please remit payment to ensure your child's continued enrollment.

Best regards,  
{school_name}'

When this template sends to a parent, the variables automatically replace with actual data. So a parent named Chioma gets: 'Dear Chioma, This is a friendly reminder that fees for Tunde in SS 1 are due by March 31...' with the actual amount.

The same template, automatically personalized for each parent. That's the power of variables.

These customized templates make every notification feel professional and relevant. Parents aren't just getting mass notifications - they're getting messages specifically about their child and situation."

---

### Managing Your Notification Inbox (6:00 - 7:00)

**[VISUAL]**
- User logs into 4SCH
- Click the **bell icon** (notification inbox) in the top bar
- Inbox shows list of recent notifications with blue dots for unread items
- Hover a row → "Mark as read" and "Delete" buttons appear
- At the top of the inbox: "Mark all as read" and "Clear all" buttons
- One-click demo of each action

**[VOICEOVER]:**
"Every user — admin, teacher, parent, student — has their own notification inbox in 4SCH, and you're in full control of it.

Click the **bell icon** in the top bar to open it. You'll see your most recent alerts, with a small blue dot next to anything you haven't read yet.

To clear a single notification, just hover over it and click **Mark as read** to dismiss the badge, or click the **delete** icon to remove it from your inbox entirely.

If you're catching up after a busy week, use the buttons at the top of the inbox: **Mark all as read** clears every blue dot in one click, and **Clear all** empties your inbox so you can start fresh.

You don't need to worry about your inbox getting cluttered over time — old, already-read notifications are tidied up automatically in the background.

And the messages themselves are written to tell you exactly what happened and what to do next — for example, 'New term result published for Tunde — tap to view' — so you can act on them without having to hunt around for context."

**[VISUAL]**
- Close-up of a clear, action-oriented notification message
- Bell icon badge counter going from 12 → 0 after "Mark all as read"

---

### Best Practices & Conclusion (7:00 - 7:30)

**[VISUAL]**
- Screen showing best practices checklist:
  ✓ Respect user preferences
  ✓ Push for time-sensitive events
  ✓ Email for detailed communications
  ✓ In-app inbox for everything else
  ✓ Test every new template
  ✓ Monitor notification fatigue
- Return to full notification system view showing all three channels active
- 4SCH logo animation

**[VOICEOVER]:**  
"Before we wrap up, here are essential practices for notification success:

**Respect Preferences** — Don't override user choices. If someone disabled 'General Announcements', respect that. Trust is everything.

**Choose the Right Channel** — Push for time-sensitive reminders like 'School Closed Today', Email for schedules and detailed information, and the In-App inbox as the searchable history of everything that was ever sent.

**Test Templates** — Before sending fee reminders to 500 parents, test with your own account. Verify variables insert correctly, spelling is perfect, formatting looks right.

**Avoid Notification Fatigue** — Sending five notifications per day exhausts users. They'll disable notifications entirely. Be strategic and intentional.

**Monitor and Adjust** — Check which notifications get ignored. If parents aren't opening fee reminders, maybe they need different timing or wording.

**Be Careful with Sensitive Data** — Never include account numbers, passwords, or private information in push or email notifications.

Your notification system is now complete — push notifications for instant alerts, email for detailed communication, and the in-app inbox as a searchable history. Together they create a complete communication network that keeps your school community connected and informed.

Now go set up your channels, customize your templates, and start communicating with confidence!

Thanks for watching, and happy notifying!"

**[VISUAL]**
- Fade to 4SCH logo
- End screen with links and resources:
  - "Read the full Notification Settings guide"
  - "Firebase Console setup walkthrough"
  - "Watch: Sending Bulk Notifications"
  - "Subscribe for more 4SCH tutorials"

---

## Visual Assets Needed

**Screenshots/Screen Recordings:**
1. Admin dashboard - Settings menu open
2. Notification Settings overview page
3. User Notification Preferences interface (with role-based options)
4. Push Notifications settings form
5. Firebase Console - Project Settings and Cloud Messaging tab
6. Firebase Console — Cloud Messaging tab with Server Key visible
7. Test push notification arriving on a sample mobile device
9. Email Settings (simple email setup form)
10. Gmail setup example with starred security notes
11. Email test notification in inbox
12. Notification Templates list
13. Template editor - Fee Reminder customization
14. Variables panel showing available placeholders
15. Preview of personalized email with variables filled in
16. Notification analytics dashboard
17. Best practices checklist

**Graphics/Overlays:**
1. Text overlays for channel descriptions (Push, Email, In-App)
2. Highlighted fields showing where to paste credentials
3. Checkmark animations for successful test notifications
4. Variable substitution animation (showing {student_name} → Tunde)
5. Push notification appearing on a phone screen
6. Email envelope opening animation
7. Firebase Cloud Messaging logo badge for the push-notifications section
8. Currency symbol ₦ for Nigerian Naira amounts
9. Step-by-step numbered indicators for multi-step processes

**B-Roll:**
- None needed (fully screen-based tutorial)

---

## Voiceover Notes

**Tone:** Professional, helpful, encouraging  
**Pace:** Medium - allow time for viewers to absorb technical configuration steps  
**Emphasis:** Highlight practical applications and Nigerian-specific provider setup  
**Pauses:** 1-2 seconds after each major section for visual transitions  
**Energy:** Increase slightly when discussing features that make parents' lives easier

---

## On-Screen Text/Captions

**Key Terms to Define (appear as text overlay):**
- **Push Notification** = An alert that pops up on a phone even when the 4SCH app isn't open
- **FCM Server Key / Sender ID** = Two short codes from your Firebase project that you paste into 4SCH to enable push notifications
- **Mail Host / Port / Username / Password** = The email connection details supplied by your email provider, pasted into 4SCH's Email Settings form
- **App Password** = A one-off password Gmail or Microsoft 365 gives you when 2-Step Verification is on, used in 4SCH's Mail Password field instead of your real account password
- **Template Variables** = Placeholders like {student_name} that 4SCH fills in automatically with the right person's details

**Provider-Specific Notes:**
- "Gmail: Use App Password, not regular password"
- "Microsoft 365: Use App Password if 2-Step Verification is on"
- "SendGrid / Mailgun: Best for bulk emails (500+ per day)"

**Action Prompts:**
- "Click to configure ➜"
- "Paste credentials here 👆"
- "Send test first ✓"
- "Variables auto-fill →"

---

## Production Notes

**Timing Considerations:**
- Allow 3-5 seconds for each configuration page before showing next step
- Pause 2 seconds after each successful test notification
- Use normal speed for credential entry - don't rush technical sections
- Slow down when explaining variables concept
- Include a brief pause when a push notification arrives on screen (satisfying visual moment)

**Nigerian Context Requirements:**
- Use realistic example email addresses (e.g. parent@example.com) in screen recordings
- Show ₦ currency symbol for all fee amounts
- Reference Nigerian school contexts and currency (₦, JSS, SSS, etc.)
- Reference Nigerian school contexts (JSS 1/2/3, SSS 1/2/3, Naira, holidays)
- Show screenshots from Nigerian-context school data
- Mention Nigerian parents/teachers with typical names (Chioma, Tunde, Ngozi, Ikechukwu)

**Accessibility:**
- Include closed captions for all voiceover
- Provide audio descriptions of form fields before they're filled
- Ensure sufficient color contrast in UI screenshots
- Use clear, readable fonts (minimum 14pt for on-screen text)
- Describe button colors and UI state changes verbally

---

## Post-Production Checklist

- [ ] Verify example email addresses use the `example.com` domain
- [ ] Check that all currency shows ₦ (Naira), not $ or €
- [ ] Ensure example names are Nigerian (Chioma, Tunde, Amara, Adeyemi, etc.)
- [ ] Confirm the Firebase Console interface in screenshots matches the current version
- [ ] Remove any sensitive school data from screenshots
- [ ] Test all links (Firebase Console, Gmail App Passwords page) in the description
- [ ] Add chapter markers at each section transition
- [ ] Include clickable timestamps in video description
- [ ] Verify push notification text is visible on phone screen
- [ ] Check email preview displays correctly in both dark and light modes
- [ ] Confirm variables display clearly in template editor
- [ ] Ensure all credential fields are clear without sensitive data
- [ ] Test video on mobile devices (not just desktop)
- [ ] Add subtitle files for accessibility

---

## Related Videos

**Prerequisites:**
- "Getting Started with 4SCH Admin Panel"
- "Understanding User Roles & Permissions"
- "Mobile App Setup for Your School"

**Next Steps:**
- "Sending Bulk Notifications - Best Practices"
- "Notification Analytics & Reporting"
- "Communication Hub - Announcements & Notifications"
- "Troubleshooting Notification Delivery Issues"

---

## Call-to-Action

**During Video:**
- "Subscribe to stay updated with 4SCH tutorials"
- "Drop a comment if you need help with setup"

**End Screen:**
- "Download Notification Setup Checklist (PDF)"
- "Download Nigerian Provider Comparison Guide"
- "Subscribe for more 4SCH tutorials"
- "Join our community forum for questions"
- "Link to full documentation: [docs link]"

---

## Additional Resources

**Firebase Setup:**
- Link to Firebase Console: console.firebase.google.com
- Time required: 15-20 minutes

**Gmail App Passwords:**
- Link: myaccount.google.com/apppasswords
- Note: Requires 2-Step Verification enabled

---

## Script Version History

- **v1.0** - March 2025 - Initial script creation
- **v1.1** - June 2026 - Added "Managing Your Notification Inbox" section covering the bell-icon inbox: marking individual notifications as read or deleted, bulk Mark-all-read and Clear-all actions, automatic tidying of older read items, and the new clearer, more actionable wording of notification messages
- **v1.2** - June 2026 - Removed the SMS section entirely (SMS is not a feature in the 4SCH codebase). Re-timed the script to 7:30 total. Refreshed glossary, best-practices, and resources to focus on the real channels: Push (FCM), Email (SMTP), and In-app inbox.
- **Last Updated:** March 2025
- **Author:** Documentation Team
- **Review Status:** Ready for production

---

**Total Word Count:** ~2,200 words  
**Estimated Audio Duration:** 7-8 minutes (at 150-160 words per minute pace)  
**Complexity Level:** Beginner to Intermediate
