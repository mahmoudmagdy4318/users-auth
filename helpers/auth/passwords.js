const bcrypt = require('bcrypt');
const { saltRounds } = require('../../config');
const { loginErr } = require('../errors/CustomErrors');

exports.hashPassword = async (password) => {
  const hashedPassword = await bcrypt.hash(password, saltRounds);
  return hashedPassword;
};

exports.comparePassword = async (password, hashedPassword) => {
  const isCorrectPassword = await bcrypt.compare(password, hashedPassword);
  if (!isCorrectPassword) throw loginErr;
};
