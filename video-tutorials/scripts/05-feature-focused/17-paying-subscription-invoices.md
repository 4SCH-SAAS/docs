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

**[Screen: Animation showing a tick mark appearing on the invoice + subscription card refreshing]**

**Narrator:**
"As soon as the payment goes through, 4SCH takes care of everything for you:"

1. **Your invoice flips to Paid** — usually before you even finish reading the success message.
2. **Your subscription is extended** — your new end date moves forward by your billing cycle. For example, if you're on a 30-day cycle, you get 30 more days of access.
3. **Locked features come back** — any premium feature that was disabled when the invoice was overdue becomes available again straight away.
4. **A receipt appears in your payment history** — ready to download whenever you need it for your records.

**[Screen: Subscription overview showing the new end date]**

"Refresh the Subscriptions page if you'd like, and you'll see the new end date and an Active status badge."

:::tip Reliable, even on a flaky connection
If your internet drops between paying on Paystack and getting back to 4SCH, don't worry. The system still recognises the payment and updates your invoice and subscription automatically within a minute or two — just refresh the page.
:::

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
| **Paid but invoice still shows unpaid** | Wait a minute and refresh the page — the status will catch up. If it still says Unpaid after a few minutes, contact your school's billing support. |
| **Got redirected back to the history page without a success message** | Check the invoice in your history — it has likely been marked Paid already. Refresh if needed. |
| **Features still locked after payment** | Log out and log in again. |
| **No payment options visible** | Your school admin needs to set up a payment gateway in **Settings → Payment Configuration** first. |
| **My subscription end date didn't move** | Refresh the Subscriptions page. If it still hasn't changed after a few minutes, contact support. |

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
- [Subscription Billing](/guides/subscription-billing)
- [Subscription Expiry & Retention Policy](/guides/subscription-expiry-retention-policy)
- [Video 05: Payment Gateway Config](./05-payment-gateway-config.md)
- [Video 06: Online Payment Setup](./06-online-payment-setup.md)
- [Video 05 (Deep Dive): Reports & Analytics](../03-feature-deep-dives/05-reports-analytics.md)

---

## What's New (v1.9.3 — June 2026)

Re-record / re-cut to mention these dashboard-level improvements:

1. **Permanent "Renew / Pay in advance" CTA** — a dismissible card at the top of the School Admin dashboard whenever an active prepaid plan exists. Click the **×** to hide until next cycle. Add a short scene showing the card + the click → Paystack flow.
2. **"Click here to pay" expiry banner now works for Paystack and Flutterwave** (was Stripe-only). Mention this explicitly so existing schools who experienced the broken button know it's fixed.
3. **Renewal correctly chains end-dates forward.** When demonstrating a successful payment, point out that the new end-date is `previous end + cycle days` (not "today + cycle days") — paying early no longer loses you days.
4. **Subscriptions → History** page now lists all bills cleanly with the right due-date per cycle — the date-format crash that previously left it empty is fixed.

Suggested 60–90 second insert near the existing "Pay an Invoice" beat. See the [Recent improvements callout in the Subscription Billing guide](/guides/subscription-billing) for the exact wording.
