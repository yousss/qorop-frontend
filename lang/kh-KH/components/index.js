const path = require('path')
const locale = 'en-US'

const error = require(path.resolve(`lang/${locale}/components/error.js`))

module.exports = {
  'error': error
}