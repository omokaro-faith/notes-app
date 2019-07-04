const fs = require('fs');
const chalk = require('chalk');

const getNotes = () => {
  return 'Your notes...';
};

const addNotes = (title, body) => {
  const notes = loadNotes();
  const duplicates = notes.filter((note) => {
    return note.title === title;
  });
  if (duplicates.length === 0) {
    notes.push({
      title,
      body
    });
    saveNotes(notes);
    console.log(chalk.green.inverse('Notes added'))
  } else {
    console.log(chalk.red.inverse('Cannot save'));
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
  const filteredList = notes.filter((note) => {
    return note.title !== title;
  });
  if (notes.length === filteredList.length) {
    console.log(chalk.red.inverse('No note found!'));
  } else {
    saveNotes(filteredList);
    console.log(chalk.green.inverse('Note removed!'));
  }
}


module.exports = {
  getNotes,
  addNotes,
  removeNotes,
};