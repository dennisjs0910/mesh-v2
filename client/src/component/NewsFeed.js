import React, { Component } from 'react';
import TwitterComponent from './TwitterComponent';
import IGComponent from './IGComponent';
import postsComponent from './postsComponent';

class NewsFeed extends Component {
    render() {
        return (
            <div className='NewsFeed'>
                <ul>
                    <IGComponent />
                    <TwitterComponent />
                    <postsComponent />
                </ul>
            </div>
        );
    }
}

export default NewsFeed;