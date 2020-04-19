import React ,{Component} from 'react';
import {NavLink} from 'react-router-dom';
import './Navbar.css';
import icon from '../../assets/virus.svg'

class Nav extends Component {
    render(){
        return(
            
           
                <div className="navigation">
                
                    <div className="icon"><img src={icon} alt="COVID'19"/></div>
                    <div><h2>COVID'19</h2></div>
               
                    <nav>
                    <ul>
                        <NavLink to="/" activeClassName="active" exact>HOME</NavLink>
                        <NavLink to="/FAQ" activeClassName="active">FAQ</NavLink>
                        <NavLink to="/HELPFUL_LINKS">HELPFUL LINKS</NavLink>
                    </ul>
                    </nav>
                    
                   
                   
                    
                </div>
               

                   
        )
    }
}

export default Nav