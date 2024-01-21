import React, { useContext } from "react";
import noteContext from "../../context/notes/NotesContext";
import NoteItem from "./NoteItem";

function Notes() {
  const context = useContext(noteContext);
  const { notes, setNotes } = context;
  return (
    <div className="row">
      <h2>Your Note</h2>
      {notes.map((note) => {
        return <NoteItem note={note} />;
      })}
    </div>
  );
}

export default Notes;
