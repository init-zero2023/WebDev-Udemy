const express = require('express');
const path = require('path');
const hbs = require('hbs');
const request = require('postman-request');
const geocode = require('./utils/geocode');
const forecast = require('./utils/forecast');


// path module can be used for serving static files
// console.log(path.join(__dirname,'../public'));
const app = express();

// define paths for Express config
const publicDirectory = path.join(__dirname, '../public')
const viewsPath = path.join(__dirname, '../templates/views')  // this path can be customized
const partialsPath = path.join(__dirname, '../templates/partials')


// setup handlebars eingine and views location
app.set('view engine', 'hbs');
app.set('views', viewsPath);
hbs.registerPartials(partialsPath);

// Setup static directory to serve
app.use(express.static(publicDirectory));

app.get('', (req, res) => {
    res.render('index', {
        title: 'Weather App',
        name: 'Santosh'
    });
})

app.get('/about', (req, res) => {
    // res.sendFile(publicDirectory+'/about.html');
    res.render('about', {
        title: 'About us',
        name: 'Santosh',
    });
})


app.get('/weather', (req, res) => {
    const address = req.query.address;
    if (!address) {
        return res.send({
            error: 'Please provide an address!!to find the weather',
        })
    }
    geocode(address, (error, data) => {
        if (error) {
            return res.send({
                error
            });
        }
        forecast(data.longitude, data.latitude, (error, forecastdata) => {
            if (error) {
                return res.send({error})
            }
            // console.log(data.location);
            // console.log('Data', forecastdata);
            res.send({
                location: data.location,
                forecastdata : `It's ${forecastdata.temperature} degree here and it feels like ${forecastdata.feels_like}degress.`,
            })
        });
    })
})

app.get('/products', (req, res) => {
    if (!req.query.search) {
        return res.send({
            error: 'You must provide a search term',
        })
    }
    console.log(req.query);
    res.send({
        products: [],
    })
})

app.get('/help', (req, res) => {
    // res.sendFile(publicDirectory+'/help.html');
    res.render('help', {
        title: 'Help',
        name: 'Santosh',
    });

})

app.get('/help/*', (req, res) => {
    // res.send('No forwarding links at help')
    res.render('404', {
        title: '404',
        name: 'Santosh',
        errorMessage: 'Help Article not found',
    })
})

// we can use * symbol for taking get request for other locations
app.get('*', (req, res) => {
    // res.send('My 404 page')
    res.render('404', {
        title: '404',
        name: 'Santosh',
        errorMessage: 'Page not found',
    })
})


app.listen(6600, () => {
    console.log('App is lisening to port 3000');
})


// Note : nodemon src/app.js -e js,hbs 
// -e flag is for telling nodemon to restart for these list of extensions