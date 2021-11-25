import React, { Component } from "react";
import { MovieCard } from "../Movie-Card/MovieCard";
import { LoginView } from "../Login-View/Login";
import { MovieView } from "../Movie-View/MovieView";
import { RegistrationView } from "../Registration-View/Registration";

export class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      movies: [],
      selectedMovie: null,
    };
  }

  setSelectedMovie(newSelectedMovie) {
    this.setState({
      selectedMovie: newSelectedMovie,
    });
  }

  onLoggedIn(user) {
    this.setState({ user });
  }

  render() {
    const { movies, selectedMovie } = this.state;

    if (!user)
      return <LoginView onLoggedIn={(user) => this.onLoggedIn(user)} />;

    if (movies.length === 0)
      return <div className="App">The list is Empty</div>;

    return (
      <div className="main-view">
        {selectedMovie ? (
          <MovieView
            movie={selectedMovie}
            onBackClick={(newSelectedMovie) => {
              this.setSelectedMovie(newSelectedMovie);
            }}
          />
        ) : (
          movies.map((movie) => (
            <MovieCard
              key={movie._id}
              movie={movie}
              onMovieClick={(movie) => {
                this.setSelectedMovie(movie);
              }}
            />
          ))
        )}
      </div>
    );
  }
}
