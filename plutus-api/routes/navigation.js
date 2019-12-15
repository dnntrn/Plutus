const express = require('express');
const router = express.Router();
const filterData = require('../controllers/dashboard');
const esClient = require('../../elasticsearch/elasticClient.js');
const models = require('../models/index');
const Entry = models.models.Entry.Entry;
/* GET home page. */
router.get('/', function(req, res, next) {
  res.send("API is connected to frontend");
});

router.get('/dashboard', function(req, res) {
  const { companyName, positionTitle, positionLevel } = req.query;

  const query = {
    positionTitle: positionTitle,
  }

  if (companyName.length > 0) {
    query.companyName = companyName;
  }

  if (positionLevel.length > 0) {
    query.positionLevel = positionLevel;
  }

  Averages.find({}, function(err, varToStoreResult) {
    if (err){
      console.log(err);
    } else{
      console.log(varToStoreResult)
      res.json(varToStoreResult);
    }
  });

  console.log("nada")
  res.json({});

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

  const locationArr = positionLocation.split(", ");
  const city = locationArr[0];
  const state = locationArr[1];
  const uuidv4 = require('uuid/v4');

  console.log(req.body)

  const tempEntryObj = new Entry({
      "companyName": companyName,
      "positionTitle": positionTitle,
      "positionLevel": positionLevel,
      "hireYear": hireYear,
      "companyDescription": experience,
      "city": city,
      "state": state,
      "salary": salary,
      "degreeLevel": degreeLevel,
  });


  tempEntryObj.save(function(err){
    if (err) {
      console.log(err);
    }
    console.log(" saved ");
  })

  tempEntryObj.on('es-indexed', (err, result) => {
      console.log(result);
      console.log('indexed to elastic search');
  });



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
  const { jobRole, jobLevel, city, state, minSalary, keywords } = req.query;

  console.log(jobRole)

  let matchArr = [
    { "match": { "Position": jobRole }},
    { "match": { "JobLevel": jobLevel }},
  ]

  if (city) {
    matchArr.push({ "match": { "city": city }})
  }

  if (state) {
    matchArr.push({ "match": { "state": state }})
  }

  if (keywords) {
    matchArr.push({ "match": { "CompanyDescription": keywords }})
  }


  // const queryE = {
  //       "bool" : {
  //             "must": matchArr,
  //             "filter": [
  //                 { "range": { "salary": { "gte": minSalary }}}
  //               ]
  //         },
  // }


  // Entry.search(queryE, function(err, entries) {
  //   if (err) {
  //       console.log(err)
  //   } else {
  //     var results = entries.hits.hits;
  //     console.log(entries);
  //     res.json(entries.hits.hits);
  //     //work with your hits
  //   }
  //
  //
  // })

  // models.models.Entry.Entry.search({
  //     index: 'entrys',
  //     body: {
  //       "sort" : [
  //           "_score"
  //       ],
  //       query: {
  //         "bool" : {
  //               "must": matchArr,
  //               "filter": [
  //                   { "range": { "salary": { "gte": minSalary }}}
  //                 ]
  //           },
  //       },
  //     "aggs": {
  //         "group_by_company": {
  //           "terms": {
  //             "field": "CompanyName",
  //           },
  //
  //           "aggs": {
  //               "averages": {
  //                 "avg": {
  //                   "field": "salary",
  //                 },
  //               },
  //             },
  //         },
  //
  //       },
  //     }
  // }


  esClient.search({
      index: 'company-review',
      body: {
        query: {
          "bool" : {
                "must": matchArr,
                "filter": [
                    { "range": { "salary": { "gte": minSalary }}}
                  ]
            },
        },
      "aggs": {
          "group_by_company": {
            "terms": {
              "field": "CompanyName",
              "order": {"avg_score": "desc"}
            },

            "aggs": {
                "avg_score": {
                  "avg": {
                    "script": "_score",
                  },
                },

                "average_salary": {
                  "avg": {
                    "field": "salary",
                  },
                },
              },
          },

        },
      }
  }
  ).then(function(resp) {
      res.json(resp.hits.hits);
  }, function(err) {
      console.trace(err.message);
  }).catch(function(err){
    console.log(err)
  })


});



module.exports = router;
