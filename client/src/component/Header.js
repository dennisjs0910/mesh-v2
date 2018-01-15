import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
// import styles from './stylesheet/Header.css';

class Header extends Component {
    renderContent() {
        switch (this.props.auth) {
            case null:
                return;
            case false:
                return <li><a href="/auth/google"><span className="glyphicon glyphicon-log-in"></span>Login</a></li>
            default:
                return <li><a href="/api/logout"><span className="glyphicon glyphicon-log-out"></span>Logout</a></li>
        }
    }

    render() {
        return (
            <nav className="navbar navbar-inverse">
                <div className="container-fluid">
                    <div className="navbar-header">
                        <Link to={this.props.auth ? '/' : '/'} className='navbar-brand'>
                            TITLE
                        </Link>
                    </div>
                    <ul className="nav navbar-nav">
                        <li className="active"><a href="/">Home</a></li>
                    </ul>
                    <ul className="nav navbar-nav navbar-right">
                        { this.renderContent() }
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