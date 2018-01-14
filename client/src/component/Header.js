import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';


class Header extends Component {

    renderContent() {
        switch (this.props.auth) {
            case null:
                return;
            case false:
                return <li><a href='/auth/google'>Login with Google</a></li>
            default:
                return <li>LOGIN SUCCESS</li>
        }
    }

    render() {
        return (
            <nav>
                <div className='nav-wrapper'>
                    <Link to={this.props.auth ? '/' : '/'} className='left brand-logo'>
                        TITLE
                    </Link>
                    <ul className='right'>
                        {this.renderContent()}
                    </ul>
                </div>
            </nav>
        );
    }
}

function mapStateToProps({auth}) {
    return { auth };
}

Header = connect(mapStateToProps)(Header);

export default Header;