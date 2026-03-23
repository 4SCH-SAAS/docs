# Video Script: Notification Settings Management

**Duration:** 6-8 minutes  
**Target Audience:** School Administrators, Teachers, Parents  
**Difficulty Level:** Beginner to Intermediate  
**Prerequisites:** Basic understanding of school management system

---

## Video Metadata

**Title:** Master Notification Settings in 4SCH - SMS, Email & Push Notifications  
**Description:** Learn how to configure notification preferences, set up SMS and email notifications with Nigerian providers (Termii, Africa's Talking), manage push notifications, and customize notification templates for your school. Perfect for admins wanting to keep parents, teachers, and students informed.

**Tags:** notifications, SMS notifications, email notifications, push notifications, Termii, Africa's Talking, notification preferences, notification templates, 4SCH tutorials, school communication, Nigeria, notification settings

---

## Script Outline

1. **Introduction** (0:00 - 0:45)
2. **Notification System Overview** (0:45 - 1:45)
3. **User Notification Preferences** (1:45 - 2:45)
4. **Setting Up Push Notifications** (2:45 - 3:45)
5. **Configuring SMS with Nigerian Providers** (3:45 - 5:15)
6. **Email Notification Configuration** (5:15 - 6:30)
7. **Customizing Notification Templates** (6:30 - 7:30)
8. **Best Practices & Conclusion** (7:30 - 8:00)

---

## Full Script

### Introduction (0:00 - 0:45)

**[VISUAL]**
- 4SCH logo animation
- Title slide: "Notification Settings Management"
- Quick montage of phone notifications, emails, and SMS appearing
- Transition to admin settings dashboard

**[VOICEOVER]:**  
"Welcome to the Notification Settings guide for 4SCH! Keeping your school community informed is one of your most important responsibilities.

Whether it's alerting parents about their child's attendance, reminding students about exam dates, or notifying teachers of urgent admin messages - notifications are your lifeline to communication.

In this video, I'll show you how to set up every notification channel - push notifications on mobile apps, SMS to Nigerian numbers, email to inboxes, and in-app notifications. We'll also customize notification templates so every message represents your school professionally.

By the end, you'll have a complete notification system that keeps everyone connected. Let's get started."

---

### Notification System Overview (0:45 - 1:45)

**[VISUAL]**
- Dashboard showing Settings menu
- Highlight Notification Settings option
- Show four notification channels:
  - Push notifications (app icon)
  - SMS notifications (phone icon)
  - Email notifications (envelope icon)
  - In-app notifications (bell icon)
- Animation showing messages flowing through each channel

**[VOICEOVER]:**  
"Your 4SCH notification system has four delivery channels, each serving different purposes.

**Push Notifications** reach users on their mobile phones - even when the app is closed. These are instant and attention-grabbing, perfect for urgent alerts. They require Firebase Cloud Messaging setup, which we'll cover shortly.

**SMS Notifications** deliver text messages directly to mobile phones. In Nigeria, we use providers like Termii and Africa's Talking. SMS works on any phone - no app needed - making it ideal for parents with basic phones.

**Email Notifications** go to registered email addresses. They're perfect for detailed communications that users might want to keep for reference - like exam schedules or fee reminders.

**In-App Notifications** appear when users are logged in - they're always available and require no external configuration.

All four channels work together. A single notification event - like 'School Closure' - can be sent via push, SMS, email, and in-app simultaneously, ensuring everyone gets the message through their preferred channel."

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

### Configuring SMS with Nigerian Providers (3:45 - 5:15)

**[VISUAL]**
- Admin dashboard, Settings menu
- Navigate to Settings → SMS Settings
- Show SMS provider dropdown menu
- Highlight three popular options:
  - Termii (termii.com) - highlighted
  - Africa's Talking (africaistalkingcom) - highlighted
  - Others (Twilio, etc.)
- Screen-by-screen setup for Termii:
  - Login to Termii dashboard
  - Navigate to API Settings
  - Copy API key
  - Return to 4SCH, paste API key
- Show Sender ID field
- Click "Send Test SMS"
- Mobile phone shows SMS arriving: "Welcome to ABC School"

**[VOICEOVER]:**  
"SMS is powerful in Nigeria because nearly every parent has a mobile phone. Unlike push notifications that require an app, or email that requires internet browsing, SMS works on any phone.

Let's set up SMS using Termii, a popular Nigerian provider that's affordable and reliable.

First, go to Termii.com and create an account if you don't have one. It takes just a few minutes. You'll need to provide your school name and a Nigerian phone number.

Once logged in, go to your Termii dashboard. Navigate to Settings or API Settings. You'll find your API key - this is your authentication credential.

Back in 4SCH, go to Settings → SMS Settings. In the Provider dropdown, select Termii. Paste your API key in the API Key field.

Next, set your Sender ID - this is what appears as the sender on the SMS. For example, 'ABCSchool' or 'MySchool'. Note: Some providers require you to register your Sender ID before it becomes active. Termii does this automatically, usually within 24 hours.

Now test it. Click 'Send Test SMS', enter a Nigerian number - including the country code like +234... - and click Send. Within seconds, that number receives an SMS from your school.

Why SMS? Parents check SMS before email. It works without internet. It's reliable. The trade-off is cost - each SMS costs money, typically ₦1-2 per message. So use SMS for critical alerts: attendance issues, fee reminders, emergency closures. Use email for announcements.

Africa's Talking is another excellent Nigerian provider. The setup is similar - you get an API key from their dashboard and configure it the same way.

Whether you choose Termii, Africa's Talking, or another provider, the process is essentially identical: get credentials, paste them in 4SCH, test, then you're ready to send."

---

### Email Notification Configuration (5:15 - 6:30)

**[VISUAL]**
- Admin dashboard, Settings menu
- Navigate to Settings → Email Settings
- Show SMTP configuration form with fields:
  - Mail Driver
  - Mail Host
  - Mail Port
  - Mail Username
  - Mail Password
  - Mail From Address
  - Mail From Name
- Zoom into example with Gmail:
  - smtp.gmail.com
  - Port 587
  - TLS encryption
  - App password note
- Click "Send Test Email"
- Browser shows email arriving in inbox

**[VOICEOVER]:**  
"Email notifications are perfect for longer messages that users might want to save - like exam schedules, detailed fee statements, or assignment instructions.

To send emails, you need SMTP configuration - essentially telling 4SCH how to connect to an email service.

You have options: Use your school's email domain, Gmail, Microsoft 365, or services like SendGrid designed for bulk emails.

Let's use Gmail as an example. In Settings → Email Settings:

Mail Host is 'smtp.gmail.com'. Mail Port is 587 - this is the standard for Gmail. Encryption is TLS.

Mail Username is your Gmail address. But here's crucial: Don't use your regular Gmail password. Instead, enable 2-Step Verification on your Google account, then generate an App Password at myaccount.google.com/apppasswords. It's a 16-character password specifically for this app. Use that.

Mail From Address is the email that appears as the sender - your school email. Mail From Name is the display name - 'ABC School Communications' or similar.

Once you've entered all details, click 'Send Test Email'. Enter any email address and click Send. Within seconds, it arrives in the inbox.

If you're sending bulk notifications to hundreds of parents, Gmail's limit is 500 emails per day. For larger schools, consider SendGrid - it's designed for bulk sending and is very reliable.

The beauty of email is delivery confirmation and archiving. Users keep important emails for reference. Perfect for notifications they need to revisit."

---

### Customizing Notification Templates (6:30 - 7:30)

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

### Best Practices & Conclusion (7:30 - 8:00)

**[VISUAL]**
- Screen showing best practices checklist:
  ✓ Respect user preferences
  ✓ Use SMS for urgent alerts only
  ✓ Email for detailed communications
  ✓ Push for time-sensitive events
  ✓ Test every new template
  ✓ Monitor notification fatigue
- Show analytics dashboard with notification metrics
- Return to full notification system view showing all four channels active
- 4SCH logo animation

**[VOICEOVER]:**  
"Before we wrap up, here are essential practices for notification success:

**Respect Preferences** - Don't override user choices. If someone disabled 'General Announcements', respect that. Trust is everything.

**Choose the Right Channel** - SMS for urgent alerts like 'School Closed Today', Email for schedules and detailed info, Push for time-sensitive reminders, In-App for everything.

**Test Templates** - Before sending fee reminders to 500 parents, test with your own account. Verify variables insert correctly, spelling is perfect, formatting looks right.

**Avoid Notification Fatigue** - Sending five notifications per day exhausts users. They'll disable notifications entirely. Be strategic and intentional.

**Monitor and Adjust** - Check which notifications get ignored. If parents aren't opening fee reminders, maybe they need different timing or wording.

**Secure Sensitive Data** - Never include account numbers, passwords, or private information in notifications. Use SMS/Email only for necessary communications.

Your notification system is now complete - push notifications for instant alerts, SMS reaching every parent in Nigeria, email for detailed communication, and in-app notifications for supplementary messages. Together, they create a comprehensive communication network that keeps your school community connected and informed.

Now go set up your providers, customize your templates, and start communicating with confidence!

Thanks for watching, and happy notifying!"

**[VISUAL]**
- Fade to 4SCH logo
- End screen with links and resources:
  - "Read the full Notification Settings guide"
  - "Termii Provider Setup (nigerian-sms.com)"
  - "Africa's Talking Setup Documentation"
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
6. SMS Settings page with Termii dropdown selected
7. Termii dashboard - API Settings highlighted
8. SMS test message arriving on Nigerian phone (+234 number)
9. Email Settings (SMTP configuration form)
10. Gmail setup example with starred security notes
11. Email test notification in inbox
12. Notification Templates list
13. Template editor - Fee Reminder customization
14. Variables panel showing available placeholders
15. Preview of personalized email with variables filled in
16. Notification analytics dashboard
17. Best practices checklist

**Graphics/Overlays:**
1. Text overlays for channel descriptions (Push, SMS, Email, In-App)
2. Highlighted fields showing where to paste credentials
3. Checkmark animations for successful test notifications
4. Variable substitution animation (showing {student_name} → Tunde)
5. SMS delivery confirmation on phone screen
6. Email envelope opening animation
7. Icon badges for Nigerian providers (Termii, Africa's Talking)
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
- **Push Notification** = Message that arrives on app even when closed
- **SMS** = Text message to phone (costs per message)
- **SMTP** = Email protocol for sending messages
- **API Key** = Authentication credential for third-party service
- **Template Variables** = Placeholders like {student_name} that auto-fill with real data
- **FCM** = Firebase Cloud Messaging (Google's push service)

**Provider-Specific Notes:**
- "Termii: Nigerian provider, ₦1-2 per SMS, 24-hour Sender ID approval"
- "Africa's Talking: Pan-African, reliable, similar pricing"
- "Gmail: Use App Password, not regular password"
- "SendGrid: Best for bulk emails (500+ per day)"

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
- Include brief pause when SMS arrives on phone screen (satisfying visual moment)

**Nigerian Context Requirements:**
- Use Nigerian phone numbers (+234 801 234 5678 format) for SMS testing
- Show ₦ currency symbol for all fee amounts
- Use Nigerian provider names and interfaces (Termii, Africa's Talking primary)
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

- [ ] Verify all phone numbers use Nigerian format (+234)
- [ ] Check that all currency shows ₦ (Naira), not $ or €
- [ ] Ensure example names are Nigerian (Chioma, Tunde, Amara, Adeyemi, etc.)
- [ ] Confirm Termii and Africa's Talking interfaces match current versions
- [ ] Remove any sensitive school data from screenshots
- [ ] Test all links to Firebase, Termii, and Africa's Talking in description
- [ ] Add chapter markers at each section transition
- [ ] Include clickable timestamps in video description
- [ ] Verify SMS test message text is visible on phone screen
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

**Nigerian SMS Providers:**
1. **Termii** (termii.com)
   - Pricing: ₦1-2 per SMS
   - Support: 24/7
   - Setup time: 5 minutes
   - Sender ID approval: 24 hours

2. **Africa's Talking** (africastalking.com)
   - Pricing: ₦1.50-2.50 per SMS
   - Support: Excellent
   - Setup time: 10 minutes
   - Sender ID approval: Instant to 24 hours

**Firebase Setup:**
- Link to Firebase Console: console.firebase.google.com
- Time required: 15-20 minutes

**Gmail App Passwords:**
- Link: myaccount.google.com/apppasswords
- Note: Requires 2-Step Verification enabled

---

## Script Version History

- **v1.0** - March 2025 - Initial script creation
- **Last Updated:** March 2025
- **Author:** Documentation Team
- **Review Status:** Ready for production

---

**Total Word Count:** ~2,200 words  
**Estimated Audio Duration:** 7-8 minutes (at 150-160 words per minute pace)  
**Complexity Level:** Beginner to Intermediate
