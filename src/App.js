import React, { useState } from "react";
import './App.css';

function App() {
  const [word,setWord]=useState(0)

  const handleChange =(e)=>{
      const data = e.target.value.split(' ')
      setWord(data.length)
      if(e.target.value === ''){
          setWord(0)
      }
  }
  return (
    <div className="App">
      <div class="word-counter-container">
        <h2>Responsive Paragraph Word Counter</h2>
        <textarea name="" id="" cols="30" rows="10" class="words" onChange={(e)=>handleChange(e)}></textarea>
        <div class="word-count">No. of words: <span>{word}</span></div>
      </div>
    </div>

  );
}

export default App;
