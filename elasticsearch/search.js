const esClient = require('./elasticClient');

esClient.search({
    index: 'blog',
    type: 'posts',
    body: {
        query: {
            match: {
                "PostName": 'Node.js'
            }
        }
    }
}).then(function(resp) {
    console.log(resp);
}, function(err) {
    console.trace(err.message);
});
