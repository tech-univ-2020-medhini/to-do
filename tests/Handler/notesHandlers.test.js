const {getNotesHandler, postNotesHandler, changeStateHandler,
  deleteNotesHandler} = require('../../src/Handlers/notesHandlers');
const db = require('../../src/Utils/dbOperations');
describe('The get notes handler should', () =>{
  it('Should call readJson', async (done) => {
    const mockReadResponse = {
      'notes': [],
    };
    const mockCode = jest.fn();
    const mockH = {
      response: jest.fn(()=>{
        return {
          code: mockCode};
      }),
    };
    const mockGetNotes = jest.spyOn(db, 'getNotes');
    mockGetNotes.mockResolvedValue(mockReadResponse);
    await getNotesHandler(null, mockH);
    expect(mockGetNotes).toHaveBeenCalled();
    expect(mockH.response).toHaveBeenCalledWith(mockReadResponse);
    expect(mockCode).toHaveBeenCalledWith(200);
    // mockRead.mockRestore();
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
    const mockReadResponse = {
      'notes': [],
    };
    const mockCode = jest.fn();
    const mockH = {
      response: jest.fn(()=>{
        return {
          code: mockCode};
      }),
    };
    const mockInsert = jest.spyOn(db, 'insertNote');
    // const mockRead = jest.spyOn(readWrite, 'readJson');
    mockInsert.mockResolvedValue(true);
    await postNotesHandler(mockReq, mockH);
    expect(mockInsert).toHaveBeenCalled();
    expect(mockH.response).toHaveBeenCalledWith('Note added');
    expect(mockCode).toHaveBeenCalledWith(200);
    // mockRead.mockRestore();
    mockInsert.mockRestore();
    done();
  });
});
describe('The change state handler should', () =>{
  it('Should call writeJson', async (done) => {
    const mockReadResponse = {
      'notes': [{
        id: '69bdeb20-596e-4abd-985b-82dff67696f6',
        title: 'Note 1',
        description: 'something',
        active: true,
      }],
    };
    const expectedResponse = {
      'notes': [{
        id: '69bdeb20-596e-4abd-985b-82dff67696f6',
        title: 'Note 1',
        description: 'something',
        active: false,
      }],
    };
    const mockReq = {
      params: {
        id: '69bdeb20-596e-4abd-985b-82dff67696f6',
      },
    };
    const mockCode = jest.fn();
    const mockH = {
      response: jest.fn(()=>{
        return {
          code: mockCode};
      }),
    };
    const mockChange = jest.spyOn(db, 'changeState');
    // const mockRead = jest.spyOn(readWrite, 'readJson');
    mockChange.mockResolvedValue(true);
    await changeStateHandler(mockReq, mockH);
    expect(mockChange).toHaveBeenCalledWith(mockReq.params.id);
    expect(mockH.response).toHaveBeenCalledWith('State changed');
    expect(mockCode).toHaveBeenCalledWith(200);
    // mockRead.mockRestore();
    mockChange.mockRestore();
    done();
  });
});
describe('The delete notes handler should', () =>{
  it('Should call writeJson', async (done) => {
    const mockReadResponse = {
      'notes': [{
        id: '69bdeb20-596e-4abd-985b-82dff67696f6',
        title: 'Note 1',
        description: 'something',
        active: true,
      }],
    };
    const expectedResponse = {
      'notes': [],
    };
    const mockReq = {
      params: {
        id: '69bdeb20-596e-4abd-985b-82dff67696f6',
      },
    };
    const mockCode = jest.fn();
    const mockH = {
      response: jest.fn(()=>{
        return {
          code: mockCode};
      }),
    };
    const mockDelete = jest.spyOn(db, 'deleteNote');
    // const mockWrite = jest.spyOn(readWrite, 'writeJson');
    mockDelete.mockResolvedValue(true);
    await deleteNotesHandler(mockReq, mockH);
    expect(mockDelete).toHaveBeenCalledWith(mockReq.params.id);
    expect(mockH.response).toHaveBeenCalledWith('Note deleted');
    expect(mockCode).toHaveBeenCalledWith(200);
    // mockRead.mockRestore();
    mockDelete.mockRestore();
    done();
  });
});

