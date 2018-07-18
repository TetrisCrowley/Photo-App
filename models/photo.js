const mongoose = require('mongoose');

const photoSchema = mongoose.Schema({
  name: String,
  date: Date,
  source: String
});

module.exports = mongoose.model('Photo', photoSchema);