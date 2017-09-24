var express = require('express');
var router = express.Router();
var apixu = require('../clients/apixu_client');

/* GET home page. */
router.get('/', function(req, res, next) {
  // var apiKey = 'cacdf29dc2be47d484a105606152306'
  
  // var options = {
  //   host: 'api.apixu.com',
  //   port: 80,
  //   path: '/v1/current.json?key=' + apiKey + '&q=',
  //   method: 'GET'
  // };
  
  //   options.path = '/v1/current.json?key=' + apiKey + '&q=' + 20500;
  //   http.request(options, function(res2) {
  //     var body = '';
  //     res2.setEncoding('utf8');
  //     res2.on('data', function (chunk) {
  //       console.log(chunk);
  //       body += chunk;
  //     });
  //     res2.on('end', function (chunk) {
  //       var json = JSON.parse(body);
  //       res.render('index', { title: 'Express', forecast: json.location.name } );
  //     });
  //   }).on('error', function(err) {
  //         // handle errors with the request itself
  //         console.error('Error with the request:', err.message);
  //         callback(err);
  //     }).end();

  var apixuData = {};

  console.log('PRZED: ' + apixuData);

  var getApixuData = function(data) {
    apixuData = data;
    console.log('PO: ' + apixuData);
  }

  var data = apixu.currentWeather(20500, getApixuData);
  console.log('DATA Z WYWOŁANIA FUNKCJI: ' + data);

  res.render('index', { title: 'Express', forecast: 'tu trafi wartosc ze zwróconego obiektu, np. apixuData.location.name' });
});

module.exports = router;
