import { combineReducers } from 'redux';
import authReducer from './authReducer';
import twitterReducer from './twitterReducer';

export default combineReducers({
    auth: authReducer,
    twitter: twitterReducer
});