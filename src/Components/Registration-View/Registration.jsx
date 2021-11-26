import React, { useState } from "react";
import axios from "axios";
import { Form, Button, Row, Col, Card, CardGroup } from "react-bootstrap";
import { Link } from "react-router-dom";

export function RegistrationView(props) {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");
  const [birthday, setBirthday] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    axios
      .post("https://my-flix-2406.herokuapp.com/users", {
        Username: username,
        Password: password,
        Email: email,
        Birthday: birthday,
      })
      .then((response) => {
        const data = response.data;
        console.log(data);
        window.open("/", "_self"); //Second argument is neccessary so that the page will open in the current tab
        navigate("/login");
      })
      .catch((e) => {
        console.log("There was an error registering this user");
      });
  };

  return (
    <Row>
      <Col></Col>
      <Col sm={8}>
        <CardGroup>
          <Card>
            <Card.Body>
              <Form noValidate>
                <Form.Group className="mb-3" controlId="formBasicUsername">
                  <Form.Label>Username</Form.Label>
                  <Form.Control
                    type="username"
                    placeholder="Username"
                    value={username}
                    onChange={(e) => setUsername(e.target.value)}
                    required
                  />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                  <Form.Label>Email address</Form.Label>
                  <Form.Control
                    type="email"
                    placeholder="Enter email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                  />
                  <Form.Text className="text-muted">
                    We'll never share your email with anyone else.
                  </Form.Text>
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicPassword">
                  <Form.Label>Password</Form.Label>
                  <Form.Control
                    type="password"
                    placeholder="Your password must be 8 or more characters"
                    minLength="8"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    required
                  />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicPassword">
                  <Form.Label>Birthday</Form.Label>
                  <Form.Control
                    type="birthday"
                    placeholder="Birthday"
                    value={birthday}
                    onChange={(e) => setBirthday(e.target.value)}
                    required
                  />
                </Form.Group>

                <Button variant="warning" type="submit" onClick={handleSubmit}>
                  Register
                </Button>
                <br />
                <br />
                <Form.Group className="mb-3" controlId="formBasicCheckbox">
                  <Form.Label> Already Registered? </Form.Label> {}
                  <br />
                  <Link to={`/`}>
                    <Button variant="warning" type="submit">
                      Login Here
                    </Button>
                  </Link>
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
      <label>
        Password:
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
      </label>
      <label>
        Password:
        <input
          type="birthday"
          value={birthday}
          onChange={(e) => setBirthday(e.target.value)}
        />
      </label>
      <button type="submit" onClick={handleSubmit}>
        Submit
      </button>
    </form> */
