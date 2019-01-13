import React, { Component } from 'react';
import './style.css';
import ImageBox from '../ImageBox'

class ClickyGame extends Component {

  render() {
    return this.props.characters.map((character) => (
        <ImageBox key={character.id} imgUrl={character.imgUrl} name={character.name} id={character.id} clicked={this.props.clicked}/>
    ));
  }
}

export default ClickyGame;
