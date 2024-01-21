import { useState } from "react";
import NoteContext from "./NotesContext";

const NoteState = (props) => {
  const host = "http://localhost:5000";
  const notesInitials = [];
  const [notes, setNotes] = useState(notesInitials);
  const authToken =
    "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNjVhYjY5OTNkMjNjY2M0ZmU1Yzg3OTNhIn0sImlhdCI6MTcwNTg0MTkxOH0.G88YeRHPxmydnixKpCLCB8muTTTQDCxJcoFAWugwHFY";

  // --------------------------------------------------------------------------------------------------------------------
  // Get all notes
  const getNote = async () => {
    const response = await fetch(`${host}/api/notes/fetchallnotes`, {
      method: "get",
      headers: {
        "Content-Type": "application/json",
        "auth-token": authToken,
      },
    });
    const json = await response.json();
    setNotes(json);
  };
  // --------------------------------------------------------------------------------------------------------------------

  // Add note
  const addNote = async (title, description, tag) => {
    try {
      const response = await fetch(`${host}/api/notes/addnote`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "auth-token": authToken,
        },
        body: JSON.stringify({ title, description, tag }),
      });
      if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`);
      }
      const note = await response.json();
      // console.log('Note added successfully:', note);
      setNotes(notes.concat(note));
    } catch (error) {
      console.log(error.message);
    }
  };

  // --------------------------------------------------------------------------------------------------------------------
  // Delete note
  const deleteNote = async (id) => {
    // Api call to delete a note
    const response = await fetch(`${host}/api/notes/deletenote/${id}`, {
      method: "delete",
      headers: {
        "Content-Type": "application/json",
        "auth-token": authToken,
      },
    });
    const json = response.json();
    console.log(json);
    const newNotes = notes.filter((note) => {
      return note._id !== id;
    });
    setNotes(newNotes);
  };

  // --------------------------------------------------------------------------------------------------------------------
  // Edit note
  const editNote = async (id, title, description, tag) => {
    // TODO api call
    const response = await fetch(`${host}/api/notes/updatenote/${id}`, {
      method: "put",
      headers: {
        "Content-Type": "application/json",
        "auth-token": authToken,
      },
      body: JSON.stringify({ title, description, tag }),
    });
    const json = response.json();
    console.log(json);

    let newNotes = JSON.parse(JSON.stringify(notes));
    // Logic to edit in client
    for (let index = 0; index < newNotes.length; index++) {
      const element = newNotes[index];
      if ((element._id = id)) {
        newNotes[index].title = title;
        newNotes[index].description = description;
        newNotes[index].tag = tag;
      }
      break;
    }
    setNotes(newNotes);
  };
  return (
    <NoteContext.Provider
      value={{ notes, addNote, deleteNote, editNote, getNote }}
    >
      {props.children}
    </NoteContext.Provider>
  );
};
export default NoteState;
