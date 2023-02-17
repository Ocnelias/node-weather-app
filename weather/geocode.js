const request = require("request");

const geocode = (address, callback) => {
  const url =
    "https://api.opencagedata.com/geocode/v1/json?q=" +
    address +
    "&key=0a9cbe09dae845cd9106816309ab4127";

  request({ url: url, json: true }, (error, response) => {
    if (error) {
      callback("Unable to connect", undefined);
    } else {
      callback(undefined, {
        lat: response.body.results[0].geometry.lat,
        lng: response.body.results[0].geometry.lng,
        location:response.body.results[0].formatted,
      });
    }
  });
};



module.exports= geocode