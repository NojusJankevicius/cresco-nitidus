const Mongoose = require('mongoose');
const uniqueValidator = require('mongoose-unique-validator');

const productSchema = new Mongoose.Schema({
  name: {
    type: 'string',
    required: true,
    unique: true,
  },
  description: {
    type: 'string',
  },
  category: {
    type: Mongoose.Schema.Types.ObjectId,
    ref: 'Category',
    required: true,
  },
  price: {
    type: 'number',
    required: true,
  },
  images: [{
    src: 'string',
  }],
}, {
  timestamps: true,
});

productSchema.plugin(uniqueValidator);

const ProductModel = Mongoose.model('Product', productSchema);

module.exports = ProductModel;
