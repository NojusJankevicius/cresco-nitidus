const Mongoose = require('mongoose');
const uniqueValidator = require('mongoose-unique-validator');

const courseSchema = new Mongoose.Schema({
  name: {
    type: 'string',
    required: true,
    unique: true,
  },
  price: {
    type: 'number',
    required: true,
  }
}, {
  timestamps: true
});

courseSchema.plugin(uniqueValidator);

const CourseModel = Mongoose.model('Course', courseSchema);

module.exports = CourseModel;