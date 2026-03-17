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
          ],
        },
        {
          type: 'category',
          label: '👥 Teaching Staff',
          collapsed: false,
          items: [
            'guides/teacher-guide',
          ],
        },
        {
          type: 'category',
          label: '👨‍👩‍👧‍👦 Parents & Students',
          collapsed: false,
          items: [
            'guides/parent-guide',
            'guides/student-guide',
          ],
        },
        {
          type: 'category',
          label: '💼 Support Staff',
          collapsed: false,
          items: [
            'guides/non-teaching-staff-guide',
            'guides/accountant-guide',
            'guides/driver-guide',
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
