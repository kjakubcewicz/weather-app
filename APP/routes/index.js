var express = require('express');
var router = express.Router();
var apixu = require('../clients/apixu_client');
var util = require('util');

/* GET home page. */
router.get('/', function(req, res, next) {
  var apixuData = {};

  var getApixuData = function(data) {
    var apixuData = JSON.parse(data);

    renderReceivedData(apixuData);
  }

  apixu.currentWeather(20500, getApixuData);

  function renderReceivedData(data) {
    console.log(util.inspect(data, false, null));
    
    res.render('index', {
      vendor_apixu: 'Weather from Apixu API',
      forecast: data.location.name + ' ' + data.location.region,
      name: data.location.name,
      country: data.location.country,
      temp_c: data.current.temp_c,
      wind_kph: data.current.wind_kph,
      humidity: data.current.humidity,
      condition_description: data.current.condition.text,
      condition_icon: data.current.condition.icon,
      vendor_zupa: 'Zupa',
      vendor_zupa2: 'Zupa2'
    });
  }
});

module.exports = router;
