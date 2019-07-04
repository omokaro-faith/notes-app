const fs = require('fs');
const chalk = require('chalk');


const addNotes = (title, body) => {
  const notes = loadNotes();
  const duplicates = notes.find(note => note.title === title )

  if (!duplicates) {
    notes.push({
      title,
      body
    });
    saveNotes(notes);
    console.log(chalk.green.inverse('Notes added'))
  } else {
    console.log(chalk.red.inverse('Cannot save, Note title taken'));
  }
};

const saveNotes = (notes) => {
  const dataJSON = JSON.stringify(notes);

  fs.writeFileSync('notes.json', dataJSON);
}

const loadNotes = () => {
  try {
    const dataBuffer = fs.readFileSync('notes.json');
    const dataJson = dataBuffer.toString();
    return JSON.parse(dataJson);
  } catch(e) {
    return [];
  }
}

const removeNotes = (title) => {
  const notes = loadNotes();
  const filteredList = notes.filter(note => note.title !== title)

  if (notes.length === filteredList.length) {
    console.log(chalk.red.inverse('No note found!'));
  } else {
    saveNotes(filteredList);
    console.log(chalk.green.inverse('Note removed!'));
  }
}

const listNotes = () => {
  const notes = loadNotes();

  if (notes.length >= 1) {
    console.log(chalk.inverse('Your notes!'));

    notes.forEach((note) => {
      console.log(note.title);
    });
  } else {
    console.log(chalk.red.inverse('No notes found!'));
  }
}

const readNotes = (params) => {
  const notes = loadNotes();

  const identicalNotes = notes.find((note) => {
    return note.title === params;
  });
  if (identicalNotes) {
    const { title, body } = identicalNotes;
    console.log(`${chalk.blue.inverse(title)} ${body}`);
  } else {
    console.log(chalk.red.inverse('No notes found!'));
  }
}

module.exports = {
  getNotes,
  addNotes,
  removeNotes,
  listNotes,
  readNotes,
};