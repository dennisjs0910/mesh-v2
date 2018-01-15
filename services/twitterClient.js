let Twitter = require('twitter');
const keys = require('../config/keys');

class TwitterClient {

    constructor() {
        this.engine = null;

    };

    init(user) {
        if (!this.engine) {
            this.engine = new Twitter({
              consumer_key: keys.twitterConsumerKey,
              consumer_secret: keys.twitterConsumerSecret,
              access_token_key: user.twitterToken,
              access_token_secret: user.twitterTokenSecret
            });
        }
    }

    getUserTimeLine() {
        return new Promise((resolve, reject) => {
            let params = {screen_name: 'nodejs'};
            this.engine.get('statuses/user_timeline', params, 
                (error, tweets, response) => {
                    if (!error) {
                        resolve(tweets);
                    } else {
                        reject(error);
                    }
                }
            );
        });
    }
}

module.exports = TwitterClient;

// let twitterClient = new TwitterClient();
