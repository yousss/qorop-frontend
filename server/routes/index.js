const path = require('path');

const sitemap = require(path.resolve('server/routes/sitemap.js'));
const jwlogs = require(path.resolve("server/routes/jwlogs.js"));
const labsapi = require(path.resolve('server/routes/labsapi.js'));
const post = require(path.resolve('server/routes/post.js'));
const transaction = require(path.resolve('server/routes/transaction.js'));

let route = {
  sitemap,
  jwlogs,
  labsapi,
  post,
  transaction
};

module.exports = route;