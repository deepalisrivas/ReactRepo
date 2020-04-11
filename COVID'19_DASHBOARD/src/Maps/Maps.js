import React ,{Component} from 'react';
import './Maps.css';

import axios from 'axios';
import { VectorMap } from "react-jvectormap";


class Maps extends Component{

    state = {
        most_affected  : {
            country: "",
            cases: ""
        },
        less_affected : {
            country : "",
            cases : ""
        }
    }


componentDidMount(){
    axios.get('https://corona.lmao.ninja/countries?sort=country')
    $(function(){
            $('.map1').vectorMap({
             map: 'world_mill',
             series: {
                //this is the object for passing country/region data into
                regions: [{
                  //define the range of color values
                  scale: ['#DEEBF7', '#08519C'],
                  //define the function that maps data to color range
                  normalizeFunction: 'linear',
                  //define the coloration method
                  attribute: 'fill',
                  //define the array of country data
                  values: this.state.most_affected
                }]
              },
             });
           })
    .then(response => {
        // console.log(response.data );
        let most_affected1 = [];
        let less_affected1 = [];
        for(const i=0;i<response.data.length;i++){
            if(response.data[i].cases > 10000){
                most_affected1.push({country:response.data[i].country,cases:response.data[i].cases})
                
                this.setState({
                    most_affected : most_affected1 
                })
                //  this.setState({most_affected});
                //  console.log(most_affected)

                 
            }
            else{
            //     less_affected1.push(response.data[i].country)
            less_affected1.push({country:response.data[i].country,cases:response.data[i].cases})
                
            this.setState({
                less_affected : less_affected1 
            })
            }
            // else {
            //      less_affected1 = response.data[i].country
            //     this.setState({less_affected})
            // }
            // const most_affected1 = most_affected;
       
        // this.setState({
        //     less_affected : less_affected1
        // })
        }
        console.log(this.state.most_affected)
        console.log(this.state.less_affected)
        // const {id ,cases} = response.data
       
        // console.log(id,cases)
    })
    //
    }

    


    render(){
        
        // console.log(...this.state.most_affected)
        
            

        return(
            <div className="Wrapper">
            <div className="Map-content">
                <h3>COVID-19 Affected Areas</h3>
                <ul>
                    <li>Most Affected</li>
                    <li>Less Affected</li>
                </ul>
            </div>
            <div className="Map-area">
            
            <VectorMap map={'world_mill'}
            backgroundColor= "#fbf321"
            
            ref="map"
            containerStyle={{
                width: '100%',
                height: '90%',
                
            }}
            
        
                />
            </div>
            </div>
        )
    }
}

export default Maps