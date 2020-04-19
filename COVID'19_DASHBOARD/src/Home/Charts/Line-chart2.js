import React from 'react';
import {XYPlot, XAxis, YAxis, LineSeries,makeWidthFlexible} from 'react-vis';

import "./style.css";

const Line2 = (props) => {
    const recovered = props.data.map((item)=>{  
        return   {x: (new Date(item.Date).toDateString()),
            y: item.Recovered}
        });


        const FlexibleXYPlot = makeWidthFlexible(XYPlot);

        return(
            <div style={{width:'100%'}}>
            <FlexibleXYPlot yDomain={[0,10000]}
            xType="ordinal"
           
            height={200}>
            
            
            <XAxis title="Date"/>
            <YAxis title="Recovered" />
                
                    <LineSeries 
                    curve={'curveMonotoneX'}
                    data={recovered}
                    style={{stroke: 'red', strokeWidth: 2}}/>

        </FlexibleXYPlot>
        </div>
        )
}
export default Line2