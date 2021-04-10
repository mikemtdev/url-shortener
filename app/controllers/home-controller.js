const path = require('path');
const shortUrl = require('../controllers/shorturl-controller');

const auth = require('../util/authentication');

exports.home = (req, res, next) => {
  res.render('home');
  return next;
};

exports.homePost = (req, res, next) => {
  const email = req.body.email;
  const password = req.body.password;
  if (auth(email, password)) {
    res.render('shorturl');
  } else {
    res.render('home');
  }

  return next;
};
