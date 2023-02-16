const tempService = require('../../services/temp.service');
const {
  postRequestbody,
  postReponse,
  getResponseBody,
} = require('./temp.schema');

const route = async (fastify) => {
  const { getAll, save } = tempService(fastify);

  fastify.get(
    '/',
    { schema: { response: getResponseBody } },
    async (request, reply) => {
      const allTest = await getAll();

      reply.code(200).send({
        temps: allTest,
      });
    }
  );

  fastify.post(
    '/',
    { schema: { body: postRequestbody, response: postReponse } },
    async (request, reply) => {
      fastify.log.info(`request with body ${request}`);
      const { title } = request.body;

      const id = await save(title);

      reply.code(201).send(id);
    }
  );
};

module.exports = route;
