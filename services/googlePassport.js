const passport = require('passport');
const GoogleStrategy = require('passport-google-oauth20').Strategy;
const mongoose = require('mongoose');
const User = mongoose.model('users');
const keys = require('../config/keys');

passport.serializeUser((user, done) => {
    done(null, user.id);
});

let createModelSchema = function(profile) {
    if (profile) {
        return { 
            googleId: profile.id,
            name: profile.displayName,
            email: profile.emails && profile.emails[0] && profile.emails[0].value
        }
    }
    return {};
}

passport.deserializeUser((id, done) => {
    User.findById(id).then(user => {
        done(null, user);
    });
});

passport.use(
    new GoogleStrategy({
        clientID: keys.googleClientId,
        clientSecret: keys.googleClientSecret,
        proxy: true,
        callbackURL: '/auth/google/callback'
    }, (accessToken, refreshToken, profile, done) => {
        User.findOne({ googleId: profile.id })
            .then((existingUser) => {
                if (existingUser) {
                    done(null, existingUser);
                } else {
                    new User(createModelSchema(profile))
                        .save().then(user => done(null, user));
                }
            })
    })
);



