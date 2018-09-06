import React, { Component } from "react";
import InfoLabel from "../shared/InfoLabel";

export default class FilmSummary extends Component {
  render() {
    const { title, director, producer, episode_id } = this.props.film;
    return (
      <div className="summary">
        <InfoLabel label="Title" data={title} isHeading={true} />
        <InfoLabel label="Director" data={director} />
        <InfoLabel label="Produced By" data={producer} />
        <InfoLabel label="episode" data={episode_id} />
      </div>
    );
  }
}
