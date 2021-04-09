const express = require('express');
const shortUrlController = require('../controllers/shorturl-controller');
const router = express.Router();

router.get(
  '',
  shortUrlController.shortUrl
);
router.post(
  '/short_url_gen',
  shortUrlController.postUrl
);

module.exports = router;
