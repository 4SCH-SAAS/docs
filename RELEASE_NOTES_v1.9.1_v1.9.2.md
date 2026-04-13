# Release Notes: v1.9.1 and v1.9.2

This document provides detailed information about the features and improvements introduced in versions 1.9.1 and 1.9.2 of the 4SCH School Management System.

---

## Version 1.9.2 - Released April 13, 2026

### 🎉 New Features

#### Syllabus Pattern Management
Organize and structure curriculum content with pattern-based syllabus organization for better academic planning.

**Key Benefits:**
- Standardize curriculum structure across classes
- Link lessons and topics to specific syllabus patterns
- Track syllabus completion progress
- Generate syllabus-based reports
- Ensure consistency in curriculum delivery

**How to Use:**
1. Navigate to **Academics → Syllabus**
2. Click **Add Syllabus**
3. Select class and subject
4. Enter title (auto-populated as "Class - Subject")
5. Set status (Active/Inactive)

---

#### Transportation Attendance Reporting
Comprehensive student and teacher transportation attendance reports for route tracking and compliance.

**Features:**
- Daily pickup/drop-off attendance tracking
- Route-wise attendance summaries
- Late pickup and absence monitoring
- Monthly transportation usage patterns
- Driver/helper attendance logs
- Trip completion status tracking

**Access:**
- Student Reports: **Reports → Student Reports → Transportation Tab**
- Teacher/Driver Reports: **Reports → Teacher Reports → Transportation Tab**

---

### 🚀 Major Improvements

#### Session Year Data Filtering
Enhanced panel filtering by session year without changing the default active session.

**Benefits:**
- View historical data by selecting different session years
- Compare performance across academic years
- Generate reports without changing your active session
- Useful for trend analysis and year-over-year comparisons

---

#### Offline Exam Marks: Draft and Publish Workflow
Added draft and publish options for offline exam marks entry.

**Workflow:**
1. Go to **Exams → Upload Marks**
2. Select class, exam, and subject
3. Choose status:
   - **Draft**: Save marks without making them visible
   - **Published**: Make marks visible to students and parents
4. Enter marks and submit

**Benefits:**
- Review and verify marks before publication
- Collaborative marking with multiple teachers
- Correct errors before students see results
- Control timing of results release
- Maintain academic integrity

---

#### Security Enhancements
Enhanced data protection during sensitive operations.

**New Security Features:**
- Screen recording protection for online exams
- Screenshot protection for online exams
- Screenshot protection for fee payment screens
- Enhanced data security during sensitive operations

**Purpose:**
- Maintain exam integrity
- Protect student financial data
- Prevent unauthorized data capture
- Ensure compliance with data protection standards

---

#### UI/UX Enhancements
Multiple interface improvements for better user experience.

**Enhanced Interfaces:**
- **Class Subjects**: Better detail view and formatting
- **Student Reports**: Clearer data presentation
- **Teacher Reports**: Improved navigation
- **Route Vehicle Reports**: Better filtering options
- **Assignment Submission Modal**: Enhanced user experience
- **Promote Students**: Streamlined interface for easier bulk operations

---

#### Demo School Access Restrictions
Strengthened security controls and access limitations for demonstration environments.

**Purpose:**
- Protect demonstration data
- Prevent unauthorized modifications
- Maintain demo environment integrity
- Enable safe testing and training

---

### 🔧 Other Improvements
- General performance optimizations
- Backend stability enhancements
- Bug fixes and code improvements

---

## Version 1.9.1 - Released March 12, 2026

### 🎉 New Features

#### Staff Leave Management
School Administrators can now manually create and manage leave entries for staff members.

**Capabilities:**
- Create leave requests on behalf of staff
- Full leave tracking and management
- Integration with staff attendance system
- View leave history and balances

**Use Cases:**
- Recording retroactive leave entries
- Managing leave for staff who cannot access the system
- Administrative leave assignments
- Bulk leave management during holidays or events

**How to Use:**
1. Go to **Staff → Leave Management**
2. Click **Add Leave**
3. Fill in details:
   - Staff Member
   - Leave Type (Sick, Casual, Earned, etc.)
   - From Date and To Date
   - Reason
   - Status (Approved, Pending, Rejected)
4. Click **Submit**

---

#### School Custom Fields in General Settings
Restored and relocated missing custom fields functionality to General Settings.

**Features:**
- Custom fields now available in "General Settings" section
- Enhanced data capturing capabilities
- Better organization and accessibility
- Support for multiple field types

**Use Cases:**
- School registration number
- Affiliation details
- Custom school identifiers
- Regional or district-specific information
- Accreditation data

**How to Configure:**
1. Go to **Settings → General Settings**
2. Scroll to **Custom Fields** section
3. Click **Add Custom Field**
4. Configure field name, type, and visibility
5. Save

---

### 🔧 Technical Improvements

#### Reverb WebSocket Configuration
Added real-time communication capabilities.

**Technical Details:**
- Integrated Reverb WebSocket server
- Updated environment configuration with broadcasting settings
- Enhanced real-time features support
- Improved chat and notification systems

**Environment Variables Added:**
- `BROADCAST_DRIVER=reverb`
- `REVERB_APP_ID`, `REVERB_APP_KEY`, `REVERB_APP_SECRET`
- `REVERB_HOST`, `REVERB_PORT`, `REVERB_SCHEME`
- Vite configuration for WebSocket integration

---

## Documentation Updates

All documentation has been updated to reflect these new features:

### Updated Documentation Files:
- ✅ **CHANGELOG.md** - Complete version history
- ✅ **docs/guides/school-admin.md** - School Administrator Guide
  - Added Staff Leave Management section
  - Added Custom Fields in General Settings section
  - Added Syllabus Pattern Management section
  - Added Transportation Attendance Reports section
  - Added Offline Exam Marks Draft/Publish workflow
  - Added Session Year Filtering information
  - Added Security Enhancements notes
  - Added UI/UX improvements notes

### Documentation Sections Added:
1. **Staff Leave Management** (`#staff-leave-management`)
2. **Custom Fields in General Settings** (`#general-settings`)
3. **Syllabus Pattern Management** (under Setting Up Subjects)
4. **Transportation Attendance Reports** (under Transportation Management)
5. **Offline Exam Marks with Draft and Publish** (under Managing Exams)
6. **Session Year Filtering** (under Reports)

---

## Migration Notes

### For School Administrators

#### v1.9.2 Updates:
1. **No action required** - All features are available immediately
2. **Optional**: Configure syllabus patterns for your curriculum
3. **Review**: New transportation attendance reports for compliance
4. **Note**: Online exams now have screenshot protection enabled automatically

#### v1.9.1 Updates:
1. **Review**: Custom fields in General Settings - configure as needed
2. **Training**: Train HR staff on new staff leave management features
3. **Check**: WebSocket configuration if using real-time features

---

## Support & Training

### Getting Help
- **Documentation**: Visit the updated [School Administrator Guide](/docs/guides/school-admin)
- **Support**: Contact support team for assistance
- **Training**: Schedule training sessions for new features

### Related Documentation
- [School Admin Guide](/docs/guides/school-admin)
- [Teachers Guide](/docs/guides/teachers)
- [Reports & Analytics](/docs/guides/admin-dashboard-analytics)
- [Transportation Management](/docs/guides/school-admin#transportation-management)
- [Online Exams Guide](/docs/guides/online-exams)
- [Offline Exams Guide](/docs/guides/offline-exams)

---

## Feedback

We value your feedback! If you have suggestions or encounter any issues with these new features, please contact our support team.

**Version**: 1.9.2  
**Release Date**: April 13, 2026  
**Previous Version**: 1.9.1 (March 12, 2026)
