const passport = require('passport');

module.exports = (app) => {
    app.get('/auth/instagram',passport.authenticate('instagram'));

    app.get('/auth/instagram/callback', 
        passport.authenticate('instagram', { failureRedirect: '/login' }),
        (req, res) => {
            // Successful authentication, redirect home.
            res.redirect('/');
        }
    );
}