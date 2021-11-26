import axios from "axios";
import { useState } from "react";
import { propTypes } from "react-bootstrap/esm/Image";
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

function UpdateUser() {
  const { username, setUsername } = useState("");
  const { password, setPassword } = useState("");
  const { email, setEmail } = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(username, password, email);

    axios
      .put("https://my-flix-2406.herokuapp.com/users", {
        Password: this.state.password,
        Email: this.state.email,
      })
      .then((response) => {
        const data = response.data;
        console.log(password, email);
        props.onUserUpdate(data);
      })
      .catch((e) => {
        console.log("There was an error updating this user");
      });
  };

  return (
    <Container className="update-user">
      <Row className="justify-content-md-center">
        <Col md={8}>
          <CardGroup>
            <Card border="warning" style={{ width: "18rem" }}>
              <Card.Body>
                <Card.Title>Update User Information</Card.Title>
                <Form>
                  <Form.Group controlId="formUsername">
                    <Form.Label>Username:</Form.Label>
                    <Form.Control
                      type="text"
                      onChange={(e) => setUsername(e.target.value)}
                      disabled
                    />
                  </Form.Group>
                  <Form.Group controlId="formPassword">
                    <Form.Label>Password:</Form.Label>
                    <Form.Control
                      type="password"
                      onChange={(e) => setPassword(e.target.value)}
                    />
                  </Form.Group>
                  <Form.Group controlId="formemail">
                    <Form.Label>Email:</Form.Label>
                    <Form.Control
                      type="email"
                      onChange={(e) => setEmail(e.target.value)}
                    />
                  </Form.Group>
                  <Button
                    variant="warning"
                    type="submit"
                    onSubmit={(e) => handleSubmit(e)}
                  >
                    Update
                  </Button>
                </Form>
              </Card.Body>
            </Card>
          </CardGroup>
        </Col>
      </Row>
    </Container>
  );
}

export default UpdateUser;
