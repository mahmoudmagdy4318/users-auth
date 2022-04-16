const Joi = require('joi');
const { validationErr } = require('../helpers/CustomErrors');

const schema = Joi.object({
  email: Joi.string()
    .email({ minDomainSegments: 2, tlds: { allow: ['com', 'net'] } }),

  password: Joi.string()
    .pattern(/^[a-zA-Z0-9_@]{3,30}$/),
});

module.exports = async (req, res, next) => {
  try {
    await schema.validateAsync(req.body);
    next();
  } catch (err) {
    next(validationErr(err.message));
  }
};
