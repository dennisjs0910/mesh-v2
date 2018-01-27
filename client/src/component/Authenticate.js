import React, {Component} from 'react';

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

export default Authenticate;
