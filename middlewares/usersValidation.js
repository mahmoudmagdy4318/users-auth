const Joi = require('joi');
const { validationErr } = require('../helpers/errors/CustomErrors');

const schema = Joi.object({
  username: Joi.string()
    .alphanum()
    .min(3)
    .max(20)
    .required(),

  password: Joi.string()
    .pattern(/^[a-zA-Z0-9_@]{3,30}$/),

  email: Joi.string()
    .email({ minDomainSegments: 2, tlds: { allow: ['com', 'net'] } }),
});

module.exports = async (req, res, next) => {
  try {
    await schema.validateAsync(req.body);
    next();
  } catch (err) {
    next(validationErr(err.message));
  }
};
