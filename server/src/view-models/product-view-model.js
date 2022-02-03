const CategoryViewModel = require("./category-view-model");

class ProductViewModel {
  constructor({_id, name, category, price, createdAt, updatedAt}) {
    this.id = _id;
    this.name = name;
    this.category = new CategoryViewModel(category);
    this.price = price;
    this.createdAt = createdAt;
    this.updatedAt = updatedAt;
  }
}

module.exports = ProductViewModel;
