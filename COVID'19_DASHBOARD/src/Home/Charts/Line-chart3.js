import React from 'react';
import {XYPlot, XAxis, YAxis,LineSeries,makeWidthFlexible} from 'react-vis';

import "./style.css";

const Line3 = (props) => {
    
    const deceased = props.data.map((item)=>{  
        return   {x: (new Date(item.Date).toDateString()),
            y: item.Deaths}
        });

        const FlexibleXYPlot = makeWidthFlexible(XYPlot);


    return(
        <div style={{width:'100%'}}>
            <FlexibleXYPlot yDomain={[0,10000]}
            xType="ordinal"
            // width={500}
            height={200}>
            
            
            <XAxis title="Date"/>
            <YAxis title="Deceased" />
                
                    <LineSeries 
                    curve={'curveMonotoneX'}
                    data={deceased}
                    style={{stroke: 'red', strokeWidth: 2}}/>

        </FlexibleXYPlot>
        </div>
        )
}
export default Line3