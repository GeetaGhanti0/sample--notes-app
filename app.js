
const validator = require('validator');
const chalk = require('chalk');
const yargs = require('yargs');
const notes = require('./notes.js');
const { demandOption } = require('yargs');

//console.log(process.argv);
//console.log(yargs.argv);

//const command = process.argv[2];

//create a add command
yargs.command({
    command: 'add', 
    describe: 'add a new note',
    builder: {
        title: {
            describe: 'Notes titles',
            demandOption: true,
            type: 'string'
        }, 
        body: {
            describe: 'Notes body',
            demandOption: true,
            type: 'string'
        }
    },
    handler(argv){
      notes.addNote(argv.title, argv.body);
    }
});
//create a remove note
yargs.command({
    command: 'remove', 
    describe: 'Remove  a new note',
    builder: {
        title : {
            type: 'string',
            describe: 'Note Title',
            demandOption: true
        }
    },
    handler(argv){
       notes.removeNote(argv.title);
    }
});

//reading a note
yargs.command({
    command: 'read', 
    describe: 'read a note',
    builder :{
        title : {
            type:'string',
            describe: 'Notes Title',
            demandOption : true
        }
    }, 
    handler(argv){
        notes.readNote(argv.title);
    }
});

//listing all the notes
yargs.command({
    command: 'listNotes', 
    describe: 'list all the notes',
    handler(argv){
        notes.listAllNotes(argv.title);
     }
});

yargs.parse();
//console.log(yargs.argv);




