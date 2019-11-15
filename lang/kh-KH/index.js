const path = require('path')
const locale = 'kh-KH'

const component = require(path.resolve(`lang/${locale}/components/index.js`))
const api = require(path.resolve(`lang/${locale}/api/index.js`))
const page = require(path.resolve(`lang/${locale}/pages/index.js`))
const meta = require(path.resolve(`lang/${locale}/meta/index.js`))

let lang = {
  ...component,
  ...page,
  'meta': meta,
  'api': api,
  'currency': 'THB. {0}',
  'number': '{0}',
  'currencySign': 'THB ',
  'RP': 'RP'
}

module.exports = lang