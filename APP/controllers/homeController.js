var apixu = require('../clients/apixu_client');

exports.getHomePage = function (req, res) {
  req.checkQuery('city', 'City not provided').notEmpty();
  var errors = req.validationErrors();

  if (errors) {
    var errorMessages = errors.map(function(error) {
      return error.msg + '<br>';
    });
    res.render('index', {
      vendor_apixu: 'Weather from Apixu API',
      vendor_zupa: 'Zupa',
      vendor_zupa2: 'Zupa2',
      message: errorMessages
    });

    return;
  }

  var city = req.query.city;

  var getApixuData = function (data) {
    var apixuData = JSON.parse(data);

    renderReceivedData(apixuData);
  };

  apixu.currentWeather(city, getApixuData);

  function renderReceivedData(data) {

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
      vendor_zupa2: 'Zupa2',
      city: city
    });
  }
};
