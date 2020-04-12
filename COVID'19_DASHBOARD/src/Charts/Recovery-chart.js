import React , {Component} from 'react';
import axios from 'axios';
import './Recovery-chart.css';

class Recovery extends Component {
    state = {
        recovery_ratio : [],
        ratio : '',
        rounded_ratio : ''
    }

    componentDidMount(){
        axios.get('https://corona.lmao.ninja/all')
        .then(response => {
            const recovery_ratio = response.data;
            this.setState({recovery_ratio});
            const ratio = (response.data.recovered/response.data.cases)*100;
            this.setState({ratio})
            const rounded_ratio = ratio.toFixed(2)
            this.setState({rounded_ratio})
            
        })
    
    }
    render(){
        return(
                <div className="wrapper-recovery">
                    <div><h3 className="main-heading">Ratio of Recovery</h3></div>
                    <div>
                        <div className="big-circle">
                            <div className="small-circle"><h3 className="h3">{this.state.rounded_ratio}%</h3></div>
                        </div>
                    </div>
                    <div className="recovery-data">
                        <div>{this.state.recovery_ratio.cases} Affected</div>
                        <div>{this.state.recovery_ratio.recovered} Recovered</div>
                    </div>
                </div>
        )
    }
}

export default Recovery