import {GET_INSTAGRAM_TIMELINE, GET_TWITTER_TIMELINE, SORT_TIMELINE} from "../actions/types";

export default (state = [], action) => {

    console.log(action);
    switch (action.type) {
        case SORT_TIMELINE: {
            console.log("in switch");
            return state.concat(_sortByTime(state));
        }
        case GET_INSTAGRAM_TIMELINE: {
            return state.concat(action.payload);
        }
        case GET_TWITTER_TIMELINE: {
            return state.concat(action.payload);
        }
        default:
            return state;
    }
}



const _sortByTime = (oData) => {
    console.log(oData);
    const twitter = oData.twitter, instagram = oData.instagram;

    if (!(twitter && instagram)) return null;

    let aResult = [], iTwitterCounter = 0, iInstagramCounter = 0;

    const oTwitterDate = _getTimeStamp(twitter[iTwitterCounter], "twitter");
    const oInstagramDate = _getTimeStamp(instagram[iInstagramCounter], "instagram");
    while (iTwitterCounter < twitter.length && iInstagramCounter < instagram.length) {
        if (oTwitterDate > oInstagramDate) {
            aResult.push(twitter[iTwitterCounter++]);
        }
        else {
            aResult.push(instagram[iInstagramCounter++]);
        }
    }

    if (iTwitterCounter < twitter.length)
        aResult = aResult.concat(twitter.slice(iTwitterCounter));
    if (iInstagramCounter < instagram.length)
        aResult = aResult.concat(instagram.slice(iInstagramCounter));


    return aResult;
};

const _getTimeStamp = (oData, sType) => {
    let date;
    switch (sType) {
        case "twitter": {
            date = oData.created_at;
            break;
        }
        case "instagram": {
            date = oData.created_time * 1000;
            break;
        }
        default: {
            date = "";
            break;
        }
    }
    return new Date(date);
};