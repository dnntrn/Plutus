const mongoose = require ('mongoose');
const Schema = mongoose.Schema;

const companySchema = new Schema({
  companyName: { type: String },
  companyNameLower: { type: String },
});

const Company = mongoose.model("Companies", companySchema);


module.exports = {
  Company: Company,
}
