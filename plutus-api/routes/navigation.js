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

//
// router.get('/recommendations', function(req, res, next) {
//   res.send("Recommendations is working.");
// });

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
