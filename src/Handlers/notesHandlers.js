// const readWrite = require('../Utils/fileOperations');
const db = require('../helpers/dbOperations');
const {uuid} = require('uuidv4');

const getNotesHandler = async (request, h) => {
  try {
    const json = await db.getNotes(request.server.sequelize);
    return h.response(json).code(200);
  } catch (err) {
    return h.response(err.message).code(500);
  }
};

const postNotesHandler = async (request, h) => {
  try {
    const note = request.payload;

    note.id = uuid();
    note.active = true;

    const response = await db.insertNote(request.server.sequelize, note);

    return h.response(response).code(200);
  } catch (err) {
    return h.response(err.message).code(500);
  }
};

const deleteNotesHandler = async (request, h) => {
  try {
    const noteId = request.params.id;
    const result = await db.deleteNote(request.server.sequelize, noteId);

    if (!result) {
      return h.response('No note deleted').code(404);
    }
    return h.response('Note deleted').code(200);
  } catch (err) {
    return h.response(err.message).code(500);
  }
};
const changeStateHandler = async (request, h) => {
  try {
    const noteId = request.params.id;
    const result = await db.changeState(request.server.sequelize, noteId);
    if (!result) {
      return h.response('No note found').code(404);
    }
    return h.response('State changed').code(200);
  } catch (err) {
    return h.response(err.message).code(500);
  }
};

module.exports = {getNotesHandler, postNotesHandler,
  deleteNotesHandler, changeStateHandler};
