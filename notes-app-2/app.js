//set up yargs commands
//create notes file
//create utils with functionality for commands

const yargs = require("yargs");
const fs = require("fs");
const addNote = require("../notes-app-2/notes.js");

yargs.version("1.01");

yargs.command({
  command: "add",
  builder: {
    title: {
      type: "string",
      demandOption: true,
      describe: "add note",
    },
    body: {
      type: "string",
      demandOption: true,
    },
  },
  handler(argv) {
    addNote(argv.title, argv.body);
  },
});

yargs.command({
  command: "remove",
  describe: "removing a note",
  builder: {
    title: {
      type: "string",
      demandOption: true,
    },
    body: {
      type: "string",
      demandOption: true
    },
  },
  handler(argv) {
    removeNote(argv.title)
  }
})

yargs.parse();
console.log(process.argv);
