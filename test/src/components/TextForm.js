import React, { useState } from "react";

export default function TextForm(props) {
  const [text, setText] = useState("Enter Text Here");

  const handleUpClick = () => {
    let newText = text.toUpperCase();
    setText(newText);
  };

  //Event handlers
  const handleOnChange = (event) => {
    setText(event.target.value);
  };
  return (
    <div>
      <h1>{props.heading} </h1>
      <div className="mb-3 my-3">
        <textarea
          value={text}
          className="form-control"
          id="myBox"
          rows="10"
          onChange={handleOnChange}
        ></textarea>
        <button className="btn btn-primary" onClick={handleUpClick}>
          Conver to upper case
        </button>
      </div>
    </div>
  );
}
