const CategoryViewModel = require("./category-view-model");
const ImageViewModel = require("./image-view-model");

class ProductViewModel {
  constructor({ _id, name, description, category, price, images, createdAt, updatedAt }) {
    console.log(images);
    this.id = _id;
    this.name = name;
    this.description = description;
    this.category = new CategoryViewModel(category);
    this.price = price;
    if (images.length > 0) {
      this.images = images.map(x => new ImageViewModel(x));
    };
    this.createdAt = createdAt;
    this.updatedAt = updatedAt;
  };
};

module.exports = ProductViewModel;
