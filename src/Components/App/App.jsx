import React, { Component } from "react";
import axios from "axios";
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
      user: null,
    };
  }

  componentDidMount() {
    axios
      .get("https://my-flix-2406.herokuapp.com/movies")
      .then((response) => {
        this.setState({
          movies: response.data,
        });
      })
      .catch((error) => {
        console.log(error);
      });
  }

  setSelectedMovie(newSelectedMovie) {
    this.setState({
      selectedMovie: movie,
    });
  }

  onLoggedIn(user) {
    this.setState({ user });
  }

  render() {
    const { movies, selectedMovie, user } = this.state;

    if (!user)
      return <LoginView onLoggedIn={(user) => this.onLoggedIn(user)} />;

    if (movies.length === 0) return <div className="App" />;

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
              onMovieClick={(newSelectedMovie) => {
                this.setSelectedMovie(newSelectedMovie);
              }}
            />
          ))
        )}
      </div>
    );
  }
}
