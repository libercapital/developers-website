// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const lightCodeTheme = require('prism-react-renderer/themes/github');

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'Developers Liber Capital',
  tagline: 'Docs and APIs',
  favicon: 'img/favicon.ico',

  // Set the production url of your site here
  url: 'https://libercapital.com.br/',
  // Set the /<baseUrl>/ pathname under which your site is served
  // For GitHub pages deployment, it is often '/<projectName>/'
  baseUrl: '/developers-website/',

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: 'libercapital', // Usually your GitHub org/user name.
  projectName: 'developers-website', // Usually your repo name.

  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',

  // Even if you don't use internalization, you can use this field to set useful
  // metadata like html lang. For example, if your site is Chinese, you may want
  // to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: 'en',
    locales: ['en'],
  },

  presets: [
    [
      'classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          sidebarPath: require.resolve('./sidebars.js'),
        },
        theme: {
          customCss: [
            require.resolve('./src/css/fonts.css'),
            require.resolve('./src/css/custom.css'),
          ],
        },
      }),
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      // Replace with your project's social card
      image: 'img/docusaurus-social-card.jpg',
      navbar: {
        logo: {
          alt: 'Liber Logo',
          src: 'img/logo.svg',
        },
        items: [
          {
            type: 'doc',
            docId: 'intro',
            position: 'left',
            label: 'Guides',
          },
          {
            type: 'dropdown',
            label: 'APIs',
            position: 'left',
            items: [
              {
                label: 'Liber Connect - Autenticação',
                to: 'apis/connect-auth',
              },
              {
                label: 'Liber Connect - Sacados',
                to: 'apis/connect-buyers',
              },
              {
                label: 'Liber Connect - Investidores',
                to: 'apis/connect-funders',
              },
              {
                label: 'Liber Connect - Webhooks',
                to: 'apis/connect-webhooks',
              },
            ],
          },
          {
            href: 'https://github.com/libercapital',
            label: 'GitHub',
            position: 'right',
          },
        ],
      },
      footer: {
        style: 'dark',
        links: [
          {
            title: 'Contato',
            items: [
              {
                label: 'contato@libercapital.com.br',
                href: 'mailto:contato@libercapital.com.br',
              },
              {
                label: '+55 (11) 4858-1265',
                href: 'tel:551148581265',
              },
            ],
          },
          {
            title: 'Community',
            items: [
              {
                label: 'LinkedIn',
                href: 'https://www.linkedin.com/company/liber-capital/',
              },
              {
                label: 'Instagram',
                href: 'https://www.instagram.com/libercapital/',
              },
              {
                label: 'Youtube',
                href: 'https://www.youtube.com/channel/UCyAAazejyw5VTjjbd4Kf3bw',
              },
            ],
          },
          {
            title: 'Documentos',
            items: [
              {
                label: 'Política de Privacidade',
                href: 'https://libercapital.com.br/politica-de-privacidade/',
              },
            ],
          },
        ],
        copyright: `© ${new Date().getFullYear()} Liber Capital S/A - Todos os direitos reservados | CNPJ: 26.961.015/0001-00`,
      },
      prism: {
        theme: lightCodeTheme,
      },
      colorMode: {
        disableSwitch: true,
        defaultMode: 'light',
        respectPrefersColorScheme: false,
      },
    }),
};

module.exports = config;
