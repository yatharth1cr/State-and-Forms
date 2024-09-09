import data from "../constant/data.json";
import React from "react";
import Menu from "./Menu";

class Header extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      activeCategory: "All",
      allData: data,
    };
  }

  // handleClick Function
  handleClick = (category) => {
    this.setState({
      activeCategory: category,
    });

    if (category === "All") {
      console.log(this.state.allData);
      this.setState({
        allData: data,
      });
    } else {
      let filterCategoryData = data.filter((el) => {
        return el.category === category;
      });
      this.setState({
        allData: filterCategoryData,
      });
    }
  };

  // render
  render() {
    let categories = data.map((el) => el.category);
    let uniqueCategories = categories.filter((item, index, arr) => {
      return arr.indexOf(item) === index;
    });
    return (
      <>
        <header className="center">
          <h1 className="center">Our Menu</h1>
          <hr />
          <ul className="flex justify-center">
            {uniqueCategories
              .concat("All")
              .reverse()
              .map((category, i) => (
                <li
                  key={i}
                  className={
                    this.state.activeCategory === category ? "active" : ""
                  }
                  onClick={() => this.handleClick(category)}
                >
                  {category}
                </li>
              ))}
          </ul>
        </header>
        {/* Menu Component */}
        <Menu allData={this.state.allData} />
      </>
    );
  }
}

export default Header;
