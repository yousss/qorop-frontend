const express = require('express')
const app = express();
const compression = require('compression');
const consola = require('consola')
const path = require('path')
const conf = require(path.resolve('config'));
const REDIRECT301 = require(path.resolve('config', 'redirect', 'index.js'));

const host = process.env.HOST || '0.0.0.0'
const port = process.env.PORT || conf.port;

var router = require(path.resolve('server/routes'));

// view engine setup
app.set('views', path.join(__dirname, 'server/views'));
app.set('view engine', 'pug');

async function start () {
  app.use(express.json());
  app.use(express.urlencoded({ extended: false }));
  app.use(compression());
  app.use(express.static(path.join(__dirname, 'dist')));

  app.post('/', function (req, res, next) {
    res.redirect(301, '/');
  });

  app.use('/sitemap.xml', router.sitemap);
  app.use('/transaction', router.transaction);
  app.use('/jwlogs', router.jwlogs);
  app.use('/labsapi', router.labsapi);


  REDIRECT301.forEach(route => {
    let routeFrom = route.from.replace('^/', '/');
    let routeTo = route.to;
    app.get(routeFrom, function (req, res, next) {
      res.redirect(route.status, routeTo)
    })
  });

  app.use(function (req, res, next) {
    res.status(404);
    res.render('error/404');
  });

  // Listen the server
  app.listen(port, host);
  consola.ready({
    message: `Server listening on http://${host}:${port}`,
    badge: true
  })
}
start()