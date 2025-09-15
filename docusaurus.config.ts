import {themes as prismThemes} from 'prism-react-renderer';
import type {Config} from '@docusaurus/types';
import type * as Preset from '@docusaurus/preset-classic';

// This runs in Node.js - Don't use client-side code here (browser APIs, JSX...)

const config: Config = {
  title: 'Titancraft Above Wiki',
  tagline: 'The wiki for the Above on Titancraft, Tangotek\'s private patreon minecraft server',
  favicon: 'img/blimp-icon.svg',

  // Future flags, see https://docusaurus.io/docs/api/docusaurus-config#future
  future: {
    v4: true, // Improve compatibility with the upcoming Docusaurus v4
  },

  // Set the production url of your site here
  url: 'https://jamcdonald120.github.io',
  // Set the /<baseUrl>/ pathname under which your site is served
  // For GitHub pages deployment, it is often '/<projectName>/'
  baseUrl: '/Titancraft-Above-Wiki/',
  // baseUrl: '/',

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: 'Jamcdonald120', // Usually your GitHub org/user name.
  projectName: 'Titancraft-Above-Wiki', // Usually your repo name.
  trailingSlash: false,

  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',

  // Even if you don't use internationalization, you can use this field to set
  // useful metadata like html lang. For example, if your site is Chinese, you
  // may want to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: 'en',
    locales: ['en'],
  },

  presets: [
    [
      'classic',
      {
        docs: {
          routeBasePath: '/',
          sidebarPath: './sidebars.ts',
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          editUrl:
            'https://github.com/Jamcdonald120/Titancraft-Above-Wiki/blob/gh-pages/',
        },
        blog: false,
        theme: {
          customCss: './src/css/custom.css',
        },
      } satisfies Preset.Options,
    ],
  ],
  themes: [
    [
      "@easyops-cn/docusaurus-search-local",
      {
        hashed: true,
        docsRouteBasePath: '/'
      }
    ],
  ],
  themeConfig: {
    // Replace with your project's social card
    // image: 'img/docusaurus-social-card.jpg',
    navbar: {
      title: 'Titancraft Above Wiki',
      logo: {
        alt: 'Titancraft Above Wiki Logo',
        src: 'img/blimp-icon.svg',
      },
      items: [
        // {
        //   type: 'docSidebar',
        //   sidebarId: 'tutorialSidebar',
        //   position: 'left',
        //   label: 'Wiki',
        // },
        {to: '/bosses', label: 'Bosses', position: 'left'},
        {to: '/npcs', label: 'NPCs', position: 'left'},
        {to: '/structures', label: 'Structures', position: 'left'},
        {to: '/advancements', label: 'Advancements', position: 'left'},
        {to: '/enchantments', label: 'Enchantments', position: 'left'},
        {
          href: 'https://github.com/Jamcdonald120/Titancraft-Above-Wiki/',
          label: 'GitHub',
          position: 'right',
        },
      ],
    },
    footer: {
      style: 'dark',
      links: [
        {
          title: 'Wiki',
          items: [
            {to: '/bosses', label: 'Bosses'},
            {to: '/npcs', label: 'NPCs'},
            {to: '/structures', label: 'Structures'},
            {to: '/advancements', label: 'Advancements'},
            {to: '/enchantments', label: 'Enchantments'},
          ],
        },
        {
          title: 'Titancraft',
          items: [
            {
              label: 'How to join',
              href: 'https://sites.google.com/view/titancraftinfo/joining-titancraft',
            },
            {
              label: 'About',
              href: 'https://sites.google.com/view/titancraftinfo/about-titancraft',
            },
            {
              label: 'More info',
              href: 'https://sites.google.com/view/titancraftinfo/home',
            },
          ],
        },
        {
          title: 'TangoTek',
          items: [
            {
              label: 'Youtube',
              to: 'https://www.youtube.com/@TangoTekLP',
            },
            {
              label: 'Twitch',
              href: 'https://www.twitch.tv/tangotek',
            },
            {
              label: 'Patreon',
              href: 'https://www.patreon.com/tangotek',
            },
          ],
        },
      ],
      // copyright: `Copyright © ${new Date().getFullYear()} My Project, Inc. Built with Docusaurus.`,
    },
    prism: {
      theme: prismThemes.github,
      darkTheme: prismThemes.dracula,
    },
  } satisfies Preset.ThemeConfig,
};

export default config;
