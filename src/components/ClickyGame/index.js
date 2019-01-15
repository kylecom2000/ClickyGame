import React, { Component } from 'react';
import './style.css';
import ImageBox from './ImageBox'
import ScoreCard from './ScoreCard'
import characters from './simpsons.json'

class ClickyGame extends Component {
  state = {
    characters: [],
    charactersClicked: [],
    score: 0,
    bestScore: 0,
    message: "Welcome"
 }

  componentDidMount() {
    this.setState({ characters })
  }

  clicked = (id) => {
    if(!this.state.charactersClicked.includes(id)){
      this.setState({
        message: "Pick Another",
        score: this.state.score + 1,
        charactersClicked: [...this.state.charactersClicked, id]
      })
    } 
    else {
      if(this.state.score > this.state.bestScore){
        this.setState({
          bestScore: this.state.score
        });
      }
     this.gameOver();
    }
    this.randomizeArray();
  }

  gameOver() {
    this.setState({ 
      score: 0, 
      message: "GAME OVER", 
      charactersClicked: []
    })
  }


  randomizeArray(){
    let newOrder = [];
    let currentOrder = this.state.characters;
    let length = this.state.characters.length;

    for (let i = 0; i<length; i++){
        let selected = Math.floor(Math.random()*currentOrder.length);
        let element = currentOrder.splice(selected,1);
        newOrder.push(element[0]);
    }
    this.setState({characters: newOrder});
  }

  render() {
    return (
      <React.Fragment>
        <div className="clickyGame">
          <ScoreCard 
            score={this.state.score} 
            message={this.state.message}
            bestScore={this.state.bestScore}
          />
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
        
        </div>
      </React.Fragment>
  
    );
  }
}



export default ClickyGame;