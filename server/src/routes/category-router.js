const express = require('express');
const {
  getCategories,
  createCategory,
  getCategory,
  deleteCategory
} = require('../controllers/category-controller');
const adminMiddleware = require('../middlewares/admin-middleware');
const authMiddleware = require('../middlewares/auth-middleware');

const router = express.Router();

router.use(authMiddleware, adminMiddleware)

// GET    '/categories'     -> gauti visas kategorijas
router.get('/', getCategories);

// POST   '/categories/'    -> sukurti vieną kategoriją
router.post('/', createCategory);

// GET    '/categories/:id' -> gauti vieną kategoriją
router.get('/:id', getCategory);

// DELETE '/categories/:id' -> ištrinti vieną kategoriją
router.delete('/:id', deleteCategory);


module.exports = router;
