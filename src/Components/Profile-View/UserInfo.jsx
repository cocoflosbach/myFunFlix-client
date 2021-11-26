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

class UserInfo extends Component {
  render() {
    const { username, password, email, birthday } = this.props;
    return (
      <Row>
        <Col></Col>
        <Col>
          <Card border="warning" style={{ width: "25rem" }}>
            <Card.Header>Profile Info</Card.Header>
            <Card.Body>
              <ListGroup variant="flush">
                <ListGroup.Item>Username: {username} </ListGroup.Item>
                {/* <ListGroup.Item>Password: {password} </ListGroup.Item> */}
                <ListGroup.Item>Email: {email} </ListGroup.Item>
                <ListGroup.Item>Birthday: {birthday} </ListGroup.Item>
              </ListGroup>
            </Card.Body>
          </Card>
        </Col>
        <Col></Col>
      </Row>
    );
  }
}

export default UserInfo;
