const readWrite = require('../Utils/fileOperations');
const db = require('../Utils/dbOperations');
const {uuid} = require('uuidv4');

const getNotesHandler = async (request, h) => {
  // const json = await readWrite.readJson();
  const json = await db.getNotes();
  return h.response(json).code(200);
};

const postNotesHandler = async (request, h) => {
  try {
    const notesJson = await readWrite.readJson();
    const note = request.payload;

    note.id = uuid();
    note.active = true;

    await db.insertNote(note);
    notesJson.notes = [...notesJson.notes, note];
    readWrite.writeJson(JSON.stringify(notesJson));
    return h.response('Note added').code(200);
  } catch (err) {
    return h.response(err.message).code(500);
  }
};

const deleteNotesHandler = async (request, h) => {
  try {
    const notesJson = await readWrite.readJson();
    const noteId = request.params.id;
    db.deleteNote(noteId);
    // const notesArray = notesJson.notes;
    // let id = 0;
    notesJson.notes = notesJson.notes.filter((note)=>note.id !== noteId);
    // notesJson.notes.forEach((element) => {
    //   if (element.id === noteId) {
    //     notesJson.notes.splice(id, 1);
    //   }
    //   id += 1;
    // });
    readWrite.writeJson(JSON.stringify(notesJson));
    return h.response('Note deleted').code(200);
  } catch (err) {
    return h.response(err.message).code(500);
  }
};
const changeStateHandler = async (request, h) => {
  try {
    const notesJson = await readWrite.readJson();
    const noteId = request.params.id;
    db.changeState(noteId);
    let id = 0;
    notesJson.notes.forEach((element) => {
      if (element.id === noteId) {
        notesJson.notes[id].active = !notesJson.notes[id].active;
        return;
      }
      id += 1;
    });
    // console.log(notesJson.notes, id);

    readWrite.writeJson(JSON.stringify(notesJson));
    return h.response('State changed').code(200);
  } catch (err) {
    return h.response(err.message).code(500);
  }
};

module.exports = {getNotesHandler, postNotesHandler,
  deleteNotesHandler, changeStateHandler};
