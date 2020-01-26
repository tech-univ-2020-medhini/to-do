const {getNotesHandler, postNotesHandler} = require('./handlers');
const readJson = require('./readJson');
describe('The get notes handler should', () =>{
  it('Should return the json object', (done) => {
    const mockH = {
      response: jest.fn(),
    };
    getNotesHandler(null, mockH);
    expect(mockH.response).toHaveBeenCalledWith(readJson());
    done();
  });
});

describe('The post notes handler should', () =>{
  it('Should reply with note added', (done) => {
    const mockReq = {
      payload: {
        'title': 'work',
        'description': 'More Work',
      },
    };
    const mockH = {
      response: jest.fn(),
    };
    postNotesHandler(mockReq, mockH);
    expect(mockH.response).toHaveBeenCalledWith('Note saved');
    done();
  });
});
