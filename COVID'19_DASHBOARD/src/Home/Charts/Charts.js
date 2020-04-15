import React , {Component} from 'react';
import './Charts.css';
import Line from './Line-chart';
import axios from 'axios'
import LineChart from 'react-linechart';
// import '../node_modules/react-linechart/dist/styles.css';

// import { useParams } from 'react-router-dom';

 class Charts extends Component{

    
      

    
    //   render() {
    //     return (
    //       <div className="App">
    //         <div className="header">react svg line chart [part 1]</div>
    //         <LineChart data={this.createFakeData()} />
    //         <LineChart data={this.createFakeData()} color={'#F44336'}  />
    //       </div>
    //     );
    //   }

     state = {
        Cases : {
            date : [],
            recovered : []
        }
     }

    componentDidMount(){
        axios.get('https://api.covid19api.com/total/dayone/country/India')
       
        .then(response => {
            
            let tempDate = [];
            let tempRecovered =[];
//             
            for(var i = 0;i < response.data.length; i++){
//                
           tempDate.push(response.data[i].Date);
                tempRecovered.push(response.data[i].Confirmed);
//             // console.log(tempData);
//             //  tempData = Object.values(tempDate);
            // tempDate.push({date : response.data[i].Date, recovered : response.data[i].Confirmed})

            // this.setState({Cases : tempDate})
            // this.state.data.push({date : response.data[i].Date, recovered : response.data[i].Confirmed})
            this.setState({Cases:{
                            date:tempDate,
                            recovered:tempRecovered}
                         })
                    // console.log(this.state);
                }
                // console.log(this.state.Cases.recovered)
 
            })
        }
//     
        render() {
console.log(this.state.Cases.recovered)  



            const data = [
                {									
                    color: "red", 
                    points: [{x: 1, y: 2}, {x: 3, y: 5}, {x: 7, y: -3}]
                    // points : [{x:1 , y:this.state.Cases.recovered[0]},
                    // {x:2 , y:this.state.Cases.recovered[1]},
                    //     {x:3 , y:this.state.Cases.recovered[2]},
                    //         {x:4 , y:this.state.Cases.recovered[3]}
                    //             ]
                }

            ];
            
        // console.log(data)
            // console.log(this.state.Cases.recovered[0])
             
            //         // points :this.state.Cases
            //         points : [{x:1 , y:this.state.Cases.recovered[0]},
            //         {x:2 , y:this.state.Cases.recovered[1]},
            //             {x:3 , y:this.state.Cases.recovered[2]},
            //                 {x:4 , y:this.state.Cases.recovered[3]}
            //                     ]

       
    

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
                <div>
                   
                    {/*<Line data={this.createFakeData()}/>*/}
                    
                      <div>
                      <LineChart 
                            width={400}
                            height={300}
                            data={data}
                             />
                       {/*{this.state.data.map(postItem => (
                        <div key={postItem.id}>
                            <h1>{postItem.title}</h1>
                        </div>
                        ))}<div key={postItem.date}>
                        <h1>{postItem.recovered}</h1>
                        </div>
                       )}*/}
                       
                        
                        </div>
                       
                    
                    
                </div>
            </div>
        )
    
    }
 }

 export default Charts