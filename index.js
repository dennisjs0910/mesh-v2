const express = require('express');
const passport = require('passport');
const GoogleStrategy = require("passport-google-oauth20").Strategy;

const mongoose = require('mongoose');
const keys = require('./config/keys');


const app = express();
/**
*   app = Express App to register this route handler with
*   '/' = route (home uri)
*   req = Object representing incoming request
*   res = Object representing outgoing response
**/

// mongoose.connect(keys.mongoURI);

passport.use(
    new GoogleStrategy({
        clientID: keys.googleClientId,
        clientSecret: keys.googleClientSecret,
        callbackURL: '/auth/google/callback'
    }, (accessToken, refreshToken, profile, done) => {
        console.log('accessToken', accessToken);
        console.log('refreshToken', refreshToken);
        console.log('profile', profile);
        done();
    })
);

app.get('/', (req, res) => {
    res.send({hi : "Hello crew I am Dennis PLEASE WORK GOD DAMMIT"});
});


app.get('/auth/google', passport.authenticate('google', {
        scope: ['profile', 'email']
    })
)

app.get('/auth/google/callback', passport.authenticate('google'));
app.listen(5000);