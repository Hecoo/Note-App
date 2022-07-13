const { Console } = require("console");
let fs = require("fs");

let fetchNotes = () => {
  try {
    //try catch if the notes are empty the program will crash
    let notestring = fs.readFileSync("Notes.json"); // fetch the notes
    return JSON.parse(notestring);
  } catch (err) {
    return [];
  }
};
let saveNotes = (notes) => {
  fs.writeFileSync("Notes.json", JSON.stringify(notes)); // write in the notes
};

let addNote = (title, body) => {
  let notes = fetchNotes();
  let note = {
    title,
    body,
  };

  let duplicate = notes.filter((ele) => ele.title === title);
  if (duplicate.length === 0) {
    notes.push(note); // update the notes
    saveNotes(notes);
    return note;
  }
};

let getAll = () => {
  console.log("Listing all notes");
  return fetchNotes();
};

let removeNote = (title) => {
  let notes = fetchNotes(); //fetch the notes
  let removingNotes = notes.filter((ele) => ele.title !== title);
  saveNotes(removingNotes); // updating the notes
  return notes.length !== removingNotes.length;
};

let readingNote = (title) => {
  let notes = fetchNotes();
  let FetchedNote = notes.filter((ele) => ele.title === title);
  return FetchedNote[0];
};

let logNote = (note) => {
  debugger;
  console.log(`-----------`);
  console.log(`title : ${note.title}`);
  console.log(`body: ${note.body}`);
};

module.exports = {
  addNote,
  getAll,
  removeNote,
  readingNote,
  logNote,
};
