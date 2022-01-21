const express = require('express');

const {
  signUp,
  signIn,
  auth,
  checkEmail,
} = require('../controllers/auth-controller')

const authConfigureMiddleware = require('../middlewares/auth-configure-middleware');

const router = express.Router();
router.use(authConfigureMiddleware);

// POST - /api/auth
router.post('/', auth )

// POST - /api/auth/sign-up
router.post('/sign-up', signUp )

// POST - /api/auth/sign-in
router.post('/sign-in', signIn )

router.get('/check-email', checkEmail)

module.exports = router;