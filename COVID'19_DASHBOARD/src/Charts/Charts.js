import React , {Component} from 'react';
import './Charts.css';

 class Charts extends Component{
    render(){
        return(
            <div className="wrapper">
                <div className="charts-heading">
                    <h3>Spread Trends</h3>
                    <div className="button-area">
                        <button className="btn">Confirmed</button>
                        <button className="btn">Recovered</button>
                        <button className="btn">Deceased</button>
                    </div>
                </div>
                <div></div>
            </div>
        )
    
    }
 }

 export default Charts