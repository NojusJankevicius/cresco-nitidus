const UserModel = require("../models/user-model");
const UserViewModel = require("../view-models/user-view-model");

const getUsers = async (req, res) => {
  const userdocs = await UserModel.find();
  const users = userdocs.map(user => new UserViewModel(user));
  res.status(200).json({
    users
  });
};

module.exports = {
  getUsers,
}