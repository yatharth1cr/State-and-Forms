import React from "react";
import "./App.css";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      active: "basketball",
    };
  }

  render() {
    let labels = ["basketball", "cricket", "laptop", "phone", "pubg"];
    return (
      <>
        <div>
          {labels.map((label) => (
            <button
              key={label}
              onClick={() => {
                this.setState({
                  active: label,
                });
              }}
            >
              {label}
            </button>
          ))}
        </div>
        <img
          src={`../public/assets/${this.state.active}.jpg`}
          alt={this.state.active}
        />
      </>
    );
  }
}

//   constructor(props) {
//     super(props);
//     this.data = {
//       basketball:
//         "",
//       cricket:
//         "https://plus.unsplash.com/premium_photo-1679917489673-b952cee5857a?w=700&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8Y3JpY2tldHxlbnwwfHwwfHx8MA%3D%3D",
//       laptop:
//         "https://images.unsplash.com/photo-1496181133206-80ce9b88a853?q=80&w=2071&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
//       phone:
//         "https://images.unsplash.com/photo-1525598912003-663126343e1f?w=700&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8cGhvbmV8ZW58MHx8MHx8fDA%3D",
//       pubg: "https://images.unsplash.com/photo-1633450797384-9242a83a7597?w=700&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjB8fHB1Ymd8ZW58MHx8MHx8fDA%3D",
//       tiger:
//         "https://media.istockphoto.com/id/1356550639/photo/indian-animal-pattern-design-on-indian-banknote.jpg?s=1024x1024&w=is&k=20&c=mh02ddxznYhl3BEG22VzNR3JH75Os4RBMQMuWjk4PJc=",
//     };
//     this.state = {
//       img: this.data.basketball,
//     };
//   }
//   // handleClick = (event) => {
//   //   let value = event.target.innerText;
//   // };
//   render() {
//     console.log(this.data);
//     return (
//       <div className="App">
//         <img src="" alt="sddd" />
//       </div>
//     );
//   }

export default App;
