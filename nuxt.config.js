const path = require("path");
const config = require(path.resolve("config"));
const envConfig = require(path.resolve("config", "env_config.js"));
const I18N = require(path.resolve("config", "I18n.js"));

module.exports = {
  mode: "spa",
  /*
   ** Headers of the page
   */
  head: {
    titleTemplate: "%s - " + process.env.npm_package_name,
    title: process.env.npm_package_name || "",
    meta: [
      { charset: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      {
        hid: "description",
        name: "description",
        content: process.env.npm_package_description || ""
      }
    ],
    link: [
      { rel: "icon", type: "image/x-icon", href: "/favicon.ico" },
      {
        rel: "stylesheet",
        href:
          "https://cdnjs.cloudflare.com/ajax/libs/MaterialDesign-Webfont/4.0.96/css/materialdesignicons.css"
      },
      {
        rel: "stylesheet",
        href:
          "https://fonts.googleapis.com/css?family=Quicksand:300,400,500,700|Material+Icons"
      },
      {
        rel: "stylesheet",
        href: "https://fonts.googleapis.com/css?family=Quicksand&display=swap"
      },
      {
        rel: "stylesheet",
        href: "https://fonts.googleapis.com/css?family=Dancing+Script"
      }
    ],
    script: [
      { src: "/inject/chatButton.js", type: "text/javascript", body: true }
    ]
  },
  /*
   ** Customize the progress-bar color
   */
  loading: {
    name: "fading-circle",
    color: "#3B8070",
    background: "white"
  },
  loadingIndicator: "~/spaLoader/fading-circle.html",
  /*
   ** Global CSS
   */
  css: ["~/assets/app.styl"],
  /*
   ** Plugins to load before mounting the App
   */
  plugins: [
    "~plugins/vendor/ssr-vendor",
    "~/plugins/vendor/axios",
    "~plugins/set-locale-onload",
    "~plugins/jw-core-components",
    "~plugins/jw-core-components",
    "~plugins/vendor/client-vendor",
    "~plugins/jwRedirect",
    "~plugins/jwMoment"
  ],
  /*
   ** Nuxt.js dev-modules
   */
  buildModules: [
    "@nuxtjs/vuetify",
    "@nuxtjs/axios"
    // '@nuxtjs/auth',
  ],
  /*
   ** Nuxt.js modules
   */
  modules: [
    ["nuxt-i18n", I18N],
    ["cookie-universal-nuxt", { alias: "cookie", parseJSON: false }],
    [
      "nuxt-mq",
      {
        breakpoints: {
          sm: 450,
          xmd: 640,
          tab: 1025,
          md: 1250,
          lg: Infinity
        }
      }
    ]
  ],

  env: envConfig,
  router: {
    middleware: ["authenticated"]
  },
  /*
   ** vuetify module configuration
   ** https://github.com/nuxt-community/vuetify-module
   */

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
    extend(config, ctx) {
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
      hashAlgorithm: "sha256",
      policies: {
        "script-src": [
          "https://www.google-analytics.com",
          "https://www.facebook.com"
        ],
        "report-uri": ["https://report.example.com/report-csp-violations"]
      },
      addMeta: true
    }
  }
};
