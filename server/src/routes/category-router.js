const express = require('express');
const {
  getCategories,
  createCategory,
  getCategory,
  deleteCategory
} = require('../controllers/category-controller');

const router = express.Router();


// GET    '/categories'     -> gauti visas kategorijas
router.get('/', getCategories);

// POST   '/categories/'    -> sukurti vieną kategoriją
router.post('/', createCategory);

// GET    '/categories/:id' -> gauti vieną kategoriją
router.get('/:id', getCategory);

// DELETE '/categories/:id' -> ištrinti vieną kategoriją
router.delete('/:id', deleteCategory);


module.exports = router;
