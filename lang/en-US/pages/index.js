const path = require('path')
const locale = 'en-US'

const links = require(path.resolve(`lang/${locale}/pages/links.js`))
const about = require(path.resolve(`lang/${locale}/pages/about.js`))

module.exports = {
    "links": links,
    "about": about
}