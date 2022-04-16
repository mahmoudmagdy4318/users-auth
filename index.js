const express = require('express');
const cors = require('cors');
require('express-async-errors');

require('dotenv').config();
require('./dbConnection');

const { port, corsDomains } = require('./config');
const { usersRouter } = require('./routes');
const { errorHandler } = require('./helpers');
const { customError } = require('./helpers/errorHandler');

const app = express();

app.use(express.json());
app.use(cors({
  origin: corsDomains ? corsDomains.split(/\s|\t/) : true,
}));

app.use(['/users', '/user'], usersRouter);
console.log(customError);
app.use(errorHandler);

app.listen(port, () => {
  console.log(`auth service listening on port ${port}`);
});
