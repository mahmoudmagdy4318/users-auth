const mongoose = require('mongoose');
const { VALIDATION_ERR } = require('../helpers/CustomErrors');

const schema = new mongoose.Schema({
  username: {
    type: 'String',
  },
  email: {
    type: 'String',
    index: { unique: true },
  },
  password: { type: 'String' },
});

schema.post('save', (error, doc, next) => {
  if (error.name === 'MongoError' && error.code === 11000) {
    next(VALIDATION_ERR('email must be unique'));
  } else {
    next(error);
  }
});

module.exports = schema;
