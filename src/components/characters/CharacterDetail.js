import React, { Component } from 'react';
import CharacterInfo from './CharacterInfo';

export default class CharacterDetail extends Component {
    render() {
        const {name, height, mass, hair_color, eye_color, birth_year} = this.props.character;
        return (
            <div className='summary'>
                <CharacterInfo label='Name' data={name} isHeading={true}/>
                <CharacterInfo label='Birth Year' data={birth_year}/>
                <CharacterInfo label='Height' data={height}/>
                <CharacterInfo label='Mass' data={mass}/>
                <CharacterInfo label='Hair Color' data={hair_color}/>
                <CharacterInfo label='Eye Color' data={eye_color}/>
            </div>
        );
    }
}
