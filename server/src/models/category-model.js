const Mongoose = require('mongoose');
const uniqueValidator = require('mongoose-unique-validator');

const categorySchema = new Mongoose.Schema({
  name: {
    type: 'string',
    required: true,
    unique: true,
  }
}, {
  timestamps: true
});

categorySchema.plugin(uniqueValidator);

const categoryModel = Mongoose.model('Category', categorySchema);

module.exports = categoryModel;
