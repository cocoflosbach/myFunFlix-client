import React from "react";
import { connect } from "react-redux";
import { HeartIcon } from "@heroicons/react/outline";

import { setFavoriteMovie } from "../../actions/Actions";

import "tailwindcss/tailwind.css";

function addFavoriteMovie(props) {
  return (
    <div className="mt-12 center">
      <button onClick={props.setFavoriteMovie()}>
        <HeartIcon />
      </button>
    </div>
  );
}

export default connect(null, { setFavoriteMovie })(addFavoriteMovie);
// connecting a component with an action allows you to receive the actual action as a prop
