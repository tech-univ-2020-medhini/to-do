const readJson = require('./readJson');
const writeJson = require('./writeJson');
const {uuid} = require('uuidv4');

const getNotesHandler = async (request, h) => {
  const json = await readJson();
  return h.response(json);
};

const postNotesHandler = async (request, h) => {
  try {
    const notesJson = await readJson();
    const note = request.payload;

    note.id = uuid();
    note.active = true;

    notesJson.notes = [...notesJson.notes, note];
    writeJson(JSON.stringify(notesJson));
    return h.response('Note added');
  } catch (err) {
    return h.response(err.message).code(500);
  }
};

const deleteNotesHandler = async (request, h) => {
  try {
    const notesJson = await readJson();
    const noteId = request.params.id;
    // const notesArray = notesJson.notes;
    let id = 0;
    notesJson.notes.forEach((element) => {
      id += 1;
      if (element.id === noteId) {
        console.log(id);
        // notesJson.notes.splice(id, 1);
      }
    });
    writeJson(JSON.stringify(notesJson));
    return h.response('Note deleted');
  } catch (err) {
    return h.response(err.message).code(500);
  }
};
const changeStateHandler = async (request, h) => {
  try {
    const notesJson = await readJson();
    const noteId = request.params.id;
    let id = 0;
    notesJson.notes.forEach((element) => {
      if (element.id === noteId) {
        notesJson.notes[id].active = !notesJson.notes[id].active;
        return;
      }
      id += 1;
    });
    // console.log(notesJson.notes, id);

    writeJson(JSON.stringify(notesJson));
    return h.response('State changed');
  } catch (err) {
    return h.response(err.message).code(500);
  }
};

module.exports = {getNotesHandler, postNotesHandler, deleteNotesHandler, changeStateHandler};
