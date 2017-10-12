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
  };

  //console.log('City: ' + req.query['City']); - TODO: check possibility of catch data from req

  apixu.currentWeather('Wroclaw', getApixuData);

  function renderReceivedData(data) {
    console.log(util.inspect(data, false, null));
    
    res.render('index', {
      vendor_apixu: 'Weather from Apixu API',
      condition_icon: data.current.condition.icon,
      condition_description: data.current.condition.text,
      temp_c: data.current.temp_c,
      wind_kph: data.current.wind_kph,
      humidity: data.current.humidity,
      name: data.location.name,
      country: data.location.country,
      update: data.current.last_updated,
      vendor_zupa: 'Zupa',
      vendor_zupa2: 'Zupa2'
    });
  }
});

module.exports = router;
