const chalk = require('chalk');
const fs = require ('fs');

const addNote = (title, body) => {
    const notes = loadNotes();
   // const duplicateNotes = notes.filter((note) => note.title === title);
     const duplicateNote = notes.forEach(note => note.title === title );
     debugger;
     
    if(!duplicateNote){
        notes.push({
            title: title,
            body: body
        })
        console.log(chalk.bgGreen.inverse('new note added'));
    } else {
        console.log(chalk.bgGreen.inverse('No title is taken!!'));
      
    }
    saveNotes(notes);
    console.log(notes);
}

const removeNote = (title) => {
    const notes = loadNotes();
    const newNotes =  notes.filter((note) => note.title !== title);

if (newNotes.length < notes.length){
    console.log(chalk.bgGreen.inverse("Note Removed with title " + title));
    saveNotes(newNotes);
} else if (newNotes.length == notes.length) {
    console.log(chalk.bgRed.inverse("NO Notes found with title  " + title));
}      
}

const readNote = (title) => {
    const notes = loadNotes();
    const foundNote = notes.find((note) => note.title === title);
    if(foundNote ){
        console.log("Notes Title " + chalk.bgGreen.grey(foundNote.title) +"  " + chalk.bgGreen.grey(foundNote.body));
    }else {
        console.log("Error " + chalk.bgRed(" Not notes Found"));
    }
}      

const listAllNotes = () => {
    console.log( "Here I am listing the notes");
    const notes = loadNotes();
    notes.forEach(note => {
        console.log(chalk.bgBlue.inverse(note.title));
       // console.log("Note " + notes.indexOf(note) + "  " + chalk.bgBlue.inverse(JSON.stringify(note)));
    });      
}

const saveNotes = (notes) => {
    fs.writeFileSync('notes.json', JSON.stringify(notes));
}

const loadNotes = () => {
    try {
        return JSON.parse(fs.readFileSync('notes.json').toString());
    } catch (e){
        return [];
    }
}

module.exports = {
    addNote,
    removeNote,
    listAllNotes,
    readNote

 } ;