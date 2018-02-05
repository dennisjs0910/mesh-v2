import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import reduxThunk from 'redux-thunk';
import App from './component/App';
import reducers from './reducers';

import axios from 'axios';
window.axios = axios;


const store = createStore(reducers, {}, applyMiddleware(reduxThunk));
store.subscribe(() => console.log(store.getState()));

ReactDOM.render(
    <Provider store={ store }>
        <App />
    </Provider>,
    document.querySelector('#root')
);