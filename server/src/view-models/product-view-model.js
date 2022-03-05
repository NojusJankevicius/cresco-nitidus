const CategoryViewModel = require("./category-view-model");
// const ImageViewModel = require("./image-view-model");


class ProductViewModel {
  constructor({ _id, title, description, category, price, images, createdAt, updatedAt }) {
    const { SERVER_DOMAIN, SERVER_PORT, IMG_FOLDER_NAME } = process.env;
    console.log(images);
    this.id = _id;
    this.title = title;
    this.description = description;
    this.category = new CategoryViewModel(category);
    this.price = price;
    this.images = images.map(x => `${SERVER_DOMAIN}:${SERVER_PORT}/${IMG_FOLDER_NAME}/${x.src}`);
    this.createdAt = createdAt;
    this.updatedAt = updatedAt;
  };
};

module.exports = ProductViewModel;
