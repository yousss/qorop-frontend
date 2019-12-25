const express = require('express')
const app = express();
const { Nuxt, Builder } = require('nuxt')
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

// Import and Set Nuxt.js options
let config = require('./nuxt.config.js')
config.dev = !(process.env.mode === 'deploy')

async function start () {
  const nuxt = new Nuxt(config);

  if (config.dev) {
    const builder = new Builder(nuxt)
    await builder.build()
  }

  app.use(express.json());
  app.use(express.urlencoded({ extended: false }));

  app.post('/', function (req, res, next) {
    res.redirect(301, '/');
  });

  app.use('/sitemap.xml', router.sitemap);
  app.use('/jwlogs', router.jwlogs);
  app.use('/labsapi', router.labsapi);
  app.use('/placeHolder', router.post);

  REDIRECT301.forEach(route => {
    let routeFrom = route.from.replace('^/', '/');
    let routeTo = route.to;
    app.get(routeFrom, function (req, res, next) {
      res.redirect(route.status, routeTo)
    })
  });

  // Give nuxt middleware to express
  app.use(nuxt.render)

  // Listen the server
  app.listen(port, host);
  consola.ready({
    message: `Server listening on http://${host}:${port}`,
    badge: true
  })
}
start()