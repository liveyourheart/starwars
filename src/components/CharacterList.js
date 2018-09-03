import React, { Component } from 'react';
import CharacterSummary from './CharacterSummary';

export default class CharacterList extends Component {
    
    render() {
        const { characters } = this.props;

        return (
            <React.Fragment>
                {characters.map((c, i) => {
                   return <CharacterSummary character={c} key={i}/>
            })}
            </React.Fragment>
        );
    }
}

