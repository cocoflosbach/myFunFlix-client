import React from "react";
import Col from "react-bootstrap/Col";
import { connect } from "react-redux";

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
    <>
      <Col md={12} style={{ margin: "1em" }}>
        <VisibilityFilterInput visibilityFilter={visibilityFilter} />
      </Col>
      {filteredMovies.map((movie) => (
        <Col key={movie._id}>
          <MovieCard movie={movie} />
        </Col>
      ))}
    </>
  );
}

const mapStateToProps = (state) => {
  const { visibilityFilter } = state;
  return { visibilityFilter };
};

export default connect(mapStateToProps)(MovieList);
// connecting a component with an action allows you to receive the actual action as a prop

/* filteredMovies.map((m) => (
  <Col md={3} key={m._id}>
    <MovieCard movie={m} />
  </Col>
)); */
