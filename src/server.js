const route = require('./Routes/routes');

const Hapi = require('@hapi/hapi');
const server = Hapi.Server({
  host: 'localhost',
  port: 8080,
});

server.route(route);

console.log('Server started');

module.exports = server;
