import React, { Component } from 'react';
import CharacterList from './components/CharacterList';
import axios from 'axios';
import './App.css';

class App extends Component {
  constructor() {
        super();
        this.state = {
            characters: [],
        };
    }

    componentDidMount() {
        axios.get('https://swapi.co/api/people/')
        .then(response => {
            console.log(response.data.results);
            this.setState({characters: response.data.results})
        });
    }
  render() {
    return (
      <CharacterList characters={this.state.characters}/>
    );
  }
}

export default App;
