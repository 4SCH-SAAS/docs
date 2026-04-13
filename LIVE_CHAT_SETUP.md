# Live Chat Setup Instructions

## Overview

Live chat has been integrated into the 4SCH documentation site to enable real-time communication with potential customers and provide instant support.

---

## 🎯 Current Setup

**Provider**: Tawk.to (Free, unlimited agents)  
**Location**: Configured in `docusaurus.config.js`  
**Status**: ⚠️ Needs configuration

---

## 📋 Setup Steps

### Option 1: Tawk.to (Recommended - Free)

1. **Create Tawk.to Account**
   - Go to https://www.tawk.to/
   - Sign up for free account
   - Complete registration

2. **Get Your Property ID**
   - Login to Tawk.to dashboard
   - Go to Administration → Channels → Chat Widget
   - Copy your Property ID (format: `5f9a1b2c3d4e5f6g7h8i9j0k`)

3. **Update Configuration**
   - Open `docusaurus.config.js`
   - Find line: `s1.src='https://embed.tawk.to/YOUR_TAWK_PROPERTY_ID/default';`
   - Replace `YOUR_TAWK_PROPERTY_ID` with your actual ID
   - Save file

4. **Customize Widget**
   - In Tawk.to dashboard, customize:
     - Widget color (suggest: #2e8555 to match docs theme)
     - Welcome message: "Hi! Need help with 4SCH? Ask us anything!"
     - Offline message
     - Pre-chat form (optional)

5. **Deploy**
   - Commit changes to git
   - Deploy to production
   - Widget will appear on all documentation pages

---

### Option 2: Intercom

1. Sign up at https://www.intercom.com/
2. Get your App ID
3. Update `docusaurus.config.js`:
   ```javascript
   s1.src='https://widget.intercom.io/widget/YOUR_APP_ID';
   ```

---

### Option 3: Crisp

1. Sign up at https://crisp.chat/
2. Get your Website ID
3. Update script to:
   ```javascript
   window.$crisp=[];
   window.CRISP_WEBSITE_ID="YOUR_WEBSITE_ID";
   var d=document;
   var s=d.createElement("script");
   s.src="https://client.crisp.chat/l.js";
   s.async=1;
   d.getElementsByTagName("head")[0].appendChild(s);
   ```

---

## 🎨 Customization Options

### Chat Bubble Position
In Tawk.to dashboard:
- **Right side** (default) - Better for LTR languages
- **Left side** - Alternative placement
- **Bottom spacing** - Adjust to avoid blocking content

### Availability
- **Online hours**: Set your business hours
- **Offline message**: Collect contact info when offline
- **Auto-responses**: Quick replies for common questions

### Branding
- **Widget color**: `#2e8555` (matches documentation theme)
- **Agent avatar**: Upload team photo
- **Company name**: "4SCH Support Team"

---

## 💬 Recommended Chat Triggers

Configure automatic messages in Tawk.to:

### Welcome Message
**Trigger**: Visitor opens chat  
**Message**: 
```
Hi there! 👋 Welcome to 4SCH Documentation.

How can we help you today?
- 📚 Need help finding something?
- 💡 Have questions about features?
- 💼 Interested in pricing or demo?

We're here to help!
```

### 30-Second Delay
**Trigger**: User on page for 30 seconds  
**Message**:
```
Need any help navigating our docs? 😊
Our team is here if you have questions!
```

### Exit Intent (Premium)
**Trigger**: User about to leave  
**Message**:
```
Before you go... 🙋

Can we help you find what you're looking for?
Or schedule a demo to see 4SCH in action?
```

---

## 📊 Analytics & Reporting

### Key Metrics to Track
- **Response time**: Aim for < 2 minutes
- **Resolution time**: Track how long to solve issues
- **Customer satisfaction**: Post-chat surveys
- **Common questions**: Identify documentation gaps

### Tawk.to Reports
Access in dashboard:
- Conversation history
- Agent performance
- Visitor insights
- Popular pages

---

## 👥 Team Setup

### Recommended Structure
1. **Sales Team** - Handle pricing, demos, onboarding
2. **Support Team** - Technical questions, troubleshooting
3. **Documentation Team** - Help users find information

### Agent Profiles
Create profiles with:
- Professional photo
- Name and title
- Expertise area
- Availability status

---

## 🔧 Advanced Features

### Integration with CRM
- Salesforce
- HubSpot
- Pipedrive
- Custom webhooks

### Chatbot Automation
- FAQ responses
- Lead qualification
- Appointment scheduling
- Resource suggestions

### Multi-language Support
- Auto-detect visitor language
- Translate messages
- Localized greetings

---

## 🚀 Best Practices

### Response Guidelines
1. **Acknowledge quickly** - "Thanks for reaching out! Let me help..."
2. **Be personal** - Use visitor's name if available
3. **Link to docs** - Share relevant documentation pages
4. **Collect info** - Get email for follow-up
5. **End positively** - "Is there anything else I can help with?"

### Common Scenarios

**Scenario 1: Feature Question**
```
"Great question! You can find detailed info about [feature] here:
[link to docs]

Would you like me to walk you through it?"
```

**Scenario 2: Sales Inquiry**
```
"I'd love to show you 4SCH in action! 

Can I get your:
- School name
- Email
- Preferred demo time?

We'll set up a personalized walkthrough!"
```

**Scenario 3: Technical Issue**
```
"I can help with that! To better assist you:

1. Which role are you using? (Admin/Teacher/Parent)
2. What feature is affected?
3. Error message (if any)?

Meanwhile, check our troubleshooting guide:
[link]"
```

---

## 📱 Mobile Optimization

The chat widget is automatically mobile-responsive:
- ✅ Touch-friendly buttons
- ✅ Optimized for small screens
- ✅ Minimal data usage
- ✅ Works offline (queues messages)

---

## 🔒 Privacy & GDPR

### Compliance Features
- **Data retention**: Set auto-delete after X days
- **Consent banner**: Optional for EU visitors
- **Data export**: Users can request chat history
- **Anonymization**: Option to hide visitor IP

### Privacy Policy Update
Add to your privacy policy:
```
We use Tawk.to live chat to provide real-time support. 
When you use our chat:
- Your messages are stored securely
- Chat transcripts may be reviewed for quality
- You can request deletion of your data anytime
- We never share chat data with third parties
```

---

## 🧪 Testing

### Before Going Live
1. **Test on staging** - Verify widget loads
2. **Mobile test** - Check all devices
3. **Browser test** - Chrome, Firefox, Safari, Edge
4. **Performance** - Ensure no page slowdown
5. **Team training** - Brief all agents

### Test Scenarios
- [ ] Widget appears on all pages
- [ ] Chat opens/closes smoothly
- [ ] Messages send/receive correctly
- [ ] Offline form works
- [ ] Mobile experience is good
- [ ] No console errors

---

## 📞 Alternative: Contact Form

If live chat isn't suitable, consider adding a contact form:

**Location**: `docs/support/contact-support.md`

**Benefits**:
- No real-time staffing needed
- Collect structured information
- Email notifications
- Spam protection

---

## 🆘 Troubleshooting

### Widget Not Appearing
1. Check browser console for errors
2. Verify Property ID is correct
3. Ensure script is in `<head>` section
4. Clear browser cache
5. Check ad blocker isn't blocking

### Widget Conflicts
If widget conflicts with other scripts:
1. Load Tawk.to last
2. Use `async` attribute
3. Delay loading until page ready
4. Check z-index values

### Performance Issues
If chat slows page load:
1. Enable lazy loading
2. Load after user interaction
3. Use lighter widget version
4. Consider async loading

---

## 💰 Cost Comparison

| Provider | Free Plan | Paid Plans | Best For |
|----------|-----------|------------|----------|
| **Tawk.to** | Unlimited | $19/mo (remove branding) | Small-medium teams |
| **Intercom** | 14-day trial | From $39/mo | Enterprise |
| **Crisp** | 2 agents | From $25/mo | Growing teams |
| **Zendesk** | No free | From $49/mo | Large organizations |

**Recommendation**: Start with Tawk.to free plan

---

## 📈 Success Metrics

Track these KPIs monthly:
- **Chat volume** - Total conversations
- **Lead generation** - Sales inquiries
- **Conversion rate** - Chats → demos/signups
- **Support deflection** - Issues resolved via chat vs tickets
- **User satisfaction** - Average rating
- **Documentation gaps** - Common questions not in docs

---

## 🎓 Training Resources

### For Chat Agents
- Tawk.to Academy: https://www.tawk.to/academy/
- Customer service best practices
- 4SCH product knowledge
- Documentation navigation

### Onboarding Checklist
- [ ] Create agent account
- [ ] Complete profile
- [ ] Review canned responses
- [ ] Practice with teammates
- [ ] Shadow experienced agent
- [ ] Handle supervised chats
- [ ] Go solo!

---

## 📝 Next Steps

1. ✅ Components created (`ComplianceBadges`, `LiveChat`)
2. ✅ Docusaurus config updated
3. ⏳ **Get Tawk.to Property ID**
4. ⏳ **Update configuration**
5. ⏳ **Customize widget appearance**
6. ⏳ **Train team**
7. ⏳ **Deploy to production**
8. ⏳ **Monitor and optimize**

---

## 📧 Support

Need help with setup?
- Tawk.to support: support@tawk.to
- Documentation: https://help.tawk.to/

---

**Last Updated**: April 3, 2026  
**Configured By**: Documentation Team  
**Status**: Ready for Property ID configuration
