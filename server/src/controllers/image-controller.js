const ImageModel = require('../models/image-model');
const ImageViewModel = require('../view-models/image-view-model');

const getImages = async (req, res) => {
  const imageDocs = await ImageModel.find();
  console.log(imageDocs)
  const images = imageDocs.map(x => new ImageViewModel(x));

  res.status(200).json({
    images
  });
};

// const uploadImage = async (req,res) => {
//   const imageDocs = await ImageModel(req.body);
//   try {
//     await imageDocs.save()
//     const image = new ImageViewModel(imageDocs);
//     res.status(200).json(image)
//   } catch (error) {
//     res.status(400).json({
//       message: 'klaida'
//     })
//   }
// };

const uploadImages = async (req, res) => {
  const userDoc = await UserModel.findOne({ email: req.user.email });
  const imgData = req.files.map(({ filename }) => ({
    src: filename,
    user: userDoc.id,
  }));

  const imgDocs = await ImageModel.insertMany(imgData);
  const images = imgDocs.map(x => new ImageViewModel(x));

  res.status(200).send(images);
}

module.exports = {
  getImages,
  // uploadImage,
  uploadImages
};
