const CourseModel = require('../models/course-model')
const CourseViewModel = require('../view-models/course-view-model');

const getCourses = async (req, res) => {
  const courseDocuments = await CourseModel.find();
  const courses = courseDocuments.map(course => new CourseViewModel(course));
  res.status(200).json({ courses });
};

const createCourse = async (req, res) => {
  const { title, price, descLine1, descLine2, descLine3, descLine4 } = req.body;

  try {
    const courseDoc = await CourseModel.create({
      title,
      descLine1,
      descLine2,
      descLine3,
      descLine4,
      price,
    });
    const course = new CourseViewModel(courseDoc);
    res.status(200).json(course);
  } catch (error) {
    console.log(error)
    res.status(400).json({ message: `klaida: pavadinimu '${title}' kursai jau yra` })
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
  const data = req.body;
  try {
    const courseDoc = await CourseModel.findByIdAndUpdate(id, data, {
      new: true,
      runValidators: true,
    });
    const course = new CourseViewModel(courseDoc);
    res.status(200).json(course);

  } catch (error) {
    console.log(error);
    res.status(400).json({
      message: error instanceof Mongoose.Error.ValidationError
        ? `klaida: kursas pavadinimu:'${data.title}' jau yra`
        : error.message
    });
  }
};

module.exports = {
  getCourses,
  createCourse,
  getCourse,
  deleteCourse,
  updateCourse,
};
