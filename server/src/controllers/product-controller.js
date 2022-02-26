const ProductModel = require('../models/product-model');
const ProductViewModel = require('../view-models/product-view-model');

const getProducts = async (req, res) => {
  const { category } = req.query;
  const filterObject = {};

  if (category) {
    filterObject.category = { $in: [].concat(category) }
  }
  const productDocs = await ProductModel
    .find(filterObject)
    .populate("category")
    .populate("images");
  const products = productDocs.map(product => new ProductViewModel(product));
  res.status(200).json({ products });
};

const createProduct = async (req, res) => {
  console.log(req.files)
  const { name, description, category, price, images } = req.body;
  res.send('kk')
  const productDoc = await ProductModel({
    name,
    description,
    category,
    price,
    images
  });
  
  try {
    await productDoc.save();
    const product = new ProductViewModel(productDoc);
    res.status(200).json(product);
  } catch (error) {
    console.log(error)
    res.status(400).json({ message: `klaida: produktas pavadinimu: '${name}' jau yra` });
  };
};

const getProduct = async (req, res) => {
  const { id } = req.params;
  try {
    const productDoc = await ProductModel.findById(id);
    const product = new ProductViewModel(productDoc);
    res.status(200).json(product);
  } catch (error) {
    res.status(404).json({ message: `klaida: produktas nerastas, id: ${id}` });
  }
};

const deleteProduct = async (req, res) => {
  const { id } = req.params;
  try {
    const productDoc = await ProductModel.findByIdAndDelete(id);
    const product = new ProductViewModel(productDoc);
    res.status(200).json(product);
  } catch (error) {
    res.status(400).json({ message: `klaida: produktas nerastas, id: ${id}` })
  }
};

const updateProduct = async (req, res) => {
  const { id } = req.params;
  const { name, description, category, price } = req.body;
  try {
    await ProductModel.findById(id);

    try {
      const productDoc = await ProductModel.findByIdAndUpdate(id, {
        name,
        description,
        category,
        price,
      });
      const product = new ProductViewModel(productDoc);
      res.status(200).json(product);
    } catch (error) {
      res.status(400).json({ message: 'blogi duomenys' });
    }

  } catch (error) {
    res.status(404).json({ message: `klaida: produktas nerastas, id: ${id}` })
  }
}

const replaceProduct = async (req, res) => {
  const { id } = req.params;
  const { name, description, category, price } = req.body;
  try {
    await ProductModel.findById(id);

    try {
      if (name && category && price) {

        const productDoc = await ProductModel.findOneAndReplace(
          { _id: id },
          { name, description, category, price },
          {
            new: true,
            runValidators: true
          });
        const product = new ProductViewModel(productDoc);
        res.status(200).json(product);
      } else {
        throw new Error;
      }
    } catch (error) {
      res.status(400).json({ message: 'blogi duomenys' });
    }

  } catch (error) {
    res.status(404).json({ message: `klaida: produktas nerastas, id: ${id}` })
  }
};

module.exports = {
  getProducts,
  createProduct,
  getProduct,
  deleteProduct,
  updateProduct,
  replaceProduct,
}