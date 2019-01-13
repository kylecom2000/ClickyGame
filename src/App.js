import React, { Component } from 'react';
import Header from './components/Header';
import Navbar from './components/Navbar';
import ClickyGame from './components/ClickyGame';
import Footer from './components/Footer';
import './App.css';
import characters from './simpsons.json'

class App extends Component {
 state = {
   characters: []
 }

  componentDidMount() {
    this.setState({ characters })
  }

  clicked = (id) => {
    console.log("CLICKED");
    console.log(id);
    console.log(this.state.characters)
    this.setState({
      characters: this.state.characters.map(character => {
        character.id === id
          ? (character.clicked = true)
          : console.log("not thi")
          return character;
      })
      
      
    })
    
  }


  render() {
    return (
      <React.Fragment>
        <Navbar />
        <div className="container">
          <Header />
          <ClickyGame characters={this.state.characters} clicked={this.clicked} />
        </div>
        <Footer />
      </React.Fragment>
    );
  }
}

export default App;
