const esClient = require('./elasticClient');

const search = async function(obj){
    return await esClient.search(obj)
      .then(function(resp) {
          console.log(resp.hits.hits);
      }, function(err) {
          console.trace(err.message);
      });
}

module.exports = search
