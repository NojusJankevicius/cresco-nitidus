const express = require('express');
const authMiddleware = require('../middlewares/auth-middleware');
const { getImages } = require('../controllers/image-controller');
const { uploadManyMiddleware } = require('../middlewares/upload-middleware');

const router = express.Router();

// middlewares
router.use(authMiddleware);

// GET '/images'
router.get('/', getImages);

// POST '/images'
router.post('/', uploadManyMiddleware('files'), (req, res) => {
  res.status(200).send('done');
})

module.exports = router;
