const server = require('./server');

const init = async () => {
  await server.initialize();
  return server;
};

describe('The server ', () => {
  let server;

  beforeEach(async () => {
    server = await init();
  });

  afterEach(async () => {
    await server.stop();
  });
  it('Should should return the correct status code when get is called with the right url', async (done) =>{
    const injectOptions = {
      method: 'GET',
      url: '/notes',
    };
    const response = await server.inject(injectOptions);
    expect(response.statusCode).toEqual(200);
    done();
  });
  it('Should should return the correct status code when get is called with the right url', async (done) =>{
    const injectOptions = {
      method: 'POST',
      url: '/notes',
      payload: {
        'title': 'Work',
        'description': 'More work',
      },
    };
    const response = await server.inject(injectOptions);
    expect(response.statusCode).toEqual(200);
    done();
  });
});
