const fs = require("fs");

//create list in file
//create loadFiles function
//create saveNote function
//create addNote function

const loadFiles = () => {
  const buffer = fs.readFileSync("Notes.json");
  try {
    const data = buffer.toString();
    const parsedData = JSON.parse(data);
    return parsedData;
  } catch (error) {
    return [];
  }
};

const saveFiles = (notes) => {
  const stringData = JSON.stringify(notes);
  fs.writeFileSync("Notes.json", stringData);
};

const removeNote = (noteTitle) => {
  notes = loadFiles();
  notes = 
}

const addNote = (title, body) => {
  const notes = loadFiles();
  const duplicateNote = notes.filter((note) => {
    return note.title === title;
  })
  if (duplicateNote.length === 0) {
    try {
        notes.push({
          title: title,
          body: body,
        });
        saveFiles(notes);
        console.log("Note added successfully!")
      } catch (error) {
        console.log("error!");
      }
  } else {
    console.log('duplicate note found!')
  }
};

module.exports = addNote;