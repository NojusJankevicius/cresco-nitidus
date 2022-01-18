const express = require('express');
const {
  getCourses,
  createCourse,
  getCourse,
  deleteCourse,
  updateCourse,
  replaceCourse,
} = require('../controllers/course-controller');

const router = express.Router();


// REST API standard

// GET    '/courses'     -> gauti visus kursus
router.get('/', getCourses);

// POST   '/courses/'    -> sukurti vieną kursą
router.post('/', createCourse);

// GET    '/courses/:id' -> gauti vieną kursą
router.get('/:id', getCourse);

// DELETE '/courses/:id' -> ištrinti vieną kursą
router.delete('/:id', deleteCourse);

// PATCH  '/courses/:id' -> ATNAUJINTI vieną kursą
router.patch('/:id', updateCourse);

// PUT    '/courses/:id' -> Perrašo vieną kursą
router.put('/:id', replaceCourse);

module.exports = router;
