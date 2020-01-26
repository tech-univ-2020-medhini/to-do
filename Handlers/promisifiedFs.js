const fs = require('fs');
const promisifyFs = (filename) => {
  const newFunc = new Promise((resolve, reject) => {
    fs.readFile(filename, 'utf8', (err, data) => {
      if (!err) {
        resolve(data);
      }
      reject(err);
    });
  });
  return newFunc;
};

module.exports = promisifyFs;
