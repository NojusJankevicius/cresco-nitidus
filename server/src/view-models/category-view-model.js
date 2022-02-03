class CategoryViewModel {
  constructor({ _id, name, createdAt, updatedAt}) {
    this.id = _id;
    this.name = name;
    this.createdAt = createdAt;
    this.updatedAt = updatedAt;
  }
}

module.exports = CategoryViewModel;