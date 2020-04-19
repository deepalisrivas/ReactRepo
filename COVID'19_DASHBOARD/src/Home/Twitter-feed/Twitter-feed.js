import React , {Component} from 'react';
import { TwitterTimelineEmbed, TwitterShareButton, TwitterFollowButton, TwitterHashtagButton, TwitterMentionButton, TwitterTweetEmbed, TwitterMomentShare, TwitterDMButton, TwitterVideoEmbed, TwitterOnAirButton } from 'react-twitter-embed'
import './Twitter-feed.css';
import bird from '../../../assets/twitter.svg';

class TwitterFeed extends Component {
    
    render(){
        return(
            <div className="wrapper-feed">
               
        <div>
        <TwitterTimelineEmbed
        sourceType="profile"
        screenName="PMOIndia"
        options={{height: 235}}
      />
      <TwitterTimelineEmbed
        sourceType="profile"
        screenName="WHO"
        options={{height: 235}}
      />
        </div>
            </div>
        )
    }
}

export default TwitterFeed;