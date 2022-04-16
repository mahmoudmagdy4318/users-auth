const { hashPassword } = require('../helpers/passwords');
const { UserModel } = require('../models');

const addUser = async (req, res) => {
  const {
    username, password, email,
  } = req.body;

  const hashedPassword = await hashPassword(password);

  const user = await UserModel.create({
    username, password: hashedPassword, email,
  });

  res.status(201).json(user);
};

module.exports = {
  addUser,
};