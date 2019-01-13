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

export default App;
