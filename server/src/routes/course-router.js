const express = require('express');
const { v4: generateId } = require('uuid');

const router = express.Router();

const courses = [
  { id: '1', name: 'mushroom course', price: 29.99 },
  { id: '2', name: 'hydroponics course', price: 29.99 },
  { id: '3', name: 'both courses', price: 49.99 },
];

// REST API standard

// GET    '/courses'     -> gauti visus kursus
router.get('/', (req, res) => {
  res.status(200).json({ courses })
});

// POST   '/courses/'    -> sukurti vieną kursą
router.post('/', (req, res) => {
  const { name, price } = req.body;
  courses.push({
    id: generateId(),
    name,
    price
  })
  res.send('kursas pridėtas į sarašą');
});

// GET    '/courses/:id' -> gauti vieną kursą
router.get('/:id', (req, res) => {
  const { id } = req.params;
  res.status(200).json(courses.find(x => x.id === id));
});

// DELETE '/courses/:id' -> ištrinti vieną kursą
router.delete('/:id', (req, res) => {
  const { id } = req.params;
  const ii = courses.findIndex(x => x.id === id);
  if (ii >= 0) {
    const [deletedCourse] = courses.splice(ii, 1);
    res.status(200).json(deletedCourse);
  } else {
    res.status(404).json({
      message: 'Kursas nerastas'
    })
  }
});

// PATCH  '/courses/:id' -> ATNAUJINTI vieną kursą
router.patch('/:id', (req, res) => {
  const { id } = req.params;
  const { name, price } = req.body;
  const course = courses.find(x => x.id === id);
  if (course) {
    if (name) course.name = name;
    if (price) course.price = price;
    res.status(200).json(course);
  }
  else {
    res.status(404).json({ message: 'kursas nerastas' });
  }
});

// PUT    '/courses/:id' -> Perrašo vieną kursą
router.put('/:id', (req, res) => {
  const { id } = req.params;
  const { name, price } = req.body;
  const course = courses.find(x => x.id === id);
  if (course) {
    if (name && price) {
      course.name = name;
      course.price = price;
      res.status(200).json(course);
    } else {
      res.status(400).json({ message: 'Nepakanka duomenų' });
    }
  }
  else {
    res.status(404).json({ message: 'kursas nerastas' });
  }
});

module.exports = router;
