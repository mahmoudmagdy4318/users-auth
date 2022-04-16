const util = require('util');
const jwt = require('jsonwebtoken');
const { jwtSecret, tokenExpiry } = require('../config');

const signAsync = util.promisify(jwt.sign);

exports.signToken = async (data) => {
  const token = await signAsync(data, jwtSecret, { expiresIn: tokenExpiry });
  return token;
};
