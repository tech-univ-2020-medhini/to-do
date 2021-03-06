const buildServer = require('../src/server');
const server = buildServer();

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
  it('Should should return the correct status code when put is called with the right url', async (done) =>{
    const injectOptions = {
      method: 'PUT',
      url: '/notes/2162440f-cbcb-4f92-b470-59b6e7a7ded8',
    };
    const response = await server.inject(injectOptions);
    expect(response.statusCode).toEqual(200);
    done();
  });
  it('Should should return the correct status code when put is called with the right url', async (done) =>{
    const injectOptions = {
      method: 'DELETE',
      url: '/notes/2162440f-cbcb-4f92-b470-59b6e7a7ded8',
    };
    const response = await server.inject(injectOptions);
    expect(response.statusCode).toEqual(200);
    done();
  });
});
