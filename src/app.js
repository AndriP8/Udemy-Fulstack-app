const Fastify = require('fastify');
const cors = require('@fastify/cors');
const db = require('./plugin/database');
const testRoute = require('./route/testTempRoute');
const userRoute = require('./route/user');
const jobRoute = require('./route/job');

const build = (opts = {}) => {
  const app = Fastify(opts);

  // register plugin
  app.register(db);
  app.register(cors);

  // register route
  app.register(testRoute, { prefix: 'api/v1/test' });
  app.register(userRoute, { prefix: 'api/v1/users' });
  app.register(jobRoute, { prefix: 'api/v1/jobs' });

  app.get('/', async (request, reply) => {
    reply.send({
      hello: 'world',
    });
  });
  return app;
};

module.exports = build;
