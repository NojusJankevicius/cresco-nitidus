const express = require('express');
const authMiddleware = require('../middlewares/auth-middleware');
const adminMiddleware = require('../middlewares/admin-middleware');
const {
  getCategories,
  createCategory,
  getCategory,
  updateCategory,
  deleteCategory
} = require('../controllers/category-controller');

const router = express.Router();

// GET    '/categories'     -> gauti visas kategorijas
router.get('/', getCategories);

// POST   '/categories/'    -> sukurti vieną kategoriją
router.post('/', authMiddleware, adminMiddleware, createCategory);

// GET    '/categories/:id' -> gauti vieną kategoriją
router.get('/:id', getCategory);

// PATCH  '/categories/:id'
router.patch('/:id', authMiddleware, adminMiddleware, updateCategory);

// DELETE '/categories/:id' -> ištrinti vieną kategoriją
router.delete('/:id', authMiddleware, adminMiddleware, deleteCategory);


module.exports = router;
