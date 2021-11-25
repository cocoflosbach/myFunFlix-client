import React, { Component } from "react";

export class MovieCard extends Component {
  render() {
    const { movie, onMovieClick } = this.props;
    return (
      <div className="MovieCard">
        <h1>{movie.Title}</h1>
      </div>
    );
  }
}
