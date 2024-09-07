import React from "react";
import "./App.css";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 0,
      step: 5,
      max: 15,
      message: "",
    };
  }
  handleIncrement = () => {
    let { count, step, max } = this.state;
    if (count + step > max) {
      this.setState({
        message: `Value can't be greater than ${max}`,
      });
    } else {
      this.setState({
        count: count + step > max ? count : count + step,
        message: "",
      });
    }
  };
  handleDecrement = () => {
    let { count, step, max } = this.state;
    if (count - step < 0) {
      this.setState({
        message: "Value can't be less than 0",
      });
    } else {
      this.setState({
        count: count - step > max ? count : count - step,
        message: "",
      });
    }
  };
  handleReset = () => {
    this.setState({
      count: 0,
      message: "",
    });
  };
  render() {
    return (
      <div className="App">
        <h1>Counter App</h1>
        <h2>{this.state.count}</h2>
        <p>{this.state.message}</p>
        <div>
          <h3>Steps</h3>
          {[5, 10, 15].map((step) => (
            <button
              key={step}
              onClick={() => {
                this.setState({ step: step });
              }}
              className={this.state.step === step ? "active" : ""}
            >
              {step}
            </button>
          ))}
        </div>
        <div>
          <h3>Max</h3>
          {[15, 100, 150].map((max) => (
            <button
              key={max}
              onClick={() => {
                this.setState({ max: max });
              }}
              className={this.state.max === max ? "active" : ""}
            >
              {max}
            </button>
          ))}
        </div>
        <div>
          <button onClick={this.handleIncrement}>Increment</button>
          <button onClick={this.handleDecrement}>Decrement</button>
          <button onClick={this.handleReset}>Reset</button>
        </div>
      </div>
    );
  }
}

export default App;
