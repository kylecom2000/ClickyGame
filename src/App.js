import React, { Component } from 'react';
import Header from './components/Header';
import Navbar from './components/Navbar';
import ClickyGame from './components/ClickyGame';
import Footer from './components/Footer';
import './App.css';
import characters from './simpsons.json'

class App extends Component {
  state = {
    characters: [],
    score: 0,
    highScore: 0
 }

  resetGame = (e) => {
    e.preventDefault();
    // console.log({characters})
    this.setState({
      characters,
      highScore: this.state.score,
      score: "1",
    })
    return characters
  }

  clicked = (id) => {
    console.log("array of state.characters", this.state.characters)
    console.log("id of pic",id);
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
      console.log("score after clicked?",this.state.score);
    
  }

  componentDidMount() {
    this.setState({ characters })
  }
  
  render() {
    return (
      <React.Fragment>
        <Navbar />
        <div className="container">
          <Header />
          <button onClick={this.resetGame}>RESET GAME</button>
          <ClickyGame 
            characters={this.state.characters} 
            clicked={this.clicked} />
        </div>
        <Footer />
      </React.Fragment>
    );
  }

}

export default App;