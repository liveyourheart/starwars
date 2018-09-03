import React, { Component } from 'react';
import axios from 'axios';
import CharacterSummary from './CharacterSummary';

export default class CharacterList extends Component {
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
        const { characters } = this.state;

        return (
            <React.Fragment>
                {characters.map((c, i) => {
                   return <CharacterSummary character={c} key={i}/>
            })}
            </React.Fragment>
        );
    }
}

