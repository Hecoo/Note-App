// let ob = {
//   name: "mohsen",
// };

// let jsob = JSON.stringify(ob);

// console.log(jsob);
// console.log(typeof jsob);
// console.log(typeof ob);
// console.log(ob);

// let personString = '{"name":"Mohsen","age":28}';
// let personjson = JSON.parse(personString);

// console.log(personjson);
// console.log(typeof personjson);

let fs = require("fs");

let originalNote = {
  title: "Some title",
  body: "some body",
};

let noteString = JSON.stringify(originalNote);
fs.writeFileSync("notes.json", noteString);

let note = fs.readFileSync("notes.json");
let noteJson = JSON.parse(note);

console.log(typeof noteJson);
console.log(noteJson.title);
