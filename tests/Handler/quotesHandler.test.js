const getQuotesHandler = require('../../src/Handlers/quotesHandlers');
const axios = require('axios').default;


describe('The get quotes handler', () => {
  const mockCode = jest.fn();
  const mockH = {
    response: jest.fn(() => {
      return {code: mockCode};
    }),
  }; 500;
  it('should call axiom.get with correct data when the api call succeeds', async (done) => {
    const json = {
      'data': {
        'content': 'Content',
        'author': 'Author',
      },
    };
    axios.get = jest.fn().mockResolvedValue(json);
    await getQuotesHandler(null, mockH);
    expect(mockH.response).toHaveBeenCalledWith(`Content
    -Author`);
    expect(mockH.response().code).toHaveBeenCalledWith(200);
    axios.get.mockReset();
    done();
  });
  it('should call h.response with code 204 if no data is received', async (done) => {
    const json = {
      'data': {},
    };
    axios.get = jest.fn().mockResolvedValue(json);
    await getQuotesHandler(null, mockH);
    expect(mockH.response).toHaveBeenCalledWith('No data');
    expect(mockH.response().code).toHaveBeenCalledWith(204);
    axios.get.mockReset();
    done();
  });
  it('Should return h.response with error message when the get request fails', async () => {
    axios.get = jest.fn().mockRejectedValue(new Error('Failed'));
    await getQuotesHandler(null, mockH);
    expect(mockH.response).toHaveBeenCalledWith('Failed');
    expect(mockH.response().code).toHaveBeenCalledWith(500);
  });
  // it('Should return h.response with error message when the get request fails', async () => {
  //   axios.get = jest.fn().mockRejectedValue(new Error('Failed'));
  //   await getQuotesHandler(null, mockH);
  //   expect(mockH.response).toHaveBeenCalledWith('Failed');
  //   expect(mockH.response().code).toHaveBeenCalledWith(500);
  // });
});
