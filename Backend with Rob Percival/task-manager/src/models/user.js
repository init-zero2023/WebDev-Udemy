const mongoose = require('mongoose')
const validator = require('validator');

const User = mongoose.model('User',{
    name:{
        type: String,
        required: true,
        trim: true,   // for trimming spaces before and after value
    },
    age:{
        type: Number,
        required: true,
        default: 0,
        validate(value){
            if(value<0){
                throw new Error('Age must be a positive number')
            }else if (value<18){
                throw new Error('You are not allowed to enter as less than 18')
            }
        }
    },
    email:{
        type: String,
        trim: true,   // for trimming spaces before and after value
        required: true,
        validate(value){
            if (!validator.isEmail(value)){
                throw new Error('Email is not valid')
            }
        }       
    },
    password:{
        type: String,
        required: true,
        trim: true,
        // validate(value){
        //     if(value.length < 6){
        //         throw new Error('Password is too short. Try a new password with length more than 6')
        //     }else if(value.includes("password")){
        //         throw new Error('Your password is predictabale. Try something new')
        //     }
        minlength: 7,
        validate(value){
            if(value.toLowerCase().includes("password")){
                        throw new Error('Password cannot contain "password"')
            }
        }
    }
})

module.exports = User;