const server = require('./src/server');

server.start((err) => {
  if (err) {
    throw err;
  }
});

