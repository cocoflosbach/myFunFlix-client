import React, { Component } from "react";
import { Button, Row, Col, Card } from "react-bootstrap";
import { Link } from "react-router-dom";
import "tailwindcss/tailwind.css";

export class DirectorView extends Component {
  render() {
    const { director, onBackClick } = this.props;
    return (
      <div className="bg-white ">
        <div className=" max-w-2xl mx-auto py-16 px-4 sm:py-24 sm:px-6  lg:px-8">
          <div>
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
            </div>
            <div>
              <button
                type="submit"
                onClick={() => {
                  onBackClick(null);
                }}
                className="mt-14 mx-auto group relative w-24 flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-yellow-500 hover:bg-yellow-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-yellow-500"
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
