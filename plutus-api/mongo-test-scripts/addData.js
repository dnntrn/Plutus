const express = require('express');
const models = require('../db.js');
const mongoose = require('mongoose');
const fs = require('fs');

function addData () {
  let data= fs.readFileSync('averagesTestData.json', 'utf8');
  console.log(data);
  data = JSON.parse(data);
  let tempData;
  for (let i = 0; i < data.length; i++) {
    console.log(data[i]);
    tempData = new Averages(data[i]);
    tempData.save(function(err, tempData){
      if (err) return console.error(err);
      console.log(tempData.companyName + " saved ");
    })

  }
}

addData();
