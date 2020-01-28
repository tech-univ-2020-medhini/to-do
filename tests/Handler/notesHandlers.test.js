const {getNotesHandler, postNotesHandler, changeStateHandler, deleteNotesHandler} = require('../../src/Handlers/notesHandlers');
const readWrite = require('../../src/Utils/fileOperations');
describe('The get notes handler should', () =>{
  it('Should call readJson', async (done) => {
    const mockCode = jest.fn();
    const mockH = {
      response: ()=>{
        return {
          code: mockCode,
        };
      },
    };
    const mockRead = jest.spyOn(readWrite, 'readJson');
    await getNotesHandler(null, mockH);
    expect(mockRead).toHaveBeenCalled();
    expect(mockCode).toHaveBeenCalledWith(200);
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
    const mockCode = jest.fn();
    const mockH = {
      response: (res)=>{
        return {
          code: mockCode,
        };
      },
    };
    const mockWrite = jest.spyOn(readWrite, 'writeJson');
    await postNotesHandler(mockReq, mockH);
    expect(mockWrite).toHaveBeenCalled();
    expect(mockCode).toHaveBeenCalledWith(200);
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
    const mockCode = jest.fn();
    const mockH = {
      response: ()=>{
        return {
          code: mockCode,
        };
      },
    };
    const mockWrite = jest.spyOn(readWrite, 'writeJson');
    await changeStateHandler(mockReq, mockH);
    expect(mockWrite).toHaveBeenCalled();
    // expect(mockCode).toHaveBeenCalledWith(200);
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
    const mockCode = jest.fn();
    const mockH = {
      response: jest.fn((res)=>{
        return {code: mockCode}
      });
    };
    const mockRead = jest.spyOn(readWrite, 'readJson');
    const mockWrite = jest.spyOn(readWrite, 'writeJson');
    mockRead.mockResolvedValue({notes: []});
    await deleteNotesHandler(mockReq, mockH);
    expect(mockWrite).toHaveBeenCalled();
    done();
  });
});

