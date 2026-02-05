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
        'guides/admin-guide',
        'guides/teacher-guide',
        'guides/parent-guide',
        'guides/student-guide',
        'guides/non-teaching-staff-guide',
        'guides/accountant-guide',
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
