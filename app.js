let _ = require("lodash");
let yargs = require("yargs");

let notes = require("./Notes.js");

let titleOption = {
  description: "Title of the Note",
  demand: true,
  alias: "t",
};
let bodyOption = {
  description: "body of the Note",
  demand: true,
  alias: "b",
};
let argv = yargs
  .command("add", "adding New Note", {
    title: titleOption,
    body: bodyOption,
  })
  .command("remove", "removing the Note", {
    title: titleOption,
  })
  .command("list", "Listing all the Notes")
  .command("read", "reading the selected Note", {
    title: titleOption,
  })
  .help().argv;
// console.log(argv);

// let secondinput = process.argv[3];
// console.log("secondInput :", secondinput);
let inputCommand = argv._[0];
console.log("Command :", inputCommand);

if (inputCommand === "list") {
  let allNotes = notes.getAll();
  console.log(`printing ${allNotes.length} note(s).`);
  allNotes.forEach((ele) => notes.logNote(ele));
} else if (inputCommand === "add") {
  let note = notes.addNote(argv.title, argv.body);
  if (note) {
    console.log(`There is the Note `);
    notes.logNote(note);
  } else {
    console.log(`-----------`);
    console.log("Title is duplicate!!!");
  }
} else if (inputCommand === "remove") {
  let removedMs = notes.removeNote(argv.title);
  let message = removedMs ? "Note was removed" : "Note Not Found"; //ternary operator like if statement
  console.log(message);
} else if (inputCommand === "read") {
  let note = notes.readingNote(argv.title);
  if (note) {
    console.log("Note Found");
    notes.logNote(note);
  } else {
    console.log("Note Not found");
  }
} else {
  console.log("Command is not recognized");
}
