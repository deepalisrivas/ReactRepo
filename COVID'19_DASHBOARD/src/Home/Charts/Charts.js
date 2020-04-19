import React , {Component} from 'react';
import './Charts.css';
import Line from './Line-chart';
import Line2 from './Line-chart2';
import Line3 from './Line-chart3';
import axios from 'axios'




 class Charts extends Component{

    constructor(props){
    super(props)
    this.state = {
        
        cases :[],
        visible : true,
        visible1: false,
        visible2:false
    }
    }

    componentDidMount(){
        axios.get('https://api.covid19api.com/total/dayone/country/India')
       
        .then(response => {
            
            
                const cases = response.data;
               
                this.setState({cases})
                // console.log(this.state.cases)
                
 
            })
        }
   
        render() {
          

        return(
            <div className="wrapper">
                <div className="charts-heading">
                    <h3>Spread Trends</h3>
                    <div className="button-area">
                        <button className="btn current" onClick={()=>{this.setState({visible:true,visible1:false,visible2:false})}}>Confirmed</button>
                        <button className="btn" onClick={()=>{this.setState({visible1:true,visible:false,visible2:false})}}>Recovered</button>
                        <button className="btn" onClick={()=>{this.setState({visible2:true,visible:false,visible1:false})}}>Deceased</button>
                    </div>
                </div>
                <div className="chart_div">
                               
                      

                      {this.state.visible? <Line data={this.state.cases}/> : null}
                      {this.state.visible1? <Line2 data={this.state.cases}/> : null}
                      {this.state.visible2? <Line3 data={this.state.cases}/> : null}
                       
                       
                    
                    
                </div>
            </div>
        )
    
    }
 }

 export default Charts