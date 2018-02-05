import React, { Component } from 'react';
import TwitterComponent from './TwitterComponent';
import IGComponent from './IGComponent';
import SortButton from './SortButton';

class NewsFeed extends Component {
    render() {
        return (
            <div className='NewsFeed'>
                <ul>
                    <SortButton />
                    <IGComponent />
                    <TwitterComponent />
                </ul>
            </div>
        );
    }
}

export default NewsFeed;