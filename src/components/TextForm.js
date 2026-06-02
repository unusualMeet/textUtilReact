import React,{useState} from 'react';

export default function TextForm(props) {
  const handleLowClick=()=>{
    let newLow=text.toLowerCase();
    setText(newLow);
  }
  const handleOnChange=(event)=>{
      setText(event.target.value);
  }
  const handleUpClick=()=>{
    let newText=text.toUpperCase();
    setText(newText);
  }
    const [text,setText]=useState('');
    // setText("new text");
  return (
    <>
    <div className="container">
      <h1>{props.heading}</h1>
      <div className="mb-3">
      <textarea onChange={handleOnChange}  value={text}  className="form-control"  id="myBox"  rows="8"  placeholder="Enter text here"  ></textarea>
      </div>
      <button className="btn btn-primary bg-dark mx-1" onClick={handleUpClick} >convert to upper case</button>
      <button className="btn btn-primary bg-dark mx-1" onClick={handleLowClick} >convert to lower case</button>
    </div>
    <div className="container my-3">
      <h2>Your text summary</h2>
      <p>{text.split(" ").length} words and {text.length} characters</p>
      <p>{0.008*text.split(" ").length} minutes to read</p>
      <h2>Preview</h2>
      <p>{text}</p>
    </div>
    </>
  );
}