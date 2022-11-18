import React from 'react';
import './calculator.css';
import calculate from '../logic/calculate';

const Calculator = () => {
  const [state, setState] = React.useState({
    total: null,
    next: null,
  });

  const handleButtonClick = (event) => {
    const button = event.target.textContent;
    setState((previousState) => calculate(previousState, button));
  };

  const { total, next } = state;
  let output = 0;
  if (total === null && next !== null) {
    output = next;
  } else if (total !== null && next === null) {
    output = total;
  } else {
    output = next;
  }

  return (
    <div className="calculator">
      <h3 className="calculator-header">Let us do some mathematics!</h3>
      <div className="calculator-container">
        <div className="result-display">
          {output}
        </div>

        <div className="calculator-buttons">
          <button type="button" className="button AC" onClick={handleButtonClick}>AC</button>
          <button type="button" className="button add_sub" onClick={handleButtonClick}>+/-</button>
          <button type="button" className="button percentage" onClick={handleButtonClick}>%</button>
          <button type="button" className="button div orange" onClick={handleButtonClick}>÷</button>
          <button type="button" className="button seven" onClick={handleButtonClick}>7</button>
          <button type="button" className="button eight" onClick={handleButtonClick}>8</button>
          <button type="button" className="button nine" onClick={handleButtonClick}>9</button>
          <button type="button" className="button x orange" onClick={handleButtonClick}>x</button>
          <button type="button" className="button four" onClick={handleButtonClick}>4</button>
          <button type="button" className="button five" onClick={handleButtonClick}>5</button>
          <button type="button" className="button six" onClick={handleButtonClick}>6</button>
          <button type="button" className="button minus orange" onClick={handleButtonClick}>-</button>
          <button type="button" className="button one" onClick={handleButtonClick}>1</button>
          <button type="button" className="button two" onClick={handleButtonClick}>2</button>
          <button type="button" className="button three" onClick={handleButtonClick}>3</button>
          <button type="button" className="button plus orange" onClick={handleButtonClick}>+</button>
          <button type="button" className="button zero double-row" onClick={handleButtonClick}>0</button>
          <button type="button" className="button dot" onClick={handleButtonClick}>.</button>
          <button type="button" className="button equal orange" onClick={handleButtonClick}>=</button>
        </div>
      </div>
    </div>

  );
};

export default Calculator;
