const readWrite = require('../Utils/readWrite');
const {uuid} = require('uuidv4');

const getNotesHandler = async (request, h) => {
  const json = await readWrite.readJson();
  return h.response(json);
};

const postNotesHandler = async (request, h) => {
  try {
    const notesJson = await readWrite.readJson();
    const note = request.payload;

    note.id = uuid();
    note.active = true;

    notesJson.notes = [...notesJson.notes, note];
    readWrite.writeJson(JSON.stringify(notesJson));
    return h.response('Note added');
  } catch (err) {
    return h.response(err.message);
  }
};

const deleteNotesHandler = async (request, h) => {
  try {
    const notesJson = await readWrite.readJson();
    const noteId = request.params.id;
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
    return h.response('Note deleted');
  } catch (err) {
    return h.response(err.message);
  }
};

const changeStateHandler = async (request, h) => {
  try {
    const notesJson = await readWrite.readJson();
    const noteId = request.params.id;
    let id = 0;
    // notesJson.notes = noteJson.notes.filter((note)=>note.id !== noteId);
    notesJson.notes.forEach((element) => {
      if (element.id === noteId) {
        notesJson.notes[id].active = !notesJson.notes[id].active;
        return;
      }
      id += 1;
    });
    // console.log(notesJson.notes, id);

    readWrite.writeJson(JSON.stringify(notesJson));
    return h.response('State changed');
  } catch (err) {
    return h.response(err.message);
  }
};

module.exports = {getNotesHandler, postNotesHandler, deleteNotesHandler, changeStateHandler};
