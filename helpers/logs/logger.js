const winston = require('winston');
const { log: { level, silent } } = require('../../config');

const {
  combine, json, timestamp, errors,
} = winston.format;

const logger = winston.createLogger({
  level,
  exitOnError: false,
  format: combine(
    timestamp(),
    errors({ stack: true }),
    json({ space: 2 }),
  ),
  transports: [
    new winston.transports.Console({}),
    new winston.transports.File({
      filename: 'error.log', level: 'error',
    }),
  ],
  silent,
});
module.exports = logger;
