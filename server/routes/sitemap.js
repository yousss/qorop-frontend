const express = require('express');
const router = express.Router();

const path = require('path');
const conf = require(path.resolve('config'));

const sm = require('sitemap');
const axios = require('axios');

router.get('/', async function (req, res, next) {
  try{
    let { data: { data }} = await axios.post(`${conf.ApiHost}/promotion/getList`, { device: 0 });
    let promotionUrl = [];

    data.forEach(element => {
      if(element.type===1 || element.type===2){
        let slug = element.name.split('|')[0].trim().toLowerCase() || element.name.trim().toLowerCase()
        slug = encodeURI(slug);
        promotionUrl.push({url:`/promotionDetail?name=${slug}`, changefreq: 'weekly', priority: 0.8});
        promotionUrl.push({url:`/en/promotionDetail?name=${slug}`, changefreq: 'weekly', priority: 0.8});  
      }
    })


    let hostname = `${conf.webUrl}`;
    var sitemap = sm.createSitemap({
      hostname,
      cacheTime: 600000,        // 600 sec - cache purge period
      urls: [
        { url: '/', changefreq: 'weekly', priority: 0.5 },
        { url: '/en', changefreq: 'weekly', priority: 0.5 },
        { url: '/Casino-Live', changefreq: 'weekly', priority: 0.8 },
        { url: '/en/Casino-Live', changefreq: 'weekly', priority: 0.8 },
        { url: '/Slots', changefreq: 'weekly', priority: 0.8 },
        { url: '/en/Slots', changefreq: 'weekly', priority: 0.8 },
        { url: '/Fish-Games', changefreq: 'weekly', priority: 0.8 },
        { url: '/en/Fish-Games', changefreq: 'weekly', priority: 0.8 },
        { url: '/Other-Games', changefreq: 'weekly', priority: 0.8 },
        { url: '/en/Other-Games', changefreq: 'weekly', priority: 0.8 },
        { url: '/promotions', changefreq: 'weekly', priority: 0.8 },
        { url: '/en/promotions', changefreq: 'weekly', priority: 0.8 },
        { url: '/Terms-Condition', changefreq: 'monthly', priority: 0.7 },
        { url: '/en/Terms-Condition', changefreq: 'monthly', priority: 0.7 },
        { url: '/ContactUs', changefreq: 'weekly', priority: 0.7 },
        { url: '/en/ContactUs', changefreq: 'weekly', priority: 0.7 },
        { url: '/FAQ', changefreq: 'monthly', priority: 0.4 },
        { url: '/en/FAQ', changefreq: 'monthly', priority: 0.4 },
        { url: '/affiliate', changefreq: 'monthly', priority: 0.5 },
        { url: '/en/affiliate', changefreq: 'monthly', priority: 0.5 },
        { url: '/SignUp', changefreq: 'weekly', priority: 0.8 },
        { url: '/en/SignUp', changefreq: 'weekly', priority: 0.8 },
        { url: '/99Club', changefreq: 'weekly', priority: 0.6 },
        { url: '/en/99Club', changefreq: 'weekly', priority: 0.6 },
        { url: '/disconnection', changefreq: 'monthly', priority: 0.4 },
        { url: '/en/disconnection', changefreq: 'monthly', priority: 0.4 },
        { url: '/Privacy-Policy', changefreq: 'monthly', priority: 0.4 },
        { url: '/en/Privacy-Policy', changefreq: 'monthly', priority: 0.4 },
        // { url: '/survey', changefreq: 'weekly', priority: 0.6 },    
        // { url: '/en/survey', changefreq: 'weekly', priority: 0.6 },    
        // { url: '/tournament', changefreq: 'monthly', priority: 0.4 },
        // { url: '/en/tournament', changefreq: 'monthly', priority: 0.4 },
        // { url: '/Sunny-Leone', changefreq: 'weekly', priority: 0.6 },
        // { url: '/99Shop', changefreq: 'monthly', priority: 0.4 },
        // { url: '/hi/Sunny-Leone', changefreq: 'weekly', priority: 0.6 },
        // { url: '/hi/99Shop', changefreq: 'monthly', priority: 0.4 },
        ...promotionUrl
      ]
    });

    sitemap.toXML(function (err, xml) {
      if (err) {
        return res.status(500).end();
      }
      res.header('Content-Type', 'application/xml');
      res.send(xml);
    });
  }catch(err){
    console.log('sitemap err',err.message)
    res.send('failed to generate sitemap')
  }
})

module.exports = router;