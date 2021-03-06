import React, { useState } from 'react';
import Header from './Header';
import Footer from './Footer';
import Note from './Note';
import CreateArea from './CreateArea';

function App() {
  const [notes, setNotes] = useState([]); //(8)

  function addNote(newNote) {
    setNotes((prevNotes) => {
      return [...prevNotes, newNote];
    }); //(9) catch from submitNote()
  } //(5)

  function deleteNote(id) {
    console.log('Delete button got clicked! And passed me here -id');
    setNotes((prevNotes) => {
      return prevNotes.filter((note, index) => {
        return index !== id;
      });
    });
  } //(12)

  return (
    <div>
      <Header />
      <CreateArea onAdd={addNote} /*(6)*/ />
      {
        notes.map((noteItem, index) => {
          return (
            <Note
              key={index}
              id={index}
              title={noteItem.title}
              content={noteItem.content}
              onDelete={deleteNote} /*(13)*/
            />
          );
        }) /*(10)*/
      }
      <Footer />
    </div>
  );
}

export default App;
