import React from "react";
import { connect } from "react-redux";

import Form from "react-bootstrap/Form";

import { setFilter } from "../../actions/Actions";

function VisibilityFilterInput(props) {
  return (
    <div className="mt-12 center">
      <input
        id="visibility-search"
        value={props.VisibilityFilter}
        onChange={(e) => props.setFilter(e.target.value)}
        className=" mx-auto appearance-none rounded-none relative block w-10/12 px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-t-md focus:outline-none focus:ring-yellow-500 focus:border-yellow-500 focus:z-10 sm:text-sm"
        placeholder="Search Movies"
      />
    </div>
  );
}

export default connect(null, { setFilter })(VisibilityFilterInput);
// connecting a component with an action allows you to receive the actual action as a prop
