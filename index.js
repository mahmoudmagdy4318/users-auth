const express = require('express');
const cors = require('cors');
require('dotenv').config();

const { port, corsDomains } = require('./config');

const app = express();

app.use(express.json());
app.use(cors({
  origin: corsDomains ? corsDomains.split(/\s|\t/) : true,
}));

app.listen(port, () => {
  console.log(`auth service listening on port ${port}`);
});
