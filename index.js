const buildServer = require('./src/server');
const server = buildServer();

server.start((err) => {
  if (err) {
    throw err;
  }
});
console.log('Server started');
