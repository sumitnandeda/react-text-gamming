import React, {useState} from 'react'

function TextForm(props) {
    const [text, setText] = useState('');
    
    function handleOnChange(e){
        setText(e.target.value)
    }
    
    const handleDoClick =()=>{
        let newText = text.toLowerCase();
        setText(newText)
    }
    
    const handleClearClick =()=>{
        let newText = '';
        setText(newText)
    }
    
    const handleUpClick =()=>{
        let newText = text.toUpperCase();
        setText(newText)
    }
    
    const handleCopy =()=>{
        var text = document.getElementById('textBox');
        text.select();
        navigator.clipboard.writeText(text.value)
    }

    const handleRemoveExtraSpaces =()=>{
        let newText = text.split(/[ ]+/);
        setText(newText.join(" "))
    }

    return (
        <>
        <div>
            <h2>{props.heading}</h2>
            <div className="form-group my-2" >
                {/* <label htmlFor="textBox">Example textarea</label> */}
                <textarea className="form-control" value={text} onChange={handleOnChange} id="textBox" rows="8"></textarea>
            </div>
            <button disabled={text.length === 0} className="btn btn-primary mx-1 my-1" onClick={handleUpClick}>Convert to Uppercase</button>
            <button disabled={text.length === 0} className="btn btn-primary mx-1 my-1" onClick={handleDoClick}>Convert to Lowercase</button>
            <button disabled={text.length === 0} className="btn btn-primary mx-1 my-1" onClick={handleClearClick}>Clear Text</button>
            <button disabled={text.length === 0} className="btn btn-primary mx-1 my-1" onClick={handleCopy}>Copy Text</button>
            <button disabled={text.length === 0} className="btn btn-primary mx-1 my-1" onClick={handleRemoveExtraSpaces}>Remove Extra Spaces</button>
        </div>
        <div className="container my-3">
            <h2>Your text summary</h2>
            <p>{text.split(/\s+/).filter((element) =>{return element.length!==0}).length} words and {text.length} character</p>
            <p>{0.008 * text.split(" ").filter((element) =>{return element.length!==0}).length} Minutes read</p>
        </div>
        <h2>Preview</h2>
        <p>{text.length>0?text:"Nothing to preview!"}</p>
        </>
    );
}

export default TextForm;