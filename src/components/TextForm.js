import React, { useState } from 'react';

export default function TextForm(props) {
    const handleUpClick = () => {
        console.log('Uppercase was clicked');
        let newText = text.toUpperCase();
        setText(newText);
        props.showAlert('Converted to Uppercase', 'success');
    };

    const handleLoClick = () => {
        console.log('Lowercase was clicked');
        let newText = text.toLowerCase();
        setText(newText);
        props.showAlert('Converted to Lowercase', 'success');
    };

    const handleOnChange = (event) => {
        console.log('On Change');
        setText(event.target.value);
    };

    const handleClearText = () => {
        console.log('Clear Text');
        let newText = '';
        setText(newText);
        props.showAlert('Text Cleared', 'success');
    };

    const handleCopy = () => {
        console.log('Text Copied');
        var text = document.getElementById("exampleFormControlTextarea1");
        text.select();
        navigator.clipboard.writeText(text.value);
        props.showAlert('Text Copied', 'success');
    }

    const handleExtraSpaces = () => {
        console.log('Extra Spaces Removed');
        let newText = text.split(/[ ]+/);
        setText(newText.join(" "));
        props.showAlert('Extra Spaces Removed', 'success');
    }
    
    const [text, setText] = useState('');
    return (
        <>
            <div className="container" style={{color: props.mode==='dark'?'white':'#042743'}}>
                <h1>{props.heading}</h1>
                <div className="mb-3">
                    <textarea className="form-control" id="exampleFormControlTextarea1" rows="8" value={text} onChange={handleOnChange} style={{backgroundColor:props.mode==='dark'?'grey':'white', color:props.mode==='dark'?'white':'#042743'}}></textarea>
                </div>
                <button className="btn btn-primary mx-2" onClick={handleUpClick}>
                    Convert to Uppercase
                </button>
                <button className="btn btn-primary mx-2" onClick={handleLoClick}>
                    Convert to Lowercase
                </button>
                <button className="btn btn-primary mx-2" onClick={handleClearText}>
                    Clear Text
                </button>
                <button className="btn btn-primary mx-2" onClick={handleCopy}>
                    Copy Text
                </button>
                <button className="btn btn-primary mx-2" onClick={handleExtraSpaces}>
                    Remove extra spaces
                </button>
            </div>
            <div className="container my-3" style={{color: props.mode==='dark'?'white':'#042743'}}>
                <h1>Text your summary</h1>
                <p>{text.split(" ").length} words and {text.length} characters</p>
                <p>{0.008 * text.split(" ").length} minutes read</p>
                <h2>Preview</h2>
                <p>{text}</p>
            </div>
        </>
    );
}
