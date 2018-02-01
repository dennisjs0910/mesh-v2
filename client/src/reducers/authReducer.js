import { FETCH_USER } from '../actions/types';
import { AUTH_CONSTANTS } from '../actions/authAction';

export default function(state = null, action) {
    switch (action.type) {
        case FETCH_USER:
        case AUTH_CONSTANTS:
            return action.payload || false;
        default:
            return state;
    }
}