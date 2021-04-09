const path = require('path');
const dbUrlPost = require('../data/connect-database');
// TODO! rm arry and send to database!
const urlConDebug = require('debug')(
  '*'
);
exports.shortUrl = (req, res, next) => {
  res.sendFile(
    path.join(
      path.resolve() +
        `/app/views/${'shorturl'}.html`
    )
  );
  return next;
};
exports.postUrl = (req, res, next) => {
  dbUrlPost(req.body.url);
  res.send(req.body.url);
  return next;
};
