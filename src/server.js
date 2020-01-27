const route = require('./Routes/routes');
const Joi = require('@hapi/joi');

const Hapi = require('@hapi/hapi');
const server = Hapi.Server({
  host: 'localhost',
  port: 8080,
});

server.validator(Joi);
server.route(route);

console.log('Server started');

module.exports = server;
