# Paying Subscription Invoices

**Video Duration:** 4-5 minutes  
**Target Audience:** School Administrators (tenant schools paying for 4SCH)  
**Difficulty Level:** Beginner  
**Prerequisites:** School Admin login, active 4SCH subscription, payment gateway configured

---

## Video Objectives

By the end of this video, school admins will be able to:

1. Find their subscription invoices in the Subscriptions section
2. Pay an invoice using Paystack (or other configured gateways)
3. Verify payment success and subscription extension
4. Understand what happens automatically after payment
5. Troubleshoot common payment issues

---

## Script

### INTRO (0:00 - 0:30)

**[Screen: School admin dashboard]**

**Narrator:**
"Welcome school admins! Your 4SCH subscription is billed periodically — usually monthly, quarterly, or per term, depending on your plan. This short video walks you through paying a subscription invoice so your school's access continues uninterrupted. Let's go!"

---

### PART 1: FINDING YOUR INVOICES (0:30 - 1:15)

**[Screen: Main menu → Subscriptions]**

**Narrator:**
"From your dashboard, click **Subscriptions** in the main menu."

**[Screen: Subscriptions overview page]**

"You'll see your current subscription details — package name, start date, end date, billing cycle, and so on."

**[Screen: Click "History" or "Invoices" tab]**

"Click the **History** tab to see all invoices generated for your subscription."

**[Screen: Invoice list with paid/unpaid status badges]**

"Each invoice shows the amount, due date, and payment status. Unpaid invoices are clearly marked — usually with an orange or red badge."

:::tip Auto-Generated Invoices
4SCH automatically generates invoices when your billing cycle ends. You don't need to do anything — they just appear here ready to pay.
:::

---

### PART 2: PAYING WITH PAYSTACK (1:15 - 3:00)

**[Screen: Click "Pay Now" button next to an unpaid invoice]**

**Narrator:**
"Click **Pay Now** next to the invoice you want to pay."

**[Screen: Payment method selection — Stripe / Paystack / Flutterwave]**

"You'll see your school's configured payment options. Let's go with **Paystack** as an example."

**[Screen: Click Paystack → redirect to Paystack checkout]**

"Click **Paystack**. The system redirects you to Paystack's secure checkout."

**[Screen: Paystack checkout showing amount and customer email]**

"You see the amount, your school's email, and Paystack's payment options — bank transfer, card, USSD, mobile money."

**[Screen: Select bank transfer → account details shown]**

"Choose your preferred method — for example, **Bank Transfer** displays a dedicated account number to transfer to."

**[Screen: Make payment → Paystack confirms]**

"Complete the payment as instructed. Paystack confirms within seconds (for cards) or once the transfer is detected (for bank transfers)."

**[Screen: Paystack redirects back to 4SCH]**

"After confirmation, you're redirected back to 4SCH automatically."

**[Screen: Success message "Payment completed successfully!"]**

"You'll see a success message and your invoice updates to **Paid** status."

---

### PART 3: WHAT HAPPENS AUTOMATICALLY (3:00 - 3:45)

**[Screen: Animation showing webhook + database updates]**

**Narrator:**
"Behind the scenes, several things happen automatically:"

1. **Webhook verification** — Paystack notifies 4SCH that your payment succeeded
2. **Bill marked as paid** — Your invoice is linked to the transaction
3. **Subscription extended** — Your end date moves forward by your billing cycle
4. **Features unlocked** — Any previously locked premium features become accessible immediately
5. **Transaction logged** — A record is created in your payment history

**[Screen: Subscription overview showing new end date]**

"Refresh your Subscriptions page and you'll see the new end date and active status."

---

### PART 4: VERIFYING PAYMENT (3:45 - 4:15)

**[Screen: History → Locate paid invoice]**

**Narrator:**
"To verify, go back to **Subscriptions → History**. Your paid invoice now shows:"

- ✅ Status: **Paid**
- ✅ Transaction ID: a unique reference number
- ✅ Payment Gateway: Paystack
- ✅ Amount and date

**[Screen: Click transaction ID → details view]**

"Click the transaction ID for full details if you need it for accounting or reconciliation."

---

### PART 5: TROUBLESHOOTING (4:15 - 4:45)

**[Screen: FAQ-style table of common issues]**

**Narrator:**
"A few quick tips if something goes wrong:"

| Issue | Solution |
|---|---|
| **"Invalid payment amount"** | Refresh the page. The invoice amount couldn't be determined — contact support if it persists. |
| **Paid but invoice still shows unpaid** | Wait 1–2 minutes. Webhook processing is usually instant but may take a moment. Refresh the page. |
| **Got redirected back to history page** | Check the invoice — likely already marked paid. Refresh if needed. |
| **Features still locked after payment** | Logout and login again. Cache may need refreshing. |
| **No payment options visible** | School admin needs to configure payment gateways in **Settings → Payment Configuration** first. |

---

### OUTRO (4:45 - 5:00)

**[Screen: Summary graphic]**

**Narrator:**
"Paying your 4SCH subscription is fast, secure, and automatic. Pay on time and your school's access continues without interruption. For payment gateway setup, see our [Payment Gateway Configuration video](./05-payment-gateway-config.md). Thanks for choosing 4SCH!"

**[Screen: 4SCH logo + "Thank you!"]**

---

## Production Notes

- **Demo account:** Use a sandbox school account with a real Paystack test key for safe recording
- **Sensitive info:** Blur or replace any real account numbers, transaction IDs
- **Multi-gateway:** Optionally record additional takes for Stripe and Flutterwave (similar workflow)
- **Length flexibility:** Can be shortened to 3 minutes if focusing only on Paystack

## Related Resources

- [School Admin Guide — Subscription Management](/guides/school-admin)
- [Subscription Expiry & Retention Policy](/guides/subscription-expiry-retention-policy)
- [Video 05: Payment Gateway Config](./05-payment-gateway-config.md)
- [Video 06: Online Payment Setup](./06-online-payment-setup.md)
- [Video 05 (Deep Dive): Reports & Analytics](../03-feature-deep-dives/05-reports-analytics.md)
