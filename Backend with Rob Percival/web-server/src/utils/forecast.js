const request = require('postman-request');

const forecast = (lat, long, callback)=>{
    const url = `http://api.weatherstack.com/forecast?access_key=74b2c1e6c1e31829a09ce675b9e8be1d&query=${lat},${long}`;
    request({url: url, json: true},(error, response)=>{
        if(error){
            callback('Unable to connect to mapbox api', undefined);
        }else if(response.body.error){
            callback('Unable to find Location for desired coordinates', undefined);
        }else{
            callback(undefined, {
                temperature : response.body.current.temperature,
                feels_like : response.body.current.feelslike,
            });
        }
    });
}

module.exports = forecast;