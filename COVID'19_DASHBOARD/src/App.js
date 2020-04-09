import React, { Component } from 'react';
import Home from './Home/Home';
import Navbar from './Navbar/Navbar';
import './App.css';
import CountrySection from './Country-section/Country-section';

class App extends Component {
  render() {
    return (
      <div className="App">
      <Navbar />
      <div className="full-content">
       <Home />
       <CountrySection/>
      </div>
      </div>
    );
  }
}

export default App;
