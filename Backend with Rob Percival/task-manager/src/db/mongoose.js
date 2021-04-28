const mongoose = require('mongoose');


mongoose.connect('mongodb://127.0.0.1:27017/tasks-manager-api',{
    useNewUrlParser: true,
    useCreateIndex: true,
    useUnifiedTopology: true,
    useFindAndModify: false,
})



// __v => stores the version of the data
// data sanitization : It allows us to modify the data before saving it
// npm validator library allow us to validate our data

// REST api : Representational state transfer api30