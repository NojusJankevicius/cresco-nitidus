const express = require('express');
const authMiddleware = require('../middlewares/auth-middleware');
const { getImages, uploadImages } = require('../controllers/image-controller');
const { uploadManyMiddleware } = require('../middlewares/upload-middleware');

const router = express.Router();

// GET '/images'
router.get('/', getImages);

// POST '/images'
router.post('/', uploadManyMiddleware('images'), uploadImages)

module.exports = router;
