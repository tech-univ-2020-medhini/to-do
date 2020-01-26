const fs = require('promise-fs');
function writeJson(args) {
  fs.writeFile('../Resources/notes.json', args);
}

module.exports = writeJson;
