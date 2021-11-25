import React, { Component } from "react";
import PropTypes from "prop-types";

export class MovieCard extends Component {
  render() {
    const { movie, onMovieClick } = this.props;
    return (
      <div className="MovieCard">
        <div className="movie-poster">
          <img crossOrigin="https://imgur.com" src={movie.ImagePath} />
        </div>
        <div className="movie-title">
          <span className="label">Title: </span>
          <span className="value">{movie.Title}</span>
        </div>

        <button
          onClick={() => {
            onMovieClick(null);
          }}
        >
          See More
        </button>
      </div>
    );
  }
}

MovieCard.propTypes = {
  movie: PropTypes.shape({
    Title: PropTypes.string.isRequired,
    ImagePath: PropTypes.string.isRequired,
  }).isRequired,
  onMovieClick: PropTypes.func.isRequired,
};
