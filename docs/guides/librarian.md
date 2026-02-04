---
id: librarian-guide
title: Librarian Guide
slug: /guides/librarian
sidebar_position: 7
---

import Link from '@docusaurus/Link';
import TOCInline from '@theme/TOCInline';

# Librarian Guide

Welcome! This guide is for school librarians managing the library through 4SCH. Learn how to manage books, track checkouts, handle returns, and maintain the library system.

<TOCInline toc={[]} minHeadingLevel={2} maxHeadingLevel={3} />

---

## Your Library Dashboard

When you log into 4SCH as a librarian, your dashboard shows library-specific information.

### What You'll See

**Library Statistics:**
- **Total Books** — Books in your collection
- **Books Checked Out** — Currently with students/staff
- **Books Available** — On shelves and available
- **Overdue Books** — Past return date
- **Popular Books** — Most borrowed this month

**Quick Actions:**
- Check out book
- Check in book (return)
- Add new book
- Search catalog
- View overdue list
- Generate reports

**Recent Activity:**
- Latest checkouts
- Recent returns
- New books added
- Reservations pending

:::tip
Check your dashboard every morning to see overdue books and pending reservations!
:::

---

## Managing Your Book Collection

### Adding New Books

When your library receives new books:

**Step 1: Prepare Book Information**
Gather:
- Book title
- Author(s)
- ISBN (from back cover or barcode)
- Publisher
- Publication year
- Category/Subject
- Number of copies

**Step 2: Add to System**
1. Go to **Library** → **Books** → **Add Book**
2. Fill in:
   - **Title:** Full book title
   - **Author:** Author's name (Last Name, First Name)
   - **ISBN:** 13-digit number
   - **Publisher:** Publishing company
   - **Publication Year:** e.g., 2024
   - **Category:** Fiction, Non-Fiction, Reference, Textbook, etc.
   - **Subject:** Mathematics, Science, Literature, History, etc.
   - **Language:** English, Yoruba, Hausa, Igbo, French, etc.
   - **Number of Copies:** How many copies you have
   - **Location:** Shelf number or section
3. **Optional Information:**
   - Book description/summary
   - Grade level (Primary, JSS, SSS)
   - Cover image (upload photo)
4. Click **Save**

**System Actions:**
- Assigns unique accession number to each copy
- Makes book searchable in catalog
- Updates total book count
- Makes available for checkout

### Cataloging Multiple Copies

If you have multiple copies of the same book:

**Method 1: During Initial Entry**
- Enter "Number of Copies: 5"
- System creates 5 identical records with different accession numbers

**Method 2: Add Copies Later**
1. Find the book
2. Click **Add Copy**
3. System assigns new accession number
4. Update location if different

### Organizing Books by Category

**Common Library Categories:**
- **Fiction** — Novels, short stories
- **Non-Fiction** — Factual books
- **Reference** — Dictionaries, encyclopedias (usually non-circulating)
- **Textbooks** — School curriculum books
- **Biographies** — Life stories
- **Religious** — CRS, IRS texts
- **Science** — Biology, Chemistry, Physics
- **Mathematics** — Math textbooks and workbooks
- **Languages** — English, French, local languages
- **Children's Books** — For younger students

**Assign Locations:**
- Use shelf numbers: "Shelf A1", "Shelf B3"
- Or use sections: "Fiction Section", "Science Corner"
- Helps students find books easily

### Editing Book Information

**When to Edit:**
- Correct spelling errors
- Update damaged status
- Change location
- Add missing information

**How to Edit:**
1. Go to **Library** → **Books**
2. Search for the book
3. Click **Edit**
4. Make changes
5. Click **Save**

### Removing Books (Weeding)

When books are damaged beyond repair, lost, or outdated:

**Step 1: Verify**
- Confirm book condition
- Check if it's been looked for (if lost)
- Get principal's approval for removal

**Step 2: Remove from System**
1. Find the book
2. Click **Actions** → **Remove from Collection**
3. Select reason:
   - Damaged/Worn Out
   - Lost
   - Outdated
   - Duplicate
4. Add notes
5. Click **Confirm Removal**

**System Actions:**
- Book marked as removed
- No longer appears in available books
- Record kept for audit
- Updates book count

---

## Checking Out Books

### Student Checkout

When a student wants to borrow a book:

**Step 1: Verify Student Can Borrow**
Check:
- Student has no overdue books
- Student hasn't reached borrowing limit
- Book is available (not already checked out)

**Step 2: Process Checkout**
1. Go to **Library** → **Check Out**
2. Scan or enter **Student's ID** (admission number or barcode)
3. Scan or enter **Book's Accession Number** (or search by title)
4. System shows:
   - Book title and author
   - Student name and class
   - Due date (automatically calculated)
5. Verify information is correct
6. Click **Check Out**

**System Actions:**
- Records checkout date and time
- Sets due date (e.g., 2 weeks from today)
- Sends notification to student (if enabled)
- Updates book status to "Checked Out"
- Reduces available copies count

**Due Date Calculation:**
- Usually 2 weeks for regular books
- Longer for research projects (3-4 weeks)
- Shorter for high-demand books (1 week)
- Reference books may be non-circulating (library use only)

### Staff Checkout

When teachers or staff borrow books:

**Process is similar:**
1. Go to **Library** → **Check Out**
2. Select **Staff** instead of Student
3. Search for staff member
4. Scan or search for book
5. Due date may be longer for staff (e.g., 1 month)
6. Click **Check Out**

### Multiple Book Checkout

If a student is borrowing multiple books at once:

1. Enter student information once
2. Scan each book
3. All books appear in checkout list
4. Confirm all at once
5. All have the same due date

### Borrowing Limits

Set limits to ensure books are shared fairly:

**Common Limits:**
- **Primary students:** 2 books at a time
- **JSS students:** 3 books at a time
- **SSS students:** 4 books at a time
- **Staff:** 5-6 books at a time

**Configure in:**
**Library Settings** → **Borrowing Rules**

---

## Checking In Books (Returns)

### Processing Returns

When a student returns a book:

**Step 1: Inspect Book**
- Check for damage (torn pages, missing cover, writing)
- Check all pages are present
- Note any issues

**Step 2: Process Return**
1. Go to **Library** → **Check In**
2. Scan or enter **Book's Accession Number**
3. System shows:
   - Borrower's name
   - Checkout date
   - Due date
   - Days overdue (if applicable)
4. If book is damaged, select **Report Damage**
5. Click **Check In**

**System Actions:**
- Records return date and time
- Updates book status to "Available"
- Increases available copies count
- Clears book from student's record
- Calculates fine if overdue

### Handling Late Returns

If book is returned after due date:

**Step 1: System Calculates Fine**
- Days overdue × Daily fine rate
- Example: 5 days × ₦50 = ₦250

**Step 2: Inform Student**
- Show student the fine amount
- Explain the calculation
- Direct to accounts office for payment (if required)

**Step 3: Options**
- **Collect fine immediately** (if you handle fines)
- **Record fine** and student pays at accounts office
- **Waive fine** (requires authorization, e.g., first offense, valid excuse)

**Step 4: Complete Return**
- Even if fine is unpaid, check in the book
- Mark fine as pending
- Block student from future checkouts until fine is paid

### Handling Damaged Returns

If book is returned damaged:

**Assess Damage:**
- **Minor:** Slight wear, small tears → No charge or small fee
- **Moderate:** Multiple tears, water damage → Partial replacement cost
- **Severe:** Unusable, missing pages → Full replacement cost

**Process:**
1. Show damage to student
2. Explain replacement cost
3. Record damage in system
4. Generate invoice for replacement cost
5. Student pays at accounts office
6. Mark book as damaged in system
7. Remove from circulation if unusable

### Lost Books

If student says they lost the book:

**Step 1: Verify**
- Confirm student has looked thoroughly
- Give grace period (e.g., 1 week) to find it

**Step 2: If Not Found**
1. Charge replacement cost (book price + processing fee)
2. Generate invoice
3. Student pays at accounts office
4. Mark book as "Lost" in system
5. Remove from circulation

**Step 3: If Book is Later Found**
- Check in the book
- If still in good condition, return to shelf
- Refund student (minus any overdue fines)

---

## Managing Reservations

Students can reserve books that are currently checked out.

### Processing Reservations

**When Student Wants to Reserve:**
1. Go to **Library** → **Reservations** → **Create Reservation**
2. Search for the student
3. Search for the book
4. System shows:
   - When book is due back
   - If others have reserved it (queue position)
5. Click **Reserve**
6. Tell student: "The book is due back on [date]. We'll notify you when it's available."

**When Reserved Book is Returned:**
1. System automatically notifies first person in queue
2. Hold book aside at front desk
3. Mark as "Reserved for [Student Name]"
4. Give student 2-3 days to collect
5. If not collected, offer to next person in queue or return to shelf

---

## Library Rules & Policies

### Setting Library Policies

Work with school admin to establish:

**Borrowing Period:**
- Regular books: 2 weeks
- Reference books: Non-circulating (library use only)
- Overnight checkout: For special circumstances

**Fines:**
- Overdue fine: ₦20-50 per day
- Lost book: Replacement cost + ₦500 processing
- Damaged book: Varies by severity

**Borrowing Limits:**
- Based on grade level (2-4 books)

**Restricted Materials:**
- Reference books stay in library
- Rare/valuable books require special permission

### Enforcing Rules

**Block Students Who:**
- Have overdue books (until returned)
- Have unpaid fines above threshold (e.g., ₦500)
- Have lost books (until paid for)

**System automatically blocks** checkouts for these students.

---

## Library Reports

### Daily Reports

**Checkouts Today:**
- How many books checked out
- Which books are popular
- Which classes used library most

**Returns Today:**
- Books returned
- Overdue returns
- Fines collected

### Weekly Reports

**Library Activity Summary:**
- Total checkouts
- Total returns
- Current checkouts (unreturned)
- Overdue books list

### Monthly Reports

**Comprehensive Library Report:**
1. **Usage Statistics:**
   - Total visits (if tracked)
   - Books borrowed
   - Most popular categories
   - Usage by class

2. **Collection Statistics:**
   - Total books in collection
   - New acquisitions
   - Books removed
   - Average books per student

3. **Financial:**
   - Fines collected
   - Lost book payments
   - Damage fees

4. **Overdue Analysis:**
   - Current overdue count
   - Chronic offenders
   - Recovery rate

### Popular Books Report

**Identifies:**
- Most borrowed books this month
- Books with longest wait lists
- Categories in high demand

**Use this to:**
- Purchase more copies of popular books
- Suggest books to students
- Plan library displays

---

## Inventory Management

### Conducting Inventory (Stock Take)

Do this annually or termly to verify your collection.

**Preparation:**
1. Pick a day when library is closed
2. Get helpers (student library prefects, volunteers)
3. Print complete book list from system

**Process:**
1. Go through each shelf
2. Scan or record each book's accession number
3. Check off on printed list
4. Note any missing books
5. Note any unlisted books found

**In System:**
1. Go to **Library** → **Inventory**
2. Click **Start Inventory**
3. Scan all books present
4. Click **Complete Inventory**
5. System generates:
   - Books verified (on shelf)
   - Books missing (expected but not found)
   - Books found (in library but not checked out)

**Follow-Up:**
- Search for missing books
- Check if they're actually checked out (system error)
- Mark genuinely missing as "Lost"

---

## Library Displays & Promotions

### Creating Displays

Encourage reading with themed displays:

**Monthly Themes:**
- "New Arrivals" — Show newest books
- "African Authors" — Highlight Nigerian/African writers
- "Science Corner" — Science books during science week
- "Book of the Month" — Feature one recommended book

**Seasonal:**
- "Holiday Reading" — Before long break
- "Exam Preparation" — Past questions, study guides

### Book Recommendations

**Track in 4SCH:**
- Create "Recommended" tag
- Add to book record
- Students can filter by recommendations

**Display:**
- Physical display in library
- Announce in morning assembly
- Post on school notice board
- Share via 4SCH messaging

---

## Working with Students

### Library Orientation

At start of term, orient new students:

**Tour the Library:**
- Show different sections
- Explain how books are organized
- Demonstrate how to search catalog

**Teach Library Rules:**
- Borrowing limits
- Due dates
- Fines
- Behavior expectations (quiet, no eating)

**Demonstrate 4SCH:**
- How to search for books online
- How to see their checked-out books
- How to reserve books

### Library Prefects

Select responsible students as library prefects:

**Their Roles:**
- Help with shelving books
- Assist students in finding books
- Report damaged books
- Help maintain order
- Assist during inventory

**Train Them:**
- How to shelve books correctly
- How to help students search
- Library rules and enforcement

---

## Best Practices for Librarians

### Daily Routine

**Opening (Start of Day):**
1. ✅ Check dashboard for overdue books
2. ✅ Shelve returned books from previous day
3. ✅ Check reservations and set aside books
4. ✅ Prepare for classes scheduled for library period

**During Day:**
- ✅ Process checkouts and returns
- ✅ Help students find books
- ✅ Answer questions
- ✅ Maintain quiet environment
- ✅ Record any issues (damage, missing books)

**Closing (End of Day):**
1. ✅ Process final returns
2. ✅ Do quick shelf check
3. ✅ Generate daily report
4. ✅ Secure library
5. ✅ Update any pending tasks

### Organization Tips

**Keep Shelves Organized:**
- Books in correct category/section
- Spine labels visible
- Books upright, not leaning
- Use bookends

**Label Clearly:**
- Section signs visible
- Shelf numbers clear
- Color coding by category (optional)

**Regular Maintenance:**
- Weekly shelf organization
- Monthly deep cleaning
- Termly inventory spot checks

### Building a Reading Culture

**Encourage Reading:**
- Book clubs
- Reading competitions
- "I recommend" student reviews
- Reading challenges (e.g., "Read 10 books this term")

**Collaborate with Teachers:**
- Provide books for class projects
- Create subject-specific reading lists
- Support research assignments
- Schedule class library periods

---

## Troubleshooting Common Issues

### "Student says they returned book but it's still showing as checked out"

**Steps:**
1. Search shelves where book should be
2. Check recent returns log
3. Check if book was checked in under wrong student
4. If found, check it in properly and apologize
5. If not found, investigate further

### "Book won't check out - system says it's already checked out but it's on the shelf"

**Cause:**
Book was returned but not checked in properly.

**Solution:**
1. Scan book to see who has it checked out
2. Check that person's record
3. Process return
4. Now book can be checked out again

### "System says student has overdue book but they insist they returned it"

**Steps:**
1. Check returns log for that date
2. Search shelf for the book
3. If found on shelf, check it in and waive fine (system error)
4. If not found, explain it's not been returned according to records
5. Give student time to search again

---

## Using 4SCH Library Features

### Search Catalog

**Students and staff can search:**
1. Go to **Library** → **Catalog** or **Search Books**
2. Search by:
   - Title
   - Author
   - ISBN
   - Subject/Category
3. View results showing:
   - Book details
   - Availability status
   - Location
   - Due date (if checked out)

### View Personal Library Account

**Students can:**
- See books they currently have checked out
- See due dates
- See overdue fines
- See reservation queue position
- View borrowing history (if enabled)

### Mobile Access

**If 4SCH has mobile app:**
- Students can search catalog from phone
- Check their borrowing status
- Get notifications when reserved books are available
- Renew books online (if enabled)

---

## Integration with School Activities

### Supporting Academic Programs

**Research Projects:**
- Set aside relevant books
- Create special checkout period (longer)
- Help students find sources

**Reading Programs:**
- Track participation in system
- Generate reading statistics
- Award certificates for top readers

**Book Week/Reading Month:**
- Special displays
- Author visits
- Book fair
- Reading competitions

### Library Statistics for Admin

Provide admin with:
- Usage rates (books per student)
- Popular subjects
- Budget recommendations for new books
- Collection gaps

---

## Getting Help

**Need Training?**
- Ask admin for 4SCH library module training
- Request access to help videos
- Connect with other school librarians using 4SCH

**Technical Issues?**
- Check this documentation
- Contact school admin
- Admin can contact 4SCH support

**Book Organization Help?**
- Consult Dewey Decimal System
- Research library best practices
- Join librarian professional groups

---

## Related Guides

- <Link to="/guides/non-teaching-staff">Non-Teaching Staff Guide</Link> — General support tasks
- <Link to="/guides/admin">Administrator Guide</Link> — System management
- <Link to="/guides/students">Student Guide</Link> — How students use the library
- <Link to="/support/faq">Frequently Asked Questions</Link>

Thank you for fostering a love of reading and supporting student success! 📚✨
