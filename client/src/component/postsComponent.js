import React, { Component } from 'react';
import { connect } from 'react-redux';
import {sortTimeline} from "../actions";

class postsComponent extends Component {
    render() {
        let aTimeline = this.props.timeline;
        console.log(aTimeline);
        // console.log(aResult);


        return <div>
            <button onClick={() => sortTL()}>Time</button>
        </div>
    }
}

let mapStateToProps = state => {
    return {timeline: state.aPosts};
};

const sortTL = () => sortTimeline("time", "asc");

export default connect(mapStateToProps)(postsComponent);