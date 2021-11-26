import React, { Component } from "react";
import ReactDOM from "react-dom";
import App from "./Components/App/App";
import { Container } from "react-bootstrap";
import { createStore } from "redux";
import { Provider } from "react-redux";
import moviesApp from "./reducers/reducers";
import { devToolsEnhancer } from "redux-devtools-extension";

import "./index.scss";

const store = createStore(moviesApp, devToolsEnhancer());

class MyFunFlixApplication extends Component {
  render() {
    return (
      <Provider store={store}>
        <Container className="my-fun-flix">
          <App />
        </Container>
      </Provider>
    );
  }
}

// Find the root of our app
const container = document.getElementsByClassName("root")[0];

// Tell React to render our app in the root DOM element
ReactDOM.render(React.createElement(MyFunFlixApplication), container);
