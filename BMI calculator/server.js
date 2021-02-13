//jshint esversion:6

const express = require('express');
const bodyParser = require("body-parser")
const app = express();
app.use(bodyParser.urlencoded({ extended: true }));

app.get('/', (req, res) => {
    res.sendFile((__dirname + "/index.html"))
});

app.post('/', (req, res) => {
    var height = Number(req.body.height);
    var weight = Number(req.body.weight);
    height = height / 100;
    var BMI = weight / (height * height);

    res.send("Your BMI is " + BMI.toFixed(2));
    // res.send("Thanks for submitting");
    // console.log(height, weight, BMI);
});

app.listen(3000, () => {
    console.log("You are connnected to port 3000");
});