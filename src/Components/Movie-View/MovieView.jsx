import React, { Component } from "react";
import axios from "axios";
import PropTypes from "prop-types";

import { Container, Button, Row, Col, Card } from "react-bootstrap";
import { Link } from "react-router-dom";
import "./MovieView.scss";

export class MovieView extends Component {
  AddFavMovie(_id) {
    const token = localStorage.getItem("token");
    const username = localStorage.getItem("user");
    axios
      .post(
        `https://my-flix-2406.herokuapp.com/users/${username}/movies/${this.movie._id}`,
        {
          headers: { Authorization: `Bearer ${token}` },
        }
      )
      .then((response) => {
        console.log(response);
        const data = response.data;
        alert("Added to Favorite Movie List").catch((e) => {
          console.log("e", "Favorite Movie not added");
        });
      });
  }
  render() {
    const { movie, onBackClick } = this.props;

    return (
      <Container className="Movieview">
        <Row>
          <Col></Col>
          <Col>
            <Card style={{ width: "18rem" }}>
              <Card.Img
                className="Movieview-img"
                crossOrigin="https://imgur.com"
                variant="top"
                src={movie.ImagePath}
              />
              <Card.Body>
                <Card.Title className="Movieview-title">
                  {movie.Title}
                </Card.Title>
                <Card.Text className="Movieview-text">
                  {movie.Description}
                </Card.Text>
                <Button
                  className="Movieview-Button"
                  variant="warning"
                  onClick={this.AddFavMovie}
                >
                  Add to Favorites
                </Button>
                <br />
                <br />
                <Button
                  className="Movieview-Button"
                  variant="warning"
                  onClick={() => {
                    onBackClick(null);
                  }}
                >
                  Back
                </Button>
                <br />
              </Card.Body>
            </Card>
          </Col>
          <Col></Col>
        </Row>
        <Row className="MovieView-GD-Buttons">
          <Card>
            <Col>
              <Link to={`/directors/${movie.Director.Name}`}>
                <Button className="Movieview-Button" variant="warning">
                  Director
                </Button>
              </Link>
              {"    "}
              <Link to={`/genres/${movie.Genre.Name}`}>
                <Button className="Movieview-Button" variant="warning">
                  Genre
                </Button>
              </Link>
            </Col>
          </Card>
        </Row>
      </Container>
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
