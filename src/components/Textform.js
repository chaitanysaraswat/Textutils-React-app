import React,{useState} from 'react'

export default function Textform(props) {
    
    const handleUpClick=()=>{
        // console.log("Uppercase was Clicked"+text);
        let newText=text.toUpperCase();
        setText(newText)
       props.showAlert("converted to Uppercase","Sucess");
    }
    const handledownClick=()=>{
        // console.log("Uppercase was Clicked"+text);
        let newText=text.toLowerCase();
        setText(newText)
        props.showAlert("converted to Lowercase","Sucess");
    }
    const handleClearclick=()=>{
        // console.log("Uppercase was Clicked"+text);
        let newText=" ";
        setText(newText)
        props.showAlert("Text has been cleared","Sucess");
    }
    // const handleSentencesclick=()=>{
    //     // console.log("Uppercase was Clicked"+text);
    //     let newText=text.split(".").length;
    //     setText(newText)
    // }
    
    const handleOnChange=(event)=>{
        // console.log("on change");
        setText(event.target.value)
    }
    const[text,setText]=useState('Enter text here');
  return (
    <>
    <div className="container" style={{backgrounColor: props.mode ==='dark'?'white':'#042743',color:props.mode==='dark'?'white':'#042743'}} >
<div className="mb-3">
  <label htmlFor="mybox" className="form-label"><h1>{props.heading}</h1></label>
  <textarea className="form-control" value={text} onChange={handleOnChange}style={{backgrounColor: props.mode ==='dark'?'grey':'white',color:props.mode==='dark'?'white':'#042743'}} id="exampleFormControlTextarea1" rows="8"></textarea>
</div>
<button className="btn btn-primary mx-1" onClick={handleUpClick}>Convert To Uppercase</button>
    <button className="btn btn-primary mx-1" onClick={handledownClick}>Convert To Lowercase</button>
    <button className="btn btn-primary mx-1" onClick={handleClearclick}>Clear</button>
    <button className="btn btn-primary mx-1" >Count Sentences</button>

    </div>
    <div className="container my-2" style={{backgrounColor: props.mode ==='dark'?'white':'#042743',color:props.mode==='dark'?'white':'#042743'}} >
    
        <h1>Your Text Summary</h1>
        <p> {text.split(" ").length} --Words {text.length}---Characters</p>
        <p>{0.008 * text.split("").length}minutes reads</p>
        <h2>Preview</h2>
        <p>{text}</p>
    </div>
    </>
  )
 
}
