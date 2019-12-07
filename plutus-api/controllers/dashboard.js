const mongoose = require("mongoose");

exports.dashboardFilter = function dashboardFilter(positionTitle, positionLevel, companyList = [], gpa = -1) {
  const Job = mongoose.model('Job');
  const User = mongoose.model('User');

  if (gpa > -1) {
    User.find({
      "jobs.companyName": { $in: companyList },
      "gpa": gpa,
      "jobs.positionTitle": positionTitle,
      "jobs.positionLevel": positionLevel,
    }, function(err, result) {
      if (err) {
        console.log(err);
      }
    });
  } else {
    User.find({
      "jobs.companyName": { $in: companyList },
      "jobs.positionTitle": positionTitle,
      "jobs.positionLevel": positionLevel,
    }, function(err, result) {
      if (err) {
        console.log(err);
      }
    });
  }

};
