const esClient = require('./elasticClient');
const addmappingToIndex = async function(indexName, mapping){
    console.log(mapping);
    return await esClient.indices.putMapping({
        index: indexName,
        body: mapping
    });
}

module.exports = addmappingToIndex;


// test function to explain how to invoke.
async function test(){
    const mapping = {
        properties: {
            CompanyName: {
                type: "text",
                "fielddata": true,
            },
            Position: {
                type: "text",
                "fielddata": true,
            },
            JobLevel: {
                type: "text",
                "fielddata": true,
            },
            salary: {
                type: "long",
            },
            city: {
                type: "text",
                "fielddata": true,
            },
            state: {
                type: "text",
                "fielddata": true,
            },
            CompanyDescription: {
                type: "text"
            },
        }
    }
    try {
        const resp = await addmappingToIndex('company-review', mapping);
        console.log(resp);
    } catch (e) {
        console.log(e);
    }
}


test();
