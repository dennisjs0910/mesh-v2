import React, { Component } from 'react';
import { connect } from 'react-redux';
import { sortTimeline } from '../actions'


class SortButton extends Component {
    render() {
        return (
            <div>
                <button className='btn btn-primary' onClick = { this.props.onClickTime }>
                {this.props.sortInfo}
                </button>
            </div>
        );
    }
}


const mapStateToProps = state => {
    return {sortInfo: state.sort.key}
};

const mapDispatchToProps = dispatch => ({
    onClickTime: () => { dispatch(sortTimeline("time")) }
});



export default connect(mapStateToProps, mapDispatchToProps)(SortButton);
