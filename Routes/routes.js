const getNotesHandler = require('../Handlers/handlers');

const routes = [{path: '/notes', method: 'GET', handler: getNotesHandler}];

module.exports = routes;
