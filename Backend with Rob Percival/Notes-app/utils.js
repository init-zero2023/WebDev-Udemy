console.log('utils.js');
const fs = require('fs');
const name = "Mike";

const add = (a, b)=>{
    return a+b;
}
const getNotes = ()=>{
    fs.readFile('notes.txt',(err, data)=>{
        if(err){
            console.log(err);
        }else{
            // return data;
            return data.toString();
        }
    });
};


module.exports = getNotes;