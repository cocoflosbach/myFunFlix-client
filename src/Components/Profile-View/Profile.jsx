import axios from "axios";
import React, { Component } from "react";
import FavMovies from "./FavMovies";
import UpdateUser from "./UpdateUser";
import UserInfo from "./UserInfo";
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

export class Profile extends Component {
  constructor(props) {
    super(props);
    this.state = {
      username: null,
      password: null,
      email: null,
      birthday: null,
      favoriteMovies: null,
    };
  }

  componentDidMount() {
    let accessToken = localStorage.getItem("token");
    if (accessToken !== null) {
      this.getUser(accessToken);
    }
  }

  getUser(token) {
    const username = localStorage.getItem("user");
    axios
      .get(`https://my-flix-2406.herokuapp.com/users/${username}`, {
        headers: { Authorization: `Bearer ${token}` },
      })
      .then((response) => {
        console.log("response", response);
        this.setState({
          username: response.data.Username,
          password: response.data.Password,
          email: response.data.Email,
          birthday: response.data.Birthday,
          favoriteMovies: response.data.FavoriteMovies,
        }).catch((e) => {
          console.log("User not found");
        });
      });
  }

  onUserUpdate(authData) {
    console.log(authData);
    this.setState({
      password: response.data.Password,
      email: response.data.Email,
    });
    localStorage.setItem("token", authData.token);
    localStorage.setItem("user", authData.token);
    this.getUser(authData.token);
  }

  removeFavMovie() {
    axios
      .delete(
        `https://my-flix-2406.herokuapp.com/users/${username}/movies/${movies._id}`,
        {
          headers: { Authorization: `Bearer ${token}` },
        }
      )
      .then((response) => {
        console.log(response).catch((error) => {
          console.log("This movie was not deleted");
        });
      });
  }

  handleDeleteUser() {
    const token = localStorage.getItem("token");
    const user = localStorage.getItem("user");
    axios
      .get(`https://my-flix-2406.herokuapp.com/users/${username}`, {
        headers: { Authorization: `Bearer ${token}` },
      })
      .then(() => {
        localStorage.removeItem("token");
        localStorage.removeItem("user");
        alert("Your account has been deleted");
        window.open(`/`, "self");
      })
      .catch((e) => {
        console.log(error);
      });
  }

  render() {
    const { username, password, email, birthday, favoriteMovies } = this.state;
    const { movies, user } = this.props;
    return (
      <Container>
        <Row>
          <Col>
            <UserInfo
              username={username}
              password={password}
              email={email}
              birthday={birthday}
            />
          </Col>
        </Row>
        <Row>
          <Col>
            <UpdateUser onUserUpdate={(user) => this.onUserUpdate(user)} />
          </Col>
        </Row>
        <Row>
          <Col>
            <FavMovies movies={movies} favMovies={favoriteMovies} />
          </Col>
        </Row>
      </Container>
    );
  }
}