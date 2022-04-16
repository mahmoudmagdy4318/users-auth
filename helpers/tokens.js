const util = require('util');
const jwt = require('jsonwebtoken');
const { jwtSecret, tokenExpiry } = require('../config');
const { unauthorizedErr } = require('./CustomErrors');

const signAsync = util.promisify(jwt.sign);
const verifyAsync = util.promisify(jwt.verify);

exports.signToken = async (data) => {
  const token = await signAsync(data, jwtSecret, { expiresIn: tokenExpiry });
  return token;
};

exports.verifyToken = async (token) => {
  try {
    await verifyAsync(token, jwtSecret);
  } catch (error) {
    throw unauthorizedErr;
  }
};
