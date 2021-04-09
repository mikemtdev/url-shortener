const mongoose = require('mongoose');

const UrlSchema = mongoose.Schema({
  url: String,
  clicks: Number,
  owner: String,
});

module.exports = mongoose.model(
  'UrlPost',
  UrlSchema
);
