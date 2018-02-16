import React, {Component} from 'react';

class TimelineFeed extends Component {
    constructor(props) {
        super(props);
        this.state = {
            post: props.post
        };
    }

    renderSocialMediaFeed() {
        const post = this.state.post;
        if (!post) return;

        if (post.retweeted !== undefined) {
            return this.renderTwitterFeed(post);
        } else {
            return this.renderInstagramFeed(post);
        }
    }

    _renderImageOrVideo(post) {
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

    renderInstagramFeed(post) {
        let containerStyle = {
            height: '500px',
            borderColor: '#8a3ab9 !important'
        };
        return (
            <div className="col-sm-4">
                <div key={ post.id }
                className="panel panel-info" id="insta-panel-info" style={ containerStyle }>
                    <div className="panel-heading" id="insta-panel-header">
                        <a className="panel-title" href={ post.user.url }>
                            { post.user.username }
                        </a>
                    </div>
                    { this._renderImageOrVideo(post) }
                </div>
            </div>
        )
    }

    renderTwitterFeed(post) {
        let containerStyle = {
            height: '200px',
        };
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

    render() {
        return this.renderSocialMediaFeed();
    }
}


export default TimelineFeed;




