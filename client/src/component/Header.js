import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import styles from './stylesheet/Header.css';

class Header extends Component {
    renderContent() {
        switch (this.props.auth) {
            case null:
                return;
            case false:
                return <a className="nav-item nav-link" href='/auth/google'>Login with Google</a>
            default:
                return <a className="nav-item nav-link" href='/api/logout'>Logout</a>
        }
    }

    render() {
        return (
            <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
                <Link to={this.props.auth ? '/' : '/'} className='navbar-brand'>
                    TITLE
                </Link>

                <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
                    <div className="navbar-nav">
                    </div>
                </div>
                <div className="navbar-nav navbar-right">
                    { this.renderContent() }
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