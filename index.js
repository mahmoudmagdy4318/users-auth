const express = require('express');
const cors = require('cors');
require('express-async-errors');

require('dotenv').config();
require('./dbConnection');

const { port, corsDomains } = require('./config');
const { usersRouter } = require('./routes');
const errorHandler = require('./helpers/errors/errorHandler');
const logger = require('./helpers/logs/logger');

const app = express();

app.use(express.json());
app.use(cors({
  origin: corsDomains ? corsDomains.split(/\s|\t/) : true,
}));

app.use(['/users', '/user'], usersRouter);
app.use(errorHandler);

app.listen(port, () => {
  logger.info(`auth service listening on port ${port}`);
});
