const passport = require('passport');
let currentUser;
module.exports = (app) => {
    app.get('/auth/google', passport.authenticate('google', {
        scope: ['profile', 'email']
    }));

    app.get('/auth/google/callback', passport.authenticate('google', {session: true}), (req, res) => {
        currentUser = req.user;
        res.redirect('/');
    });

    app.get('/api/logout', (req, res) => {
        // currentUser = null;
        req.logout(); // logout function is attached to the req object by passport
        res.redirect('/');
    });

    app.get('/api/current_user', (req, res) => {
        res.send(req.user);
    });
}