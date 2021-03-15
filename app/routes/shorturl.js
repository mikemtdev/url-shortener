const express = require('express');
const shortUrlController = require('../controllers/shorturl-controller');
const router = express.Router();

router.get(
  '',
  shortUrlController.shortUrl
);
router.post(
  '/shorturl ',
  shortUrlController.postUrl
);

module.exports = router;
