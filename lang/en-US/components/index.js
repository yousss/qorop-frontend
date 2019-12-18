const path = require('path')
const locale = 'en-US'

const product = require(path.resolve(`lang/${locale}/components/product.js`))
const games = require(path.resolve(`lang/${locale}/components/games.js`))
const login = require(path.resolve(`lang/${locale}/components/login.js`))
const drawer = require(path.resolve(`lang/${locale}/components/drawer.js`))
const footer = require(path.resolve(`lang/${locale}/components/footer.js`))
// const account = require(path.resolve(`lang/${locale}/components/account.js`))
const fronzen = require(path.resolve(`lang/${locale}/components/frozen.js`))
const poster = require(path.resolve(`lang/${locale}/components/poster.js`))
const netwin = require(path.resolve(`lang/${locale}/components/netwin.js`))
const error = require(path.resolve(`lang/${locale}/components/error.js`))
const custom = require(path.resolve(`lang/${locale}/components/custom.js`))
const jackpot = require(path.resolve(`lang/${locale}/components/jackpot.js`))

module.exports = {
  'product': product,
  'games': games,
  'login': login,
  'drawer': drawer,
  'footer': footer,
  'frozen': fronzen,
  // 'account': account,
  'poster': poster,
  'netwin': netwin,
  'error': error,
  'custom': custom,
  'jackpot': jackpot
}