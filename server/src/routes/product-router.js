const express = require('express');
const {
  getProducts,
  createProduct,
  getProduct,
  deleteProduct,
  updateProduct,
  replaceProduct,
} = require('../controllers/product-controller');
const adminMiddleware = require('../middlewares/admin-middleware');
const authMiddleware = require('../middlewares/auth-middleware');
const { uploadManyMiddleware } = require('../middlewares/upload-middleware');

const router = express.Router();

// GET    '/products'     -> gauti visus produktus
router.get('/', getProducts);

// POST   '/products/'    -> sukurti vieną produktą
router.post('/', authMiddleware, adminMiddleware, uploadManyMiddleware('images'), createProduct);

// GET    '/products/:id' -> gauti vieną produktą
router.get('/:id', getProduct);

// DELETE '/products/:id' -> ištrinti vieną produktą
router.delete('/:id', authMiddleware, adminMiddleware, deleteProduct);

// PATCH  '/products/:id' -> ATNAUJINTI vieną produktą
router.patch('/:id', updateProduct);

// PUT    '/products/:id' -> Perrašyti vieną produktą
router.put('/:id', replaceProduct);

module.exports = router;
