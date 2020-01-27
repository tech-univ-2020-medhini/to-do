const {getNotesHandler, postNotesHandler} = require('./handlers');
let readJson = require('./readJson');
describe('The get notes handler should', () =>{
  it('Should return the json object', async (done) => {
    const mockH = {
      response: ()=>{},
    };
    readJson = jest.fn();
    await getNotesHandler(null, mockH);
    expect(readJson).toHaveBeenCalled();
    done();
  });
});

describe('The post notes handler should', () =>{
  it('Should reply with note added', async (done) => {
    const mockReq = {
      payload: {
        'title': 'second',
        'description': 'More Work',
      },
    };
    const mockH = {
      response: ()=>{},
    };
    readJson = jest.fn();
    await postNotesHandler(mockReq, mockH);
    expect(readJson).toHaveBeenCalled();
    done();
  });
});
