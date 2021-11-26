import React, { Component } from "react";
import {
  Form,
  Button,
  Row,
  Col,
  Figure,
  Card,
  CardGroup,
  Container,
  ListGroup,
  ListGroupItem,
  CardDeck,
} from "react-bootstrap";
import { Link } from "react-router-dom";

class FavMovies extends Component {
  render() {
    const { movies } = this.props;
    return (
      <Row>
        <Col md={8} className="movie-list">
          <Card
            border="warning"
            style={{ width: "18rem" }}
            className="movie-list"
          >
            <Card.Img
              crossOrigin="https://imgur.com"
              variant="top"
              src={movies.ImagePath}
            />
            <Card.Body>
              <Card.Title>{movies.Title}</Card.Title>
              <Link to={`/movies/${movies._id}`}>
                <Button variant="warning">Open</Button>
              </Link>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    );
  }
}

export default FavMovies;
