const request = require('postman-request');


const geocode = (address, callback)=>{
    address = encodeURIComponent(address);  // for making address compatable with url if we enter something which is not address, it will convert that to url compatible
    const url = `https://api.mapbox.com/geocoding/v5/mapbox.places/${address}.json?access_token=pk.eyJ1IjoiaW5pdHplcm8iLCJhIjoiY2tuZGVqaWJhMWdmbjJ4bGM1N2Rmc3hhbCJ9.3SyQo6IfUXnF9oWrZP21nw&limit=1`;

    request({url: url, json:true}, (error, response)=>{
      if(error){
        callback('Unable to connect to location serivces', undefined);
      }else if(response.body.features.length == 0){
        callback('Unable to find desired location. Try some different location', undefined);
      }else{
        callback(undefined, {
          latitude: response.body.features[0].center[0],
          longitude: response.body.features[0].center[1],
          location: response.body.features[0].place_name,
        });
      }
    });
}

module.exports = geocode;