import "./App.css";
import React from "react";
import questions from "./constant/data";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      activeIndex: null,
    };
  }

  toggleQues = (i) => {
    // console.log("hi");
    this.setState({
      activeIndex: this.state.activeIndex === i ? null : i,
    });
  };
  render() {
    return (
      <>
        <h1>Accordion FAQ!</h1>
        <ul>
          {questions.map((question, i) => (
            <li key={i}>
              <h2 onClick={() => this.toggleQues(i)}>
                {question.Q}
                {this.state.activeIndex === i ? "👆" : "👇"}
              </h2>
              {i === this.state.activeIndex ? <p>{question.A}</p> : ""}
            </li>
          ))}
        </ul>
      </>
    );
  }
}

export default App;
