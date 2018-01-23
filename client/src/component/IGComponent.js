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
            height: '500px',
            borderColor: '#8a3ab9 !important'
        };

        let mappedTimeline = timeline.map((post) => {
            return (
                <div className="col-sm-4">
                    <div key={ post.id }
                    className="panel panel-info" id="insta-panel-info" style={ containerStyle }>
                        <div className="panel-heading" id="insta-panel-header">
                            <a className="panel-title" href={ post.user.url }>
                                { post.user.username }
                            </a>
                        </div>
                        { this.renderImageOrVideo(post) }
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

    renderImageOrVideo(post) {
        if (post.type === "video") {
            return(
                <div className="panel-body">
                    <video controls loop width= "300px">
                        <source src={post.videos.low_resolution.url} type="video/mp4"/>
                    </video>
                    <p>Likes: {post.likes.count} </p>
                    <p>{ post.caption.text }</p>
                </div>
            )
        } else {
            return(
                <div className="panel-body">
                    <img width= "300px" src={post.images.low_resolution.url}/>
                    <p>Likes: {post.likes.count} </p>
                    <p>{ post.caption.text }</p>
                </div>
            )
        }
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




