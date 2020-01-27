const Quote = require('inspirational-quotes');

const getQuotesHandler = (request, h) => {
  return Quote.getRandomQuote();
};

module.exports = getQuotesHandler;
