const yargs = require("yargs");
const notes = require('./notes.js')

yargs.command({
  command: "add",
  describe: "add a note",
  builder: {
    title: {
      describe : 'note title',
      demandOption: true
    },
  },
  handler: function (argv) {
    notes.addNote(argv.title, argv.body);
  },
});

yargs.command({
  command: "remove",
  describe: "remove a note",
  builder: {
    title: {
      describe : 'note title',
      demandOption: true,
    },
  },
  handler: function (argv) {
    notes.removeNote(argv.title)
  },
});


yargs.command({
  command: "add",
  describe: "add a note",
  builder: {
    title: {
      describe : 'note title',
      demandOption: true
    },
  },
  handler: function (argv) {
    notes.addNote(argv.title, argv.body);
  },
});

yargs.command({
  command: "list",
  describe: "list",
  handler: function () {
    notes.listNotes()
  },
});

yargs.command({
  command: "read",
  describe: "read a note",
  builder: {
    title: {
      describe : 'read',
      demandOption: true
    },
  },
  handler: function (argv) {
    notes.readNotes(argv.title);
  },
}); 


console.log(yargs.argv);
