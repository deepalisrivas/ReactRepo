import React , {Component} from 'react';
import axios from 'axios';
import './Recovery-chart.css';

class Recovery extends Component {
    state = {
        recovery_ratio : [],
        
    }

    componentDidMount(){
        axios.get('https://api.covid19api.com/summary')
        .then(response => {
            const recovery_ratio = response.data.Global;
            this.setState({recovery_ratio});
            const ratio = ((recovery_ratio.TotalRecovered/recovery_ratio.TotalConfirmed)*100).toFixed(2);
            this.setState({ratio})
            
            
        })
    
    }
    render(){
        return(
                <div className="wrapper-recovery">
                    <div><h3 className="main-heading">Ratio of Recovery</h3></div>
                    <div>
                        <div className="big-circle">
                            <div className="small-circle"><h3 className="h3">{this.state.ratio}%</h3></div>
                        </div>
                    </div>
                    <div className="recovery-data">
                        <div>{this.state.recovery_ratio.TotalConfirmed} Affected</div>
                        <div>{this.state.recovery_ratio.TotalRecovered} Recovered</div>
                    </div>
                </div>
        )
    }
}

export default Recovery