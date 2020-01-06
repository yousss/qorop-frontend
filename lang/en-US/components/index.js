const path = require('path')
const locale = 'en-US'

const products = require(path.resolve(`lang/${locale}/components/products.js`))

module.exports = {
    "products": products
}