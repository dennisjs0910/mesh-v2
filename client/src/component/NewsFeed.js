import React, { Component } from 'react';
import TwitterComponent from './TwitterComponent';

class NewsFeed extends Component {
    render() {
        return (
            <div className='NewsFeed'>
                <ul>
                    <TwitterComponent />
                </ul>
            </div>
        );
    }
}

export default NewsFeed;