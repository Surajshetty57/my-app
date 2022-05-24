import React, { useState } from "react";

export default function Main(props) {

  const [text, setText] = useState("");


  const onchanged = (event) => {
    setText(event.target.value)
  }
  const onclicked = () => {
    if (text === "") {
      props.alert("Please Enter some text", "warning")
    } else {
      setText(text.toUpperCase())
      props.alert("Text is converted to Uppercase", "success")
    }


  }
  const reset = () => {
    if (text === "") {
      props.alert("There is nothing to erase", "warning")
    } else {
      let val = "";
      setText(val)
      props.alert("TextArea is erased", "success")
    }
  }
  const lowercase = () => {
    if (text === "") {
      props.alert("Please Enter some text", "warning")
    } else {
      setText(text.toLowerCase())
      props.alert("Text is converted to Lowercase", "success")
    }
  }
  const copyText = () => {
    if (text === "") {
      props.alert("Please Enter some text", "warning")
    } else {
      const txt = document.getElementById('suraj').value;
      navigator.clipboard.writeText(txt)
      props.alert("Text copied to clipboard", "success")
    }
  }


  return (
    <>
      <form>
        <div className="container p-5" style={{ color: props.mode === 'dark' ? "white" : "black" }}>
          <h2>Type in text to Edit 🖊</h2>
          <div className="mb-3">
            <textarea className="form-control" id="suraj" rows="5" columns="3" style={{ backgroundColor: props.mode === 'light' ? "white" : "grey", color: props.mode === 'light' ? 'black' : 'white' }} value={text} onChange={onchanged}> </textarea>
          </div>
          <button type="button" className={`btn btn-${props.mode === "dark" ? 'dark' : 'primary'} mt-3 mx-2`} onClick={onclicked}> {props.heading}</button>
          <button type="button" className={`btn btn-${props.mode === "dark" ? 'dark' : 'primary'} mt-3 mx-2`} onClick={lowercase}>Convert to LowerCase</button>
          <button type="button" className={`btn btn-${props.mode === "dark" ? 'dark' : 'primary'} mt-3 mx-2`} onClick={copyText}>Copy Text</button>
          <button type="button" className={`btn btn-${props.mode === "dark" ? 'dark' : 'primary'} mt-3 mx-2`} onClick={reset}>Reset</button>

          <h2 className="my-3">Text Summary</h2>
          <p>{text==="" ? "0 words and 0 characters" :` ${text.split(" ").length} words and ${text.length} characters.`}</p>
          <h2 className="my-3">Preview</h2>
          <h6>{text.length > 0 ? text : 'Enter text to preview'}</h6>
        </div>
      </form>
    </>
  );
}
