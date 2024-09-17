import React from "react";

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

  handleInput = (event) => {
    let { name, value } = event.target;
    let errors = this.state.errors;

    if (name === "password" && errors.password.length < 6) {
      errors.password = "password must be greator  than 6";
    } else {
      errors.password = "";
    }

    if (name === "confirmPassword" && errors.confirmPassword.length < 6) {
      errors.password = "confirm password is required";
    } else if (
      name === "confirmPassword" &&
      errors.confirmPassword !== this.state.password
    ) {
    }

    this.setState({
      errors,
      [name]: value,
    });
  };

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
        />
        <p>{this.state.errors.username}</p>

        <label>Email</label>
        <input
          className="errors"
          type="email"
          name="email"
          id="email"
          placeholder="example@gmail.com"
          value={this.state.email}
          onChange={this.handleInput}
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
