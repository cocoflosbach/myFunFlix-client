import React, { Component } from "react";
import { Button, Row, Col, Card } from "react-bootstrap";
import { Link } from "react-router-dom";

export class DirectorView extends Component {
  render() {
    const { director, onBackClick } = this.props;
    return (
      <div className="bg-white ">
        <div className=" max-w-2xl mx-auto py-16 px-4 sm:py-24 sm:px-6  lg:px-8">
          <div>
            {/* <div className="w-full min-h-80 bg-gray-200 aspect-w-1 aspect-h-1 rounded-md overflow-hidden group-hover:opacity-75 lg:h-80 lg:aspect-none">
              <img
                crossOrigin="https://imgur.com"
                variant="top"
                src={movie.ImagePath}
                className="w-full h-full object-center object-cover lg:w-full lg:h-full"
              />
            </div> */}
            <div className="mt-4 flex justify-between">
              <div>
                <h3 className="text-lg text-center justify-center font-extrabold text-black">
                  <span aria-hidden="true" className="absolute inset-0" />
                  {director.Name}
                </h3>
                <p className="mt-1 text-center text-sm text-gray-500">
                  {director.Bio}
                </p>
              </div>
              {/* <p className="text-sm font-medium text-gray-900">{product.price}</p> */}
            </div>
            <div>
              <button
                type="submit"
                onClick={() => {
                  onBackClick(null);
                }}
                className="mt-14 group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-yellow-500 hover:bg-yellow-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-yellow-500"
                type="submit"
              >
                Back
              </button>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

/* <Row>
        <Col></Col>
        <Col>
          <Card border="warning" style={{ width: "18rem" }}>
            {/* <Card.Img variant="top" src={director.ImagePath} /> */
/* <Card.Body>
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
      </Row> */
