//your JS code here. If required.
import React, { useState } from 'react';
import './App.css';

function App() {
  const [input, setInput] = useState('');

  const handleClick = (e) => {
    const value = e.target.getAttribute('data-value');
    switch (value) {
      case 'clear':
        setInput('');
        break;
      case 'back':
        setInput(input.slice(0, -1));
        break;
      case '=':
        try {
          setInput(eval(input).toString());
        } catch (error) {
          setInput('Error');
        }
        break;
      default:
        setInput(input + value);
    }
  };

  return (
    <div className="calculator">
      <div className="display">{input || '0'}</div>
      <div className="buttons">
        <button className="button" data-value="(" onClick={handleClick}>
          (
        </button>
        <button className="button" data-value=")" onClick={handleClick}>
          )
        </button>
        <button className="button" data-value="clear" onClick={handleClick}>
          C
        </button>
        <button className="button" data-value="/" onClick={handleClick}>
          ÷
        </button>
        <button className="button" data-value="7" onClick={handleClick}>
          7
        </button>
        <button className="button" data-value="8" onClick={handleClick}>
          8
        </button>
        <button className="button" data-value="9" onClick={handleClick}>
          9
        </button>
        <button className="button" data-value="*" onClick={handleClick}>
          ×
        </button>
        <button className="button" data-value="4" onClick={handleClick}>
          4
        </button>
        <button className="button" data-value="5" onClick={handleClick}>
          5
        </button>
        <button className="button" data-value="6" onClick={handleClick}>
          6
        </button>
        <button className="button" data-value="-" onClick={handleClick}>
          -
        </button>
        <button className="button" data-value="1" onClick={handleClick}>
          1
        </button>
        <button className="button" data-value="2" onClick={handleClick}>
          2
        </button>
        <button className="button" data-value="3" onClick={handleClick}>
          3
        </button>
        <button className="button" data-value="+" onClick={handleClick}>
          +
        </button>
        <button className="button" data-value="back" onClick={handleClick}>
          {'<'}
        </button>
        <button className="button" data-value="0" onClick={handleClick}>
          0
        </button>
        <button className="button" data-value="." onClick={handleClick}>
          .
        </button>
        <button className="button equal" data-value="=" onClick={handleClick}>
          =
        </button>
      </div>
    </div>
  );
}

export default App;

