import React, { Component } from "react";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";

export default class RouteLink extends Component {
  render() {
    return (
      <React.Fragment>
        <h2 className="route-link">
          <Link to={this.props.link}>{this.props.text}</Link>
        </h2>
      </React.Fragment>
    );
  }
}

RouteLink.PropTypes = {
  link: PropTypes.string,
  text: PropTypes.string
};
