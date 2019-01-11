import React, { Component } from 'react';
import logo from './Blockbuster_logo.svg';
import './App.css';
import MovieLayout from './MovieLayout';


class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />


          <MovieLayout/> 



        </header>
      </div>
    );
  }
}

export default App;
