import React, { Component } from 'react';

import Home from './Home/Home';
import Navbar from './Navbar/Navbar';
import './App.css';
import CountrySection from './Country-section/Country-section';
import Maps from './Maps/Maps';
import Charts from './Charts/Charts';
import News from './News&Updates/News&updates'
import Recovery from './Charts/Recovery-chart';


class App extends Component {
  
  render() {
    return (
      <div className="App">
          <Navbar />

      <div className="section-wrapper">
      <div className="horizontal-section">
            <Home />
      
       <div className="section2">
           <CountrySection/>
            <Maps/>
       </div>

       <div className="section3">
            <Charts />
            <News/>
       </div>

      </div>

      <div className="vertical-section">
            <Recovery/>
      </div>
      
      </div>
      
      
      </div>
    );
  }
}


export default App
 
