import React ,{Component} from 'react';
import axios from 'axios';

import './Home.css';
import Up from '../../assets/Up.svg';
import Down from '../../assets/Down.svg';
import Graph from '../../assets/Graph.svg';
import Graph1 from '../../assets/Graph (1).svg';
import Graph2 from '../../assets/Graph (2).svg';
import Graph3 from '../../assets/Graph (3).svg';

 class Home extends Component {
   
    state = {
        Total_Cases : []
        
    }
    
    componentDidMount() {
        axios.get('https://api.covid19api.com/summary')
        
        .then(response => {
            // console.log(response.data)
            const Total_Cases = response.data.Global;
            this.setState({Total_Cases});
        const Totalactive = (Total_Cases.TotalConfirmed-(Total_Cases.TotalRecovered+Total_Cases.TotalDeaths));
            this.setState({Totalactive})
            
        })
    }
   

render(){
    return(
       

        
    <div className="HomeDiv">
        <div className="Home">
            <div className="text_div">
                 <h4>Total Cases<img src={Up} alt="Danger"/></h4>
                 <h2>{this.state.Total_Cases.TotalConfirmed}</h2>
             </div>
             <div className="images">
                 <img src={Graph} alt="Graphical-Representation"/>
             </div>
        </div>
        <div className="Home">
             <div>
                <h4>Recovered<img src={Down} alt="Relax"/></h4>
                <h2>{this.state.Total_Cases.TotalRecovered}</h2>
             </div>
             <div className="images">
                <img src={Graph3} alt="Graphical-Representation"/>
             </div>
        </div>
        <div className="Home">
             <div>
                <h4>Active Cases<img src={Up} alt="Danger"/></h4>
                <h2>{this.state.Totalactive}</h2>
            </div>
            <div className="images">
                <img src={Graph1} alt="Graphical-Representation"/>
            </div>
        </div>
        <div className="Home">
            <div>
                <h4>Total Deaths<img src={Up} alt="Danger"/></h4>
                <h2>{this.state.Total_Cases.TotalDeaths}</h2>
            </div>
            <div className="images">
                <img src={Graph2} alt="Graphical-Representation"/>
            </div>
        </div>
    </div>


    )
}
 }

 export default Home