import React,{useState} from 'react';

export default function TextForm(props) {
  const handleCopyClick=()=>{
    navigator.clipboard.writeText(text);
    props.showAlert("Text has been copiedd to clipboard","success");


  }
  const handleEmailClick=()=>{
    let email=text.match(/[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}/);
    if (email) {
      setText("founded email is :"+email);
    } else {
      alert("No email found.");
    }
  }
  const handleSpeakClick=()=>{
    let msg= new SpeechSynthesisUtterance();
    msg.text=text;
    window.speechSynthesis.speak(msg);
    props.showAlert("Text has been spoken","success");
  }
  const handleRevClick=()=>{
    let revtext=text.split("").reverse().join("");
    setText(revtext);
    props.showAlert("Text has been reversed","success");
  }
  const handleClearClick=()=>{
    let cltext='';
    setText(cltext);
    props.showAlert("Text has been cleared","success");
  }
  const handleLowClick=()=>{
    let newLow=text.toLowerCase();
    setText(newLow);
    props.showAlert("Text has been converted to lowercase","success");

  }
  const handleOnChange=(event)=>{
      setText(event.target.value);
  }
  const handleUpClick=()=>{
    let newText=text.toUpperCase();
    setText(newText);
    props.showAlert("Text has been converted to uppercase","success");
  }
    const [text,setText]=useState('');
    // setText("new text");
  return (
    <>
    <div className="container">
      <h1>{props.heading}</h1>
      <div className="mb-3">
      <textarea onChange={handleOnChange}  value={text}  className="form-control border"   style={{backgroundColor: props.mode==='dark'?'grey':'white',color:props.mode==='light'?'#03092d':'white'}}id="myBox"  rows="8"  placeholder="Enter text here"  ></textarea>
      </div>
      <div className="btncontainer">
        <button className="btn btn-primary bg-dark" onClick={handleUpClick} >Upper case</button>
        <button className="btn btn-primary bg-dark" onClick={handleLowClick} >Lower case</button>
        <button className="btn btn-primary bg-dark" onClick={handleClearClick}>Clear text</button>
        <button className="btn btn-primary bg-dark" onClick={handleRevClick} >Reverse text</button>
        <button className="btn btn-primary bg-dark" onClick={handleSpeakClick}>Speak text</button>
        <button className="btn btn-primary bg-dark" onClick={handleEmailClick}>Extract email</button>
        <button className="btn btn-primary bg-dark" onClick={handleCopyClick}>Copy to clipboard</button>

      </div>
    </div>
    <div className="container my-3">
      <h2>Your text summary</h2>
      <p>{text.split(" ").length} words and {text.length} characters</p>
      <p>{0.008*text.split(" ").length} minutes to read</p>
      <h2>Preview</h2>
      <p>{text.length>0?text:"Enter text above to preview it here"}</p>
    </div>
    </>
  );
}