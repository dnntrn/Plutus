const mongoose = require ('mongoose');
const Schema = mongoose.Schema;

const averagesSchema = new Schema({
  companyName: { type: String },
  positionTitle: { type: String },
  positionLevel: { type: String },
  averageSalary: { type: Number },
});

const Averages = mongoose.model("Averages", averagesSchema);

module.exports = {
  Averages: Averages,
}
