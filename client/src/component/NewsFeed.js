import React, { Component } from 'react';
import TwitterComponent from './TwitterComponent';
import IGComponent from './IGComponent';
import SortButton from './SortButton';
import { connect } from 'react-redux';
import { fetchInstagramTimeLine, fetchTwitterTimeLine } from '../actions';

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


function mapStateToProps(state) {
    return {
        instagram : state.instagram,
        twitter : state.twitter,
        auth: state.auth
    };
}

export default connect(mapStateToProps, [fetchInstagramTimeLine, fetchTwitterTimeLine])(NewsFeed);