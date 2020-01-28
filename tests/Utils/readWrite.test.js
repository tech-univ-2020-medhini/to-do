const {readJson, writeJson} = require('../../src/Utils/fileOperations');
const fs = require('promise-fs');

describe('The read json function', () => {
  it('Should call the fs.readFile function', (done) => {
    const spiedOn = jest.spyOn(fs, 'readFile');
    readJson();
    expect(spiedOn).toHaveBeenCalledWith('./Resources/notes.json');
    done();
  });
});
describe('The write json function', () =>{
  it('Should call the fs.writeFile function', (done) => {
    const spiedOn = jest.spyOn(fs, 'writeFile');
    writeJson();
    expect(spiedOn).toHaveBeenCalledWith('./Resources/notes.json', undefined);
    done();
  });
});
