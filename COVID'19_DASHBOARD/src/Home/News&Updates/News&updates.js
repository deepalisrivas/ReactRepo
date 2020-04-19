import React, {Component} from 'react';
import './News&updates.css';
import illustrator from '../../../assets/Illustration.svg';
import arrow from '../../../assets/Arrow.svg';

class News extends Component{


render(){
    return(
        <div className="wrapper-news">
            <div className="illustrator-img"><img src={illustrator} className="img-illustrate" alt="illustrator"/></div>
            <div className="news-content">
                <div className="news-box"><h4 className="h4">News & Updates</h4></div>
                <div className="news-symptoms"><h3>5 Symptoms of Corona Virus that you should know</h3></div>
                <div className="news-slider"><span>Read More</span><button onClick={this.props.func} className="btn-arrow"><img src={arrow} alt="Read More"/></button></div>

                 
           
            </div>
        </div>
    )
}

}

export default News