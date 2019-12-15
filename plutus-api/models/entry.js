const mongoose = require ('mongoose');
const Schema = mongoose.Schema;
const mongoosastic = require('mongoosastic');
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
const entrySchema = new Schema({
  graduationYear: {type: Number },
  companyName: { type: String, required: true, es_indexed: true, },
  startDate: { type: Date },
  endDate: { type: Date },
  salary: { type: Number, es_indexed: true, },
  city: { type: String, es_indexed: true, },
  state: { type: String, es_indexed: true, },
  positionTitle: { type: String, required: true, es_indexed: true,},
  positionLevel: { type: String, required: true, es_indexed: true,},
  gpa: {type: Number },
  hireYear: {type: Number},
  degreeLevel: {type: String},
  companyDescription: {type: String, es_indexed: true},
});

entrySchema.plugin(mongoosastic, {
    "host": "localhost",
    "port": 9200
});

const Entry = mongoose.model("Entry", entrySchema);


Entry.createMapping((err, mapping) => {
    console.log('mapping created');
});


module.exports = {
  Entry: Entry,
}
