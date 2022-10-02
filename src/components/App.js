
import React, { useState } from 'react';

export default function App() {
 //code here 
const[string,setString]= useState("");
const[input, setInput]= useState("");
const text= "";
function changeInput(event){
setInput(event.target.value);
}
function buttonClick(){
  setString(string+input);
  setInput("");
}
 
  return (
    <div>
  <input id='input' value={input} onChange={changeInput} />
  
      <p id='intro'>Concated String</p>
      <p id='text'>{string} </p>
      <button id='button' onClick={buttonClick}>
        Click me
      </button>
    </div>
  );
}
