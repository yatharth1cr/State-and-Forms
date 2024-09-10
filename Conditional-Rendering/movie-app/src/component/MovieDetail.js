function MovieDetail(props) {
  let movie = props.movie;
  return (
    <div>
      <div className="modal">
        <button className="btn bold" onClick={props.handleClear}>
          X
        </button>

        <div className="flex evenly modal-content">
          <div className="modal-content-detail flex column item-start text-start">
            <h3 className="title">{movie.Title}</h3>
            <p className="year">year: {movie.Year}</p>
            <p className="release">{movie.Released} </p>
            <p className="runtime">{movie.Runtime}</p>
            <p className="gener">{movie.Genre}</p>
            <p className="director"> Directed by: {movie.Director}</p>

            <p className="actor">cast: {movie.Actors}</p>
            <p className="writer">written by:{movie.Writer} </p>
            <p className="plot">{movie.Plot}</p>
            <p className="country">{movie.Country}</p>
            <p className="lang">{movie.Language}</p>
            <p className="awards">{movie.Awards}</p>
            <p className="imdb">{movie.imdbRating}</p>
            <p className="votes">{movie.imdbVotes}</p>
          </div>

          <div className="modal-image">
            <img src={movie.Images[2]} alt="" />
          </div>
        </div>

        <h4 className="bold">GALLERY</h4>
        <div className="gallery flex wrap between">
          {movie.Images.map((ele) => {
            return <img src={ele} alt="gallery-image" />;
          })}
        </div>
      </div>
    </div>
  );
}

export default MovieDetail;
