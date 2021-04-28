const express = require('express');
const router = new express.Router();
const User = require('../models/user')
const jwt = require('jsonwebtoken')
const auth = require('../middleware/auth')


router.post('/users', async (req, res) => {
    const newUser = new User(req.body)
    try {
        await newUser.save()
        const token = await newUser.generateAuthToken()
        res.status(201).send({ newUser, token })
    } catch (error) {
        res.status(400).send({error: error.message})
    }
})

router.post('/users/login', async (req, res) => {
    try {
        const user = await User.findByCredentials(req.body.email, req.body.password)
        const token = await user.generateAuthToken()
        res.send({ user, token })
    } catch (err) {
        res.status(400).send({error: err.message})
    }
})


router.post('/users/logout', auth, async (req, res)=>{
    try{
        req.user.tokens = req.user.tokens.filter((token)=>{
            return token.token !== req.token
        })
        await req.user.save()

        res.send()
    }catch(error){
        res.status(500).send({error: error.message})
    }
})

router.post('/users/logoutAll', auth, async (req, res)=>{
    try{
        req.user.tokens = []
        await req.user.save()
        res.send()
    }catch(error){
        res.status(400).send({ error: error.message})
    }
})

router.get("/users/me", auth, async (req, res) => {
    res.send(req.user)
})


router.patch("/users/me", auth, async (req, res) => {
    const updates = Object.keys(req.body)
    const allowedUpdates = ["name", "age", "email", "password"]
    const isValid = updates.every((update) => {
        return allowedUpdates.includes(update)
    })
    if (!isValid) {
        return res.status(400).send({ error: "invalid updates" })
    }
    try {


        // const updatedUser = await User.findByIdAndUpdate(_id, req.body, {new: true, runValidators:true})

        // changes required for running middleware properly
        updates.forEach((update) => {
            req.user[update] = req.body[update]
        })
        await req.user.save()
        res.send(req.user)
    } catch (err) {
        res.status(400).send(err)
    }
})


router.delete('/users/me', auth,  async (req, res) => {
    try {
        await req.user.remove()
        res.send(req.user)
    } catch (err) {
        res.status(500).send();
    }
})

module.exports = router;