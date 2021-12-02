import axios from "axios";
import { useState } from "react";
import { propTypes } from "react-bootstrap/esm/Image";
/* import {
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
} from "react-bootstrap"; */
import "tailwindcss/tailwind.css";

function UpdateUser(props) {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    const username = this.props.username;
    const token = localStorage.getItem("token");
    /* console.log(username, password, email); */
    axios
      .put(`https://my-flix-2406.herokuapp.com/users/${username}`, {
        headers: { Authorization: `Bearer ${token}` },
        Password: password,
        Email: email,
      })
      .then((response) => {
        const password = response.data.Password;
        const email = response.data.Email;
        console.log(password, email);
        /* setPassword({ password });
        setEmail({ email }); */
        window.open("/", "_self"); //Second argument is neccessary so that the page will open in the current tab
        alert("Your profile has been updated");
        props.onUserUpdate(authData);
      })
      .catch((e) => {
        console.log("There was an error updating this user");
      });
  };

  return (
    <div className="min-h-full flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-md w-full space-y-8">
        <div>
          <h2 className="mt-6 text-center text-2xl font-extrabold text-gray-900">
            Update Your Account Information
          </h2>
        </div>
        <form className="mt-8 ">
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
                disabled
                className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-t-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                placeholder="Username Change Disabled"
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
                className="mt-4 appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-b-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                placeholder="Password"
              />
            </div>
            <div>
              <label htmlFor="email" className="sr-only">
                Email
              </label>
              <input
                id="email"
                name="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                type="email"
                autoComplete="current-email"
                required
                className=" mt-4 appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-b-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                placeholder="Email"
              />
            </div>
          </div>

          <div>
            <button
              className="mt-6 group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-yellow-500 hover:bg-yellow-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-yellow-500"
              type="submit"
              onClick={handleSubmit}
            >
              Update
            </button>
          </div>
        </form>
      </div>
    </div>

    /*  <Container className="update-user">
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
                      value={password}
                      onChange={(e) => setPassword(e.target.value)}
                    />
                  </Form.Group>
                  <Form.Group controlId="formemail">
                    <Form.Label>Email:</Form.Label>
                    <Form.Control
                      type="email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                    />
                  </Form.Group>
                  <Button
                    variant="warning"
                    type="submit"
                    onClick={handleSubmit}
                  >
                    Update
                  </Button>
                </Form>
              </Card.Body>
            </Card>
          </CardGroup>
        </Col>
      </Row>
    </Container> */
  );
}

export default UpdateUser;
