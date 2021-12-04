import React, { Component } from "react";
import axios from "axios";
import PropTypes from "prop-types";
import { Fragment } from "react";
import { Disclosure, Menu, Transition } from "@headlessui/react";
import { HeartIcon } from "@heroicons/react/outline";
import { HeartIcon } from "@heroicons/react/solid";
import { NavigationBar } from "../navigation-bar/navigation-bar";

/* import { Container, Button, Row, Col, Card } from "react-bootstrap"; */
import { Link } from "react-router-dom";
import "./MovieView.scss";
import "tailwindcss/tailwind.css";

export class MovieView extends Component {
  addFavoriteMovie(props) {
    const token = localStorage.getItem("token");
    const username = localStorage.getItem("username");

    axios
      .post(
        `https://my-flix-2406.herokuapp.com/users/${username}/movies/${this.props.movie._id}`,
        {
          headers: { Authorization: `Bearer ${token}` },
        }
      )
      .then((response) => {
        console.log(response);
        alert(`Added to Favorites`);
      })
      .catch(function (error) {
        console.log(error);
      });
  }
  removeFavoriteMovie(props) {
    const token = localStorage.getItem("token");
    const username = localStorage.getItem("username");

    axios
      .delete(
        `https://my-flix-2406.herokuapp.com/users/${username}/movies/${this.props.movie._id}`,
        {
          headers: { Authorization: `Bearer ${token}` },
        }
      )
      .then((response) => {
        console.log(response);
        alert(`Removed from Favorites`);
      })
      .catch(function (error) {
        console.log(error);
      });
  }

  render() {
    const { movie, onBackClick, movies, movieID } = this.props;

    return (
      <div className="bg-white ">
        <div className=" max-w-2xl mx-auto py-16 px-4 sm:py-24 sm:px-6  lg:px-8">
          <div>
            <div className="w-full min-h-80 bg-gray-200 aspect-w-1 aspect-h-1 rounded-md overflow-hidden group-hover:opacity-75 lg:h-screen lg:aspect-none">
              <img
                crossOrigin="https://imgur.com"
                variant="top"
                src={movie.ImagePath}
                className="w-full h-full object-center object-cover lg:w-full lg:h-full"
              />
            </div>
            <div className="mt-4 flex justify-between">
              <div>
                <h3 className="text-lg justify-center font-extrabold text-black">
                  <span aria-hidden="true" className="absolute inset-0" />
                  {movie.Title}
                </h3>
                <p className="mt-1 text-sm text-gray-500">
                  {movie.Description}
                </p>
              </div>
              {/* <p className="text-sm font-medium text-gray-900">
                
              </p> */}
            </div>

            <div className=" mt-4 grid grid-cols-1 gap-y-5 gap-x-3 sm:grid-cols-2">
              <Link to={`/directors/${movie.Director.Name}`}>
                <button
                  className="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-yellow-500 hover:bg-yellow-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-yellow-500"
                  variant="warning"
                >
                  Director
                </button>
              </Link>
              {"    "}
              <Link to={`/genres/${movie.Genre.Name}`}>
                <button
                  className="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-yellow-500 hover:bg-yellow-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-yellow-500"
                  variant="warning"
                >
                  Genre
                </button>
              </Link>
            </div>

            <div>
              <button
                type="submit"
                onClick={() => {
                  onBackClick(null);
                }}
                className="mt-4 group relative  flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-yellow-500 hover:bg-yellow-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-yellow-500"
                type="submit"
              >
                Back
              </button>
            </div>
            <div>
              <button
                variant="warning"
                className="mt-4 group relative flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-yellow-500 hover:bg-yellow-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-yellow-500"
                key={movie._id}
                onClick={() => {
                  this.addFavoriteMovie(movie);
                }}
              >
                <HeartIcon className="block h-6 w-6" />
                Add to Favorites
              </button>
            </div>
            {/* <div>
              <button
                variant="warning"
                className="mt-4 group relative flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-yellow-500 hover:bg-yellow-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-yellow-500"
                key={movie._id}
                onClick={() => {
                  this.removeFavoriteMovie(movie);
                }}
              >
                <HeartIcon className="block h-6 w-6" />
                Remove from Favorites
              </button>
            </div> */}
          </div>
        </div>
      </div>
      /* <Container className="Movieview">
        <Row>
          <Col></Col>
          <Col>
            <Card style={{ width: "18rem" }}>
              <Card.Img
                className="Movieview-img"
                crossOrigin="https://imgur.com"
                variant="top"
                src={movie.ImagePath}
              />
              <Card.Body>
                <Card.Title className="Movieview-title">
                  {movie.Title}
                </Card.Title>
                <Card.Text className="Movieview-text">
                  {movie.Description}
                </Card.Text>

                <Button
                  variant="warning"
                  className="fav-button"
                  value={movie._id}
                  onClick={() => {
                    this.addFavoriteMovie(movie);
                  }}
                >
                  Add to Favorites
                </Button>

                <Button
                  className="remove-fav"
                  variant="warning"
                  onClick={() => {
                    this.removeFavoriteMovie(movie);
                  }}
                >
                  Remove from Favorites
                </Button>
                <br />
                <br />
                <Button
                  className="Movieview-Button"
                  variant="warning"
                  onClick={() => {
                    onBackClick(null);
                  }}
                >
                  Back
                </Button>
                <br />
              </Card.Body>
            </Card>
          </Col>
          <Col></Col>
        </Row>
        <Row className="MovieView-GD-Buttons">
          <Card>
            <Col>
              <Link to={`/directors/${movie.Director.Name}`}>
                <Button className="Movieview-Button" variant="warning">
                  Director
                </Button>
              </Link>
              {"    "}
              <Link to={`/genres/${movie.Genre.Name}`}>
                <Button className="Movieview-Button" variant="warning">
                  Genre
                </Button>
              </Link>
            </Col>
          </Card>
        </Row>
      </Container> */
    );
  }
}

MovieView.propTypes = {
  movie: PropTypes.shape({
    Title: PropTypes.string.isRequired,
    ImagePath: PropTypes.string.isRequired,
    Description: PropTypes.string.isRequired,
  }).isRequired,
  onBackClick: PropTypes.func.isRequired,
};
