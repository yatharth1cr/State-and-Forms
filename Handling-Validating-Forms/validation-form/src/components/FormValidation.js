// import react
import React from "react";

// created a class Component named ComponentTwo
class ComponentTwo extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      username: "",
      email: "",
      password: "",
      confirmPassword: "",
      errors: {
        username: "",
        email: "",
        password: "",
        confirmPassword: "",
      },
    };
  }

  // handleInput
  handleInput = (event) => {
    let { name, value } = event.target;
    let errors = this.state.errors;
    // username validation
    if (name === "username") {
      if (value.length < 4) {
        errors.username = "username must be atleast 4 charachter";
      } else {
        errors.username = "";
      }
    }
    // password validation
    else if (name === "password") {
      if (value.length < 6) {
        console.log(value, "password chekkkkkk");
        errors.password = "password can't be less than 6";
      } else {
        errors.password = "";
      }
    }
    // confirmPassword validation
    else if (name === "confirmPassword") {
      if (value !== this.state.password) {
        errors.confirmPassword = "password do not match";
      } else {
        errors.confirmPassword = "";
      }
    }
    // email validation
    else if (name === "email") {
      if (!value.includes("@gmail.com")) {
        errors.email = "email is not valid";
      } else {
        errors.email = "";
      }
    }

    // setstate of errors and name
    this.setState({
      errors,
      // computed value is stored in square braces, [name]
      [name]: value,
    });
  };

  // handleSubmit
  handleSubmit = (event) => {
    event.preventDefault();
    console.log("Form submitted", this.state);
  };

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <h1>Register With Us</h1>

        <label>Username</label>
        <input
          type="text"
          name="username"
          id="username"
          placeholder="username"
          value={this.state.username}
          onChange={this.handleInput}
          className={this.state.errors.username ? "errors" : ""}
        />
        <p>{this.state.errors.username}</p>

        <label>Email</label>
        <input
          type="email"
          name="email"
          id="email"
          placeholder="example@gmail.com"
          value={this.state.email}
          onChange={this.handleInput}
          className={this.state.errors.email ? "errors" : ""}
        />
        <p>{this.state.errors.email}</p>

        <label>Password</label>
        <input
          type="password"
          name="password"
          id="password"
          placeholder="password"
          value={this.state.password}
          onChange={this.handleInput}
          className={this.state.errors.password ? "errors" : ""}
        />
        <p>{this.state.errors.password}</p>

        <label>Confirm Password</label>
        <input
          type="password"
          name="confirmPassword"
          id="confirmPassword"
          placeholder="Re-enter password"
          value={this.state.confirmPassword}
          onChange={this.handleInput}
          className={this.state.errors.confirmPassword ? "errors" : ""}
        />
        <p>{this.state.errors.confirmPassword}</p>

        <input
          type="submit"
          value="submit"
          name="submit"
          id="submit"
          onSubmit={(event) => {
            event.preventDefault();
          }}
        />
      </form>
    );
  }
}

export default ComponentTwo;
