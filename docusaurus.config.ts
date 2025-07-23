import {themes as prismThemes} from 'prism-react-renderer';
import type {Config} from '@docusaurus/types';
import type * as Preset from '@docusaurus/preset-classic';

const config: Config = {
  title: 'Shekhar Patil - Full Stack Developer',
  tagline: 'Full Stack Developer specializing in Ruby, Rails, Golang, and Cloud Technologies. Sharing knowledge through tutorials, blogs, and open source contributions.',
  favicon: 'img/favicon.ico',

  // Set the production url of your site here
  url: 'https://shekhar-patil.github.io',
  baseUrl: '/',

  organizationName: 'shekhar-patil',
  projectName: 'shekhar-patil.github.io',
  trailingSlash: false,
  deploymentBranch: 'gh-pages',

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
    [
      '@docusaurus/plugin-sitemap',
      {
        changefreq: 'weekly',
        priority: 0.5,
        id: 'sitemap',
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
          blogSidebarTitle: 'Blogs',
          postsPerPage: 5,
          onUntruncatedBlogPosts: 'ignore',
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
    {
      tagName: 'meta',
      attributes: {
        name: 'description',
        content: 'Shekhar Patil - Full Stack Developer specializing in Ruby, Rails, Golang, and Cloud Technologies. Sharing knowledge through tutorials, blogs, and open source contributions.',
      },
    },
    {
      tagName: 'meta',
      attributes: {
        name: 'keywords',
        content: 'Full Stack Developer, Ruby on Rails, Golang, Docker, Kubernetes, GCP, Open Source, Tech Blog, Programming Tutorials',
      },
    },
    {
      tagName: 'meta',
      attributes: {
        name: 'author',
        content: 'Shekhar Patil',
      },
    },
    {
      tagName: 'meta',
      attributes: {
        property: 'og:title',
        content: 'Shekhar Patil - Full Stack Developer & Tech Educator',
      },
    },
    {
      tagName: 'meta',
      attributes: {
        property: 'og:description',
        content: 'Full Stack Developer specializing in Ruby, Rails, Golang, and Cloud Technologies. Sharing knowledge through tutorials, blogs, and open source contributions.',
      },
    },
    {
      tagName: 'meta',
      attributes: {
        property: 'og:image',
        content: 'https://shekharpatil.tech/img/profile.png',
      },
    },
    {
      tagName: 'meta',
      attributes: {
        property: 'og:url',
        content: 'https://shekharpatil.tech',
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
        content: 'Shekhar Patil - Full Stack Developer & Tech Educator',
      },
    },
    {
      tagName: 'meta',
      attributes: {
        name: 'twitter:description',
        content: 'Full Stack Developer specializing in Ruby, Rails, Golang, and Cloud Technologies. Sharing knowledge through tutorials, blogs, and open source contributions.',
      },
    },
    {
      tagName: 'meta',
      attributes: {
        name: 'twitter:image',
        content: 'https://shekharpatil.tech/img/profile.png',
      },
    },
    {
      tagName: 'script',
      attributes: {
        type: 'application/ld+json',
      },
      innerHTML: JSON.stringify({
        '@context': 'https://schema.org',
        '@type': 'Person',
        name: 'Shekhar Patil',
        url: 'https://shekharpatil.tech',
        image: 'https://shekharpatil.tech/img/profile.png',
        sameAs: [
          'https://github.com/shekhar-patil',
          'https://www.linkedin.com/in/shekhar-patil-834462135/',
          'https://x.com/Shekharpatil95',
          'https://www.youtube.com/@shekharpatil02',
          'https://stackoverflow.com/users/7292776/shekhar-patil'
        ],
        jobTitle: 'Full Stack Developer',
        worksFor: {
          '@type': 'Organization',
          name: 'Self Employed'
        }
      }),
    },
  ],

  themeConfig: {
    metadata: [
      {name: 'keywords', content: 'Full Stack Developer, Ruby on Rails, Golang, Docker, Kubernetes, GCP, Open Source, Tech Blog, Programming Tutorials'},
    ],
    navbar: {
      title: 'Shekhar Patil',
      logo: {
        alt: 'Shekhar Patil Logo',
        src: 'img/profile.png',
      },
      items: [
        {
          to: '/',
          label: 'Home',
          position: 'right',
          activeBaseRegex: '^/$',
        },
        {
          to: '/about',
          label: 'About',
          position: 'right',
        },
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
        {
          to: 'https://calendly.com/shekhar-patil',
          label: 'Schedule Meeting',
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
                label: 'LinkedIn',
                href: 'https://www.linkedin.com/in/shekhar-patil-834462135/',
             },
            {
              label: 'Twitter',
              href: 'https://x.com/Shekharpatil95',
            },
            {
              label: 'YouTube',
              href: 'https://www.youtube.com/@shekharpatil02',
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
