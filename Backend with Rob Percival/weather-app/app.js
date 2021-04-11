const request = require('postman-request');
const chalk = require('chalk');

const url = 'http://api.weatherstack.com/forecast?access_key=74b2c1e6c1e31829a09ce675b9e8be1d&query=Arkansas';

// {url:url, json:true} json=true will directly parse the response into json format


// Geocoding challange
// Address => lat/long => Weather


// Goal: Print the lat/long for Los Angeles
const location_url = 'https://api.mapbox.com/geocoding/v5/mapbox.places/Los%20Angeles.json?access_token=pk.eyJ1IjoiaW5pdHplcm8iLCJhIjoiY2tuZGVqaWJhMWdmbjJ4bGM1N2Rmc3hhbCJ9.3SyQo6IfUXnF9oWrZP21nw&limit=1';

request({url:location_url, json:true}, function (error, response) {
  console.log('error:', error); // Print the error if one occurred
  console.log('statusCode:', response && response.statusCode); // Print the response status code if a response was received
  // console.log('body:', response.body.current); // Print the HTML for the Google homepage.
  // console.log(`It is currently ${response.body.current.temperature} degress out there. It feels like ${response.body.current.feelslike} degree out there.`);
  console.log(response.body.features[0].center);
});

request({url:url, json:true}, function (error, response) {
  console.log('error:', error); // Print the error if one occurred
  console.log('statusCode:', response && response.statusCode); // Print the response status code if a response was received
  // console.log('body:', response.body.current); // Print the HTML for the Google homepage.
  console.log(`It is currently ${response.body.current.temperature} degress out there. It feels like ${response.body.current.feelslike} degree out there.`);
});


// API key : 74b2c1e6c1e31829a09ce675b9e8be1d
