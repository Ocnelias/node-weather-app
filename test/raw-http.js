const https = require("https");

const url =
  "https://api.opencagedata.com/geocode/v1/json?q=Liverpool&key=0a9cbe09dae845cd9106816309ab4127";

const req = https.request(url, (response) => {
  let data = "";

  response.on("data", (chunk) => {
    data = data + chunk.toString();
  });

  response.on("end", () => {
    console.log(data);
  });
});

req.on("error", (error) => {
  console.log(error);
});

req.end();
