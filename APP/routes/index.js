var express = require('express');
var router = express.Router();
var apixu = require('../clients/apixu_client');

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express', forecast: apixu.currentWeather(20500) });
});

module.exports = router;
