---
title: Subscription Billing & Payment Guide
sidebar_label: Subscription Billing
sidebar_position: 12
description: How invoices are generated, how to pay, and what to expect after payment. For school administrators managing the school's 4SCH subscription.
keywords: [subscription, billing, payment, invoice, paystack, stripe, flutterwave, school admin]
---

# Subscription Billing & Payment Guide

This guide explains how your school's 4SCH subscription is billed, how
invoices are generated, how to pay them, and what happens automatically
after payment.

> **Audience:** School administrators responsible for the school's 4SCH subscription.

---

## How Billing Works

### Two Billing Models

Your school can be on either of two billing models, set when you signed up:

#### **1. Pay-Per-Period (Prepaid)**
You pay for a fixed period (e.g., a term) upfront. Bills are generated as
soon as a period ends, with a new bill for the next period.

#### **2. Pay-Per-Usage (Postpaid)**
You're billed at the end of each billing cycle based on actual usage
(active students × charge per student + active staff × charge per staff).

### Your Subscription Details

To see your current subscription:

1. Login as **School Administrator**
2. Click **Subscriptions** in the main menu
3. The overview page shows:
   - **Package name** (e.g., Starter, Pro, Max, or Custom)
   - **Start date** — when this subscription period began
   - **End date** — when it expires (and a new bill will be generated)
   - **Billing cycle** — number of days per cycle
   - **Student charge** — per active student
   - **Staff charge** — per active staff member

:::tip Why "Days" not "Months"?
The billing cycle is stored as a number of days for flexibility. A monthly
plan would be `billing_cycle = 30`, a termly plan might be `60` or `90`,
and annual is `365`. The system simply adds these days to your end date.
:::

---

## How Invoices Are Generated

### Auto-Generated Daily

4SCH runs a daily job that:

1. Looks for any subscription whose end date was yesterday
2. Generates a new invoice for the next billing cycle
3. Calculates the amount based on your current student and staff counts
4. Sends a notification to your registered school admin email/phone

### Manual Generation (Rare)

In some cases, support staff may manually generate an invoice (e.g., for an
addon purchase). These appear in the same list as auto-generated invoices.

---

## Finding Your Invoices

1. Login as **School Administrator**
2. Click **Subscriptions → History**
3. You'll see all invoices for your school

Each invoice shows:

| Field | Meaning |
|---|---|
| **Bill Reference** | Unique invoice number |
| **Amount** | Total to pay (in your school's currency) |
| **Due Date** | When payment is expected |
| **Status** | Paid, Pending, or Overdue |
| **Transaction ID** | Set once payment is made |

---

## How to Pay an Invoice

### Step 1: Click Pay Now

Next to any unpaid invoice, click **Pay Now**.

### Step 2: Choose Payment Method

You'll see the payment gateways your school's super admin has configured:

- **Paystack** — Recommended for Nigerian schools (bank transfer, card, USSD, mobile money)
- **Stripe** — Recommended for international schools (card)
- **Flutterwave** — Pan-African option (card, bank transfer, mobile money)

:::tip Don't see payment options?
A super admin needs to configure at least one payment gateway in
**Settings → Payment Configuration** before invoices can be paid online.
:::

### Step 3: Complete Payment on Gateway

You're redirected to the chosen gateway's secure checkout page:

#### Paystack
- Bank Transfer: Receive a dedicated account number to transfer to
- Card: Enter card details
- USSD: Use bank USSD code shown on screen
- Mobile Money: For supported countries

#### Stripe
- Card: Enter card details
- Other payment methods depending on country

#### Flutterwave
- Multiple methods including card, bank transfer, mobile money

Complete the payment as instructed.

### Step 4: Automatic Redirect Back

After payment, the gateway redirects you back to 4SCH. You'll see:

- ✅ A success message
- ✅ The invoice updates to **Paid** status
- ✅ The transaction ID is recorded

---

## What Happens Automatically After Payment

Behind the scenes, several things happen within seconds:

1. **Payment verification** — 4SCH verifies the transaction with the gateway
2. **Bill marked as paid** — Linked to your transaction record
3. **Subscription extended** — Your end date moves forward by the billing cycle
4. **Features unlocked** — Any previously restricted features become accessible
5. **Transaction logged** — Record created in payment history

:::tip Smart Extension Logic
- If you pay **before** your subscription expires, the extension is added to
  your existing end date (rewards early payment).
- If you pay **after** expiry, the extension is added from today (so you
  always get the full cycle you paid for).

For example, if your billing cycle is 30 days:
- Paid 5 days before expiry: extension goes to old end + 30 days = 35 days from today
- Paid 5 days after expiry: extension goes to today + 30 days
:::

---

## Verifying Payment

To confirm a payment went through:

1. Go to **Subscriptions → History**
2. Find the invoice
3. Confirm:
   - ✅ Status shows **Paid**
   - ✅ Transaction ID is populated
   - ✅ Payment Gateway is shown (e.g., Paystack)

Click the transaction ID to see full details for accounting/reconciliation.

---

## Understanding Bill Amounts

### For Pay-Per-Period Plans

Bill amount = Package fixed price for the cycle.

### For Pay-Per-Usage Plans

Bill amount is calculated as:

```text
(active students × student charge) + (active staff × staff charge)
```

For example, with 50 active students at ₦100 each and 5 staff at ₦200 each:

```text
50 × 100 + 5 × 200 = ₦5,000 + ₦1,000 = ₦6,000
```

The exact charges per student/staff are in your subscription details
under **Subscriptions** main page.

:::tip Active vs. Total
"Active" means student/staff records flagged as active in your school
records. Deactivated users aren't billed.
:::

---

## Receipts

After payment, a **Receipt** is available for download:

1. Go to **Subscriptions → History**
2. Click the paid invoice's row
3. Click **View Receipt** or **Download PDF**

The receipt includes:

- Your school name and details
- Invoice number and date
- Payment gateway and transaction ID
- Itemised charges (student/staff usage)
- Total paid
- Currency

---

## Troubleshooting

### "Invalid payment amount" error

**Cause:** The invoice amount couldn't be determined. This is rare.

**Solution:**

1. Refresh the page
2. Click **Pay Now** again
3. If it persists, contact support with the invoice number

### Payment succeeded but invoice still shows "Pending"

**Cause:** The confirmation from your payment provider can take a moment to come back (usually 1–2 seconds, sometimes up to a minute).

**Solution:**

1. Wait 1-2 minutes
2. Refresh the Subscriptions History page
3. Status should update to **Paid**
4. If not, contact support with the gateway's transaction reference

### Features still locked after successful payment

**Cause:** Browser cache or session may need refreshing.

**Solution:**

1. Log out completely
2. Log back in
3. Features should now be accessible
4. If still locked, contact support

### Didn't receive payment notification

**Cause:** Email/notification settings may not be configured.

**Solution:**

1. Check **Settings → Notifications**
2. Ensure school admin email is correct
3. Check spam folder for invoice notifications
4. For mobile push notifications, ensure the school admin has the mobile app installed

### Receipt download fails or shows error

**Cause:** Cache issue with the receipt template.

**Solution:**

1. Try again after a few seconds
2. Try a different browser
3. Contact support if the problem persists

---

## Renewal Reminders

You'll receive notifications:

- **7 days before expiry** — Reminder to pay upcoming bill
- **On expiry day** — Final reminder
- **After expiry** — Notification that features are restricted

Configure these in **Settings → Notifications** under the **Subscription** category.

---

## What If I Don't Pay?

If your subscription expires without payment:

1. **Grace period** — Some plans include a few days' grace before features lock
2. **Restrictions kick in** — Premium features become inaccessible
3. **Data preserved** — Your school's data remains safe (NOT deleted)
4. **Resume on payment** — Pay any time to restore full access immediately

For detailed data retention rules, see the
[Subscription Expiry & Retention Policy](./subscription-expiry-retention-policy.md).

---

## FAQs

**Q: Can I pay multiple invoices at once?**
A: Currently, invoices are paid one at a time. We're exploring bulk payment in a future release.

**Q: Can I change my payment method?**
A: Yes — when clicking Pay Now, you'll see all configured gateways and can choose any of them.

**Q: What if I'm overcharged?**
A: Contact support immediately with the invoice number. Refunds are handled case-by-case via the original payment gateway.

**Q: How do I get a tax invoice or receipt with VAT?**
A: The default receipt includes basic transaction details. For VAT or tax invoices, contact our billing team.

**Q: Can I switch packages mid-subscription?**
A: Yes — contact support to upgrade or downgrade. Prorated charges apply.

**Q: What if I accidentally paid the same invoice twice?**
A: Contact support with both transaction IDs. We'll process a refund for the duplicate via the gateway.

---

## Related Documentation

- [Subscription Expiry & Retention Policy](./subscription-expiry-retention-policy.md)
- [School Administrator Guide](./school-admin.md)
- [Notification Settings Management](./notification-settings-management.md)
- [Payment Gateway Setup (for super admins)](./school-admin.md#payment-gateway-setup)

---

## Need Help?

For billing questions or issues:

- 📧 Email: billing@yourschoolsupport.com
- 📞 Phone: Check your subscription contract for billing support contact
- 💬 In-app: Use the support chat from the main menu
