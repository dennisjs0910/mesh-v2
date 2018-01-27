import React, {Component} from 'react';
// import { connect } from 'react-redux';
// import { authTwitter , authInstagram } from '../actions/authAction';

class Authenticate extends Component {
    render() {
        return(
            <div>
                <div className="auth-container auth-twitterAuthenticate">
                    <span>
                        <a href="/auth/twitter">Twitter</a>
                    </span>
                    
                </div>
                <div className="auth-container auth-instagramAuthenticate">
                    <span>
                        <a href="auth/instagram">Instagram</a>
                    </span>
                </div>
            </div>
        );
    }
}

// function mapStateToProps(store) {
//     return { auth : store.auth };
// }
// function mapDispatchToProps() {
//     return {authTwitter: authTwitter, authInstagram: authInstagram};
// }
// export default connect(mapStateToProps, mapDispatchToProps)(Authenticate);
export default Authenticate;
