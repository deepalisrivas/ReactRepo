import React , {Component} from 'react';
import './Charts.css';
import Line from './Line-chart';
import axios from 'axios'
import { useParams } from 'react-router-dom';

 class Charts extends Component{

    createFakeData(param){
        // This function creates data that doesn't look entirely random
        const data = []
    
        for (let x = 0; x <= 30; x++) {
          const random = Math.random();
          const temp = data.length > 0 ? data[data.length-1].y : 50;
          const y = random >= .45 ? temp + Math.floor(random * 20) : temp - Math.floor(random * 20);
          data.push({x,y})
        }
        // console.log(data)

        return data;
        
      };

      

    
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
        data : [
            {date : ''},
            {recovered : ''}
        ],
        
    
     }

    componentDidMount(){
        axios.get('https://api.covid19api.com/total/dayone/country/India')
       
        .then(response => {
            debugger
            let tempDate = [];
            // let tempData = [];
            // let newObject = [];
            // let tempRecovered = []

            for(var i = 0;i < response.data.length; i++){
                // const x = response.data[i].Date;
                // const y = response.data[i].Confirmed

               
            tempDate.push({date : response.data[i].Date, recovered : response.data[i].Confirmed});
            // console.log(tempData);
            //  tempData = Object.values(tempDate);
            // this.setState({date : tempDate})
            // this.state.data.push({date : response.data[i].Date, recovered : response.data[i].Confirmed})
            this.setState({...this.state,date:tempDate})
                 
                // console.log(newObject)
            // tempRecovered.push()
            // const data = response.data[i].Date
            // this.setState({data:tempDate})
            // this.setState({recovered:tempRecovered})
            }
        
            // console.log(this.state.data)
            // const name = this.state.data.map(item => {item.this.state.data.date});
            // this.setState({name})
            // console.log(name)
            // debugger
            // newObject = ;
            // console.log(Object.entries(this.state.data).map((e) => ( {[[]]:e[1] } )))

            // return data;
            // console.log(this.state.data)
        })
        // console.log(this.state.data.map(item =>(key=item.id)))
                
 }
 

    render(){
        
        console.log(this.state.data)

        // const name = this.state.data
        

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
                   
                    <Line data={this.createFakeData()}/>
                    
                      <div>
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