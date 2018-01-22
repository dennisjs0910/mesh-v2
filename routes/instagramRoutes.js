const passport = require('passport');
const InstagramClient = require('../services/InstagramClient');
let client = new InstagramClient();

module.exports = (app) => {
    app.get('/auth/instagram',passport.authenticate('instagram'));

    app.get('/auth/instagram/callback', 
        passport.authenticate('instagram', { failureRedirect: '/login' }),
        (req, res) => {
            console.log("call back");
            // Successful authentication, redirect home.
            res.redirect('/');
        }
    );

    app.get('/api/instagram/timeline',(req, res) => {
        client.init(req.user);
        client.getUserTimeLine().then((timeLine)=>{
            res.send(timeLine);
        });
    })
}