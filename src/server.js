const route = require('./Routes/noteRoutes');
const Joi = require('@hapi/joi');
const connection = require('./connection-plugin');
const Hapi = require('@hapi/hapi');

const buildServer = async () => {
  // eslint-disable-next-line new-cap
  const server = Hapi.Server({
    host: 'localhost',
    port: 3000,
  });
  await server.validator(Joi);
  server.route(route);
  await server.register(connection);

  return server;
};

module.exports = buildServer;
