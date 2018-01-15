import React, {Component} from 'react';
import { connect } from 'react-redux';
import { fetchTwitterTimeLine } from '../actions';
// import  from './stylesheet/Header.css';

class TwitterComponent extends Component {

    renderTimeline() {
        let timeline = this.props.timeline;
        if (!timeline) {
            return this.renderFetchingData();
        }
        // console.log("singlepost",timeline[0]);
        let mappedTimeline = timeline.map((post) => {
            return (
                <div className="panel panel-info">
                    <div className="panel-heading">
                        <a className="panel-title" href={ post.user.url }>
                            { post.user.name }
                        </a>
                    </div>
                    <div className="panel-body">{ post.text }</div>
                </div>
            )
        });
        

        return(
            <div>
                { mappedTimeline }
            </div>
        )
    }

    renderFetchingData() {
        return (
            <div>
                <div className="panel-heading">
                    <h5>Retrieving Data From Twitter</h5>
                </div>
            </div>
        )
    }



    render() {
        return (
            <div className="">
                { this.renderTimeline() }
            </div>
        );
    }
}

function mapStateToProps(state){
    return { timeline : state.twitter };
}

export default connect(mapStateToProps, fetchTwitterTimeLine)(TwitterComponent);




