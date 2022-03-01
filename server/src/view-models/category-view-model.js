const { dateStr2DateTime } = require('../helpers/date-helpers');

class CategoryViewModel {
  constructor(CategoryDoc) {
    this.id = CategoryDoc._id;
    this.title = CategoryDoc.title;
    this.createdAt = dateStr2DateTime(CategoryDoc.createdAt);
    this.updatedAt = dateStr2DateTime(CategoryDoc.updatedAt);
  }
}

module.exports = CategoryViewModel;