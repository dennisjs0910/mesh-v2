const passport = require('passport');
const InstagramStrategy = require('passport-instagram').Strategy;
const mongoose = require('mongoose');
const User = mongoose.model('users');
const keys = require('../config/keys');

passport.use(new InstagramStrategy({
        clientID: keys.instagramClientId,
        clientSecret: keys.instagramConsumerSecret,
        callbackURL: "/auth/instagram/callback",
        passReqToCallback : true,
    },
    (req, accessToken, refreshToken, profile, done) => {
        if (req.user) {

            User.findByIdAndUpdate(
                req.user._id,
                { instaToken: accessToken, instaId: profile.id },
                (err, user) => {
                    console.log("updated User");
                    done(null, user);
                }
            )
        }
    }
));
