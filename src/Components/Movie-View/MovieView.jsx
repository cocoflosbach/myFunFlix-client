import React, { Component } from "react";
import PropTypes from "prop-types";

import { Button, Row, Col, Card } from "react-bootstrap";

export class MovieView extends Component {
  render() {
    const { movie, onBackClick } = this.props;

    return (
      <Row>
        <Col></Col>
        <Col>
          <Card style={{ width: "18rem" }}>
            <Card.Img
              crossOrigin="https://imgur.com"
              variant="top"
              src={movie.ImagePath}
            />
            <Card.Body>
              <Card.Title>{movie.Title}</Card.Title>
              <Card.Text>{movie.Description}</Card.Text>
              <button
                onClick={() => {
                  onBackClick(null);
                }}
              >
                Back
              </button>
            </Card.Body>
            {/*  <Link to="director/name">
              <Button variant="warning">Director</Button>
            </Link>
            <br />
            <Link to="genre/name">
              <Button variant="warning">Genre</Button>
            </Link> */}
          </Card>
        </Col>
        <Col></Col>
      </Row>
    );
  }
}

MovieView.propTypes = {
  movie: PropTypes.shape({
    Title: PropTypes.string.isRequired,
    ImagePath: PropTypes.string.isRequired,
    Description: PropTypes.string.isRequired,
  }).isRequired,
  onBackClick: PropTypes.func.isRequired,
};

/* <div className="movie-view">
        <div className="movie-poster">
          <img crossOrigin="https://imgur.com" src={movie.ImagePath} />
        </div>
        <div className="movie-title">
          <span className="label">Title: </span>
          <span className="value">{movie.Title}</span>
        </div>
        <div className="movie-description">
          <span className="label">Description: </span>
          <span className="value">{movie.Description}</span>
        </div>
        <button
          onClick={() => {
            onBackClick(null);
          }}
        >
          Back
        </button>
      </div> */
