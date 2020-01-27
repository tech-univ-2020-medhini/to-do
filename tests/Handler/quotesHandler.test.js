const getQuotesHandler = require('../../src/Handlers/quotesHandlers');
const Quote = require('inspirational-quotes');

describe('The get quote shandler', () => {
  it('should return a string', () => {
    const result = getQuotesHandler();
    expect(typeof result).toBe('string');
  });
  it('should return a string', () => {
    const mockRandom = jest.spyOn(Quote, 'getRandomQuote');
    getQuotesHandler();
    expect(mockRandom).toHaveBeenCalled();
  });
});
