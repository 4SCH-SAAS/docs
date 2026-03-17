# Documentation Backlog for Future Sessions

**Last Updated:** 2026-03-17

## ✅ Recently Completed

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
**Priority System:** 🔴 High | 🟡 Medium | 🟢 Low

---

## ✅ Recently Completed

### Roles & Permissions Deep Dive (Completed: 2026-03-17)
- Comprehensive RBAC guide with all 100+ permissions documented
- Default roles, custom role creation, permission management
- Security best practices and permission matrix
- **File:** `docs/reference/roles-permissions.md`

### Data Import/Export (Completed: 2026-03-17)
- Comprehensive import/export guide for students, staff, teachers, and exam marks
- Template structure, validation, and multi-sheet Excel support
- Data quality guidelines and common error solutions
- Security best practices and permissions
- **File:** `docs/reference/data-import-export.md`

### Teacher-Subject Assignment (Completed: 2026-03-17)
- Complete guide for assigning teachers to class-section-subject combinations
- Understanding SubjectTeacher model and assignment hierarchy
- Multiple assignment methods and workflows
- Common scenarios, troubleshooting, and best practices
- **File:** `docs/guides/teacher-subject-assignment.md`

### Expense Management (Completed: 2026-03-17)
- Complete expense tracking and categorization system
- Expense category management (CRUD operations)
- Session year-based expense recording with analytics
- Salary expense integration from payroll
- **File:** `docs/guides/expense-management.md`

### Session Year & Academic Calendar (Completed: 2026-03-17)
- Complete session planning and management guide
- Term/semester configuration for all systems
- Academic calendar templates and best practices
- Student promotion workflows
- **File:** `docs/guides/session-year-calendar.md`

### Professional Tone Refinements (Completed: 2026-03-17)
- Enhanced Teacher Guide with 7 comprehensive tip boxes
- Enhanced Student Guide with 4 comprehensive tip boxes
- Removed promotional language across all guides
- Platform-agnostic educational best practices
- **Files:** `docs/guides/teachers.md`, `docs/guides/students.md`

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

## 📋 Documentation Guidelines

### Git Workflow & Branching Strategy
**IMPORTANT: Never commit documentation changes directly to the main branch.**

**Required Workflow:**
1. ✅ **Always create a feature branch** before making any documentation changes
   - Branch naming: `docs/feature-name` (e.g., `docs/expense-management-feature`)
2. ✅ **Make all changes on the feature branch**
   - Create new documentation files
   - Modify existing documentation
   - Update sidebars, navigation, and cross-references
3. ✅ **Commit changes with clear, descriptive messages**
   - Use conventional commit format: `docs: Add expense management guide`
   - Include scope when relevant: `docs(guides): Enhance accountant workflows`
4. ✅ **Push branch to remote and create a Pull Request (PR)**
   - Title: Clear description of what was added/changed
   - Description: Summary of changes, files affected, testing done
5. ✅ **Review and merge PR to main**
   - Self-review or request review if working in a team
   - Ensure all checks pass (build, link validation, linting)
   - Merge only after approval

**Example Workflow:**
```bash
# Create feature branch
git checkout -b docs/new-feature-guide

# Make changes, then commit
git add .
git commit -m "docs: Add comprehensive new feature guide"

# Push and create PR
git push -u origin docs/new-feature-guide
# Then create PR via GitHub/GitLab UI
```

❌ **Do NOT:**
- Commit directly to main branch
- Push changes without creating a PR
- Merge without review/validation

### Source of Truth
**The PHP_CODE/ directory contains the actual application logic and is the source of truth for all documentation.**

When creating or updating documentation:
1. ✅ Always examine the PHP_CODE directory first to understand actual implementation
2. ✅ Review models, controllers, repositories, and views for accurate feature details
3. ✅ Verify API endpoints, validation rules, and business logic
4. ✅ Check database migrations for field requirements and relationships
5. ✅ Test features locally when possible to confirm behavior
6. ❌ Do not assume features exist without checking the codebase
7. ❌ Do not document features based solely on UI labels or assumptions

**Key Code Locations:**
- **Models:** `PHP_CODE/app/Models/` - Database structure and relationships
- **Controllers:** `PHP_CODE/app/Http/Controllers/` - Business logic and workflows
- **Repositories:** `PHP_CODE/app/Repositories/` - Data access patterns
- **Views:** `PHP_CODE/resources/views/` - UI structure and form fields
- **Routes:** `PHP_CODE/routes/web.php` and `PHP_CODE/routes/api.php` - Available endpoints
- **Migrations:** `PHP_CODE/database/migrations/` - Database schema

### When Improving Existing Documentation
**If documentation already exists and can be improved, do so.** Don't create duplicate guides - enhance what's already there with:
- More detailed workflows
- Additional examples and use cases
- Troubleshooting sections
- Best practices and tips
- Missing role-based perspectives

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

### 4. Expense Management ✅ COMPLETED
**Status:** ✅ Complete comprehensive guide created  
**Backend:** Expense tracking with categories, session year filtering, analytics  
**Affected Roles:** Admin (full access), Accountant (record/manage), Staff (view only if granted)  
**Completed:**
- ✅ Expense category creation and management (CRUD operations)
- ✅ Expense recording with detailed fields (category, amount, date, reference, description)
- ✅ Session year-based expense tracking
- ✅ Filtering and search capabilities (by category, month, session year)
- ✅ Expense analytics and trend graphs
- ✅ Salary expense handling (auto-generated from payroll)
- ✅ Export functionality and reporting
- ✅ Permissions and access control documentation
- ✅ Best practices for expense recording and financial management
- ✅ Troubleshooting guide and workflow examples

**File:** `docs/guides/expense-management.md` | **Effort:** 3.5 hours | **Value:** Medium-High

---

### 5. Staff/Teacher Subject Assignment ✅ COMPLETED
**Status:** ✅ Complete comprehensive guide created  
**Backend:** SubjectTeacher model linking teachers to class-section-subject combinations  
**Affected Roles:** Admin (assign), Teachers (view assignments)  
**Completed:**
- ✅ Understanding the assignment structure and hierarchy
- ✅ Step-by-step subject assignment to classes (core and elective)
- ✅ Multiple methods for assigning teachers to subjects
- ✅ Verification and reporting of teacher assignments
- ✅ Managing and editing assignments (including mid-year changes)
- ✅ Common scenarios (subject specialists, class teachers, team teaching, electives)
- ✅ Permissions and access control details
- ✅ Best practices for planning and documentation
- ✅ Comprehensive troubleshooting guide
- ✅ Semester-based school considerations

**File:** `docs/guides/teacher-subject-assignment.md` | **Effort:** 2 hours | **Value:** High

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

### 8. Data Import/Export (Beyond Bulk Marks) ✅ COMPLETED
**Status:** ✅ Complete comprehensive guide created  
**Backend:** Uses Laravel Excel with Import/Export classes for Students, Staff, Teachers, and Marks  
**Completed:**
- ✅ Student bulk import with guardian linking and custom form fields
- ✅ Staff/Teacher bulk import workflows
- ✅ Exam marks bulk upload with update capabilities
- ✅ All export options (students, staff, marks, reports)
- ✅ Template structure and multi-sheet explanation
- ✅ Data quality tips and validation rules
- ✅ Common errors with solutions (10+ scenarios)
- ✅ Security and privacy best practices
- ✅ Before/during/after import checklists
- ✅ Permissions documentation

**File:** `docs/reference/data-import-export.md` | **Effort:** 3 hours | **Value:** Medium-High

---

### 9. Role & Permissions Deep Dive ✅ COMPLETED
**Status:** ✅ Complete comprehensive guide created  
**Backend:** Uses Spatie Laravel Permission package with role-based access control  
**Completed:**
- ✅ Complete overview of roles vs permissions
- ✅ All 7 default roles documented (School Admin, Teacher, Guardian, Student, Driver, Helper, custom)
- ✅ Complete permission list (100+ permissions organized by module)
- ✅ Custom role creation workflow with examples
- ✅ Managing roles and permissions (assign, edit, delete)
- ✅ Security best practices (least privilege, MFA, password policies, audits)
- ✅ Permission matrix by role
- ✅ Troubleshooting guide (5+ scenarios)
- ✅ Related feature cross-references

**File:** `docs/reference/roles-permissions.md` | **Effort:** 2.5 hours | **Value:** High

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
