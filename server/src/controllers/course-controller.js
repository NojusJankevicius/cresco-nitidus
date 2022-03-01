const CourseModel = require('../models/course-model')
const CourseViewModel = require('../view-models/course-view-model');

const getCourses = async (req, res) => {
  const courseDocuments = await CourseModel.find();
  const courses = courseDocuments.map(course => new CourseViewModel(course));
  res.status(200).json({ courses });
};

const createCourse = async (req, res) => {
  const { name, price } = req.body;
  const courseDoc = await CourseModel({
    name,
    price
  });

  try {
    await courseDoc.save();
    const course = new CourseViewModel(courseDoc);
    res.status(200).json(course);
  } catch (error) {
    console.log(error)
    res.status(400).json({ message: `klaida: pavadinimu '${name}' elementas jau yra` })
  }
};

const getCourse = async (req, res) => {
  const { id } = req.params;
  try {
    const courseDoc = await CourseModel.findById(id);
    const course = new CourseViewModel(courseDoc);
    res.status(200).json(course);
  } catch (error) {
    res.status(404).json({ message: `klaida: kursas nerastas, id: ${id}` });
  }
};

const deleteCourse = async (req, res) => {
  const { id } = req.params;
  try {
    const courseDoc = await CourseModel.findByIdAndDelete(id);
    const course = new CourseViewModel(courseDoc)
    res.status(200).json(course);
  } catch (error) {
    res.status(404).json({ message: `klaida: kursas nerastas, id: ${id}` })
  }
};

const updateCourse = async (req, res) => {
  const { id } = req.params;
  const { name, price } = req.body;
  try {
    await CourseModel.findById(id);

    try {
      const courseDoc = await CourseModel.findByIdAndUpdate(id, {
        name,
        price
      });
      const course = new CourseViewModel(courseDoc);
      res.status(200).json(course);

    } catch (error) {
      res.status(400).json({ message: 'blogi duomenys' });
    }
  } catch (error) {
    res.status(404).json({ message: `klaida: kursas nerastas, id: ${id}` });
  }
};

const replaceCourse = async (req, res) => {
  const { id } = req.params;
  const { name, price } = req.body;

  try {
    await CourseModel.findById(id);

    try {
      if (name && price) {

        const courseDoc = await CourseModel.findOneAndReplace(
          { _id: id },
          { name, price },
          {
            new: true,
            runValidators: true
          });
        const course = new CourseViewModel(courseDoc);
        res.status(200).json(course);
      } else {
        throw new Error;
      }
    } catch (error) {
      res.status(400).json({ message: 'blogi duomenys' });
    }

  } catch (error) {
    res.status(404).json({ message: `klaida: kursas nerastas, id: ${id}` });
  }
};

module.exports = {
  getCourses,
  createCourse,
  getCourse,
  deleteCourse,
  updateCourse,
  replaceCourse,
};
