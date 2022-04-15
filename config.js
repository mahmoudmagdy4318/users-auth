const definedEnvs = Object.keys(process.env);
const getEnv = (envName, required = true) => {
  if (required && !definedEnvs.includes(envName)) throw new Error(`${envName} is missing`);
  return process.env[envName];
};

module.exports = {
  port: getEnv('PORT', false) || 3000,
  corsDomains: getEnv('CORS_DOMAINS', false),
};
