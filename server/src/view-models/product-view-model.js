const CategoryViewModel = require("./category-view-model");

class ProductViewModel {
  constructor({_id, name, description, category, price, createdAt, updatedAt}) {
    this.id = _id;
    this.name = name;
    this.description = description;
    this.category = new CategoryViewModel(category);
    this.price = price;
    this.createdAt = createdAt;
    this.updatedAt = updatedAt;
  }
}

module.exports = ProductViewModel;
