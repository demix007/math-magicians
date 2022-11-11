import React from 'react';
import './calculator.css';
import calculate from '../logic/calculate';

class Calculator extends React.PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      total: null,
      next: null,
    };

    this.handleButtonClick = this.handleButtonClick.bind(this);
  }

  handleButtonClick(event) {
    const button = event.target.textContent;
    this.setState((previousState) => calculate(previousState, button));
  }

  render() {
    const { total, next } = this.state;
    let output = 0;
    if (total === null && next !== null) {
      output = next;
    } else if (total !== null && next === null) {
      output = total;
    } else {
      output = next;
    }
    return (
      <div className="calculator-container">
        <div className="result-display">{output}</div>

        <div className="calculator-buttons">
          <button type="button" className="button AC" onClick={this.handleButtonClick}>AC</button>
          <button type="button" className="button add_sub" onClick={this.handleButtonClick}>+/-</button>
          <button type="button" className="button percentage" onClick={this.handleButtonClick}>%</button>
          <button type="button" className="button div orange" onClick={this.handleButtonClick}>÷</button>
          <button type="button" className="button seven" onClick={this.handleButtonClick}>7</button>
          <button type="button" className="button eight" onClick={this.handleButtonClick}>8</button>
          <button type="button" className="button nine" onClick={this.handleButtonClick}>9</button>
          <button type="button" className="button x orange" onClick={this.handleButtonClick}>x</button>
          <button type="button" className="button four" onClick={this.handleButtonClick}>4</button>
          <button type="button" className="button five" onClick={this.handleButtonClick}>5</button>
          <button type="button" className="button six" onClick={this.handleButtonClick}>6</button>
          <button type="button" className="button minus orange" onClick={this.handleButtonClick}>-</button>
          <button type="button" className="button one" onClick={this.handleButtonClick}>1</button>
          <button type="button" className="button two" onClick={this.handleButtonClick}>2</button>
          <button type="button" className="button three" onClick={this.handleButtonClick}>3</button>
          <button type="button" className="button plus orange" onClick={this.handleButtonClick}>+</button>
          <button type="button" className="button zero double-row" onClick={this.handleButtonClick}>0</button>
          <button type="button" className="button dot" onClick={this.handleButtonClick}>.</button>
          <button type="button" className="button equal orange" onClick={this.handleButtonClick}>=</button>
        </div>
      </div>

    );
  }
}

export default Calculator;
