import React, { Component } from "react";
import axios from "axios";
import FilmSummary from "./FilmSummary";

export default class filmList extends Component {
  constructor() {
    super();
    this.state = {
      films: []
    };
  }

  componentDidMount() {
    axios.get("https://swapi.co/api/films/").then(response => {
      this.setState({ films: response.data.results });
    });
  }

  render() {
    const { films } = this.state;
    films.sort((a, b) => {
      return a.episode_id > b.episode_id
        ? 1
        : a.episode_id < b.episode_id
          ? -1
          : 0;
    });
    return (
      <React.Fragment>
        {films.map((f, i) => {
          return <FilmSummary film={f} key={i} />;
        })}
      </React.Fragment>
    );
  }
}
