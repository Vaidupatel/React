import React, { useContext, useState } from "react";
import noteContext from "../../context/notes/NotesContext";

function AddNote() {
  const context = useContext(noteContext);
  const [note, setNote] = useState({ title: "", description: "", tag: "" });
  const { addNote } = context;

  const handleSubmit = async (e) => {
    e.preventDefault();
    const { title, description, tag } = note;
    await addNote(title, description, tag);
  };

  const onChange = (e) => {
    setNote({ ...note, [e.target.name]: e.target.value });
  };

  return (
    <div className="container my-3">
      <h2>Add a Note</h2>
      <form>
        <div className="my-3">
          <label htmlFor="title" className="form-label">
            Title
          </label>
          <input
            type="text"
            className="form-control"
            id="title"
            name="title"
            aria-describedby="emailHelp"
            onChange={onChange}
          />
        </div>
        <div className="mb-3">
          <label htmlFor="description" className="form-label">
            Description
          </label>
          <input
            type="text"
            className="form-control"
            id="description"
            name="description"
            onChange={onChange}
          />
        </div>
        <div className="mb-3">
          <label htmlFor="tag" className="form-label">
            Tag
          </label>
          <input
            type="text"
            className="form-control"
            id="tag"
            name="tag"
            onChange={onChange}
          />
        </div>

        <button
          type="submit"
          className="btn btn-primary"
          onClick={handleSubmit}
        >
          Add Note
        </button>
      </form>
    </div>
  );
}

export default AddNote;
