import React, { Component } from 'react';
import TwitterComponent from './TwitterComponent';
import IGComponent from './IGComponent';
import FilteredComponent from './FilteredComponent';
class NewsFeed extends Component {
    render() {
        return (
            <div className='NewsFeed'>
                <ul>
                    <IGComponent />
                    <TwitterComponent />
                    <FilteredComponent />
                </ul>
            </div>
        );
    }
}

export default NewsFeed;