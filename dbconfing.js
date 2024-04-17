const mongoose = require('mongoose')

function dbconnect() {
    mongoose.connect('mongodb+srv://koratkrupa:krupa8326@atlascluster.wryz3ca.mongodb.net/studentData')
  .then(() => console.log('Connected!'));
}

module.exports = dbconnect;
