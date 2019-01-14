import React, { Component } from 'react';
import './style.css';
import ImageBox from './ImageBox'
import ScoreCard from './ScoreCard'
import characters from './simpsons.json'


class ClickyGame extends Component {
  state = {
    characters: [],
    charactersClickedArray: [],
    score: 0,
    bestScore: 0
 }

  resetGame = (e) => {
    e.preventDefault();
    console.log(this.state);
    this.setState({ score: 0 });
    this.state.characters.map(( character, i ) => 
      this.setState({ characters: character.clicked = false }));
      this.setState({ characters });
  }

  componentDidMount() {
    this.setState({ characters })
  }

  clicked = (id) => {
    this.setState({
      score: this.state.score + 1,
      characters: this.state.characters.map(character => {
        character.id === id
          ? character.clicked = true
          : console.log("still false for this char.")
          return character;
          // returning something for now. TODO figure out what needs to be returned here.
        })
      })
  }

  render() {
    return (
      <React.Fragment>
        SCORE: {this.state.score}
        <div className="clickyGame">
          {/* <ScoreCard score={this.state.score} /> */}
          {this.state.characters.map(character =>  
            <ImageBox 
              key={character.id}
              id={character.id}
              imgUrl={character.imgUrl}
              name={character.name}
              onClick={this.clicked}
            />
            )
          }

          <button onClick={this.resetGame}>RESET GAME</button>
        
        </div>
      </React.Fragment>
  
    );
  }
}



export default ClickyGame;