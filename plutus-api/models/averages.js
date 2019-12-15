const mongoose = require ('mongoose');
const Schema = mongoose.Schema;
const mongoosastic = require('mongoosastic');

const averagesSchema = new Schema({
  companyName: { type: String },
  positionTitle: { type: String },
  positionLevel: { type: String },
  averageSalary: { type: Number },
});

averagesSchema.plugin(mongoosastic, {
    "host": "localhost",
    "port": 9200
});


const Averages = mongoose.model("Averages", averagesSchema);

Averages.createMapping((err, mapping) => {
    console.log('mapping created');
});

module.exports = {
  Averages: Averages,
}
