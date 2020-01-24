const en = require('../lang/en-US')
const kh = require('../lang/kh-KH')

const I18N = {
  locales: [
    { code: 'en', iso: 'en-US', name: 'English' },
    { code: 'kh', iso: 'kh-KH', name: 'Khmer' },
  ],

  seo: false,
  defaultLocale: 'kh',
  detectBrowserLanguage: false,
  vueI18n: {
    fallbackLocale: 'en',
    messages: { en, kh }
  },
  vuex: {
    moduleName: 'i18n',
    mutations: {
      setLocale: 'I18N_SET_LOCALE',
      setMessages: 'I18N_SET_MESSAGES'
    }
  }
}

module.exports = I18N
