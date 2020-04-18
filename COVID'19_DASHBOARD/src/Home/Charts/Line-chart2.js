import React from 'react';
import {XYPlot, XAxis, YAxis, LineSeries} from 'react-vis';

import "./style.css";

const Line2 = (props) => {
    const recovered = props.data.map((item)=>{  
        return   {x: (new Date(item.Date).toDateString()),
            y: item.Recovered}
        });
        return(
            <XYPlot yDomain={[0,10000]}
            xType="ordinal"
            width={500}
            height={200}>
            
            
            <XAxis title="Date"/>
            <YAxis title="Recovered" />
                
                    <LineSeries 
                    data={recovered}
                    style={{stroke: 'red', strokeWidth: 2}}/>

        </XYPlot>
        )
}
export default Line2