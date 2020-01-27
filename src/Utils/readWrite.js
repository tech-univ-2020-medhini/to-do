const fs = require('promise-fs');

const readJson = async () => {
  const rawdata = await fs.readFile('./Resources/notes.json');
  return JSON.parse(rawdata);
};
const writeJson = async (args) => {
  fs.writeFile('./Resources/notes.json', args);
};


module.exports = {readJson, writeJson};
