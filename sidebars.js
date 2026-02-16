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
      label: '🚀 Advanced Workflows',
      collapsed: true,
      items: [
        'advanced-workflows/README',
        'advanced-workflows/teacher-bulk-operations',
        'advanced-workflows/admin-bulk-data-management',
        'advanced-workflows/accountant-advanced-reconciliation',
        'advanced-workflows/parent-multi-child-management',
        'advanced-workflows/admin-system-optimization',
      ],
    },
    {
      type: 'category',
      label: '🎬 Animated Diagrams',
      collapsed: true,
      items: [
        'animated-diagrams/README',
        'animated-diagrams/diagram-specifications',
        'animated-diagrams/teacher-assignment-workflow-diagram',
        'animated-diagrams/parent-fee-payment-diagram',
        'animated-diagrams/student-assignment-submission-diagram',
        'animated-diagrams/admin-school-setup-diagram',
        'animated-diagrams/accountant-payment-processing-diagram',
        'animated-diagrams/driver-trip-management-diagram',
      ],
    },
    {
      type: 'category',
      label: '📚 Training & Rollout',
      collapsed: true,
      items: [
        'training/README',
        'training/training-rollout-plan',
        'training/trainer-guide',
        'training/assessment-templates',
        'training/training-materials-checklist',
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
