import React , {Component} from 'react';
import './Twitter-feed.css';
import axios from 'axios';
import bird from '../../../assets/twitter.svg';

class TwitterFeed extends Component {
componentDidMount(){
    axios.get('https://www.who.int/feeds/entity/csr/don/en/rss.xml')
//     .then(response => response.text)
//   .then(str => new window.DOMParser().parseFromString(str, "text/xml"))
  .then(data => console.log(data))
}
    

    render(){
        return(
            <div className="wrapper-feed">
                <div className="feed-heading">
                    <h3 className="heading2">Latest Tweets</h3>
                    <img src={bird} alt="twitter-logo" className="bird"/>
                </div>
                <div></div>
            </div>
        )
    }
}

export default TwitterFeed;