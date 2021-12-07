import React, { Component } from "react";
import "tailwindcss/tailwind.css";
import { Link } from "react-router-dom";

class FavMovies extends Component {
  /* movie(movieId) {
    return this.props.favoriteMovies.find((m) => m._id === movieId);
  } */

  render() {
    const { movies, favoriteMovies, movie } = this.props;

    return (
      <div className="bg-white ">
        <div className=" max-w-2xl  mx-auto py-16 px-4 sm:py-6 sm:px-3 lg:max-w-7xl lg:px-8">
          <div>
            <div className="w-full min-h-80 bg-gray-200 aspect-w-1 aspect-h-1 rounded-md overflow-hidden group-hover:opacity-75 lg:h-80 lg:aspect-none">
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
                {/* <p className="mt-1 text-sm text-gray-500">{product.color}</p> */}
              </div>
              {/* <p className="text-sm font-medium text-gray-900">{product.price}</p> */}
            </div>
            <div>
              <Link to={`/movies/${movie._id}`}>
                <button
                  type="submit"
                  className="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-yellow-500 hover:bg-yellow-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-yellow-500"
                  type="submit"
                >
                  See More
                </button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default FavMovies;

/* <Row>
        <Col md={8} className="movie-list">
          <Card
            border="warning"
            style={{ width: "18rem" }}
            className="movie-list"
          >
            <Card.Img
              crossOrigin="https://imgur.com"
              variant="top"
              src={favoriteMovies.ImagePath}
            />
            <Card.Body>
              <Card.Title>{favoriteMovies.Title}</Card.Title>
              <Link to={`/movies/${movies._id}`}>
                <Button variant="warning">Open</Button>
              </Link>
            </Card.Body>
          </Card>
        </Col>
      </Row> */
