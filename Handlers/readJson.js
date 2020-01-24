const fs = require('fs');
function readJson() {
  const rawdata = fs.readFileSync('../Resources/notes.json');
  return json = JSON.parse(rawdata);
}

module.exports = readJson;
