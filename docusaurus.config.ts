import {themes as prismThemes} from 'prism-react-renderer';
import type {Config} from '@docusaurus/types';
import type * as Preset from '@docusaurus/preset-classic';

const config: Config = {
  title: 'Shekhar Patil',
  tagline: 'Full Stack Developer',
  favicon: 'img/favicon.ico',

  // Set the production url of your site here
  url: 'https://shekharpatil.tech',
  baseUrl: '/',

  organizationName: 'Shekhar Patil',
  projectName: 'my-website',

  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',

  i18n: {
    defaultLocale: 'en',
    locales: ['en'],
  },

  plugins: [
    [
      '@docusaurus/plugin-google-gtag',
      {
        trackingID: 'G-EK3D72LLN9',
        anonymizeIP: true,
      },
    ],
  ],

  presets: [
    [
      'classic',
      {
        docs: {
          sidebarPath: './sidebars.ts',
        },

        blog: {
          showReadingTime: true,
          blogSidebarCount: 'ALL',
          blogSidebarTitle: 'All our blogs',
          postsPerPage: 5,
        },

        theme: {
          customCss: './src/css/custom.css',
        },
      } satisfies Preset.Options,
    ],
  ],

  headTags: [
    {
        tagName: 'meta',
        attributes: {
          name: 'google-adsense-account',
          content: 'ca-pub-2169425539769559',
        },
      },
  ],

  themeConfig: {
    navbar: {
      title: 'Shekhar Patil',
      logo: {
        alt: 'Shekhar Patil Logo',
        src: 'img/profile.png',
      },
      items: [
        {
          type: 'docSidebar',
          sidebarId: 'golangSidebar',
          position: 'right',
          label: 'Golang',
        },
        {
          type: 'docSidebar',
          sidebarId: 'dsaSidebar',
          position: 'right',
          label: 'DSA',
        },
        {
          to: '/blog',
          label: 'Blog',
          position: 'right',
        },
        // {
        //     type: 'docSidebar',
        //     sidebarId: 'leetcodeSidebar',
        //     position: 'right',
        //     label: 'LeetCode Solutions',
        // },
        {
          to: 'https://calendly.com/shekhar-patil',
          label: 'Schedule Meeting',
          position: 'right',
        },
        {
          href: 'https://github.com/shekhar-patil',
          label: 'GitHub',
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
              label: 'Golang',
              to: '/docs/golang/intro',
            },
            {
              label: 'Data Structure and Algorithms',
              to: '/docs/data-structures-and-algorithms/dsa-roadmap',
            },
            {
                label: 'LeetCode Solutions',
                to: '/docs/leetcode/intro',
            },
          ],
        },
        {
          title: 'Community',
          items: [
            {
              label: 'Twitter',
              href: 'https://x.com/Shekharpatil95',
            },
            {
              label: 'YouTube',
              href: 'https://www.youtube.com/@shekharpatil5044',
            },
            {
              label: 'Stack Overflow',
              href: 'https://stackoverflow.com/users/7292776/shekhar-patil',
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
              href: 'https://github.com/shekhar-patil',
            },
          ],
        },
      ],
      copyright: `Copyright © ${new Date().getFullYear()} Shekhar Patil`,
    },

    prism: {
      theme: prismThemes.github,
      darkTheme: prismThemes.dracula,
    },

    docs: {
      sidebar: {
        autoCollapseCategories: false,
      },
    },
  },
};

export default config;
