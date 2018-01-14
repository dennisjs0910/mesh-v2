let Twitter = require('twitter');
const keys = require('../config/keys');

let client = new Twitter({
  consumer_key: keys.twitterConsumerKey,
  consumer_secret: keys.twitterConsumerSecret,
  access_token_key: keys.twitterAccessToken,
  access_token_secret: keys.twitterAccesssTokenSecret
});
 
let params = {screen_name: 'nodejs'};
client.get('statuses/user_timeline', params, function(error, tweets, response) {
  if (!error) {
    console.log(tweets);
  } else {
    console.log(error);
  }
});