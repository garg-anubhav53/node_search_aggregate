import logo from './logo.svg';
import './App.css';
import React, { useState } from 'react';


function TextSubmitApp() {
    const [inputText, setInputText] = useState('');
    const [submittedText, setSubmittedText] = useState('');

    const handleInputChange = (e) => {
        setInputText(e.target.value);
    };

    const handleSubmit = () => {
        setSubmittedText(inputText);
    };

    return (
        <div>
            <input 
                type="text" 
                value={inputText} 
                onChange={handleInputChange} 
                placeholder="Enter text here" 
            />
            <button onClick={handleSubmit}>Submit</button>
            <div>
                <p>Submitted Text: {submittedText}</p>
            </div>
        </div>
    );
}

export default TextSubmitApp;


