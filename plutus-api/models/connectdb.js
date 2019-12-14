const mongoose = require ('mongoose');

const connectDb = () => {
  return mongoose.connect('mongodb://localhost:9000');
};

module.exports = connectDb;
