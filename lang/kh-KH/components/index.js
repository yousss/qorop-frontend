const path = require('path')
const locale = 'kh-KH'

const products = require(path.resolve(`lang/${locale}/components/products.js`))

module.exports = {
    "products": products
}