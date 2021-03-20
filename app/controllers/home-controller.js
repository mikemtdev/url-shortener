const path = require('path');
const shortUrl = require('../controllers/shorturl-controller');
const logger = require('debug')('*');
const user = {
  userEmail: 'mikemnjovu@gmail.com',
  userPassword: 1324,
};
const auth = (email, password) => {
  if (email) {
    if (password) {
      if (email === user.userEmail) {
        if (
          user.userPassword == password
        ) {
          return true;
        } else {
          logger('Wrong password');
          return;
        }
      } else {
        logger('Wrong email');
        return;
      }
    } else {
      logger('No Password');
      return;
    }
  } else {
    logger('No email');
    return;
  }
};

exports.home = (req, res, next) => {
  res.sendFile(
    path.join(
      path.resolve() +
        `/app/views/${'home'}.html`
    )
  );
  return next;
};

exports.homePost = (req, res, next) => {
  const email = req.body.email;
  const password = req.body.password;
  if (auth(email, password)) {
    res.sendFile(
      path.join(
        path.resolve() +
          `/app/views/${'shorturl'}.html`
      )
    );
  }

  return next;
};
