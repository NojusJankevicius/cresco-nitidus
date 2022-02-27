const ImageModel = require('../models/image-model');
const ProductModel = require('../models/product-model');
const ImageViewModel = require('../view-models/image-view-model');

const getImages = async (req, res) => {
  const productDoc = await ProductModel.findById();
  const imageDocs = await ImageModel.find({ product: productDoc._id });

  const images = imageDocs.map(x => new ImageViewModel(x));

  res.status(200).json({
    message: 'images fetched',
    images
  });
};

const uploadImage = async (req,res) => {
  const productDoc = await ProductModel.findById();
  const imageData = req.files.map(({ filename }) => ({
    src: filename,
    product: productDoc.id,
  }));

  const imageDocs = await ImageModel.insertMany(imageData);
  const images = imageDocs.map(x => new ImageViewModel(x));

  res.statis(200).send({
    images,
  });
};

module.exports = {
  getImages,
  uploadImage,
};
