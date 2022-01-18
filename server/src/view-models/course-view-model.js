class CourseViewModel{
  constructor(courseModel) {
    this.id = courseModel._id;
    this.name = courseModel.name;
    this.price = courseModel.price;
    this.createdAt = courseModel.createdAt;
    this.updatedAt = courseModel.updatedAt;
  }
}

module.exports = CourseViewModel