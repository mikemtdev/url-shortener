const logger = require('debug')('*');
const user = require('../data/const');

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

module.exports = auth;
