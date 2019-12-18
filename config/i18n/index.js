const en = require('../../lang/en-US')
const km = require('../../lang/km-KH')

const I18N = {
  locales: [
    { code: 'en', iso: 'en-US', name: 'English' },
    { code: 'km', iso: 'km-KH', name: 'Khmer' }
  ],
  seo: false,
  defaultLocale: 'en',
  detectBrowserLanguage: false,
  vueI18n: {
    fallbackLocale: 'en',
    messages: { en, km }
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
