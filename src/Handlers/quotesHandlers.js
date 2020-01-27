
const axios = require('axios').default;

const getQuotesHandler = async (request, h) => {
  const jsonResponse = await axios.get('http://api.quotable.io/random');
  const dataJson = jsonResponse.data;
  return `${dataJson.content}  
  -${dataJson.author}`;
};

module.exports = getQuotesHandler;
