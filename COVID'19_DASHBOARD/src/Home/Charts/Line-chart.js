
import React from 'react';
import {XYPlot, XAxis, YAxis,LineSeries} from 'react-vis';

import "./style.css";

const Line = (props) => {

    
    const confirmed = props.data.map((item)=>{  
      return   {x: (new Date(item.Date).toDateString()),
          y: item.Confirmed}
      });
    return (
      
        <XYPlot yDomain={[0,10000]}
            xType="ordinal"
            width={500}
            height={200}>
            
           
            <XAxis title="Date"/>
            <YAxis title="Confirmed" />
                <LineSeries 
                curve={'curveMonotoneX'}

                    data={confirmed}
                    style={{stroke: 'red', strokeWidth: 2}}/>
                   

        </XYPlot>
        
        
       
    );
}

export default Line;