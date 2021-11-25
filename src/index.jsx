import React, { Component } from "react";
import ReactDOM from "react-dom";

import "./index.scss";

class MyFunFlixApplication extends Component {
  render() {
    return (
      <div className="my-fun-flix">
        <div>Good morning</div>
      </div>
    );
  }
}

const container = document.getElementsByClassName("root")[0];

ReactDOM.render(React.createElement(MyFunFlixApplication), container);
