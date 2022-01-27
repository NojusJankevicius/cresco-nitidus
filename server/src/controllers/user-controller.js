const UserModel = require("../models/user-model");
const UserViewModel = require("../view-models/user-view-model");

const getUsers = async (req, res) => {
  console.log(req.user)
  const userdocs = await UserModel.find();
  const users = userdocs.map(user => new UserViewModel(user));
  res.status(200).json({ users });
};

const updateUser = async (req, res) => {
  const { email, name, surname } = req.body;

  const expectedProps = { email, name, surname };
  const props = Object.entries(expectedProps)
    .reduce((result, [name, value]) => {
      if (value !== undefined) {
        result[name] = value;
      }
      return result;
    }, {});

  const userDoc = await UserModel.findOneAndUpdate(
    { email: req.user.email },
    props,
    { new: true },
  );

  res.status(200).json({
    message: 'Vartotojas atnaujintas',
    user: new UserViewModel(userDoc)
  })
}

module.exports = {
  getUsers,
  updateUser,
};
