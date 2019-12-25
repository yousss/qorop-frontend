const path = require('path');

const sitemap = require(path.resolve('server/routes/sitemap.js'));
const jwlogs = require(path.resolve("server/routes/jwlogs.js"));
const labsapi = require(path.resolve('server/routes/labsapi.js'));
const post = require(path.resolve('server/routes/post.js'));

let route = {
  sitemap,
  jwlogs,
  labsapi,
  post
};

module.exports = route;