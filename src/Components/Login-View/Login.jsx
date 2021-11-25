import React, { useState } from "react";
import { Form, Button, Row, Col, Card, CardGroup } from "react-bootstrap";

export function LoginView(props) {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(username, password);
    // props.onLoggedIn(username);
  };

  return (
    <Row>
      <Col></Col>
      <Col sm={8}>
        <CardGroup>
          <Card>
            <Card.Body>
              <Form className="Login" noValidate>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                  <Form.Label>Username</Form.Label>
                  <Form.Control
                    type="text"
                    placeholder="Enter username"
                    value={username}
                    onChange={(e) => setUsername(e.target.value)}
                    required
                  />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicPassword">
                  <Form.Label>Password</Form.Label>
                  <Form.Control
                    type="password"
                    placeholder="Password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    required
                  />
                </Form.Group>
                <Button variant="warning" type="submit" onClick={handleSubmit}>
                  Login
                </Button>
                <br />
                <br />
                <Form.Group className="mb-3" controlId="formBasicCheckbox">
                  <Form.Label> New User? </Form.Label> {}
                  <br />
                  <Button variant="warning" type="submit">
                    Register Here
                  </Button>
                </Form.Group>
              </Form>
            </Card.Body>
          </Card>
        </CardGroup>
      </Col>
      <Col></Col>
    </Row>
  );
}

/*  <form>
      <label>
        Username:
        <input
          type="text"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
      </label>
      <label>
        Password:
        <input
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
      </label>
      <button type="submit" onClick={handleSubmit}>
        Submit
      </button>
    </form> */
