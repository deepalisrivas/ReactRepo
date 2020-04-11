import React ,{Component} from 'react';
import  './Country-section.css';
import axios from 'axios';
import usa from '../../assets/usa.svg';
import uk from '../../assets/uk.svg';
import italy from '../../assets/italy.svg';
import germany from '../../assets/germany.svg';
import china from '../../assets/china.svg';
import turkey from '../../assets/turkey.svg';
import india from '../../assets/india.svg';
import iran from '../../assets/iran.svg';
import switzerland from '../../assets/switzerland.svg';
import spain from '../../assets/spain.svg';
import up from '../../assets/Up.svg';


class CountrySection extends Component{
    state = {
        USA : [],
        UK : [],
        INDIA : [],
        ITALY : [],
        SPAIN : [],
        CHINA : [],
        TURKEY : [],
        IRAN : [],
        SWITZERLAND : [],
        GERMANY : []
        // cases : "",
        // recovered : "",
    }
    

    componentDidMount(){
        axios.get('https://corona.lmao.ninja/countries?sort=country')
        .then(response => {
            // console.log()
            // let data = response.data;
            // for(let id = 0; id<response.data.length; id++){
            //     if(data[id].country==="USA"){
            //         var cases = (data[id].cases);
            //     }
            // }
            const USA = response.data[9];
            this.setState({USA});
            const UK = response.data[10];
            this.setState({UK});
            const ITALY = response.data[111];
            this.setState({ITALY});
            const CHINA = response.data[168];
            this.setState({CHINA});
            const TURKEY = response.data[13];
            this.setState({TURKEY});
            const GERMANY = response.data[9];
            this.setState({GERMANY});
            const IRAN = response.data[116];
            this.setState({IRAN});
            const INDIA = response.data[118];
            this.setState({INDIA});
            const SWITZERLAND = response.data[22];
            this.setState({SWITZERLAND});
            const SPAIN = response.data[29];
            this.setState({SPAIN});

            // for(let i=0;i<Affected.lenth;i++){
            //     const arr = Affected[i];
            
            // }
            // for(let i in Affected){
            //     if(i.country==="USA"){
            //         console.log(i.country.cases);
            //     }
            // }
            
            
            // console.log(response.data);
        })
    }

   
    render(){
        return (
                <div className="content">
                     <div className="country-block"><div className="sub-country-block"><img src={usa} className="flags" alt="USA"/><h5>United States</h5><div className="arrow"><img src={up} alt="danger"/></div></div>
                     <div className="country-data">{this.state.USA.cases} Affected {this.state.USA.recovered} Recovered</div>
                     </div>
                     <div className="country-block"><div className="sub-country-block"><img src={uk} className="flags" alt="UK"/><h5>United Kingdom</h5><div className="arrow"><img src={up} alt="danger"/></div></div>
                     <div className="country-data">{this.state.UK.cases} Affected {this.state.UK.recovered} Recovered</div>
                     </div>
                     <div className="country-block"><div className="sub-country-block"><img src={italy} className="flags" alt="ITALY"/><h5>Italy</h5><div className="arrow"><img src={up} alt="danger"/></div></div>
                     <div className="country-data">{this.state.ITALY.cases} Affected {this.state.ITALY.recovered} Recovered</div>
                     </div>
                     <div className="country-block"><div className="sub-country-block"><img src={china} className="flags" alt="CHINA"/><h5>China</h5><div className="arrow"><img src={up} alt="danger"/></div></div>
                     <div className="country-data">{this.state.CHINA.cases} Affected {this.state.CHINA.recovered} Recovered</div>
                     </div>
                     <div className="country-block"><div className="sub-country-block"><img src={spain} className="flags" alt="SPAIN"/><h5>Spain</h5><div className="arrow"><img src={up} alt="danger"/></div></div>
                     <div className="country-data">{this.state.SPAIN.cases} Affected {this.state.SPAIN.recovered} Recovered</div>
                     </div>
                     <div className="country-block"><div className="sub-country-block"><img src={germany} className="flags" alt="GERMANY"/><h5> Germany</h5><div className="arrow"><img src={up} alt="danger"/></div></div>
                     <div className="country-data">{this.state.GERMANY.cases} Affected {this.state.GERMANY.recovered} Recovered</div>
                     </div>
                     <div className="country-block"><div className="sub-country-block"><img src={iran} className="flags" alt="IRAN"/><h5>Iran</h5><div className="arrow"><img src={up} alt="danger"/></div></div>
                     <div className="country-data">{this.state.IRAN.cases} Affected {this.state.IRAN.recovered} Recovered</div>
                     </div>
                     <div className="country-block"><div className="sub-country-block"><img src={india} className="flags" alt="INDIA"/><h5>India</h5><div className="arrow"><img src={up} alt="danger"/></div></div>
                     <div className="country-data">{this.state.INDIA.cases} Affected {this.state.INDIA.recovered} Recovered</div>
                     </div>
                     <div className="country-block"><div className="sub-country-block"><img src={switzerland} className="flags" alt="SWITZERLAND"/><h5>Switzerland</h5><div className="arrow"><img src={up} alt="danger"/></div></div>
                     <div className="country-data">{this.state.SWITZERLAND.cases} Affected {this.state.SWITZERLAND.recovered} Recovered</div>
                     </div>
                     <div className="country-block"><div className="sub-country-block"><img src={turkey} className="flags" alt="TURKEY"/><h5>Turkey</h5><div className="arrow"><img src={up} alt="danger"/></div></div>
                     <div className="country-data">{this.state.TURKEY.cases} Affected {this.state.TURKEY.recovered} Recovered</div>
                     </div>
                
                     
                </div>
        )
    }
}

export default CountrySection