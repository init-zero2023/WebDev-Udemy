// we will fire request to some external apis without using any external module
const http = require('http');

const url = 'http://api.weatherstack.com/forecast?access_key=74b2c1e6c1e31829a09ce675b9e8be1d&query=espoo';

const request = http.request(url, (response)=>{
    let data = "";
    response.on('data', (chunk)=>{
        data+=chunk.toString();
        console.log(chunk);
    });
    response.on('end',()=>{ 
        console.log(JSON.parse(data).current.weather_icons[0]);
    });
});
request.on('error',(error)=>{
    console.log(error);
});
request.end();