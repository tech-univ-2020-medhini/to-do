const {getNotesHandler, postNotesHandler} = require('../../src/Handlers/notesHandlers');
const readWrite = require('../../src/Utils/readWrite');
describe('The get notes handler should', () =>{
  it('Should call readJson', async (done) => {
    const mockH = {
      response: ()=>{},
    };
    const mockRead = jest.spyOn(readWrite, 'readJson');
    await getNotesHandler(null, mockH);
    expect(mockRead).toHaveBeenCalled();
    done();
  });
});

describe('The post notes handler should', () =>{
  it('Should call writeJson', async (done) => {
    const mockReq = {
      payload: {
        'title': 'second',
        'description': 'More Work',
      },
    };
    const mockH = {
      response: (res) => {},
    };
    const mockWrite = jest.spyOn(readWrite, 'writeJson');
    await postNotesHandler(mockReq, mockH);
    expect(mockWrite).toHaveBeenCalled();
    done();
  });
});
describe('The change state handler should', () =>{
  it('Should call writeJson', async (done) => {
    const mockReq = {
      params: {
        id: '69bdeb20-596e-4abd-985b-82dff67696f6',
      },
    };
    const mockH = {
      response: (res) => {},
    };
    const mockWrite = jest.spyOn(readWrite, 'writeJson');
    await postNotesHandler(mockReq, mockH);
    expect(mockWrite).toHaveBeenCalled();
    done();
  });
});
describe('The delete notes handler should', () =>{
  it('Should call writeJson', async (done) => {
    const mockReq = {
      params: {
        id: '69bdeb20-596e-4abd-985b-82dff67696f6',
      },
    };
    const mockH = {
      response: (res) => {},
    };
    const mockWrite = jest.spyOn(readWrite, 'writeJson');
    await postNotesHandler(mockReq, mockH);
    expect(mockWrite).toHaveBeenCalled();
    done();
  });
});

