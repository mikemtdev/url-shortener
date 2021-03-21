const path = require('path');
const shortUrl = require('../controllers/shorturl-controller');

const auth = require('../util/authentication');

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

// module.exports = auth;
