var express = require('express');
var router = express.Router();

// Controllers
var homeController = require('../controllers/homeController');

/* GET home page. */
router.get('/', homeController.getHomePage);

module.exports = router;
