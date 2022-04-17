const { unauthorizedErr } = require('../helpers/errors/CustomErrors');
const { verifyToken } = require('../helpers/auth/tokens');

module.exports = async (req, res, next) => {
  const { authorization: accessToken } = req.headers;
  if (!accessToken) throw unauthorizedErr;
  await verifyToken(accessToken);
  next();
};
