const passport = require('passport');

module.exports = (app) => {
    app.get('/auth/twitter', passport.authenticate('twitter'));

    app.get('/auth/twitter/callback', passport.authenticate('twitter'),
        (req, res) => {
            // Successful authentication, redirect home.
            res.redirect('/');
        }
    );

    app.get('/twitter/user', (req, res) => {
        res.send(req.user);
        redirect('/');
    });
}


