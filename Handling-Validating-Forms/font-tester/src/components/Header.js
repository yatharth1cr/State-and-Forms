import React, { Component } from "react";

class Header extends Component {
  handleTextChange = (event) => {
    console.log(event.target.value);
    this.props.onTextChange(event.target.value);
  };

  handleFontSizeChange = (event) => {
    console.log(event.target.value, "font checkkkkkkkkkkk");
    this.props.onFontSizeChange(event.target.value);
  };

  render() {
    return (
      <header className="flex between item-center ">
        <input
          id="inp"
          type="text"
          placeholder="Type Something"
          onChange={this.handleTextChange}
        />
        <label htmlFor="vol">
          Pixel between 0-80:
          <input
            type="range"
            id="vol"
            name="vol"
            min="10"
            max="80"
            defaultValue="24"
            onChange={this.handleFontSizeChange}
          />
        </label>
      </header>
    );
  }
}

export default Header;
