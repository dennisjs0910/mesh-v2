import React, { Component } from 'react';
import { connect } from 'react-redux';
import { sortTimeline } from '../actions';


class SortButton extends Component {
    
    render() {
        const {name, post} = this.props;
        let onClickHandler = () => this.props.onClickHandler(name, post);
        return (
            <button type="button" className="btn btn-default" onClick = { onClickHandler } >
                {this.props.name}
            </button>
        );
    }
}

const mapStateToProps = state => ({
    post: {
        twitter: state.twitter,
        instagram: state.instagram
    }
});

export default connect(mapStateToProps, sortTimeline)(SortButton);