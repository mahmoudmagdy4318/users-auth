const { loginErr } = require('../helpers/errors/CustomErrors');
const { hashPassword, comparePassword } = require('../helpers/auth/passwords');
const { signToken, verifyToken } = require('../helpers/auth/tokens');
const { UserModel } = require('../models');
const { sendVerificationEmail } = require('../helpers/emails/sendingEmails');

const addUser = async (req, res, next) => {
  const {
    username, password, email,
  } = req.body;

  const hashedPassword = await hashPassword(password);

  const user = await UserModel.create({
    username, password: hashedPassword, email,
  });

  const accessToken = await signToken({
    id: user.id,
  });

  try {
    await sendVerificationEmail(accessToken)(user.email);
    res.status(201).json(user);
  } catch (error) {
    await UserModel.deleteOne({ email });
    next(error);
  }
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

const getAll = async (req, res) => {
  const users = await UserModel.find();
  res.json(users);
};

const verifyEmail = async (req, res) => {
  const { token } = req.query;
  const { id: userId } = await verifyToken(token);
  await UserModel.findByIdAndUpdate(userId, {
    $set: { emailVerified: true },
  });
  res.json({ success: true });
};

module.exports = {
  addUser,
  login,
  getAll,
  verifyEmail,
};
