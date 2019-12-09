const express = require('express');
const router = express.Router();
const filterData = require('../controllers/dashboard');
const esClient = require('../../elasticsearch/elasticClient.js');


/* GET home page. */
router.get('/', function(req, res, next) {
  res.send("API is connected to frontend");
});

router.get('/dashboard', function(req, res, next) {
  res.send("Dashboard is working.");
});

router.post('/addASalary', function(req, res, next) {

  const {
    companyName,
    positionTitle,
    positionLevel,
    hireYear,
    experience,
    positionLocation,
    gradYear,
    salary,
    degreeLevel,
  } = req.body

  const locationArr = positionLocation.split(",");
  const city = locationArr[0];
  const state = locationArr[1];
  const uuidv4 = require('uuid/v4');

  console.log(req.body)
  esClient.index({
      index: 'company-review',
      id: uuidv4(),
      body: {
          "CompanyName": companyName,
          "Position": positionTitle,
          "JobLevel": positionLevel,
          "salary": salary,
          "city": city,
          "state": state,
          "CompanyDescription": experience,
      }
  }, function(err, resp, status) {
      console.log(resp);
  });
});



router.get('/recommendations', function(req, res, next) {
  const { jobLevel, minSalary, keywords } = req.query;

  esClient.search({
      index: 'company-review',
      body: {
          query: {
              match: {
                  "CompanyDescription": keywords
              }
          }
      }
  }).then(function(resp) {
      res.json(resp.hits.hits);
  }, function(err) {
      console.trace(err.message);
  }).catch(function(err){
    console.log(err)
  })


});



module.exports = router;
