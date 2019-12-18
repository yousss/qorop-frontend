const path = require('path')
const locale = 'km-KH'

const error = require(path.resolve(`lang/${locale}/components/error.js`))
const product = require(path.resolve(`lang/${locale}/components/product.js`))

module.exports = {
  'error': error,
  'product': product
}