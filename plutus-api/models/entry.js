const mongoose = require ('mongoose');
const Schema = mongoose.Schema;

const entrySchema = new Schema({
  userID: {type: String, required: true},
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


const Entry = mongoose.model("Entry", entrySchema);

module.exports = {
  Entry: Entry,
}
