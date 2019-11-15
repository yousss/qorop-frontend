const path = require('path')
const locale = 'en-US'

const home = require(path.resolve(`lang/${locale}/pages/home.js`))
const signUp = require(path.resolve(`lang/${locale}/pages/signUp.js`))
const contact = require(path.resolve(`lang/${locale}/pages/contact.js`))
const disconnection = require(path.resolve(`lang/${locale}/pages/disconnection.js`))
const club99 = require(path.resolve(`lang/${locale}/pages/99Club.js`))
const affiliates = require(path.resolve(`lang/${locale}/pages/affiliates.js`))
const faq = require(path.resolve(`lang/${locale}/pages/faq.js`))
const promotions = require(path.resolve(`lang/${locale}/pages/promotions.js`))
const sunny = require(path.resolve(`lang/${locale}/pages/sunny.js`))
const privacy = require(path.resolve(`lang/${locale}/pages/privacyPolicy.js`))
const terms = require(path.resolve(`lang/${locale}/pages/termsCondition.js`))
const newsletter = require(path.resolve(`lang/${locale}/pages/newsletter.js`))
const shop99 = require(path.resolve(`lang/${locale}/pages/99Shop.js`))
const responsibleGambling = require(path.resolve(`lang/${locale}/pages/responsibleGambling.js`))
const downloadApp = require(path.resolve(`lang/${locale}/pages/downloadApp.js`))
const tournament = require(path.resolve(`lang/${locale}/pages/tournament.js`))
const welcome = require(path.resolve(`lang/${locale}/pages/welcome.js`))


const deposit = require(path.resolve(`lang/${locale}/pages/account/deposit.js`))
const withdraw = require(path.resolve(`lang/${locale}/pages/account/withdraw.js`))
const wallet = require(path.resolve(`lang/${locale}/pages/account/wallet.js`))
const profile = require(path.resolve(`lang/${locale}/pages/account/profile.js`))
const statement = require(path.resolve(`lang/${locale}/pages/account/statement.js`))
const message = require(path.resolve(`lang/${locale}/pages/account/message.js`))
const accClub99 = require(path.resolve(`lang/${locale}/pages/account/99Club.js`))
const accPromotions = require(path.resolve(`lang/${locale}/pages/account/promotions.js`))
const luckyDraw = require(path.resolve(`lang/${locale}/pages/account/luckyDraw.js`))

module.exports = {
  'home': home,
  'signUp': signUp,
  'contact': contact,
  'promotions': promotions,
  'sunny': sunny,
  'privacy': privacy,
  'terms': terms,
  'disconnection': disconnection,
  '99Club': club99,
  'aff': affiliates,
  'faq': faq,
  'newsletter': newsletter,
  '99Shop': shop99,
  'responsibleGambling': responsibleGambling,
  'downloadApp': downloadApp,
  'tournament': tournament,
  'welcome': welcome,
  
  'deposit': deposit,
  'withdraw': withdraw,
  'wallet': wallet,
  'profile': profile,
  'statement': statement,
  'message': message,
  'acc99Club': accClub99,
  'accPromotion': accPromotions,
  'accLuckyDraw': luckyDraw
}