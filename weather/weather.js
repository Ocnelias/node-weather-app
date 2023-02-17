const request = require("request");

const weather = (lat, lng, callback) => {
  const url =
    "http://api.weatherstack.com/current?access_key=aa89619118e3ebdb3ecfec6883db25a9&query=" +
    lat +
    "," +
    lng;

  request({ url: url, json: true }, (error, response) => {
    if (error) {
      callback("Unable to connect", undefined);
    } else {
      callback(undefined, {
        current: response.body,
      });
    }
  });
};

module.exports = weather;
