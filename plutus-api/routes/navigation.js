const express = require('express');
const router = express.Router();
const filterData = require('../controllers/dashboard');
const search = require('../../elasticsearch/search.js');
const es = require('elasticsearch');


/* GET home page. */
router.get('/', function(req, res, next) {
  res.send("API is connected to frontend");
});

router.get('/dashboard', function(req, res, next) {
  res.send("Dashboard is working.");
});

router.post('/recommendations', function(req, res, next) {
  console.log("hello");
  // const { jobLevel, minSalary, keywords } = req.body;
  console.log(req.body);


  search ({
      index: 'blog',
      type: 'posts',
      body: {
          query: {
              match: {
                  "PostName": 'Node.js'
              }
          }
      }
  });

  res.send("Search/Recommendation Page");
});



module.exports = router;
