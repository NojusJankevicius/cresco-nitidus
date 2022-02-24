const Mongoose = require('mongoose');
const uniqueValidator = require('mongoose-unique-validator');

const imageSchema = new Mongoose.Schema({
  src: {
    type: 'string',
    unique: true,
  },
  product: {
    type: Mongoose.Schema.Types.ObjectId,
    ref: 'Product',
  },
}, {
  timestamps: true,
});

imageSchema.plugin(uniqueValidator);

const ImageModel = Mongoose.model('Image', imageSchema);

module.exports = ImageModel;
