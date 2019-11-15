const path = require('path');
const locale = 'en-US'

const apiAuth = require(path.resolve(`lang/${locale}/api/auth.js`))
const cmsAuth = require(path.resolve(`lang/${locale}/api/cms.js`))
const apiGames = require(path.resolve(`lang/${locale}/api/games.js`))
const apiMoney = require(path.resolve(`lang/${locale}/api/money.js`))
const apiPromotions = require(path.resolve(`lang/${locale}/api/promotions.js`))

module.exports = {
  "unCaught": "Sorry! could not process your request at the moment. Contact Customer Support.",
  "unKnown": "Unknown error on {name}! Error status: {status} Error Code: {code}",
  "error": "Something went wrong at the moment. Please try again later.",
  "unauthorized": "Session Expired, Logged in from another device.",
  "auth" : {...apiAuth},
  "cms" : {...cmsAuth},
  "games": {...apiGames},
  "money": {...apiMoney},
  "promotions": {...apiPromotions}
}