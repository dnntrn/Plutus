const esClient = require('./elasticClient');


esClient.index({
    index: 'company-review',
    id: '2',
    type: 'text',
    body: {
        "CompanyName": "Microsoft",
        "CompanyDescription": "Cool company, lots of free snacks. Guy named Yair doesn't work here",
    }
}, function(err, resp, status) {
    console.log(resp);
});
