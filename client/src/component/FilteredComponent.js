import React, { Component } from 'react';
import { connect } from 'react-redux';

class FilteredComponent extends Component {
    render() {
        let aResult = this._sortByTime(this.props);
        console.log(aResult);


        return <div>

        </div>
    }

    _sortByTime(oData) {
        const twitter = oData.twitter, instagram = oData.instagram;

        if (!(twitter && instagram)) return null;

        let aResult = [], iTwitterCounter = 0, iInstagramCounter = 0;
        const oTwitterDate = new Date(twitter[iTwitterCounter].created_at);
        const oInstagramDate = new Date(instagram[iInstagramCounter].created_time * 1000);
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
    }


}

let mapStateToProps = (state) => {
    return {
        twitter: state.twitter,
        instagram: state.instagram
    }
};

export default connect(mapStateToProps)(FilteredComponent);