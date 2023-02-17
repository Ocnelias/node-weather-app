const geocode = require("./geocode");
const weather = require("./weather");
const process = require("process");

geocode(process.argv[2], (error, { lat, lng, location }) => {
  if (error) {
    return console.log(error);
  }
 // console.log(error);
  //console.log(data);
  weather(lat, lng, (error, data) => {
    console.log(data);
  });
});
