# Video Script: Payment Gateway Configuration

**Duration:** 6 minutes  
**Target Audience:** School Administrators, Finance Staff, System Administrators  
**Difficulty Level:** Intermediate  

---

## SEO & Metadata

**Video Title:** Configure Payment Gateway | Set Up Online Payments for Schools

**Keywords:** payment gateway, online payments, school fees, payment processing, stripe integration, payment configuration, digital payments

**Meta Description:** Learn how to configure your payment gateway for collecting school fees, tuition, and other payments online. Support Stripe, PayPal, and more.

**Thumbnail Text:** "Payment Gateway Setup"

---

## Video Structure

### Opening (0:00 - 0:45)

**Visual Cues:**
- Fade in with payment/credit card icon
- Text overlay: "PAYMENT GATEWAY CONFIGURATION"
- Show payment processing flow diagram
- Display multiple payment method icons (Stripe, PayPal, etc.)

**Voiceover Script:**
"Accepting online payments is essential for modern schools. Whether you're collecting tuition, fees, or activity charges, accepting digital payments is convenient for families and saves your office staff time.

In this tutorial, we'll walk through setting up your payment gateway—the secure system that processes online payments. You'll learn how to integrate payment providers, configure payment types, and ensure smooth transactions. Let's get started."

**Production Notes:**
- Use professional, trustworthy background music
- Animate payment icons smoothly
- Show flow diagram of payment process
- Maintain confident, reassuring tone
- Keep voiceover clear and measured

---

### Understanding Payment Gateways (0:45 - 1:45)

**Visual Cues:**
- Diagram showing payment flow:
  - Parent → Portal
  - Portal → Payment Gateway
  - Gateway → Bank/Processor
  - Confirmation back to Parent and School
- Show supported payment methods:
  - Credit cards (Visa, Mastercard, Amex)
  - Debit cards
  - Digital wallets
  - Bank transfers (where available)
- Display security badges (PCI compliance, SSL, encryption)

**Voiceover Script:**
"A payment gateway is a secure service that processes online payments. When a parent enters their payment information in your school portal, the gateway securely transmits that data to banks and payment processors.

Your school management system integrates with payment providers like Stripe, PayPal, Square, or others. These providers handle the complex security and compliance requirements, so you don't have to.

When a parent submits a payment through your portal, here's what happens: their payment information is encrypted and sent to the payment gateway. The gateway validates the card, checks with the parent's bank, and either approves or declines the transaction. The result is transmitted back to your system, which records the payment in real-time.

The payment gateway handles sensitive data according to PCI compliance standards, meaning you're protecting parent information properly. All data is encrypted in transit and at rest.

Payment gateways typically support multiple payment methods: credit cards, debit cards, digital wallets like Apple Pay or Google Pay, and sometimes bank transfers. This flexibility means families can pay however is convenient for them."

**Production Notes:**
- Show payment flow diagram animated step-by-step
- Display each payment method icon
- Highlight security features
- Include compliance badges
- Keep visual explanations simple
- Use 2-3 second pauses between concepts

---

### Step 1: Choosing Your Payment Provider (1:45 - 2:45)

**Visual Cues:**
- Screen recording: Navigate to Settings/Administration
- Click "Payment Gateway" or "Payment Configuration"
- Show available payment provider options:
  - Stripe
  - PayPal
  - Square
  - Other options with checkmarks for supported features
- Display comparison table with:
  - Transaction fees
  - Settlement timeframe
  - Supported payment methods
  - Features (recurring payments, refunds, etc.)

**Voiceover Script:**
"First, you need to choose your payment provider. From your admin dashboard, navigate to Settings and select 'Payment Gateway Configuration.'

Your system likely supports multiple payment providers. For Nigerian schools, the most common include Paystack, Flutterwave, and Remita. Each has different fee structures and features.

Paystack is very popular in Nigeria for its simple integration and competitive fees, typically 1.5% + ₦100 per transaction (capped at ₦2,000). Flutterwave offers similar features with support for multiple African countries. Remita specializes in bank-to-bank transfers and is trusted by many government institutions.

When choosing a provider, consider several factors: transaction fees, settlement time—how long before funds appear in your bank account—and which payment methods they support. Paystack and Flutterwave settle funds within 1-2 business days, while Remita typically settles within 24 hours for bank transfers.

Also consider features like recurring billing for monthly payments, automated refunds, detailed reporting, and multi-currency support if you serve international families.

Most importantly, check whether your school has already established a relationship with a payment processor. If your bank recommends a specific provider, that's often a good choice for integration support."

**Production Notes:**
- Show provider selection interface
- Display comparison chart or table
- Highlight fee structures with numbers
- Show real provider logos and branding
- Zoom in on key differences
- Include example scenarios (e.g., "For a ₦500,000 payment, Paystack charges...")

---

### Step 2: Obtaining API Credentials (2:45 - 3:45)

**Visual Cues:**
- Screen recording: Show "Connect Payment Provider" button
- Demonstrate obtaining API credentials from provider:
  - Stripe: Show API key retrieval in Stripe dashboard
  - PayPal: Show client ID and secret retrieval
  - Display credential types (public key, secret key, client ID, etc.)
- Show form in school system with credential input fields
- Display security warning about keeping credentials private

**Voiceover Script:**
"Once you've chosen your provider, you need to obtain credentials—essentially API keys that allow your school system to communicate securely with the payment processor.

Here's the process for Paystack, though others are similar. Log into your Paystack merchant account. Navigate to the Settings section, then API Keys & Webhooks. You'll see two types of keys: public and secret. The public key is used by your website or app to initiate payments. The secret key is sensitive and never shared—it authenticates requests to Paystack's servers.

Copy both keys. Return to your school management system's payment configuration page. Paste the public key into the appropriate field and the secret key into the secret field.

For Flutterwave, you'll obtain a Public Key and Secret Key as well. The process is similar: retrieve credentials from your Flutterwave dashboard, then enter them into your school system.

Important security note: never share these credentials with anyone, and don't commit them to public code repositories. If you accidentally expose a secret key, immediately regenerate it in your payment provider's dashboard. These keys are the gateway to processing payments on your behalf."

**Production Notes:**
- Show actual provider dashboards (Stripe, PayPal)
- Zoom in on credential locations
- Demonstrate copy-paste process
- Show form fields in school system
- Display security warning prominently
- Use red/warning color for sensitive fields
- Include audio emphasis on security importance

---

### Step 3: Configuring Payment Types and Fees (3:45 - 4:45)

**Visual Cues:**
- Screen recording: Show payment configuration form
- Display payment type setup:
  - Payment name (e.g., "School Tuition," "Activity Fees")
  - Amount (fixed or variable)
  - Frequency (one-time, monthly, quarterly)
  - Due date
  - Late fee (if applicable)
  - Allowed payment methods
- Show testing vs. production mode toggle
- Display test payment example

**Voiceover Script:**
"Now that your payment processor is connected, set up your payment types. These define what families can pay for through your system.

Click 'Add Payment Type.' You'll enter details for each type of payment your school accepts. Start with the payment name—this appears to parents, so make it clear: 'School Tuition,' 'Activity Fees,' 'Lunch Account,' 'Sports Participation,' etc.

Next, specify the amount. For fixed payments like annual activity fees, enter a static number. For variable amounts like tuition that might differ by grade, you can set a minimum amount and allow parents to enter the specific amount due.

Set the frequency. Is this a one-time payment or recurring? If recurring, is it monthly, quarterly, or annually? Specify the due date. The system can automatically send reminders as the due date approaches.

You can also configure late fees if applicable. If tuition is due on the 15th and not received by the 20th, automatically add a ₦5,000 late fee. This is optional but helps encourage timely payment.

Specify which payment methods are available for this payment type. You might allow all payment methods for tuition but restrict activity fees to card-only payments.

Before going live, test your configuration. The system offers a 'Test Mode' where transactions aren't actually processed but you can verify the flow works correctly. Use test card numbers provided by your payment processor. Once you're confident everything works, switch to 'Production Mode.'"

**Production Notes:**
- Show configuration form with all fields
- Demonstrate entering payment details
- Show frequency dropdown options
- Display late fee calculation example
- Highlight test mode toggle
- Show test card numbers
- Include success notification after configuration
- Use callout for testing importance

---

### Step 4: Testing and Going Live (4:45 - 5:30)

**Visual Cues:**
- Screen recording: Payment configuration overview
- Show parent portal view of payment options
- Demonstrate test payment from parent account:
  - Navigate to payment page
  - Select payment type
  - Enter test card (4242 4242 4242 4242)
  - Submit payment
  - Receive confirmation
- Show payment record in admin dashboard
- Display transition from test to production mode

**Voiceover Script:**
"Before letting parents actually pay, thoroughly test your configuration. Switch to test mode if you haven't already. Then, as if you were a parent, go through the entire payment process.

Navigate to the parent portal's payment section. Select a payment type and attempt to submit a payment using a test card number. Your payment provider supplies specific test card numbers that are recognized as test transactions and won't charge real money.

Process a test payment. Verify that the payment is successfully recorded in your admin dashboard. Check that confirmation emails are sent. Ensure that the payment amount is correctly recorded in financial reports.

If everything looks good, switch from test mode to production mode. This means real payments will now be processed.

When you go live, send a communication to parents explaining that online payment is now available. Include clear instructions on how to access the payment portal and what payment types are available. Consider offering an incentive for early adoption—some schools offer small discounts for parents who pay online.

Monitor the first few days closely. Be available to answer questions if parents encounter any issues. Once you see regular successful payments coming through, you can be confident your system is working properly."

**Production Notes:**
- Show test payment process complete from start to finish
- Display test card numbers clearly
- Show confirmation message animation
- Display payment in admin records
- Show mode-switching toggle
- Include parent communication template as text overlay
- Demonstrate success notifications

---

### Best Practices (5:30 - 5:50)

**Visual Cues:**
- Slide-based best practices
- Icons for each practice:
  - Shield (security)
  - Envelope (communication)
  - Chart (monitoring)
  - Support (customer service)

**Voiceover Script:**
"Best practices for payment processing:

One: Security first. Keep your API credentials safe. Regularly monitor your payment processor's dashboard for suspicious activity. Enable two-factor authentication on your merchant account.

Two: Communicate clearly. When payment issues occur—a declined card, for example—send parents a helpful message explaining next steps, not just an error message.

Three: Monitor transactions. Regularly review your financial records in the payment processor's dashboard. Reconcile payments with your school's accounting system.

Four: Offer support. Some parents will have questions or encounter issues. Be responsive and helpful. Provide phone and email support options for payment-related questions.

Finally, keep receipts and records. Payment processors store transaction history, but maintain your own backup records for auditing and compliance."

**Production Notes:**
- Display one practice at a time
- Use security and business-themed icons
- Keep text concise
- Allow 3-4 seconds per practice
- Use consistent color scheme
- Emphasize critical practices with visual emphasis

---

### Call-to-Action & Closing (5:50 - 6:00)

**Visual Cues:**
- Show successful payment confirmation screen
- Text overlay: "Start Accepting Payments Today"
- Display subscribe button
- End card with next tutorial

**Voiceover Script:**
"Setting up payment processing opens financial convenience for your families and efficiency for your school. Follow these steps and you'll have a secure, reliable payment system running in no time. Subscribe for more administrative tutorials and check out our next video on financial reporting!"

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
- [ ] Verify all form fields are visible
- [ ] Show real payment processor dashboards (sanitized)
- [ ] Add smooth transitions
- [ ] Include full captions
- [ ] Display security warnings prominently
- [ ] Show test card numbers clearly
- [ ] Add watermark
- [ ] Verify timing accuracy
- [ ] Export with metadata

---

## Distribution Notes

**Platforms:** YouTube, Vimeo, In-app library  
**Tags:** #PaymentProcessing #OnlinePayments #SchoolFees #FinancialManagement  
**Transcript:** Full transcript in description  
**Captions:** Enabled for accessibility  
**Thumbnail:** Credit card or payment icon with "Payment Setup" text
