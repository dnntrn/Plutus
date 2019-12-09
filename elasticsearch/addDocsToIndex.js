const esClient = require('./elasticClient');


esClient.index({
    index: 'company-review',
    id: '1',
    body: {
        "CompanyName": "Google",
        "Position": "Software Engineer",
        "JobLevel": "entry level",
        "salary": 120000,
        "city": "Seattle",
        "state": "Washington",
        "CompanyDescription": "Good company, free snacks. Guy named Yair doesn't work here",
    }
}, function(err, resp, status) {
    console.log(resp);
});
