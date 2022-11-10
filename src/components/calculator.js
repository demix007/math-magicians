import React from 'react';
import './calculator.css';

class Calculator extends React.PureComponent {
  render() {
    return (
      <div className="calculator-container">
        <div className="result-display"><p className="result">0 </p></div>

        <div className="calculator-buttons">
          <button type="button" className="button AC">AC</button>
          <button type="button" className="button add_sub">+/-</button>
          <button type="button" className="button percentage">%</button>
          <button type="button" className="button div orange">÷</button>
          <button type="button" className="button seven">7</button>
          <button type="button" className="button eight">8</button>
          <button type="button" className="button nine">9</button>
          <button type="button" className="button x orange">x</button>
          <button type="button" className="button four">4</button>
          <button type="button" className="button five">5</button>
          <button type="button" className="button six">6</button>
          <button type="button" className="button minus orange">-</button>
          <button type="button" className="button one">1</button>
          <button type="button" className="button two">2</button>
          <button type="button" className="button three">3</button>
          <button type="button" className="button plus orange">+</button>
          <button type="button" className="button zero double-row">0</button>
          <button type="button" className="button dot">.</button>
          <button type="button" className="button equal orange">=</button>
        </div>
      </div>

    );
  }
}

export default Calculator;
