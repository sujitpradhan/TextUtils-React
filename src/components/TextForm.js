import React, { useState } from 'react'

export default function TextForm(props) {

    const handleUpClick = () =>{
       // console.log("UppperCase was clicked")
       // setText('You have clicked on handleUpClick')
        let newText = text.toUpperCase();
        setText(newText);
        props.showAlert("Converted to uppercase!", "success");
    }
    const handleLowClick = () =>{
         let newText = text.toLowerCase();
         setText(newText);
        props.showAlert("Converted to lowercase!", "success");
     }
    const handleOnChange = (event) =>{
       // console.log(" On Change "+text);
        setText(event.target.value);
    }

    const handleClearClick = () => {
        setText('');
        props.showAlert("Text area cleared", "success");
    }

    const handleCopy = () =>{
        navigator.clipboard.writeText(text);
        props.showAlert("Text copied successfully", "success");

    }
    const handleExtraSpaces = () =>{
        let newText = text.split(/[ ]+/);
        setText(newText.join(' '));
        props.showAlert("Extra spaces removed successfully", "success");
    }

    const textLengthExtractor = () =>{
        return text.trim().split(" ").filter(element => element !== "").length;
    }

    const [text, setText] = useState('');

    //text = 'New Text'; // wrong way to change the state
    //setText('New Text'); // correct way to change the state
    return (
        <>
            <div className='container' style={{color: props.mode==='dark'?'white':'#042743'}}>
                <h1>{props.heading}</h1>
                <div className="mb-3">
                    <textarea className="form-control" id="mybox" rows="8" style={{backgroundColor: props.mode==='dark'?'grey':'white', color: props.mode==='dark'?'white':'#042743'}} onChange={handleOnChange} value={text}></textarea>
                </div>
                <button className="btn btn-primary mx-2" onClick={handleUpClick}>Convert to UpperCase</button>
                <button className="btn btn-primary mx-2" onClick={handleLowClick}>Convert to LowerCase</button>
                <button className="btn btn-danger mx-2" onClick={handleClearClick}>Clear Text</button>
                <button className="btn btn-success mx-2" onClick={handleCopy}>Copy Text</button>
                <button className="btn btn-warning mx-2" onClick={handleExtraSpaces}>Remove Exra Spaces</button>

            </div>
            <div className="container my-3" style={{color: props.mode==='dark'?'white':'#042743'}}>
                <h4>Your text summary</h4>
                <p>{textLengthExtractor()} words and {text.length} chatacters</p>
                <p>{0.008 *text.split(" ").length} Minutes to read</p>
                <h4>Preview</h4>
                <p>{text.length > 0 ? text : "Enter something in the above area preview here"}</p>
            </div>
        </>

    )
}
