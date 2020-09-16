import React from "react";

class Calculator extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      result: 0,
      num1: '',
      num2: ''
    };
  }

  handleFirstNum = e => {
    const num1 = Number.parseInt(e.target.value);
    this.setState({ num1 })
  };

  handleSecondNum = e => {
    const num2 = Number.parseInt(e.target.value)
    this.setState({ num2 })
  };

  adding = () => {
    const result = this.state.num1 + this.state.num2;
    this.setState({ result })
  }

  subtracting = () => {
    const result = this.state.num1 - this.state.num2;
    this.setState({ result })
  }

  multiplying = () => {
    const result = this.state.num1 * this.state.num2;
    this.setState({ result })
  }

  dividing = () => {
    const result = this.state.num1 / this.state.num2;
    this.setState({ result })
  }

  clearInput = () => {
    const num1 = '';
    const num2 = '';
    const result = 0;
    this.setState({ num1, num2, result })
  }

  render() {
    return (
      <div>
        <h1>Result: {this.state.result}</h1>
        <input onChange={this.handleFirstNum} value={this.state.num1} placeholder="First number" />
        <input onChange={this.handleSecondNum} value={this.state.num2} placeholder="Second number" />
        <button onClick={this.adding}>Add</button>
        <button onClick={this.subtracting}>Subtract</button>
        <button onClick={this.multiplying}>Multiply</button>
        <button onClick={this.dividing}>Divide</button>
        <button onClick={this.clearInput}>Clear Fields</button>
      </div>
    );
  }
}

export default Calculator;
