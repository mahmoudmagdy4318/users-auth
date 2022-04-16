const { loginErr } = require('../helpers/CustomErrors');
const { hashPassword, comparePassword } = require('../helpers/passwords');
const { signToken } = require('../helpers/tokens');
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

const login = async (req, res) => {
  const { email, password } = req.body;
  const user = await UserModel.findOne({ email });
  if (!user) throw loginErr;
  await comparePassword(password, user.password);
  const accessToken = await signToken({
    id: user.id,
  });
  res.json({ accessToken });
};

module.exports = {
  addUser,
  login,
};
