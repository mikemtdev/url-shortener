const express = require('express');
const router = express.Router();
const landingPageController = require('../controllers/home-controller');

router.get(
  '',
  landingPageController.home
);
router.post(
  '/auth_user',
  landingPageController.homePost
);

module.exports = router;
