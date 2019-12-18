const express = require('express');
const router = express.Router();

const path = require('path');
const conf = require(path.resolve('config'));

const axios = require('axios');

router.post('/add', async (req, res, next) => {
  try{
    let ip_address = req.headers['x-forwarded-for'] || req.connection.remoteAddress;
    ip_address = ip_address.split(':').reverse()[0];
    let user_agent = req.headers['user-agent'];
    let body = {
      ...req.body.data,
      ip_address,
      user_agent
    };
    let { data } = await axios.post(`${conf.cmsApi}/api/jw/logs?device=WEB`, body);
    res.status(200).json(data);
  }catch(e){
    res.status(400).send(e.response);
  }
})

module.exports = router;