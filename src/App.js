import './App.css';
import Navigation from './Components/Navigation ';
import { Itemlist } from './Components/Itemlist'
import { Footer } from './Components/Footer'
import React, { useState } from 'react';
import { AddNote } from './Components/AddNote';
import { useEffect } from 'react';
import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";

import { About } from './Components/About';


function App() {
  let initNote;
  if (localStorage.getItem("Notes") === null) {
    initNote = [];
  }
  else {
    initNote = JSON.parse(localStorage.getItem("Notes"));
  }

  const onDelete = (Note) => {
    console.log("I am Ondelete Note", Note);

    setNotes(Notes.filter((ele) => {
      return ele !== Note;
    }));
    console.log("On delete of Note", Notes)
    localStorage.setItem("Notes", JSON.stringify(Notes));
  }

  const addNote = (title, NoteText) => {
    console.log("I am adding the title and noteText", title, NoteText);
    let sno;
    if (Notes.length === 0) {
      sno = 0;
    }
    else {
      sno = Notes[Notes.length - 1].sno + 1;
    }

    const myNote = {
      sno: sno,
      title: title,
      description: NoteText,
    }
    setNotes([...Notes, myNote]);
    console.log(myNote);
  }

  const [Notes, setNotes] = useState(initNote);
  useEffect(() => {
    localStorage.setItem("Notes", JSON.stringify(Notes));
  }, [Notes])

  return (
    <>
      <Router>
        <Navigation />
        <Routes>
          <Route path="/" element={
              <>
                <AddNote addNote={addNote} />
                <Itemlist Notes={Notes} onDelete={onDelete} />
              </>
            } />
          <Route exact path="/about" element={<About />} />
        </Routes>
        <Footer />
      </Router>
    </>
  );
}

export default App;
