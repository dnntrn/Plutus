const mongoose = require ('mongoose');
const Entry = require ('./entry');
const Averages = require ('./averages');
const Company = require ('./company');

const models = { Entry, Averages, Company };
module.exports = {
  models: models,
}
