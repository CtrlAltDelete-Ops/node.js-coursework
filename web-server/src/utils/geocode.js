const request = require("postman-request");

const geocode = (address, callback) => {
    const url = 'https://api.mapbox.com/search/geocode/v6/forward?q=' + encodeURIComponent(address) + '&limit=1&access_token=pk.eyJ1IjoiaXNtYWlsLWFtaW4iLCJhIjoiY204MjdpNXN4MWh5eDJqczZhaXhhN3RraSJ9.Da5fA9flOk3fo7DeNzwmQg';
    request({url, json: true}, (error, { body }) => {
      if(error) {
        callback('Cannot fetch geocode data', undefined);
      } else if (body.features[0] === undefined) {
        callback('cannot find specified location', undefined);
      } else {
        callback(undefined, {
          longitude: body.features[0].properties.coordinates.longitude,
          latitude: body.features[0].properties.coordinates.latitude
        })
      }
    })
  }

  module.exports = geocode;