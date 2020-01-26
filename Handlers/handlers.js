const readJson = require('./readJson');
const writeJson = require('./writeJson');
const {uuid} = require('uuidv4');

function getNotesHandler(request, h) {
  const json = readJson();
  return h.response(json);
}

const postNotesHandler = async (request, h) => {
  try {
    const notesJson = await readJson();
    const note = request.payload;

    note.id = uuid();
    note.active = true;

    notesJson.notes = [...notesJson.notes, note];
    writeJson(notesJson);
    return h.response('Note added');
  } catch (err) {
    return h.response(err.message).code(500);
  }
};

module.exports = {getNotesHandler, postNotesHandler};
