console.log('Starting notes.js');
const fs = require('fs');

var fetchNotes = () => {
    try{
        var stringNotes = fs.readFileSync('notes-data.json');
        return JSON.parse(stringNotes);
    }catch(e){
        return []
    }
}

var saveNotes = (notes) => {
    fs.writeFileSync('notes-data.json', JSON.stringify(notes));
}

var addNote = (title, body)=>{
    var notes = fetchNotes();
    var duplicateNotes = notes.filter((note) => note.title === title);
    var note = {
        title,
        body
    }
    if (duplicateNotes.length === 0){
        notes.push(note);
        saveNotes(notes);
        return note;
    }
};
var getAll = () => {
    console.log('Getting all notes'); 
}
var deleteNote = (title) => {
    var notes = fetchNotes();
    var filteredNotes = notes.filter((note) => note.title !== title);
    saveNotes(filteredNotes);
    return notes.length !== filteredNotes.length;
}
var getNote = (title) => {
    var notes = fetchNotes();
    var filteredNotes = notes.filter((note) => note.title === title);
    return filteredNotes[0];
}
var logNote = (note) => {
    console.log('--');
    console.log(`Title: ${note.title}`);
    console.log(`Body: ${note.body}`);
};

module.exports.add = (a,b)=>{
    return a+b;
}
module.exports = {
    addNote, // if the property have the same name of its value
    getAll: getAll,
    deleteNote,
    getNote,
    logNote,
};