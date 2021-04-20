import React, { Component } from 'react';
import javascriptLogo from './javascript_logo.png';
import './App.css';

class App extends Component {
  render () {
    return (
      <div className="App">
        <img src = { javascriptLogo } alt="javascript logo" />
        <h1>Welcome to Kodflix</h1>
    </div>
    );
  }    
  
}

export default App;
