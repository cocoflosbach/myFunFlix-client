import React from "react";
import axios from "axios";
import { connect } from "react-redux";

import { BrowserRouter as Router, Route, Redirect } from "react-router-dom";

// Redux step 1: import the SET_MOVIES action
import { setMovies } from "../../actions/Actions";

// Redux step 2: Create anad import new MovieList component
import MovieList from "../Movie-List/MovieList";

// Redux step 3: Remove MovieCard component import command
/*import { MovieCard } from "../Movie-Card/MovieCard";*/
import { LoginView } from "../Login-View/Login";
import { MovieView } from "../Movie-View/MovieView";
import { RegistrationView } from "../Registration-View/Registration";
import { GenreView } from "../Genre-View/Genre";
import { DirectorView } from "../Director-View/Director";
import { RegistrationView } from "../Registration-View/Registration";
import { Profile } from "../Profile-View/Profile";
import { Row, Col } from "react-bootstrap";
import { NavigationBar } from "../navigation-bar/navigation-bar";

import "./App.scss";
import "tailwindcss/tailwind.css";
// Redux step 4: Remove "export" keyword
/*export*/
class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      // SetMovies Redux step 5: Remove movies state from this.state
      /*movies: [],*/
      selectedMovie: null,
      user: null,
      username: null,
      favoriteMovies: [],
    };
  }

  componentDidMount() {
    let accessToken = localStorage.getItem("token");
    if (accessToken !== null) {
      this.setState({
        user: localStorage.getItem("user"),
      });
      this.getMovies(accessToken);
    }
  }

  getMovies(token) {
    axios
      .get("https://my-flix-2406.herokuapp.com/movies", {
        headers: { Authorization: `Bearer ${token}` },
      })
      .then((response) => {
        // SetMovies Redux step 6: Replace setState with "props.setMovies"
        /*this.setState({ movies: response.data });*/
        this.props.setMovies(response.data);
      })
      .catch(function (error) {
        console.log(error);
      });
  }

  onLoggedIn(authData) {
    console.log(authData);
    this.setState({
      user: authData.user.Username,
    });
    localStorage.setItem("token", authData.token);
    localStorage.setItem("user", authData.user.Username);
    this.getMovies(authData.token);
  }

  onLoggedOut() {
    localStorage.removeItem("token");
    localStorage.removeItem("user");
    this.setState({
      user: null,
    });
  }

  /* onUserUpdate(authData) {
      console.log(authData);
      this.setState({
          password:,
          email:
      });
      localStorage.setItem("token", authData.token);
      localStorage.setItem("user", authData.token);
      this.updateUser(authData.token);
  } */

  render() {
    // SetMovies Redux step 7: movies is extracted from this.props rather than this.state
    const { movies } = this.props;
    const { user, favoriteMovies } = this.state;
    const movieID = movies.find((movie) => movie._id === movies.id);

    return (
      <Router>
        <NavigationBar />

        <div>
          <Route
            exact
            path="/"
            render={() => {
              if (!user)
                return (
                  <div className="login-view">
                    <LoginView onLoggedIn={(user) => this.onLoggedIn(user)} />
                  </div>
                );
              if (movies.length === 0) return <div className="App" />;
              return (
                // SetMovies Redux step 8: Replace MovieCard with MovieList component
                /*movies.map((m) => (<Col key={m._id}>
                  <MovieCard movie={m} />
                </Col>*/
                <div>
                  <MovieList movies={movies} />
                </div>
              );
            }}
          />

          <Route
            path="/register"
            render={() => {
              if (user) return <Redirect to="/" />;
              return <RegistrationView />;
            }}
          />

          <Route
            path="/movies/:movieId"
            render={({ match, history }) => {
              if (!user)
                return (
                  <LoginView onLoggedIn={(user) => this.onLoggedIn(user)} />
                );
              return (
                <div>
                  <MovieView
                    movies={movies}
                    movieID={movieID}
                    movie={movies.find((m) => m._id === match.params.movieId)}
                    onBackClick={() => history.goBack()}
                  />
                </div>
              );
            }}
          />

          <Route
            path="/genres/:name"
            render={({ match, history }) => {
              if (!user)
                return (
                  <LoginView onLoggedIn={(user) => this.onLoggedIn(user)} />
                );
              if (movies.length === 0) return <div className="App" />;
              return (
                <div>
                  <GenreView
                    genre={
                      movies.find((m) => m.Genre.Name === match.params.name)
                        .Genre
                    }
                    onBackClick={() => history.goBack()}
                  />
                </div>
              );
            }}
          />
          <Route
            path="/directors/:name"
            render={({ match, history }) => {
              if (!user)
                return (
                  <LoginView onLoggedIn={(user) => this.onLoggedIn(user)} />
                );
              if (movies.length === 0) return <div className="App" />;
              return (
                <div>
                  <DirectorView
                    director={
                      movies.find((m) => m.Director.Name === match.params.name)
                        .Director
                    }
                    onBackClick={() => history.goBack()}
                  />
                </div>
              );
            }}
          />

          <Route
            path="/users/:username"
            render={({ match, history }) => {
              if (!user)
                return (
                  <LoginView onLoggedIn={(user) => this.onLoggedIn(user)} />
                );
              if (movies.length === 0) return <div className="App" />;
              return (
                <div>
                  <Profile
                    history={history}
                    movies={movies}
                    movie={movies.find((m) => m._id === match.params.movieId)}
                    onBackClick={() => history.goBack()}
                  />
                </div>
              );
            }}
          />
        </div>
      </Router>
    );
  }
}

// SetMovies Redux step 9:
let mapStateToProps = (state) => {
  return { movies: state.movies };
};
//mapStateToProps allows a component to subscribe to store updates

// SetMovies Redux step 10:
export default connect(mapStateToProps, { setMovies })(App); // connecting a component with an action allows you to receive the actual action as a prop
