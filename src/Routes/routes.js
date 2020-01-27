const {getNotesHandler, postNotesHandler, deleteNotesHandler, changeStateHandler} = require('../Handlers/notesHandlers');
const getQuotesHandler = require('../Handlers/quotesHandlers');

const routes = [{path: '/notes', method: 'GET', handler: getNotesHandler},
  {path: '/notes', method: 'POST', handler: postNotesHandler},
  {path: '/notes/{id}', method: 'DELETE', handler: deleteNotesHandler},
  {path: '/notes/{id}', method: 'PUT', handler: changeStateHandler},
  {path: '/quotes', method: 'GET', handler: getQuotesHandler}];

module.exports = routes;
