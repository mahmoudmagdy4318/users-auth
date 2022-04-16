const mongoose = require('mongoose');
const omit = require('lodash/omit');
const { validationErr } = require('../helpers/CustomErrors');

const schema = new mongoose.Schema({
  username: {
    type: 'String',
  },
  email: {
    type: 'String',
    index: { unique: true },
  },
  password: { type: 'String' },
}, {
  toJSON: {
    transform: (_, userData) => omit(userData, ['__v', 'password']),
  },
});

schema.post('save', (error, doc, next) => {
  if (error.code === 11000) {
    next(validationErr('User With This Email Already Exists'));
  } else {
    next(error);
  }
});

module.exports = schema;
