const mongoose = require ('mongoose');
const Entry = require ('./entry');
const Averages = require ('./averages');

const models = { Entry, Averages };
module.exports = {
  models: models,
}
