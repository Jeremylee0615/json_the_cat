const request = require('request');


const fetchBreedDescription = function(breedType,callback) {
  const address = `https://api.thecatapi.com/v1/breeds/search?q=${breedType}`;
  request(address,(error, respones, body) => {
    if (error) {
      callback(`Oops! Something went wrong...: ${error}`, null);
    }
    const obtained = JSON.parse(body);
    if (obtained[0]) {
      callback(null,obtained[0].description);
    } else {
      callback(`Sorry, we were not able to find ${breedType}.`, null);
    }
  });
};

module.exports = { fetchBreedDescription };