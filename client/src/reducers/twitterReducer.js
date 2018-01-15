import { GET_TWITTER_TIMELINE } from '../actions/types';

export default function(state = null, action) {
    switch (action.type) {
        case GET_TWITTER_TIMELINE:
            return action.payload;
        default:
            return state;
    }
}