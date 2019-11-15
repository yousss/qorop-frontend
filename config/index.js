const path = require('path');

module.exports = Object.assign({
  port: 1333,
  websitename: 'jeetwin.com'
}, require(path.resolve(__dirname, `json/config.${process.env.NODE_ENV}.json`)))