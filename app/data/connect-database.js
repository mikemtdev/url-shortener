const mongoose = require('mongoose');
const {
  post,
} = require('../routes/shorturl');
require('dotenv').config();
const dbDebug = require('debug')('*');
const connectUrl = process.env.DB_HOST;
// dbDebug(connectUrl);

const UrlPost = require('./models/schema');

const connect = mongoose.connect(
  connectUrl,

  {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  }
);

connect;
const dbUrlPost = async (url) => {
  dbDebug('Database:', url);
  const postUrl = new UrlPost({
    url: url,
  });

  await postUrl.save();
};

module.exports = dbUrlPost;
