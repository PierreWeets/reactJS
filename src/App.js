/* eslint-disable */ /*disable warnings*/

import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Hello from './hello';

function Welcome(props){ 
  return <h1>Bonjour, {props.name}</h1>;
}

const sentence = <Welcome name="Pierre" />;

class App extends Component {
  render() {
    
    return (
    
       <div className="App">
         <Hello/>
         {sentence /*calls the React element 'sentence' and executes the welcome function with property name="Pierre"*/} 
         <Welcome name="Paul"/>
       </div>  
              
      //   <div className="App-header">
      //     <img src={logo} className="App-logo" alt="logo" />
      //     <h2>Welcome to React</h2>
      //   </div>
      //   <p className="App-intro">
      //     To get started, edit <code>src/App.js</code> and save to reload.
      //   </p>
      // </div>
    );
  }
}

export default App;
