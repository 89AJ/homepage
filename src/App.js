import React, { Component } from 'react';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src={require("./AAA.jpg")} className="App-logo" alt="me" />
          <h2>Anders Jensen</h2>
        </div>
        <p className="App-intro">
          my text
        </p>
      </div>
    );
  }
}

export default App;
