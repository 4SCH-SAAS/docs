// @ts-check

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: '4SCH SAAS Documentation',
  tagline: '4SCH School Management System',
  url: 'https://docs.4sch.com',
  baseUrl: '/',
  favicon: 'img/favicon.ico',
  organizationName: '4SCH-SAAS',
  projectName: 'docs',
  onBrokenLinks: 'throw',
  headTags: [
    {
      tagName: 'meta',
      attributes: {
        name: 'description',
        content: 'Complete documentation for 4SCH School Management System - Nigeria\'s leading school management platform for teachers, students, parents, and administrators.',
      },
    },
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
        content: 'Comprehensive guides for teachers, students, parents, and administrators using 4SCH School Management System in Nigeria.',
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
        property: 'og:url',
        content: 'https://docs.4sch.com',
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
        content: 'Comprehensive guides for teachers, students, parents, and administrators using 4SCH in Nigeria.',
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
        name: 'theme-color',
        content: '#2e8555',
      },
    },
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
      tagName: 'link',
      attributes: {
        rel: 'canonical',
        href: 'https://docs.4sch.com',
      },
    },
    {
      tagName: 'link',
      attributes: {
        rel: 'alternate',
        hreflang: 'en',
        href: 'https://docs.4sch.com',
      },
    },
    {
      tagName: 'link',
      attributes: {
        rel: 'manifest',
        href: '/manifest.json',
      },
    },
    {
      tagName: 'link',
      attributes: {
        rel: 'alternate',
        type: 'application/rss+xml',
        title: '4SCH Documentation RSS',
        href: 'https://docs.4sch.com/blog/rss.xml',
      },
    },
    {
      tagName: 'link',
      attributes: {
        rel: 'alternate',
        type: 'application/atom+xml',
        title: '4SCH Documentation Atom',
        href: 'https://docs.4sch.com/blog/atom.xml',
      },
    },
    {
      tagName: 'link',
      attributes: {
        rel: 'preconnect',
        href: 'https://fonts.googleapis.com',
      },
    },
    {
      tagName: 'link',
      attributes: {
        rel: 'search',
        type: 'application/opensearchdescription+xml',
        title: 'Search 4SCH Docs',
        href: '/opensearch.xml',
      },
    },
    {
      tagName: 'meta',
      attributes: {
        name: 'format-detection',
        content: 'telephone=no',
      },
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
          priceCurrency: 'NGN',
        },
        aggregateRating: {
          '@type': 'AggregateRating',
          ratingValue: '4.5',
          ratingCount: '100',
        },
        description: 'Comprehensive school management system for Nigerian schools including attendance tracking, fee management, gradebook, and parent communication.',
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
        sameAs: [],
        contactPoint: {
          '@type': 'ContactPoint',
          contactType: 'Customer Support',
          url: 'https://docs.4sch.com/support/contact-support',
        },
      }),
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
        indexDocs: true,
        indexBlog: true,
        indexPages: false,
        docsRouteBasePath: '/',
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
            showLastUpdateTime: true,
            showLastUpdateAuthor: false,
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
            showReadingTime: true,
            blogTitle: 'Release Notes & Updates',
            blogDescription: 'Stay updated with the latest features, improvements, and fixes in 4SCH.',
            postsPerPage: 10,
            blogSidebarTitle: 'Recent Updates',
            blogSidebarCount: 'ALL',
            feedOptions: {
              type: 'all',
              title: '4SCH Documentation Updates',
              description: 'Latest updates and release notes for 4SCH School Management System',
              copyright: `Copyright © ${new Date().getFullYear()} 4SCH`,
              language: 'en',
            },
          },
          pages: false,
          theme: {
            customCss: require.resolve('./src/css/custom.css'),
          },
          sitemap: {
            changefreq: 'weekly',
            priority: 0.5,
            ignorePatterns: ['/tags/**'],
            filename: 'sitemap.xml',
          },
        }
      ),
    ],
  ],
  themeConfig: /** @type {import('@docusaurus/preset-classic').ThemeConfig} */ ({
    navbar: {
      title: '4SCH Docs',
      logo: {
        alt: '4SCH Logo',
        src: 'img/logo.svg',
      },
      items: [
        {to: '/', label: 'Docs', position: 'left'},
        {
          type: 'dropdown',
          label: 'Guides',
          position: 'left',
          items: [
            {label: '🎓 For School Admins', to: '/guides/school-admin'},
            {label: '👥 For Teachers', to: '/guides/teacher-guide'},
            {label: '👨‍👩‍👧‍👦 For Parents', to: '/guides/parent-guide'},
            {label: '📚 For Students', to: '/guides/student-guide'},
            {label: '💼 For Support Staff', to: '/guides/non-teaching-staff-guide'},
            {label: '🚌 For Drivers', to: '/guides/driver-guide'},
            {label: '💰 For Accountants', to: '/guides/accountant-guide'},
            {type: 'html', value: '<hr style="margin: 0.3rem 0;">'},
            {label: '📖 All Documentation', to: '/'},
          ],
        },
        {to: '/blog', label: "What's New", position: 'left'},
        {to: '/support/faq', label: 'Support', position: 'left'},
        {
          type: 'docsVersionDropdown',
          position: 'right',
        },
        {href: 'https://www.4sch.com', label: 'Register School', position: 'right'},
        {href: 'https://ng.4sch.com', label: '4SCH Home', position: 'right'},
      ],
    },
    footer: {
      style: 'dark',
      links: [
        {
          title: 'Documentation',
          items: [
            {label: 'Overview', to: '/'},
            {label: 'Quick Start', to: '/intro/quick-start'},
            {label: 'Getting Started', to: '/intro/getting-started'},
            {label: 'User Roles', to: '/intro/user-roles'},
          ],
        },
        {
          title: 'Support',
          items: [
            {label: 'FAQ', to: '/support/faq'},
            {label: 'Troubleshooting', to: '/support/troubleshooting'},
            {label: 'Contact Support', to: '/support/contact-support'},
          ],
        },
        {
          title: 'Connect',
          items: [
            {label: 'Register Your School', href: 'https://www.4sch.com'},
            {label: '4SCH Home', href: 'https://ng.4sch.com'},
            {label: 'WhatsApp: +234 704 151 8843', href: 'https://wa.me/2347041518843'},
          ],
        },
        {
          title: 'Follow Us',
          items: [
            {label: 'Facebook: @ng4sch', href: 'https://facebook.com/ng4sch'},
            {label: 'Twitter/X: @ng4sch', href: 'https://twitter.com/ng4sch'},
            {label: 'Instagram: @ng4sch', href: 'https://instagram.com/ng4sch'},
            {label: 'YouTube: @ng4sch', href: 'https://youtube.com/@ng4sch'},
          ],
        },
      ],
      copyright: `Copyright © ${new Date().getFullYear()} 4SCH. Built with Docusaurus.`,
    },
    prism: {
      additionalLanguages: ['bash', 'json']
    },
    metadata: [
      {name: 'keywords', content: 'school management system, Nigeria schools, student management, teacher portal, parent portal, school administration, educational software, 4SCH, school ERP, attendance system, gradebook, fee management, Nigerian education, SAAS school software'},
      {name: 'author', content: '4SCH'},
      {name: 'robots', content: 'index, follow, max-snippet:-1, max-image-preview:large, max-video-preview:-1'},
      {name: 'googlebot', content: 'index, follow'},
      {name: 'google', content: 'nositelinkssearchbox'},
      {name: 'geo.region', content: 'NG'},
      {name: 'geo.placename', content: 'Nigeria'},
      {name: 'language', content: 'English'},
      {name: 'coverage', content: 'Worldwide'},
      {name: 'distribution', content: 'Global'},
      {name: 'rating', content: 'General'},
      {name: 'revisit-after', content: '7 days'},
      {httpEquiv: 'x-ua-compatible', content: 'IE=edge'},
      {name: 'mobile-web-app-capable', content: 'yes'},
    ],
    image: 'img/logo.svg',
    algolia: false,
    announcementBar: {
      id: 'support_us',
      content: '📚 New to 4SCH? Start with our <a target="_blank" rel="noopener noreferrer" href="/intro/quick-start">Quick Start Guide</a>',
      backgroundColor: '#fafbfc',
      textColor: '#091E42',
      isCloseable: true,
    },
  }),
};

module.exports = config;

// SEO: Generate additional meta tags per page
module.exports.plugins = module.exports.plugins || [];
module.exports.plugins.push(function(context, options) {
  return {
    name: 'docusaurus-plugin-seo',
    injectHtmlTags() {
      return {
        headTags: [
          {
            tagName: 'link',
            attributes: {
              rel: 'dns-prefetch',
              href: '//fonts.googleapis.com',
            },
          },
        ],
      };
    },
  };
});
