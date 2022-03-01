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

router.use(authMiddleware, adminMiddleware);

// GET    '/categories'     -> gauti visas kategorijas
router.get('/', getCategories);

// POST   '/categories/'    -> sukurti vieną kategoriją
router.post('/', createCategory);

// GET    '/categories/:id' -> gauti vieną kategoriją
router.get('/:id', getCategory);

// PATCH  '/categories/:id'
router.patch('/:id', updateCategory);

// DELETE '/categories/:id' -> ištrinti vieną kategoriją
router.delete('/:id', deleteCategory);


module.exports = router;
