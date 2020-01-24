const handler = require('./Handler');
const readJson = require('./readJson');
describe('The get Notes handler should', () =>{
  it('Should return the json object', () => {
    const mockH = {
      response: jest.fn(),
    };
    handler(null, mockH);
    expect(mockH.response).toHaveBeenCalledWith(readJson());
  });
});
