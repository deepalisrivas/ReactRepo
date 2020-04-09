import React ,{Component} from 'react';
import './Navbar.css';
import icon from '../../assets/virus.svg'

class Nav extends Component {
    render(){
        return(
                <div className="navigation">
                    <div className="icon"><img src={icon} alt="COVID'19"/></div>
                    <div><h2>COVID'19</h2></div>
                    <nav>
                        <a href="/">HOME</a>
                        <a href='/FAQ'>FAQ</a>
                        <a href='/HELPFUL-LINKS'>HELPFUL LINKS</a>
                    </nav>
                </div>
        )
    }
}

export default Nav