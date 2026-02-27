---
id: accountant-guide
title: Accountant Guide
description: Complete accountant and bursar guide for 4SCH. Manage school fees, process payments in Naira, generate financial reports, track transactions, and handle school finances in Nigeria.
keywords: [school accountant, bursar guide, fee management, payment processing Nigeria, financial reports, Naira transactions, school finance, 4SCH accounting, Nigerian school fees]
sidebar_position: 6
---

import Link from '@docusaurus/Link';
import TOCInline from '@theme/TOCInline';

# Accountant/Bursar Guide

Welcome! This guide is for school accountants, bursars, and finance officers who manage school finances through 4SCH. You'll learn how to handle fee management, payments, financial reports, and reconciliation.

<TOCInline toc={[]} minHeadingLevel={2} maxHeadingLevel={3} />

---

## Your Finance Dashboard

When you log into 4SCH as an accountant, your dashboard focuses on financial information.

### What You'll See

**Financial Summary:**
- **Total Revenue This Term** — All fees collected
- **Outstanding Fees** — Amount yet to be paid
- **Collection Rate** — Percentage collected vs. expected
- **Recent Payments** — Latest fee payments received
- **Pending Approvals** — Payments or concessions awaiting your approval

**Quick Actions:**
- Record Payment
- Generate Invoice
- Apply Concession
- Generate Financial Report
- Send Fee Reminder

**Alerts:**
- Overdue payments
- Large transactions requiring approval
- Reconciliation discrepancies
- End-of-term deadlines

:::tip
Your dashboard gives you a real-time view of the school's financial health. Check it first thing every morning!
:::

---

## Fee Structure Management

### Understanding Fee Categories

Fee categories are the different types of fees your school charges.

**Common Fee Categories:**
- **Tuition Fee** — Main academic fee
- **Development Levy** — Infrastructure and facilities
- **Resource/Activities Fee** — Optional school-defined charge
- **Laboratory Fee** — Science lab materials
- **Sports Fee** — Athletic programs
- **Examination Fee** — Internal and external exams
- **Computer Fee** — ICT resources
- **Transport Fee** — School bus (if applicable)
- **Feeding Fee** — Meals (boarding schools)
- **Uniform Fee** — School uniform
- **PTA Levy** — Parent-Teacher Association
- **Extra-curricular Activities** — Clubs, music lessons, etc.

### Creating Fee Structures

Different classes often have different fees. You need to set up fee structures for each level.

**How to Create a Fee Structure:**

1. Go to **Finance** → **Fee Structures**
2. Click **Create New Structure**
3. Fill in:
   - **Structure Name:** "2024/2025 JSS Fee Structure"
   - **Applicable Session:** Select current session
   - **Applicable Term:** Select term (or all terms)
   - **Applicable Classes:** Select JSS 1, JSS 2, JSS 3
4. Add fee items:
   - Click **Add Fee Item**
   - Select **Fee Category:** e.g., Tuition
   - Enter **Amount:** e.g., ₦75,000
   - Mark as **Mandatory** or **Optional**
   - Click **Add**
5. Repeat for all fee categories
6. Review total amount
7. Click **Save Structure**

**Example Fee Structure for JSS Classes:**

| Fee Category | Amount | Type |
|--------------|--------|------|
| Tuition | ₦75,000 | Mandatory |
| Development Levy | ₦15,000 | Mandatory |
| Resource/Activities Fee | ₦5,000 | Optional |
| Laboratory Fee | ₦8,000 | Mandatory |
| Sports Fee | ₦3,000 | Mandatory |
| Computer Fee | ₦5,000 | Mandatory |
| PTA Levy | ₦2,000 | Mandatory |
| **Total per Term** | **₦113,000** | |

**Transport Fee** | ₦15,000 | Optional (only for students using school bus)

### Updating Fee Structures

**When to Update:**
- Start of new academic session
- Mid-year fee adjustments (with board approval)
- Adding new fee categories

**How to Update:**
1. Go to **Finance** → **Fee Structures**
2. Find the structure to update
3. Click **Edit**
4. Make necessary changes
5. **Important:** Specify effective date
6. Click **Save**

:::caution
If you update fees mid-session, already-generated invoices won't automatically update. You'll need to regenerate invoices or manually adjust them.
:::

---

## Invoice Management

### Generating Invoices

At the start of each term, you generate invoices for all students.

**Bulk Invoice Generation:**

1. Go to **Finance** → **Generate Invoices**
2. Select:
   - **Session:** 2024/2025
   - **Term:** First Term
   - **Classes:** Select all or specific classes
   - **Fee Structure:** Select the appropriate structure for each class level
3. Set **Due Date:** e.g., 2 weeks into the term
4. Click **Preview** to see sample invoices
5. Review for accuracy
6. Click **Generate Invoices**

**System Actions:**
- Creates invoice for each student in selected classes
- Applies appropriate fee structure based on class
- Applies any existing concessions automatically
- Sends notification to parents
- Makes invoices visible in parent portal

### Generating Individual Invoices

For new students or special cases:

1. Go to **Finance** → **Invoices** → **Create Invoice**
2. Search and select the student
3. Choose **Session** and **Term**
4. Add fee items manually or select a fee structure
5. Adjust amounts if needed
6. Set due date
7. Click **Generate Invoice**

### Viewing and Managing Invoices

**To View All Invoices:**
1. Go to **Finance** → **Invoices**
2. Filter by:
   - **Status:** Paid, Unpaid, Partially Paid, Overdue
   - **Class**
   - **Date Range**
3. View details by clicking on any invoice

**Invoice Statuses:**
- 🟢 **Paid** — Fully paid
- 🟡 **Partially Paid** — Some amount paid, balance remaining
- ⚪ **Unpaid** — No payment yet
- 🔴 **Overdue** — Past due date and unpaid

### Editing Invoices

**When You Might Need to Edit:**
- Incorrect fee amount
- Student moved to different class
- Additional charges needed

**How to Edit:**
1. Find the invoice
2. Click **Edit** (only available for unpaid or partially paid invoices)
3. Make necessary changes
4. Add a note explaining the change
5. Click **Save**

:::note
Some systems may lock invoices after a certain period or after payment begins. Check with your admin for your school's policy.
:::

---

## Payment Processing

This is your core daily task—recording and managing payments.

### Recording Cash Payments

When parents pay cash at the school office:

**Step-by-Step:**
1. Go to **Finance** → **Record Payment**
2. Search for the student by name or admission number
3. Select the invoice to pay
4. Enter payment details:
   - **Amount Paid:** e.g., ₦50,000
   - **Payment Date:** Today's date (or actual payment date)
   - **Payment Method:** Cash
   - **Receipt Number:** Your manual receipt book number
   - **Received By:** Your name
   - **Notes:** Any relevant information
5. Click **Record Payment**

**System Actions:**
- Updates invoice status (Paid or Partially Paid)
- Generates digital receipt
- Updates financial reports
- Sends receipt to parent via email/SMS (if enabled)

**Important:**
- ✅ Always issue a manual receipt from your receipt book
- ✅ Count cash carefully before recording payment
- ✅ Store cash securely until bank deposit
- ✅ Record payment in 4SCH immediately

### Recording Bank Transfer Payments

When parents pay via bank transfer:

**Step-by-Step:**
1. Receive bank alert or check bank statement
2. Go to **Finance** → **Record Payment**
3. Search for the student
4. Select the invoice
5. Enter payment details:
   - **Amount Paid:** As per bank transfer
   - **Payment Date:** Date shown on bank statement
   - **Payment Method:** Bank Transfer
   - **Reference Number:** Bank transaction reference
   - **Bank Name:** Parent's bank
   - **Notes:** "Bank transfer confirmed"
6. Click **Record Payment**

**Verification:**
- ✅ Cross-check amount with bank statement
- ✅ Verify sender's name matches parent/guardian
- ✅ Note the bank reference for reconciliation

### Recording Card/Online Payments

When parents pay through the online portal:

**Usually Automatic:**
- Most online payments (card, mobile money) are recorded automatically
- System receives notification from payment gateway
- Invoice is marked as paid immediately
- Digital receipt sent to parent

**Your Role:**
- Monitor online payments daily
- Verify they're recorded correctly
- Reconcile with payment gateway statements
- Resolve any failed transactions

**If Manual Recording Needed:**
1. Check payment gateway dashboard
2. Confirm payment was successful
3. Go to **Finance** → **Record Payment**
4. Select **Payment Method:** Card Payment or Mobile Money
5. Enter **Gateway Reference Number**
6. Record payment

### Handling Partial Payments

Many parents pay fees in installments.

**Example:**
- Total Fee: ₦113,000
- Parent pays: ₦50,000 (First installment)
- Balance: ₦63,000

**How to Record:**
1. Record the ₦50,000 as described above
2. System automatically calculates balance
3. Invoice status changes to "Partially Paid"
4. Parent can see remaining balance in their portal

**Setting Up Payment Plans:**

For parents who need structured installments:

1. Go to student's finance section
2. Click **Create Payment Plan**
3. Set installments:
   - **First Installment:** ₦50,000 due by Jan 15
   - **Second Installment:** ₦63,000 due by Feb 15
4. System sends reminders for each due date
5. Track compliance in **Payment Plans** report

### Issuing Receipts

**Digital Receipts:**
- Automatically generated when payment is recorded
- Sent to parent via email/SMS
- Parent can download from their portal anytime

**Manual Receipts:**
- Issue from your receipt book for cash payments
- Include:
  - Receipt number
  - Date
  - Student name and admission number
  - Amount paid
  - Payment method
  - Balance (if any)
  - Your signature and school stamp

**Receipt Book Management:**
- Keep receipt books in numerical order
- Never skip numbers
- Write "CANCELLED" on spoiled receipts and keep in book
- Hand over filled books to admin for audit

---

## Fee Concessions & Scholarships

Some students receive fee discounts or full scholarships.

### Types of Concessions

**Common Concession Types:**
- **Scholarship** — Full or partial (based on academic merit)
- **Staff Child Discount** — Children of school staff
- **Sibling Discount** — Multiple children from same family
- **Bursary** — Financial hardship assistance
- **Special Cases** — Approved by school board

### Applying a Concession

**Step-by-Step:**
1. Verify concession has been approved by principal/board
2. Go to student's finance section
3. Click **Apply Concession**
4. Fill in:
   - **Concession Type:** Select from list
   - **Amount or Percentage:**
     - Percentage: e.g., 50% discount
     - Fixed Amount: e.g., ₦20,000 off
   - **Reason:** "Academic Scholarship" or "Staff Child"
   - **Valid For:** This Term, This Session, or Permanent
   - **Approval Reference:** Board meeting minute number or approval letter
5. Attach approval document (if available)
6. Click **Apply**

**System Actions:**
- Automatically adjusts current and future invoices
- Shows original amount and discounted amount
- Records concession in student's financial history
- Updates financial reports to show concessions granted

### Monitoring Concessions

**Monthly Review:**
1. Go to **Reports** → **Concessions Report**
2. View:
   - Total concessions granted
   - Amount foregone per concession type
   - List of students with concessions
3. Verify all concessions are still valid
4. Report to management

:::caution Important
Never apply concessions without proper approval! All concessions must be documented and approved by authorized personnel.
:::

---

## Financial Reports

Regular reporting keeps school leadership informed and supports decision-making.

### Daily Reports

**Cash Collection Report:**
- Run at end of each day
- Shows all cash payments received
- Compare with physical cash in hand
- Must balance before closing

**How to Generate:**
1. Go to **Reports** → **Finance** → **Daily Cash Report**
2. Select today's date
3. Click **Generate**
4. Print and attach to cash deposit slip

### Weekly Reports

**Fee Collection Summary:**
- Total collected for the week
- Collection by class
- Collection by payment method
- Outstanding amounts

**How to Use:**
- Identify classes with low collection rates
- Plan follow-up actions
- Update principal on collection progress

### Monthly Reports

**Comprehensive Financial Report:**

Should include:
1. **Revenue Summary:**
   - Expected revenue (total invoices)
   - Actual collection
   - Collection rate percentage
   - Outstanding amount

2. **Collection by Class:**
   - Table showing each class's collection rate
   - Highlight classes below 70% collection

3. **Payment Methods Breakdown:**
   - Cash: ₦X
   - Bank Transfer: ₦Y
   - Online Payments: ₦Z
   - Total: ₦(X+Y+Z)

4. **Concessions Granted:**
   - Number of students
   - Total amount
   - By concession type

5. **Outstanding Fees:**
   - By class
   - By age of debt (30 days, 60 days, 90+ days)

**How to Generate:**
1. Go to **Reports** → **Finance** → **Monthly Summary**
2. Select month and year
3. Click **Generate**
4. Download as PDF
5. Present to principal/school board

### Term-End Reports

**Complete Term Financial Report:**

Includes everything from monthly report plus:
- Term-over-term comparison
- Bad debts written off
- Refunds processed
- Bank reconciliation statement
- Variance analysis (expected vs. actual)

**Preparing for Audit:**
- Ensure all payments are recorded
- All receipts are filed
- Bank statements reconciled
- Supporting documents organized
- Concessions properly documented

---

## Bank Reconciliation

Matching your 4SCH records with bank statements is critical.

### Why Reconcile?

- Ensures all payments are recorded
- Identifies missing or duplicate entries
- Detects errors or fraud
- Required for audit
- Shows true cash position

### Monthly Reconciliation Process

**Step 1: Gather Documents**
- Bank statement for the month
- 4SCH payment report for same period
- Uncleared checks from previous month
- Deposit slips

**Step 2: Compare Deposits**
1. List all deposits shown in bank statement
2. Match each deposit with 4SCH payment records
3. Mark matched items ✓
4. Investigate unmatched items

**Common Discrepancies:**
- **Deposit in bank but not in 4SCH** → Forgot to record payment
- **Payment in 4SCH but not in bank** → Deposit not yet cleared or not taken to bank
- **Different amounts** → Recording error

**Step 3: Generate Reconciliation Report**

1. Go to **Finance** → **Bank Reconciliation**
2. Select month
3. Enter:
   - Opening balance (from last month)
   - Closing balance (from bank statement)
4. System shows:
   - Total deposits per 4SCH
   - Total deposits per bank
   - Difference
5. Investigate and resolve differences
6. Add reconciliation notes
7. Click **Reconcile**

**Step 4: Document**
- Print reconciliation report
- Attach bank statement
- Note any adjustments made
- Get principal's signature
- File for audit

### Tips for Easier Reconciliation

✅ **Reconcile weekly** instead of waiting until month-end  
✅ **Record payments immediately** don't batch at end of day  
✅ **Use clear payment references** to match easier  
✅ **Keep deposit slips organized** in chronological order  
✅ **Resolve discrepancies immediately** don't let them pile up  

---

## Managing Outstanding Fees

Collecting overdue fees is a key responsibility.

### Identifying Defaulters

**How to View Outstanding Fees:**
1. Go to **Finance** → **Outstanding Fees**
2. Filter by:
   - **Overdue Only** — Past due date
   - **Class**
   - **Amount Range**
3. Sort by:
   - Amount owed (highest first)
   - Days overdue
   - Student name

**Export List:**
- Download as Excel
- Share with principal
- Plan follow-up strategy

### Follow-Up Strategy

**Week 1 After Due Date:**
- **Action:** Automated SMS/Email reminder
- **Message:** Friendly reminder that fees are due

**Week 2:**
- **Action:** Second reminder
- **Message:** Request to contact office if having difficulties

**Week 3:**
- **Action:** Phone call to parent
- **Your Role:** Call parent, discuss situation
- **Offer:** Payment plan if needed

**Week 4:**
- **Action:** Official letter
- **Content:** Formal notice of overdue fees, possible consequences

**Week 5+:**
- **Action:** Meeting with parent and principal
- **Decision:** Payment plan, write-off, or consequences per school policy

### Sending Fee Reminders

**Manual Reminder:**
1. Go to **Finance** → **Outstanding Fees**
2. Select students to remind (checkboxes)
3. Click **Send Reminder**
4. Customize message:

**Sample Message:**
> "Dear Parent,
>
> Our records show outstanding fees for [Student Name]:
> - Invoice Number: INV-2024-0123
> - Amount Due: ₦63,000
> - Due Date: January 15, 2024
> - Days Overdue: 14
>
> Please make payment at your earliest convenience. If you need to discuss a payment plan, contact the accounts office.
>
> Thank you."

5. Click **Send**

**Automated Reminders:**
- Set up in **Finance Settings**
- Choose reminder schedule
- System sends automatically

### Handling Payment Difficulties

**When Parents Can't Pay:**

**Be Empathetic:**
- Listen to their situation
- Don't judge or shame
- Show understanding

**Offer Solutions:**
- **Payment Plan:** Break balance into installments
- **Partial Payment:** "Can you pay something this week?"
- **Discuss with Principal:** For possible concession or extended deadline

**Document Everything:**
- Record all conversations
- Note promises made
- Follow up on commitments

:::tip
Approach fee collection with compassion. Many parents want to pay but face genuine financial hardship. Working with them builds goodwill and often results in eventual payment.
:::

---

## Handling Refunds & Credits

Sometimes you need to refund money to parents.

### When Refunds Are Needed

**Common Scenarios:**
- Student withdraws mid-term
- Duplicate payment made
- Overpayment
- Service not rendered (e.g., transport not used)

### Processing a Refund

**Step 1: Verify Refund Request**
- Check student's payment history
- Confirm overpayment or valid reason
- Get principal's approval

**Step 2: Calculate Refund Amount**
- Original payment
- Minus any services already provided
- Minus any penalties (per school policy)
- = Refund Amount

**Step 3: Record in System**
1. Go to student's finance section
2. Click **Process Refund**
3. Enter:
   - **Refund Amount**
   - **Reason**
   - **Approval Reference**
   - **Refund Method:** Cash, Bank Transfer, Check
4. Click **Process**

**Step 4: Make Payment**
- If cash: Issue from petty cash or get from bank
- If bank transfer: Initiate transfer
- If check: Issue check

**Step 5: Documentation**
- Parent signs refund receipt
- Attach to student file
- Update accounts records

### Carrying Forward Credit

If refund isn't needed immediately:

**Option:** Credit to next term
1. Mark overpayment as **Credit Forward**
2. Apply to next term's invoice
3. Inform parent of credit balance

---

## End-of-Term Procedures

Critical tasks at term end to close books properly.

### Two Weeks Before Term Ends

**Week 1:**
- ✅ Send final fee reminders to all outstanding accounts
- ✅ Generate current outstanding fees report
- ✅ Meet with principal on collection strategy
- ✅ Process any pending refunds
- ✅ Verify all concessions are documented

**Week 2:**
- ✅ Follow up aggressively on large outstanding amounts
- ✅ Record all last-minute payments
- ✅ Prepare for term-end reconciliation
- ✅ Organize all receipts and documents

### Last Day of Term

- ✅ Record any final payments
- ✅ Generate final collection report
- ✅ Close cash book
- ✅ Count and bank all cash
- ✅ Run bank reconciliation
- ✅ Generate term financial report
- ✅ Back up all financial data

### After Term Ends

**Week 1:**
- ✅ Complete all reconciliations
- ✅ Finalize term report
- ✅ Present report to school board
- ✅ Archive documents
- ✅ Prepare for next term

**Bad Debt Review:**
- Identify accounts unlikely to be collected
- Recommend write-offs to board
- Requires board approval

---

## Best Practices for School Accountants

### Daily Habits

**Start of Day:**
1. ✅ Check for online payments overnight
2. ✅ Review any system alerts
3. ✅ Check today's appointments/tasks
4. ✅ Count opening cash balance

**During Day:**
- ✅ Record payments immediately
- ✅ Issue receipts promptly
- ✅ Keep cash secure
- ✅ Respond to parent inquiries

**End of Day:**
- ✅ Count cash
- ✅ Generate daily report
- ✅ Reconcile cash with receipts
- ✅ Prepare bank deposit
- ✅ Back up data
- ✅ Secure office

### Accuracy is Everything

**Double-Check:**
- ✅ Amounts before recording
- ✅ Student names and admission numbers
- ✅ Payment methods and references
- ✅ Calculations (balance due)

**Don't:**
- ❌ Rush when handling money
- ❌ Record payments without verification
- ❌ Skip reconciliation
- ❌ Leave cash unsecured

### Professional Ethics

**Integrity:**
- Never take money
- Never falsify records
- Report discrepancies honestly
- Follow all financial policies

**Confidentiality:**
- Don't discuss student fees with unauthorized people
- Keep financial information secure
- Don't gossip about payment difficulties

**Professionalism:**
- Treat all parents with respect
- Be patient with questions
- Maintain organized records
- Meet deadlines consistently

---

## Troubleshooting Common Issues

### "Payment recorded but not showing in portal"

**Possible Causes:**
- System sync delay
- Wrong student selected
- Parent looking at wrong term

**Solutions:**
1. Verify payment was recorded correctly
2. Check student and term are correct
3. Ask parent to log out and log back in
4. Contact admin if issue persists

### "Parent says they paid but we have no record"

**Steps:**
1. Ask for payment proof (receipt, bank statement, screenshot)
2. Check all payment records thoroughly
3. Search by amount and date
4. Check if payment went to wrong student
5. If payment is verified, record it and apologize
6. Investigate how it was missed

### "Balance showing incorrect amount"

**Check:**
1. All payments recorded?
2. Any concessions applied?
3. Were there mid-term fee adjustments?
4. Multiple invoices for same term?

**Resolution:**
1. Recalculate manually
2. Compare with system
3. Make correction if needed
4. Document the correction

---

## Financial Reports Reference

### Report Types You'll Generate

**Daily:**
- Cash collection report
- Online payments summary

**Weekly:**
- Fee collection summary
- Outstanding fees by class
- Collection rate trending

**Monthly:**
- Comprehensive financial report
- Bank reconciliation
- Aged debt report
- Concessions granted report

**Term:**
- Complete term financial report
- Collection vs. budget analysis
- Payment method breakdown
- Bad debt recommendation

**Annual:**
- Annual revenue report
- Year-over-year comparison
- Financial projections for next year

---

## Getting Help

**Need Training on 4SCH Finance Module?**
- Ask your admin to arrange training
- Request access to training videos
- Practice in test environment first

**Have Financial Questions?**
1. Check school financial policy manual
2. Consult with principal
3. Contact 4SCH support for system issues

**Found a Discrepancy?**
- Report immediately to principal
- Document thoroughly
- Don't try to hide or fix alone
- Transparency is always best

---

## Related Guides

- <Link to="/guides/school-admin">School Administrator Guide</Link> — Overall system management
- <Link to="/guides/non-teaching-staff-guide">Non-Teaching Staff Guide</Link> — General support tasks
- <Link to="/support/faq">Frequently Asked Questions</Link>

Your role is vital to the school's operations. Accurate financial management enables the school to plan, grow, and serve students better. Keep up the excellent work! 💰📊

