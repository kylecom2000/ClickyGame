import React, { Component } from 'react';
import './style.css';
import ImageBox from '../ImageBox'

class ClickyGame extends Component {
  render(props) {
    return this.props.characters.map((character) => (
        <ImageBox 
          key={character.id} 
          id={character.id} 
          imgUrl={character.imgUrl} 
          name={character.name} 
          clicked={this.props.clicked}
        />
    ));
  }
}

export default ClickyGame;