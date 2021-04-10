const path = require('path');
const dbUrlPost = require('../data/connect-database');
// TODO! rm arry and send to database!
// const urlConDebug = require('debug')(
//   '*'
// );
const UrlObject = require('../data/models/schema');
const controllerDebug = require('debug')(
  '*'
);

exports.shortUrl = (req, res, next) => {
  UrlObject.find({}, (err, urlobj) => {
    if (err) {
      controllerDebug(
        'Controller Home: Error',
        err
      );
    } else {
      controllerDebug(urlobj);
      res.render('shorturl', {
        fulllink: urlobj,
      });
    }
  });
  return next;
};
exports.postUrl = (req, res, next) => {
  dbUrlPost(req.body.url);
  res.redirect('/shorturl');
  return next;
};
