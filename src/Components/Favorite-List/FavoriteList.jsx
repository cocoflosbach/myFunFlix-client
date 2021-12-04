import React from "react";
import { connect } from "react-redux";

import FavButton from "./FavButton";
import FavMovies from "../Profile-View/FavMovies";
import "tailwindcss/tailwind.css";

function FavoriteList(props) {
  const { movies, favoriteMovies } = props;
  let favMovies = movies;

  if (favoriteMovies !== "") {
    favMovies = movies.find((m) => m._id.includes(favoriteMovies));
  }

  if (!movies) return <div className="App" />;

  return (
    <div className="mt-4 mx-auto w-screen ">
      <div className="bg-white ">
        <div className=" grid grid-cols-1 gap-y-5 gap-x-3 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:gap-x-8 ">
          {favMovies.map((movie) => (
            <div key={movie.id} className="group relative ">
              <FavMovies movie={movie} movies={movies} />
            </div>
          ))}
        </div>
      </div>
    </div>
    /* <>
        <Col md={12} style={{ margin: "1em" }}>
          <VisibilityFilterInput visibilityFilter={visibilityFilter} />
        </Col>
        {filteredMovies.map((movie) => (
          <Col key={movie._id}>
            <MovieCard movie={movie} movies={movies} />
          </Col>
        ))}
      </> */
  );
}

const mapStateToProps = (state) => {
  const { favoriteMovies } = state;
  return { favoriteMovies };
};

export default connect(mapStateToProps)(FavoriteList);
// connecting a component with an action allows you to receive the actual action as a prop
