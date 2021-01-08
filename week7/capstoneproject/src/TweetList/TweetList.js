import React, { Component } from 'react';
import Tweet from '../Tweet/Tweet';


class TweetsList extends Component {
    
    render() {
    const mappedTweets = this.props.tweets.map((tweet, i) => { 
      
        return (
            <div>
            <Tweet 
                key={tweet.id}
                index={tweet.id}
                name={tweet.name}
                tag={tweet.tag}
                textArea={tweet.textArea}
                message={tweet.message}
                imageName={tweet.imageName}
                handleDelete={this.props.handleDelete}
                handleEdit={(i, edits) => {
                this.props.handleEdit(i, edits)}}
                tweet={tweet}
            />
            </div>
        );
    })
        return (
            <div>
                {mappedTweets}
            </div>
        );
    }
}

export default TweetsList;