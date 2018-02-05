import React, { Component } from 'react';
import { connect } from 'react-redux';


class PostContainer extends Component {
    render() {
        return (
            <div>
            </div>
        );
    }
}


const mapStateToProps = state => {
    return {
    	timeline: state.post
    };
};


export default connect(mapStateToProps)(PostContainer);
