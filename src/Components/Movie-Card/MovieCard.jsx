import React, { Component } from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import "./MovieCard.scss";
import "tailwindcss/tailwind.css";

export class MovieCard extends Component {
  render() {
    const { movie, movies } = this.props;
    return (
      <div className="bg-white ">
        <div className=" max-w-2xl  mx-auto py-16 px-4 sm:py-6 sm:px-3 lg:max-w-7xl lg:px-8">
          <div>
            <div className="w-full h-80 bg-gray-200 aspect-w-1 aspect-h-1 shadow-md rounded-md overflow-hidden group-hover:opacity-75 lg:h-80 lg:aspect-none">
              <Link to={`/movies/${movie._id}`}>
                <img
                  crossOrigin="https://imgur.com"
                  variant="top"
                  src={movie.ImagePath}
                  className="w-full h-full object-center object-cover lg:w-full lg:h-full"
                />
              </Link>
            </div>
            <div className="mt-4 flex justify-between">
              <div>
                <h3 className="text-lg justify-center font-extrabold text-black">
                  <span aria-hidden="true" className="relative inset-0" />
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
          </div>
        </div>
      </div>
    );
  }
}

MovieCard.propTypes = {
  movie: PropTypes.shape({
    Title: PropTypes.string.isRequired,
    ImagePath: PropTypes.string.isRequired,
  }).isRequired,
};
