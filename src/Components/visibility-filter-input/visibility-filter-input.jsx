import React from "react";
import { connect } from "react-redux";

import Form from "react-bootstrap/Form";

import { setFilter } from "../../actions/actions";

function VisibilityFilterInput(props) {
  return (
    <Form.Control
      onChange={(e) => props.setFilter(e.target.value)}
      value={props.VisibilityFilter}
      placeholder="Search Movies"
    />
  );
}

export default connect(null, { setFilter })(VisibilityFilterInput);
// connecting a component with an action allows you to receive the actual action as a prop
