const CategoryModel = require('../models/category-model');
const CategoryViewModel = require('../view-models/category-view-model');

const getCategories = async ( req, res ) => {
  const categoryDocs = await CategoryModel.find();
  const categories = categoryDocs.map(category => new CategoryViewModel(category));
  res.status(200).json({ categories });
};

const createCategory = async ( req, res ) => {
  const { name } = req.body;
  const categoryDoc = await CategoryModel({
    name
  });
  try {
    await categoryDoc.save();
    const category = new CategoryViewModel(categoryDoc);
    res.status(200).json(category);
  } catch (error) {
    console.log(error);
    res.status(400).json({ message: `klaida: kategorija pavadinimu: '${name}' jau yra`})    
  };
};

const getCategory = async ( req, res ) => {
  const { id } = req.params;
  try {
    const categoryDoc = await CategoryModel.findById(id);
    const category = new CategoryViewModel(categoryDoc);
    res.status(200).json(category);
  } catch (error) {
    res.status(404).json({ message: `klaida: kategorija nerasta, id: ${id}`});
  };
};

const deleteCategory = async (req, res) => {
  const { id } = req.params;
  try {
    const categoryDoc = await CategoryModel.findByIdAndDelete(id);
    const category = new CategoryViewModel(categoryDoc);
    res.status(200).json(category);
  } catch (error) {
    res.status(400).json({ message: `klaida: kategorija merasta, id: ${id}`});   
  };
};

module.exports = {
  getCategories,
  createCategory,
  getCategory,
  deleteCategory
}