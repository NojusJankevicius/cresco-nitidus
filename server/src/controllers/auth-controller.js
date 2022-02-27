const UserModel = require('../models/user-model');
const UserViewModel = require('../view-models/user-view-model')
const { hashPasswordAsync, comparePasswordsAsync } = require('../helpers/hash')
const generateToken = require('../helpers/generate-token');
const jwt = require('jsonwebtoken');

const signUp = async (req, res) => {
  const { name, surname, email, password, repeatPassword } = req.body;
  console.log(req.body)
  try {
    if (password !== repeatPassword) throw new Error('klyšaranke, vienodai slaptažodį parašyk')
    const userDoc = await UserModel.create({
      name,
      surname,
      email,
      password,
    });

    const user = new UserViewModel(userDoc);

    res.status(200).json({
      user,
      token: generateToken({ email, role: userDoc.role }),
    });

    const hashedPassword = await hashPasswordAsync(password);
    await UserModel.findByIdAndUpdate(userDoc.id, {
      password: hashedPassword,
    });
  } catch (error) {
    res.status(400).json({
      message: error.message,
    });
  };
};

const signIn = async (req, res) => {
  const { email, password } = req.body;

  try {
    const userDoc = await UserModel.findOne({ email });
    const passwordsAreEqual = await comparePasswordsAsync(password, userDoc.password)
    if (passwordsAreEqual) {
      const user = new UserViewModel(userDoc);
      res.status(200).json({
        user,
        token: generateToken({ email, role: userDoc.role }),
      });
    } else {
      res.status(400).json({
        message: 'neteisingas slaptažodis'
      })
    }
  } catch (error) {
    res.status(404).json({
      message: 'neteisingas le paštas.'
    })
  }
}

const auth = async (req, res) => {
  const { token } = req.body;
  try {
    const {email} = jwt.verify(token, process.env.TOKEN_SECRET);
    const userDoc = await UserModel.findOne({email});
    const user = new UserViewModel(userDoc);
    res.status(200).json({
      user,
      token
    });
  } catch (error) {
    res.status(403).json({ message: 'token not valid' });
  }
}

const checkEmail = async (req, res) => {
  const { email } = req.query;
  if(!email) {
    res.status(400).json({ message: 'no email provided'})
    return;
  }
  const userdoc = await UserModel.findOne({ email });
  res.status(200).json({available: !userdoc })
}

module.exports = {
  signUp,
  signIn,
  auth,
  checkEmail,
};