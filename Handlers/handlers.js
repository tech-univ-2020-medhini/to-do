const readJson = require('./readJson');

function getNotesHandler(request, h) {
  const json = readJson();
  return h.response(json);
}

module.exports = getNotesHandler;
