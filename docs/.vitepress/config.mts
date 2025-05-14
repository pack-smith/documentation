import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "PackSmith",
  description: "PackSmith documentation",
  srcDir: 'src',
  head: [['link', { rel: 'icon', href: 'https://tinypic.host/images/2025/05/05/ps-logo.png' }]],
  themeConfig: {
    logo: 'https://tinypic.host/images/2025/05/05/ps-logo.png',
    search: {
      provider: 'local'
    },
    nav: [
      { text: 'Home', link: '/' },
      { text: 'Guide', link: '/guide/quick-start', activeMatch: '/guide/' },
      { text: '0.0.9', link: '' }
    ],

    sidebar: [
      {
        text: 'Introduction',
        collapsed: false,
        items: [
          { text: 'What is PackSmith', link: '/guide/what-is-packsmith' },
          { text: 'Getting Started', link: '/guide/quick-start' },
          { text: 'Configuration', link: '/guide/config' }
        ]
      },
      {
        text: 'Utilities',
        collapsed: false,
        link: '/guide/utilities',
        items: [
          {
            text: 'Check Utilities',
            link: '/guide/utilities/Check-Utilities',
            collapsed: false,
            items: [
              { text: 'isArray', link: '/guide/utilities/Check-Utilities/isArray' },
              { text: 'isBoolean', link: '/guide/utilities/Check-Utilities/isBoolean' },
              { text: 'isEmpty', link: '/guide/utilities/Check-Utilities/isEmpty' },
              { text: 'isFunction', link: '/guide/utilities/Check-Utilities/isFunction' },
              { text: 'isNull', link: '/guide/utilities/Check-Utilities/isNull' },
              { text: 'isNumber', link: '/guide/utilities/Check-Utilities/isNumber' },
              { text: 'isObject', link: '/guide/utilities/Check-Utilities/isObject' },
              { text: 'isString', link: '/guide/utilities/Check-Utilities/isString' },
            ]
          },
          { text: 'Array Utilities', link: '/' },
          { text: 'String Utilities', link: '/' },
          { text: 'Number Utilities', link: '/' },
          { text: 'Date Utilities', link: '/' },
          { text: 'Math Utilities', link: '/' },
        ]
      },
    ],

    socialLinks: [
      { icon: 'github', link: 'https://github.com/pack-smith/PackSmith' },
      { icon: 'npm', link: 'https://www.npmjs.com/package/packsmith' }
    ]
  }
})
