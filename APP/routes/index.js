var express = require('express');
var router = express.Router();
var apixu = require('../clients/apixu_client');

/* GET home page. */
router.get('/', function(req, res, next) {
  var apixuData = {};

  var getApixuData = function(data) {
    var apixuData = JSON.parse(data);

    renderReceivedData(apixuData);
  }

  apixu.currentWeather(20500, getApixuData);

  function renderReceivedData(data) {
    res.render('index', { forecast: data.location.name + ' ' + data.location.region });
  }
});

module.exports = router;
