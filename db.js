const mongoose = require('mongoose');
const { mongoUri } = require('./config');

mongoose.connect(mongoUri, (err) => {
  if (err) process.exit(1);
  console.log('connected to database successfully');
});
