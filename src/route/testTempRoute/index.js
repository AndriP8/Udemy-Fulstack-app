const route = async (fastify) => {
  fastify.get('/', async (request, reply) => {
    const allTest = await fastify.db.query('select * from test');

    reply.code(200).send(allTest);
  });

  fastify.post('/', async (request, reply) => {
    fastify.log.info(`request with body ${request}`);
    const { title } = request.body;

    await fastify.db.one('INSERT INTO test(title) VALUES($1) RETURNING id', [
      title,
    ]);

    reply.code(201).send({ id });
  });
};

module.exports = route;
