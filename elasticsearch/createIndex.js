const esClient = require('./elasticClient');
const createIndex = async function(indexName){
    return await esClient.indices.create({
        index: indexName
    });
}

module.exports = createIndex;

async function test(){
    try {
        const resp = await createIndex('company-review');
        console.log(resp);
    } catch (e) {
        console.log(e);
    }
}
test();
