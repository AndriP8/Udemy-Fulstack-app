require('dotenv').config();

const PORT = process.env.PORT || 5001;

const server = require('./src/app')({
  logger: {
    transport: {
      target: 'pino-pretty',
      options: {
        translateTime: 'HH:MM:ss Z',
        colorize: true,
        ignore: 'pid,hostname',
      },
    },
  },
});

const start = () => {
  try {
    server.listen({ port: PORT, host: '0.0.0.0' });
  } catch (error) {
    server.log.error(error);
    process.exit(1);
  }
};

start();
