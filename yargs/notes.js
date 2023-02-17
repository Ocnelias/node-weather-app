const fs = require("fs");
const chalk = require("chalk");

const getNotes = (note) => {
  return note.toUpperCase();
};

const addNote = (title, body) => {
  const notes = loadNotes();
  const duplicates = notes.find((note) => {
    return note.title === title;
  });

  //debugger

  if (!duplicates) {
    notes.push({
      title: title,
      body: body,
    });

    saveNote(notes);
  }
};

const saveNote = (data) => {
  fs.writeFileSync("notes.json", J1SON.stringify(data));
};

const loadNotes = () => {
  try {
    const dataBuffer = fs.readFileSync("notes.json").toString();
    return JSON.parse(dataBuffer);
  } catch (e) {
    return [];
  }
};

const removeNote = (title) => {
  const notes = loadNotes();
  const notesToKeep = notes.filter((note) => {
    return note.title !== title;
  });
  saveNote(notesToKeep);
};

const listNotes = () => {
  const notes = loadNotes();
  notes.forEach((note) => {
    console.log(note.title);
  });
};

const readNotes = (title) => {
  const notes = loadNotes();
  const noteFind = notes.find((note) => {
    return note.title === title;
  });

  console.log(noteFind);
};

module.exports = {
  getNotes: getNotes,
  addNote: addNote,
  removeNote: removeNote,
  listNotes: listNotes,
  readNotes: readNotes,
};
