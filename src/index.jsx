import React, { Component } from "react";
import ReactDOM from "react-dom";
import { App } from "./Components/App/App";

import "./index.scss";

class MyFunFlixApplication extends Component {
  render() {
    return (
      <div className="my-fun-flix">
        <App />
      </div>
    );
  }
}

const container = document.getElementsByClassName("root")[0];

ReactDOM.render(React.createElement(MyFunFlixApplication), container);
