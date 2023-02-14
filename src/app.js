const Fastify = require('fastify');
const db = require('./plugin/database');

const build = (opts = {}) => {
  const app = Fastify(opts);

  // register plugin
  app.register(db);

  app.get('/', (request, reply) => {
    reply.send({
      hello: 'world',
    });
  });
  return app;
};

module.exports = build;
