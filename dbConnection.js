const mongoose = require('mongoose');
const { mongoUri } = require('./config');

async function run() {
  try {
    await mongoose.connect(mongoUri);
    console.log('Connected successfully to database');
  } catch (err) {
    console.log(err);
    process.exit(1);
  }
}
run();
