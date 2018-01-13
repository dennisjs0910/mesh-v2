const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const passport = require('passport');
const keys = require('./config/keys');


// Models
require('./models/User');

require('./services/passport');
// DATABASE PROXY to check go on mlab.com
mongoose.connect(keys.mongoURI);

const app = express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}))

app.use(passport.initialize());
app.use(passport.session());

require('./routes/googlePlusAuth')(app);

app.listen(5000);





