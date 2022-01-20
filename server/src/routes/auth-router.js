const express = require('express');

const {
  signUp,
  signIn
} = require('../controllers/auth-controller')

const authConfigureMiddleware = require('../middlewares/auth-configure-middleware');

const router = express.Router();
router.use(authConfigureMiddleware);
// POST - /api/auth/sign-up
router.post('/sign-up', signUp )

// POST - /api/auth/sign-in
router.post('/sign-in', signIn )

module.exports = router;