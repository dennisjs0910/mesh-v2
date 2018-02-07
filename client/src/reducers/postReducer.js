import { SORT_TIMELINE } from '../actions/types';

export default function(state = [], action) {
	switch (action.type) {
		case SORT_TIMELINE: {
			const {key, data} = action.payload;
			return sortPost(key, data);
		}
		default:
			return state;
	}
}

const sortPost = (key, data) => {
	switch (key) {
		case "time":
			return _sortByTime(data);
		case "media":
			return _sortByMedia(data);
		default:
			return new Error("Wrong type");
	}
}

const _sortByTime = (data) => {
    const twitter = data.twitter, instagram = data.instagram;
    let aResult = [], iTwitterCounter = 0, iInstagramCounter = 0;

    if (!twitter && !instagram) return aResult;
    if (twitter === null) return instagram;
    if (instagram === null) return twitter;    

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

const _sortByMedia = (data) => {
	const twitter = data.twitter, instagram = data.instagram;
	let aResult = [], iTwitterCounter = 0, iInstagramCounter = 0;

	if (!twitter && !instagram) return aResult;
    if (twitter === null) return instagram;
    if (instagram === null) return twitter;
	
	return aResult.concat(twitter).concat(instagram);

}

const _getTimeStamp = (data, type) => {
    let date;
    switch (type) {
        case "twitter": {
            date = data.created_at;
            break;
        }
        case "instagram": {
            date = data.created_time * 1000;
            break;
        }
        default: {
            date = "";
            break;
        }
    }
    return new Date(date);
};