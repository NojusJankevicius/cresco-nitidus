const bcrypt = require('bcrypt');

const { HASH_SECRET } = process.env;
const saltRounds = 5;

const hashPasswordAsync = async (password) => {
  const salt = await bcrypt.genSalt(saltRounds)
    const hashedPassword = await bcrypt.hash(password + HASH_SECRET, salt);
    return hashedPassword;
}

const comparePasswordsAsync = async (plainPassword, hashedPassword) => {
  return bcrypt.compare(plainPassword + HASH_SECRET, hashedPassword)
} 

module.exports = {
  hashPasswordAsync,
  comparePasswordsAsync,
}