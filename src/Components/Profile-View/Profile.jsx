import axios from "axios";
import React, { Component } from "react";
import FavMovies from "./FavMovies";
import UpdateUser from "./UpdateUser";
import UserInfo from "./UserInfo";
import { Link } from "react-router-dom";

import "tailwindcss/tailwind.css";

export class Profile extends Component {
  constructor(props) {
    super(props);
    this.state = {
      username: null,
      password: null,
      email: null,
      birthday: null,
      favoriteMovies: [],
    };
  }

  componentDidMount() {
    let accessToken = localStorage.getItem("token");
    if (accessToken !== null) {
      this.setState({
        user: localStorage.getItem("user"),
      });
      this.getUser(accessToken);
    }
  }

  getUser(token) {
    const username = localStorage.getItem("user");
    axios
      .get(`https://my-flix-2406.herokuapp.com/users/${username}`, {
        headers: { Authorization: `Bearer ${token}` },
      })
      .then((response) => {
        console.log("response", response);
        this.setState({
          username: response.data.Username,
          password: response.data.Password,
          email: response.data.Email,
          birthday: response.data.Birthday,
          favoriteMovies: response.data.FavoriteMovies,
        });
      });
  }

  /* removeFavMovie() {
    axios
      .delete(
        `https://my-flix-2406.herokuapp.com/users/${username}/movies/${movies._id}`,
        {
          headers: { Authorization: `Bearer ${token}` },
        }
      )
      .then((response) => {
        console.log(response).catch((error) => {
          console.log("This movie was not deleted");
        });
      });
  } */

  handleDeleteUser() {
    const token = localStorage.getItem("token");
    const user = localStorage.getItem("user");
    axios
      .delete(`https://my-flix-2406.herokuapp.com/users/${username}`, {
        headers: { Authorization: `Bearer ${token}` },
      })
      .then(() => {
        console.log(response);
        alert("Your account has been deleted");
        localStorage.removeItem("token");
        localStorage.removeItem("user");
        window.open(`/`, "self");
      })
      .catch((e) => {
        console.log(error);
      });
  }

  render() {
    const { username, password, email, birthday, favoriteMovies } = this.state;
    const { movies, user } = this.props;
    const FavoriteMovieList = movies.filter((m) => {
      return this.state.favoriteMovies.includes(m._id);
    });

    const movie = FavoriteMovieList.find((m) => m._id);

    return (
      <div>
        <div>
          <UserInfo
            username={username}
            password={password}
            email={email}
            birthday={birthday}
          />
        </div>

        <div>
          <UpdateUser
            username={username}
            onUserUpdate={(user) => this.onUserUpdate(user)}
          />
        </div>

        <div>
          <div>
            <h2 className="mt-6 text-center text-2xl font-extrabold text-gray-900">
              Your Favorite Movies
            </h2>
          </div>
          <div className=" grid grid-cols-1 gap-y-5 gap-x-3 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:gap-x-8 ">
            {FavoriteMovieList.map((movie) => (
              <div key={movie.id} className="group relative ">
                <FavMovies favoriteMovies={favoriteMovies} movie={movie} />
              </div>
            ))}
          </div>
        </div>

        {/* <div>
          <button
            onClick={this.handleDeleteUser()}
            className="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-yellow-500 hover:bg-yellow-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-yellow-500"
          </button>
        </div> */}
        {/* <div className=" grid grid-cols-1 gap-y-5 gap-x-3 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:gap-x-8 ">
          {filteredMovies.map((movie) => (
            <div key={movie.id} className="group relative ">
              <MovieCard movie={movie} movies={movies} />
            </div>
          ))}
        </div> */}
      </div>
    );
  }
}
