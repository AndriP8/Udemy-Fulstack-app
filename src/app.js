const Fastify = require("fastify");

const build = (opts = {}) => {
  const app = Fastify(opts);

  app.get("/", (request, reply) => {
    reply.send({
      hello: "world",
    });
  });
  return app;
};

module.exports = build;
