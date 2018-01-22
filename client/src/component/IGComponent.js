import React, {Component} from 'react';
import { connect } from 'react-redux';
import { fetchInstagramTimeLine } from '../actions';

class IGComponent extends Component {

    renderTimeline() {
        let timeline = this.props.timeline;
        if (!timeline) {
            return this.renderFetchingData();
        }
        // console.log("singlepost",timeline[0]);
        let containerStyle = {
            height: '200px',
        };
        let mappedTimeline = timeline.map((post) => {
            return (
                <div className="col-sm-4">
                    <div key={ post.id }
                    className="panel panel-info" style={ containerStyle }>
                        <div className="panel-heading">
                            <a className="panel-title" href={ post.user.url }>
                                { post.user.name }
                            </a>
                        </div>
                        <div className="panel-body">{ post.text }</div>
                    </div>
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
                    <h5>Retrieving Data From Instagram</h5>
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
    return { timeline : state.instagram };
}

export default connect(mapStateToProps, fetchInstagramTimeLine)(IGComponent);




