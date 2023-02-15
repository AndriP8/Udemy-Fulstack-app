const fp = require('fastify-plugin');
const pgp = require('pg-promise')();
const config = require('../config');
const applyMigration = require('./helper/migration');

const db = async (fastify, options, next) => {
  const dbConnection = pgp(config.database_uri ?? 'postgres uri');

  // register db as decorator to provide globally
  fastify.decorate('db', dbConnection);

  fastify.log.info('Migration is aboßut to run');
  const migartionCount = await applyMigration();
  fastify.log.info(`migration applied count: ${migartionCount}`);

  next();
};

module.exports = fp(db);
