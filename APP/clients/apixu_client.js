http = require('http');

var apiKey = 'cacdf29dc2be47d484a105606152306'

var options = {
  host: 'api.apixu.com',
  port: 80,
  path: '/v1/current.json?key=' + apiKey + '&q=',
  method: 'GET'
};

exports.currentWeather = function currentWeather(query, callback){
	options.path = '/v1/current.json?key=' + apiKey + '&q=' + query;
	http.request(options, function(apixuRes) {
		var data = '';
	  apixuRes.setEncoding('utf8');
	  apixuRes.on('data', function (chunk) {
			console.log(chunk);
			data += chunk;
	  });
	  apixuRes.on('end', function (chunk) {
			// var apixuData = JSON.parse(data);
			// callback(apixuData);
			callback(data);
	  });
	}).on('error', function(err) {
        // handle errors with the request itself
        console.error('Error with the request:', err.message);
        callback(err);
    }).end();
}

exports.forecastWeather = function forecastWeather(query, noOfDays, callback){
	options.path = '/v1/forecast.json?key=' + apiKey + '&q=' + query + '&days=' + noOfDays;
	http.request(options, function(apixu_res) {
	  apixu_res.setEncoding('utf8');
	  apixu_res.on('data', function (chunk) {
		console.log(chunk);
	  });
	  apixu_res.on('end', function (chunk) {
	  });
	}).on('error', function(err) {
        // handle errors with the request itself
        console.error('Error with the request:', err.message);
        callback(err);
    }).end();
}