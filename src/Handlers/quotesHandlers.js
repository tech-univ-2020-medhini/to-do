
const axios = require('axios').default;

const getQuotesHandler = async (request, h) => {
  try {
    const jsonResponse = await axios.get('http://api.quotable.io/random');
    const dataJson = jsonResponse.data;
    if (!dataJson || !dataJson.content || !dataJson.author) {
      return h.response('No data').code(204);
    }
    return h.response(`${dataJson.content}
    -${dataJson.author}`).code(200);
  } catch (err) {
    return h.response(err.message).code(500);
  }
};

module.exports = getQuotesHandler;
