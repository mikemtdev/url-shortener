const path = require('path');

// TODO! rm arry and send to database!

const url = [{ url: 'hsahdfdajkf' }];

exports.shortUrl = (req, res, next) => {
  res.sendFile(
    path.join(
      path.resolve() +
        `/app/views/${'shorturl'}.html`
    )
  );
};

exports.postUrl = (req, res, next) => {
  url.push({ title: req.body.url });
  res.send(req.body.url);
  return next;
};
