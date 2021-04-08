const fs = require('fs');
const chalk = require('chalk');
const getNotes = ()=>{
    const notes = loadNotes();
    notes.forEach((note)=>{
        console.log(chalk.blue.inverse.bold("Title: "+note.title));
        console.log(chalk.white.inverse.bold("Body: "+note.body));
    });
};

const addNote = (title, body)=>{
    notes = loadNotes();
    // console.log(notes);
    // const duplicateNotes = notes.filter((note)=>{
    //     return note.title === title;
    // });
    
    // find method will find first match and then stop running

    const duplicateNotes = notes.find((note)=>note.title === title)
    if(!duplicateNotes){
        notes.push({
            title:title,
            body:body
        });
        saveNote(notes);
        console.log(chalk.green.inverse.bold('New Note added successfully'));
    }else{
        console.log(chalk.red.inverse.bold('Note title already taken!! Try something else'));
    }
};

const saveNote = (notes)=>{
    const dataJSON = JSON.stringify(notes);
    fs.writeFileSync('notes.json', dataJSON);
};

const loadNotes = ()=>{
    try {
    const dataBuffer = fs.readFileSync('notes.json');
    const dataJSON = dataBuffer.toString();
    return JSON.parse(dataJSON);
    }catch (err){
        return [];
    }
}

const removeNote = (title)=>{
    try{
        const notes = loadNotes();
        const filteredNote = notes.filter((note)=>{
            return note.title !==title;
        });
        if(filteredNote.length === notes.length){
            console.log(chalk.red.inverse.bold("No note found."))
        }else{
            saveNote(filteredNote);
            console.log(chalk.green.inverse.bold("Note removed successfully"));
        }
    }catch(err){
        console.log(chalk.red.bold("No note found."))
    }
};

const readNote = (title)=>{
    const notes = loadNotes();
    const desiredNote = notes.filter((note)=>{
        return note.title === title;
    });
    if(desiredNote.length !== 0){
        console.log(chalk.white.inverse.bold(desiredNote[0].body));
    }else{
        console.log(chalk.red.inverse.bold("Note not present"));
    }
}



module.exports = {
    getNotes: getNotes,
    removeNote: removeNote,
    addNote: addNote,
    readNote: readNote,
}