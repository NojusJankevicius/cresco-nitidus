const Mongoose = require('mongoose');
const CategoryModel = require('../models/category-model');
const CategoryViewModel = require('../view-models/category-view-model');

const getCategories = async (req, res) => {
  const categoryDocs = await CategoryModel.find();
  const categories = categoryDocs.map(category => new CategoryViewModel(category));
  res.status(200).json({ categories });
};

const createCategory = async (req, res) => {
  const { title } = req.body;
  try {
    const categoryDoc = await CategoryModel.create({ title });
    res.status(200).json(new CategoryViewModel(categoryDoc));
  } catch (error) {
    console.log(error);
    res.status(400).json({ message: `klaida: kategorija pavadinimu: '${title}' jau yra` })
  };
};

const updateCategory = async (req, res) => {
  const { id } = req.params;
  const data = req.body;
  try {
    const categoryDoc = await CategoryModel.findByIdAndUpdate(id, data, {
      new: true,
      runValidators: true,
    });

    res.status(200).json(new CategoryViewModel(categoryDoc));
  } catch (error) {
    console.log(error);
    res.status(400).json({
      message: error instanceof Mongoose.Error.ValidationError
        ? `klaida: kategorija pavadinimu:'${data.title}' jau yra`
        : error.message
    })
  }
};

const getCategory = async (req, res) => {
  const { id } = req.params;
  try {
    const categoryDoc = await CategoryModel.findById(id);
    const category = new CategoryViewModel(categoryDoc);
    res.status(200).json(category);
  } catch (error) {
    res.status(404).json({ message: `klaida: kategorija nerasta, id: ${id}` });
  };
};

const deleteCategory = async (req, res) => {
  const { id } = req.params;
  try {
    const categoryDoc = await CategoryModel.findByIdAndDelete(id);
    const category = new CategoryViewModel(categoryDoc);
    res.status(200).json(category);
  } catch (error) {
    res.status(400).json({ message: `klaida: kategorija merasta, id: ${id}` });
  };
};

module.exports = {
  getCategories,
  createCategory,
  updateCategory,
  getCategory,
  deleteCategory
}