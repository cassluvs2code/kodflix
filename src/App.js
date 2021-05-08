import React, { Component } from 'react';
import javascriptLogo from './javascript_logo.png';
import './App.css';

class App extends Component {
  render () {
    return (
      <div className="App">
        <img src = { javascriptLogo } alt="javascript logo" />
        <br />
        <br />
        <div>
          <div>HTML5</div>
          <div>ReactJs</div>
          <div>CSS3</div>
        </div>
        
        
    </div>
    );
  }    
  
}

export default App;
