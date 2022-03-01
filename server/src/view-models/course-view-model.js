class CourseViewModel {
  constructor({ _id, title, price, descLine1, descLine2, descLine3, descLine4, createdAt, updatedAt }) {
    this.id = _id;
    this.title = title;
    this.descLine1 = descLine1,
    this.descLine2 = descLine2,
    this.descLine3 = descLine3,
    this.descLine4 = descLine4,
    this.price = price;
    this.createdAt = createdAt;
    this.updatedAt = updatedAt;
  }
}

module.exports = CourseViewModel