# Video Script: SMS Integration Setup

**Duration:** 6 minutes  
**Target Audience:** School Administrators, IT Staff, Communication Coordinators  
**Difficulty Level:** Intermediate  

---

## SEO & Metadata

**Video Title:** Configure SMS Messaging for Schools | Text Alerts and Notifications

**Keywords:** SMS integration, text messaging, school alerts, student notifications, emergency alerts, SMS gateway, text notifications

**Meta Description:** Set up SMS text messaging for school alerts, announcements, and parent notifications. Integrate SMS with your school management system.

**Thumbnail Text:** "SMS Integration"

---

## Video Structure

### Opening (0:00 - 0:45)

**Visual Cues:**
- Fade in with SMS/text message icon
- Text overlay: "SMS INTEGRATION"
- Show text message on phone screen
- Display alert notification animation
- Show parent receiving alert on mobile device

**Voiceover Script:**
"Text messages reach people fast. When you need to alert parents to school closures, early dismissals, or emergencies, SMS is often the most reliable channel. Many parents have their text notifications enabled even when they might miss emails or app notifications.

In this tutorial, we'll set up SMS integration for your school. You'll learn how to configure an SMS provider, set up automated alerts, and send manual text messages to parents and staff. This feature is essential for emergency communication and time-sensitive updates."

**Production Notes:**
- Use urgent but professional background music
- Animate text message appearing on phone
- Show notification arriving with sound effect
- Maintain clear, authoritative tone
- Keep voiceover steady and confident

---

### Why SMS Integration Matters (0:45 - 1:45)

**Visual Cues:**
- Statistics on screen:
  - "98% of text messages read within 3 minutes"
  - "SMS has 45% higher engagement than email"
  - "Text alerts reach people during emergencies"
- Show scenarios:
  - Emergency: School lockdown alert
  - Operational: Early dismissal notice
  - Informational: Attendance reminder
  - Event: Permission slip deadline
- Display device types (phones, tablets)
- Show SMS reaching multiple recipients simultaneously

**Voiceover Script:**
"Text messages have the highest open and engagement rates of any communication channel. When you text a parent, there's a 98 percent chance they'll read it within three minutes. Compare that to email, which parents might not check for hours.

SMS is especially critical during emergencies. If your school needs to communicate an immediate threat or evacuation, text messages reach parents faster and more reliably than any other channel. Parents immediately know their children are safe.

Beyond emergencies, SMS handles operational notifications well. Early dismissal notices, attendance reminders, event deadlines, and activity updates are perfect for text. Families appreciate the brief, focused nature of SMS compared to lengthy emails.

SMS integration also increases accessibility. Not all parents have reliable internet. Some may not access your parent portal regularly. But nearly everyone has texting. SMS ensures you reach families however they prefer to communicate.

Your system supports SMS through third-party providers that handle the technical complexity of sending texts. Your school doesn't actually send SMS directly—the provider's network does, ensuring messages arrive reliably."

**Production Notes:**
- Display statistics with motion graphics
- Show each scenario with relevant icon
- Highlight engagement percentage prominently
- Include sample SMS messages
- Use mobile phone mockup for visuals
- Pause briefly between benefits

---

### Step 1: Choosing an SMS Provider (1:45 - 2:45)

**Visual Cues:**
- Screen recording: Navigate to Settings/Administration
- Click "SMS" or "SMS Gateway"
- Show available SMS provider options:
  - Twilio
  - Nexmo/Vonage
  - MessageBird
  - AWS SNS
  - Other providers with feature badges
- Display comparison table:
  - Cost per message
  - Delivery speed
  - Features (scheduling, templating, reporting)
  - Support availability
  - Compliance certifications

**Voiceover Script:**
"To set up SMS, you first choose an SMS provider. From your admin dashboard, navigate to Settings and select 'SMS' or 'SMS Gateway.'

Your system typically integrates with popular SMS providers like Twilio, Nexmo, or MessageBird. These companies maintain vast networks of connections to cell carriers worldwide, ensuring your messages arrive reliably.

When choosing a provider, consider several factors: cost per message—typically between 1 and 10 cents depending on volume and provider, delivery speed—most providers deliver within seconds, and features like message scheduling, templating, and detailed reporting.

Twilio is popular for schools because it offers good pricing for high-volume messaging, excellent documentation, and school-friendly support. Nexmo offers similar capabilities. MessageBird has strong international support if you have families outside the US.

Check what your school's existing technology partners recommend. If you already use a provider for other services, they might offer SMS integration at a discount.

Most importantly, verify the provider complies with telecom regulations. In the US, ensure they're compliant with TCPA—the Telephone Consumer Protection Act—which governs how organizations can send SMS. FERPA compliance is also critical when handling student information."

**Production Notes:**
- Show SMS provider selection interface
- Display comparison chart with pricing
- Highlight key providers with logos
- Show feature badges for each provider
- Zoom in on comparison table
- Include compliance certification badges
- Display example pricing calculations

---

### Step 2: Obtaining and Configuring API Credentials (2:45 - 3:45)

**Visual Cues:**
- Screen recording: SMS provider setup process
- Show obtaining credentials from SMS provider:
  - Log into Twilio/Nexmo dashboard
  - Navigate to API credentials
  - Copy Account SID and Auth Token (Twilio example)
  - Show corresponding fields in school system
- Display credential input form with fields:
  - API Key/Account ID
  - API Secret/Auth Token
  - Phone number (sender ID)
- Show security warning overlay
- Display "Save Configuration" button
- Show success notification

**Voiceover Script:**
"Once you've chosen your provider, obtain your API credentials. These allow your school system to communicate securely with the SMS provider.

Using Twilio as an example: log into your Twilio account. Navigate to the Account section and find your Account SID and Auth Token. These are your credentials—treat them like passwords.

Copy your Account SID. Return to your school system's SMS configuration page and paste it into the Account ID field.

Copy your Auth Token. Paste it into the Auth Token field. Keep this sensitive—anyone with your auth token can use your SMS account.

You'll also need to configure your sender phone number. This is the number that appears on parents' phones when they receive messages from your school. Some providers let you use an 11-digit code or custom sender ID. Others require a dedicated phone number.

After entering all credentials, click 'Save Configuration.' The system verifies your credentials by attempting a test connection to the SMS provider.

If the connection succeeds, you'll see a success message. If it fails, double-check that your credentials are correct. A common mistake is including extra spaces or typos.

Once your SMS provider is connected, your school is ready to send text messages."

**Production Notes:**
- Show actual provider dashboard (sanitized)
- Demonstrate credential retrieval
- Show copy-paste process clearly
- Display form fields being filled
- Zoom in on credential fields
- Show security warning prominently
- Display success/error messages
- Include timeout handling examples

---

### Step 3: Creating SMS Templates (3:45 - 4:45)

**Visual Cues:**
- Screen recording: Navigate to SMS templates
- Show template creation form with:
  - Template name (e.g., "Early Dismissal Alert")
  - Message body with character counter
  - Variable placeholders ({{STUDENT_NAME}}, {{TIME}}, {{REASON}})
  - Preview showing how message appears to recipient
- Display template examples on screen:
  - "Emergency: School on lockdown. Staff and students are safe."
  - "{{SCHOOL_NAME}}: School closing at {{TIME}} due to {{REASON}}."
  - "Attendance reminder: {{STUDENT_NAME}} was marked absent on {{DATE}}."
- Show template library with categorized templates

**Voiceover Script:**
"Instead of writing messages from scratch each time, create SMS templates. These are pre-written messages with variable fields that automatically populate with specific information.

From your SMS settings, select 'Templates' or 'Message Templates.' Click 'New Template.'

Enter a descriptive name like 'Early Dismissal Alert' or 'Attendance Reminder.' This helps you identify the template later.

Write your message. SMS has length limits—typically 160 characters. Most providers support longer messages by splitting them across multiple texts, but longer messages cost more, so keep messages concise.

Include variable placeholders where information should be personalized. Use syntax like {{SCHOOL_NAME}}, {{STUDENT_NAME}}, {{TIME}}, or {{REASON}}. When the message is sent, these placeholders automatically populate with real data.

The character counter shows how many characters your message uses. Green means it fits in one SMS. Yellow or red means it spans multiple messages, increasing cost.

Preview how your message appears to recipients. This shows the actual text a parent would see with variables filled in.

Create templates for your common scenarios: emergency alerts, early dismissal, snow day announcements, attendance reminders, event notifications, and activity updates.

Having templates ready means when something urgent happens, you can send a message in seconds rather than composing it on the fly."

**Production Notes:**
- Show template creation form
- Display character counter updating in real-time
- Highlight variable placeholders
- Show preview refreshing as message changes
- Display template library with multiple examples
- Zoom in on message composition
- Use color-coding for character counts
- Include tooltip explanations for variables

---

### Step 4: Sending SMS Messages (4:45 - 5:30)

**Visual Cues:**
- Screen recording: Navigate to send SMS
- Show three sending methods:
  1. Manual send (from dashboard)
     - Select template
     - Choose recipients (all parents, specific group, individuals)
     - Review message
     - Click send
     - See delivery status
  2. Automated alerts (triggered by events)
     - Set trigger (absence after 3 days, low grades, etc.)
     - Select template
     - Configure delivery
  3. Scheduled sends (for future delivery)
     - Select message
     - Set date and time
     - Confirm scheduling

**Voiceover Script:**
"Now let's send SMS messages. There are three approaches: manual sends, automated alerts, and scheduled sends.

For manual sends, navigate to Communications and select 'Send SMS' or 'Text Message.' Choose your template or write a custom message. Select your recipients—you can target all parents, a specific class or grade level, specific students, or individual families.

Review the message one more time. Remember, SMS is permanent—once sent, you can't recall it. Check for typos and accuracy.

Click 'Send.' The system submits your message to the SMS provider. Delivery is nearly instant—parents should receive texts within seconds.

You'll see a delivery status showing how many messages were sent, any failures, and delivery confirmations.

For automated alerts, set up triggers. For example, 'If a student is absent for three consecutive days, send an SMS to their parents using the Attendance Alert template.' These run automatically without you having to manually send anything.

For scheduled sends, compose your message and select a future date and time to send it. This is useful for non-urgent reminders that you want sent during business hours."

**Production Notes:**
- Show all three sending methods
- Demonstrate recipient selection
- Display message preview before send
- Show send button prominently
- Display delivery status in real-time
- Show confirmation notifications
- Demonstrate each sending approach
- Use callout for checking before send

---

### Best Practices (5:30 - 5:50)

**Visual Cues:**
- Slide-based best practices
- Icons for each practice:
  - Clock (timing)
  - Briefcase (professionalism)
  - Warning (emergencies only)
  - Target (relevance)

**Voiceover Script:**
"Best practices for school SMS messaging:

One: Respect timing. Don't send messages outside school hours unless it's truly urgent. Parents don't appreciate text messages at 11 PM.

Two: Keep it professional. SMS is brief and informal, but it represents your school. Avoid slang and typos.

Three: Reserve SMS for urgent and important communications. Use it for emergencies, urgent schedule changes, and time-sensitive deadlines. Don't use SMS for routine announcements—email or app notifications are better.

Four: Make messages clear and actionable. Tell parents what's happening and what they need to do. 'Early dismissal at 2 PM' is better than 'Dismissal modified.'

Five: Include contact information. If parents have questions, provide a number or email where they can reach your school.

Finally, monitor unsubscribe requests. Parents can opt out of SMS. Respect their preferences and maintain an up-to-date list of who wants to receive texts."

**Production Notes:**
- Display one practice per slide
- Use appropriate icons for each
- Keep text concise and readable
- Allow 3-4 seconds per practice
- Use consistent visual style
- Emphasize critical practices

---

### Call-to-Action & Closing (5:50 - 6:00)

**Visual Cues:**
- Show successful SMS delivery
- Text overlay: "Connect With Parents via Text"
- Display subscribe button
- End card with next tutorial

**Voiceover Script:**
"SMS integration gives you a powerful channel for reaching parents when it matters most. Set it up today and improve your school's communication. Subscribe for more tutorials and check out our next video on emergency communications!"

**Production Notes:**
- Use confident, professional tone
- Quick final pace
- Clear call-to-action
- Include subscribe button
- Suggest next video
- Fade out smoothly

---

## Production Checklist

- [ ] Record screen at 1080p or 4K
- [ ] Ensure voiceover is clear and measured
- [ ] Show SMS provider integration clearly
- [ ] Display templates with variables visible
- [ ] Add smooth transitions
- [ ] Include full captions
- [ ] Show message preview before send
- [ ] Display delivery status/confirmations
- [ ] Add watermark
- [ ] Verify timing accuracy
- [ ] Export with metadata

---

## Distribution Notes

**Platforms:** YouTube, Vimeo, In-app library  
**Tags:** #SMSMessaging #TextAlerts #SchoolCommunication #Notifications #EmergencyAlerts  
**Transcript:** Full transcript in description  
**Captions:** Enabled for accessibility  
**Thumbnail:** Text message icon with "SMS Setup" text
