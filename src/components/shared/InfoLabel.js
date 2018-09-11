import React, { Component } from "react";
import PropTypes from "prop-types";

export default class InfoLabel extends Component {
  render() {
    return this.props.isHeading ? (
      <React.Fragment>
        <span>
          <b>
            {this.props.label}: {this.props.data}
          </b>
        </span>
        <br />
      </React.Fragment>
    ) : (
      <React.Fragment>
        <span>
          {this.props.label}: {this.props.data}
        </span>
        <br />
      </React.Fragment>
    );
  }
}

InfoLabel.PropTypes = {
  isHeading: PropTypes.bool,
  label: PropTypes.string,
  data: PropTypes.string
};
