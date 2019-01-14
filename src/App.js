import React, { Component } from 'react';
import Header from './components/Header';
import Navbar from './components/Navbar';
import ClickyGame from './components/ClickyGame';
import Footer from './components/Footer';
import './App.css';


class App extends Component {

  render() {
    return (
      <React.Fragment>
        <Navbar />
        <div className="container">
          <Header />
          <ClickyGame />
        </div>
        <Footer />
      </React.Fragment>
    );
  }
}

//   state = {
//     characters: [],
//     charactersClickedArray: [],
//     score: 0,
//     highScore: 0
//  }

  //  resetGame = (e) => {
  //   e.preventDefault();
  //   console.log(this.state);
  //   this.setState({ score: 0 });
  //   this.state.characters.map(( character, i ) => 
  //     this.setState({ characters: character.clicked = false }));
  //     this.setState({ characters });
  // }
//  When ID of character gets clicked
 //  indexOf of Find, if returns truthy value...if there is a character in charactersClicked end game.
 // ....add to charachtersClicked.


  // clicked = (id) => {
  //   // console.log(this.state.charactersClickedArray)
  //   // this.setState({charactersClickedArray: id })
  //   // console.log("array of state.characters", this.state.characters)
  //   // console.log("id of pic",id);
  //   this.setState({
  //     score: this.state.score + 1,
  //     characters: this.state.characters.map(character => {
  //       character.id === id
  //         ? character.clicked = true
  //         : console.log("still false for this char.")
  //         return character;
  //         // returning something for now. TODO figure out what needs to be returned here.
  //       })
  //     })
  // }

  // componentDidMount() {
  //   this.setState({ characters })
  // }



export default App;