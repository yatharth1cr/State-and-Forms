import React from "react";
import "./App.css";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = { counter: 0, step: 5 };
  }
  handleIncrement = () => {
    this.setState({
      counter: this.state.counter + this.state.step,
    });
  };
  handleDecrement = () => {
    this.setState({
      counter: this.state.counter - this.state.step,
    });
  };
  handleReset = () => {
    this.setState({
      counter: 0,
    });
  };
  render() {
    return (
      <div className="App">
        <h1>Counter App</h1>
        <h2>{this.state.counter}</h2>
        <div>
          <h3>Steps</h3>
          {[5, 10, 15].map((step) => (
            <button
              key={step}
              onClick={() => {
                this.setState({ step: step });
              }}
              className={this.state.step === step ? "active-step" : ""}
            >
              {step}
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
