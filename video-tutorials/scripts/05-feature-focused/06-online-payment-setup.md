# Video Script: Online Payment Setup

**Duration:** 6 minutes  
**Target Audience:** School administrators, finance officers, technical coordinators  
**Learning Objectives:**
- Configure payment gateways for online transactions
- Set up multiple payment methods
- Enable secure online payments for parents
- Monitor and reconcile online transactions

---

## [00:00-00:15] INTRO (15 sec)

**[VISUAL]** Payment card animation morphing into digital payment interface  
**[MUSIC]** Modern, tech-forward background music (fade under voiceover)

**[VOICEOVER]:**  
"Online payments transform school finance from tedious cash handling into instant digital transactions. Learn how to set up 4SCH's payment gateways so parents can pay fees conveniently and securely, anytime, anywhere."

**[ON-SCREEN TEXT]**
- "Online Payment Setup"
- "Secure Digital Payment Solutions"

---

## [00:15-01:00] Why Online Payments Matter (45 sec)

**[VISUAL]** 
- Animation: Crowds at school gate with cash vs parents paying from home on phone
- Split screen: Manual cash collection vs automated online payments
- Dashboard showing instant transaction confirmations

**[VOICEOVER]:**  
"Collecting fees through cash is slow, risky, and error-prone. Parents queue at school gates. Money gets lost or miscounted. Finance teams spend hours reconciling. Receipts get misplaced.

4SCH online payments eliminate these headaches. Parents pay from home, anytime convenient. Payments are instant and secure. You receive automatic confirmation and receipt generation. No cash handling, no delays, no reconciliation errors. Plus, you'll collect more money faster - studies show online payment options increase collection rates by 30-40%."

**[ON-SCREEN TEXT]**
- "Convenient for Parents"
- "Secure Transactions"
- "Instant Confirmation"
- "Automatic Reconciliation"

---

## [01:00-02:15] Setting Up Payment Gateways (75 sec)

**[VISUAL]** Screen recording: Payment gateway configuration

**[VOICEOVER]:**  
"Let's configure online payments. From the admin dashboard, navigate to Finance → Payment Methods → Configure Payment Gateways."

**[SCREEN RECORDING - Step 1: Choose Your Payment Gateway]**
- Click "Add Payment Gateway"
- Show available options: Paystack, Flutterwave, Stripe, Bank Transfer
- Select Paystack (most popular in Nigeria)
- Click "Configure"

**[VOICEOVER]:**  
"Step one: Choose your payment gateway. 4SCH integrates with multiple providers. For Nigerian schools, Paystack is popular - it handles card payments, bank transfers, and mobile money. Flutterwave is another excellent option. Let's configure Paystack."

**[SCREEN RECORDING - Step 2: Connect Your Paystack Account]**
- Sign in to your Paystack account (shown in a separate window)
- On Paystack's site, open **Settings → API Keys**
- Click "Copy" next to the Public Key, then the Secret Key
- Switch back to 4SCH and paste each one into the matching box
- Click **Verify Connection**
- System confirms: "Connected successfully to Paystack"

**[VOICEOVER]:**  
"Step two: connect your Paystack account. If you don't have one yet, it only takes a few minutes to sign up on Paystack's website. Once you're in, open **Settings → API Keys**, copy the two keys Paystack gives you, and paste them into 4SCH. Click **Verify Connection** and you'll see a green confirmation straight away."

**[SCREEN RECORDING - Step 3: Configure Payment Methods]**
- Show payment method options now enabled
- Option 1: Debit Card (Mastercard, Visa)
- Option 2: Bank Transfer
- Option 3: USSD (mobile money)
- Option 4: QR Code Payment
- Toggle each on/off based on school preference

**[VOICEOVER]:**  
"Step three: Configure which payment methods you'll accept. Paystack supports debit cards (Mastercard, Visa), direct bank transfers, USSD mobile money codes, and QR code payments. You can enable all or choose specific ones. Most schools enable cards and bank transfer as primary options."

**[SCREEN RECORDING - Step 4: Set Transaction Fees]**
- Show Paystack fee structure (typically 1.5% + ₦10 for card payments)
- Decide: Does the school absorb fees or does parent pay them?
- Configure fee splitting: School pays first ₦50, parent pays remainder
- Or school pays 100%, or parent pays 100%

**[VOICEOVER]:**  
"Step four: Handle transaction fees. Payment providers charge fees - Paystack takes about 1.5% plus ₦10 per card transaction. Decide if your school absorbs this cost or passes it to parents. Some schools cover fees to encourage online payment. Others charge parents the fee. You configure this per transaction type."

**[SCREEN RECORDING - Step 5: Configure Automated Receipts]**
- Enable automatic receipt generation
- Select receipt template
- Configure receipt content: School logo, invoice number, amount paid, date, payment method
- Set delivery method: Email, SMS, In-app notification

**[VOICEOVER]:**  
"Step five: Set up automatic receipts. When a parent pays, the system generates an instant receipt showing what was paid, when, and how. This receipt is delivered via email, SMS, or in-app - no manual receipt issuing needed."

**[SCREEN RECORDING - Step 6: Test Payment]**
- Show test payment configuration
- Enable test mode for trying payment flow without charging
- Process test transaction
- Show successful test transaction in dashboard

**[VOICEOVER]:**  
"Step six: Test the payment system. Before going live, run test transactions to ensure everything works. Process a test payment and confirm it appears in your dashboard. Once confident, switch to live mode."

**[ON-SCREEN TEXT]**
- "Step 1: Choose Gateway"
- "Step 2: Connect Account"
- "Step 3: Select Methods"
- "Step 4: Configure Fees"
- "Step 5: Setup Receipts"
- "Step 6: Test Payment"

---

## [02:15-03:45] Parent Payment Experience (90 sec)

**[VISUAL]** Screen recording: How parents pay through the system

**[VOICEOVER]:**  
"Once configured, parents have a seamless payment experience. Let's see how it works from their perspective."

**[SCREEN RECORDING - Parent Accesses Payment Portal]**
- Parent opens email with invoice
- Clicks "Pay Online" button
- Redirected to 4SCH payment portal
- Sees invoice details: Amount due, student name, invoice number
- Clicks "Proceed to Payment"

**[VOICEOVER]:**  
"A parent receives an invoice email. They click 'Pay Online' and are taken to a secure payment portal. The portal shows the exact invoice they're paying and the amount. Everything is transparent before they enter payment details."

**[SCREEN RECORDING - Select Payment Method]**
- Parent sees available options: Debit Card, Bank Transfer, USSD
- Selects "Debit Card"
- Shows payment method selection and fee information

**[VOICEOVER]:**  
"They select their preferred payment method. Card payment is instant. Bank transfer takes a few hours to confirm. USSD is instant through mobile money. Parents see fees upfront so no surprises."

**[SCREEN RECORDING - Complete Payment]**
- Show debit card form (Paystack secure form - not storing card details in 4SCH)
- Parent enters card details securely
- Optional OTP/verification step
- Payment processes and shows success message: "Payment Successful - ₦350,000 received"

**[VOICEOVER]:**  
"Payment uses Paystack's secure form - card details never touch 4SCH's servers. Parent enters their card, confirms with OTP if needed, and payment is processed securely. Instant success confirmation."

**[SCREEN RECORDING - Immediate Results]**
- Parent sees confirmation page with receipt number
- Email receipt arrives immediately
- Parent app shows payment in invoice history
- School dashboard updates in real-time showing payment received

**[VOICEOVER]:**  
"Payment confirmation is immediate. Parent gets a receipt with reference number. Their email receives a formal receipt. The parent app shows the invoice as paid. Your school dashboard updates in real-time - no waiting for bank confirmations."

**[SCREEN RECORDING - Alternative: Bank Transfer Method]**
- Parent selects bank transfer option
- System shows account details and reference number
- Parent can pay from their bank app
- Payment shows as 'pending' initially, then 'confirmed' when bank transfer posts
- Takes 2-4 hours typically

**[VOICEOVER]:**  
"Some parents prefer direct bank transfer. They see your account details and a unique reference number. They transfer from their bank app. The payment shows pending until the bank confirms, then automatically updates to confirmed. Usually takes 2-4 hours."

**[ON-SCREEN TEXT]**
- "Multiple Payment Methods"
- "Secure Transaction Processing"
- "Instant Confirmation"
- "Automatic Receipt Generation"

---

## [03:45-05:00] Monitoring & Reconciliation (75 sec)

**[VISUAL]** Finance dashboard showing payment monitoring

**[VOICEOVER]:**  
"Your finance team has powerful tools to monitor payments and ensure everything reconciles correctly."

**[SCREEN RECORDING - Payment Dashboard]**
- Click "Finance → Payments Dashboard"
- Show real-time payment summary: Total collected today, this week, this month
- Display by payment method: Cards paid ₦2.5M, bank transfers ₦1.8M, USSD ₦800K
- Show success rate: 99.5% of transactions successful

**[VOICEOVER]:**  
"Your finance dashboard shows real-time payment status. See how much has been collected today, this week, this month. Break it down by payment method to understand which methods are most popular. Monitor success rates - 4SCH payment systems have 99.5%+ success rate."

**[SCREEN RECORDING - Transaction History]**
- View detailed transaction list
- Show columns: Date, Student Name, Amount, Method, Status, Fee Type
- Search/filter by student, class, payment method
- Click transaction to see full details including receipt

**[VOICEOVER]:**  
"View every transaction in detail. Search for a specific student or class to see their payment history. Each transaction shows date, amount, method, and status. Click any transaction to see the receipt and details."

**[SCREEN RECORDING - Automatic Reconciliation]**
- Show reconciliation report comparing invoiced amounts to payments received
- Identify: Students who paid full amount, partial payments, outstanding balances
- Generate reconciliation report with summary statistics

**[VOICEOVER]:**  
"4SCH automatically reconciles. Compare what was invoiced against what was paid. Identify students who paid in full, those with partial payments, and those with outstanding balances. Generate formal reconciliation reports for your auditor."

**[SCREEN RECORDING - Failed Transaction Handling]**
- Show transaction that failed (e.g., insufficient funds)
- System automatically retried payment
- Parent receives notification of failed payment
- Show retry options or alternative payment methods

**[VOICEOVER]:**  
"If a payment fails - insufficient funds, card expired - the system notifies the parent and suggests alternatives. They can retry immediately or choose a different payment method. Your team sees failed payments flagged for follow-up."

**[SCREEN RECORDING - Bank Settlement Report]**
- Show settlement reports from Paystack
- Amount processed, fees deducted, amount settled to your account
- Schedule of when funds appear in your bank account
- Option to download settlement reports for accounting

**[VOICEOVER]:**  
"Your payment provider sends settlement reports showing exactly what was processed, fees charged, and what was deposited to your account. These integrate with your accounting system for clean books."

**[ON-SCREEN TEXT]**
- "Real-Time Payment Monitoring"
- "Detailed Transaction History"
- "Automatic Reconciliation"
- "Failed Payment Alerts"
- "Settlement Reporting"

---

## [05:00-05:45] Security & Best Practices (45 sec)

**[VISUAL]** Security features and best practices being highlighted

**[VOICEOVER]:**  
"Payment security is paramount. Here's how 4SCH keeps transactions safe and what best practices you should follow."

**[ON-SCREEN BULLET POINTS - with animated appearance]**
1. **PCI Compliance:** 4SCH and our payment partners are PCI DSS Level 1 compliant - the highest security standard.

2. **SSL Encryption:** All transactions use 256-bit SSL encryption. Payment details are encrypted end-to-end.

3. **No Card Storage:** Card details are never stored on 4SCH servers. Payments process through secure Paystack/Flutterwave servers.

4. **Two-Factor Authentication:** Enable OTP verification for an extra security layer on large transactions.

5. **Activity Logging:** All payment activities are logged and audited. Complete transaction history is maintained.

6. **Parent Education:** Educate parents about secure payment practices - never share OTP, verify URLs before entering details.

**[VOICEOVER]:**  
"Pro tip: 4SCH is PCI compliant, meaning we meet the strictest payment security standards. Card details never touch our servers - they go straight to secure Paystack/Flutterwave servers through 256-bit encryption.

Another tip: Enable OTP verification for added security. Parents confirm payments with a code sent to their phone.

And always educate parents about security. Remind them that 4SCH and payment partners never ask for full card details - only last 4 digits appear in receipts."

**[ON-SCREEN TEXT]**
- "PCI Level 1 Compliant"
- "256-Bit SSL Encryption"
- "No Card Storage"
- "OTP Verification Available"
- "Complete Audit Trail"

---

## [05:45-06:00] OUTRO (15 sec)

**[VISUAL]** 
- Montage: Parents paying online securely, instant confirmations arriving
- Dashboard showing healthy collection rates
- Finance team reviewing reconciliation reports confidently

**[MUSIC]** Professional, modern outro music (builds and fades)

**[VOICEOVER]:**  
"With 4SCH's Online Payment Setup, you'll transform your school's finances from cash-based chaos to digital efficiency. Parents pay conveniently. You collect faster. Everything reconciles automatically. Start your free trial today."

**[ON-SCREEN TEXT]**
- "Online Payment Setup Mastered!"
- "Start Your Free Trial Today"
- "4SCH - School Management Made Simple"
- "www.4sch.com"

**[CALL-TO-ACTION]**
- Subscribe button animation
- Related videos suggestion (Fee Structure Setup, Invoice Generation, Fee Discounts)

---

## Production Notes

**Camera/Screen Recording:**
- Record at 1920x1080 resolution minimum
- Show Paystack/payment portal clearly but blur sensitive details
- Zoom in on payment configuration screens
- Capture dashboard metrics clearly and legibly

**Graphics & Animations:**
- Animate payment flow with arrows showing data movement
- Use security lock icons to emphasize encryption
- Create smooth transitions between configuration steps
- Use green checkmarks for successful connections
- Highlight important configuration options

**Audio:**
- Background music: 20-30% volume during voiceover
- Voiceover pace: Professional, conversational (130-150 words per minute)
- Sound effects: Soft payment success chime, notification ping for alerts

**Text Overlays:**
- Use 24pt minimum font size
- Display step numbers prominently
- Show security badges/certifications
- Use consistent color scheme
- Display currency (₦) clearly

**Timing Cues:**
- Pause on configuration screens for 3-5 seconds
- Allow payment processing to show visibly
- Highlight dashboard metrics for absorption time
- Sync visual transitions with voiceover mentions

---

## SEO Metadata

**Title:** How to Setup Online Payments in 4SCH | Paystack, Flutterwave & Payment Gateway Configuration

**Description:** Learn to configure online payment gateways in 4SCH. Enable secure card payments, bank transfers, mobile money, and more. Monitor transactions and automate reconciliation.

**Tags:** online payment, payment gateway, Paystack, Flutterwave, secure payment, school finance, digital payment, 4SCH, payment processing, transaction monitoring

**Keywords:**
- Online payment setup
- Payment gateway configuration
- Paystack integration
- Flutterwave integration
- Secure payment processing
- Card payment system
- Bank transfer payment
- Mobile money payment
- Payment reconciliation
- Transaction monitoring
- PCI compliance

