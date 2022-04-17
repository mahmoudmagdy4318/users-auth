const mongoose = require('mongoose');
const { mongoUri } = require('./config');
const logger = require('./helpers/logs/logger');

async function run() {
  try {
    await mongoose.connect(mongoUri);
    logger.info('Connected successfully to database');
  } catch (err) {
    logger.error(err);
    process.exit(1);
  }
}
run();
