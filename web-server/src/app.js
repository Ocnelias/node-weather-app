const path = require("path");
const express = require("express");
const hbs = require("hbs");
const geocode = require("./utils/geocode");
const weather = require("./utils/weather");

const app = express();

//paths
const publicDir = path.join(__dirname, "../public");
const viewsDir = path.join(__dirname, "../templates/views");
const partialsDir = path.join(__dirname, "../templates/partials");

//setup for hbs
app.set("view engine", "hbs");
app.set("views", viewsDir);
hbs.registerPartials(partialsDir);

//setup static directory to serve
app.use(express.static(publicDir));

app.get("", (req, res) => {
  res.render("index", {
    name: "Joe",
    title: "Weather",
  });
});

app.get("/help", (req, res) => {
  res.render("help", {
    name: "Joe",
    title: "Help",
  });
});

app.get("/weather", (req, res) => {
  if (!req.query.address) {
    return res.send({
      error: "empty address ",
    });
  } else {
    geocode(req.query.address, (error, req) => {
      if (error) {
        return res.send({
          error: "error",
        });
      } else {
        weather(req.lat, req.lng, (error, loc='london') => {
          return res.send({
            data: loc,
          });
        });
      }
    });
  }
});

app.get("/products", (req, res) => {
  if (!req.query.search) {
    return res.send({
      error: "empty search ",
    });
  }
  console.log(req.query);
  return res.send({
    products: [],
  });
});

app.get("*", (req, res) => {
  res.render("404");
});

app.listen(3000, () => {
  console.log("started on 3000");
});
