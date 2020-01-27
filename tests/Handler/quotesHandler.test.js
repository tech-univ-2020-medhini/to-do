const getQuotesHandler = require('../../src/Handlers/quotesHandlers');
const axios = require('axios').default;

describe('The get quotes handler', () => {
  it('should return an object', () => {
    const result = getQuotesHandler();
    expect(result).toBeInstanceOf(Object);
  });
  it('should call axiom.get', (done) => {
    const mockRandom = jest.spyOn(axios, 'get');
    getQuotesHandler();
    expect(mockRandom).toHaveBeenCalled();
    done();
  });
});
