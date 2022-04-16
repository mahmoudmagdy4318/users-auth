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
  if (error.code === 11000) {
    next(VALIDATION_ERR('User With This Email Already Exists'));
  } else {
    next(error);
  }
});

module.exports = schema;
