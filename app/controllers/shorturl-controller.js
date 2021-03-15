const path = require('path');

exports.shortUrl = (req, res, next) => {
  res.sendFile(
    path.join(
      path.resolve() +
        '/app/views/home.html'
    )
  );
};

exports.postUrl = (req, res, next) => {
  res.send(req.body);
  console.log(req.body);
  return next;
};
