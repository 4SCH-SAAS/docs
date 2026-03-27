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
          ],
        },
        {
          type: 'category',
          label: '👥 Teaching Staff',
          collapsed: false,
          items: [
            'guides/teachers',
            {
              type: 'link',
              label: '✅ Marking Attendance',
              href: '/guides/teachers#marking-attendance',
            },
            {
              type: 'link',
              label: '📝 Managing Assignments',
              href: '/guides/teachers#managing-assignments',
            },
            {
              type: 'link',
              label: '📊 Entering Grades',
              href: '/guides/teachers#entering-grades',
            },
            {
              type: 'link',
              label: '💬 Communicating with Parents',
              href: '/guides/teachers#communicating-with-parents',
            },
          ],
        },
        {
          type: 'category',
          label: '👨‍👩‍👧‍👦 Parents & Students',
          collapsed: false,
          items: [
            'guides/parents',
            {
              type: 'link',
              label: '💳 Paying School Fees',
              href: '/guides/parents#paying-school-fees',
            },
            {
              type: 'link',
              label: '📊 Viewing Grades & Results',
              href: '/guides/parents#viewing-grades',
            },
            {
              type: 'link',
              label: '👀 Checking Attendance',
              href: '/guides/parents#checking-attendance',
            },
            {
              type: 'link',
              label: '💬 Messaging Teachers',
              href: '/guides/parents#messaging-teachers',
            },
            'guides/students',
            {
              type: 'link',
              label: '📝 Assignments & Homework',
              href: '/guides/students#assignments',
            },
            {
              type: 'link',
              label: '📊 Checking Your Grades',
              href: '/guides/students#checking-your-grades',
            },
            {
              type: 'link',
              label: '📅 Viewing Your Timetable',
              href: '/guides/students#viewing-your-timetable',
            },
          ],
        },
        {
          type: 'category',
          label: '💼 Support Staff',
          collapsed: false,
          items: [
            'guides/non-teaching-staff',
            'guides/accountant',
            {
              type: 'link',
              label: '💰 Fee Structure Management',
              href: '/guides/accountant#fee-structure-management',
            },
            {
              type: 'link',
              label: '💳 Payment Processing',
              href: '/guides/accountant#payment-processing',
            },
            {
              type: 'link',
              label: '📊 Financial Reports',
              href: '/guides/accountant#financial-reports',
            },
            'guides/driver',
            {
              type: 'link',
              label: '🚌 Managing Daily Trips',
              href: '/guides/driver#managing-daily-trips',
            },
            {
              type: 'link',
              label: '👥 Student Management',
              href: '/guides/driver#student-management',
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
            'guides/teacher-subject-assignment',
            'guides/notification-settings-management',
            'guides/subscription-expiry-retention-policy',
          ],
        },
        {
          type: 'category',
          label: '💰 Financial Management',
          collapsed: false,
          items: [
            'guides/expense-management',
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
