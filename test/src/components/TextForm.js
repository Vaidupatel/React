import React, { useState } from "react";

export default function TextForm(props) {
  const [text, setText] = useState("");

  const handleUpClick = () => {
    let newText = text.toUpperCase();
    setText(newText);
    props.showAlert("Converted to Uppercase","success");
  };
  const handleLoClick = () => {
    let newText = text.toLowerCase();
    setText(newText);
    props.showAlert("Converted to Lowercase","success");
  };
  const handleCamClick = () => {
    let newText = text
    .replace(/\s(.)/g, function (a) {
      return a.toUpperCase();
    })
    .replace(/\s/g, "")
    .replace(/^(.)/, function (b) {
      return b.toLowerCase();
    });
    setText(newText);
    props.showAlert("Converted to Camelcase","success");
  };
  const handleClrClick = () => {
    let newText = "";
    setText(newText);
    props.showAlert("Text cleared","danger");
  };
  const handleCopyClick = () => {
    var text = document.getElementById("myBox");
    text.select();
    // console.log(text.value);
    navigator.clipboard.writeText(text.value);
    props.showAlert("Copied To Clip-Board","success");
  };
  const handleExtraSpace = () => {
    let newText = text.split(/[ ]+/);
    setText(newText.join(" "));
    props.showAlert("Extra space Cleared","success");
  };

  //Event handlers
  const handleOnChange = (event) => {
    setText(event.target.value);
  };
  return (
    <>
      <div className="container">
        <h1>{props.heading} </h1>
        <div className="mb-3 my-3">
          <textarea
            value={text}
            className="form-control"
            id="myBox"
            rows="8"
            style={{backgroundColor:props.mode === 'light'?'white':'#042743',color:props.mode === 'light'?'black':'white'}}
            onChange={handleOnChange}
            
          ></textarea>

          <button className="btn btn-primary my-2 mx-1 btn-sm" onClick={handleUpClick}>
            Conver to Upper case
          </button>

          <button className="btn btn-primary my-2 mx-1 btn-sm" onClick={handleLoClick}>
            Conver to Lower case
          </button>

          <button
            className="btn btn-primary my-2 mx-1 btn-sm"
            onClick={handleCamClick}
          >
            Conver to Camel case
          </button>
          <button
            className="btn btn-primary my-2 mx-1 btn-sm"
            onClick={handleCopyClick}
          >
            Copy Text
          </button>
          <button
            className="btn btn-primary my-2 mx-1 btn-sm"
            onClick={handleExtraSpace}
          >
            Remove Extra Space
          </button>
          <button
            className="btn btn-primary my-2 mx-1 btn-sm"
            onClick={handleClrClick}
          >
            Clere Text
          </button>
        </div>
      </div>
      <div className="container my-3">
        <h2>Your text summary</h2>
        <p>
          {text.split(" ").length} words and {text.length} characters
        </p>
        <p>{0.008 * text.split(" ").length} Minutes to read</p>
        <h2>Preview</h2>
        <p>{text.length>0?text:"Enter some text in above text box to get preview"}</p>
      </div>
    </>
  );
}
