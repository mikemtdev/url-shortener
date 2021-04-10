const mongoose = require('mongoose');

const UrlSchema = mongoose.Schema({
  url: {
    type: String,
    required: true,
  },
  clicks: Number,
  owner: String,
});

let UrlObject = (module.exports = mongoose.model(
  'UrlPost',
  UrlSchema
));
