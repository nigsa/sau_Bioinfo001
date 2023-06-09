// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const lightCodeTheme = require('prism-react-renderer/themes/github');
const darkCodeTheme = require('prism-react-renderer/themes/dracula');

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'Research00',
  tagline: 'Dinosaurs are cool',
  url: 'https://oogasawa.github.io/sau_Bioinfo001/',
  baseUrl: '/',
  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',
  favicon: 'img/favicon.ico',
  organizationName: 'oogasawa', // Usually your GitHub org/user name.
  projectName: 'sau_Bioinfo001', // Usually your repo name.
  plugins: [[require.resolve('docusaurus-lunr-search'), {
    languages: ['ja', 'en']
  }]],
  i18n: {
    defaultLocale: 'ja',
    locales: ['ja', 'en'],
  },
  presets: [
    [
      '@docusaurus/preset-classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          sidebarPath: require.resolve('./sidebars.js'),
          routeBasePath: '/',
          showLastUpdateTime: true,
          // Please change this to your repo.
          // editUrl: 'https://github.com/oogasawa/sau_Template00/edit/main/website/',
        },
        blog: {
          showReadingTime: true,
          // Please change this to your repo.
          editUrl:
          'https://github.com/facebook/docusaurus/edit/main/website/blog/',
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      }),
    ],
  ],

  themeConfig:
  /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
  ({
    colorMode: {
      disableSwitch: true,
    },
    navbar: {
      title: 'Bioinfo001',
      logo: {
        alt: 'My Site Logo',
        src: 'img/king_logo.png',
      },
      items: [
        {
          to: 'k8s/Overview/k8sInfo_230112_oo01/k8sInfo_230112_oo01',
          docId: 'k8sInfo_230112_oo01',
          position: 'left',
          label: 'Infrastructure',
        },
        {to: '/blog', label: 'Blog', position: 'left'},
        {type: 'localeDropdown',
         position: 'right',
        },
      ],
    },
    footer: {
      style: 'dark',
      links: [
        {
          title: 'Docs',
          items: [
            {
              label: 'Tutorial',
              to: '/',
            },
          ],
        },
        {
          title: 'Community',
          items: [
            {
              label: 'Stack Overflow',
              href: 'https://stackoverflow.com/questions/tagged/docusaurus',
            },
            {
              label: 'Discord',
              href: 'https://discordapp.com/invite/docusaurus',
            },
            {
              label: 'Twitter',
              href: 'https://twitter.com/docusaurus',
            },
          ],
        },
        {
          title: 'More',
          items: [
            {
              label: 'Blog',
              to: '/blog',
            },
            {
              label: 'GitHub',
              href: 'https://github.com/facebook/docusaurus',
            },
          ],
        },
      ],
      copyright: `Copyright © ${new Date().getFullYear()} My Project, Inc. Built with Docusaurus.`,
    },
    prism: {
      theme: lightCodeTheme,
      darkTheme: darkCodeTheme,
    },
  }),
};

module.exports = config;
