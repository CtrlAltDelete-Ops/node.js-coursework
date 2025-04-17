const path = require("path");
const express = require("express");
const app = express();
const PORT = 3000;
const hbs = require("hbs");
const forecast = require("./utils/forecast");
const geocode = require("./utils/geocode");

const print = (a) => console.log(a);

console.log(__dirname);
console.log(path.join(__dirname, "../public"));

//Define paths for express confiq
const publicDirectoryPath = path.join(__dirname, "../public");
const viewsPath = path.join(__dirname, "../templates/views");
const partialsPath = path.join(__dirname, "../templates/partials");

//setup express middleware for static files
app.use(express.static(publicDirectoryPath));

//set up dynamic template handling
app.set("view engine", "hbs");
app.set("views", viewsPath);
hbs.registerPartials(partialsPath);

app.get("/", (req, res) => {
  res.render("index", {
    name: "Ismail",
    weather: "hot",
    title: "Weather",
  });
});

app.get("/about", (req, res) => {
  res.render("about", {
    title: "About",
    name: "Ismail Amin",
    weather: "Cold",
  });
});

app.get("/help", (req, res) => {
  res.render("help", {
    helpMessage: "There is no help message!",
    title: "help",
    name: "Ismail Amin",
  });
});

app.get("/weather", (req, res) => {
  console.log(req.query)
  if (!req.query.address) {
    return res.send({
      Error: "There must be an address query"
    });
  }
  const forcastData = {
    forecast: "The forecast is 28 degrees",
    location: "Mogadishu",
    address: req.query.address
  }
  res.send(forcastData)
});

app.get("/products", (req, res) => {
  const address = req.query.search;
  if (!address) {
    return res.send({
      Error: "You must provide a search term!",
    });
  }

  geocode(address, (error, data) => {
    if (error) {
      return res.send({
        error
      });
    }

    forecast(data, (error, body) => {
      if (error) {
        return res.send({
          error
        })
      }
      res.send({
        weather: body.current.temperature + '°C',
        address
      })
    })

  })

  console.log(address);
});

app.get("/help/*", (req, res) => {
  res.render("404", {
    title: "Error Page!",
    helpArticleError: "help article not found!",
    name: "Ismail Amin",
  });
});

app.get("*", (req, res) => {
  res.render("404", {
    title: "Error Page!",
    errorMessage: "my 404 page",
    name: "Ismail Amin",
  });
});

app.listen(PORT, () => {
  console.log(`App listening on port ${PORT}`);
});
