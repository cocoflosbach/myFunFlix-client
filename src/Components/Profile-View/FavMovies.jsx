import React, { Component } from "react";
import axios from "axios";
import "tailwindcss/tailwind.css";
import { Link } from "react-router-dom";
import { HeartIcon } from "@heroicons/react/solid";

class FavMovies extends Component {
  removeFavoriteMovie(props) {
    const token = localStorage.getItem("token");
    const username = localStorage.getItem("user");

    axios
      .delete(
        `https://my-flix-2406.herokuapp.com/users/${username}/movies/${this.props.movie._id}`,
        {
          headers: { Authorization: `Bearer ${token}` },
        }
      )
      .then((response) => {
        console.log(response);
        alert(`Removed from Favorites`);
        window.location.reload();
      })
      .catch(function (error) {
        console.log(error);
      });
  }

  render() {
    const { movie } = this.props;

    return (
      <div className="bg-white ">
        <div className=" max-w-2xl  mx-auto py-16 px-4 sm:py-6 sm:px-3 lg:max-w-7xl lg:px-8">
          <div>
            <div className="w-full h-80 bg-gray-200 aspect-w-1 aspect-h-1 shadow-md rounded-md overflow-hidden group-hover:opacity-75 lg:h-80 lg:aspect-none">
              <img
                crossOrigin="https://imgur.com"
                variant="top"
                src={movie.ImagePath}
                className="w-full h-full object-center object-cover lg:w-full lg:h-full"
              />
            </div>
            <div className="mt-4 flex justify-between">
              <div>
                <h3 className="text-lg justify-center font-extrabold text-black">
                  <span aria-hidden="true" className="absolute inset-0" />
                  {movie.Title}
                </h3>
              </div>
            </div>
            <div>
              <Link to={`/movies/${movie._id}`}>
                <button
                  type="submit"
                  className="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-yellow-500 hover:bg-yellow-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-yellow-500"
                  type="submit"
                >
                  See More
                </button>
              </Link>
            </div>
            <div>
              <button
                variant="warning"
                className="mt-4 group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-yellow-500 hover:bg-yellow-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-yellow-500"
                key={movie._id}
                onClick={() => {
                  this.removeFavoriteMovie(movie);
                }}
              >
                <HeartIcon className="block h-6 w-6" />
                Remove from Favorites
              </button>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default FavMovies;
