
import React ,{useState} from 'react'

export default function TextForm(props) {

  const handleUpClick = ()=>{
    console.log("upperCase was clicked");
   let newtext=text.toUpperCase();
    setText(newtext);
  }
  
  const handleLowClick = ()=>{
    console.log("LowerCase was clicked");
   let newtext=text.toLowerCase();
    setText(newtext);
  }

  const handleOnChange = (event)=>{
    console.log("on change");
    setText(event.target.value);
  }

  const handleCopyClick = ()=>{
    document.querySelector('textarea').select();
    document.execCommand('copy');
  }

   
  const handleClearText = ()=>{
    console.log("Clear Text was clicked");
   let newtext=" ";
    setText(newtext);
  }


    const [text,setText]=useState('');
  return (
    <>
    <div class="container" style={{color: props.mode ==='dark'?'white':'black'}}>
    <h2 >Enter the text to Analyze</h2> 
<div className="mb-3" >
<label htmlFor="myBox" className="form-label">{props.title}</label>
<textarea className="form-control" placeholder='Enter text here' id="myBox" value={text} onChange={handleOnChange} rows="4" style={{backgroundColor: props.mode ==='dark'?'grey':'white',color: props.mode ==='dark'?'white':'black'}}></textarea>
</div>
<button className="btn btn-primary" onClick={handleUpClick}>Convert To UpperCase</button>
<button className="btn btn-primary mx-2" onClick={handleLowClick}>Convert To LowerCase</button>
<button className="btn btn-primary mx-2" onClick={handleCopyClick}>Copy Text</button>
<button className="btn btn-primary mx-2" onClick={handleClearText}>Clear Text</button>
    </div>
    <div className="container my-3" style={{color: props.mode ==='dark'?'white':'black'}}>
      <h2>Your Text Summary</h2>
      <p>Your text contains <b>{text.length}</b> characters and <b>{text.split(" ").length}</b> words</p>
      <p>You will take <b>{0.008*text.split(" ").length}</b>minutes to read.</p>
      <p>Your text has <b>{text.split('.').length}</b>sentences</p>
      <h3>Preview</h3>
      <p>{text.length>0?text:"Enter something to preview it here"}</p>
    </div>
    </>
  )
}
