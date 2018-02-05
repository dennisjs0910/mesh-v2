import React, { Component } from 'react';
import { connect } from 'react-redux';
import { sortTimeline } from '../actions'


class SortButton extends Component {
    render() {
        const post = this.props.post;
        let onClickHandler = () => this.props.onClickTime(post);
        return (
            <div>
                <button className='btn btn-primary' onClick = { onClickHandler } >
                {this.props.sortInfo}
                </button>
            </div>
        );
    }
}


const mapStateToProps = state => {
    return {
        sortInfo: state.sort.key,
        post: {
            twitter: state.twitter,
            instagram: state.instagram
        }
    };
};

const mapDispatchToProps = dispatch => ({
    onClickTime: (data) => {
        dispatch(sortTimeline("time", data));
    }
});



export default connect(mapStateToProps, mapDispatchToProps)(SortButton);
