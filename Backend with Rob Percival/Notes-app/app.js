const validator = require('validator');
const chalk = require('chalk');
const yargs = require('yargs');
const fs = require('fs');

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
            console.log("Title: "+ argv.title);
            console.log("Body: "+argv.body);
        },
});
yargs.command({
    command: 'remove',
    description:'Remove a note',
    builder:{
        title:{
            required:true,
            describe: "Note Title"
        }
    },
    handler: function (argv) {
            console.log("Removing "+argv.title);
        },
});
yargs.command({
    command: 'list',
    description:'List note',
    handler: function () {
            console.log("Listing your notes");
        },
});
yargs.command({
    command: 'read',
    description:'Read note',
    builder:{
        title:{
            required:true,
            describe: "Note Title"
        }
    },
    handler: function (argv) {
            console.log("Reading "+argv.title);
        },
});

// this should be used or use yargs.parse()
// console.log(yargs.argv);

yargs.parse();
