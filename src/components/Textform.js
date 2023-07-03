import React, {useState} from 'react'

export default function Textform(props) {
  const [text, setText] = useState("");

  const handleUpClick = ()=>{
    //console.log("Uppercase was clicked");
    let newText = text.toUpperCase();
    setText(newText);
  }

  const handleLoClick = ()=>{
    //console.log("Uppercase was clicked");
    let newText = text.toLowerCase();
    setText(newText);
  }

  const handleClearClick = ()=>{
    //console.log("Uppercase was clicked");
    let newText = "";
    setText(newText);
  }

  const copyText = ()=>{
    
    // Get the text field
    let copyText = document.getElementById("myBox");
    copyText.select();
    navigator.clipboard.writeText(copyText.value);
  }

  const  handleExtraSpaces = ()=>{
    let newText = text.split(/[ ]+/);
    setText(newText.join(" "))
  }

  
  const handleOnChange = (event)=>{
    //console.log("On Change");
    setText(event.target.value);
  }

  return (
    <>
    <div className={`container text-${props.mode === 'dark'? "white":"black"}`}>
        <h2>{props.heading}</h2>
        <div className="mb-3">
        <textarea className="form-control" id="myBox" value={text} onChange={handleOnChange}  rows="8" style={{backgroundColor: props.mode === 'dark'?'#342f5a':'white', color: props.mode === 'dark'?'white':'black'}}></textarea>
        </div>
        <button className="btn btn-primary me-2" onClick={handleUpClick} >Convert Upper Case</button>
        <button className="btn btn-primary me-2" onClick={handleLoClick} >Convert Lower Case</button>
        <button className="btn btn-primary me-2" onClick={handleClearClick} >Clear Text</button>
        <button className="btn btn-primary me-2" onClick={copyText} >Copy Text</button>
        <button className="btn btn-primary me-2" onClick={handleExtraSpaces} >Remove Extra Spaces</button>
    </div>
    <div className={`container text-${props.mode === 'dark'? "white":"black"}`}>
        <h2>Your Text Summary</h2>
        <p>Here you have written {text.split(" ").length} words and {text.length} characters</p>
        <p>{0.008 * text.split(" ").length} Minutes read</p>
        <h3>Preview</h3>
        <p>{text.length>0?text:"Enter any text for preview..."}</p>
    </div>
    </>
    
  )
}
