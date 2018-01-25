const passport = require('passport');
const RedditStrategy = require('passport-reddit').Strategy;
const mongoose = require('mongoose');
const User = mongoose.model('users');
const keys = require('../config/keys');

passport.use(new RedditStrategy({
    clientID: keys.redditConsumerKey,
    clientSecret: keys.redditConsumerSecret,
    callbackURL: "http://127.0.0.1:3000/auth/reddit/callback"
  },
  function(accessToken, refreshToken, profile, done) {
    User.findOrCreate({ redditId: profile.id }, function (err, user) {
      return done(err, user);
    });
  }
));