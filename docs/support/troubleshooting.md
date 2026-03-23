---
id: troubleshooting
title: Troubleshooting Guide
sidebar_position: 2
description: Comprehensive troubleshooting for 4SCH. Step-by-step solutions for login, exams, payments, transportation, gallery, and more. Nigerian payment providers, network issues, and role-specific guides included.
keywords: [troubleshooting, fix errors, login problems, payment failed, exam issues, transportation, gallery, network problems, error codes, 4SCH support, Nigerian payment, Flutterwave, Paystack]
---

# Comprehensive Troubleshooting Guide

:::info Quick Help
**Need immediate help?** Check the [Before Contacting Support](#before-contacting-support) checklist first. Most issues can be resolved in minutes!
:::

---

## Error Codes Reference Table

| Code | Issue | Module | Severity | Quick Fix |
|------|-------|--------|----------|-----------|
| **E001** | Invalid login credentials | Authentication | High | Verify School Code, GR Number, Password (case-sensitive) |
| **E002** | GR Number not found | Authentication | High | Check student ID card; confirm with school admin |
| **E003** | Date of birth format incorrect | Authentication | Medium | Use dd-mm-yyyy format (e.g., 15-08-2010) |
| **E004** | School Code invalid | Authentication | High | Ask class teacher; verify exact capitalization |
| **E005** | Account locked after failed attempts | Authentication | High | Wait 30 minutes or contact school admin |
| **E101** | Network timeout on exam | Online Exams | Critical | Check internet; see Network Troubleshooting section |
| **E102** | Exam timer mismatch | Online Exams | High | Sync device time; restart app |
| **E103** | Answer not submitted | Online Exams | Critical | Reload page; check submission status |
| **E104** | Exam access denied (date/time) | Online Exams | Medium | Verify exam schedule in timetable |
| **E105** | Random question generation failed | Online Exams | High | Insufficient questions in bank; contact admin |
| **E201** | Payment gateway timeout | Billing | Critical | Retry after 5 minutes; check provider status |
| **E202** | Payment declined by bank | Billing | High | Verify card details; check with bank |
| **E203** | Duplicate charge detected | Billing | Critical | Check bank account; contact support with transaction ID |
| **E204** | Wrong currency conversion | Billing | Medium | Confirm invoice currency matches payment method |
| **E301** | Attendance window closed | Attendance | Medium | Check submission deadline; contact teacher |
| **E302** | Gradebook locked | Attendance & Grades | Medium | Assessment finalized; request admin unlock |
| **E401** | Transportation route not available | Transportation | Medium | Enroll in available route; check enrollment deadline |
| **E402** | Vehicle GPS offline | Transportation | High | Driver connectivity issue; contact school |
| **E501** | Gallery image upload failed | Gallery | Low | Check file size (<10MB); use JPEG/PNG |
| **E502** | Gallery sync error | Gallery | Low | Clear cache; restart app |
| **E601** | Dashboard data not loading | Dashboard | Medium | Clear cache; check internet; reload |

---

## PART 1: AUTHENTICATION & LOGIN ISSUES

### Issue 1.1: Student Can't Log In

**Error Codes:** E001, E004

#### Before Contacting Support - Verification Checklist
- [ ] Verify all THREE credentials match exactly (case-sensitive):
  - School Code: _________ (confirm with school office)
  - GR Number: _________ (check student ID card)
  - Password: _________ (check with school if changed recently)
- [ ] Phone/Browser time is correct (within ±5 minutes)
- [ ] Internet connection is stable
- [ ] Not locked after failed attempts (wait 30 minutes if needed)
- [ ] App version is latest (check app store for updates)

#### Quick Fix (Most Common - 5 minutes)
1. **Check your School Code exactly** - Often has specific capitalization (e.g., "LACS-001" not "lacs-001")
2. **Verify GR Number matches your ID card** - Copy it exactly as shown
3. **Try clearing cache** (Web Portal only):
   - Chrome: Ctrl+Shift+Delete → Select "All time" → Clear data
   - Safari: Preferences → Privacy → "Manage Website Data" → Remove 4sch.com
4. **Restart the app** (mobile) or try incognito/private window (web)

#### Advanced Solutions

**Solution A: Reset Your Password (Recommended)**
1. On login page, click **"Forgot Password?"**
2. Enter: School Code, GR Number, Date of Birth (dd-mm-yyyy)
3. Follow verification steps
4. Set new password (minimum 8 characters, mix of letters & numbers)
5. Wait 30 seconds, then log in with new credentials

**Solution B: Wrong School Code?**
- Contact your class teacher or school office
- Common mistake: Using school name instead of code (e.g., "Lagos Academy" vs "LACS-001")
- Write down the exact code from school

**Solution C: Device Time Is Wrong**
1. Check your device time/date settings
2. Ensure it matches your timezone
3. Turn on "Automatic date & time" (phone settings)
4. Restart app after fixing

**Solution D: Account Locked After Failed Attempts**
- System locks after 5 failed login attempts
- Wait 30 minutes for auto-unlock
- Or contact school admin for manual unlock

#### Diagnostic Flowchart (Text-Based)
```
START: Can't log in?
│
├─→ See error "E001: Invalid credentials"?
│   ├─→ YES: Check capitalization of School Code
│   └─→ NO: Continue
│
├─→ See error "E004: School Code invalid"?
│   ├─→ YES: Contact school for exact code
│   └─→ NO: Continue
│
├─→ Account locked message?
│   ├─→ YES: Wait 30 minutes for unlock
│   └─→ NO: Continue
│
└─→ Still failing? Contact support with error details
```

**Video Reference:** See "Student Login Walkthrough" in video tutorials

---

### Issue 1.2: Student Password Reset Not Working

**Error Codes:** E003, E002

#### Before Contacting Support - Verification Checklist
- [ ] GR Number matches exactly (check student ID card)
- [ ] Date of Birth is in **dd-mm-yyyy** format (NOT dd/mm/yyyy)
- [ ] School Code is exactly correct (check with teacher)
- [ ] Not attempting reset more than once per 5 minutes
- [ ] Check email spam folder (if email sent)
- [ ] Phone storage has enough space

#### Quick Fix (Most Common - 3 minutes)
**The #1 mistake: Wrong date format!**
- ❌ WRONG: 15/08/2010 or 2010-08-15
- ✅ CORRECT: 15-08-2010

**Steps:**
1. Open 4SCH app or go to [ngs.4sch.com](https://ngs.4sch.com)
2. Click **"Forgot Password?"**
3. Enter School Code (e.g., "LACS-001")
4. Enter GR Number (from ID card, e.g., "12345")
5. Enter Date of Birth as **DD-MM-YYYY** (e.g., "15-08-2010")
6. Click "Verify"
7. Follow verification steps
8. Set new password

#### Advanced Solutions

**Solution A: Date Format Still Wrong?**
- Use notepad and write: 15-08-2010
- Copy-paste it into the app (avoid typing)
- This prevents accidental spacing errors

**Solution B: Still "GR Number Not Found"?**
- Your GR Number may have changed
- Check: Student ID card, school admit letter, report card
- Ask class teacher to confirm current GR Number
- If still different, contact school admin

**Solution C: School Code Confusion**
- School Code ≠ School Name
- Examples: "Lagos Academy" → Code might be "LACS-001"
- Contact your school office for exact code
- Write it down and use copy-paste to avoid typos

**Solution D: Reset Email Not Arriving**
- Check spam/junk folder
- Add admin@4sch.com to contacts
- Wait up to 2 minutes
- If not received: Try again (wait 5 minutes between attempts)

#### Video Reference: "Password Reset Step-by-Step" tutorial

---

### Issue 1.3: Teacher/Parent/Staff Password Reset Not Working

**Affected Roles:** Teachers, Parents, School Staff, Accountants, Drivers

#### Before Contacting Support - Verification Checklist
- [ ] Email address on file is correct
- [ ] Check email spam/junk folder
- [ ] Email inbox not full (storage issue)
- [ ] Not attempting reset more than once per 10 minutes
- [ ] If SSO enabled: Contact identity provider instead
- [ ] Account not deactivated by admin

#### Quick Fix

**For Web Portal Users:**
1. Go to [ngs.4sch.com](https://ngs.4sch.com)
2. Click **"Forgot Password?"**
3. Enter registered email address
4. Check email (including spam folder)
5. Click reset link within 24 hours
6. Set new password (minimum 8 characters)

#### Advanced Solutions

**Solution A: Email Not Arriving**
1. **Check SPAM folder** - Most common fix
2. **Verify email on file**: School admin can check in Admin Console
3. **Wait up to 2 minutes** for email to arrive
4. **Try again after 10 minutes** (rate limiting)
5. **Contact school admin** to resend or check SMTP logs

**Solution B: SSO (Single Sign-On) Enabled**
- If your school uses SSO (Microsoft, Google, etc.):
  - Don't use "Forgot Password" on 4SCH
  - Reset password through your identity provider
  - Then log in with your SSO account

**Solution C: Account Deactivated**
- Admin may have deactivated your account
- Contact school admin to reactivate
- Provide: Your name and email

#### Video Reference: "Staff Password Reset Guide"

---

## PART 2: ONLINE EXAMS ISSUES

### Issue 2.1: Can't Access Online Exam

**Error Codes:** E104, E101

#### Before Contacting Support - Verification Checklist
- [ ] Exam date/time is TODAY (check timetable)
- [ ] Current time is within exam window (e.g., 2:00 PM - 3:30 PM)
- [ ] Device time is correct (within ±5 minutes)
- [ ] Internet connection is stable (WiFi or 4G)
- [ ] App version is latest (check app store)
- [ ] Phone storage has at least 500MB free
- [ ] Not already submitted (can't re-enter after submission)

#### Quick Fix (Most Common - 2 minutes)
1. **Check exam timetable**: Dashboard → Exams → Timetable
2. **Verify date and time** match today's schedule
3. **Check device time**: Settings → Date & Time → Enable "Automatic"
4. **Try refreshing the exam list**: Pull down to refresh
5. **Restart the app** completely

#### Advanced Solutions

**Solution A: "Exam Not Yet Available" Error**
- Exam hasn't started yet
- Check exam start time in timetable
- Come back at correct time
- Set a phone reminder 5 minutes before

**Solution B: "Exam Time Expired" Error**
- You're trying to access after deadline
- Check exam window in timetable
- After deadline, exam closes
- Contact teacher if you entered within time but got error

**Solution C: Device Time is Wrong**
1. Phone Settings → Date & Time
2. Enable **"Automatic date & time"** (use NTP)
3. Check timezone matches your location
4. Restart phone after changing
5. Restart 4SCH app

**Solution D: Still Can't Access?**
- Check if exam moved to different time (check timetable again)
- Verify you're in correct CLASS/SECTION
- Different sections may have different exam times
- Contact teacher with screenshot of error

#### Video Reference: "Online Exam Access Guide"

---

### Issue 2.2: Exam Timer Not Working / Time Mismatch

**Error Codes:** E102

#### Before Contacting Support - Verification Checklist
- [ ] Device time is synchronized (Settings → Auto sync ON)
- [ ] Have stable internet (WiFi preferred for exams)
- [ ] App is fully updated to latest version
- [ ] Sufficient phone storage (500MB+ free)
- [ ] Not using VPN (disables time sync)
- [ ] Not in Airplane mode or low power mode

#### Quick Fix (Most Common - 5 minutes)
1. **Note the timer on screen** - How much time left?
2. **Check your device time** → Settings → Clock
3. **Enable automatic time sync**:
   - Android: Settings → Date & Time → "Automatic date and time" ON
   - iOS: Settings → General → Date & Time → "Set Automatically" ON
4. **Restart the app** completely
5. **Return to exam** - Timer should sync

#### Advanced Solutions

**Solution A: Timer Showing Wrong Time**
- Timer is based on SERVER time, not device time
- If device is set ahead/behind, timer adjusts accordingly
- **Always use automatic time sync**

**Solution B: Timer Keeps Resetting or Jumping**
- Indicates poor internet connection
- Switch to WiFi if on mobile data
- Move closer to WiFi router
- Try restarting app

**Solution C: Timer Stopped / Frozen**
1. Note the time on screen
2. Check if WiFi/network is disconnected
3. Reconnect to internet
4. Wait 10 seconds
5. Timer should resume
6. If still frozen: Exit and re-enter exam (answer loss possible)

**Solution D: VPN is Interfering**
- If using VPN: Turn it OFF
- Exam system needs accurate time sync
- VPN can disrupt NTP time synchronization

#### Video Reference: "Online Exam Timer Guide"

---

### Issue 2.3: Answers Not Submitting / "Submission Failed"

**Error Codes:** E103

#### Before Contacting Support - Verification Checklist
- [ ] Internet connection is active and stable
- [ ] Not disconnected mid-exam
- [ ] Exam not closed (deadline passed)
- [ ] Enough phone storage (at least 100MB)
- [ ] App version is latest
- [ ] All answers are visible on screen before submitting
- [ ] Not using VPN or proxy

#### Quick Fix (Most Common - 5 minutes)
1. **Check internet connection**:
   - WiFi: See WiFi icon with checkmark
   - Mobile: See 4G/LTE indicator
2. **Try answering and submitting ONE question**:
   - Tap an answer
   - Scroll down
   - Tap "Save" or "Next"
   - Wait for confirmation message
3. **If that works**: Continue with other questions
4. **If that fails**: See Solution A below

#### Advanced Solutions

**Solution A: "Connection Failed" or "Submission Error"**

Step-by-step fix:
1. **Don't close the app!** Your answers may still be saved locally
2. **Check internet connection**:
   - WiFi: Disconnected? Reconnect
   - Mobile data: No signal? Move to better location
3. **Try submitting answer again**:
   - Tap answer option
   - Scroll down
   - Tap "Save" / "Next"
   - Wait 3 seconds for response
4. **If still failing**: Restart app (carefully):
   - Completely close app (swipe out of recent apps)
   - Wait 5 seconds
   - Reopen app
   - Go back to exam
   - All answers should still be there

**Solution B: "Network Timeout" During Exam**

This happens when internet is very slow:
1. **Check internet speed** (needs minimum 1 Mbps)
2. **Switch to better connection**:
   - WiFi: Move closer to router
   - Mobile: Switch to 4G/LTE (not 3G)
3. **Disable background apps**:
   - Android: Close other apps in recent menu
   - iOS: Swipe up to close background apps
4. **Try submitting answer again**

**Solution C: Exam Closed While Submitting**

If exam deadline passes DURING submission:
- System may reject answer
- If happened within 30 seconds of deadline: Contact teacher
- If you submitted AFTER deadline: System won't accept answers

**Solution D: Answer Saved Locally But Not Uploaded**

Rare issue - answer on phone but not on server:
1. **Don't refresh or close app**
2. **Try submitting again**
3. **If exam still open**: System will upload
4. **If exam closed**: Contact teacher immediately with:
   - Your full name
   - Question number
   - Your answer
   - Time you answered

#### Video Reference: "Online Exam Submission Tips"

---

### Issue 2.4: Questions Not Loading or Random Questions Failed

**Error Codes:** E105

#### Before Contacting Support - Verification Checklist
- [ ] Exam uses Manual (not Random) assignment OR
- [ ] Admin verified enough questions in question bank
- [ ] Internet connection is stable
- [ ] App cache has been cleared
- [ ] Device has at least 500MB free storage

#### Quick Fix

**For Random Assignment Exams:**
1. **What should happen**: Questions randomly load from question bank
2. **If questions won't load**:
   - Click "Refresh" or "Reload Questions"
   - Close and reopen exam
   - If still failing: See Solution A

**For Manual Assignment Exams:**
1. Questions should appear immediately
2. If blank:
   - Scroll down (questions may be below)
   - Restart app
   - Check internet connection

#### Advanced Solutions

**Solution A: "Not Enough Questions" Error**

This happens when:
- Random assignment is used
- Question bank doesn't have enough questions
- Example: Teacher set "25 random questions" but only 15 exist

**What you should do:**
- Don't attempt the exam (will fail)
- Contact your teacher immediately

**Solution B: Questions Load Very Slowly**

Slow question loading (more than 10 seconds):
1. **Check internet speed** (needs minimum 0.5 Mbps)
2. **Check WiFi signal** (must be 3+ bars)
3. **Restart router**: Off for 30 seconds, then on
4. **Try on different WiFi** if available
5. **Close other apps** using internet

**Solution C: Questions Disappear Mid-Exam**

If questions blank out while taking exam:
1. **Don't panic** - Don't restart app immediately
2. **Check internet** - Is WiFi still connected?
3. **Reconnect internet** if disconnected
4. **Wait 5 seconds** - Questions may reload
5. **If still blank**: Restart app and re-enter
   - All answers should still be saved

#### Video Reference: "Online Exam Questions Guide"

---

## PART 3: OFFLINE EXAMS ISSUES

### Issue 3.1: Can't View Offline Exam Results

**Error Codes:** E301, E302

#### Before Contacting Support - Verification Checklist
- [ ] Exam has been conducted (check timetable)
- [ ] Results have been published by teacher
- [ ] Your class/section is correct
- [ ] Internet connection is stable
- [ ] App version is latest

#### Quick Fix
1. Go to **Dashboard → Exams → Offline Exams → Results**
2. **Pull down to refresh** the list
3. **Check the exam date** - Results appear after marking is complete
4. **If results visible**: Tap to view your marks

#### Advanced Solutions

**Solution A: Results Not Showing**
- Teacher hasn't marked exams yet
- Marking may take 2-7 days depending on school policy
- Check exam date and ask teacher when results will be published

**Solution B: Exam Not in Timetable**
- Exam may have been cancelled
- Check with your teacher
- Contact school admin if unsure

**Solution C: Results Show But Marks Seem Wrong**
1. Review the answer key (if provided)
2. Check your answers against teacher's answer key
3. If you believe there's an error: Message teacher politely with:
   - Question number
   - Your answer
   - Why you think it should be marked differently

#### Video Reference: "Offline Exam Results Guide"

---

### Issue 3.2: Offline Exam Timetable Not Showing

**Error Codes:** E104

#### Before Contacting Support - Verification Checklist
- [ ] Offline exams module is enabled (check with admin)
- [ ] Your class has exams scheduled
- [ ] Device time is correct
- [ ] Internet connection is stable

#### Quick Fix
1. Go to **Dashboard → Exams**
2. Look for **"Offline Exams"** tab
3. Tap **Timetable** to see schedule
4. If not visible: Pull down to refresh

#### Advanced Solutions

**Solution A: "Offline Exams" Tab Not Visible**
- Module may be disabled by school
- Contact school admin to enable Offline Exams module
- Check Admin Console → Settings → Modules

**Solution B: Timetable is Empty**
- Your school may not have scheduled offline exams
- Contact your class teacher
- Or check with school admin about exam schedule

**Solution C: Wrong Class/Section Showing**
- Tap class selector at top
- Confirm you're viewing correct class/section
- Different sections may have different exam schedules

#### Video Reference: "Offline Exam Timetable Guide"

---

## PART 4: PAYMENT & BILLING ISSUES (NIGERIAN CONTEXT)

### Issue 4.1: Payment Failed - Flutterwave Error

**Error Codes:** E201, E202, E203

#### Before Contacting Support - Verification Checklist
- [ ] Card details are correct (name, number, expiry, CVV)
- [ ] Card is active and not blocked
- [ ] Sufficient funds in account
- [ ] Not exceeded daily transaction limit
- [ ] Internet connection is stable throughout payment
- [ ] Invoice amount is correct (in NGN - Nigerian Naira)
- [ ] Payment gateway shows "Online" status

#### Quick Fix (Most Common - 5 minutes)

**Step 1: Verify Payment Gateway Status**
1. Before attempting payment, check: Is Flutterwave online?
2. If payment page shows "Gateway unavailable" - wait 5 minutes
3. Refresh and try again

**Step 2: Retry Payment**
1. Dashboard → Fees → Select invoice
2. Click **"Pay Now"** button
3. Select Flutterwave as payment method
4. Enter card details carefully:
   - Cardholder Name: Exactly as on card
   - Card Number: 16 digits
   - Expiry: MM/YY format
   - CVV: 3 digits on back of card
5. Click **"Pay"**

**Step 3: Check Your Bank**
1. Open your bank app
2. Check if money was deducted
3. If deducted: See Solution B (Duplicate charge)
4. If NOT deducted: Payment genuinely failed, proceed to Solution A

#### Advanced Solutions

**Solution A: "Payment Declined" Error (Card Rejected)**

Possible reasons:
1. **Card blocked**: Call your bank and ask why
2. **Insufficient funds**: Check account balance
3. **Exceeded daily limit**: Bank may limit online transfers
4. **Card expired**: Check expiry date (MM/YY on card)
5. **Fraud detection**: Bank blocked suspicious transaction

**What to do:**
1. **Call your bank** (24/7 hotline):
   - GTBank: 0700-2255822
   - Access Bank: 0700-6000000
   - Zenith Bank: 0800-6000000
   - First Bank: 01-279-6161
   - UBA: 01-271-6789
   - Others: Find on back of your ATM card
2. **Ask them to approve** the 4SCH payment
3. **Try payment again** after 10 minutes
4. **Use different card** if available
5. **Try bank transfer** instead (see Solution C)

**Solution B: Money Deducted But Payment Shows "Pending"**

This is a CRITICAL issue in Nigeria - requires immediate action:

**What this means:**
- Money left your account
- But 4SCH system didn't receive confirmation
- Happens due to network interruption during payment

**What to do IMMEDIATELY:**
1. **Don't try paying again!** You'll be double-charged
2. **Check your bank account**:
   - Is money really gone? (Check transaction history)
   - If yes, note: transaction ID, amount, date/time
3. **Contact Flutterwave support**:
   - Email: support@flutterwave.com
   - Phone: +234 (0) 700-933-6000
   - Provide: Transaction ID, amount, error screenshot
4. **Contact 4SCH support** with:
   - Your full name
   - GR Number (if student)
   - Invoice number
   - Amount paid
   - Transaction ID from bank
   - Bank transaction date/time
   - Screenshots of bank deduction AND pending payment on 4SCH
5. **4SCH support will**:
   - Verify transaction with Flutterwave
   - Manually reconcile payment
   - Update invoice as paid within 24-48 hours

**Timeline:**
- Bank deduction: Immediate
- 4SCH verification: 2-4 hours
- Invoice marked paid: 24-48 hours
- Refund (if duplicate): 3-5 business days

**Solution C: Use Bank Transfer Instead (Most Reliable)**

If Flutterwave continues to fail:
1. Go to invoice in 4SCH
2. Look for **"Bank Transfer"** payment method
3. Click to view bank details
4. Transfer exact amount to school's bank account
5. Upload proof of transfer (screenshot of bank confirmation)
6. School admin approves, invoice marked paid

**Advantages of bank transfer:**
- More reliable than card
- No gateway issues
- Instant confirmation in your bank
- School gets funds directly

**Solution D: Card Has Daily Limit**

Nigerian banks often set daily limits:
1. **Check your daily limit**:
   - Contact your bank
   - Check in bank mobile app (Account Settings)
   - Typical limits: ₦100,000 - ₦1,000,000 per day
2. **Your invoice might exceed limit**:
   - Example: Invoice is ₦150,000 but daily limit is ₦100,000
   - You can't pay in single transaction
3. **Solutions**:
   - Pay from a different account with higher limit
   - Contact bank to increase daily limit (takes 1-2 days)
   - Request parent/guardian with higher limit to pay
   - Use bank transfer method (different limit)

**Solution E: Flutterwave Gateway Timeout**

Sometimes payment seems stuck or times out:
1. **Don't click "Pay" again** if page is loading
2. **Wait 30 seconds** for response
3. **Check your bank** - Is money deducted?
   - YES: See Solution B (Pending payment)
   - NO: Continue below
4. **Close payment page** - Use browser back button
5. **Go back to invoice** - Check if payment went through
   - YES: Close and refresh - should show paid
   - NO: Wait 5 minutes, then retry
6. **If retrying**: Use same card, system will detect duplicate

#### Diagnostic Flowchart
```
START: Payment failed?
│
├─→ Error message shown?
│   ├─→ "Payment Declined": → Solution A (Call bank)
│   ├─→ "Timeout": → Solution E (Wait & retry)
│   └─→ "Pending": → Solution B (Critical - contact support)
│
├─→ Check bank account
│   ├─→ Money deducted: → Solution B (Verify with support)
│   └─→ Money still there: Continue
│
├─→ Card details correct?
│   ├─→ NO: Fix details and retry
│   └─→ YES: Continue
│
├─→ Sufficient funds?
│   ├─→ NO: Add money, then retry
│   └─→ YES: Continue
│
├─→ Try different payment method
│   ├─→ Bank Transfer: → Solution C
│   └─→ Still cards: → Solution A (Call bank)
│
└─→ Still failing? Contact support with:
    - Invoice number
    - Amount
    - Error message
    - Bank transaction ID (if money deducted)
```

**Video Reference:** "Payment Processing Guide" (Nigerian Focus)

---

### Issue 4.2: Missing Payment Receipt

**Error Codes:** E204 (if currency wrong)

#### Before Contacting Support - Verification Checklist
- [ ] Payment status shows "Paid" or "Completed"
- [ ] Invoice is marked as paid in 4SCH
- [ ] Invoice amount matches what you paid
- [ ] Payment was made within last 60 days
- [ ] Internet connection is stable

#### Quick Fix
1. Go to **Dashboard → Fees → Invoices**
2. Find the paid invoice
3. Tap on invoice → Look for **"Download Receipt"** button
4. If visible: Tap to download PDF receipt
5. Save/print receipt for your records

#### Advanced Solutions

**Solution A: Invoice Still Shows "Unpaid"**
- Payment may still be processing (takes 2-24 hours)
- Check bank account: Is money really deducted?
- If deducted: See Issue 4.1 Solution B (Pending payment)
- If not deducted: Payment was declined, see Issue 4.1 Solution A

**Solution B: Receipt Button Not Showing**
- Payment may not have completed
- Wait 24 hours for reconciliation
- Then try downloading again
- If still not showing: Contact school admin

**Solution C: Receipt Shows Wrong Amount**
- Amount should match your payment
- If different: Contact 4SCH support with:
  - Invoice number
  - Amount paid (from bank)
  - Receipt amount shown
  - Bank transaction ID

**Solution D: Need Receipt for Old Payment (>60 days)**
- Go to **Dashboard → Fees → Invoices**
- Look for **"Transaction History"** or **"Paid Invoices"**
- Tap paid invoice from the date you need
- Download receipt
- If invoice not visible: Contact school admin for historical receipt

#### Video Reference: "Receipt Download Guide"

---

### Issue 4.3: Multiple Invoices / Fee Structure Confusion

**Nigerian School Context: Common fee structures include**
- Tuition fees (per term)
- Registration/admission fee (annual or per session)
- Exam fees
- Transportation fees (optional)
- Uniform/books fees
- Activity/project fees
- School development levy

#### Before Contacting Support - Verification Checklist
- [ ] Reviewed all invoices on Fees dashboard
- [ ] Understand your school's fee structure
- [ ] Checked which invoices are "Pending" vs "Paid"
- [ ] Know your session/term/class details

#### Quick Fix
1. Go to **Dashboard → Fees**
2. Review all invoices shown:
   - **Pending** (red) = You must pay this
   - **Paid** (green) = Already paid
   - **Overdue** (orange) = Past deadline
3. **Check fee names** - What do they cover?
4. **Contact teacher or school office** to understand each fee
5. **Pay only invoices marked "Pending"**

#### Advanced Solutions

**Solution A: Unsure Which Fees to Pay**
1. Go to **Fees → Download Fee Structure** (if available)
2. Or ask your class teacher
3. Or call school office
4. School should provide:
   - List of all required fees
   - When each is due
   - Whether fees are compulsory or optional

**Solution B: Fee Amount Seems Wrong**
1. **Check fee structure document** from school
2. **Compare with invoice**:
   - Should match exactly
3. **Common reasons for difference**:
   - Different classes have different fees
   - Discounts applied (siblings, merit, etc.)
   - You might be on a different fee scheme
4. **If still wrong**: Contact school admin with:
   - Your GR Number
   - Invoice amount
   - Amount you expected
   - Fee structure from school

**Solution C: Same Fee Showing Multiple Times**
- Might be for different terms (Term 1, Term 2, Term 3)
- Or different sessions (Session 2024-2025, etc.)
- Check invoice descriptions
- Pay each one separately
- Each term may have its own invoice

#### Video Reference: "Fee Structure Explained"

---

## PART 5: TRANSPORTATION ISSUES

### Issue 5.1: Can't Enroll in Transportation Route

**Error Codes:** E401

#### Before Contacting Support - Verification Checklist
- [ ] Transportation module is enabled at school
- [ ] Enrollment deadline hasn't passed
- [ ] Your class has available routes
- [ ] Internet connection is stable
- [ ] App version is latest

#### Quick Fix
1. Go to **Dashboard → Transportation → Available Routes**
2. Select a route that's available
3. Tap **"Enroll"** button
4. Follow enrollment steps
5. Payment required: Go to Fees to pay transportation invoice
6. After payment confirmed, enrollment is active

#### Advanced Solutions

**Solution A: No Routes Available**
- Your school may not offer transportation
- Or all routes are full
- Contact school transport coordinator:
  - Ask about available routes
  - Ask about waitlist options
  - Provide your location/pickup point preference

**Solution B: "Cannot Enroll" Error**
- Possible reasons:
  - Route is full
  - Enrollment deadline passed
  - You're already enrolled in a route
- Check timetable for enrollment deadline
- Contact transport coordinator

**Solution C: Transportation Fee Not Showing**
- Enroll in route first
- Fee invoice appears within 1 hour
- Go to **Dashboard → Fees**
- Look for "Transportation" invoice
- If not appearing after 1 hour: Contact admin

**Solution D: Already Enrolled But Route Not Showing**
1. Go to **Dashboard → Transportation → My Routes**
2. Should show your enrolled route
3. If blank: Refresh the page
4. If still not showing: Contact transport coordinator

#### Video Reference: "Transportation Enrollment Guide"

---

### Issue 5.2: Can't See Live Route Tracking / GPS Offline

**Error Codes:** E402

#### Before Contacting Support - Verification Checklist
- [ ] You're enrolled in a transportation route
- [ ] Route is active (check timetable)
- [ ] Internet connection is stable
- [ ] GPS/Location permission enabled for app
- [ ] App version is latest
- [ ] Device has location services enabled

#### Quick Fix
1. Go to **Dashboard → Transportation → Live Tracking**
2. You should see:
   - Driver's location (blue dot)
   - Vehicle movement (updates every 30 seconds)
   - Your pickup point
   - Estimated arrival time
3. If not showing:
   - Check internet connection (WiFi or 4G)
   - Refresh the page
   - Restart app

#### Advanced Solutions

**Solution A: GPS Showing "Offline"**
- Driver has no internet/GPS connection
- Common in remote areas or areas with poor signal
- This is normal during travel in areas without 4G
- Vehicle will reconnect when signal returns
- You should still see last known location

**Solution B: Location Permission Not Granted**
1. **Android**: Settings → Apps → 4SCH → Permissions → Location → Allow
2. **iOS**: Settings → Privacy → Location Services → 4SCH → Allow While Using App
3. Restart app after granting permission
4. Try tracking again

**Solution C: Route Not Starting**
- Route may not have started yet
- Check your pickup time in route details
- Driver starts route 30 minutes before first pickup
- Come to pickup point 5-10 minutes early

**Solution D: Vehicle Location Not Updating**
- Poor internet connection
- Move to area with better signal
- Close other apps using internet
- Restart app
- Try tracking again in 5 minutes

#### Video Reference: "Live Route Tracking Guide"

---

### Issue 5.3: Transportation Payment Issues

**Error Codes:** E201, E202 (same as general payment issues)

#### Before Contacting Support - Verification Checklist
- [ ] You're enrolled in transportation route
- [ ] Transportation invoice appeared in Fees
- [ ] Amount matches what school quoted
- [ ] Internet connection is stable during payment
- [ ] Payment method (card/bank transfer) is available

#### Quick Fix
1. Go to **Dashboard → Fees**
2. Find **"Transportation"** invoice
3. Tap **"Pay Now"**
4. Choose payment method:
   - **Flutterwave** (card payment) - See Issue 4.1 solutions
   - **Bank Transfer** - Transfer to school's bank account
5. Complete payment
6. Invoice shows "Paid" after 2-24 hours

#### Advanced Solutions

**Solution A: Transportation Invoice Not Showing**
- May take 1-2 hours after enrollment
- Refresh Fees page
- Close and reopen app
- If still not showing after 4 hours: Contact school admin

**Solution B: Invoice Amount Wrong**
1. Check route details for quoted price
2. Compare with invoice amount
3. If different: Contact transport coordinator
4. Possible reasons:
   - Different routes have different prices
   - Discounts applied (multiple vehicles, siblings, etc.)
   - You might be on different pricing scheme

**Solution C: Payment Declined (See Issue 4.1)**
- Same solutions as general payment issues
- Call your bank if card declined
- Try bank transfer instead

**Solution D: "Route Cancelled" After Payment**
- Rare: School might cancel route
- Check if route still exists in available routes
- If cancelled: School should refund
- Contact transport coordinator immediately

#### Video Reference: "Transportation Payment Guide"

---

## PART 6: GALLERY ISSUES

### Issue 6.1: Can't Upload Photos to Gallery

**Error Codes:** E501

#### Before Contacting Support - Verification Checklist
- [ ] You have permission to upload (ask your teacher)
- [ ] Internet connection is stable (WiFi preferred)
- [ ] Photo file size is less than 10MB
- [ ] Photo format is JPEG, PNG, or supported format
- [ ] Device storage has at least 100MB free
- [ ] App version is latest

#### Quick Fix (Most Common - 3 minutes)
1. Go to **Dashboard → Gallery**
2. Tap **"Upload Photo"** or **"Add Image"** button
3. Select photo from phone:
   - Take new photo, OR
   - Choose from existing photos
4. Wait for upload to complete (3-30 seconds depending on file size)
5. Photo appears in gallery

#### Advanced Solutions

**Solution A: "File Too Large" Error**
- Photo must be less than 10MB
- Example sizes:
  - Modern phone photo: Usually 3-5MB (OK)
  - Old camera photo: Might be 15-20MB (too large)

**What to do:**
1. Use free compression app:
   - Android: "Image Compressor" app
   - iOS: Use built-in Photos app → Edit → Compress
2. Or take new photo with phone camera (usually optimized)
3. Try uploading again

**Solution B: "Unsupported File Format" Error**
- Only these formats allowed: JPEG, PNG, GIF, WebP
- NOT allowed: BMP, TIFF, RAW
- Check file extension (last 3-4 characters):
  - ✅ .jpg or .jpeg = OK
  - ✅ .png = OK
  - ✅ .gif = OK
  - ❌ .bmp = NOT OK
  - ❌ .tiff = NOT OK

**What to do:**
1. Open photo in phone's gallery
2. Export/Save as JPEG or PNG
3. Try uploading again

**Solution C: Upload Stuck / "Pending"**
- Upload may be taking too long (slow internet)
- Don't close app or turn off phone
- Wait up to 5 minutes
- If still pending:
  - Close app completely
  - Check WiFi connection
  - Restart app
  - Try again with smaller file

**Solution D: "Permission Denied" Error**
- You may not have permission to upload
- School may have restricted uploads
- Ask your class teacher for permission
- Teacher can enable uploads in Gallery settings

#### Video Reference: "Gallery Upload Guide"

---

### Issue 6.2: Gallery Images Not Loading / Showing Blank

**Error Codes:** E502

#### Before Contacting Support - Verification Checklist
- [ ] Internet connection is stable
- [ ] App version is latest
- [ ] Device has at least 500MB free storage
- [ ] Not using restricted WiFi (school/public WiFi might block images)

#### Quick Fix
1. Go to **Dashboard → Gallery**
2. **Pull down to refresh** the gallery
3. Wait 5 seconds for images to load
4. If blank:
   - Close app completely
   - Restart app
   - Go back to Gallery
5. Images should appear

#### Advanced Solutions

**Solution A: Images Load Very Slowly**
- Slow internet connection
- Switch to WiFi if on 4G
- Move closer to WiFi router
- Wait up to 30 seconds for all images to load
- Close other apps using internet

**Solution B: Some Images Missing / Deleted**
- Admin or teacher may have deleted images
- Check if there's a "Deleted" or "Archived" folder
- Ask teacher what happened
- If you uploaded it: Ask teacher to restore

**Solution C: Gallery is Empty**
- No photos have been uploaded yet
- Wait for photos to be uploaded by school
- Or upload your own if permission granted
- Check different galleries (class, school, event, etc.)

**Solution D: Images Showing "Failed to Load"**
- Internet disconnected while loading
- Reconnect to WiFi/4G
- Refresh gallery page
- Try again

**Solution E: Cache Issues (Storage)**
1. **Clear app cache** (doesn't delete your photos):
   - Android: Settings → Apps → 4SCH → Storage → Clear Cache
   - iOS: Settings → General → iPhone Storage → 4SCH → Offload App (then reinstall)
2. Restart app
3. Go back to Gallery
4. Images should reload

#### Video Reference: "Gallery Viewing Guide"

---

## PART 7: DASHBOARD & GENERAL ISSUES

### Issue 7.1: Dashboard Not Loading / Blank Screen

**Error Codes:** E601

#### Before Contacting Support - Verification Checklist
- [ ] Internet connection is stable (WiFi or 4G)
- [ ] Device time is correct
- [ ] App version is latest
- [ ] Device storage has at least 500MB free
- [ ] Not behind restricted WiFi (public/school WiFi)
- [ ] No VPN or proxy enabled

#### Quick Fix (Most Common - 2 minutes)
1. **Check internet connection**:
   - WiFi: See WiFi icon connected
   - 4G: See signal bars (3+ bars)
2. **Try pulling down to refresh** dashboard
3. **If still blank**: Close app completely
4. **Restart app**:
   - Android: Swipe from recent apps
   - iOS: Swipe up from bottom
5. **Wait 10 seconds** for app to launch
6. Dashboard should load

#### Advanced Solutions

**Solution A: "No Internet Connection" Message**
1. Check WiFi connection:
   - Android: Settings → WiFi → Turn ON
   - iOS: Settings → WiFi → Turn ON
2. Or check mobile data:
   - Android: Settings → SIM & Internet → Mobile Data ON
   - iOS: Settings → Cellular → Cellular Data ON
3. Open any website to verify internet works
4. Restart app

**Solution B: Dashboard Loads But Data Is Old**
- App cache might be showing old data
- **Pull down to refresh** to get latest data
- If still old:
  1. Close app
  2. Android: Settings → Apps → 4SCH → Storage → Clear Cache
  3. iOS: Offload app (Settings → General → iPhone Storage)
  4. Restart app
  5. Log in again

**Solution C: Dashboard Loads Partially**
- Some items load, some blank
- Indicates slow/unstable internet
- Try on better WiFi connection
- Or close other apps using internet
- Wait 10 seconds for all items to load

**Solution D: Keeps Crashing When Opening**
- App may be corrupted
- **Uninstall and reinstall app**:
  1. Android: Settings → Apps → 4SCH → Uninstall
  2. iOS: Touch and hold app → Remove App → Delete App
  3. Wait 30 seconds
  4. Go to app store
  5. Search "4SCH"
  6. Reinstall
  7. Log in again
- All your data is on servers, not lost

#### Video Reference: "Dashboard Guide"

---

### Issue 7.2: Can't See All Modules (Exams, Fees, Transportation, etc.)

**Error Codes:** Not applicable (permissions issue)

#### Before Contacting Support - Verification Checklist
- [ ] School admin has enabled modules
- [ ] Your role has permission to access module
- [ ] App version is latest
- [ ] Internet connection is stable

#### Quick Fix
1. Go to **Dashboard**
2. You should see menus like:
   - Assignments
   - Exams
   - Fees
   - Transportation
   - Gallery
   - Reports
   - etc.
3. If some are missing: See Solution A

#### Advanced Solutions

**Solution A: Module Completely Missing from Menu**
- Module might be disabled by school
- OR your role doesn't have permission

**What to do:**
1. Ask your **school admin** to:
   - Check if module is enabled: Admin Console → Settings → Modules
   - Check if your role has permission: Settings → Roles & Permissions
2. Example:
   - Exams module disabled = "Exams" won't show
   - Fees module disabled = "Fees" won't show
   - Transportation disabled = "Transportation" won't show

**Solution B: Module Shows But Empty/No Data**
- Module enabled but no data for you
- Examples:
  - "Exams" shows but no exams assigned
  - "Fees" shows but no invoices
  - "Transportation" shows but no routes

**What to do:**
1. This is normal - module is enabled but you have no content
2. Wait for teacher/admin to create content
3. Then module will show your data
4. Example: Wait for teacher to create exam, then it appears

**Solution C: Want Module Enabled**
- Ask school admin to enable module
- Or ask if it's been disabled temporarily
- Some schools disable during off-season (exam vacation, etc.)

#### Video Reference: "Dashboard Modules Guide"

---

## PART 8: NETWORK & CONNECTIVITY ISSUES

### Issue 8.1: App Keeps Disconnecting / "No Internet" Errors

#### Before Contacting Support - Verification Checklist
- [ ] WiFi/Mobile data connection is active
- [ ] Signal strength is adequate (3+ bars for mobile, 3+ WiFi bars)
- [ ] Not using VPN or proxy
- [ ] Not in Airplane mode
- [ ] Not in low power mode (can affect connectivity)
- [ ] Device time is correct

#### Quick Fix
1. **Check WiFi/Mobile data**:
   - Android: Settings → SIM & Internet
   - iOS: Settings → WiFi or Cellular
2. **If WiFi: Reconnect**:
   - Forget network
   - Rejoin with password
3. **If Mobile data**:
   - Turn off, wait 10 seconds
   - Turn back on
4. **Restart phone** (not just app)
5. **Restart app**

#### Advanced Solutions

**Solution A: WiFi Keeps Disconnecting**
1. **Move closer to WiFi router** (minimum 5 meters)
2. **Remove obstacles** between phone and router:
   - Metal objects
   - Walls (especially concrete)
   - Other devices
3. **Restart WiFi router**:
   - Turn off for 30 seconds
   - Turn back on
   - Wait 1 minute for full restart
4. **Reduce WiFi interference**:
   - Turn off other WiFi devices
   - Move away from microwave (interferes with 2.4GHz)
5. **Update router firmware** (if possible)

**Solution B: Mobile Data Keeps Dropping**
1. **Check signal strength**:
   - Android: Settings → SIM & Internet → Signal bars
   - iOS: Look at signal dots (top left)
   - Need at least 3 bars/dots
2. **Move to location with better signal**:
   - Go to window
   - Go outside building
   - Move to higher floor
3. **Disable and re-enable mobile data**:
   - Turn off for 10 seconds
   - Turn back on
4. **Try 4G/LTE instead of 3G** (faster, less disconnection)
5. **Contact your mobile provider** if consistently poor signal

**Solution C: Both WiFi and Mobile Data Unreliable**
1. **Check device time**: Must be correct (NTP sync)
2. **Disable VPN** if enabled
3. **Check airplane mode**: Must be OFF
4. **Restart phone** completely (power off, 30 seconds, power on)
5. **Check router/network**: Try on different WiFi or ask other users if their connection works

**Solution D: Works on WiFi but Not on Mobile Data**
- May be network provider issue
- Or network firewall blocking 4SCH
- **Solutions**:
  - Use WiFi when available
  - Contact mobile provider about firewall
  - Try different mobile provider (if available)
  - Use WiFi hotspot from other device

#### Video Reference: "Internet Connectivity Guide"

---

### Issue 8.2: Slow Internet / App Very Slow

#### Before Contacting Support - Verification Checklist
- [ ] Internet connection is active
- [ ] Other apps/devices not consuming bandwidth
- [ ] Not using VPN
- [ ] Not running background updates

#### Quick Fix
1. **Check internet speed**:
   - Open speedtest.net on browser
   - Test speed (takes 30 seconds)
   - Minimum needed: 0.5 Mbps
   - Recommended: 1+ Mbps
2. **If less than 0.5 Mbps**: Connection too slow
   - See Solution A below
3. **If 0.5+ Mbps**: App should work OK
   - Close other apps
   - Restart 4SCH app

#### Advanced Solutions

**Solution A: Internet Speed Less Than 0.5 Mbps**
- Connection is too slow for app
- **Options**:
  1. Move closer to WiFi router
  2. Switch to different WiFi network
  3. Use mobile data instead (if faster)
  4. Contact internet provider (WiFi issue)
  5. Contact mobile provider (mobile data issue)

**Solution B: Speed OK But App Still Slow**
1. **Close background apps**:
   - Android: Recent apps → Swipe to close others
   - iOS: Swipe up from bottom
2. **Clear app cache**:
   - Android: Settings → Apps → 4SCH → Storage → Clear Cache
   - iOS: Offload app then reinstall
3. **Restart phone**
4. **Disable auto-sync** for other apps:
   - Android: Settings → Accounts → Disable sync for Google Drive, Photos, etc.
   - iOS: Settings → iTunes & App Store → Auto-Downloads OFF

**Solution C: Slow on Mobile Data But Fast on WiFi**
- Mobile data congestion (network too busy)
- Try during off-peak hours:
  - Early morning: 5-8 AM
  - Late evening: 11 PM - 6 AM
  - Avoid peak: 12 PM - 4 PM, 6 PM - 10 PM
- Or use WiFi when available

#### Video Reference: "Speed Troubleshooting Guide"

---

## PART 9: ROLE-SPECIFIC TROUBLESHOOTING

### For Students

**Most Common Issues:**
1. Can't log in → Issue 1.1
2. Online exam problems → Issues 2.1-2.4
3. Offline exam results → Issue 3.1
4. Viewing grades/assignments → Use Dashboard
5. Network issues → Issue 8.1

**Student Workflow:**
```
Login → Dashboard → 
  ├─ Assignments (submit, view grades)
  ├─ Exams (take online exams, view results)
  ├─ Fees (view invoices, pay fees)
  ├─ Transportation (enroll, track vehicle)
  └─ Gallery (view photos)
```

**Key Reminders:**
- Always use current device time (auto-sync ON)
- Start exams 10 minutes early
- Save work frequently
- Don't close app during exams
- Check internet before starting exam

---

### For Parents

**Most Common Issues:**
1. Can't log in → Issue 1.3
2. Payment issues → Issues 4.1-4.3
3. View child's grades → Dashboard → Select child
4. Transportation tracking → Issue 5.2
5. Receive notifications → Check Notification Settings

**Parent Workflow:**
```
Login → Dashboard →
  ├─ Select Child (if multiple)
  ├─ View Assignments & Grades
  ├─ View Exams & Results
  ├─ Fees → Pay invoices
  ├─ Transportation → Enroll, track
  └─ Gallery → View class photos
```

**Payment Tips:**
- Keep bank contact numbers saved:
  - GTBank: 0700-2255822
  - Access Bank: 0700-6000000
- Take screenshots of payment confirmations
- Keep transaction IDs for reference
- Check bank account daily after payment

---

### For Teachers

**Most Common Issues:**
1. Can't log in → Issue 1.3 (use email-based reset)
2. Create/manage exams → See online-exams guide
3. Create assignments → See assignments guide
4. Mark attendance → See attendance guide
5. View reports → See admin-dashboard-analytics guide

**Teacher Workflow:**
```
Login → Dashboard →
  ├─ Assignments (create, grade, provide feedback)
  ├─ Exams (create, add questions, publish results)
  ├─ Attendance (mark daily)
  ├─ Gradebook (enter marks, publish results)
  ├─ Reports (view student performance)
  └─ Messaging (communicate with parents/students)
```

**Key Reminders:**
- Publish results before students see them
- Set exam time windows correctly
- Create enough questions for random assignment
- Mark attendance before deadline window closes

---

### For School Admin

**Most Common Issues:**
1. Can't log in → Issue 1.3 (use email-based reset)
2. Module not showing for users → Issue 7.2
3. User can't access course → Check Roles & Permissions
4. Payment gateway issues → Contact Flutterwave support
5. Data import errors → See data-import-export guide

**Admin Workflow:**
```
Admin Console →
  ├─ Settings (Configure modules, payment gateway, etc.)
  ├─ Users (Create, manage, reset passwords)
  ├─ Academic Setup (Classes, subjects, timetable)
  ├─ Roles & Permissions (Control access)
  ├─ Data Import (Bulk student/staff import)
  ├─ Reports (System analytics)
  └─ Logs (Audit trail)
```

---

## PART 10: BEFORE CONTACTING SUPPORT - MASTER CHECKLIST

### For All Users

**Before you contact support, try these:**

- [ ] **Restart your device** (power off, wait 30 seconds, power on)
- [ ] **Restart the app** (completely close, wait 10 seconds, reopen)
- [ ] **Check internet connection** (WiFi or mobile data active with signal)
- [ ] **Clear app cache** (not lose your data, just clears temporary files)
- [ ] **Update app to latest version** (check app store)
- [ ] **Check error code** against Error Codes Reference Table
- [ ] **Try the Quick Fix** for your specific issue
- [ ] **Use the Diagnostic Flowchart** provided for your issue
- [ ] **Search FAQ** for similar issues already answered

### What Information to Provide to Support

When contacting support, have this information ready:

**Your Information:**
- Your full name
- Your email address
- Your phone number
- Your School Code
- GR Number (if student)
- Device type (iPhone/Android) and model
- App version number

**Issue Details:**
- Error code (if shown)
- Error message (exact text or screenshot)
- When did this start? (date/time)
- What were you trying to do?
- What did you expect to happen?
- What actually happened?
- Screenshots of the error (very helpful)
- Steps to reproduce the issue

**For Payment Issues (Critical):**
- Invoice number
- Amount
- Payment method used
- Bank transaction ID
- Date/time of payment attempt
- Screenshots of:
  - The error message
  - Your bank deduction confirmation
  - 4SCH payment status page

**For Exam Issues:**
- Exam name
- Exam date/time scheduled
- Your device time (screenshot of clock)
- Internet speed (from speedtest.net)
- Steps you took before error
- Screenshots of error message

### Support Contact Information

**Email:** support@4sch.com
**Phone:** +234 (0) 700-933-6000
**Website:** [4sch.com](https://4sch.com)
**Response time:** Usually within 2-4 hours during business hours (Mon-Fri, 9 AM - 5 PM WAT)

### What NOT to Do

- ❌ Don't try payment again if you got "pending" error (will be double-charged)
- ❌ Don't share your password with anyone, including support staff
- ❌ Don't click suspicious links claiming to reset your account
- ❌ Don't try to bypass school security features
- ❌ Don't delete app data while issue is ongoing (may lose evidence)
- ❌ Don't attempt exams on very slow internet (<0.5 Mbps)
- ❌ Don't ignore "Pending" payment status (takes action to resolve)

---

## PART 11: QUICK REFERENCE BY MODULE

**Online Exams:**
- Can't access → Issue 2.1
- Timer problems → Issue 2.2
- Answers not submitting → Issue 2.3
- Questions not loading → Issue 2.4

**Offline Exams:**
- Results not showing → Issue 3.1
- Timetable not showing → Issue 3.2

**Billing/Payments:**
- Flutterwave failed → Issue 4.1
- Missing receipt → Issue 4.2
- Fee confusion → Issue 4.3

**Transportation:**
- Can't enroll → Issue 5.1
- GPS offline → Issue 5.2
- Payment issues → Issue 5.3

**Gallery:**
- Can't upload → Issue 6.1
- Images not loading → Issue 6.2

**Dashboard:**
- Not loading → Issue 7.1
- Modules missing → Issue 7.2

**Network:**
- Disconnecting → Issue 8.1
- Slow speed → Issue 8.2

---

## PART 12: FREQUENTLY ENCOUNTERED ISSUES (26 Common Problems)

### Authentication (5 issues)
1. **Forgot password** → Issue 1.2
2. **Wrong School Code format** → Issue 1.1 Solution B
3. **GR Number not matching** → Issue 1.2 Solution B
4. **Date of birth format wrong (dd/mm vs dd-mm)** → Issue 1.2
5. **Account locked after too many attempts** → Issue 1.1 Solution D

### Online Exams (7 issues)
6. **Can't see exam in list** → Issue 2.1 Solution D
7. **"Exam not yet available"** → Issue 2.1 Solution A
8. **"Exam time expired"** → Issue 2.1 Solution B
9. **Timer shows wrong time** → Issue 2.2 Solution A
10. **"Network timeout" during exam** → Issue 2.3 Solution B
11. **Answer won't submit** → Issue 2.3 Solutions A-C
12. **"Not enough questions" error** → Issue 2.4 Solution A

### Offline Exams (2 issues)
13. **Results not showing after exam** → Issue 3.1 Solution A
14. **Exam timetable completely empty** → Issue 3.2 Solution B

### Payments (5 issues)
15. **"Payment Declined" - card rejected** → Issue 4.1 Solution A
16. **Money deducted but shows "Pending"** → Issue 4.1 Solution B (CRITICAL)
17. **Flutterwave timeout** → Issue 4.1 Solution E
18. **Daily card limit exceeded** → Issue 4.1 Solution D
19. **Can't see receipt after paying** → Issue 4.2 Solution A

### Transportation (3 issues)
20. **GPS showing "Offline"** → Issue 5.2 Solution A
21. **"Cannot Enroll" error** → Issue 5.1 Solution B
22. **Transportation invoice not appearing** → Issue 5.3 Solution A

### Gallery (2 issues)
23. **File too large to upload** → Issue 6.1 Solution A
24. **Images not loading in gallery** → Issue 6.2 Solution A

### General (2 issues)
25. **Dashboard completely blank** → Issue 7.1 Solution A
26. **Module missing from menu** → Issue 7.2 Solution A

---

## ADDITIONAL RESOURCES

**Video Tutorials:** See video tutorials section for step-by-step guides
**FAQ:** Check [FAQ](/support/faq) for quick answers
**Contact Support:** [Contact form](/support/contact-support)

**Need more help?** Contact support with your error code and the information from the checklist above.

