import React,{Component} from 'react';
import './Main_page.css';
import Home from '../Home/Home';
import CountrySection from '../Home/Country-section/Country-section';
import Maps from '../Home/Maps/Maps';
import Charts from '../Home/Charts/Charts';
import News from '../Home/News&Updates/News&updates';
import Recovery from '../Home/Charts/Recovery-chart';
import Modal from '../Home/News&Updates/Modal/Modal'
import TwitterFeed from '../Home/Twitter-feed/Twitter-feed';
import Faq from '../FAQ/Faq';

class Main_page extends Component {
    
        constructor(props) {
          super(props);
      
          this.state = { isOpen: false };
        }
      
        toggleModal = () => {
          this.setState({
            isOpen: !this.state.isOpen
          });
        }
render(){
    return(
        <div className="section-wrapper">
<div className="horizontal-section">
      <Home />

 <div className="section2">
     <CountrySection/>
      <Maps/>
 </div>

 <div className="section3">
      <Charts />
      <News func={this.toggleModal} />
 </div>

</div>

<div className="vertical-section">
      <Recovery/>
      <TwitterFeed />
</div>
                <Modal  
                
                show={this.state.isOpen}
                onClose={this.toggleModal}>
                
                </Modal>
                
</div>

    )
}
}

export default Main_page