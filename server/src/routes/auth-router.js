const express = require('express');

const {
  signUp,
  signIn
} = require('../controllers/auth-controller')

const router = express.Router();

// POST - /api/auth/sign-up
router.post('/sign-up', signUp )

// POST - /api/auth/sign-in
router.post('/sign-in', signIn )

module.exports = router;