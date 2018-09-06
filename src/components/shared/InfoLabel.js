import React, { Component } from "react";

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
