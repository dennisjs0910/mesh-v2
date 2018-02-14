import React, {Component} from 'react';
import { connect } from 'react-redux';
import { fetchTwitterTimeLine } from '../actions';

class TwitterComponent extends Component {
    constructor(props) {
        super(props);
        this.state = {
            post: props.post
        };
    }

    renderTimeline() {
        const user = this.props.auth;
        let timeline = this.props.timeline;
        if (!user) {
            return (<div></div>);
        }
        if (!timeline) {
            return this.renderFetchingData();
        }

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
                    <h5>Retrieving Data From Twitter</h5>
                </div>
            </div>
        )
    }

    render() {
        let containerStyle = {
            height: '200px',
        };
        let post = this.state.post;

        if (post) {
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
        }
        
        return (
            <div className="">
                { this.renderTimeline() }
            </div>
        );
    }
}

function mapStateToProps(state){
    return {
        timeline : state.twitter,
        auth : state.auth
    };
}

export default connect(mapStateToProps, fetchTwitterTimeLine)(TwitterComponent);




