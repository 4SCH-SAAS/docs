---
id: integrations
title: Integrations
sidebar_position: 3
description: Integrate 4SCH with payment gateways, SMS providers, SSO, and LMS. Configure online payments, notifications, and third-party services for Nigerian schools.
keywords: [payment gateway integration, SMS integration, SSO setup, payment processing Nigeria, Paystack integration, Flutterwave, online payments, API integration]
---

import CardGrid from '@site/src/components/CardGrid';
import FinanceIcon from '@site/src/components/icons/Finance';
import MessagingIcon from '@site/src/components/icons/Messaging';
import UsersIcon from '@site/src/components/icons/Users';

# Integrations

<CardGrid
  cards={[
    { to: '#payment-gateways', title: 'Payment Gateways', description: 'Paystack, Flutterwave, Stripe', icon: <FinanceIcon /> },
    { to: '#sms-gateways', title: 'SMS Providers', description: 'Termii, Twilio, Msg91', icon: <MessagingIcon /> },
    { to: '#email-providers', title: 'Email Services', description: 'SendGrid, Mailgun, SES', icon: <UsersIcon /> },
  ]}
/>


## Overview

Third-party integrations extend your school management system with powerful capabilities:
- **Payment Gateways** - Accept online fee payments
- **SMS Providers** - Send text message notifications
- **Email Services** - Deliver email notifications at scale
- **SSO Providers** - Enable single sign-on (Google, Microsoft)

---

## 💳 Payment Gateway Integration {#payment-gateways}

Enable parents to pay school fees online through secure payment gateways.

### Supported Payment Gateways

**Nigeria:**
- **Paystack** (Recommended)
- **Flutterwave**
- **Razorpay**
- **Stripe** (International)

**India:**
- **Razorpay**
- **Instamojo**
- **Paytm**

**Global:**
- **Stripe**
- **PayPal**

---

### Paystack Integration (Nigeria) {#paystack}

**Step 1: Create Paystack Account**
1. Go to [paystack.com](https://paystack.com)
2. Sign up for a business account
3. Complete KYC verification
4. Navigate to **Settings → API Keys & Webhooks**

**Step 2: Get API Keys**
1. Copy your **Public Key** (starts with `pk_`)
2. Copy your **Secret Key** (starts with `sk_`)
3. For testing, use **Test Keys** first
4. For production, use **Live Keys** after verification

**Step 3: Configure in School System**
1. Log in as **School Admin**
2. Go to **Settings → Payment Settings** (or **Fees → Payment Gateway**)
3. Select **Paystack** from provider dropdown
4. Enter:
   - **Public Key** - Paste your Paystack public key
   - **Secret Key** - Paste your Paystack secret key
   - **Mode** - Select "Test" or "Live"
5. Click **Save**

**Step 4: Set Up Webhook**
1. Copy the **Webhook URL** shown in your payment settings (e.g., `https://yourschool.com/api/paystack/webhook`)
2. Go back to Paystack Dashboard → **Settings → API Keys & Webhooks**
3. Click **Add Webhook**
4. Paste your webhook URL
5. Save webhook

**Step 5: Test Payment**
1. Go to a parent account
2. Navigate to **Fees → Pay Fees**
3. Select an amount and click **Pay Online**
4. Use Paystack test card:
   - **Card Number:** 4084084084084081
   - **Expiry:** Any future date
   - **CVV:** 408
   - **PIN:** 0000
5. Verify payment shows as successful in admin dashboard

**Paystack Fees:**
- 1.5% + ₦100 capped at ₦2,000 per transaction
- No setup fees or monthly charges

:::tip Paystack Documentation
For detailed Paystack API docs, visit: [paystack.com/docs](https://paystack.com/docs)
:::

---

### Flutterwave Integration (Nigeria) {#flutterwave}

**Step 1: Create Flutterwave Account**
1. Go to [flutterwave.com](https://flutterwave.com)
2. Sign up and complete verification
3. Go to **Settings → API Keys**

**Step 2: Get API Credentials**
1. Copy **Public Key**
2. Copy **Secret Key**
3. Copy **Encryption Key**

**Step 3: Configure in School System**
1. Go to **Settings → Payment Settings**
2. Select **Flutterwave**
3. Enter:
   - **Public Key**
   - **Secret Key**
   - **Encryption Key**
   - **Mode** - Test or Live
4. Click **Save**

**Step 4: Webhook Setup**
1. Copy webhook URL from payment settings
2. In Flutterwave Dashboard → **Settings → Webhooks**
3. Add your webhook URL
4. Save

**Test Cards:**
- **Card:** 5531886652142950
- **CVV:** 564
- **Expiry:** Any future date
- **OTP:** 12345

**Flutterwave Fees:**
- 1.4% local cards
- 3.8% international cards
- No hidden charges

---

### Razorpay Integration (India) {#razorpay}

**Step 1: Create Razorpay Account**
1. Go to [razorpay.com](https://razorpay.com)
2. Sign up and complete KYC
3. Navigate to **Settings → API Keys**

**Step 2: Generate API Keys**
1. Click **Generate Test Keys** (for testing)
2. Click **Generate Live Keys** (for production, after activation)
3. Copy **Key ID** and **Key Secret**

**Step 3: Configure in School System**
1. Go to **Settings → Payment Settings**
2. Select **Razorpay**
3. Enter:
   - **Key ID**
   - **Key Secret**
   - **Mode** - Test or Live
4. Click **Save**

**Step 4: Webhook Configuration**
1. Copy webhook URL from settings
2. Go to Razorpay Dashboard → **Settings → Webhooks**
3. Click **Add New Webhook**
4. Enter webhook URL
5. Select events: `payment.captured`, `payment.failed`
6. Save

**Test Details:**
- Use any card details for test mode
- Razorpay provides a test card number generator

**Razorpay Fees:**
- 2% per transaction (negotiable for schools)
- No setup or annual fees

---

### Stripe Integration (International) {#stripe}

**Step 1: Create Stripe Account**
1. Go to [stripe.com](https://stripe.com)
2. Sign up and complete verification
3. Go to **Developers → API Keys**

**Step 2: Get API Keys**
1. Copy **Publishable Key** (starts with `pk_`)
2. Copy **Secret Key** (starts with `sk_`)
3. Use test keys for testing, live keys for production

**Step 3: Configure in School System**
1. Go to **Settings → Payment Settings**
2. Select **Stripe**
3. Enter:
   - **Publishable Key**
   - **Secret Key**
   - **Mode** - Test or Live
4. Click **Save**

**Step 4: Webhook Setup**
1. Copy webhook URL
2. Go to Stripe Dashboard → **Developers → Webhooks**
3. Click **Add Endpoint**
4. Paste webhook URL
5. Select events: `payment_intent.succeeded`, `payment_intent.payment_failed`
6. Save

**Test Card:**
- **Number:** 4242 4242 4242 4242
- **Expiry:** Any future date
- **CVC:** Any 3 digits

**Stripe Fees:**
- 2.9% + $0.30 per transaction (US)
- Varies by country

---

## 📱 SMS Gateway Integration {#sms-gateways}

Send text message notifications for attendance alerts, fee reminders, and important announcements.

### Supported SMS Providers

**Nigeria:**
- **Termii** (Recommended)
- **Africa's Talking**

**India:**
- **Msg91**
- **TextLocal**

**Global:**
- **Twilio**
- **Nexmo (Vonage)**

---

### Termii Integration (Nigeria) {#termii}

**Step 1: Create Termii Account**
1. Go to [termii.com](https://termii.com)
2. Sign up for business account
3. Complete verification
4. Navigate to **API Settings**

**Step 2: Get API Credentials**
1. Copy your **API Key**
2. Note your **Sender ID** (e.g., "YourSchool")
3. Fund your account (buy SMS credits)

**Step 3: Register Sender ID**
1. Go to **Sender ID** section
2. Submit your school name as sender ID
3. Wait for approval (usually 24-48 hours)

**Step 4: Configure in School System**
1. Go to **Settings → SMS Settings**
2. Select **Termii** from provider dropdown
3. Enter:
   - **API Key**
   - **Sender ID** (approved sender ID)
4. Click **Save**

**Step 5: Test SMS**
1. Click **Send Test SMS**
2. Enter a Nigerian mobile number (format: 2348012345678)
3. Click **Send**
4. Verify SMS received

**Termii Pricing:**
- ₦2.50 - ₦4.00 per SMS (varies by volume)
- Bulk discounts available
- No monthly fees

:::tip Sender ID Approval
Use a clear, recognizable sender ID like your school name. Avoid generic names. This improves delivery rates and trust.
:::

---

### Twilio Integration (Global) {#twilio}

**Step 1: Create Twilio Account**
1. Go to [twilio.com](https://twilio.com)
2. Sign up (free trial includes credits)
3. Verify your phone number
4. Go to **Console Dashboard**

**Step 2: Get Credentials**
1. Copy **Account SID**
2. Copy **Auth Token**
3. Get a **Twilio Phone Number** (or use Messaging Service SID)

**Step 3: Configure in School System**
1. Go to **Settings → SMS Settings**
2. Select **Twilio**
3. Enter:
   - **Account SID**
   - **Auth Token**
   - **From Number** (your Twilio phone number with country code, e.g., +234XXXXXXXXXX)
4. Click **Save**

**Step 4: Test**
1. Send test SMS
2. Check delivery in Twilio Console → **Messaging → Logs**

**Twilio Pricing:**
- $0.0075 per SMS (US)
- Varies by destination country
- $1/month per phone number

---

### Msg91 Integration (India) {#msg91}

**Step 1: Create Msg91 Account**
1. Go to [msg91.com](https://msg91.com)
2. Sign up and verify
3. Go to **API** section

**Step 2: Get API Key**
1. Copy your **Auth Key**
2. Note your **Sender ID**
3. Create a **Template** (required by TRAI regulations)

**Step 3: Create Message Templates**
1. Go to **SMS → Templates**
2. Create templates for:
   - Attendance alert
   - Fee reminder
   - Exam notification
3. Submit for DLT approval
4. Wait for approval (24-48 hours)

**Step 4: Configure in School System**
1. Go to **Settings → SMS Settings**
2. Select **Msg91**
3. Enter:
   - **Auth Key**
   - **Sender ID**
   - **Template IDs** (for different message types)
4. Click **Save**

**Msg91 Pricing:**
- ₹0.15 - ₹0.25 per SMS
- Volume discounts available

:::caution India DLT Compliance
Indian SMS regulations require all messages to use pre-approved templates. Ensure templates are approved before going live.
:::

---

## 📧 Email Service Provider Integration {#email-providers}

For high-volume email sending (newsletters, bulk notifications), use dedicated email services instead of regular SMTP.

### Supported Email Providers

- **SendGrid** (Recommended for bulk)
- **Mailgun**
- **Amazon SES**
- **Mailchimp** (for newsletters)

---

### SendGrid Integration {#sendgrid}

**Step 1: Create SendGrid Account**
1. Go to [sendgrid.com](https://sendgrid.com)
2. Sign up (free tier: 100 emails/day)
3. Complete sender verification
4. Go to **Settings → API Keys**

**Step 2: Create API Key**
1. Click **Create API Key**
2. Name it (e.g., "School System")
3. Select **Full Access** or **Restricted Access** (choose Mail Send permissions)
4. Copy the API Key (you won't see it again!)

**Step 3: Verify Sender Domain**
1. Go to **Settings → Sender Authentication**
2. Click **Verify a Single Sender** (for quick start) or
3. **Authenticate Your Domain** (for production - recommended)
4. Follow verification steps

**Step 4: Configure in School System**
1. Go to **Settings → Email Settings**
2. Select **SendGrid** or configure as SMTP:
   - **Mail Host:** smtp.sendgrid.net
   - **Mail Port:** 587
   - **Mail Username:** apikey
   - **Mail Password:** [Your SendGrid API Key]
   - **Mail Encryption:** TLS
   - **Mail From Address:** noreply@yourschool.com
   - **Mail From Name:** Your School Name
3. Click **Save**

**Step 5: Test**
1. Send test email
2. Check delivery in SendGrid Dashboard → **Activity**

**SendGrid Pricing:**
- Free: 100 emails/day
- Essentials: $19.95/month (50,000 emails)
- Pro: $89.95/month (100,000 emails)

:::tip Domain Authentication
Authenticate your domain (not just single sender) to improve deliverability and avoid spam filters. This requires adding DNS records.
:::

---

### Mailgun Integration {#mailgun}

**Step 1: Create Mailgun Account**
1. Go to [mailgun.com](https://mailgun.com)
2. Sign up (free tier: 5,000 emails/month for 3 months)
3. Add and verify your domain

**Step 2: Get SMTP Credentials**
1. Go to **Sending → Domain Settings**
2. Select your domain
3. Note SMTP credentials:
   - **SMTP Hostname:** smtp.mailgun.org
   - **Port:** 587 (TLS) or 465 (SSL)
   - **Username:** postmaster@yourdomain.com
   - **Password:** (shown in dashboard)

**Step 3: Configure in School System**
1. Go to **Settings → Email Settings**
2. Enter Mailgun SMTP details
3. Save and test

**Mailgun Pricing:**
- Free: 5,000 emails/month (first 3 months)
- Foundation: $35/month (50,000 emails)
- Growth: $80/month (100,000 emails)

---

### Amazon SES Integration {#amazon-ses}

**Step 1: Create AWS Account**
1. Go to [aws.amazon.com](https://aws.amazon.com)
2. Sign up and navigate to **SES (Simple Email Service)**
3. Verify email addresses or domain

**Step 2: Create SMTP Credentials**
1. In SES Console → **SMTP Settings**
2. Click **Create My SMTP Credentials**
3. Download credentials (username and password)

**Step 3: Request Production Access**
1. By default, SES is in sandbox mode (can only send to verified emails)
2. Request production access via **Account Dashboard**
3. Wait for approval (usually 24 hours)

**Step 4: Configure in School System**
1. Go to **Settings → Email Settings**
2. Enter:
   - **Mail Host:** email-smtp.[region].amazonaws.com (e.g., email-smtp.us-east-1.amazonaws.com)
   - **Mail Port:** 587
   - **Mail Username:** [SMTP username from step 2]
   - **Mail Password:** [SMTP password from step 2]
   - **Mail Encryption:** TLS
3. Save and test

**Amazon SES Pricing:**
- $0.10 per 1,000 emails
- Very cost-effective for high volumes
- Free tier: 62,000 emails/month if sending from EC2

---

## 🔐 Troubleshooting Integrations {#troubleshooting}

### Payment Gateway Issues

**Problem:** Payments not processing

**Solutions:**
1. **Check API keys** - Ensure correct public and secret keys
2. **Verify mode** - Test keys in test mode, live keys in live mode
3. **Check webhook URL** - Must be publicly accessible (not localhost)
4. **Review gateway logs** - Check provider dashboard for error messages
5. **Verify KYC** - Account must be fully verified for live mode
6. **Check currency** - Ensure currency matches gateway support (e.g., NGN for Paystack)

---

### SMS Not Delivering

**Problem:** SMS not received

**Solutions:**
1. **Check balance** - Ensure SMS provider account has sufficient credits
2. **Verify sender ID** - Must be approved by provider
3. **Check number format** - Include country code (e.g., +234 for Nigeria)
4. **DLT compliance** (India) - Message must match approved template
5. **Review logs** - Check SMS provider dashboard for failed deliveries
6. **Network issues** - Recipient's network may be down

---

### Email Delivery Issues

**Problem:** Emails going to spam or not delivered

**Solutions:**
1. **Authenticate domain** - Set up SPF, DKIM, DMARC records
2. **Use dedicated email service** - Don't use Gmail for bulk sending
3. **Warm up IP** - Gradually increase sending volume
4. **Clean email list** - Remove bounced/invalid addresses
5. **Avoid spam words** - Don't use "FREE", "WINNER", excessive caps in subject
6. **Include unsubscribe link** - Required for bulk emails

---

## 🔗 Related Features

- **[Notification Settings](../guides/notification-settings-management.md)** - Configuring FCM, SMTP, SMS
- **[Fee Management](../guides/school-admin.md#fee-management)** - Online fee payment workflows
- **[School Admin Guide](../guides/school-admin.md#system-settings)** - System settings and configuration

---

## Summary Checklist

**Payment Gateway Setup:**
- ✅ Create account with payment provider
- ✅ Complete KYC verification
- ✅ Get API keys (public and secret)
- ✅ Configure in school system
- ✅ Set up webhook URL
- ✅ Test with test cards/credentials
- ✅ Switch to live mode after testing

**SMS Gateway Setup:**
- ✅ Create account with SMS provider
- ✅ Register and get sender ID approved
- ✅ Fund account with credits
- ✅ Get API key/credentials
- ✅ Create message templates (if required)
- ✅ Configure in school system
- ✅ Send test SMS

**Email Service Setup:**
- ✅ Create account with email provider
- ✅ Verify sender domain/email
- ✅ Get SMTP credentials or API key
- ✅ Configure in school system
- ✅ Set up SPF/DKIM records
- ✅ Send test email
- ✅ Monitor deliverability

---

Third-party integrations unlock powerful capabilities for your school. Take time to set them up correctly, and they'll serve you reliably for years! 🔗✨
