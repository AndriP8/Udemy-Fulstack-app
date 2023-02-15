const loadEnvironmentVarible = (envName) => {
  if (envName) {
    return process.env[envName];
  }

  throw new Error(`${envName} env does not exist`);
};

module.exports = {
  database_uri: loadEnvironmentVarible('POSTGRES_URI'),
};
