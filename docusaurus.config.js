// @ts-check

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: '4SCH SAAS  Documentation',
  tagline: '4SCH School Management System',
  url: 'https://docs.4sch.com',
  baseUrl: '/',
  favicon: 'img/favicon.ico',
  organizationName: '4SCH-SAAS',
  projectName: 'docs',
  onBrokenLinks: 'throw',
  
  headTags: [
    // Structured Data (JSON-LD)
    {
      tagName: 'script',
      attributes: {
        type: 'application/ld+json',
      },
      innerHTML: JSON.stringify({
        '@context': 'https://schema.org',
        '@type': 'WebSite',
        name: '4SCH Documentation',
        url: 'https://docs.4sch.com',
        description: 'Complete documentation for 4SCH School Management System. Learn to manage students, staff, attendance, grades, fees, and more.',
        publisher: {
          '@type': 'Organization',
          name: '4SCH',
          url: 'https://ng.4sch.com',
          logo: {
            '@type': 'ImageObject',
            url: 'https://docs.4sch.com/img/logo.svg',
          },
        },
        potentialAction: {
          '@type': 'SearchAction',
          target: 'https://docs.4sch.com/?q={search_term_string}',
          'query-input': 'required name=search_term_string',
        },
      }),
    },
    {
      tagName: 'script',
      attributes: {
        type: 'application/ld+json',
      },
      innerHTML: JSON.stringify({
        '@context': 'https://schema.org',
        '@type': 'SoftwareApplication',
        name: '4SCH School Management System',
        applicationCategory: 'EducationalApplication',
        operatingSystem: 'Web, Android, iOS',
        offers: {
          '@type': 'Offer',
          price: '0',
          priceCurrency: 'USD',
        },
        aggregateRating: {
          '@type': 'AggregateRating',
          ratingValue: '4.5',
          ratingCount: '100',
        },
        description: 'Complete school management system for Nigerian schools. Manage students, staff, attendance, grades, fees, and more.',
      }),
    },
    {
      tagName: 'script',
      attributes: {
        type: 'application/ld+json',
      },
      innerHTML: JSON.stringify({
        '@context': 'https://schema.org',
        '@type': 'Organization',
        name: '4SCH',
        url: 'https://ng.4sch.com',
        logo: 'https://docs.4sch.com/img/logo.svg',
        sameAs: [
          'https://docs.4sch.com',
        ],
        contactPoint: {
          '@type': 'ContactPoint',
          contactType: 'Customer Support',
          url: 'https://docs.4sch.com/support/contact-support',
        },
      }),
    },
    // SEO Meta Tags
    {
      tagName: 'meta',
      attributes: {
        name: 'description',
        content: 'Complete documentation for 4SCH School Management System. Learn to manage students, staff, attendance, grades, fees, and more.',
      },
    },
    {
      tagName: 'meta',
      attributes: {
        name: 'keywords',
        content: 'school management system, 4SCH, education software, student management, attendance tracking, grade management, fee management, school administration',
      },
    },
    // Open Graph Tags
    {
      tagName: 'meta',
      attributes: {
        property: 'og:type',
        content: 'website',
      },
    },
    {
      tagName: 'meta',
      attributes: {
        property: 'og:title',
        content: '4SCH Documentation - School Management System',
      },
    },
    {
      tagName: 'meta',
      attributes: {
        property: 'og:description',
        content: 'Complete documentation for 4SCH School Management System. Learn to manage students, staff, attendance, grades, fees, and more.',
      },
    },
    {
      tagName: 'meta',
      attributes: {
        property: 'og:url',
        content: 'https://docs.4sch.com',
      },
    },
    {
      tagName: 'meta',
      attributes: {
        property: 'og:image',
        content: 'https://docs.4sch.com/img/logo.svg',
      },
    },
    {
      tagName: 'meta',
      attributes: {
        property: 'og:site_name',
        content: '4SCH Documentation',
      },
    },
    {
      tagName: 'meta',
      attributes: {
        property: 'og:locale',
        content: 'en_US',
      },
    },
    {
      tagName: 'meta',
      attributes: {
        property: 'og:image:width',
        content: '1200',
      },
    },
    {
      tagName: 'meta',
      attributes: {
        property: 'og:image:height',
        content: '630',
      },
    },
    // Twitter Card Tags
    {
      tagName: 'meta',
      attributes: {
        name: 'twitter:card',
        content: 'summary_large_image',
      },
    },
    {
      tagName: 'meta',
      attributes: {
        name: 'twitter:title',
        content: '4SCH Documentation - School Management System',
      },
    },
    {
      tagName: 'meta',
      attributes: {
        name: 'twitter:description',
        content: 'Complete documentation for 4SCH School Management System. Learn to manage students, staff, attendance, grades, fees, and more.',
      },
    },
    {
      tagName: 'meta',
      attributes: {
        name: 'twitter:image',
        content: 'https://docs.4sch.com/img/logo.svg',
      },
    },
    {
      tagName: 'meta',
      attributes: {
        name: 'twitter:site',
        content: '@4SCH',
      },
    },
    {
      tagName: 'meta',
      attributes: {
        name: 'twitter:creator',
        content: '@4SCH',
      },
    },
    // Additional SEO
    {
      tagName: 'meta',
      attributes: {
        name: 'author',
        content: '4SCH',
      },
    },
    {
      tagName: 'link',
      attributes: {
        rel: 'canonical',
        href: 'https://docs.4sch.com',
      },
    },
    // Additional Platform Meta Tags
    {
      tagName: 'meta',
      attributes: {
        name: 'apple-mobile-web-app-capable',
        content: 'yes',
      },
    },
    {
      tagName: 'meta',
      attributes: {
        name: 'apple-mobile-web-app-status-bar-style',
        content: 'black-translucent',
      },
    },
    {
      tagName: 'meta',
      attributes: {
        name: 'apple-mobile-web-app-title',
        content: '4SCH Docs',
      },
    },
    {
      tagName: 'meta',
      attributes: {
        name: 'application-name',
        content: '4SCH Documentation',
      },
    },
    {
      tagName: 'meta',
      attributes: {
        name: 'msapplication-TileColor',
        content: '#667eea',
      },
    },
    {
      tagName: 'meta',
      attributes: {
        name: 'theme-color',
        content: '#667eea',
      },
    },
    // RSS Feed
    {
      tagName: 'link',
      attributes: {
        rel: 'alternate',
        type: 'application/rss+xml',
        title: '4SCH Release Notes & Updates',
        href: 'https://docs.4sch.com/changelog/rss.xml',
      },
    },
    {
      tagName: 'link',
      attributes: {
        rel: 'alternate',
        type: 'application/atom+xml',
        title: '4SCH Release Notes & Updates',
        href: 'https://docs.4sch.com/changelog/atom.xml',
      },
    },
  ],
  i18n: {
    defaultLocale: 'en',
    locales: ['en'],
  },
  themes: ['@docusaurus/theme-mermaid'],
  plugins: [
    [
      '@docusaurus/plugin-ideal-image',
      {
        quality: 70,
        max: 1400,
        min: 400,
        steps: 4,
        disableInDev: false,
      },
    ],
    [
      '@easyops-cn/docusaurus-search-local',
      {
        hashed: true,
        language: ['en'],
        highlightSearchTermsOnTargetPage: true,
        explicitSearchResultPath: true,
      },
    ],
    [
      '@docusaurus/plugin-client-redirects',
      {
        redirects: [
          {
            from: '/blog',
            to: '/changelog',
          },
          {
            from: '/blog/welcome',
            to: '/changelog/welcome',
          },
          {
            from: '/blog/documentation-enhancement-feb-2026',
            to: '/changelog/documentation-enhancement-feb-2026',
          },
        ],
        createRedirects(existingPath) {
          // Redirect any /blog/* path to /changelog/*
          if (existingPath.includes('/changelog')) {
            return [
              existingPath.replace('/changelog', '/blog'),
            ];
          }
          return undefined;
        },
      },
    ],
  ],
  markdown: {
    mermaid: true,
    hooks: {
      onBrokenMarkdownLinks: 'warn',
    },
  },
  presets: [
    [
      'classic',
      /** @type {import('@docusaurus/preset-classic').Options} */ (
        {
          docs: {
            routeBasePath: '/',
            sidebarPath: require.resolve('./sidebars.js'),
            editCurrentVersion: false,
            showLastUpdateTime: false,
            // Versioning configuration
            includeCurrentVersion: true,
            lastVersion: 'current',
            versions: {
              current: {
                label: 'Latest',
                path: '',
              },
            },
          },
          blog: {
            routeBasePath: 'changelog',
            showReadingTime: true,
            blogTitle: 'Release Notes & Updates',
            blogDescription: 'Stay updated with the latest features, improvements, and fixes in 4SCH.',
            postsPerPage: 10,
            blogSidebarTitle: 'Recent Updates',
            blogSidebarCount: 'ALL',
            feedOptions: {
              type: 'all',
              title: '4SCH Release Notes & Updates',
              description: 'Stay updated with the latest features, improvements, and fixes in 4SCH School Management System.',
              copyright: `Copyright © ${new Date().getFullYear()} 4SCH.`,
              language: 'en',
            },
          },
          pages: false,
          theme: {
            customCss: require.resolve('./src/css/custom.css'),
          }
        }
      ),
    ],
  ],
  themeConfig: /** @type {import('@docusaurus/preset-classic').ThemeConfig} */ ({
    metadata: [
      {name: 'robots', content: 'index, follow'},
      {name: 'googlebot', content: 'index, follow'},
    ],
    navbar: {
      title: '4SCH Docs',
      logo: {
        alt: '4SCH Logo',
        src: 'img/logo.svg',
      },
      items: [
        {to: '/', label: 'Docs', position: 'left'},
        {to: '/changelog', label: 'Changelog', position: 'left'},
        {
          type: 'docsVersionDropdown',
          position: 'right',
        },
        {href: 'https://ng.4sch.com', label: '4SCH Home', position: 'right'},
      ],
    },
    footer: {
      style: 'dark',
      links: [
        {
          title: 'Docs',
          items: [
            {label: 'Overview', to: '/'},
            {label: 'Quick Start', to: '/intro/quick-start'},
          ],
        },
        {
          title: 'Community',
          items: [
            {label: 'Contact Support', to: '/support/contact-support'},
          ],
        },
      ],
      copyright: `Copyright © ${new Date().getFullYear()} 4SCH.`,
    },
    prism: {
      additionalLanguages: ['bash', 'json']
    }
  }),
};

module.exports = config;
