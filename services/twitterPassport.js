const passport = require('passport');
const TwitterStrategy = require('passport-twitter').Strategy;
const mongoose = require('mongoose');
const User = mongoose.model('users');
const keys = require('../config/keys');

passport.use(new TwitterStrategy({
        consumerKey: keys.twitterConsumerKey,
        consumerSecret: keys.twitterConsumerSecret,
        proxy: true,
        callbackURL: "/auth/twitter/callback",
        passReqToCallback : true,
    },
    (req, token, tokenSecret, profile, done) => {
        let currentUser = req.user;
        console.log(currentUser)
        if (currentUser) {
            User.findByIdAndUpdate(
                currentUser._id,
                { twitterToken: token, twitterTokenSecret: tokenSecret},
                (err, user) => {
                    done(null, user);
                }
            )
        }
        console.log("user does not exist, or twitter authentication did not go through");
    }
));
