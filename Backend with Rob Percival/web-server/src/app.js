const express = require('express');
const path = require('path');
const hbs = require('hbs');

// path module can be used for serving static files
// console.log(path.join(__dirname,'../public'));
const app = express();

// define paths for Express config
const publicDirectory = path.join(__dirname,'../public')
const viewsPath =  path.join(__dirname,'../templates/views')  // this path can be customized
const partialsPath = path.join(__dirname,'../templates/partials')


// setup handlebars eingine and views location
app.set('view engine', 'hbs');
app.set('views', viewsPath);
hbs.registerPartials(partialsPath); 

// Setup static directory to serve
app.use(express.static(publicDirectory));

app.get('', (req, res)=>{
    res.render('index',{
        title: 'Weather App',
        name:'Andrew Mead'
    });
})

app.get('/about', (req, res)=>{
    // res.sendFile(publicDirectory+'/about.html');
    res.render('about',{
        title: 'about us',
        name:'Santosh',
    });
})

app.get('/help', (req, res)=>{
    // res.sendFile(publicDirectory+'/help.html');
    res.render('help');

})

app.get('/help/*', (req, res)=>{
    // res.send('No forwarding links at help')
    res.render('404',{
        title: '404',
        name : 'Santosh',
        errorMessage: 'Help Article not found',
    })
})

// we can use * symbol for taking get request for other locations
app.get('*', (req, res)=>{
    // res.send('My 404 page')
    res.render('404',{
        title: '404',
        name : 'Santosh',
        errorMessage: 'Page not found',
    })
})

app.listen(5000, ()=>{
    console.log('App is lisening to port 3000');
})


// Note : nodemon src/app.js -e js,hbs 
// -e flag is for telling nodemon to restart for these list of extensions