const chalk = require('chalk');
const geocode = require('./utils/geocode');
const forecast = require('./utils/forecast')

const { argv } = process

let location;

if (argv[2]) {
  location = argv[2];
} else {
  location = undefined;
}

geocode(location, (error, {longitude,latitude}) => {
  if(error) {
    return console.log(error)
  }

  forecast(longitude, latitude, (error, data) => {
    if (error) {
      return console.log(error)
    }
    console.log(data.current.temperature)
  })
})

// forecast(44.1545, -75.7088, (error, data) => {
//   console.log('Error: ', error)
//   console.log('Data: ', data)
// })