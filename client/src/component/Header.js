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

    renderUserNavigation() {
        if(this.props.auth) {
            return(
                <ul className="nav navbar-nav">
                    <li className="active"><a href="/">Home</a></li>
                    <li className="active"><a href="/authenticate">Add Social Media</a></li>
                </ul>
            )
        }
    }

    render() {
        return (
            <nav className="navbar navbar-inverse">
                <div className="container-fluid">
                    <div className="navbar-header">
                        <Link to={this.props.auth ? '/' : '/'} className='navbar-brand'>
                            Mesh
                        </Link>
                    </div>
                    { this.renderUserNavigation() }
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