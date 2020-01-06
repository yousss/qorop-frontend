const colors = require('vuetify/es5/util/colors').default
const path = require("path");
const config = require(path.resolve("config"));
const envConfig = require(path.resolve("config", "env_config.js"));
const I18N = require(path.resolve("config", "I18n.js"));

module.exports = {
  mode: 'spa',
  /*
  ** Headers of the page
  */
  head: {
    titleTemplate: '%s - ' + process.env.npm_package_name,
    title: process.env.npm_package_name || '',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: process.env.npm_package_description || '' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
      { rel: 'stylesheet', href: 'https://cdnjs.cloudflare.com/ajax/libs/MaterialDesign-Webfont/4.0.96/css/materialdesignicons.css' },
      { rel: 'stylesheet', href: 'https://fonts.googleapis.com/css?family=Quicksand:300,400,500,700|Material+Icons' },
      { rel: 'stylesheet', href: 'https://fonts.googleapis.com/css?family=Quicksand&display=swap' },
      { rel: 'stylesheet', href: 'https://fonts.googleapis.com/css?family=Dancing+Script' }
    ]
  },
  /*
  ** Customize the progress-bar color
  */
  loading: {
    name: 'fading-circle',
    color: '#3B8070',
    background: 'white'
  },
  loadingIndicator: "~/spaLoader/fading-circle.html",
  /*
  ** Global CSS
  */
  css: [
    '~/assets/app.styl'
  ],
  /*
  ** Plugins to load before mounting the App
  */
  plugins: [
    // { src: '~plugins/vue-fb-customer-chat.js', ssr: false },
    { src: '~plugins/vue-core-image-upload.js', ssr: false },
    '~plugins/set-locale-onload',
    { src: '~plugins/jw-core-components', ssr: false },
    { src: '~plugins/vendor/axios', ssr: true },
    { src: '~plugins/vendor/client-vendor', ssr: true },
    { src: '~plugins/jwRedirect', ssr: true },
    { src: '~plugins/gtmEvent', ssr: true }
  ],
  /*
  ** Nuxt.js dev-modules
  */
  buildModules: [
    '@nuxtjs/vuetify',
    '@nuxtjs/axios',
    // '@nuxtjs/auth',
  ],
  /*
  ** Nuxt.js modules
  */
  modules: [
    ['nuxt-i18n', I18N],
    ['cookie-universal-nuxt', { alias: 'cookie', parseJSON: false }],
    ['nuxt-mq', {
      breakpoints: {
        sm: 450,
        xmd: 640,
        tab: 1025,
        md: 1250,
        lg: Infinity
      }
    }]
  ],
  // auth: {
  //   strategies: {
  //     local: {
  //       endpoints: {
  //         login: { url: '/api/auth/login', method: 'post', propertyName: 'token' },
  //         logout: { url: '/api/auth/logout', method: 'post' },
  //         user: { url: '/api/auth/user', method: 'get', propertyName: 'user' }
  //       },
  //       // tokenRequired: true,
  //       // tokenType: 'bearer'
  //     }
  //   }
  // },
  env: envConfig,
  router: {
    middleware: ["checklogin"]
  },
  /*
  ** vuetify module configuration
  ** https://github.com/nuxt-community/vuetify-module
  */
  vuetify: {
    customVariables: ['~/assets/variables.styl'],
    theme: {
      // dark: true,
      themes: {
        dark: {
          primary: colors.blue.darken2,
          accent: colors.grey.darken3,
          secondary: colors.amber.darken3,
          info: colors.teal.lighten1,
          warning: colors.amber.base,
          error: colors.deepOrange.accent4,
          success: colors.green.accent3
        }
      }
    }
  },

  axios: {
    baseURL: config.webUrl,
    browserBaseURL: "/",
    proxy: false
  },
  /*
  ** Build configuration
  */
  build: {
    /*
    ** You can extend webpack config here
    */
    extend (config, ctx) {
      if (ctx.isDev && ctx.isClient) {
        config.module.rules.push({
          enforce: "pre",
          test: /\.(js|vue)$/,
          loader: "eslint-loader",
          exclude: /(node_modules)/
        });
      }
    }
  },
  render: {
    csp: {
      hashAlgorithm: 'sha256',
      policies: {
        'script-src': [
          'https://www.google-analytics.com',
          'https://www.facebook.com'
        ],
        'report-uri': [
          'https://report.example.com/report-csp-violations'
        ]
      },
      addMeta: true
    }
  }

}
