const Mongoose = require('mongoose');
const uniqueValidator = require('mongoose-unique-validator');
const validator = require('validator');

const userSchema = new Mongoose.Schema({
  name: {
    type: 'string',
    required: true,
  },
  surname: {
    type: 'string',
    required: true,
  },
  email: {
    type: 'string',
    required: true,
    validate: {
      validator: (value) => validator.isEmail(value),
      message: 'Neteisingas el. paštas'
    },
    unique: true,
  },
  password: {
    type: 'string',
    required: true,
    validate: [
      {
        validator: (value) => value.length >= 8,
        message: 'mažiausiai 8 skaitliukai'
      },
      {
        validator: (value) => value.length <= 32,
        message: 'ne daugiau 32 skaitliukų'
      },
      {
        validator: (value) => /^.*[0-9].*$/.test(value) ,
        message: 'skaičiuko reikia dar'
      },
      {
        validator: (value) => /^.*[A-ZĄČĘĖĮŠŲŪŽ].*$/.test(value) ,
        message: 'Didesnės raidytės reikia dar'
      }
    ]
  },
  role: {
    type: 'string',
    enum: ['user', 'admin'],
    default: 'user',
  }
}, {
  timestamps: true
});

userSchema.plugin(uniqueValidator);

const UserModel = Mongoose.model('User', userSchema);

module.exports = UserModel;