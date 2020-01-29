const {getNotesHandler, postNotesHandler, changeStateHandler,
  deleteNotesHandler} = require('../../src/Handlers/notesHandlers');
const db = require('../../src/helpers/dbOperations');
describe('The get notes handler ', () =>{
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
    mockGetNotes.mockRestore();
    done();
  });
  it('Should return internal server error 500 if db fails', async (done) => {
    const mockCode = jest.fn();
    const mockH = {
      response: jest.fn(()=>{
        return {
          code: mockCode};
      }),
    };
    // console.log('reached');
    db.getNotes = jest.fn().mockRejectedValue(new Error('Internal server error'));
    // console.log('reached again');
    await getNotesHandler(null, mockH);
    expect(db.getNotes).toHaveBeenCalled();
    expect(mockH.response).toHaveBeenCalledWith('Internal server error');
    expect(mockCode).toHaveBeenCalledWith(500);
    db.getNotes.mockRestore();
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
    // const mockReadResponse = {
    //   'notes': [],
    // };
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
  it('Should return 500 internal server error if db fails', async (done) => {
    const mockReq = {
      payload: {
        'title': 'second',
        'description': 'More Work',
      },
    };
    const mockCode = jest.fn();
    const mockH = {
      response: jest.fn(()=>{
        return {
          code: mockCode};
      }),
    };
    db.insertNote = jest.fn().mockRejectedValue(new Error('Internal server error'));
    await postNotesHandler(mockReq, mockH);
    expect(db.insertNote).toHaveBeenCalled();
    expect(mockH.response).toHaveBeenCalledWith('Internal server error');
    expect(mockCode).toHaveBeenCalledWith(500);
    // mockRead.mockRestore();
    db.insertNote.mockRestore();
    done();
  });
});
describe('The change state handler should', () =>{
  it('Should return State changed with code 200', async (done) => {
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
  it('Should return 500 with error message if the db fails', async (done) => {
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
    // console.log(('reached'));
    db.changeState = jest.fn().mockRejectedValue(new Error('Internal server error'));
    // console.log('Reached again');
    await changeStateHandler(mockReq, mockH);
    expect(db.changeState).toHaveBeenCalledWith(mockReq.params.id);
    expect(mockH.response).toHaveBeenCalledWith('Internal server error');
    expect(mockCode).toHaveBeenCalledWith(500);
    // mockRead.mockRestore();
    db.changeState.mockRestore();
    done();
  });
  it('Should return 404 No note found if wrong id is passed', async (done) => {
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
    db.changeState = jest.fn().mockResolvedValue(false);
    await changeStateHandler(mockReq, mockH);
    expect(db.changeState).toHaveBeenCalledWith(mockReq.params.id);
    expect(mockH.response).toHaveBeenCalledWith('No note found');
    expect(mockCode).toHaveBeenCalledWith(404);
    db.changeState.mockRestore();
    done();
  });
});
describe('The delete notes handler should', () =>{
  it('Should respond with code 200 when the db operation succeeds', async (done) => {
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
  it('Should respond with code 500 with message internal server error when db fails', async (done) => {
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
    db.deleteNote = jest.fn().mockRejectedValue(new Error('Internal Server Error'));
    await deleteNotesHandler(mockReq, mockH);
    expect(db.deleteNote).toHaveBeenCalledWith(mockReq.params.id);
    expect(mockH.response).toHaveBeenCalledWith('Internal Server Error');
    expect(mockCode).toHaveBeenCalledWith(500);
    db.deleteNote.mockRestore();
    done();
  });
  it('Should return 404 No note deleted if wrong id is passed', async (done) => {
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
    db.deleteNote = jest.fn().mockResolvedValue(false);
    await deleteNotesHandler(mockReq, mockH);
    expect(db.deleteNote).toHaveBeenCalledWith(mockReq.params.id);
    expect(mockH.response).toHaveBeenCalledWith('No note deleted');
    expect(mockCode).toHaveBeenCalledWith(404);
    db.changeState.mockRestore();
    done();
  });
});

