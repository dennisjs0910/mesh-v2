const passport = require('passport');
const InstagramStrategy = require('passport-instagram').Strategy;
const mongoose = require('mongoose');
const User = mongoose.model('users');
const keys = require('../config/keys');

passport.use(new InstagramStrategy({
    clientID: keys.instagramClientId,
    clientSecret: keys.instagramClientSecret,
    callbackURL: "/auth/instagram/callback",
    passReqToCallback : true,
  },
  (req, accessToken, refreshToken, profile, done) => {
    User.findOrCreate({ instagramId: profile.id }, function (err, user) {
      return done(err, user);
    });
  }
));
