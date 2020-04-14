import React ,{Component} from 'react';
import {Link,BrowserRouter as Router,Route,Switch} from 'react-router-dom';
import './Navbar.css';
import icon from '../../assets/virus.svg'
import Faq from '../FAQ/Faq';
import Helpful from '../HELPFUL_LINKS/Helpful_links';
import Home from '../Home/Home';
import Main_page from '../Main_page/Main_page';

class Nav extends Component {
    render(){
        return(
            
           
                <div className="navigation">
                    <div className="icon"><img src={icon} alt="COVID'19"/></div>
                    <div><h2>COVID'19</h2></div>
                    
                    <nav>
                    <ul>
                        <Link to ="/">HOME</Link>
                        <Link to ="/FAQ">FAQ</Link>
                        <Link to ="/HELPFUL_LINKS">HELPFUL LINKS</Link>
                    </ul>
                    </nav>
                    
                   
                   
                    
                </div>
               

                   
        )
    }
}

export default Nav