import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Main_page from './Main_page/Main_page';
import Navbar from './Navbar/Navbar';
import './App.css';

// import Line from './Charts/Line-chart';
import Faq from './FAQ/Faq';
import Helpful from './HELPFUL_LINKS/Helpful_links'



class App extends Component {
  

  
  render() {
    return (
      <Router> 
      <div className="App">
      
          <Navbar />
          <Route path="/" exact component={Main_page}/>
          <Route path="/FAQ" component={Faq}/>
          <Route path="/HELPFUL_LINKS" component={Helpful}/>
    
      </div>
      </Router> 
      
    );
  }
}


export default App
 
