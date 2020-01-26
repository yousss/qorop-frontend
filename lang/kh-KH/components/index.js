const path = require("path");
const locale = "kh-KH";

const products = require(path.resolve(`lang/${locale}/components/products.js`));
const auth = require(path.resolve(`lang/${locale}/components/auth.js`));

module.exports = {
  products: products,
  auth: auth
};
