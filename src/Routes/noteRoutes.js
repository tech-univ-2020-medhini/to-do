const {getNotesHandler, postNotesHandler, deleteNotesHandler, changeStateHandler} = require('../Handlers/notesHandlers');
const getQuotesHandler = require('../Handlers/quotesHandlers');
const schemas = require('../Schemas/notesSchemas');

const routes = [{path: '/notes', method: 'GET', handler: getNotesHandler},
  {path: '/notes', method: 'POST', config: {
    handler: postNotesHandler,
    validate: {
      payload: schemas.postSchema,
    },
  }},

  {path: '/notes/{id}', method: 'DELETE', config: {
    handler: deleteNotesHandler,
    validate: {
      params: schemas.putSchema,
    },
  }},
  {path: '/notes/{id}', method: 'PUT', config: {
    handler: changeStateHandler,
    validate: {
      params: schemas.putSchema,
    },
  }},
  {path: '/quotes', method: 'GET', handler: getQuotesHandler}];

module.exports = routes;
