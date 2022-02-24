const multer = require('multer');

const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    // conosle.log(file);
    const { PUBLIC_PATH, IMG_FOLDER_NAME } = process.env;
    cb(null, `${PUBLIC_PATH}/${IMG_FOLDER_NAME}/`);
  },
  filename: function (req, file, cb) {
    const { originalname } = file;
    const extension = originalname.slice(originalname.indexOf('.'));
    const uniqueSuffix = Date.now() + '-' + Math.round(Math.random() * 1e9);
    cb(null, uniqueSuffix + extension);
  }
});

const upload = multer({ storage });

const uploadManyMiddleware = (name) => upload.array(name);
const uploadSingleMiddleware = (name) => upload.single(name);

module.exports = {
  uploadManyMiddleware,
  uploadSingleMiddleware,
};