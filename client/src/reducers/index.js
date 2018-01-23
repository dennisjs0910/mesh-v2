import { combineReducers } from 'redux';
import authReducer from './authReducer';
import twitterReducer from './twitterReducer';
import instagramReducer from './instagramReducer';

export default combineReducers({
    auth: authReducer,
    twitter: twitterReducer,
    instagram: instagramReducer
});