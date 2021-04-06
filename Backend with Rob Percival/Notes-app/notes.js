const fs = require('fs');
var data;
const getNotes = ()=>{
    fs.readFile('./notes.txt', (err, data)=>{
        if(err){
            console.log(err);
        }else{
            // console.log(data.toString());
            console.log(data);
        }
    });
    // return data;
    return 'Your notes...';
};
console.log(getNotes());

module.exports = getNotes;