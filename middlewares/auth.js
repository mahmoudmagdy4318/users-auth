const { unauthorizedErr } = require('../helpers/CustomErrors');
const { verifyToken } = require('../helpers/tokens');

module.exports = async (req, res, next) => {
  const { authorization: accessToken } = req.headers;
  if (!accessToken) throw unauthorizedErr;
  await verifyToken(accessToken);
  next();
};
