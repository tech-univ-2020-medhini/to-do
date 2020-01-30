const Sequelize = require('Sequelize');

module.exports = {
  name: 'connection',
  register: async (server, options) => {
    const sequelize = new Sequelize('postgres://Medhini_Oak:@localhost:5432/to-do');
    console.log('established connection');
    server.decorate('server', 'sequelize', sequelize);
  },
};

