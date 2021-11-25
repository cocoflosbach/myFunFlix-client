import React, { Component } from "react";
import ReactDOM from "react-dom";
import { App } from "./Components/App/App";
import { Container } from "react-bootstrap";

import "./index.scss";

class MyFunFlixApplication extends Component {
  render() {
    return (
      <Container className="my-fun-flix">
        <App />
      </Container>
    );
  }
}

const container = document.getElementsByClassName("root")[0];

ReactDOM.render(React.createElement(MyFunFlixApplication), container);
