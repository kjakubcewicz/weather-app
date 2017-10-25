var apixu = require('../clients/apixu_client');

exports.getHomePage = function (req, res) {
  req.checkQuery('city', 'City not provided').notEmpty();
  req.sanitizeQuery('city').trim();
  req.sanitizeQuery('city').escape();
  var errors = req.validationErrors();

  if (errors) {
    res.render('index', {
      vendor_apixu: 'Weather from Apixu API',
      vendor_zupa: 'Zupa',
      vendor_zupa2: 'Zupa2',
      errors: errors
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
      apixu_data: data,
      vendor_zupa: 'Zupa',
      vendor_zupa2: 'Zupa2',
      city: city
    });
  }
};
