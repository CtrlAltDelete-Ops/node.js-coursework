const request = require('postman-request');
// const geocode = require('./geocode.js');

/** define function
 * Request data
 * create conditionals for error management
 * export founction
 * test
 */

const data ={
    longitude: '21.422487',
    latitude: '39.826206'
}

const forecast = ({longitude, latitude} = {}, callback) => {
    const url = 'https://api.weatherstack.com/current?access_key=1c1f2ec6d6f19ff44179510251d3d09e&query=' +encodeURIComponent(latitude) + "," + encodeURIComponent(longitude);
    request({url, json: true}, (error, { body }) => {
        if(error) {
            callback("Couldn't fetch weather data!", undefined);
        } else if (body.error) {
            callback(body.error.info, undefined)
        } else {
            callback(undefined, body)
        }
    })
}

module.exports = forecast;