const pkg = require('./package')
const { getConfigForKeys } = require('./lib/config.js')
const ctfConfig = getConfigForKeys([
  'CTF_BLOG_POST_TYPE_ID',
  'CTF_SPACE_ID',
  'CTF_CDA_ACCESS_TOKEN'
])

const { createClient } = require('./plugins/contentful')
const cdaClient = createClient(ctfConfig)

module.exports = {
  /*
  ** Headers of the page
  */
  head: {
    title: 'NKTech',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: 'アウトプットをコツコツ積み上げるTechブログ' },
      { hid: "og:type", property: "og:type", content: "website" },
      {
        hid: "og:url",
        property: "og:url",
        content:
          "https://nktech.jp"
      },
      {
        hid: "og:title",
        property: "og:title",
        content: 'NKTech',
      },
      {
        hid: "og:description",
        property: "og:description",
        content: 'アウトプットをコツコツ積み上げるTechブログ',
      },
      {
        hid: "og:image",
        property: "og:image",
        content: "https://nktech.jp/cardImage.jpg",
      },
      {
        hid: "twitter:card",
        name: "twitter:card",
        content: "summary",
      },
      { hid: "twitter:site", name: "twitter:site", content: "@nkthkr_" },


    ],
    link: [
      { rel: 'stylesheet', type: 'image/x-icon', href: 'https://fonts.googleapis.com/css2?family=Noto+Sans+JP:wght@400;700&display=swap' },
      { rel: 'stylesheet', type: 'image/x-icon', href: 'https://fonts.googleapis.com/css?family=Roboto' },
      { rel: 'icon', type: 'image/x-icon', href: '/favicon/favicon.ico' },
      { rel: 'apple-touch-icon', sizes: "180x180", href: '/favicon/apple-touch-icon.png' },
      { rel: 'icon', type: 'image/png', sizes: "32x32", href: '/favicon/favicon-32x32.png' },
      { rel: 'icon', type: 'image/png', sizes: "16x16", href: '/favicon/favicon-16x16.png' },
      { rel: 'manifest', href: '/favicon/site.webmanifest' },
      { rel: 'mask-icon', href: '/favicon/safari-pinned-tab.svg', color: "#5bbad5" },
    ],
  },
  /*
  ** Customize the progress bar color
  */
  loading: { color: '#3B8070' },
  /*
  ** Build configuration
  */
  build: {
    /*
    ** Run ESLint on save
    */
    extend(config, { isDev, isClient }) {
      if (isDev && isClient) {
        config.module.rules.push({
          enforce: 'pre',
          test: /\.(js|vue)$/,
          loader: 'eslint-loader',
          exclude: /(node_modules)/
        })
      }
    }
  },
  /*
  ** Global CSS
  */
  css: [
    { src: '~/assets/_sass/common.scss', lang: 'scss' },
  ],
  modules: [
    'nuxt-fontawesome',
  ],

  generate: {
    fallback: true,
    routes() {
      return cdaClient
        .getEntries({ content_type: 'blogPost' })
        .then(entries => {
          return [...entries.items.map(entry =>
            `/${entry.fields.tag.fields.tagSlug}/${entry.fields.slug}`
          )]
        })
    }
  },

  env: {
    CTF_SPACE_ID: ctfConfig.CTF_SPACE_ID,
    CTF_CDA_ACCESS_TOKEN: ctfConfig.CTF_CDA_ACCESS_TOKEN,
    CTF_BLOG_POST_TYPE_ID: ctfConfig.CTF_BLOG_POST_TYPE_ID
  },

  plugins: [
    '~/plugins/contentful',
    '~/plugins/markdownit',
    '~/plugins/prism',
    '~plugins/vue-scrollto',
  ],

  fontawesome: {
    component: 'fa'
  },

}
