const logger = require('../logs/logger');
const { serverErr } = require('./CustomErrors');

// eslint-disable-next-line no-unused-vars
module.exports = (err, req, res, next) => {
  const error = err.statusCode ? err : serverErr;
  if (error.statusCode === 500) logger.error(error);
  res.status(error.statusCode).json({
    message: error.message,
    details: error.details,
  });
};
