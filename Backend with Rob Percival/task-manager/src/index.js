const express = require('express');
require('./db/mongoose');   // only making connection to db
const User = require('./models/user');
const Task = require('./models/task')


const app = express();
const port = process.env.PORT || 3000;


app.use(express.json());

app.post('/users', (req, res)=>{
    // console.log(req.body);
    const newUser = new User(req.body)

    newUser.save()
        .then(()=>{
            res.status(201).send(newUser);
        })
        .catch((error)=>{
            res.status(400).send(error);
        })
})

app.get("/users", (req, res)=>{
    User.find({ })
        .then((users)=> res.status(200).send(users))
        .catch((error)=> res.status(500).send());
})

app.get('/users/:id', (req,res)=>{
    const _id = req.params.id;
    // console.log(id);
    User.findById(_id)
        .then((user)=> {
            if(!user){
                return res.status(404).send();
            }
            res.status(200).send(user)
        })
        .then((error)=> res.status(500).send(error))

})

app.post('/tasks',(req, res)=>{
    const newTask = new Task(req.body);
    
    newTask.save()
        .then(()=>{
            res.status(201).send(newTask);
        })
        .catch((error)=>{
            res.status(400).send(error);
        })
})

app.get('/tasks', (req, res)=>{
    Task.find({})
        .then((tasks)=> res.status(200).send(tasks))
        .catch((error)=> res.status(505).send())
})

app.get('/tasks/:id', (req, res)=>{
    const _id = req.params.id;
    Task.findById(_id)
        .then((task)=>{
            if(!task)
                return res.status(404).send();
            res.status(200).send(task);
        })
        .catch((error)=> res.status(505).send(error))
})


app.listen(port,()=>{
    console.log(`Server is listening to port: ${port}`)
});


// patch :
// put :  