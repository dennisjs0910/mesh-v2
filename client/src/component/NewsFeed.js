import React, { Component } from 'react';
import TwitterComponent from './TwitterComponent';
import IGComponent from './IGComponent';
class NewsFeed extends Component {
    render() {
        return (
            <div className='NewsFeed'>
                <ul>
                    <IGComponent />
                    <TwitterComponent />
                </ul>
            </div>
        );
    }
}

export default NewsFeed;