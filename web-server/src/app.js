const path = require("path");
const express = require("express");
const app = express();
const PORT = 3000;
const hbs = require('hbs');

console.log(__dirname);
console.log(path.join(__dirname, "../public"));

//Define paths for express confiq
const publicDirectoryPath = path.join(__dirname, "../public");
const viewsPath = path.join(__dirname, '../templates/views');
const partialsPath = path.join(__dirname, '../templates/partials')

//setup express middleware for static files
app.use(express.static(publicDirectoryPath));

//set upp dynamic template handling
app.set("view engine", "hbs");
app.set("views", viewsPath);
hbs.registerPartials(partialsPath);

app.get("/", (req, res) => {
  res.render("index", {
    name: "Ismail",
    weather: "hot",
    title: "Weather"
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
    name: "Ismail Amin"
  });
});

app.get("/weather", (req, res) => {
  res.send({
    forecast: "The forecast is 28 degrees",
    location: "Mogadishu",
  });
});

app.get("help/*", (req, res) => {
  res.render("404", {
    404: undefined,
    helpArticleError: "help artile not found",
    title: "Error Page!",
    name: "Ismail Amin"
  })
})

app.get("*", (req, res) => {
  res.render("404", {
    title: "Error Page!",
    404: "my 404 page",
    helpArticleError: undefined,
    name: "Ismail Amin"
  })
  
})

app.listen(PORT, () => {
  console.log(`App listening on port ${PORT}`);
});
