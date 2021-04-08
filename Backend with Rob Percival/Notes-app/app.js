const validator = require('validator');
const yargs = require('yargs');
const fs = require('fs');
const notes = require('./notes');


// changing version of app with yargs
yargs.version('1.08.22');

// list of commands with yargs
yargs.command({
    command: 'add',
    description:'Add a new note',
    builder:{
        title:{
            type:'string',
            required:true,
           describe: 'Note Title' 
        },
        body:{
            type: 'string',
            required:true,
            describe: 'Note body',
        }
    },
    handler: function (argv) {
            // console.log("Title: "+ argv.title);
            // console.log("Body: "+argv.body);
            notes.addNote(argv.title, argv.body);
        },
});
yargs.command({
    command: 'remove',
    description:'Remove a note',
    builder:{
        title:{
            type:'string',
            required:true,
            describe: "Note Title"
        }
    },
    handler: function (argv) {
            notes.removeNote(argv.title);
        },
});
yargs.command({
    command: 'list',
    description:'List note',
    handler: function () {
            notes.getNotes();
        },
});
yargs.command({
    command: 'read',
    description:'Read note',
    builder:{
        title:{
            type: 'string',
            required:true,
            describe: "Note Title"
        }
    },
    handler: function (argv) {
            notes.readNote(argv.title);
        },
});

// this should be used or use yargs.parse()
// console.log(yargs.argv);

yargs.parse();
