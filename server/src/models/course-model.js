const Mongoose = require('mongoose');
const uniqueValidator = require('mongoose-unique-validator');

const courseSchema = new Mongoose.Schema({
  title: {
    type: 'string',
    required: true,
    unique: true,
  },
  descLine1: 'string',
  descLine2: 'string',
  descLine3: 'string',
  descLine4: 'string',
  price: {
    type: 'number',
    required: true,
  },
}, {
  timestamps: true
});

courseSchema.plugin(uniqueValidator);

const CourseModel = Mongoose.model('Course', courseSchema);

module.exports = CourseModel;