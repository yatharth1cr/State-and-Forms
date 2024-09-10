import MovieDetail from "./MovieDetail";
import allMovies from "../constant/data.json";
import React from "react";

class ListMovies extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      data: allMovies,
      selectedMovie: null,
    };
  }
  handleClear = () => {
    this.setState({
      selectedMovie: null,
    });
  };
  handleSelected = (selectedMovie) => {
    this.setState({
      selectedMovie,
    });
  };
  render() {
    if (this.state.selectedMovie) {
      return (
        <MovieDetail
          movie={this.state.selectedMovie}
          handleClear={this.handleClear}
        />
      );
    }
    return (
      <ul className="flex wrap around">
        {this.state.data.map((movie, index) => {
          return (
            <li key={index} className="flex column">
              <img src={movie.Images[2]} alt={movie.Title} />
              <div className="flex between card-content">
                <div className="text-start">
                  <h3>Title: {movie.Title}</h3>
                  <p>Released: {movie.Released}</p>
                </div>
                <button
                  className="more-info"
                  onClick={() => {
                    this.handleSelected(movie);
                  }}
                >
                  More Info!
                </button>
              </div>
            </li>
          );
        })}
      </ul>
    );
  }
}

export default ListMovies;
