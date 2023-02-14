const Fastify = require('fastify');
const db = require('./plugin/database');
const testRoute = require('./route/testTempRoute');

const build = (opts = {}) => {
  const app = Fastify(opts);

  // register plugin
  app.register(db);

  // register route
  app.register(testRoute, { prefix: 'api/v1/test' });

  app.get('/', (request, reply) => {
    reply.send({
      hello: 'world',
    });
  });
  return app;
};

module.exports = build;
