import React, { Component } from "react";
import { Button, Row, Col, Card } from "react-bootstrap";
import { Link } from "react-router-dom";

export class GenreView extends Component {
  render() {
    const { genre, onBackClick } = this.props;
    return (
      <Row>
        <Col></Col>
        <Col>
          <Card style={{ width: "18rem" }}>
            {/* <Card.Img variant="top" src={genre.ImagePath} /> */}
            <Card.Body>
              <Card.Title>{genre.Name}</Card.Title>
              <Card.Text>{genre.Description}</Card.Text>
              <Link to={`/`}>
                <Button
                  variant="warning"
                  onClick={() => {
                    onBackClick(null);
                  }}
                >
                  Back
                </Button>
              </Link>
            </Card.Body>
          </Card>
        </Col>
        <Col></Col>
      </Row>
    );
  }
}
