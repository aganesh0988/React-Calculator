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

  render() {
    return (
      <div>
        <h1>Result: {this.state.result}</h1>
        <input onChange={this.handleFirstNum} value={this.state.num1} placeholder="First number" />
        <input onChange={this.handleSecondNum} value={this.state.num2} placeholder="Second number" />
      </div>
    );
  }
}

export default Calculator;
