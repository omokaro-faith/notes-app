const chalk = require('chalk');
const yargs = require('yargs');
const notes = require('./notes');

// Customize yargs version
yargs.version('1.1.0');

// Create add command
yargs.command({
  command: 'add',
  describe: 'Add a new note',
  handler: (argv) => {
    const { title, body } = argv;
    notes.addNotes(title, body);
  },
  builder: {
    title: {
      describe: 'Note Title',
      demandOption: true,
      type: 'string',
    },
    body: {
      describe: 'Note Body',
      demandOption: true,
      type: 'string',
    },
  },
});

// Create remove command
yargs.command({
  command: 'remove',
  describe: 'Remove a new note',
  handler: (argv) => {
    notes.removeNotes(argv.title)
  },
  builder: {
    title: {
      type: 'string',
      demandOption: true,
      describe: 'Note Title',
    }
  }
});

// Create list command
yargs.command({
  command: 'list',
  describe: 'Listing new notes',
  handler: () => {
    console.log('Listing new notes');
  }
});


// Create read command
yargs.command({
  command: 'read',
  describe: 'Read a new note',
  handler: () => {
    console.log('Read a new note');
  },
});

yargs.parse(); // Returns the args arguement;


