import React, { Component } from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import { connect } from 'react-redux';
import * as actions from '../actions';
import NewsFeed from './NewsFeed'
import Header from './Header';
import Authenticate from './Authenticate';

class App extends Component {

    componentDidMount() {
        this.props.fetchUser();
    }

    renderHome() {
        return (
            <div>
                <Header />
                <Route exact path='/' component={ NewsFeed } />
                <Route exact path='/authenticate' component={ Authenticate } />
            </div>
        );
    }

    renderUserLogin() {
        return (
            <div>
                <Header />
                <h1>STUB PLEASE LOGIN OR SOMETHING</h1>
            </div>
        )
    }

    renderAccordingToLogin() {
        if(this.props.user) {
            return this.renderHome();
        } else {
            return this.renderUserLogin();
        }
    }


    render() {
        return (
            <div className='container'>
                <BrowserRouter>
                    { this.renderAccordingToLogin() }
                </BrowserRouter>
            </div>
        );
    }
}

function mapStateToProps(state) {
    // console.log("APP", state);
    return {user: state.auth};
}

App = connect(mapStateToProps, actions)(App);

export default App;