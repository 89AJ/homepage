import React, { Component } from 'react';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src={require("./AAA.jpg")} className="App-logo" alt="me" />
          <p className="Me-text">I'm <b>Anders Jensen</b>, a PhD student working in the field of molecular electronics. Modelling molecules and how current flow through them </p>
        </div>
        <p className="App-intro">
          Here goes the data
        </p>
      </div>
    );
  }
}

export default App;
