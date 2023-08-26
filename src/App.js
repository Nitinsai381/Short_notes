
import React from 'react';
import './App.css';

import Header from './components/Header';
import Note from './components/Note'
import Footer from './components/Footer'
import CreateArea from './components/CreateText';
function App() {
  const [notes, setNoteItem] = React.useState([]);

  //console.log(inputNote);
  function addNotes(newinputNote) {
    // console.log(newinputNote);
    setNoteItem((prevItem) => {
      return [...prevItem, newinputNote];
    });
    // setNoteItem("")
  }
  // console.log(notes);

  function deleteNote(id) {
    setNoteItem((prevItem) => {
      return prevItem.filter((inputNote, index) => {
        return index !== id;
      });
    });
  }
  return (
    <div>
      <Header />
      <CreateArea onAdd={addNotes} />
      {notes.map((noteCard, index) => (
        <Note
          key={index}
          id={index}
          title={noteCard.title}
          onChecked={deleteNote}
          content={noteCard.content}
        />
      ))}

      <Footer />
    </div>
  );
}

export default App;

