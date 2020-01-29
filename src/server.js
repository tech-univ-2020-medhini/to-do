const route = require('./Routes/noteRoutes');
const Joi = require('@hapi/joi');
// const Sequelize = require('Sequelize');

const buildServer = () => {
  const Hapi = require('@hapi/hapi');
  const server = Hapi.Server({
    host: 'localhost',
    port: 8080,
  });

  server.validator(Joi);
  server.route(route);
  // server.register([
  //   {
  //     plugin: require('hapi-sequelizejs'),
  //     options: [
  //       {
  //         name: 'to-do',
  //         models: [__dirname + '/server/models/**/*.js'], // paths/globs to model files
  //         ignoredModels: [__dirname + '/server/models/**/*.js'], // OPTIONAL: paths/globs to ignore files
  //         sequelize: new Sequelize('postgres://Medhini_oak:@localhost:5432/to-do'), // sequelize instance
  //         sync: true, // sync models - default false
  //         forceSync: false, // force sync (drops tables) - default false
  //       },
  //     ],
  //   },
  // ]);
  return server;
};


module.exports = buildServer;
