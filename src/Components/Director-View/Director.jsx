import React, { Component } from "react";
import { Button, Row, Col, Card } from "react-bootstrap";
import { Link } from "react-router-dom";

export class DirectorView extends Component {
  render() {
    const { director, onBackClick } = this.props;
    return (
      <Row>
        <Col></Col>
        <Col>
          <Card border="warning" style={{ width: "18rem" }}>
            {/* <Card.Img variant="top" src={director.ImagePath} /> */}
            <Card.Body>
              <Card.Title>{director.Name}</Card.Title>
              <Card.Text>{director.Bio}</Card.Text>
              <Link to={`/`}>
                <Button
                  onClick={() => {
                    onBackClick(null);
                  }}
                  variant="warning"
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
