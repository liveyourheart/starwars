import React, { Component } from "react";
import axios from "axios";
import InfoLabel from "../shared/InfoLabel";
import RouteLink from "../shared/RouteLink";

export default class CharacterDetail extends Component {
  constructor(props) {
    super(props);
    this.state = {
      character: {
        name: "",
        birth_year: 0,
        height: 0,
        mass: 0,
        hair_color: "",
        eye_color: "",
        films: []
      }
    };
  }
  componentDidMount() {
    axios
      .get(`https://swapi.co/api/people/${this.props.match.params.id}`)
      .then(response => {
        console.log(response);
        this.setState({ character: response.data });
      });
  }
  render() {
    const {
      name,
      height,
      mass,
      hair_color,
      eye_color,
      birth_year,
      films
    } = this.state.character;
    return (
      <React.Fragment>
        <div className="summary">
          <InfoLabel label="Name" data={name} isHeading={true} />
          <InfoLabel label="Birth Year" data={birth_year} />
          <InfoLabel label="Height" data={height} />
          <InfoLabel label="Mass" data={mass} />
          <InfoLabel label="Hair Color" data={hair_color} />
          <InfoLabel label="Eye Color" data={eye_color} />
        </div>
        <RouteLink text="Back" link="/characters" />
      </React.Fragment>
    );
  }
}
