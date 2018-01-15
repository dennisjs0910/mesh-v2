const passport = require('passport');
const TwitterClient = require('../services/TwitterClient');
let client = new TwitterClient();
module.exports = (app) => {
    app.get('/auth/twitter', passport.authenticate('twitter'));

    app.get('/auth/twitter/callback', passport.authenticate('twitter'),
        (req, res) => {
            res.redirect('/');
        }
    );

    app.get('/api/twitter/timeline', (req, res) => {
        client.init(req.user);
        client.getUserTimeLine().then((timeLine)=>{
            res.send(timeLine);
        });
    });
}


