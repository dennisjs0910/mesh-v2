const passport = require('passport');
const RedditClient = require('../services/RedditClient');
let client = new RedditClient();

module.exports = (app) => {
    app.get('/auth/reddit', function(req, res, next){
        req.session.state = crypto.randomBytes(32).toString('hex');
        passport.authenticate('reddit', {
          state: req.session.state,
          duration: 'permanent',
        })(req, res, next);
      });
       
      app.get('/auth/reddit/callback', function(req, res, next){
        // Check for origin via state token 
        if (req.query.state == req.session.state){
          passport.authenticate('reddit', {
            successRedirect: '/',
            failureRedirect: '/login'
          })(req, res, next);
        }
        else {
          next( new Error 403 );
        }
      });
};