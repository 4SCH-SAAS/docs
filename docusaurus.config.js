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
          },
          blog: false,
          pages: false,
          theme: {
            customCss: require.resolve('./src/css/custom.css'),
          }
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
        {href: 'https://github.com/4SCH-SAAS/docs', label: 'GitHub', position: 'right'},
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
