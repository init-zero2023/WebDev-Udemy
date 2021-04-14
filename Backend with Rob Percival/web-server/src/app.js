const express = require('express');
const path = require('path');

// path module can be used for serving static files
// console.log(path.join(__dirname,'../public'));
const publicDirectory = path.join(__dirname,'../public')
const app = express();
app.set('view engine', 'hbs');
app.use(express.static(publicDirectory));

app.get('/', (req, res)=>{
    res.render('index');
})

app.get('/about', (req, res)=>{
    res.sendFile(publicDirectory+'/about.html');
})

app.get('/help', (req, res)=>{
    res.sendFile(publicDirectory+'/help.html');

})

app.listen(3000, ()=>{
    console.log('App is lisening to port 3000');
})