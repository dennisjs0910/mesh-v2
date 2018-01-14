const passport = require('passport');
const GoogleStrategy = require('passport-google-oauth20').Strategy;
const mongoose = require('mongoose');
const User = mongoose.model('users');
const keys = require('../config/keys');

var express = require('express')
  , util = require('util')
  , InstagramStrategy = require('passport-instagram').Strategy;

passport.use(
    new GoogleStrategy({
        clientID: keys.googleClientId,
        clientSecret: keys.googleClientSecret,
        proxy: true,
        callbackURL: '/auth/google/callback'
    }, (accessToken, refreshToken, profile, done) => {
        console.log("passport loaded");
        User.findOne({ googleId: profile.id }).then((existingUser) => {
            if (existingUser) {
                done(null, existingUser);
            } else {
                new User({ googleId: profile.id})
                    .save()
                    .then(user => done(null, user));
            }
        })
    })
);

passport.use(new InstagramStrategy({
    clientID: keys.instagramClientId,
    clientSecret: keys.instagramClientSecret,
    callbackURL: "https://www.instagram.com/_hannahlin/"
  },
  function(accessToken, refreshToken, profile, done) {
    console.log("passport loaded");
    User.findOrCreate({ instagramId: profile.id }, function (err, user) {
      return done(err, user);
    });
  }
));

passport.serializeUser((user, done) => {
    done(null, user.id);
});

passport.deserializeUser((id, done) => {
    User.findById(id).then(user => {
        done(null, user);
    });
});