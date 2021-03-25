//jshint esversion:6

const express = require("express");

const app = express();

app.get('/', (request, response) => {
    // console.log(response);
    response.send("<h1>Hello, World</h1>");

});

app.get('/contact', (req, res) => {
    // console.log(res);
    res.send("Contact me @ +918287596486");

});

app.get('/about', (request, response) => {
    // console.log(response);
    response.send("I am computer geeks learning different programming languages and improving my skills for getting a good job and make my upcoming life bit more easier");

});
app.get('/hobbies', (request, response) => {
    // console.log(response);
    response.send("<ul><li>coffee</li><li>code</li><li>football</li></ul>");

});

app.listen(3000, () => {
    console.log("server started at 3000");
});