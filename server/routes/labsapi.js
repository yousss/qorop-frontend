const express = require('express');
const router = express.Router();

const path = require('path');
const conf = require(path.resolve('config'));

const axios = require('axios');

router.post('/getMemberTier', async (req, res, next) => {
  try{
    let { data } = await axios.post(`${conf.labsApi}/jeetprivilege/member/tier`, req.body);
    res.send(data);
  }catch(e){
    res.status(400).send(e.response.data);
  }
})

router.post('/checkCreditTransferEligible', async (req, res, next) => {
  try{
    let { data } = await axios.post(`${conf.labsApi}/payment/creditcard/whitelist/verify`, req.body);
    res.send(data);
  }catch(e){
    res.status(400).send(e.response.data);
  }
})

router.post('/checkEasyPayWhitelist', async (req, res, next) => {
  try{
    let { data } = await axios.post(`${conf.labsApi}/payment/onlinebanking/whitelist/verify`, req.body);
    res.send(data);
  }catch(e){
    res.status(400).send(e.response.data);
  }
})

module.exports = router;