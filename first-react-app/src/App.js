import './app.css';
import React, { useState } from 'react';
let array = [];
let arrayRedo = [];

function App() {
  const [stackPos, setStackPos] = useState(0);
  const [text, setText] = useState(0);
  const [number, setNumber] = useState(0);
  const onChange = (e) => {
    setText(e.target.value);
  };

  function showDiv() {
    let sum = array.reduce((a, b) => a + b, 0);
    let a = number;
    a = sum;
    setNumber(a);
    setText('');
  }
  const undoButton = () => {
    setStackPos(stackPos - 1);
    const lastMemory = array.pop();
    arrayRedo.push(lastMemory);
    showDiv();
  };
  const addButton = () => {
    setStackPos(stackPos + 1);
    array.push(Number(text));
    showDiv();
  };

  const subButton = () => {
    setStackPos(stackPos + 1);
    array.push(Number(-text));
    showDiv();
  };
  const redoButton = () => {
    setStackPos(stackPos + 1);
    array.push(arrayRedo.pop());
    showDiv();
  };
  return (
    <div className='container'>
      <div id='valuebox' className='counter'>
        {number}
      </div>
      <input id='inputbox' className='input' onChange={onChange} value={text} />
      <div className='btnGroup'>
        <button
          id='undoButton'
          className='btn'
          onClick={undoButton}
          disabled={stackPos <= 0}
        >
          Undo
        </button>
        <button id='addButton' className='btn' onClick={addButton}>
          +
        </button>
        <button id='subButton' className='btn' onClick={subButton}>
          -
        </button>
        <button
          id='redoButton'
          className='btn'
          onClick={redoButton}
          disabled={arrayRedo.length === 0}
        >
          Redo
        </button>
      </div>
    </div>
  );
}

export default App;
