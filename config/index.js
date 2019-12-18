const path = require('path');

module.exports = Object.assign({
  port: 1333,
  websitename: 'elaine.com'
}, require(path.resolve(__dirname, `config.${process.env.NODE_ENV}.js`)))