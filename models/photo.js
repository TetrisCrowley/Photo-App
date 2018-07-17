const mongoose = require('mongoose');

const photoSchema = mongoose.Schema({
  name: String,
  body: String
});

module.exports = mongoose.model('Photo', photoSchema);