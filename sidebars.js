/** @type {import('@docusaurus/plugin-content-docs').SidebarsConfig} */
const sidebars = {
  docs: [
    {
      type: 'category',
      label: 'Introduction',
      collapsed: false,
      items: [
        'intro/overview',
        'intro/user-roles',
        'intro/quick-start',
        'intro/getting-started',
      ],
    },
    {
      type: 'category',
      label: 'User Guides',
      collapsed: false,
      items: [
        {
          type: 'category',
          label: '🎓 School Leadership',
          collapsed: false,
          items: [
            'guides/school-admin',
            {
              type: 'link',
              label: '💳 Subscription & Account Management',
              href: '/guides/school-admin#subscription--account-management',
            },
            {
              type: 'link',
              label: '💰 Fee Management',
              href: '/guides/school-admin#fee-management',
            },
            {
              type: 'link',
              label: '👥 User Management',
              href: '/guides/school-admin#user-management',
            },
            {
              type: 'link',
              label: '📊 Reports & Analytics',
              href: '/guides/school-admin#reports-analytics',
            },
            {
              type: 'link',
              label: '⚙️ System Settings',
              href: '/guides/school-admin#system-settings',
            },
            {
              type: 'link',
              label: '🚌 Transportation Management',
              href: '/guides/school-admin#transportation-management',
            },
            {
              type: 'link',
              label: '📢 Communication & Announcements',
              href: '/guides/school-admin#communication--announcements',
            },
          ],
        },
        {
          type: 'category',
          label: '👥 Teaching Staff',
          collapsed: false,
          items: [
            'guides/teacher-guide',
            {
              type: 'link',
              label: '✅ Marking Attendance',
              href: '/guides/teacher-guide#marking-attendance',
            },
            {
              type: 'link',
              label: '📝 Managing Assignments',
              href: '/guides/teacher-guide#managing-assignments',
            },
            {
              type: 'link',
              label: '📊 Entering Grades',
              href: '/guides/teacher-guide#entering-grades',
            },
            {
              type: 'link',
              label: '💬 Communicating with Parents',
              href: '/guides/teacher-guide#communicating-with-parents',
            },
            {
              type: 'link',
              label: '📊 Viewing Class Reports',
              href: '/guides/teacher-guide#class-reports',
            },
            {
              type: 'link',
              label: '📅 Leave Management',
              href: '/guides/teacher-guide#leave-management',
            },
          ],
        },
        {
          type: 'category',
          label: '👨‍👩‍👧‍👦 Parents & Students',
          collapsed: false,
          items: [
            'guides/parent-guide',
            {
              type: 'link',
              label: '💳 Paying School Fees',
              href: '/guides/parent-guide#paying-school-fees',
            },
            {
              type: 'link',
              label: '📊 Viewing Grades & Results',
              href: '/guides/parent-guide#viewing-grades',
            },
            {
              type: 'link',
              label: '👀 Checking Attendance',
              href: '/guides/parent-guide#checking-attendance',
            },
            {
              type: 'link',
              label: '💬 Messaging Teachers',
              href: '/guides/parent-guide#messaging-teachers',
            },
            {
              type: 'link',
              label: '📓 Student Diary',
              href: '/guides/parent-guide#student-diary',
            },
            'guides/student-guide',
            {
              type: 'link',
              label: '📝 Assignments & Homework',
              href: '/guides/student-guide#assignments',
            },
            {
              type: 'link',
              label: '📊 Checking Your Grades',
              href: '/guides/student-guide#checking-your-grades',
            },
            {
              type: 'link',
              label: '📅 Viewing Your Timetable',
              href: '/guides/student-guide#viewing-your-timetable',
            },
            {
              type: 'link',
              label: '📚 Study Materials & Resources',
              href: '/guides/student-guide#lessons-study-materials',
            },
            {
              type: 'link',
              label: '📊 Your Attendance Record',
              href: '/guides/student-guide#attendance',
            },
          ],
        },
        {
          type: 'category',
          label: '💼 Support Staff',
          collapsed: false,
          items: [
            'guides/non-teaching-staff-guide',
            'guides/super-admin-guide',
            {
              type: 'link',
              label: '🏗️ Provisioning a New School',
              href: '/guides/super-admin-guide#provisioning-a-new-school',
            },
            {
              type: 'link',
              label: '📨 Reviewing School Inquiries',
              href: '/guides/super-admin-guide#reviewing-school-inquiries',
            },
            {
              type: 'link',
              label: '📦 Managing Subscription Packages',
              href: '/guides/super-admin-guide#managing-subscription-packages',
            },
            {
              type: 'link',
              label: '🌐 Global System Settings',
              href: '/guides/super-admin-guide#global-system-settings',
            },
            'guides/accountant-guide',
            {
              type: 'link',
              label: '💰 Fee Structure Management',
              href: '/guides/accountant-guide#fee-structure-management',
            },
            {
              type: 'link',
              label: '💳 Payment Processing',
              href: '/guides/accountant-guide#payment-processing',
            },
            {
              type: 'link',
              label: '📊 Financial Reports',
              href: '/guides/accountant-guide#financial-reports',
            },
            {
              type: 'link',
              label: '🧾 Invoice Management',
              href: '/guides/accountant-guide#invoice-management',
            },
            {
              type: 'link',
              label: '💵 Managing Outstanding Fees',
              href: '/guides/accountant-guide#managing-outstanding-fees',
            },
            'guides/driver-guide',
            {
              type: 'link',
              label: '🚌 Managing Daily Trips',
              href: '/guides/driver-guide#managing-daily-trips',
            },
            {
              type: 'link',
              label: '👥 Student Management',
              href: '/guides/driver-guide#student-management',
            },
            {
              type: 'link',
              label: '✅ Attendance & Schedules',
              href: '/guides/driver-guide#attendance--schedules',
            },
            {
              type: 'link',
              label: '📊 Trip Reports & History',
              href: '/guides/driver-guide#trip-reports--history',
            },
          ],
        },
      ],
    },
    {
      type: 'category',
      label: 'Feature Guides',
      collapsed: false,
      items: [
        {
          type: 'category',
          label: '⚙️ Administration & Management',
          collapsed: false,
          items: [
            'guides/admin-dashboard-analytics',
            'guides/session-year-calendar-setup',
            'guides/holidays',
            {
              type: 'link',
              label: '➕ Adding a Holiday',
              href: '/guides/holidays#adding-a-holiday',
            },
            {
              type: 'link',
              label: '🔁 How Holidays Affect Other Modules',
              href: '/guides/holidays#how-holidays-interact-with-other-modules',
            },
            'guides/teacher-subject-assignment',
            'guides/notification-settings-management',
            'guides/push-notifications',
            'guides/subscription-expiry-retention-policy',
            'guides/subscription-billing',
          ],
        },
        {
          type: 'category',
          label: '💰 Financial Management',
          collapsed: false,
          items: [
            'guides/expense-management',
            'guides/payroll',
            {
              type: 'link',
              label: '🛠️ Payroll Settings (Components)',
              href: '/guides/payroll#one-time-setup-salary-components',
            },
            {
              type: 'link',
              label: '🧾 Generating Monthly Payroll',
              href: '/guides/payroll#monthly-generating-payroll',
            },
            {
              type: 'link',
              label: '📄 Payslips',
              href: '/guides/payroll#payslips',
            },
          ],
        },
        {
          type: 'category',
          label: '👥 Staff & HR',
          collapsed: false,
          items: [
            'guides/staff-attendance-and-leave',
            {
              type: 'link',
              label: '📅 Daily Staff Attendance',
              href: '/guides/staff-attendance-and-leave#daily-staff-attendance',
            },
            {
              type: 'link',
              label: '🏖️ Leave Types',
              href: '/guides/staff-attendance-and-leave#setting-up-leave-types',
            },
            {
              type: 'link',
              label: '✅ Approving Leave',
              href: '/guides/staff-attendance-and-leave#approving-or-rejecting-leave',
            },
            'guides/certificates',
            {
              type: 'link',
              label: '🎨 Building a Template',
              href: '/guides/certificates#building-a-certificate-template',
            },
            {
              type: 'link',
              label: '🏆 Issuing Student Certificates',
              href: '/guides/certificates#issuing-student-certificates',
            },
            {
              type: 'link',
              label: '👔 Issuing Staff Certificates',
              href: '/guides/certificates#issuing-staff-certificates',
            },
          ],
        },
        {
          type: 'category',
          label: '📚 Teaching & Learning',
          collapsed: false,
          items: [
            'guides/lessons-and-topics',
            {
              type: 'link',
              label: '🎬 Creating a Lesson',
              href: '/guides/lessons-and-topics#creating-a-lesson',
            },
            {
              type: 'link',
              label: '📎 Attachments (Files, YouTube, Links)',
              href: '/guides/lessons-and-topics#attaching-files-and-links',
            },
            'guides/assignments',
            {
              type: 'link',
              label: '📝 Creating an Assignment',
              href: '/guides/assignments#creating-an-assignment',
            },
            {
              type: 'link',
              label: '✅ Reviewing Submissions',
              href: '/guides/assignments#reviewing-submissions',
            },
            {
              type: 'link',
              label: '🔁 Allowing Resubmission',
              href: '/guides/assignments#allowing-resubmission',
            },
          ],
        },
        {
          type: 'category',
          label: '📊 Reports & Analytics',
          collapsed: false,
          items: [
            'guides/attendance-reports',
          ],
        },
        {
          type: 'category',
          label: '📝 Exams & Assessments',
          collapsed: false,
          items: [
            'guides/exams-master-index',
            'guides/online-exams',
            'guides/offline-exams',
            'guides/continuous-assessment',
            'guides/continuous-assessment-mobile',
            'guides/continuous-assessment-quick-reference',
            'guides/online-exams-quick-reference',
            'guides/offline-exams-quick-reference',
          ],
        },
      ],
    },
    {
      type: 'category',
      label: 'Reference',
      collapsed: false,
      items: [
        'reference/roles-permissions',
        'reference/data-import-export',
        'reference/keyboard-shortcuts',
        'reference/integrations',
      ],
    },
    {
      type: 'category',
      label: 'Support',
      collapsed: false,
      items: [
        'support/faq',
        'support/troubleshooting',
        'support/contact-support',
      ],
    },
  ],
};

module.exports = sidebars;
