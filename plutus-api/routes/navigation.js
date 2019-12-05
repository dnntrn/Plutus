const express = require('express');
const router = express.Router();
const filterData = require('../controllers/dashboard');

/* GET home page. */
router.get('/', function(req, res, next) {
  res.send("API is connected to frontend");
});

router.get('/dashboard', function(req, res, next) {
  res.send("Dashboard is working.");
});

router.get('/recommendation', function(req, res, next) {
  res.send("Search/Recommendation Page");
});


module.exports = router;
