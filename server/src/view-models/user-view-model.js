class UserViewModel {
  constructor({ email, name, surname, createdAt, updatedAt, _id, role }) {
    this.id = _id;
    this.role = role;
    this.email = email;
    this.name = name;
    this.surname = surname;
    this.createdAt = createdAt;
    this.updatedAt = updatedAt;
  }
}

module.exports = UserViewModel