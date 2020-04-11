import React, {Component} from 'react';
import './News&updates.css';
import illustrator from '../../assets/Illustration.svg';

class News extends Component{
render(){
    return(
        <div className="wrapper1">
            <div className="illustrator-img"><img src={illustrator}/></div>
            <div className="news-content">
                <div className="news-box"><h3>News & Updates</h3></div>
                <div className="news-symptoms"><h3>5 Symptoms of Corona Virus that you should know</h3></div>
                <div className="news-slider"></div>
            </div>
        </div>
    )
}

}

export default News