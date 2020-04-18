import React from 'react';
import {XYPlot, XAxis, YAxis,LineSeries} from 'react-vis';

import "./style.css";

const Line3 = (props) => {
    
    const deceased = props.data.map((item)=>{  
        return   {x: (new Date(item.Date).toDateString()),
            y: item.Deaths}
        });
    return(
            <XYPlot yDomain={[0,10000]}
            xType="ordinal"
            width={500}
            height={200}>
            
            
            <XAxis title="Date"/>
            <YAxis title="Deceased" />
                
                    <LineSeries 
                    
                    data={deceased}
                    style={{stroke: 'red', strokeWidth: 2}}/>

        </XYPlot>
        )
}
export default Line3