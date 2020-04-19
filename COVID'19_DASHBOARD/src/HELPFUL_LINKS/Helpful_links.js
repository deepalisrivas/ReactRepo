import React,{Component} from 'react';
import './Helpful_links.css';

import virus from '../../assets/virus.jpeg'

class helpful extends Component {
    render(){
        return(
            
            <div className="Images">
                
                <img src={virus} alt="CoronaVirus" className="footer_img"/>
            
                <div className="Links_div">
                    <div>
                        <h3 class="Links_heading">About COVID-19</h3>
                        <ul>
                            <li><a href="https://en.wikipedia.org/wiki/Coronavirus">Discovery</a></li>
                            <li><a href="https://www.sciencedaily.com/releases/2020/03/200317175442.htm">Origin</a></li>
                            <li><a href="https://www.cdc.gov/coronavirus/2019-ncov/symptoms-testing/symptoms.html">Symptoms</a></li>
                            <li><a href="https://www.who.int/emergencies/diseases/novel-coronavirus-2019/advice-for-public">Precautions</a></li>
                            
                        </ul>
                    </div>
                    <div>
                        <h3 class="Links_heading">Updates&News</h3>
                        <ul>
                            <li><a href="https://www.worldometers.info/coronavirus/">WHO</a></li>
                            <li><a href="https://economictimes.indiatimes.com/news/et-explains/all-you-need-to-know-about-the-deadly-novel-coronavirus/articleshow/73542980.cms?from=mdr">Economic Times</a></li>
                            <li><a href="https://www.youtube.com/playlist?list=PLQ_IRFkDInv_zLVFTgXA8tW0Mf1iiuuM_">Youtube</a></li>
                            <li><a href="https://twitter.com/hashtag/coronavirusupdates?lang=en">Twitter</a></li>
                        </ul>
                    </div>
                    
            
                </div>
            </div>
            
            
        )
    }
}

export default helpful