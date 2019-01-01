import React, { Component } from 'react';
import logo from './logo.svg';
import Header from './components/header.js'
import Home from './components/index.js'
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header/>
        <Home/>
      </div>
    );
  }
}


export default App;
