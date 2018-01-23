import React, {Component} from 'react';
import { connect } from 'react-redux';
import { authTwitter , authInstagram } from '../actions/authAction';

class Authenticate extends Component {
    render() {
        return(
            <div>
                <h1>
                Puts some buttons here man
                </h1>
            </div>
        );
    }
}

function mapStateToProps({auth}) {
    return { auth };
}

export default connect(mapStateToProps, [authTwitter, authInstagram])(Authenticate);

