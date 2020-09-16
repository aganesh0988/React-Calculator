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

  render() {
    return (
      <div>
        <h1>Result: {this.state.result}</h1>
      </div>
    );
  }
}

export default Calculator;
