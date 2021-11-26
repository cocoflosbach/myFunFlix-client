import React, { Component } from "react";
import PropTypes from "prop-types";

import { Button, Row, Col, Card } from "react-bootstrap";
import { Link } from "react-router-dom";
import "./MovieCard.scss";

export class MovieCard extends Component {
  render() {
    const { movie } = this.props;
    return (
      <Row className="Moviecard">
        <Col md sm className="Moviecard">
          <Card style={{ width: "18rem" }} className="cards">
            <Card.Img
              crossOrigin="https://imgur.com"
              variant="top"
              src={movie.ImagePath}
            />
            <Card.Body>
              <Card.Title>{movie.Title}</Card.Title>
              <Link to={`/movies/${movie._id}`}>
                <Button variant="warning">See More</Button>
              </Link>
            </Card.Body>
          </Card>
          {/* <Link to={`/directors/${movie.Director.Name}`}>
                  <Button variant="warning">Director</Button>
                </Link>
                <br />
                <Link to={`/genre/${movie.Genre.Name}`}>
                  <Button variant="warning">Genre</Button>
                </Link> */}
        </Col>
      </Row>
    );
  }
}

MovieCard.propTypes = {
  movie: PropTypes.shape({
    Title: PropTypes.string.isRequired,
    ImagePath: PropTypes.string.isRequired,
  }).isRequired,
};

/* <div className="MovieCard">
        <div className="movie-poster">
          <img crossOrigin="https://imgur.com" src={movie.ImagePath} />
        </div>
        <div className="movie-title">
          <span className="label">Title: </span>
          <span className="value">{movie.Title}</span>
        </div>

        <button
          onClick={() => {
            onMovieClick(null);
          }}
        >
          See More
        </button>
      </div>
    ); */
