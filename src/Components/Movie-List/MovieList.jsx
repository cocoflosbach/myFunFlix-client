import React from "react";
import Col from "react-bootstrap/Col";
import { connect } from "react-redux";
import "tailwindcss/tailwind.css";

import { MovieCard } from "../Movie-Card/MovieCard";
import VisibilityFilterInput from "../visibility-filter-input/visibility-filter-input";

function MovieList(props) {
  const { movies, visibilityFilter } = props;
  let filteredMovies = movies;

  if (visibilityFilter !== "") {
    filteredMovies = movies.filter((m) =>
      m.Title.toLowerCase().includes(visibilityFilter.toLowerCase())
    );
  }

  if (!movies) return <div className="App" />;

  return (
    <div className="mt-4 mx-auto w-screen ">
      <div>
        <VisibilityFilterInput visibilityFilter={visibilityFilter} />
      </div>
      <div className="bg-white ">
        <div className=" grid grid-cols-1 gap-y-5 gap-x-3 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:gap-x-8 ">
          {filteredMovies.map((movie) => (
            <div key={movie._id} className="group relative ">
              <MovieCard movie={movie} movies={movies} />
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
  const { visibilityFilter } = state;
  return { visibilityFilter };
};

export default connect(mapStateToProps)(MovieList);
// connecting a component with an action allows you to receive the actual action as a prop
