import axios from 'axios';
export const AUTH_CONSTANTS = "AUTH_SOCIAL_MEDIA";

export const authTwitter = () => {
    return function(dispatch) {
        axios.get('/auth/twitter').then((res) => {
            dispatch({ type: AUTH_CONSTANTS, payload: res.data });
        });
    }
};

export const authInstagram = () => {
    return function(dispatch) {
        axios.get('/auth/instagram').then((res) => {
            dispatch({ type: AUTH_CONSTANTS, payload: res.data });
        });
    }
};