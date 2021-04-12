const request = require('postman-request');
const chalk = require('chalk');
const geocode = require('./utils/geocode');
const forecast = require('./utils/forecast');

// const url = 'http://api.weatherstack.com/forecast?access_key=74b2c1e6c1e31829a09ce675b9e8be1d&query=espoo';

// {url:url, json:true} json=true will directly parse the response into json format

// Address => lat/long => Weather
// API key : 74b2c1e6c1e31829a09ce675b9e8be1d

// console.log(process.argv[2]);

const address = process.argv[2];
if(!address){
  console.log('Please provide an address!!');
}else{
  geocode(process.argv[2], (error, data)=>{
    if(error){
      return console.log('Error: ',error);
    }else{
      forecast(data.longitude, data.latitude, (error, forecastdata) => {
        if(error){
          return console.log(error)
        }else{
          console.log(data.location);
          console.log('Data', forecastdata);
        }
      });
    }
  });
}