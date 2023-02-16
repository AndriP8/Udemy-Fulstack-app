const tempService = require('../../services/temp.service');

const route = async (fastify) => {
  const { getAll, save } = tempService(fastify);

  fastify.get('/', async (request, reply) => {
    const allTest = await getAll();

    reply.code(200).send(allTest);
  });

  fastify.post('/', async (request, reply) => {
    fastify.log.info(`request with body ${request}`);
    const { title } = request.body;

    const id = await save(title);

    reply.code(201).send({ id });
  });
};

module.exports = route;
