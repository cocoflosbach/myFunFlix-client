import axios from "axios";
import React, { useState } from "react";
import { Form, Button, Row, Col, Card, CardGroup } from "react-bootstrap";
import { Link } from "react-router-dom";
import "tailwindcss/tailwind.css";

export function LoginView(props) {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    axios
      .post("https://my-flix-2406.herokuapp.com/login", {
        Username: username,
        Password: password,
      })
      .then((response) => {
        const data = response.data;
        console.log(username, password);
        props.onLoggedIn(data);
      })
      .catch((e) => {
        console.log(
          "Login details incorrect. Please check your username and password."
        );
      });
  };

  return (
    /* <Row>
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
                  <Link to={`/register`}>
                    <Button variant="warning" type="submit">
                      Register Here
                    </Button>
                  </Link>
                </Form.Group>
              </Form>
            </Card.Body>
          </Card>
        </CardGroup>
      </Col>
      <Col></Col>
    </Row> */

    <div className="min-h-full flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-md w-full space-y-8">
        <div>
          <img
            className="mx-auto h-12 w-auto"
            crossOrigin="https://imgur.com"
            src="https://i.imgur.com/IOx97Xx.png"
            alt="Workflow"
          />
          <h2 className="mt-6 text-center text-3xl font-extrabold text-gray-900">
            Sign in to your account
          </h2>
        </div>
        <form className="mt-8 space-y-6" action="#" method="POST">
          <input type="hidden" name="remember" defaultValue="true" />
          <div className="rounded-md shadow-sm -space-y-px">
            <div>
              <label htmlFor="username" className="sr-only">
                Username
              </label>
              <input
                id="username"
                name="username"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                type="text"
                autoComplete="username"
                required
                className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-t-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                placeholder="Enter Username"
              />
            </div>
            <div>
              <label htmlFor="password" className="sr-only">
                Password
              </label>
              <input
                id="password"
                name="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                type="password"
                autoComplete="current-password"
                required
                className=" mt-4 appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-b-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                placeholder="Password"
              />
            </div>
          </div>

          <div>
            <button
              type="submit"
              className="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-yellow-500 hover:bg-yellow-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-yellow-500"
              type="submit"
              onClick={handleSubmit}
            >
              Sign in
            </button>
          </div>
          <div>
            <h5 className="mt-6 text-center text-xl font-extrabold text-gray-900 ">
              New User?
            </h5>
            {"  "}
            <Link to={`/register`}>
              <button
                className="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-yellow-500 hover:bg-yellow-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-yellow-500"
                variant="warning"
                type="submit"
              >
                Register Here
              </button>
            </Link>
          </div>
        </form>
      </div>
    </div>
  );
}
/* mt-6 text-center text-3xl font-extrabold text-gray-900 */
