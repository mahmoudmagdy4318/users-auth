const definedEnvs = Object.keys(process.env);
const getEnv = (envName, required = true) => {
  if (required && !definedEnvs.includes(envName)) throw new Error(`${envName} is missing`);
  return process.env[envName];
};

module.exports = {
  port: getEnv('PORT', false) || 3000,
  corsDomains: getEnv('CORS_DOMAINS', false),
  mongoUri: getEnv('MONGO_URI', true),
  saltRounds: getEnv('SALT_ROUNDS', false) || 10,
  jwtSecret: getEnv('JWT_SECRET', true),
  tokenExpiry: getEnv('TOKEN_EXPIRY', false) || 3600,
};
