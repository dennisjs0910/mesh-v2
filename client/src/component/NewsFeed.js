import React, { Component } from 'react';
import TwitterComponent from './TwitterComponent';

class NewsFeed extends Component {
    render() {
        return (
            <div className='NewsFeed'>
                <h1>Hello</h1>
                <ul>
                    <TwitterComponent />
                </ul>
            </div>
        );
    }
}

export default NewsFeed;