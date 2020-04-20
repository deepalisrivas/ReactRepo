import React ,{Component} from 'react';
import './Maps.css';
import axios from 'axios';
import * as am4core from "@amcharts/amcharts4/core";
import * as am4maps from "@amcharts/amcharts4/maps";
import am4geodata_worldLow from "@amcharts/amcharts4-geodata/worldLow";



class Maps extends Component{

render(){
        return(
            <div className="Wrapper-map">
            <div className="Map-content">
                <h3>COVID-19 Affected Areas</h3>
                <ul>
                    <li>Most Affected</li>
                    <li>Less Affected</li>
                </ul>
            </div>
            </div>
        )
    }
}

export default Maps