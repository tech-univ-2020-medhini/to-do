const {getNotesHandler, postNotesHandler, deleteNotesHandler, changeStateHandler} = require('../Handlers/handlers');

const routes = [{path: '/notes', method: 'GET', handler: getNotesHandler},
  {path: '/notes', method: 'POST', handler: postNotesHandler},
  {path: '/notes/{id}', method: 'DELETE', handler: deleteNotesHandler},
  {path: '/notes/{id}', method: 'PUT', handler: changeStateHandler}];

module.exports = routes;
