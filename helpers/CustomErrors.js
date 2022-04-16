class CustomError extends Error {
  constructor(statusCode, code, message, details) {
    super(message);
    Object.assign(this, { statusCode, code, details });
  }
}

module.exports = CustomError;

module.exports.authErr = new CustomError(
  403,
  'FORBIDDEN',
  'You Don\'t Have This Permission',
);

module.exports.serverErr = new CustomError(
  500,
  'SERVER_ERROR',
  'Something Went Wrong',
);

module.exports.unauthorizedErr = new CustomError(
  401,
  'UNAUTHORIZED',
  'You Are Not Allowed To Perform This Action',
);

module.exports.loginErr = new CustomError(
  401,
  'UNAUTHORIZED',
  'Invalid Username Or Password',
);

module.exports.validationErr = (errorDetails) => new CustomError(422, 'validationErrOR', 'Invalid Data', errorDetails);
