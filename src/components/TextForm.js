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
        //document.getSelection().removeAlllRanges();
        props.showAlert("Text copied successfully", "success");

    }
    const handleExtraSpaces = () =>{
        let newText = text.split(/[ ]+/);
        setText(newText.join(' '));
        props.showAlert("Extra spaces removed successfully", "success");
    }

    const textLengthExtractor = () =>{
        return text.trim().split(" ").filter(element => element.length !== 0).length;
    }

    const [text, setText] = useState('');

    //text = 'New Text'; // wrong way to change the state
    //setText('New Text'); // correct way to change the state
    return (
        <>
            <div className='container' style={{color: props.mode==='dark'?'white':'#042743'}}>
                <h1 className="mb-4">{props.heading}</h1>
                <div className="mb-3">
                    <textarea className="form-control" id="mybox" rows="8" style={{backgroundColor: props.mode==='dark'?'#13466e':'white', color: props.mode==='dark'?'white':'#042743'}} onChange={handleOnChange} value={text}></textarea>
                </div>
                <button disabled={text.length===0} className="btn btn-primary mx-1 my-1" onClick={handleUpClick}>Convert to UpperCase</button>
                <button disabled={text.length===0} className="btn btn-primary mx-1 my-1" onClick={handleLowClick}>Convert to LowerCase</button>
                <button disabled={text.length===0} className="btn btn-danger mx-1 my-1" onClick={handleClearClick}>Clear Text</button>
                <button disabled={text.length===0} className="btn btn-success mx-1 my-1" onClick={handleCopy}>Copy Text</button>
                <button disabled={text.length===0} className="btn btn-warning mx-1 my-1" onClick={handleExtraSpaces}>Remove Exra Spaces</button>

            </div>
            <div className="container my-3" style={{color: props.mode==='dark'?'white':'#042743'}}>
                <h4>Your text summary</h4>
                <p>{textLengthExtractor()} words and {text.length} chatacters</p>
                <p>{0.008 *text.split(" ").filter(element => element.length !== 0).length} Minutes to read</p>
                <h4>Preview</h4>
                <p>{text.length > 0 ? text : "Nothing to preview..."}</p>
            </div>
        </>

    )
}
