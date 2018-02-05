export const sortByTime = (oData) => {
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

function _getTimeStamp(oData, sType) {
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