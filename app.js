console.log("starting app.js");

/*
    Libraries to import
*/
const fs = require('fs');
const _ = require('lodash');
const yargs = require('yargs');
const notes = require('./notes');

//Watch which argument is passed through the command line
const argv = yargs.argv;
var command = process.argv[2];

// console.log(process.argv);
// console.log(argv);
// console.log(`Command: ${command}`);

if(command === 'add'){
    note = notes.addNote(argv.title, argv.body);
    if(note){
        notes.logNote(note);
    }else{
        console.log('title taken');
    }
}else if(command === 'list'){
    notes.getAll();
}else if(command === 'read'){
    var note = notes.getNote(argv.title);
    if(note){
        notes.logNote(note);
    }else{
        console.log('Note not found');
    }
}else if(command === 'remove'){
    var noteRemoved = notes.deleteNote(argv.title);
    var message = noteRemoved ? 'Note deleted' : 'Note not found';
    console.log(message);
}else{
    console.log('Command not recognized');
}

// var obj={
//     name: 'Daniel'
// }
// var stringObj = JSON.stringify(obj);
// console.log(typeof stringObj);
// console.log(stringObj);
// var personString = '{"name": "Andrew", "age": 25}';
// var person = JSON.parse(personString);
// console.log(typeof person);
// console.log(person.age);
