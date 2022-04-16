const bcrypt = require('bcrypt');
const { saltRounds } = require('../config');

exports.hashPassword = async (password) => {
  const hashedPassword = await bcrypt.hash(password, saltRounds);
  return hashedPassword;
};
