import React, { Component } from "react";
import RouteLink from "../shared/RouteLink";

export default class Home extends Component {
  render() {
    return (
      <React.Fragment>
        <RouteLink link="/characters" text="CHARACTERS" />
        <RouteLink link="/films" text="FILMS" />
      </React.Fragment>
    );
  }
}
