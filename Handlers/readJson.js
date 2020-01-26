const fs = require('promise-fs');

const readJson = async () => {
  const rawdata = await fs.readFile('../Resources/notes.json');
  return JSON.parse(rawdata);
};

module.exports = readJson;
