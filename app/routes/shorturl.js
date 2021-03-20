const express = require('express');
const shortUrlController = require('../controllers/shorturl-controller');
const router = express.Router();

router.get(
  '',
  shortUrlController.shortUrl
);
router.post(
  '/shorturlGen',
  shortUrlController.postUrl
);

module.exports = router;
