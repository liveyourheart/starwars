import React, { Component } from "react";
import InfoLabel from "../shared/InfoLabel";
import { Link } from "react-router-dom";

export default class CharacterSummary extends Component {
  constructor(props) {
    super(props);
    console.log(this.props);
    this.state = {
      id: this.props.character.url
        .split("https://swapi.co/api/people/")
        .join("")
    };
  }

  render() {
    const {
      name,
      height,
      mass,
      hair_color,
      eye_color,
      birth_year,
      url
    } = this.props.character;
    return (
      <Link to={`/characters/${this.state.id}`}>
        <div className="summary">
          <InfoLabel label="Name" data={name} isHeading={true} />
          <InfoLabel label="Birth Year" data={birth_year} />
          <InfoLabel label="Height" data={height} />
          <InfoLabel label="Mass" data={mass} />
          <InfoLabel label="Hair Color" data={hair_color} />
          <InfoLabel label="Eye Color" data={eye_color} />
        </div>
      </Link>
    );
  }
}
