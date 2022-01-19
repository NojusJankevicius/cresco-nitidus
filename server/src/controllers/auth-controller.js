const UserModel = require('../models/user-model');
const UserViewModel = require('../view-models/user-view-model')
const { hashPasswordAsync, comparePasswordsAsync } = require('../helpers/hash')

const signUp = async (req, res) => {
  console.log(req.body)
  const { name, surname, email, password, repeatPassword } = req.body;
  try {
    if (password !== repeatPassword) throw new Error('klyšaranke, vienodai slaptažodį parašyk')
    const userDoc = await UserModel.create({
      name,
      surname,
      email,
      password,
    });

    // užšifruoti splatažodį

    res.status(200).json({
      message: 'Registracija sėkminga',
      user: userDoc,
    });

    const hashedPassword = await hashPasswordAsync(password);
    await UserModel.findByIdAndUpdate(userDoc.id, {
      password: hashedPassword,
    });
  } catch (error) {
    res.status(400).json({
      message: error.message,
    })
  };
};

const signIn = async (req, res) => {
  const { email, password } = req.body;

  try {
      const userDoc = await UserModel.findOne({ email });
      const passwordsAreEqual = await comparePasswordsAsync(password, userDoc.password)
      if(passwordsAreEqual){
        const user = new UserViewModel(userDoc);
        res.status(200).json(user)
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

module.exports = {
  signUp,
  signIn,
};