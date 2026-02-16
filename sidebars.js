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
            'guides/teachers',
          ],
        },
        {
          type: 'category',
          label: '👨‍👩‍👧‍👦 Parents & Students',
          collapsed: false,
          items: [
            'guides/parents',
            'guides/students',
          ],
        },
        {
          type: 'category',
          label: '💼 Support Staff',
          collapsed: false,
          items: [
            'guides/non-teaching-staff',
            'guides/accountant',
            'guides/driver',
          ],
        },
      ],
    },
    {
      type: 'category',
      label: 'Features & Workflows',
      collapsed: false,
      items: [
        'guides/workflows',
        'guides/messaging',
        'guides/billing-finance',
        'guides/reports-analytics',
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
      label: '📋 Quick Reference Cards',
      collapsed: true,
      items: [
        'quick-reference/README',
        'quick-reference/teacher-assignment-workflow',
        'quick-reference/parent-fee-payment-workflow',
        'quick-reference/student-assignment-submission-workflow',
        'quick-reference/admin-school-setup-workflow',
        'quick-reference/accountant-payment-processing-workflow',
        'quick-reference/driver-trip-management-workflow',
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
