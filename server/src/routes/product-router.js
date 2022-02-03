const express = require('express');
const {
  getProducts,
  createProduct,
  getProduct,
  deleteProduct,
  updateProduct,
  replaceProduct,
} = require('../controllers/product-controller');

const router = express.Router();

// GET    '/products'     -> gauti visus produktus
router.get('/', getProducts);

// POST   '/products/'    -> sukurti vieną produktą
router.post('/', createProduct);

// GET    '/products/:id' -> gauti vieną produktą
router.get('/:id', getProduct);

// DELETE '/products/:id' -> ištrinti vieną produktą
router.delete('/:id', deleteProduct);

// PATCH  '/products/:id' -> ATNAUJINTI vieną produktą
router.patch('/:id', updateProduct);

// PUT    '/products/:id' -> Perrašyti vieną produktą
router.put('/:id', replaceProduct);

module.exports = router;
