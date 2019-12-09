const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const uniqueValidator = require("mongoose-unique-validator");

// const Job = new Schema({
//   userID: {type: String, required: true, unique: true},
//   jobID: { type: String, required: true, unique: true },
//   startDate: { type: Date },
//   endDate: { type: Date },
//   positionTitle: { type: String, required: true},
//   positionLevel: { type: String, required: true},
// });
//
// const Company = new Schema({
//   companyID: {type: String, required: true, unique: true},
//   companyName: { type: String, required: true },
//   companySize: { type: Number },
// });
//
// const WorksHere = new Schema({
//   jobID: { type: String, required: true, unique: true },
//   companyID: { type: String, required: true },
// });


const UserSchema = new Schema({
  userID: {type: String, required: true, unique: true},
  firstName: {type: String, required: true},
  lastName: {type: String, required: true},
  graduationYear: {type: Number },
  jobs: [{
    companyName: { type: String, required: true },
    startDate: { type: Date },
    endDate: { type: Date },
    positionTitle: { type: String, required: true},
    positionLevel: { type: String, required: true},
  }],
  gpa: {type: Number }
});


const User = mongoose.model("User", UserSchema);
// const Job = mongoose.model("Job", Job);
// const Company = mongoose.model("Company", Company);

module.exports = {
  User: User,
  // Job: Job,
  // Company: Company,
}
