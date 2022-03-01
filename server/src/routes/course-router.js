const express = require('express');
const authMiddleware = require('../middlewares/auth-middleware');
const adminMiddleware = require('../middlewares/admin-middleware');
const {
  getCourses,
  createCourse,
  getCourse,
  deleteCourse,
  updateCourse,
} = require('../controllers/course-controller');

const router = express.Router();


// REST API standard

// GET    '/courses'     -> gauti visus kursus
router.get('/', getCourses);

// POST   '/courses/'    -> sukurti vieną kursą
router.post('/', authMiddleware, adminMiddleware, createCourse);

// GET    '/courses/:id' -> gauti vieną kursą
router.get('/:id', getCourse);

// DELETE '/courses/:id' -> ištrinti vieną kursą
router.delete('/:id', authMiddleware, adminMiddleware, deleteCourse);

// PATCH  '/courses/:id' -> ATNAUJINTI vieną kursą
router.patch('/:id', authMiddleware, adminMiddleware, updateCourse);


module.exports = router;
