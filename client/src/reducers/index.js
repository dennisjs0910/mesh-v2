import { combineReducers } from 'redux';
import authReducer from './authReducer';
import twitterReducer from './twitterReducer';
import instagramReducer from './instagramReducer';
import sortReducer from './sortReducer';

export default combineReducers({
    auth: authReducer,
    twitter: twitterReducer,
    instagram: instagramReducer,
    sort: sortReducer
});