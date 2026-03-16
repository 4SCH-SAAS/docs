# Documentation Backlog for Future Sessions

**Last Updated:** 2026-03-16  
**Priority System:** 🔴 High | 🟡 Medium | 🟢 Low

---

## ✅ Recently Completed

### Homepage Content & Gallery Management (Completed: 2026-03-16)
- Complete homepage sliders/announcements guide
- Comprehensive gallery management documentation
- **Files:** `docs/guides/homepage-content-management.md`, `docs/guides/gallery-management.md`

### Attendance Reports & Analytics (Completed: 2026-03-16)
- Comprehensive guide covering 7 report types
- Role-based access and generation workflows
- Analytics, metrics, and intervention strategies
- **File:** `docs/guides/attendance-reports.md`

### Interactive Workflow Diagrams (Completed: 2026-03-16)
- 9 interactive diagrams with full WCAG 2.1 AA accessibility
- 36 individual workflows across 8 user roles
- **Location:** `static/interactive-diagrams/`

---

## 🔴 High Priority (Missing or Minimal Docs)

### 1. Gallery Management ✅ COMPLETED
**Status:** ✅ Complete comprehensive guide created  
**Backend:** Upload albums, images; students/parents view  
**Affected Roles:** Admin (upload), Students/Parents (view)  
**Completed:**
- ✅ Album creation and organization workflows
- ✅ Photo/video upload guidelines with technical specs
- ✅ Privacy and safety best practices
- ✅ Photography tips for school events
- ✅ User perspective (viewing/downloading)
- ✅ Advanced features and troubleshooting

**File:** `docs/guides/gallery-management.md` | **Effort:** 2.5 hours | **Value:** Medium

---

### 2. Sliders/Announcements (Homepage Content) ✅ COMPLETED
**Status:** ✅ Complete comprehensive guide created  
**Backend:** Admin creates homepage sliders with images/links  
**Affected Roles:** Admin (manage)  
**Completed:**
- ✅ Slider creation and management workflows
- ✅ Image requirements and optimization tips
- ✅ Announcement posting for all user types
- ✅ Content strategy and best practices
- ✅ Sample content and seasonal ideas
- ✅ Troubleshooting and timing guidelines

**File:** `docs/guides/homepage-content-management.md` | **Effort:** 2 hours | **Value:** Medium

---

### 3. Attendance Reports & Analytics ✅ COMPLETED
**Status:** ✅ Complete comprehensive guide created  
**Backend:** Attendance reports by class, student, date range, subject  
**Affected Roles:** Admin, Teachers (class reports), Parents (child attendance)  
**Completed:**
- ✅ 7 types of attendance reports documented with examples
- ✅ Step-by-step generation guides for each role
- ✅ Analytics formulas and benchmark metrics
- ✅ Data interpretation and intervention strategies
- ✅ Role-based access documentation
- ✅ Best practices and troubleshooting

**File:** `docs/guides/attendance-reports.md` | **Effort:** 3 hours | **Value:** High

---

### 4. Expense Management
**Status:** Feature exists in backend (`getExpenses`, `createExpense`, etc.) but ZERO documentation  
**Backend:** Staff submit expenses, admin approves/rejects  
**Affected Roles:** Staff (submit), Admin (approve), Accountant (track)  
**What's Needed:**
- Staff: How to submit expense requests (amount, category, receipts)
- Admin: How to approve/reject expenses
- Accountant: Viewing expense reports
- Best practices: Receipt requirements, approval timing

**Effort:** ~3-4 hours | **Value:** Medium-High

---

### 5. Staff/Teacher Subject Assignment
**Status:** Mentioned but workflow not detailed  
**Backend:** Admin assigns teachers to subjects/classes  
**Affected Roles:** Admin  
**What's Needed:**
- How to assign teachers to classes and subjects
- Managing elective vs compulsory subject teachers
- Bulk assignment options
- Handling teacher changes mid-year

**Effort:** ~2 hours | **Value:** Medium

---

## 🟡 Medium Priority (Partial Docs, Needs Enhancement)

### 6. Admin Dashboard & Analytics
**Status:** Basic overview exists, but no guide on using dashboard widgets/metrics  
**What's Needed:**
- Understanding dashboard KPIs (student count, attendance %, fees collected)
- Filtering by date range/session year
- Export capabilities
- Customizing dashboard view

**Effort:** ~2 hours | **Value:** Medium

---

### 7. Notification Settings & Management
**Status:** We documented what triggers notifications, but not how to configure them  
**Backend:** Notification settings per user, FCM configuration  
**What's Needed:**
- User: How to enable/disable notification types
- Admin: Bulk notification sending, notification templates
- Troubleshooting: Why notifications aren't working

**Effort:** ~2 hours | **Value:** Medium

---

### 8. Data Import/Export (Beyond Bulk Marks)
**Status:** Bulk marks documented; student/staff import only mentioned  
**What's Needed:**
- Student bulk import (CSV format, required fields, validation)
- Staff bulk import
- Export options (students, fees, attendance, results)
- Error handling during import

**Effort:** ~3 hours | **Value:** Medium-High

---

### 9. Role & Permissions Deep Dive
**Status:** Basic overview in school-admin, needs detailed permission matrix  
**What's Needed:**
- Complete permission list with descriptions
- Default permissions per role
- Custom role creation workflow
- Security best practices (least privilege)

**Effort:** ~2-3 hours | **Value:** Medium

---

### 10. Session Year & Academic Calendar Setup
**Status:** Mentioned but not step-by-step  
**What's Needed:**
- Creating new session year
- Setting term/semester dates
- Copying configuration from previous year
- Archiving old session years
- Impact on fees, exams, results

**Effort:** ~2 hours | **Value:** High

---

## 🟢 Low Priority (Nice-to-Have)

### 11. Mobile App vs Web Differences
**Status:** Docs assume same UI across platforms  
**What's Needed:**
- Feature availability differences (if any)
- Navigation differences between mobile/web
- Best practices per platform

**Effort:** ~1-2 hours | **Value:** Low

---

### 12. Integration Guides
**Status:** "Integrations" page exists but is placeholder  
**What's Needed:**
- SMS gateway integration (Twilio, etc.)
- Payment gateway setup (Stripe, Razorpay, Flutterwave, Paystack)
- Google Classroom integration (if exists)
- Email configuration (SMTP)

**Effort:** ~4-5 hours | **Value:** Medium (depends on client needs)

---

### 13. Backup & Data Export for Admins
**Status:** Brief mention, no detailed guide  
**What's Needed:**
- How to export full school data
- Backup frequency recommendations
- Restoring from backup
- GDPR/data privacy compliance tips

**Effort:** ~2 hours | **Value:** Medium

---

### 14. Troubleshooting Guide Enhancement
**Status:** Basic troubleshooting exists, needs more scenarios  
**What's Needed:**
- More common issues (payment failures, login issues, notification problems)
- Step-by-step diagnostic workflows
- "Contact support" escalation criteria

**Effort:** ~2-3 hours | **Value:** Medium

---

### 15. Video Tutorial Scripts (Already Created)
**Status:** Scripts exist in `video-tutorials/scripts/` but not integrated into docs  
**What's Needed:**
- Link video scripts from relevant doc pages
- OR convert key scripts into written step-by-step guides with screenshots
- Update scripts if they're outdated

**Effort:** ~3-4 hours | **Value:** Low-Medium

---

## 📊 Quick Wins (< 1 Hour Each)

### 16. Keyboard Shortcuts / Power User Tips
- Add a "Keyboard Shortcuts" page for web users
- Power user tips for teachers (bulk operations, etc.)

### 17. Glossary of Terms
- Create a glossary page: "What is an elective subject?", "What is a session year?", etc.
- Link from docs when terms are used

### 18. Print-Friendly Versions
- Add "Print this guide" buttons to key pages (assignment workflow, exam setup)
- Optimize CSS for printing

### 19. Search Optimization
- Review search terms in `docs/search-index.json`
- Add keywords to frontmatter for better discoverability

### 20. Cross-Linking Audit
- Audit all docs for missing internal links
- Link related features (e.g., Assignments → Lessons & Topics)

---

## 🎯 Recommended Next Session Focus

**Session 1 (3-4 hours):**
1. **Attendance Reports & Analytics** (High priority, high value)
2. **Expense Management** (Completely missing, medium-high value)
3. **Session Year Setup** (High value, affects multiple workflows)

**Session 2 (2-3 hours):**
1. **Data Import/Export** (Beyond bulk marks)
2. **Gallery Management**
3. **Notification Settings**

**Session 3 (2-3 hours):**
1. **Role & Permissions Deep Dive**
2. **Admin Dashboard Guide**
3. Quick wins: Glossary, keyboard shortcuts

---

## 📝 Notes for Future Documentation Work

### Patterns That Work Well
- **Step-by-step workflows** with numbered lists
- **Best practice tips** in admonitions (:::tip)
- **"What to do with X" sections** (e.g., "What to do with diary notes")
- **Real examples** (e.g., "Late without excuse" for diary titles)
- **Error explanations** (e.g., "Why you can't delete this")

### Avoid
- Vague language ("You can manage things here")
- Assuming UI labels (they may change)
- Over-promising features not in backend
- Walls of text without headings/breaks

### Backend Code Locations (for reference)
- **API Routes:** `PHP_CODE/routes/api.php`
- **Controllers:** `PHP_CODE/app/Http/Controllers/Api/`
- **Models:** `PHP_CODE/app/Models/`
- **Repositories:** `PHP_CODE/app/Repositories/`

### Before Writing Docs
1. Check backend implementation first (don't assume features exist)
2. Verify API endpoints and their parameters
3. Look at existing similar docs for patterns
4. Test locally: `pnpm start` before committing

---

**This backlog represents ~40-50 hours of additional documentation work across all priorities.**

*Maintained by: Documentation Team*
