import { setAbsoluteSqliteDatabaseUrlForPrisma } from './prisma/utils'

setAbsoluteSqliteDatabaseUrlForPrisma()

export default defineNuxtConfig({
  runtimeConfig: {
    authSecret: process.env.AUTH_SECRET,
    githubClientId: process.env.GITHUB_CLIENT_ID,
    githubClientSecret: process.env.GITHUB_CLIENT_SECRET,
    s3AccountId: process.env.S3_ACCOUNT_ID,
    s3AccessKeyId: process.env.S3_ACCESS_KEY_ID,
    s3AccessKeySecret: process.env.S3_ACCESS_KEY_SECRET,
    s3Bucket: process.env.S3_BUCKET,
    emailServerHost: process.env.EMAIL_SERVER_HOST,
    emailServerPort: process.env.EMAIL_SERVER_PORT,
    emailServerUser: process.env.EMAIL_SERVER_USER,
    emailServerPassword: process.env.EMAIL_SERVER_PASSWORD,
    emailFrom: process.env.EMAIL_FROM
  },

  modules: [
    '@nuxtjs/tailwindcss',
    'nuxt-svgo',
    '@huntersofbook/naive-ui-nuxt',
    '@nuxt/image-edge',
    '@sidebase/nuxt-auth',
    '@vueuse/nuxt',
    'nuxt-icon'
  ],

  typescript: {
    shim: false
  },

  extends: ['@sidebase/core'],

  css: [
    '@/assets/css/override.css',
    '@/assets/css/markdown.css'
  ],

  routeRules: {
    // Does not change
    '/': { prerender: true },
    // Blog pages should be update when they are changed
    '/blog/*': { isr: 3600 },
    '/blog': { isr: 900 },
    // Client render contact us page to soft prevent bad email scrappers
    '/contact': { ssr: false },
    // Admin side could all be client-rendered
    '/admin/**': { ssr: false }
  },

  app: {
    head: {
      title: 'YSK Kyle Blog - The Blog For Kyle Smith',
      htmlAttrs: {
        lang: 'en'
      },
      meta: [
        { name: 'twitter:title', content: 'YSK Kyle Blog - The Blog For Kyle Smith' },
        { property: 'og:title', content: 'YSK Kyle Blog - The Blog For Kyle Smith' },
        { name: 'description', content: 'A blog to document various tech information. I talk about controversial opinions, beginner topics, and anything else programming related.' },
        { name: 'twitter:description', content: 'A blog to document various tech information. I talk about controversial opinions, beginner topics, and anything else programming related.' },
        { property: 'og:description', content: 'A blog to document various tech information. I talk about controversial opinions, beginner topics, and anything else programming related.' },
        { property: 'og:image', content: '/icons/landing-page.webp' },
        { property: 'og:image:height', content: '480' },
        { property: 'og:image:width', content: '640' },
        { property: 'og:image:type', content: 'image/webp' },
        { property: 'og:image:alt', content: 'Beautiful 3d rendering of the landing page to YSK Kyle Blog floating around a rainbow backdrop.' },
        { property: 'og:url', content: 'https://blog.yskkyle.com' },
        { property: 'og:type', content: 'website' },
        { property: 'og:site:name', content: 'YSK Kyle Blog' },
        { name: 'twitter:card', content: 'summary_large_image' },
        { name: 'twitter:creator', content: '@KyleSmith0905' },
        { name: 'twitter:image', content: '/icons/landing-page.webp' },
        { name: 'twitter:image:alt', content: 'Beautiful 3d rendering of the landing page to YSK Kyle Blog floating around a rainbow backdrop.' },
        { name: 'keywords', content: 'Programming, Blog, Technology, Technology, React, Angular, Vue' },
        { name: 'author', content: 'Kyle Smith' },
        { name: 'color-scheme', content: 'dark' },
        { name: 'msapplication-TileColor', content: '#ffffff' },
        { name: 'theme-color', content: '#000000' }
      ],
      link: [
        { rel: 'manifest', href: '/manifest.json' },
        { rel: 'icon', type: 'image/x-icon', href: '/icons/favicon.ico' },
        { rel: 'apple-touch-icon', href: '/icons/logo192.png' },
        { rel: 'preconnect', href: 'https://fonts.googleapis.com' },
        { rel: 'preconnect', href: 'https://fonts.gstatic.com', crossorigin: '' },
        { rel: 'stylesheet', href: 'https://fonts.googleapis.com/css2?family=Tilt+Warp&display=swap', media: 'print', onload: "this.media='all'" },
        { rel: 'stylesheet', href: 'https://fonts.googleapis.com/css2?family=Atkinson+Hyperlegible:ital,wght@0,400;0,700;1,400;1,700&display=swap', media: 'print', onload: "this.media='all'" }
      ]
    }
  },

  devtools: {
    enabled: true
  }
})
