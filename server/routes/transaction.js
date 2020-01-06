const express = require('express');
const router = express.Router();

router.post('/s99pay', function(req, res, next){
  res.render('transaction/s99pay', { data: req.body })
});

router.get('/:type', function(req, res, next){
  res.render('transaction/index', { data: req.query })
});

module.exports = router;