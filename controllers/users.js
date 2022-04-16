const { UserModel } = require('../models');

const addUser = async (req, res) => {
  const {
    username, password, email,
  } = req.body;

  const user = await UserModel.create({
    username, password, email,
  });

  res.status(201).json(user);
};

module.exports = {
  addUser,
};
