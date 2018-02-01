import { combineReducers } from 'redux';
import authReducer from './authReducer';
import twitterReducer from './twitterReducer';
import instagramReducer from './instagramReducer';
import postListReducer from './postListReducer';

export default combineReducers({
    auth: authReducer,
    twitter: twitterReducer,
    instagram: instagramReducer,
    aPosts: postListReducer
});